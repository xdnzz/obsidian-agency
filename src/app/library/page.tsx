import type { Metadata } from 'next';
import { LibraryGrid } from '@/components/collection/LibraryGrid';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { Reveal } from '@/components/motion/Reveal';

export const metadata: Metadata = {
  title: 'Library',
  description: 'Six Obsidian Studio collections, each built as a full page rather than a swatch.',
};

export default function LibraryPage() {
  return (
    <div className="bg-black text-white">
      <section className="mx-auto max-w-6xl px-5 pt-36 pb-16 sm:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.16em] text-white/50 uppercase">Library</p>
          <h1 className="font-display mt-4 max-w-3xl text-5xl leading-none font-semibold tracking-[-0.05em] sm:text-7xl">
            Every room in the family.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
            Open a collection at full size. The gradient is the page, not a thumbnail you have to imagine.
          </p>
        </Reveal>
        <div className="mt-14">
          <LibraryGrid featured />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
