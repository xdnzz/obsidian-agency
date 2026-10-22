import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/site/PlaceholderPage';

export const metadata: Metadata = {
  title: 'View demo',
};

export default function DemoPage() {
  return <PlaceholderPage title="View demo" />;
}
