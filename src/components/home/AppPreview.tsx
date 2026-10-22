import { Download, Gift, Plus, Sparkles, SwatchBook } from 'lucide-react';

const nav = [
  { label: 'Library', icon: Sparkles, active: true },
  { label: 'Freebies', icon: Gift, active: false },
  { label: 'Collections', icon: SwatchBook, active: false },
  { label: 'Downloads', icon: Download, active: false },
];

const gradients = [
  {
    name: 'Freebies',
    background:
      'radial-gradient(90% 85% at 8% 100%, #ffe9c5 0%, #f0d2be 14%, #c9a4c4 26%, #7c43b5 44%, #5012b0 58%, #14032c 72%, #000 86%)',
  },
  {
    name: 'Soloprenuers',
    background:
      'radial-gradient(120% 46% at 50% -12%, rgba(124,67,181,0.9) 0%, rgba(80,12,176,0.45) 32%, transparent 64%), radial-gradient(140% 70% at 50% 120%, #e7c6ea 0%, #7c43b5 28%, #5012b0 48%, #000 72%)',
  },
  {
    name: 'Conversions',
    background:
      'radial-gradient(80% 80% at 0% 20%, #a881cc 0%, #7c47be 28%, #5012b0 48%, #000 72%)',
  },
  {
    name: 'Downloads',
    background:
      'radial-gradient(90% 90% at 100% 80%, #fff6e8 0%, #d3bcda 12%, #a881cc 28%, #5012b0 52%, #000 74%)',
  },
  {
    name: 'Love & coffee',
    background:
      'radial-gradient(80% 75% at 0% 110%, #fff6e8 0%, #d3bcda 14%, #7c47be 36%, #5012b0 56%, #000 78%)',
  },
  {
    name: 'AI startups',
    background:
      'radial-gradient(90% 70% at 50% 0%, rgba(140,50,210,0.95) 0%, rgba(80,12,176,0.55) 36%, #000 72%)',
  },
];

function Mark({ id, size = 20 }: { id: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={`url(#${id})`} />
      <defs>
        <radialGradient
          id={id}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(10 10) rotate(-180) scale(10)"
        >
          <stop offset="0.411275" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function Swatch({
  name,
  background,
  className,
}: {
  name: string;
  background: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/15 bg-black ${className ?? ''}`}
      style={{ backgroundImage: background }}
    >
      <p className="font-display absolute bottom-4 left-4 text-xl leading-none font-semibold tracking-[-0.03em] text-white">
        {name}
      </p>
    </div>
  );
}

function SheetPreview() {
  const [featured, ...rest] = gradients;

  return (
    <div aria-hidden="true" className="w-full rounded-[28px] border border-white/80 bg-black/75 p-4">
      <div className="flex items-center gap-2">
        <Mark id="preview-sheet-mark" size={16} />
        <p className="text-sm leading-none font-semibold text-white">Obsidian</p>
      </div>
      <Swatch name={featured.name} background={featured.background} className="mt-4 h-28" />
      <div className="mt-3 grid grid-cols-2 gap-3">
        {rest.slice(0, 2).map((gradient) => (
          <Swatch key={gradient.name} name={gradient.name} background={gradient.background} className="h-24" />
        ))}
      </div>
    </div>
  );
}

export function AppPreview({
  placement = 'side',
}: {
  placement?: 'side' | 'below' | 'center' | 'sheet';
}) {
  if (placement === 'sheet') return <SheetPreview />;

  const [featured, ...rest] = gradients;

  const frame = {
    side: 'absolute top-[157px] left-[693px] w-[1154px] bg-black/80',
    below: 'absolute top-[445px] left-[159px] w-[1154px] bg-black/80',
    center: 'absolute top-[577px] left-1/2 w-[1170px] -translate-x-1/2 bg-black/70',
  }[placement];

  return (
    <div
      aria-hidden="true"
      className={`${frame} flex h-[850px] items-center justify-center rounded-3xl border border-white/80 p-6`}
    >
      <div className="flex h-full w-full items-start overflow-hidden rounded-lg bg-white/[0.04]">
        <aside className="flex h-full w-[251px] shrink-0 flex-col gap-8 overflow-hidden border-r border-white/10 bg-black/30 px-6 py-8">
          <div className="flex items-center gap-2.5">
            <Mark id="preview-mark" />
            <p className="text-base leading-none font-semibold text-white">Obsidian</p>
          </div>
          <div className="flex w-full flex-col gap-6">
            <div className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full border border-white/15 px-6">
              <Plus className="size-4 text-white/90" />
              <p className="text-lg leading-none font-medium text-white/95">Get started</p>
            </div>
            <div className="flex w-full flex-col gap-0.5">
              {nav.map((item) => (
                <div
                  key={item.label}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 ${item.active ? 'bg-white/10' : ''}`}
                >
                  <item.icon className="size-4 text-white/80" />
                  <p className={`text-base leading-none text-white/95 ${item.active ? 'font-semibold' : 'font-medium'}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <section className="flex h-full min-w-0 flex-1 flex-col gap-6 overflow-hidden p-8">
          <div className="flex w-full items-center justify-between">
            <p className="text-xl leading-none font-semibold text-white/95">Library</p>
            <p className="rounded-full border border-white/15 px-3 py-1.5 text-xs leading-none font-medium text-white/70">
              48 gradients
            </p>
          </div>

          <Swatch name={featured.name} background={featured.background} className="h-[220px] shrink-0" />

          <div className="grid min-h-0 flex-1 grid-cols-3 gap-4">
            {rest.map((gradient) => (
              <Swatch key={gradient.name} name={gradient.name} background={gradient.background} className="min-h-[180px]" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
