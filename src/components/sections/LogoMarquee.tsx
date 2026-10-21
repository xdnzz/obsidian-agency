'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';

const partnerBrands = [
  { name: 'VERTEX', category: 'Fintech Cloud' },
  { name: 'NEXUS AI', category: 'Machine Learning' },
  { name: 'HORIZON', category: 'Edge Compute' },
  { name: 'PULSE DATA', category: 'Real-time Analytics' },
  { name: 'HYPERION', category: 'Autonomous Systems' },
  { name: 'STRATA', category: 'Cloud Infrastructure' },
];

export const LogoMarquee: React.FC = () => {
  return (
    <section className="py-14 border-y border-white/5 bg-slate-950/40 overflow-hidden">
      <Container size="lg">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
          Trusted by technical founders and product teams worldwide
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {partnerBrands.map((brand) => (
            <div
              key={brand.name}
              className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/[0.02] transition-colors group cursor-default"
            >
              <span className="text-sm sm:text-base font-black tracking-widest text-slate-400 group-hover:text-white transition-colors font-mono">
                {brand.name}
              </span>
              <span className="text-[10px] text-slate-600 group-hover:text-slate-400 transition-colors">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};