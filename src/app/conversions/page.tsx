import type { Metadata } from 'next';
import { ConversionsScreen } from '@/components/home/ConversionsScreen';

export const metadata: Metadata = {
  title: 'Conversions',
};

export default function ConversionsPage() {
  return <ConversionsScreen />;
}
