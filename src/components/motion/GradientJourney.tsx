'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { collections } from '@/lib/collections';

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function GradientJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduce(media.matches);
    apply();
    media.addEventListener('change', apply);
    return () => media.removeEventListener('change', apply);
  }, []);

  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const distance = section.offsetHeight - window.innerHeight;
      const next = distance <= 0 ? 0 : Math.min(1, Math.max(0, -section.getBoundingClientRect().top / distance));
      setProgress(next);
    };
    const onScroll = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [reduce]);

  if (reduce) {
    return (
      <section aria-labelledby="journey-title" className="border-y border-white/10 bg-black">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">The library</p>
          <h2 id="journey-title" className="font-display mt-4 max-w-2xl text-4xl leading-none font-semibold tracking-[-0.04em] sm:text-6xl">
            Six rooms. One family.
          </h2>
          <ol className="mt-12 grid gap-4">
            {collections.map((collection, index) => (
              <li key={collection.slug}>
                <Link
                  href={collection.href}
                  className="relative flex min-h-48 flex-col justify-end overflow-hidden rounded-[28px] border border-white/15 p-6"
                >
                  <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: collection.background }} />
                  <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/75 to-black/10" />
                  <span className="relative text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">{pad(index + 1)}</span>
                  <span className="font-display relative mt-2 text-4xl font-semibold tracking-[-0.04em]">{collection.name}</span>
                  <span className="relative mt-2 max-w-md text-sm leading-6 text-white/80">{collection.description}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  const last = collections.length - 1;
  const scaled = progress * last;
  const index = Math.min(last, Math.floor(scaled + 0.0001));
  const blend = Math.min(1, Math.max(0, scaled - index));
  const current = collections[index] ?? collections[0];

  function goTo(itemIndex: number) {
    const section = sectionRef.current;
    if (!section || last <= 0) return;
    const distance = section.offsetHeight - window.innerHeight;
    const top = section.offsetTop + (itemIndex / last) * distance;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  return (
    <section ref={sectionRef} aria-labelledby="journey-title" className="relative h-[240vh] bg-black">
      <div className="sticky top-0 h-dvh overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-x-5 top-24 h-[46vh] overflow-hidden rounded-[36px] border border-white/10 sm:inset-x-10">
          {collections.map((collection, itemIndex) => {
            let opacity = 0;
            if (itemIndex === index) opacity = 1 - (index === last ? 0 : blend);
            if (itemIndex === index + 1) opacity = blend;
            return (
              <div
                key={collection.slug}
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundColor: '#000', backgroundImage: collection.background, opacity }}
              />
            );
          })}
        </div>
        <div className="relative z-10 flex h-full flex-col justify-end">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 pt-24 pb-8 sm:px-8 sm:pb-10">
          <div className="flex items-center justify-between text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">
            <p>Scroll the library</p>
            <p>
              {pad(index + 1)} / {pad(collections.length)}
            </p>
          </div>
          <div>
            <h2 id="journey-title" className="font-display max-w-4xl text-5xl leading-none font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {current.name}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/85 sm:text-lg">{current.description}</p>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <Link
              href={current.href}
              className="inline-flex h-12 w-fit shrink-0 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black"
            >
              Open {current.name}
            </Link>
            <ol aria-label="Collections in this sequence" className="flex w-full min-w-0 items-center justify-between gap-1 sm:flex-1 lg:max-w-md">
              {collections.map((collection, itemIndex) => {
                const active = itemIndex === index;
                return (
                  <li key={collection.slug} className={active ? 'min-w-0' : undefined}>
                    <button
                      type="button"
                      onClick={() => goTo(itemIndex)}
                      aria-current={active ? 'step' : undefined}
                      aria-label={collection.name}
                      className={`flex h-9 items-center justify-center rounded-full text-[11px] font-semibold tabular-nums transition-colors ${
                        active
                          ? 'gap-2 bg-white px-3 text-black'
                          : 'w-9 text-white/40 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {pad(itemIndex + 1)}
                      {active ? <span className="truncate font-medium tracking-[-0.03em]">{collection.name}</span> : null}
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
