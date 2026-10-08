import { readdir, readFile, mkdir, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const input = path.join(root, 'gallery');
const output = path.join(root, 'public/gallery-generated');
await mkdir(input, { recursive: true });
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
const photos = [];
const files = (await readdir(input)).filter(name => !name.startsWith('.')).sort().reverse();
for (const filename of files) {
  if (!/\.(jpe?g|png|webp|avif)$/i.test(filename)) {
    console.warn(`Gallery: skipping unsupported file ${filename}. Use JPG, PNG, WebP, or AVIF.`);
    continue;
  }
  const buffer = await readFile(path.join(input, filename));
  const id = createHash('sha256').update(filename).update(buffer).digest('hex').slice(0, 20);
  const stem = path.parse(filename).name;
  const match = stem.match(/^(\d{4}(?:-\d{2}(?:-\d{2})?)?)\s+-\s+(.+)$/);
  const title = (match?.[2] ?? stem).replace(/[_]+/g, ' ').trim();
  const info = await sharp(buffer).rotate().resize({ width: 2000, height: 2000, fit: 'inside', withoutEnlargement: true }).webp({ quality: 85 }).toFile(path.join(output, `${id}.webp`));
  await sharp(buffer).rotate().resize({ width: 800, height: 1000, fit: 'inside', withoutEnlargement: true }).webp({ quality: 78 }).toFile(path.join(output, `${id}-thumb.webp`));
  photos.push({ id, title, date: match?.[1] ?? null, src: `/gallery-generated/${id}.webp`, thumbnail: `/gallery-generated/${id}-thumb.webp`, width: info.width, height: info.height });
}
photos.sort((a, b) => (b.date ?? '').localeCompare(a.date ?? '') || a.title.localeCompare(b.title));
await writeFile(path.join(output, 'manifest.json'), JSON.stringify(photos, null, 2));
console.log(`Gallery: prepared ${photos.length} photo(s).`);
