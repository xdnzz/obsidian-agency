'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';
import {
  collectionCss,
  collectionExample,
  collectionTokens,
  collections,
  type Collection,
} from '@/lib/collections';
import { cn } from '@/lib/utils';

type Snippet = 'css' | 'tokens' | 'example';

const snippetLabel: Record<Snippet, string> = {
  css: 'CSS',
  tokens: 'tokens',
  example: 'example',
};

function snippetText(collection: Collection, kind: Snippet) {
  if (kind === 'css') return collectionCss(collection);
  if (kind === 'tokens') return collectionTokens(collection);
  return collectionExample(collection);
}

function Wash({ slug }: { slug: string }) {
  return (
    <span className="pointer-events-none absolute inset-0" aria-hidden="true">
      {collections.map((collection) => (
        <span
          key={collection.slug}
          className="absolute inset-0 transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
          style={{
            backgroundImage: collection.background,
            opacity: collection.slug === slug ? 1 : 0,
          }}
        />
      ))}
    </span>
  );
}

function Surface({
  slug,
  label,
  className,
  children,
}: {
  slug: string;
  label: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn('relative overflow-hidden border border-white/25 shadow-[0_24px_60px_rgba(0,0,0,0.35)]', className)}>
      <Wash slug={slug} />
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
      <span className="absolute top-3 left-3 z-10 rounded-full bg-black/55 px-2 py-1 text-[10px] font-semibold tracking-[0.14em] text-white uppercase">
        {label}
      </span>
      <div className="relative h-full">{children}</div>
    </div>
  );
}

export function Studio({ className }: { className?: string }) {
  const [slug, setSlug] = useState(collections[0].slug);
  const [copied, setCopied] = useState<Snippet | null>(null);
  const [status, setStatus] = useState('');
  const [fallback, setFallback] = useState('');
  const timer = useRef(0);
  const collection = collections.find((item) => item.slug === slug) ?? collections[0];

  useEffect(() => () => window.clearTimeout(timer.current), []);

  function select(next: string) {
    const chosen = collections.find((item) => item.slug === next);
    window.clearTimeout(timer.current);
    setSlug(next);
    setCopied(null);
    setFallback('');
    setStatus(chosen ? `${chosen.name} selected` : '');
  }

  async function copy(kind: Snippet) {
    const text = snippetText(collection, kind);
    window.clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(text);
      setFallback('');
      setCopied(kind);
      setStatus(`${snippetLabel[kind]} copied`);
      timer.current = window.setTimeout(() => setCopied(null), 2000);
    } catch {
      setCopied(null);
      setFallback(text);
      setStatus('Clipboard unavailable. The snippet is below.');
    }
  }

  return (
    <div className={className}>
      <p className="sr-only" aria-live="polite">
        {status}
      </p>
      <div id="studio-stage" className="relative overflow-hidden rounded-[32px] border border-white/15">
        <Wash slug={collection.slug} />
        <div className="relative grid items-end gap-8 p-4 sm:p-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(260px,0.85fr)] lg:p-10">
          <div aria-hidden="true" className="grid grid-cols-[minmax(0,1.45fr)_minmax(108px,0.7fr)] items-stretch gap-3 sm:gap-4">
            <Surface slug={collection.slug} label="Screen" className="h-40 rounded-2xl sm:h-52">
              <div className="flex h-full flex-col justify-between">
                <div className="flex items-center justify-end gap-1.5 px-3 pt-3">
                  <span className="size-1.5 rounded-full bg-white/70" />
                  <span className="size-1.5 rounded-full bg-white/40" />
                  <span className="size-1.5 rounded-full bg-white/25" />
                </div>
                <div className="px-3 pb-3 sm:px-4 sm:pb-4">
                  <p className="font-display text-lg leading-none font-semibold tracking-[-0.04em] text-white sm:text-3xl">
                    {collection.name}
                  </p>
                  <span className="mt-3 inline-flex h-7 items-center rounded-full bg-white px-3 text-[11px] font-semibold text-black">
                    Get started
                  </span>
                </div>
              </div>
            </Surface>
            <Surface slug={collection.slug} label="Phone" className="row-span-2 h-full min-h-56 rounded-[28px] sm:min-h-64">
              <div className="flex h-full flex-col justify-between px-3 pt-8 pb-3">
                <span className="mx-auto block h-1 w-10 rounded-full bg-white/50" />
                <p className="font-display text-base leading-none font-semibold tracking-[-0.04em] text-white sm:text-xl">
                  {collection.name}
                </p>
              </div>
            </Surface>
            <Surface slug={collection.slug} label="Card" className="h-24 rounded-2xl sm:h-28">
              <div className="flex h-full items-end justify-between gap-3 px-4 pb-4">
                <p className="text-[10px] font-semibold tracking-[0.16em] text-white/80 uppercase">Obsidian</p>
                <p className="font-display text-right text-lg leading-none font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                  {collection.name}
                </p>
              </div>
            </Surface>
          </div>

          <div key={collection.slug} className="animate-studio-rise motion-reduce:animate-none rounded-3xl border border-white/15 bg-black/60 p-5 backdrop-blur-md sm:p-6">
            <p className="font-display text-3xl leading-none font-semibold tracking-[-0.04em] sm:text-4xl">{collection.name}</p>
            <p className="mt-3 text-sm leading-6 text-white/75">{collection.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(['css', 'tokens', 'example'] as const).map((kind) => (
                <button
                  key={kind}
                  type="button"
                  onClick={() => copy(kind)}
                  className={cn(
                    'inline-flex h-11 min-w-[7.75rem] items-center justify-center rounded-full px-4 text-sm font-semibold',
                    kind === 'css'
                      ? 'bg-white text-black'
                      : 'border border-white/25 text-white hover:border-white/50',
                  )}
                >
                  {copied === kind ? 'Copied' : `Copy ${snippetLabel[kind]}`}
                </button>
              ))}
            </div>
            <Link href={collection.href} className="mt-4 inline-flex text-sm font-semibold text-white/80 hover:text-white">
              Open page
            </Link>
            {fallback ? (
              <pre
                tabIndex={0}
                className="mt-4 max-h-40 overflow-auto rounded-2xl bg-black/70 p-3 text-xs leading-5 text-white/80"
              >
                {fallback}
              </pre>
            ) : null}
          </div>
        </div>
      </div>

      <div role="group" aria-label="Collections" className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {collections.map((item) => {
          const pressed = item.slug === collection.slug;
          return (
            <button
              key={item.slug}
              type="button"
              aria-pressed={pressed}
              onClick={() => select(item.slug)}
              className={cn(
                'flex items-center gap-3 rounded-2xl border px-3 py-2.5 text-left transition-colors',
                pressed ? 'border-white bg-white text-black' : 'border-white/10 bg-white/[0.03] text-white hover:border-white/30',
              )}
            >
              <span
                aria-hidden="true"
                className="size-9 shrink-0 rounded-lg border border-black/10"
                style={{ backgroundImage: item.background }}
              />
              <span className="text-sm leading-tight font-semibold">{item.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
