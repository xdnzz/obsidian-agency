import type { ReactNode } from 'react';
import Link from 'next/link';
import { AppPreview } from '@/components/home/AppPreview';

const descriptionClass = 'max-w-md text-[15px] leading-6 font-medium text-white/75';

const primaryClass =
  'inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] leading-none font-semibold text-black';

const secondaryClass =
  'inline-flex h-12 items-center justify-center rounded-full border border-white/25 bg-white/5 px-6 text-[15px] leading-none font-semibold text-white';

export function MobileHero({
  title,
  description,
  centered = false,
  showDemo = false,
}: {
  title: ReactNode;
  description: string;
  centered?: boolean;
  showDemo?: boolean;
}) {
  return (
    <div className="flex h-full flex-col px-5 pt-24 pb-0">
      <div
        className={`flex min-h-0 flex-1 flex-col justify-center gap-5 ${centered ? 'items-center text-center' : 'items-start'}`}
      >
        <h1 className="font-display bg-[linear-gradient(189deg,#ffffff_22%,#c9c9c9_84%)] bg-clip-text text-[2.7rem] leading-[0.92] font-semibold tracking-[-0.045em] text-transparent sm:text-5xl">
          {title}
        </h1>
        <p className={descriptionClass}>{description}</p>
        <div className={`flex w-full gap-3 ${centered ? 'justify-center' : ''}`}>
          <Link href="/get-started" className={`${primaryClass} ${showDemo ? 'flex-1' : ''}`}>
            Get started
          </Link>
          {showDemo ? (
            <Link href="/demo" className={`${secondaryClass} flex-1`}>
              View demo
            </Link>
          ) : null}
        </div>
      </div>

      <div className="relative mt-6 h-[36vh] overflow-hidden [mask-image:linear-gradient(to_bottom,#000_72%,transparent)]">
        <AppPreview placement="sheet" />
      </div>
    </div>
  );
}
