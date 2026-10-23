export type Collection = {
  slug: string;
  name: string;
  href: string;
  description: string;
  background: string;
  stops: { name: string; color: string }[];
};

export const collections: Collection[] = [
  {
    slug: 'freebies',
    name: 'Freebies',
    href: '/',
    description: 'The open set. Warm cream into violet, for the first screen of a project.',
    background:
      'radial-gradient(90% 85% at 8% 100%, #ffe9c5 0%, #f0d2be 14%, #c9a4c4 26%, #7c43b5 44%, #5012b0 58%, #14032c 72%, #000 86%)',
    stops: [
      { name: 'cream', color: '#ffe9c5' },
      { name: 'blush', color: '#f0d2be' },
      { name: 'lilac', color: '#c9a4c4' },
      { name: 'violet', color: '#7c43b5' },
      { name: 'indigo', color: '#5012b0' },
      { name: 'plum', color: '#14032c' },
      { name: 'black', color: '#000000' },
    ],
  },
  {
    slug: 'soloprenuers',
    name: 'Soloprenuers',
    href: '/soloprenuers',
    description: 'A full-height wash for a one-person studio that still needs to look finished.',
    background:
      'radial-gradient(120% 46% at 50% -12%, rgba(124,67,181,0.9) 0%, rgba(80,12,176,0.45) 32%, transparent 64%), radial-gradient(140% 70% at 50% 120%, #e7c6ea 0%, #7c43b5 28%, #5012b0 48%, #000 72%)',
    stops: [
      { name: 'blush', color: '#e7c6ea' },
      { name: 'violet', color: '#7c43b5' },
      { name: 'indigo', color: '#5012b0' },
      { name: 'black', color: '#000000' },
    ],
  },
  {
    slug: 'ai-startups',
    name: 'AI startups',
    href: '/ai-startups',
    description: 'A centered glow for a product that should feel current without shouting.',
    background:
      'radial-gradient(90% 70% at 50% 0%, rgba(140,50,210,0.95) 0%, rgba(80,12,176,0.55) 36%, #000 72%)',
    stops: [
      { name: 'glow', color: '#8c32d2' },
      { name: 'indigo', color: '#5012b0' },
      { name: 'black', color: '#000000' },
    ],
  },
  {
    slug: 'conversions',
    name: 'Conversions',
    href: '/conversions',
    description: 'Purple from the left, cream along the base, built for a page that asks for a click.',
    background: 'radial-gradient(80% 80% at 0% 20%, #a881cc 0%, #7c47be 28%, #5012b0 48%, #000 72%)',
    stops: [
      { name: 'lilac', color: '#a881cc' },
      { name: 'violet', color: '#7c47be' },
      { name: 'indigo', color: '#5012b0' },
      { name: 'black', color: '#000000' },
    ],
  },
  {
    slug: 'downloads',
    name: 'Downloads',
    href: '/downloads',
    description: 'Light arriving from the corner, for a screen whose job is to hand something over.',
    background:
      'radial-gradient(90% 90% at 100% 80%, #fff6e8 0%, #d3bcda 12%, #a881cc 28%, #5012b0 52%, #000 74%)',
    stops: [
      { name: 'cream', color: '#fff6e8' },
      { name: 'blush', color: '#d3bcda' },
      { name: 'lilac', color: '#a881cc' },
      { name: 'indigo', color: '#5012b0' },
      { name: 'black', color: '#000000' },
    ],
  },
  {
    slug: 'love-coffee',
    name: 'Love & coffee',
    href: '/love-coffee',
    description: 'A softer bloom. The same palette, turned down for a quieter page.',
    background:
      'radial-gradient(80% 75% at 0% 110%, #fff6e8 0%, #d3bcda 14%, #7c47be 36%, #5012b0 56%, #000 78%)',
    stops: [
      { name: 'cream', color: '#fff6e8' },
      { name: 'blush', color: '#d3bcda' },
      { name: 'violet', color: '#7c47be' },
      { name: 'indigo', color: '#5012b0' },
      { name: 'black', color: '#000000' },
    ],
  },
];

export function collectionCss(collection: Collection) {
  return `background-color: #000;\nbackground-image: ${collection.background};`;
}

export function collectionTokens(collection: Collection) {
  return collection.stops.map((stop) => `--${collection.slug}-${stop.name}: ${stop.color};`).join('\n');
}

export function collectionExample(collection: Collection) {
  return [
    `.obsidian-${collection.slug} {`,
    '  min-height: 100vh;',
    '  color: #fff;',
    '  background-color: #000;',
    `  background-image: ${collection.background};`,
    '}',
  ].join('\n');
}
