import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Method',
  description: 'How an Obsidian Studio collection is built: one light, named stops, and black as the room.',
};

const principles = [
  {
    number: '01',
    title: 'Light has an address',
    body: 'Every collection is a radial gradient with one origin. The origin decides where the eye lands before the type does.',
  },
  {
    number: '02',
    title: 'Stops have names',
    body: 'Cream, blush, lilac, violet, indigo, plum, black. A stop you can say out loud is a stop you can reuse on the next screen.',
  },
  {
    number: '03',
    title: 'Black is the room',
    body: 'Color is the lamp. The last stop is black so interface, type, and chrome have somewhere quiet to sit.',
  },
  {
    number: '04',
    title: 'One family, six rooms',
    body: 'Freebies through Love & coffee do not invent a new palette. They move the same light to a different corner of the page.',
  },
];

export default function MethodPage() {
  return (
    <div className="bg-black text-white">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(80% 80% at 100% 0%, #ffe9c5 0%, #c9a4c4 18%, #7c43b5 40%, #14032c 68%, #000 86%)',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-36 pb-24 sm:px-8 sm:pb-32">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">Method</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[0.95] font-semibold tracking-[-0.05em] sm:text-7xl">
              A gradient is a room with one lamp.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/80">
              Obsidian Studio does not collect unrelated swatches. Each page is a decision about where the light sits, and what the dark is for.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="principles-title">
        <Reveal>
          <h2 id="principles-title" className="font-display max-w-xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
            Four rules, then the copy button.
          </h2>
        </Reveal>
        <ol className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={(index % 2) * 80}>
              <li className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
                <p className="font-display text-sm font-semibold text-white/40">{principle.number}</p>
                <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.04em]">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{principle.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="border-t border-white/10" aria-labelledby="sequence-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Sequence</p>
            <h2 id="sequence-title" className="font-display mt-4 text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              From the first screen to the quiet one.
            </h2>
          </Reveal>
          <ol className="grid gap-3">
            {[
              ['Freebies', 'The open set. Start here.'],
              ['Soloprenuers', 'A practice that needs a room.'],
              ['AI startups', 'A product glow, kept small.'],
              ['Conversions', 'Light aimed at the decision.'],
              ['Downloads', 'Daylight in the corner of a file.'],
              ['Love & coffee', 'The same palette, lower.'],
            ].map(([title, body], index) => (
              <Reveal key={title}>
                <li className="flex items-baseline justify-between gap-6 border-b border-white/10 py-4">
                  <p className="font-display text-2xl font-semibold tracking-[-0.04em]">{title}</p>
                  <p className="text-right text-sm text-white/55">
                    {`${String(index + 1).padStart(2, '0')} · ${body}`}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <Reveal>
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[32px] border border-white/15 bg-white/[0.03] px-6 py-10 sm:flex-row sm:items-center sm:px-10">
            <div>
              <h2 className="font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">See the lamp move.</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                The home sequence scrolls through all six. The studio lets you copy the one you stop on.
              </p>
            </div>
            <div className="flex gap-3">
              <Link href="/" className="inline-flex h-12 items-center rounded-full bg-white px-5 text-sm font-semibold text-black">
                Scroll the library
              </Link>
              <Link href="/demo" className="inline-flex h-12 items-center rounded-full border border-white/20 px-5 text-sm font-semibold">
                Open the studio
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
      <SiteFooter />
    </div>
  );
}
