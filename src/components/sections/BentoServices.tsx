'use client';

import React from 'react';
import {
  Layers,
  Zap,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { AmbientGlow } from '@/components/ui/AmbientGlow';

export const BentoServices: React.FC = () => {
  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <AmbientGlow color="fuchsia" size="lg" className="top-1/3 right-0 translate-x-1/3" />
      <AmbientGlow color="cyan" size="md" className="bottom-10 left-0 -translate-x-1/3" />

      <Container size="lg">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Badge variant="glow">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Specialized Capabilities</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            Engineered for teams that refuse to{' '}
            <GradientText variant="violet">compromise on craft.</GradientText>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl font-normal leading-relaxed">
            From design system governance to zero-latency realtime interfaces, we execute with end-to-end technical rigor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card glowOnHover className="md:col-span-2 relative">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/20">
                  <Layers className="w-5 h-5" />
                </div>
                <Badge variant="radiant">Core Discipline</Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl">
                Design Systems & Token Architecture
              </CardTitle>
              <CardDescription className="text-sm">
                We bridge Figma to production code with strict design tokens, accessible primitives, and zero drift across releases.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Accessibility</span>
                  <p className="text-sm font-bold text-slate-200">WCAG AAA</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Type Safety</span>
                  <p className="text-sm font-bold text-slate-200">100% Strict</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Primitives</span>
                  <p className="text-sm font-bold text-slate-200">Headless Slot</p>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/80 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Tokens</span>
                  <p className="text-sm font-bold text-slate-200">Multi-Theme</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card glowOnHover className="relative">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-cyan-400 font-semibold">100/100</span>
              </div>
              <CardTitle>Core Web Vitals</CardTitle>
              <CardDescription>
                Sub-second First Contentful Paint, optimized asset bundles, and zero layout shift.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Largest Contentful Paint</span>
                  <span className="text-emerald-400 font-bold">0.6s</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div className="w-[95%] h-full bg-emerald-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Cumulative Layout Shift</span>
                  <span className="text-emerald-400 font-bold">0.00</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-slate-900 overflow-hidden">
                  <div className="w-full h-full bg-emerald-500 rounded-full" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card glowOnHover className="relative">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <Badge variant="glass">Real-time</Badge>
              </div>
              <CardTitle>AI Interface Engineering</CardTitle>
              <CardDescription>
                Streaming LLM responses, optimistic client mutations, and multimodal audio waveforms.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-white/5 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between text-slate-500">
                  <span>Stream Buffer</span>
                  <span className="text-emerald-400">Connected</span>
                </div>
                <p className="text-slate-300">
                  Optimistic state with graceful rollback on timeout.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card glowOnHover className="md:col-span-2 relative">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <Badge variant="emerald">Enterprise Grade</Badge>
              </div>
              <CardTitle className="text-xl sm:text-2xl">
                Async RFCs & API Contract Co-Design
              </CardTitle>
              <CardDescription className="text-sm">
                We align with backend and product engineering through concise RFCs, shared TypeScript domain schemas, and automated test coverage.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-white/5">
                  Small Reversible Releases
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-white/5">
                  Vitest & RTL Suites
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-white/5">
                  Figma-to-Code Fidelity
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 text-xs font-mono text-slate-300 border border-white/5">
                  Keyboard Ergonomics
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
};