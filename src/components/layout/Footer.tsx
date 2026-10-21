'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, Mail } from 'lucide-react';
import { Container } from '@/components/ui/Container';

function GitHub({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedIn({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export const Footer: React.FC<{ year: number }> = ({ year }) => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 py-12 text-slate-400 text-xs">
      <Container size="lg" className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-6 h-6 rounded-md bg-gradient-to-tr from-violet-600 to-fuchsia-500 p-0.5">
            <div className="w-full h-full bg-slate-950 rounded-[5px] flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>
          <span className="text-sm font-bold tracking-wider text-white uppercase font-sans">
            Obsidian Studio
          </span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-500 border border-white/5 ml-2">
            v1.0.0
          </span>
        </div>

        <p className="text-slate-500 text-center sm:text-left">
          © {year} Danilo Diniz. Engineered with pixel-perfect precision.
        </p>

        <div className="flex items-center gap-4 text-slate-400">
          <Link
            href="https://github.com/xdnzz"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
            title="GitHub"
          >
            <GitHub className="w-4 h-4" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/danilosdinizz"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
            title="LinkedIn"
          >
            <LinkedIn className="w-4 h-4" />
          </Link>
          <Link
            href="mailto:danilosdinizz@gmail.com"
            className="p-2 rounded-lg hover:text-white hover:bg-white/5 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </footer>
  );
};