'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AmbientGlow } from '@/components/ui/AmbientGlow';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 border-t border-white/5 overflow-hidden text-center">
      <AmbientGlow color="violet" size="lg" className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <AmbientGlow color="fuchsia" size="md" className="top-1/3 left-1/3 -translate-x-1/2" />

      <Container size="md" className="relative z-10 flex flex-col items-center">
        <Badge variant="radiant" className="mb-6">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>Start a Conversation</span>
        </Badge>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Ready to elevate your product with{' '}
          <GradientText variant="radiant">uncompromising craft?</GradientText>
        </h2>

        <p className="text-sm sm:text-base text-slate-400 max-w-xl mb-10 leading-relaxed font-normal">
          Whether you need an architecture audit, a complete design system, or a high-velocity production sprint, let’s build something extraordinary together.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 w-full sm:w-auto">
          <Link
            href="mailto:danilosdinizz@gmail.com"
            className="w-full sm:w-auto"
          >
            <Button variant="radiant" size="lg" className="w-full sm:w-auto">
              <Mail className="w-4 h-4" />
              <span>Get in Touch via Email</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/danilosdinizz"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto"
          >
            <Button variant="glass" size="lg" className="w-full sm:w-auto">
              <span>Connect on LinkedIn</span>
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
          <MapPin className="w-3.5 h-3.5 text-slate-400" />
          <span>Recife, Brazil • Working Worldwide (Remote)</span>
        </div>
      </Container>
    </section>
  );
};