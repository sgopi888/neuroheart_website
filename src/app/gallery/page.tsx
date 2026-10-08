import type { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/layout/Footer';
import Gallery, { type GalleryPhoto } from '@/components/gallery/Gallery';

export const dynamic = 'force-static';
export const metadata: Metadata = {
  title: 'Gallery',
  description: 'People, milestones, and moments from the NeuroHeart journey.',
  alternates: { canonical: '/gallery' },
  openGraph: { title: 'Gallery | NeuroHeart.AI', description: 'People, milestones, and moments from the NeuroHeart journey.', url: '/gallery' },
};

export default async function GalleryPage() {
  const photos: GalleryPhoto[] = JSON.parse(await readFile(path.join(process.cwd(), 'public/gallery-generated/manifest.json'), 'utf8'));
  return (
    <>
      <header className="border-b border-border-default px-6 py-5">
        <div className="mx-auto flex max-w-[var(--max-width)] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 font-bold"><Image src="/neuroheart-logo.png" alt="" width={30} height={30} />Neuro<span className="text-accent">Heart</span> AI</Link>
          <Link href="/" className="text-sm text-text-secondary hover:text-accent">← Back to home</Link>
        </div>
      </header>
      <main className="mx-auto min-h-[70vh] max-w-[var(--max-width)] px-6 pb-24 pt-16 md:pt-24">
        <div className="mb-12 max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">The NeuroHeart journey</p>
          <h1 className="text-5xl font-extrabold tracking-tight md:text-7xl">Moments that <span className="text-accent">matter.</span></h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary">People, milestones, and memories along the way. A glimpse into the journey behind NeuroHeart.</p>
        </div>
        <div className="mb-6 flex items-center justify-between border-t border-border-default pt-6"><h2 className="text-lg font-semibold">Gallery</h2><span className="text-sm text-text-secondary">{photos.length} {photos.length === 1 ? 'moment' : 'moments'}</span></div>
        <Gallery photos={photos} />
      </main>
      <Footer />
    </>
  );
}
