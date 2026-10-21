'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/soloprenuers', label: 'Soloprenuers' },
  { href: '/ai-startups', label: 'AI startups' },
  { href: '/conversions', label: 'Conversions' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/love-coffee', label: 'Love & coffee' },
];

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
      style={{ viewTransitionName: 'site-header' }}
    >
      <div className="pointer-events-auto w-full max-w-[1170px]">
        <nav className="flex items-center justify-between rounded-[56px] border-[0.5px] border-white/20 py-2 pr-2 pl-4 backdrop-blur-[14px]">
          <Link href="/" className="flex shrink-0 items-center gap-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="10" cy="10" r="10" fill="url(#obsidian-mark)" />
              <defs>
                <radialGradient
                  id="obsidian-mark"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(10 10) rotate(-180) scale(10)"
                >
                  <stop offset="0.411275" stopColor="white" stopOpacity="0" />
                  <stop offset="1" stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
            <span className="text-sm leading-none font-semibold whitespace-nowrap text-white/95">
              Obsidian Studio
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm leading-none font-semibold whitespace-nowrap text-white/90 md:flex">
            {links.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/signup"
            className="hidden items-center justify-center rounded-[40px] bg-white px-4 py-3 text-sm leading-none font-semibold text-black transition-opacity hover:opacity-90 md:inline-flex"
          >
            Sign up
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="inline-flex size-9 items-center justify-center rounded-full text-white/90 md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {isMobileMenuOpen && (
          <div className="mt-2 flex flex-col gap-4 rounded-[28px] border-[0.5px] border-white/20 bg-[#06070a]/90 p-6 text-sm font-semibold text-white/90 backdrop-blur-[14px] md:hidden">
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link
              href="/signup"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-[40px] bg-white px-4 py-3 text-sm leading-none font-semibold text-black"
            >
              Sign up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
