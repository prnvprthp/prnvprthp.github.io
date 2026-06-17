import fs from 'node:fs';
import path from 'node:path';
import { InterestsClient } from './InterestsClient';

const PREVIEW_DIR = 'project-images';

/**
 * Scanned at build time (static export). Drop preview images into
 * /public/project-images named "<slug>-<n>.<ext>" — e.g. marquee-1.png,
 * marquee-2.jpg, days-1.png. Files are grouped by <slug> and cycled in
 * ascending <n> order. Supported extensions: png, jpg, jpeg, webp.
 * The <slug> must match the `slug` of the app in InterestsClient.tsx.
 * (The analytics screenshots in this same folder use an underscore —
 * "<slug>_<n>.png" — so they don't match this dash pattern and are ignored.)
 */
function getImagesBySlug(): Record<string, string[]> {
  const dir = path.join(process.cwd(), 'public', PREVIEW_DIR);
  let files: string[] = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return {};
  }

  const groups: Record<string, { f: string; n: number }[]> = {};
  const re = /^(.+)-(\d+)\.(png|jpe?g|webp)$/i;
  for (const f of files) {
    const m = f.match(re);
    if (!m) continue;
    const slug = m[1].toLowerCase();
    (groups[slug] ??= []).push({ f, n: parseInt(m[2], 10) });
  }

  const map: Record<string, string[]> = {};
  for (const slug of Object.keys(groups)) {
    map[slug] = groups[slug]
      .sort((a, b) => a.n - b.n)
      .map((x) => `/${PREVIEW_DIR}/${x.f}`);
  }
  return map;
}

export default function InterestsPage() {
  return <InterestsClient imagesBySlug={getImagesBySlug()} />;
}
