'use client';

import React from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { GradientText } from '@/components/ui/GradientText';
import { Badge } from '@/components/ui/Badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { AmbientGlow } from '@/components/ui/AmbientGlow';

const tiers = [
  {
    name: 'Architecture Sprint',
    description: 'Deep audit of existing frontends, performance bottlenecks, and design token migration.',
    price: '$3,500',
    timeline: '2 weeks delivery',
    featured: false,
    features: [
      'Comprehensive Core Web Vitals audit',
      'Bundle size and rendering flamegraph analysis',
      'Design token contract standardization',
      'Written RFC with prioritized remediation roadmap',
      'Direct async communication with engineering team',
    ],
    buttonText: 'Book an Audit Sprint',
    buttonVariant: 'glass' as const,
  },
  {
    name: 'Production Delivery',
    description: 'End-to-end design-to-code execution for new digital products, design systems, and web apps.',
    price: '$8,500',
    timeline: '4 to 6 weeks delivery',
    featured: true,
    features: [
      'Pixel-perfect Figma-to-code translation',
      'Headless accessible component primitives (Radix)',
      'High-frequency state decoupling in Zustand',
      'Automated Vitest and React Testing Library suites',
      'Lighthouse 95+ score guarantee',
      'CI/CD pipeline configuration (GitHub Actions)',
      'Handover documentation and team walkthrough',
    ],
    buttonText: 'Start Production Project',
    buttonVariant: 'radiant' as const,
  },
  {
    name: 'Embedded Staff Frontend',
    description: 'Fractional Staff Frontend leadership embedded directly in your engineering team sprints.',
    price: '$6,000',
    timeline: 'Monthly engagement',
    featured: false,
    features: [
      'Leading critical frontend architecture initiatives',
      'Mentoring engineers on component-driven craft',
      'Reviewing PRs for a11y, performance, and ergonomics',
      'Co-designing API contracts with backend engineers',
      'Direct participation in sprint planning & RFCs',
    ],
    buttonText: 'Engage as Fractional Lead',
    buttonVariant: 'glass' as const,
  },
];

export const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="relative py-28 border-t border-white/5 overflow-hidden">
      <AmbientGlow color="cyan" size="lg" className="top-1/3 right-0 translate-x-1/3" />

      <Container size="lg">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <Badge variant="glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engagement Models</span>
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-2xl leading-tight">
            Transparent pricing for{' '}
            <GradientText variant="cyan">predictable delivery.</GradientText>
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl font-normal leading-relaxed">
            No vague hourly billing. Fixed-scope outcomes backed by automated testing and guaranteed performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              glowOnHover
              className={`flex flex-col justify-between relative ${
                tier.featured
                  ? 'border-violet-500/60 shadow-2xl shadow-violet-950/50 bg-slate-950/90'
                  : 'bg-slate-950/60'
              }`}
            >
              {tier.featured && (
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 p-4">
                  <Badge variant="radiant">Most Popular</Badge>
                </div>
              )}

              <CardHeader className="space-y-3">
                <CardTitle className="text-xl">{tier.name}</CardTitle>
                <CardDescription className="text-xs min-h-[36px]">
                  {tier.description}
                </CardDescription>

                <div className="pt-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {tier.price}
                  </span>
                  <span className="text-xs font-mono text-slate-500 block mt-1">
                    {tier.timeline}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 pt-0">
                <div className="space-y-2.5 border-t border-white/5 pt-4">
                  {tier.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <div className="p-0.5 rounded-full bg-emerald-500/10 text-emerald-400 mt-0.5 shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button variant={tier.buttonVariant} size="md" className="w-full">
                  <span>{tier.buttonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};