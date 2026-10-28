export type CollectionStory = {
  headline: string;
  intent: string;
  light: string;
  use: string;
  avoid: string;
};

export const stories: Record<string, CollectionStory> = {
  freebies: {
    headline: 'The open set, for the first screen.',
    intent: 'Freebies is the handshake. Cream sits low, violet climbs, and black keeps the type readable.',
    light: 'The lamp is in the lower left. Light arrives late, so the headline can stay white without a plate behind it.',
    use: 'Home pages, launch notes, and any first view that has to feel finished before the rest of the product exists.',
    avoid: 'Do not crop it to a chip. The cream only makes sense when the violet and the black are in the same frame.',
  },
  soloprenuers: {
    headline: 'A studio that looks staffed.',
    intent: 'Soloprenuers is a full-height wash for a one-person practice that still needs a room, not a template.',
    light: 'Color pools at the floor and a quieter violet hangs from the ceiling. The middle stays open for a portrait or a sentence.',
    use: 'About pages, retainers, and personal sites where the work should feel considered rather than loud.',
    avoid: 'Do not stack two competing headlines in the bright band. One line, then the wash.',
  },
  'ai-startups': {
    headline: 'Current, without the neon.',
    intent: 'AI startups keeps the glow centered and small. The product can sit in the dark and still look present.',
    light: 'A single bloom at the top. No second sun. The rest of the screen is black so interface chrome can be thin.',
    use: 'Product landings, waitlists, and feature announcements that should feel new without a rainbow.',
    avoid: 'Do not add another saturated accent on top of the bloom. The gradient is already the accent.',
  },
  conversions: {
    headline: 'Built for the click.',
    intent: 'Conversions pulls purple in from the left and leaves cream along the base, where a button wants to sit.',
    light: 'Light enters from the side, not from above. The eye moves across the line of copy and lands on the action.',
    use: 'Pricing, trials, and any page whose job is one decision.',
    avoid: 'Do not center a long paragraph in the darkest corner. Keep the ask on the lit side.',
  },
  downloads: {
    headline: 'Hand something over.',
    intent: 'Downloads opens a corner of daylight. The file, the link, or the version number belongs in that light.',
    light: 'The bright stop is at the lower right. Everything else falls back to indigo so the download is the event.',
    use: 'Release notes, asset pages, and docs that end with a file.',
    avoid: 'Do not cover the cream with a dark card. Let the corner stay empty enough to read as light.',
  },
  'love-coffee': {
    headline: 'The same family, turned down.',
    intent: 'Love & coffee is the quiet room. The palette does not change. The volume does.',
    light: 'A soft bloom from the lower left, shorter than Freebies, so a journal or a letter can sit in the dark.',
    use: 'Essays, thank-you pages, and slow product stories.',
    avoid: 'Do not pair it with a countdown or a hard offer. The gradient is asking the reader to stay.',
  },
};
