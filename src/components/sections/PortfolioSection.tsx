'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, Sparkles, Activity, Layers, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AmbientGlow } from '@/components/ui/AmbientGlow';

const projects = [
  {
    id: 'cadence-studio',
    title: 'Cadence Studio',
    category: 'Real-Time AI & Audio Canvas',
    description:
      'High-performance meeting intelligence workspace featuring decoupled 60 FPS waveform scrubbing, bidirectional transcript sync, and post-meeting agentic workflows.',
    metrics: '60 FPS Canvas • 100% Client Decoded',
    tags: ['Next.js 15', 'Web Audio API', 'Gemini AI', 'Zustand', 'Vitest'],
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-transparent',
    link: 'https://cadence-studio.vercel.app',
    icon: Sparkles,
  },
  {
    id: 'nexus-ops',
    title: 'Nexus Data-Dense Console',
    category: 'Fintech & Operational Telemetry',
    description:
      'Enterprise monitoring console rendering 50,000+ streaming ledger transactions with virtualization, compound multi-criteria filters, and WebSocket buffering.',
    metrics: '50k+ Rows • < 16ms Frame Time',
    tags: ['React 19', 'TanStack Virtual', 'WebSockets', 'Tailwind v4'],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    link: '#',
    icon: Activity,
  },
  {
    id: 'strata-system',
    title: 'Strata Headless Design System',
    category: 'Design Systems & Component Architecture',
    description:
      'Accessible, token-driven component library with polymorphic slot patterns, WCAG AAA compliance, and an interactive documentation workbench.',
    metrics: '94% Test Coverage • WCAG AAA',
    tags: ['Radix UI', 'TypeScript Generics', 'CVA', 'axe-core'],
    gradient: 'from-fuchsia-500/20 via-pink-500/10 to-transparent',
    link: '#',
    icon: Layers,
  },
];

export const PortfolioSection: React.FC = () => {
  return (
    <section id="work" className="relative py-28 border-t border-white/5 overflow-hidden">
      <AmbientGlow color="violet" size="lg" className="top-1/4 left-0 -translate-x-1/2" />

      <Container size="lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-xl">
            <Badge variant="radiant">Selected Case Studies</Badge>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Proof of work in{' '}
              <GradientText variant="radiant">production environments.</GradientText>
            </h2>
            <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
              Real-world systems engineered with obsessive attention to loading states, ergonomics, and high-frequency rendering.
            </p>
          </div>

          <Link href="https://github.com/xdnzz" target="_blank" rel="noreferrer">
            <Button variant="glass" size="md">
              <span>View GitHub Repositories</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <Card
                key={project.id}
                glowOnHover
                className="flex flex-col justify-between group relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${project.gradient} opacity-40 group-hover:opacity-70 transition-opacity pointer-events-none`}
                />

                <CardHeader className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-white/10 text-white">
                      <Icon className="w-4 h-4 text-violet-400" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">
                      {project.metrics}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider block">
                    {project.category}
                  </span>
                  <CardTitle className="text-xl group-hover:text-violet-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 pt-0 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 text-slate-400 border border-white/5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.link !== '#' ? (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-violet-300 transition-colors pt-2"
                    >
                      <span>Explore Live Application</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 pt-2">
                      <span>Internal Architecture Showcase</span>
                    </span>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};