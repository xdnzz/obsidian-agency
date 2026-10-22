import Link from 'next/link';

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-black px-6 pt-24 text-center text-white">
      <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
      <Link href="/" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
        Back home
      </Link>
    </div>
  );
}
