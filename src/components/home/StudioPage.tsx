import { Studio } from '@/components/home/Studio';

export function StudioPage({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <div className="bg-black px-5 pt-32 pb-24 text-white sm:px-8">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">{eyebrow}</p>
        <h1 className="font-display mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.045em] sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">{lede}</p>
        <Studio className="mt-12" />
        <p className="mt-16 text-sm text-white/50">Obsidian Studio. A curated collection of gradients.</p>
      </div>
    </div>
  );
}
