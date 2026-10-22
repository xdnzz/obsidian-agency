import type { Metadata } from 'next';
import { SoloprenuersScreen } from '@/components/home/SoloprenuersScreen';

export const metadata: Metadata = {
  title: 'Soloprenuers',
};

export default function SoloprenuersPage() {
  return <SoloprenuersScreen />;
}
