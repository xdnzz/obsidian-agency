import type { Metadata } from 'next';
import { StudioPage } from '@/components/home/StudioPage';

export const metadata: Metadata = {
  title: 'Get started',
};

export default function GetStartedPage() {
  return (
    <StudioPage
      eyebrow="Get started"
      title="Copy your first gradient."
      lede="Choose a collection. It lands on a screen, a card, and a phone. Copy the CSS, the colors, or a class you can paste."
    />
  );
}
