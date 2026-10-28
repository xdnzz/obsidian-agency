'use client';

import { useState } from 'react';
import Link from 'next/link';
import { collections } from '@/lib/collections';

export function RequestDrop() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [slug, setSlug] = useState(collections[0].slug);
  const chosen = collections.find((collection) => collection.slug === slug) ?? collections[0];

  return (
    <div className="bg-black px-5 pt-32 pb-20 text-white sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Next drop</p>
          <h1 className="font-display mt-4 text-5xl leading-none font-semibold tracking-[-0.05em] sm:text-7xl">
            Tell us which room you are building.
          </h1>
          <p className="mt-5 max-w-md text-base leading-7 text-white/70">
            This form stays in the browser. It does not create an account. When you send it, the chosen collection is ready to open in the studio.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-white/15 p-6 sm:p-8">
          <span aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: chosen.background }} />
          <span aria-hidden="true" className="absolute inset-0 bg-black/65" />
          {sent ? (
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">Ready</p>
              <p className="font-display mt-4 text-4xl leading-none font-semibold tracking-[-0.04em]">{chosen.name}</p>
              <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                {name ? `${name}, open` : 'Open'} the studio and copy {chosen.name}.
                {email ? `A note for ${email} stays on this page only.` : null}
              </p>
              <Link href="/get-started" className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-semibold text-black">
                Copy {chosen.name}
              </Link>
            </div>
          ) : (
            <form
              className="relative grid gap-4"
              onSubmit={(event) => {
                event.preventDefault();
                setSent(true);
              }}
            >
              <label className="grid gap-2 text-sm font-semibold">
                Name
                <input
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  autoComplete="name"
                  className="h-12 rounded-2xl border border-white/20 bg-black/50 px-4 font-normal text-white outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Email
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  autoComplete="email"
                  className="h-12 rounded-2xl border border-white/20 bg-black/50 px-4 font-normal text-white outline-none"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold">
                Collection
                <select
                  value={slug}
                  onChange={(event) => setSlug(event.target.value)}
                  className="h-12 rounded-2xl border border-white/20 bg-black/50 px-4 font-normal text-white outline-none"
                >
                  {collections.map((collection) => (
                    <option key={collection.slug} value={collection.slug}>
                      {collection.name}
                    </option>
                  ))}
                </select>
              </label>
              <button type="submit" className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-black">
                Prepare the studio
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
