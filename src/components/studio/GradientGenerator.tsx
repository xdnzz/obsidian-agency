'use client';

import { useRef, useState } from 'react';
import {
  generateFamily,
  gradientCss,
  gradientExample,
  gradientImage,
  gradientTokens,
  nameStop,
  type GradientDraft,
  type GradientStop,
} from '@/lib/generate-gradient';
import { cn } from '@/lib/utils';

type Snippet = 'css' | 'tokens' | 'example';

const snippetLabel: Record<Snippet, string> = {
  css: 'CSS',
  tokens: 'tokens',
  example: 'example',
};

function snippetText(draft: GradientDraft, kind: Snippet) {
  if (kind === 'css') return gradientCss(draft);
  if (kind === 'tokens') return gradientTokens(draft);
  return gradientExample(draft);
}

function Field({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}) {
  const id = label.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return (
    <label htmlFor={id} className="grid gap-2 text-sm font-semibold">
      <span className="flex items-center justify-between gap-3 text-white/80">
        {label}
        <span className="font-mono text-xs font-normal text-white/55">{value}</span>
      </span>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-white"
      />
    </label>
  );
}

export function GradientGenerator({ className }: { className?: string }) {
  const seed = useRef(1);
  const [draft, setDraft] = useState<GradientDraft>(() => generateFamily(1));
  const [copied, setCopied] = useState<Snippet | null>(null);
  const [status, setStatus] = useState('Freebies family, seed 1');
  const [fallback, setFallback] = useState('');
  const timer = useRef(0);
  const image = gradientImage(draft);

  function announce(message: string) {
    window.clearTimeout(timer.current);
    setStatus(message);
  }

  function generate() {
    seed.current += 1;
    const next = generateFamily(seed.current);
    setDraft(next);
    setCopied(null);
    setFallback('');
    announce(`New ${next.kind} gradient, ${next.stops.length} stops`);
  }

  function patch(partial: Partial<GradientDraft>) {
    setDraft((current) => ({ ...current, ...partial }));
    setCopied(null);
    setFallback('');
  }

  function updateStop(id: string, partial: Partial<GradientStop>) {
    setDraft((current) => ({
      ...current,
      stops: current.stops.map((stop) => {
        if (stop.id !== id) return stop;
        const next = { ...stop, ...partial };
        if (partial.color) {
          const taken = new Set(current.stops.filter((item) => item.id !== id).map((item) => item.name));
          next.name = nameStop(partial.color, taken);
        }
        return next;
      }),
    }));
    setCopied(null);
    setFallback('');
  }

  function addStop() {
    setDraft((current) => {
      if (current.stops.length >= 7) return current;
      const sorted = [...current.stops].sort((a, b) => a.at - b.at);
      let gap = 0;
      let at = 50;
      for (let index = 0; index < sorted.length - 1; index += 1) {
        const size = sorted[index + 1].at - sorted[index].at;
        if (size > gap) {
          gap = size;
          at = Math.round((sorted[index].at + sorted[index + 1].at) / 2);
        }
      }
      const taken = new Set(current.stops.map((stop) => stop.name));
      const color = '#c9a4c4';
      return {
        ...current,
        stops: [
          ...current.stops,
          { id: `custom-${seed.current}-${current.stops.length}`, name: nameStop(color, taken), color, at },
        ],
      };
    });
    announce('Stop added');
  }

  function removeStop(id: string) {
    setDraft((current) => {
      if (current.stops.length <= 2) return current;
      return { ...current, stops: current.stops.filter((stop) => stop.id !== id) };
    });
    announce('Stop removed');
  }

  async function copy(kind: Snippet) {
    const text = snippetText(draft, kind);
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setFallback('');
      setCopied(kind);
      announce(`${snippetLabel[kind]} copied`);
      timer.current = window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
      setFallback(text);
      announce('Clipboard unavailable. The snippet is below.');
    }
  }

  return (
    <div className={className}>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(300px,0.85fr)]">
        <div className="relative min-h-[32rem] overflow-hidden rounded-[32px] border border-white/15 p-4 sm:p-6">
          <span aria-hidden="true" className="absolute inset-0" style={{ backgroundColor: '#000', backgroundImage: image }} />
          <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/25" />
          <div className="relative flex h-full min-h-[30rem] flex-col justify-between">
            <p className="text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">
              {draft.kind} · {draft.stops.length} stops
            </p>
            <div className="grid grid-cols-[minmax(0,1.3fr)_92px] gap-3 sm:grid-cols-[minmax(0,1.4fr)_120px]">
              <div className="relative h-36 overflow-hidden rounded-2xl border border-white/20 sm:h-44">
                <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: image }} />
                <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-[0.14em] uppercase">Screen</span>
              </div>
              <div className="relative row-span-2 overflow-hidden rounded-[24px] border border-white/20">
                <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: image }} />
                <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-[0.14em] uppercase">Phone</span>
              </div>
              <div className="relative h-20 overflow-hidden rounded-2xl border border-white/20">
                <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: image }} />
                <span className="absolute bottom-3 left-3 text-[10px] font-semibold tracking-[0.14em] uppercase">Card</span>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/15 bg-white/[0.03] p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="font-display text-3xl leading-none font-semibold tracking-[-0.04em]">Generator</h2>
            <button
              type="button"
              onClick={generate}
              className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-black"
            >
              Generate
            </button>
          </div>

          <div role="group" aria-label="Gradient type" className="mt-6 grid grid-cols-2 gap-2">
            {(['radial', 'linear'] as const).map((kind) => (
              <button
                key={kind}
                type="button"
                aria-pressed={draft.kind === kind}
                onClick={() => patch({ kind })}
                className={cn(
                  'h-11 rounded-full border text-sm font-semibold capitalize',
                  draft.kind === kind ? 'border-white bg-white text-black' : 'border-white/20 text-white',
                )}
              >
                {kind}
              </button>
            ))}
          </div>

          <div className="mt-6 grid gap-4">
            {draft.kind === 'linear' ? (
              <Field label="Angle" value={draft.angle} min={0} max={360} onChange={(angle) => patch({ angle })} />
            ) : (
              <>
                <Field label="Origin X" value={draft.originX} min={0} max={100} onChange={(originX) => patch({ originX })} />
                <Field label="Origin Y" value={draft.originY} min={0} max={120} onChange={(originY) => patch({ originY })} />
                <Field label="Width" value={draft.sizeX} min={40} max={140} onChange={(sizeX) => patch({ sizeX })} />
                <Field label="Height" value={draft.sizeY} min={40} max={140} onChange={(sizeY) => patch({ sizeY })} />
              </>
            )}
          </div>

          <div className="mt-6">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Stops</p>
              <button
                type="button"
                onClick={addStop}
                disabled={draft.stops.length >= 7}
                className="text-sm font-semibold text-white/80 disabled:text-white/30"
              >
                Add stop
              </button>
            </div>
            <ul className="mt-3 grid gap-3">
              {draft.stops.map((stop) => (
                <li key={stop.id} className="grid grid-cols-[auto_1fr_auto] items-center gap-3">
                  <label className="sr-only" htmlFor={`${stop.id}-color`}>
                    {stop.name} color
                  </label>
                  <input
                    id={`${stop.id}-color`}
                    type="color"
                    value={stop.color}
                    onChange={(event) => updateStop(stop.id, { color: event.target.value })}
                    className="size-10 cursor-pointer rounded-lg border border-white/20 bg-transparent p-1"
                  />
                  <label className="grid gap-1 text-xs font-semibold text-white/70">
                    <span className="flex justify-between capitalize">
                      {stop.name}
                      <span className="font-mono font-normal">{stop.at}%</span>
                    </span>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      aria-label={`${stop.name} position`}
                      value={stop.at}
                      onChange={(event) => updateStop(stop.id, { at: Number(event.target.value) })}
                      className="h-2 w-full cursor-pointer accent-white"
                    />
                  </label>
                  <button
                    type="button"
                    onClick={() => removeStop(stop.id)}
                    disabled={draft.stops.length <= 2}
                    className="text-xs font-semibold text-white/55 disabled:text-white/25"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {(['css', 'tokens', 'example'] as const).map((kind) => (
              <button
                key={kind}
                type="button"
                onClick={() => copy(kind)}
                className={cn(
                  'inline-flex h-11 min-w-[7.75rem] items-center justify-center rounded-full px-4 text-sm font-semibold',
                  kind === 'css' ? 'bg-white text-black' : 'border border-white/25 text-white',
                )}
              >
                {copied === kind ? 'Copied' : `Copy ${snippetLabel[kind]}`}
              </button>
            ))}
          </div>
          {fallback ? (
            <pre tabIndex={0} className="mt-4 max-h-40 overflow-auto rounded-2xl bg-black/70 p-3 text-xs leading-5 text-white/80">
              {fallback}
            </pre>
          ) : null}
        </div>
      </div>
    </div>
  );
}
