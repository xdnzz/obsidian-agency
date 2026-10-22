import Link from 'next/link';
import { AppPreview } from '@/components/home/AppPreview';
import { HeroStage } from '@/components/home/HeroStage';
import { MobileHero } from '@/components/home/MobileHero';

const homeBackground =
  'radial-gradient(90% 85% at 8% 100%, #ffe9c5 0%, #f0d2be 14%, #c9a4c4 26%, #7c43b5 44%, #5012b0 58%, #14032c 72%, #000 86%)';

export function HomeScreen() {
  return (
    <HeroStage
      background={homeBackground}
      mobile={
        <MobileHero
          title="Freebies."
          description="Elevate your projects with Obsidian Studio – a curated collection of stunning gradients, crafted to bring vibrant, dynamic color to your designs."
        />
      }
    >
      <div className="absolute top-1/2 left-[135px] flex w-[497px] -translate-y-1/2 flex-col items-start gap-8">
        <h1 className="font-display w-full bg-[linear-gradient(184.5deg,#ffffff_27.8%,#c9c9c9_84.6%)] bg-clip-text text-[88px] leading-none font-semibold tracking-[-5.28px] text-transparent">
          Freebies.
        </h1>
        <p className="w-full text-xl leading-[1.5] font-medium text-white/95">
          Elevate your projects with Obsidian Studio – a curated collection of stunning gradients,
          crafted to bring vibrant, dynamic color to your designs.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center justify-center rounded-[40px] bg-white px-10 py-5 text-lg leading-none font-semibold text-black transition-opacity hover:opacity-90"
        >
          Get started
        </Link>
      </div>
      <AppPreview />
    </HeroStage>
  );
}
