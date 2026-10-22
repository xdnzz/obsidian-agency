import type { Metadata } from 'next';
import { AiStartupsScreen } from '@/components/home/AiStartupsScreen';

export const metadata: Metadata = {
  title: 'AI startups',
};

export default function AiStartupsPage() {
  return <AiStartupsScreen />;
}
