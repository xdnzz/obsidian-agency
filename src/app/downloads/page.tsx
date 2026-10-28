import type { Metadata } from 'next';
import { CollectionDossier } from '@/components/collection/CollectionDossier';
import { DownloadsScreen } from '@/components/home/DownloadsScreen';

export const metadata: Metadata = {
  title: 'Downloads',
};

export default function DownloadsPage() {
  return (
    <>
      <DownloadsScreen />
      <CollectionDossier slug="downloads" />
    </>
  );
}
