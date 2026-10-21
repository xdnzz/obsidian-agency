import type { ReactNode } from 'react';

export function HeroStage({
  background,
  children,
}: {
  background: string;
  children: ReactNode;
}) {
  return (
    <div className="relative h-dvh overflow-hidden bg-black">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: '#000', backgroundImage: background }}
      />
      <div
        className="absolute top-1/2 left-1/2 h-[900px] w-[1440px] origin-center"
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
