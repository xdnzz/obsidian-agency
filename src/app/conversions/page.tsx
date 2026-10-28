import type { Metadata } from 'next';
import { CollectionDossier } from '@/components/collection/CollectionDossier';
import { ConversionsScreen } from '@/components/home/ConversionsScreen';

export const metadata: Metadata = {
  title: 'Conversions',
};

export default function ConversionsPage() {
  return (
    <>
      <ConversionsScreen />
      <CollectionDossier slug="conversions" />
    </>
  );
}
