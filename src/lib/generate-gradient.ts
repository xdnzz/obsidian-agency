export type GradientStop = {
  id: string;
  name: string;
  color: string;
  at: number;
};

export type GradientDraft = {
  kind: 'radial' | 'linear';
  angle: number;
  originX: number;
  originY: number;
  sizeX: number;
  sizeY: number;
  stops: GradientStop[];
};

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function randomFrom(seed: number) {
  let state = seed | 0;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hslToHex(h: number, s: number, l: number) {
  const sat = clamp(s, 0, 100) / 100;
  const light = clamp(l, 0, 100) / 100;
  const a = sat * Math.min(light, 1 - light);
  const channel = (n: number) => {
    const k = (n + h / 30) % 12;
    return light - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
  };
  const hex = (value: number) => Math.round(value * 255).toString(16).padStart(2, '0');
  return `#${hex(channel(0))}${hex(channel(8))}${hex(channel(4))}`;
}

function hexToHsl(hex: string) {
  const raw = hex.replace('#', '');
  const full = raw.length === 3 ? raw.split('').map((part) => part + part).join('') : raw;
  const value = Number.parseInt(full, 16);
  const r = ((value >> 16) & 255) / 255;
  const g = ((value >> 8) & 255) / 255;
  const b = (value & 255) / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const light = (max + min) / 2;
  const delta = max - min;
  if (delta === 0) return { h: 0, s: 0, l: light * 100 };
  const sat = delta / (1 - Math.abs(2 * light - 1));
  let hue = 0;
  if (max === r) hue = ((g - b) / delta) % 6;
  else if (max === g) hue = (b - r) / delta + 2;
  else hue = (r - g) / delta + 4;
  hue = Math.round(hue * 60);
  if (hue < 0) hue += 360;
  return { h: hue, s: sat * 100, l: light * 100 };
}

export function nameStop(color: string, taken: Set<string>) {
  const { h, s, l } = hexToHsl(color);
  let name = 'ink';
  if (l < 10) name = 'black';
  else if (l > 90 && s < 25) name = 'white';
  else if (s < 18) name = l > 70 ? 'mist' : 'slate';
  else if (h < 45) name = l > 75 ? 'cream' : 'sand';
  else if (h < 80) name = 'gold';
  else if (h < 160) name = 'moss';
  else if (h < 210) name = 'tide';
  else if (h < 265) name = l > 62 ? 'lilac' : 'indigo';
  else if (h < 320) name = l > 60 ? 'orchid' : 'violet';
  else name = l > 70 ? 'blush' : 'rose';

  let unique = name;
  let index = 2;
  while (taken.has(unique)) {
    unique = `${name}-${index}`;
    index += 1;
  }
  taken.add(unique);
  return unique;
}

export function generateFamily(seed: number): GradientDraft {
  const random = randomFrom(seed);
  const kind = random() > 0.28 ? 'radial' : 'linear';
  const corners = [
    [8, 100],
    [0, 18],
    [100, 80],
    [50, 0],
    [0, 110],
  ];
  const corner = corners[Math.floor(random() * corners.length)] ?? [8, 100];
  const count = 4 + Math.floor(random() * 3);
  const hue = 258 + Math.floor(random() * 46);
  const taken = new Set<string>();
  const stops: GradientStop[] = [];

  for (let index = 0; index < count; index += 1) {
    const t = index / (count - 1);
    const light = index === count - 1 ? 0 : 92 - t * 86 + (random() - 0.5) * 8;
    const sat = index === count - 1 ? 0 : t < 0.22 ? 38 + random() * 22 : 32 + t * 42;
    const stopHue = t < 0.25 ? 30 + random() * 20 : hue + (random() - 0.5) * 26;
    const color =
      index === count - 1
        ? '#000000'
        : hslToHex(((stopHue % 360) + 360) % 360, sat, clamp(light, 4, 96));
    stops.push({
      id: `${seed}-${index}`,
      name: nameStop(color, taken),
      color,
      at: Math.round(t * 100),
    });
  }

  return {
    kind,
    angle: Math.round(random() * 360),
    originX: clamp(Math.round(corner[0] + (random() - 0.5) * 16), 0, 100),
    originY: clamp(Math.round(corner[1] + (random() - 0.5) * 16), 0, 120),
    sizeX: 72 + Math.round(random() * 36),
    sizeY: 62 + Math.round(random() * 36),
    stops,
  };
}

export function gradientImage(draft: GradientDraft) {
  const list = [...draft.stops]
    .sort((a, b) => a.at - b.at)
    .map((stop) => `${stop.color} ${stop.at}%`)
    .join(', ');
  if (draft.kind === 'linear') return `linear-gradient(${draft.angle}deg, ${list})`;
  return `radial-gradient(${draft.sizeX}% ${draft.sizeY}% at ${draft.originX}% ${draft.originY}%, ${list})`;
}

export function gradientCss(draft: GradientDraft) {
  return `background-color: #000;\nbackground-image: ${gradientImage(draft)};`;
}

export function gradientTokens(draft: GradientDraft) {
  return draft.stops.map((stop) => `--${stop.name}: ${stop.color};`).join('\n');
}

export function gradientExample(draft: GradientDraft) {
  return ['.obsidian-custom {', '  min-height: 100vh;', '  color: #fff;', `  ${gradientCss(draft).replace('\n', '\n  ')}`, '}'].join('\n');
}
