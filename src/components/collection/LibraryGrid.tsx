import Link from 'next/link';
import { collections } from '@/lib/collections';
import { Reveal } from '@/components/motion/Reveal';

function pad(value: number) {
  return String(value).padStart(2, '0');
}

export function LibraryGrid({ featured = false }: { featured?: boolean }) {
  const items = featured ? collections : collections;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((collection, index) => (
        <Reveal key={collection.slug} delay={(index % 2) * 90} className={index === 0 && featured ? 'md:col-span-2' : undefined}>
          <Link
            href={collection.href}
            className={`group relative flex flex-col justify-end overflow-hidden rounded-[28px] border border-white/15 p-6 sm:p-8 ${
              index === 0 && featured ? 'min-h-[28rem]' : 'min-h-72'
            }`}
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              style={{ backgroundImage: collection.background }}
            />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10" />
            <span className="relative text-xs font-semibold tracking-[0.16em] text-white/70 uppercase">{pad(index + 1)}</span>
            <span className="font-display relative mt-3 block text-4xl leading-none font-semibold tracking-[-0.045em] sm:text-5xl">
              {collection.name}
            </span>
            <span className="relative mt-3 block max-w-md text-sm leading-6 text-white/80">{collection.description}</span>
            <span className="relative mt-6 text-sm font-semibold text-white">Open collection</span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
