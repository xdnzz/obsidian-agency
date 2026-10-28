'use client';

import React, { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { collections } from '@/lib/collections';

const links = [
  { href: '/library', label: 'Library' },
  { href: '/method', label: 'Method' },
  { href: '/generate', label: 'Generate' },
];

function Mark({ id }: { id: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill={`url(#${id})`} />
      <defs>
        <radialGradient id={id} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10 10) rotate(-180) scale(10)">
          <stop offset="0.411275" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" />
        </radialGradient>
      </defs>
    </svg>
  );
}

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
    const before = header?.getBoundingClientRect().width ?? 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const growth = header ? Math.round(header.getBoundingClientRect().width - before) : 0;
    if (header && growth > 0) {
      const pad = getComputedStyle(header).paddingRight;
      header.style.paddingRight = `calc(${pad} + ${growth}px)`;
    }
    if (menu && growth > 0) menu.style.right = `${growth}px`;
    const inerted: HTMLElement[] = [];

    for (const node of Array.from(document.body.children)) {
      if (!(node instanceof HTMLElement)) continue;
      if (node === header || node === menu || node.hasAttribute('inert')) continue;
      node.setAttribute('inert', '');
      inerted.push(node);
    }

    menu?.querySelector<HTMLElement>('[data-menu-focus]')?.focus();

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
      if (header) header.style.paddingRight = '';
      if (menu) menu.style.right = '';
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
        scrolled && !isMobileMenuOpen ? 'border-b border-white/10 bg-black pb-4' : ''
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
            <Mark id="obsidian-mark" />
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

          <div className="flex items-center gap-2">
            <Link
              href="/get-started"
              className="hidden h-10 items-center rounded-full bg-white px-4 text-sm font-semibold text-black lg:inline-flex"
            >
              Get started
            </Link>
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
              className="fixed inset-0 z-40 bg-black lg:hidden"
            >
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute -top-28 -right-20 size-80 rounded-full bg-[radial-gradient(circle,rgba(124,67,181,0.55),transparent_68%)]" />
                <div className="absolute -bottom-24 -left-16 size-72 rounded-full bg-[radial-gradient(circle,rgba(255,233,197,0.18),transparent_70%)]" />
              </div>
              <div className="relative mx-auto flex h-full w-full max-w-[1170px] flex-col px-4 pt-28 pb-8 sm:px-6">
                <div className="min-h-0 flex-1 overflow-y-auto px-4">
                  <p
                    style={{ animationDelay: '0ms' }}
                    className="animate-studio-rise motion-reduce:animate-none text-[11px] font-semibold tracking-[0.18em] text-white/40 uppercase"
                  >
                    Studio
                  </p>
                  <nav aria-label="Menu" className="mt-4">
                    {links.map((link, index) => {
                      const active = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          data-menu-focus={index === 0 ? '' : undefined}
                          aria-current={active ? 'page' : undefined}
                          onClick={closeMenu}
                          style={{ animationDelay: `${60 + index * 50}ms` }}
                          className={`animate-studio-rise motion-reduce:animate-none group flex items-baseline gap-4 py-2.5 ${
                            active ? 'text-white' : 'text-white/80 hover:text-white'
                          }`}
                        >
                          <span className={`w-7 shrink-0 text-[11px] font-medium tracking-[0.16em] tabular-nums ${active ? 'text-white' : 'text-white/30'}`}>
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="font-display text-[2.6rem] leading-none font-semibold tracking-[-0.045em]">{link.label}</span>
                        </Link>
                      );
                    })}
                  </nav>

                  <p
                    style={{ animationDelay: '240ms' }}
                    className="animate-studio-rise motion-reduce:animate-none mt-12 text-[11px] font-semibold tracking-[0.18em] text-white/40 uppercase"
                  >
                    Collections
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {collections.map((collection, index) => {
                      const active = pathname === collection.href;
                      return (
                        <li
                          key={collection.slug}
                          style={{ animationDelay: `${290 + index * 45}ms` }}
                          className="animate-studio-rise motion-reduce:animate-none"
                        >
                          <Link
                            href={collection.href}
                            aria-current={active ? 'page' : undefined}
                            onClick={closeMenu}
                            className={`text-sm leading-6 ${active ? 'text-white' : 'text-white/50 hover:text-white'}`}
                          >
                            {collection.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p
                    style={{ animationDelay: '560ms' }}
                    className="animate-studio-rise motion-reduce:animate-none max-w-xs text-sm leading-6 text-white/55"
                  >
                    Six rooms, one family. Start with the open set.
                  </p>
                  <Link
                    href="/get-started"
                    onClick={closeMenu}
                    style={{ animationDelay: '620ms' }}
                    className="animate-studio-rise motion-reduce:animate-none mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-white text-sm font-semibold text-black"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </header>
  );
};
