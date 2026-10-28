import Link from 'next/link';
import { LibraryGrid } from '@/components/collection/LibraryGrid';
import { FaqList } from '@/components/home/FaqList';
import { Studio } from '@/components/home/Studio';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { GradientJourney } from '@/components/motion/GradientJourney';
import { Reveal } from '@/components/motion/Reveal';
import { collections } from '@/lib/collections';

const pains = [
  {
    title: 'A swatch with no relatives',
    body: 'One pretty gradient rarely matches the next screen. The library is a set, so the second page already belongs to the first.',
  },
  {
    title: 'Color that only works in the file',
    body: 'Each collection is shown as a full page, not a thumbnail. You see the cream, the violet, and the black together before you commit.',
  },
  {
    title: 'A blank canvas every Monday',
    body: 'Freebies is the starting set. The other five are the directions a project can go without inventing a new palette.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Choose a collection',
    body: 'Six named directions. Pick the one that matches the page you are making.',
  },
  {
    number: '02',
    title: 'See it at full size',
    body: 'Open the page. The gradient fills the screen, with the library preview sitting in the same frame.',
  },
  {
    number: '03',
    title: 'Start from there',
    body: 'Get started is the same step on every page. One action, not a different offer per collection.',
  },
];

const questions = [
  {
    q: 'What is Obsidian Studio?',
    a: 'A curated gradient library. Each collection is a finished background, named for the kind of page it suits.',
  },
  {
    q: 'Where should I start?',
    a: 'Freebies. It is the home collection. The library holds the other five when the page needs a different mood.',
  },
  {
    q: 'Why are the collections separate pages?',
    a: 'So you can judge a gradient as a page, not as a chip. Soloprenuers, AI startups, Conversions, Downloads, and Love & coffee each hold one.',
  },
  {
    q: 'Does this work on a phone?',
    a: 'Yes. Small screens get a stacked layout and a full-screen menu. The desktop frame stays for wide screens.',
  },
  {
    q: 'Is there a price on this page?',
    a: 'No. There is no checkout here. Get started is the next step, and it is the same button from the hero to the end of the page.',
  },
  {
    q: 'Can I just look around?',
    a: 'Yes. Every collection in the library is a real page. Nothing asks you to sign in before you can see it.',
  },
];

function Eyebrow({ children }: { children: string }) {
  return <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">{children}</p>;
}

export function LandingStory() {
  return (
    <div className="bg-black text-white">
      <div className="marquee overflow-hidden border-y border-white/10 py-4" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {collections.map((collection) => (
                <span
                  key={`${copy}-${collection.name}`}
                  className="font-display px-6 text-sm font-semibold tracking-[-0.02em] text-white/55"
                >
                  {collection.name}
                  <span className="pl-6 text-white/25">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <GradientJourney />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8" aria-labelledby="problem-title">
        <Reveal>
          <Eyebrow>The usual way</Eyebrow>
          <h2 id="problem-title" className="font-display mt-4 max-w-2xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
            Stop collecting gradients that do not belong together.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 80}>
              <article className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-display text-xl font-semibold tracking-[-0.03em]">{pain.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{pain.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/10" aria-labelledby="manifesto-title">
        <div
          aria-hidden="true"
          className="drift-orb pointer-events-none absolute top-1/2 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle, #c9a4c4 0%, #7c43b5 38%, #5012b0 62%, transparent 72%)',
          }}
        />
        <Reveal className="relative mx-auto max-w-4xl px-5 py-28 sm:px-8 sm:py-36">
          <Eyebrow>One palette</Eyebrow>
          <h2
            id="manifesto-title"
            className="font-display mt-5 text-4xl leading-[0.95] font-semibold tracking-[-0.045em] sm:text-6xl"
          >
            The second screen should already know the first.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/70">
            Freebies, Soloprenuers, AI startups, Conversions, Downloads, and Love & coffee are the same family, seen from six rooms.
          </p>
        </Reveal>
      </section>

      <section id="how-it-works" className="scroll-mt-28 border-y border-white/10" aria-labelledby="steps-title">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 id="steps-title" className="font-display mt-4 max-w-xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              Three steps, then you are in the design.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 90}>
                <li>
                  <p className="font-display text-sm font-semibold text-white/40">{step.number}</p>
                  <h3 className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/70">{step.body}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="library" className="scroll-mt-28" aria-labelledby="library-title">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <Eyebrow>The library</Eyebrow>
            <h2 id="library-title" className="font-display mt-4 max-w-2xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              Open a room before you copy it.
            </h2>
          </Reveal>
          <div className="mt-12">
            <LibraryGrid />
          </div>
        </div>
      </section>

      <section id="studio" className="scroll-mt-28" aria-labelledby="studio-title">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal>
            <Eyebrow>The studio</Eyebrow>
            <h2 id="studio-title" className="font-display mt-4 max-w-2xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              Wear one gradient three ways.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
              Pick a collection. The background, the screen, the card, and the phone change together. Then copy the gradient.
            </p>
          </Reveal>
          <Studio className="mt-12" />
          <Link href="/generate" className="mt-6 inline-flex h-12 items-center rounded-full border border-white/20 px-6 text-sm font-semibold">
            Generate your own
          </Link>
        </div>
      </section>

      <section id="faq" className="scroll-mt-28 border-t border-white/10" aria-labelledby="faq-title">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Eyebrow>Questions</Eyebrow>
            <h2 id="faq-title" className="font-display mt-4 text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-5xl">
              Before you start.
            </h2>
          </div>
          <FaqList questions={questions} />
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8" aria-labelledby="close-title">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-white/15 px-6 py-16 sm:px-12 sm:py-20">
          <div aria-hidden="true" className="absolute inset-0">
            <div
              className="wash-a absolute inset-0"
              style={{ backgroundImage: collections[0].background }}
            />
            <div
              className="wash-b absolute inset-0"
              style={{ backgroundImage: collections[2].background }}
            />
            <div
              className="wash-c absolute inset-0"
              style={{ backgroundImage: collections[4].background }}
            />
          </div>
          <div aria-hidden="true" className="absolute inset-0 bg-black/60" />
          <div className="relative max-w-xl">
            <h2 id="close-title" className="font-display text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-6xl">
              Start with Freebies.
            </h2>
            <p className="mt-5 text-base leading-7 text-white/80">
              The same next step as the hero. Open the library, then move through the collections when the page needs a different mood.
            </p>
            <Link
              href="/get-started"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] font-semibold text-black"
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
