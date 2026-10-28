import Link from 'next/link';
import { Studio } from '@/components/home/Studio';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/motion/Reveal';

const notes = [
  { title: 'Screen', body: 'The wash fills the first view. Type sits in the dark, not on a plate.' },
  { title: 'Card', body: 'The same stops, cropped. A card should still name the collection it came from.' },
  { title: 'Phone', body: 'The origin of the light has to survive a narrow frame, or the page goes flat.' },
];

export function StudioPage({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 pt-32 pb-24 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">{eyebrow}</p>
          <h1 className="font-display mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.045em] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">{lede}</p>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {notes.map((note, index) => (
            <Reveal key={note.title} delay={index * 70}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                <h2 className="font-display text-xl font-semibold tracking-[-0.03em]">{note.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/70">{note.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Studio className="mt-12" />
        <Reveal className="mt-16">
          <div className="flex flex-col items-start justify-between gap-4 rounded-[28px] border border-white/10 px-6 py-8 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-6 text-white/70">
              The library holds the full pages. The method explains where each lamp sits.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/generate" className="inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-black">
                Generate
              </Link>
              <Link href="/library" className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold">
                Library
              </Link>
              <Link href="/method" className="inline-flex h-11 items-center rounded-full border border-white/20 px-5 text-sm font-semibold">
                Method
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
      <SiteFooter />
    </div>
  );
}
