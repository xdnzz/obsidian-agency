'use client';

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
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

function focusableIn(root: ParentNode | null) {
  if (!root) return [];
  return Array.from(root.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')).filter(
    (element) => element.getClientRects().length > 0,
  );
}

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function useScrolled() {
  return useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener('scroll', onStoreChange, { passive: true });
      return () => window.removeEventListener('scroll', onStoreChange);
    },
    () => window.scrollY > 12,
    () => false,
  );
}

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const isClient = useIsClient();
  const scrolled = useScrolled();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const restoreFocusRef = useRef(false);
  const initialPath = useRef<string | null>(null);

  if (pathname !== menuPath) {
    setMenuPath(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    if (initialPath.current === null || initialPath.current === pathname) {
      initialPath.current = pathname;
      return;
    }
    initialPath.current = pathname;
    const main = document.getElementById('main');
    main?.removeAttribute('inert');
    main?.focus();
  }, [pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      if (restoreFocusRef.current) {
        restoreFocusRef.current = false;
        menuButtonRef.current?.focus();
      }
      return;
    }

    const header = headerRef.current;
    const menu = document.getElementById('mobile-menu');
    const inerted: HTMLElement[] = [];

    for (const node of Array.from(document.body.children)) {
      if (!(node instanceof HTMLElement)) continue;
      if (node === header || node === menu || node.hasAttribute('inert')) continue;
      node.setAttribute('inert', '');
      inerted.push(node);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu?.querySelector<HTMLElement>('a[href]')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        restoreFocusRef.current = true;
        setIsMobileMenuOpen(false);
        return;
      }
      if (event.key !== 'Tab') return;

      const items = [...focusableIn(header), ...focusableIn(menu)];
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      inerted.forEach((element) => element.removeAttribute('inert'));
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => {
    restoreFocusRef.current = true;
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 transition-colors sm:px-6 ${
        scrolled ? 'border-b border-white/10 bg-black pb-4' : ''
      }`}
      style={{ viewTransitionName: 'site-header' }}
    >
      <div className="pointer-events-auto relative z-50 w-full max-w-[1170px]">
        <nav aria-label="Primary" className="flex items-center justify-between rounded-full border border-white/15 bg-black/35 py-1.5 pr-1.5 pl-4 shadow-[0_8px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className={`flex shrink-0 items-center gap-2 rounded-full py-2 ${pathname === '/' ? 'underline decoration-2 underline-offset-4' : ''}`}
          >
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
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  aria-current={active ? 'page' : undefined}
                  className={`rounded-full py-2 transition-colors hover:text-white ${active ? 'text-white underline decoration-2 underline-offset-4' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center">
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => {
                if (isMobileMenuOpen) {
                  closeMenu();
                  return;
                }
                setIsMobileMenuOpen(true);
              }}
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

      {isClient
        ? createPortal(
            <div
              id="mobile-menu"
              role={isMobileMenuOpen ? 'dialog' : undefined}
              aria-modal={isMobileMenuOpen || undefined}
              aria-label={isMobileMenuOpen ? 'Menu' : undefined}
              hidden={!isMobileMenuOpen}
              className="fixed inset-0 z-40 bg-[#070709] lg:hidden"
            >
              <nav aria-label="Menu" className="mx-auto flex h-full w-full max-w-md flex-col px-6 pt-28 pb-8">
                <div className="flex flex-col">
                  {links.map((link) => {
                    const active = pathname === link.href;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={`border-b border-white/10 py-4 text-[1.75rem] leading-none font-semibold tracking-[-0.03em] transition-colors ${
                          active ? 'text-white underline decoration-2 underline-offset-8' : 'text-white/55 hover:text-white'
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
