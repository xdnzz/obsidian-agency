import Link from 'next/link';
import { collections } from '@/lib/collections';

const studioLinks = [
  { href: '/generate', label: 'Generate' },
  { href: '/library', label: 'Library' },
  { href: '/method', label: 'Method' },
  { href: '/demo', label: 'Studio' },
  { href: '/get-started', label: 'Get started' },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold">Obsidian Studio</p>
          <p className="mt-3 max-w-xs text-sm leading-6 text-white/55">
            A curated collection of gradients. Six rooms, one family, copied as CSS.
          </p>
        </div>
        <nav aria-label="Collections" className="grid gap-2 text-sm text-white/70">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Collections</p>
          {collections.map((collection) => (
            <Link key={collection.slug} href={collection.href} className="hover:text-white">
              {collection.name}
            </Link>
          ))}
        </nav>
        <nav aria-label="Studio" className="grid content-start gap-2 text-sm text-white/70">
          <p className="text-xs font-semibold tracking-[0.16em] text-white/40 uppercase">Studio</p>
          {studioLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
