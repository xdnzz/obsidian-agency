'use client';

import React from 'react';
import { ArrowRight, Sparkles, Code2, Layers, Cpu } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { AmbientGlow } from '@/components/ui/AmbientGlow';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-36 sm:pt-44 pb-20 overflow-hidden flex flex-col items-center text-center">
      <AmbientGlow color="violet" size="lg" className="top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <AmbientGlow color="cyan" size="md" className="top-1/3 left-1/4 -translate-x-1/2" />

      <Container size="lg" className="flex flex-col items-center">
        <Badge variant="radiant" className="mb-8">
          <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
          <span>Next-Gen Digital Craft & Engineering</span>
        </Badge>

        <h1 className="max-w-4xl text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
          Crafting digital products with{' '}
          <GradientText variant="radiant">radiant precision.</GradientText>
        </h1>

        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-slate-400 leading-relaxed mb-10 font-normal">
          We bridge pixel-perfect brand identity with high-performance frontend architecture, engineering bespoke web applications that redefine digital presence.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
          <Button variant="radiant" size="lg" className="w-full sm:w-auto">
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button variant="glass" size="lg" className="w-full sm:w-auto">
            <span>Explore Selected Works</span>
          </Button>
        </div>

        <div className="relative w-full max-w-5xl rounded-2xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl shadow-violet-950/40">
          <Card className="rounded-[14px] p-4 sm:p-8 text-left space-y-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="text-[11px] font-mono text-slate-400 ml-3">
                  obsidian.studio/runtime
                </span>
              </div>

              <Badge variant="emerald" withPulse>
                Live 60 FPS
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-violet-400">
                  <Code2 className="w-4 h-4" />
                  <span className="text-xs font-semibold text-slate-200">Architecture</span>
                </div>
                <p className="text-xl font-bold text-white tracking-tight">Zero Bottlenecks</p>
                <p className="text-xs text-slate-400">Decoupled reactive state with strict typing.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-fuchsia-400">
                  <Layers className="w-4 h-4" />
                  <span className="text-xs font-semibold text-slate-200">Design System</span>
                </div>
                <p className="text-xl font-bold text-white tracking-tight">Pixel Fidelity</p>
                <p className="text-xs text-slate-400">Compound primitives honoring design tokens.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Cpu className="w-4 h-4" />
                  <span className="text-xs font-semibold text-slate-200">Engineering</span>
                </div>
                <p className="text-xl font-bold text-white tracking-tight">Sub-10ms Latency</p>
                <p className="text-xs text-slate-400">Edge-first delivery and asset optimization.</p>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </section>
  );
};