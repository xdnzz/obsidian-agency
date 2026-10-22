import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/site/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Get started',
};

export default function GetStartedPage() {
  return <PlaceholderPage title="Get started" />;
}
