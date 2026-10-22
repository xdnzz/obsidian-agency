import type { Metadata } from 'next';
import { PlaceholderPage } from '@/components/site/PlaceholderPage';

export const metadata: Metadata = {
  title: 'Sign up',
};

export default function SignupPage() {
  return <PlaceholderPage title="Sign up" />;
}
