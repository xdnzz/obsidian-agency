import type { Metadata } from 'next';
import { StudioPage } from '@/components/home/StudioPage';

export const metadata: Metadata = {
  title: 'Demo',
};

export default function DemoPage() {
  return (
    <StudioPage
      eyebrow="Demo"
      title="One gradient, three surfaces."
      lede="Switch collections and watch the same palette move from the background onto a screen, a card, and a phone."
    />
  );
}
