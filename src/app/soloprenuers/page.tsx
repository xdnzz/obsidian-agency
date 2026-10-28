import type { Metadata } from 'next';
import { CollectionDossier } from '@/components/collection/CollectionDossier';
import { SoloprenuersScreen } from '@/components/home/SoloprenuersScreen';

export const metadata: Metadata = {
  title: 'Soloprenuers',
};

export default function SoloprenuersPage() {
  return (
    <>
      <SoloprenuersScreen />
      <CollectionDossier slug="soloprenuers" />
    </>
  );
}
