import Link from 'next/link';
import { AppPreview } from '@/components/home/AppPreview';
import { HeroStage } from '@/components/home/HeroStage';
import { MobileHero } from '@/components/home/MobileHero';

const aiStartupsBackground =
  'radial-gradient(100% 58% at 50% -8%, rgba(92,24,168,0.95) 0%, rgba(48,10,96,0.55) 38%, transparent 70%), radial-gradient(46% 16% at 50% 68%, rgba(140,50,210,0.9) 0%, rgba(90,16,180,0.4) 42%, transparent 72%)';

export function AiStartupsScreen() {
  return (
    <HeroStage
      background={aiStartupsBackground}
      mobile={
        <MobileHero
          centered
          title={
            <>
              Perfect for
              <br />
              AI startups
            </>
          }
          description="A curated collection of stunning gradients, crafted to bring vibrant, dynamic color to your designs."
        />
      }
    >
      <div className="absolute top-[calc(50%-69px)] left-1/2 flex w-[505px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-8 text-center">
        <h1 className="font-display w-full bg-[linear-gradient(189deg,#ffffff_27.8%,#c9c9c9_84.6%)] bg-clip-text text-[88px] leading-none font-semibold tracking-[-5.28px] text-transparent">
          Perfect for
          <br />
          AI startups
        </h1>
        <p className="text-xl leading-[1.5] font-medium text-white/95">
          A curated collection of stunning gradients, crafted to bring vibrant, dynamic color to your
          designs.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center justify-center rounded-[40px] bg-white px-10 py-5 text-lg leading-none font-semibold whitespace-nowrap text-black transition-opacity hover:opacity-90"
        >
          Get started
        </Link>
      </div>
      <AppPreview placement="center" />
    </HeroStage>
  );
}
