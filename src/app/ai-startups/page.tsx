import type { Metadata } from 'next';
import { CollectionDossier } from '@/components/collection/CollectionDossier';
import { AiStartupsScreen } from '@/components/home/AiStartupsScreen';

export const metadata: Metadata = {
  title: 'AI startups',
};

export default function AiStartupsPage() {
  return (
    <>
      <AiStartupsScreen />
      <CollectionDossier slug="ai-startups" />
    </>
  );
}
