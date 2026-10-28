import Link from 'next/link';
import { collections } from '@/lib/collections';
import { stories } from '@/lib/stories';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/motion/Reveal';

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function CollectionDossier({ slug }: { slug: string }) {
  const index = collections.findIndex((collection) => collection.slug === slug);
  const collection = collections[index];
  const story = stories[slug];
  if (!collection || !story) return null;

  const next = collections[(index + 1) % collections.length];
  const notes = [
    { label: 'Intent', body: story.intent },
    { label: 'Light', body: story.light },
    { label: 'Use', body: story.use },
    { label: 'Leave out', body: story.avoid },
  ];

  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="dossier-title">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">
            Collection {pad(index + 1)}
          </p>
          <h2 id="dossier-title" className="font-display mt-4 max-w-3xl text-4xl leading-none font-semibold tracking-[-0.045em] sm:text-6xl">
            {story.headline}
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {notes.map((note, noteIndex) => (
            <Reveal key={note.label} delay={noteIndex * 70}>
              <article className="h-full rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">{note.label}</p>
                <p className="mt-4 text-base leading-7 text-white/75">{note.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10" aria-labelledby="stops-title">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Stops</p>
            <h2 id="stops-title" className="font-display mt-4 max-w-xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              Named colors, in the order the light falls.
            </h2>
          </Reveal>
          <ol className="mt-12">
            {collection.stops.map((stop, stopIndex) => (
              <Reveal key={stop.name}>
                <li className="grid items-center gap-4 border-t border-white/10 py-5 sm:grid-cols-[8rem_1fr_auto]">
                  <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">{pad(stopIndex + 1)}</p>
                  <p className="font-display text-3xl font-semibold tracking-[-0.04em] capitalize">{stop.name}</p>
                  <p className="flex items-center gap-3 font-mono text-sm text-white/70">
                    <span className="size-8 rounded-full border border-white/20" style={{ backgroundColor: stop.color }} />
                    {stop.color}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="wear-title">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">On a surface</p>
          <h2 id="wear-title" className="font-display mt-4 max-w-2xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
            The same wash, worn three ways.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
          <Reveal>
            <div className="relative min-h-80 overflow-hidden rounded-[28px] border border-white/15 p-6 sm:min-h-96">
              <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: collection.background }} />
              <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="relative flex h-full min-h-72 flex-col justify-between">
                <p className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">Screen</p>
                <div>
                  <p className="font-display text-5xl leading-none font-semibold tracking-[-0.05em]">{collection.name}</p>
                  <Link href="/get-started" className="mt-6 inline-flex h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-black">
                    Copy this gradient
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid gap-4">
            <Reveal delay={80}>
              <div className="relative min-h-44 overflow-hidden rounded-[28px] border border-white/15 p-5">
                <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: collection.background }} />
                <span aria-hidden="true" className="absolute inset-0 bg-black/35" />
                <div className="relative flex h-full min-h-36 flex-col justify-between">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase">Card</p>
                  <p className="font-display text-3xl font-semibold tracking-[-0.04em]">{collection.stops.length} stops</p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative min-h-44 overflow-hidden rounded-[28px] border border-white/15 p-5">
                <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: collection.background }} />
                <span aria-hidden="true" className="absolute inset-0 bg-black/45" />
                <div className="relative flex h-full min-h-36 flex-col justify-between">
                  <p className="text-xs font-semibold tracking-[0.16em] uppercase">Phone</p>
                  <p className="max-w-[12rem] text-sm leading-6 text-white/85">{collection.description}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8">
        <Reveal>
          <Link
            href={next.href}
            className="group relative mx-auto flex min-h-72 max-w-6xl flex-col justify-end overflow-hidden rounded-[32px] border border-white/15 p-8 sm:min-h-80 sm:p-12"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none"
              style={{ backgroundImage: next.background }}
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/15" />
            <span className="relative text-xs font-semibold tracking-[0.16em] text-white/75 uppercase">Next room</span>
            <span className="font-display relative mt-3 text-5xl leading-none font-semibold tracking-[-0.05em] sm:text-7xl">
              {next.name}
            </span>
          </Link>
        </Reveal>
      </section>
      <SiteFooter />
    </div>
  );
}
