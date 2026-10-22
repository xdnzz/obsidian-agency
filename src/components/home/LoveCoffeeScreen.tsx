import Link from 'next/link';
import { AppPreview } from '@/components/home/AppPreview';
import { HeroStage } from '@/components/home/HeroStage';
import { MobileHero } from '@/components/home/MobileHero';

const loveCoffeeBackground =
  'radial-gradient(78% 68% at -4% 112%, #fff6e8 0%, #d3bcda 8%, #a881cc 18%, #7c47be 32%, #5012b0 48%, rgba(20,3,44,0.4) 64%, transparent 80%), radial-gradient(42% 48% at 6% 72%, rgba(124,71,190,0.55) 0%, rgba(80,12,176,0.22) 42%, transparent 72%)';

export function LoveCoffeeScreen() {
  return (
    <HeroStage
      background={loveCoffeeBackground}
      mobile={
        <MobileHero
          title="Created with love & coffee"
          description="Elevate your projects with Obsidian Studio – a curated collection of stunning gradients, crafted to bring vibrant, dynamic color to your designs."
          showDemo
        />
      }
    >
      <div className="absolute top-[157px] left-[167px] flex items-center gap-[82px]">
        <h1 className="font-display w-[535px] shrink-0 bg-[linear-gradient(189deg,#ffffff_27.8%,#c9c9c9_84.6%)] bg-clip-text text-[96px] leading-none font-semibold tracking-[-5.76px] text-transparent">
          Created with love & coffee
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
