import Link from 'next/link';
import { AppPreview } from '@/components/home/AppPreview';
import { HeroStage } from '@/components/home/HeroStage';

const soloprenuersBackground =
  'radial-gradient(120% 46% at 50% -12%, rgba(124,67,181,0.72) 0%, rgba(80,12,176,0.34) 32%, transparent 64%), radial-gradient(140% 52% at 50% 118%, rgba(186,140,196,0.95) 0%, rgba(124,67,181,0.72) 22%, rgba(80,12,176,0.32) 42%, transparent 66%)';

export function SoloprenuersScreen() {
  return (
    <HeroStage background={soloprenuersBackground}>
      <div className="absolute top-[157px] left-[167px] flex items-center gap-[82px]">
        <h1 className="font-display w-[535px] shrink-0 bg-[linear-gradient(188deg,#ffffff_27.8%,#c9c9c9_84.6%)] bg-clip-text text-[88px] leading-none font-semibold tracking-[-5.28px] text-transparent">
          Designed for Soloprenuers
        </h1>
        <div className="flex w-[497px] flex-col items-start gap-10">
          <p className="text-xl leading-[1.5] font-medium text-white/95">
            Elevate your projects with Obsidian Studio – a curated collection of stunning gradients,
            crafted to bring vibrant, dynamic color to your designs.
          </p>
          <div className="flex items-start gap-3">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-[48px] bg-white px-8 py-4 text-lg leading-none font-semibold whitespace-nowrap text-black transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-[48px] border border-white/20 px-8 py-4 text-lg leading-none font-semibold whitespace-nowrap text-white transition-colors hover:bg-white/5"
            >
              View demo
            </Link>
          </div>
        </div>
      </div>
      <AppPreview placement="below" />
    </HeroStage>
  );
}
