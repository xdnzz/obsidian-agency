import type { Metadata } from 'next';
import { HomeScreen } from '@/components/home/HomeScreen';
import { LandingStory } from '@/components/home/LandingStory';

export const metadata: Metadata = {
  title: 'Freebies · Obsidian Studio',
};

export default function Page() {
  return (
    <>
      <HomeScreen />
      <LandingStory />
    </>
  );
}
