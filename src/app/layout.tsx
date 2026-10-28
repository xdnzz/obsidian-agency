import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import { Navbar } from '@/components/layout/Navbar';
import { ViewTransitionGuard } from '@/components/layout/ViewTransitionGuard';
import { ScrollProgress } from '@/components/motion/ScrollProgress';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export const viewport: Viewport = {
  themeColor: '#06070a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Obsidian Studio | Next-Gen Digital Craft & Engineering',
    template: '%s · Obsidian Studio',
  },
  description:
    'Bespoke digital design agency and frontend engineering studio crafting pixel-perfect web products with radiant precision.',
  keywords: [
    'Design Agency',
    'Frontend Architecture',
    'Pixel Perfect',
    'Design Systems',
    'Next.js 15',
    'React 19',
    'Tailwind CSS',
  ],
  authors: [{ name: 'Danilo Diniz', url: 'https://github.com/xdnzz' }],
  creator: 'Danilo Diniz',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://obsidian-agency.vercel.app',
    title: 'Obsidian Studio | Next-Gen Digital Craft',
    description: 'Pixel-perfect digital products with radiant precision and strict frontend architecture.',
    siteName: 'Obsidian Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Obsidian Studio | Next-Gen Digital Craft',
    description: 'Pixel-perfect digital products with radiant precision and strict frontend architecture.',
    creator: '@xdnzz',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${manrope.variable} font-sans bg-black text-slate-100 antialiased`}>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ViewTransitionGuard />
        <ScrollProgress />
        <Navbar />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}