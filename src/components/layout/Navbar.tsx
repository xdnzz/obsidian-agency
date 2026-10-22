'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/soloprenuers', label: 'Soloprenuers' },
  { href: '/ai-startups', label: 'AI startups' },
  { href: '/conversions', label: 'Conversions' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/love-coffee', label: 'Love & coffee' },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:px-6"
      style={{ viewTransitionName: 'site-header' }}
    >
      <div className="pointer-events-auto relative z-50 w-full max-w-[1170px]">
        <nav className="flex items-center justify-between rounded-full border border-white/15 bg-black/35 py-1.5 pr-1.5 pl-4 shadow-[0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <Link href="/" className="flex shrink-0 items-center gap-2">
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
            <span className="text-sm leading-none font-semibold whitespace-nowrap text-white">
              Obsidian Studio
            </span>
          </Link>

          <div className="hidden items-center gap-8 text-sm leading-none font-semibold whitespace-nowrap text-white/90 lg:flex">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors hover:text-white ${pathname === link.href ? 'text-white' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </div>

      {isMounted
        ? createPortal(
            <div
              id="mobile-menu"
              className={`fixed inset-0 z-40 bg-[#070709] transition-opacity duration-300 lg:hidden ${
                isMobileMenuOpen
                  ? 'pointer-events-auto visible opacity-100'
                  : 'pointer-events-none invisible opacity-0'
              }`}
            >
              <nav className="mx-auto flex h-full w-full max-w-md flex-col px-6 pt-28 pb-8">
                <div className="flex flex-col">
                  {links.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={`border-b border-white/10 py-4 text-[1.75rem] leading-none font-semibold tracking-[-0.03em] transition-colors ${
                          active ? 'text-white' : 'text-white/55 hover:text-white'
                        }`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </nav>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
};
