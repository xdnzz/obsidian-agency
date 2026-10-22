import type { ReactNode } from 'react';
import { ParticleField } from '@/components/home/ParticleField';

export function HeroStage({
  background,
  mobile,
  children,
}: {
  background: string;
  mobile: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative min-h-dvh bg-black lg:h-dvh lg:overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: '#000', backgroundImage: background }}
      />
      <ParticleField />
      <div className="relative z-10 lg:hidden">{mobile}</div>
      <div
        className="absolute top-1/2 left-1/2 hidden h-[900px] w-[1440px] origin-center lg:block"
        style={{
          transform:
            'translate(-50%, -50%) scale(min(calc(100vw / 1440px), calc(100dvh / 900px)))',
        }}
      >
        {children}
      </div>
    </div>
  );
}
