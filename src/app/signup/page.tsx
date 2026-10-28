import type { Metadata } from 'next';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { RequestDrop } from '@/components/site/RequestDrop';

export const metadata: Metadata = {
  title: 'Sign up',
  description: 'Choose an Obsidian Studio collection and open it in the studio.',
};

export default function SignupPage() {
  return (
    <>
      <RequestDrop />
      <SiteFooter />
    </>
  );
}
