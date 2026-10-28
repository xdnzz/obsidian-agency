import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { GradientGenerator } from '@/components/studio/GradientGenerator';

export const metadata: Metadata = {
  title: 'Generate',
  description: 'Generate an Obsidian gradient, move the light, edit the stops, and copy the CSS.',
};

export default function GeneratePage() {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-6xl px-5 pt-32 pb-20 sm:px-8">
        <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Generate</p>
        <h1 className="font-display mt-4 max-w-3xl text-5xl leading-none font-semibold tracking-[-0.05em] sm:text-7xl">
          Make the lamp, then copy it.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
          Generate a gradient in the studio family, move where the light sits, and rename the stops by editing their color. The CSS is ready when you are.
        </p>
        <GradientGenerator className="mt-12" />
        <p className="mt-8 text-sm text-white/55">
          Prefer a finished room?{' '}
          <Link href="/library" className="font-semibold text-white">
            Open the library
          </Link>
          .
        </p>
      </div>
      <SiteFooter />
    </div>
  );
}
