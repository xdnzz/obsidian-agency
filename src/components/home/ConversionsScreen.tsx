import Link from 'next/link';
import { AppPreview } from '@/components/home/AppPreview';
import { HeroStage } from '@/components/home/HeroStage';
import { MobileHero } from '@/components/home/MobileHero';

const conversionsBackground =
  'radial-gradient(78% 70% at -8% 18%, rgba(168,129,204,0.95) 0%, rgba(124,71,190,0.72) 24%, rgba(80,12,176,0.45) 42%, transparent 68%), radial-gradient(62% 48% at 6% 112%, #fff6e8 0%, #d3bcda 10%, #a881cc 22%, #500cb0 46%, rgba(20,3,44,0.35) 62%, transparent 76%)';

export function ConversionsScreen() {
  return (
    <HeroStage
      background={conversionsBackground}
      mobile={
        <MobileHero
          title="1.8x More conversions"
          description="Elevate your projects with Obsidian Studio – a curated collection of stunning gradients, crafted to bring vibrant, dynamic color to your designs."
          showDemo
        />
      }
    >
      <div className="absolute top-[157px] left-[167px] flex items-center gap-[82px]">
        <h1 className="font-display w-[535px] shrink-0 bg-[linear-gradient(189deg,#ffffff_27.8%,#c9c9c9_84.6%)] bg-clip-text text-[96px] leading-none font-semibold tracking-[-5.76px] text-transparent">
          1.8x More conversions
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
