'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, X, Expand } from 'lucide-react';

export type GalleryPhoto = { id: string; title: string; date: string | null; src: string; thumbnail: string; width: number; height: number };

export default function Gallery({ photos }: { photos: GalleryPhoto[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const photo = active === null ? null : photos[active];

  const isOpen = active !== null;
  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current;
    if (!modal) return;
    modal.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { modal.close(); document.body.style.overflow = previous; opener.current?.focus(); };
  }, [isOpen]);

  if (!photos.length) return <p className="rounded-2xl border border-border-default bg-bg-card p-12 text-center text-text-secondary">New moments are on their way. Check back soon.</p>;
  const move = (direction: number) => setActive(index => index === null ? null : (index + direction + photos.length) % photos.length);

  return (
    <>
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {photos.map((item, index) => (
          <button key={item.id} onClick={event => { opener.current = event.currentTarget; setActive(index); }} className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-border-default bg-bg-card text-left transition-colors hover:border-accent/50 focus-visible:outline-2 focus-visible:outline-accent" aria-label={`View ${item.title}`}>
            <div className="relative overflow-hidden">
              <Image src={item.thumbnail} alt={item.title} width={item.width} height={item.height} unoptimized priority={index < 3} className="h-auto w-full transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
              <span className="absolute bottom-4 right-4 rounded-full bg-black/60 p-2 text-white"><Expand size={16} aria-hidden="true" /></span>
            </div>
            <div className="p-5"><h3 className="font-semibold">{item.title}</h3>{item.date && <p className="mt-2 text-xs tracking-wide text-text-secondary">{item.date}</p>}</div>
          </button>
        ))}
      </div>
      <dialog ref={dialog} onCancel={() => setActive(null)} onClose={() => setActive(null)} onClick={event => { if (event.target === event.currentTarget) setActive(null); }} onKeyDown={event => { if (event.key === 'ArrowLeft') { event.preventDefault(); move(-1); } if (event.key === 'ArrowRight') { event.preventDefault(); move(1); } }} aria-labelledby="gallery-caption" className="fixed inset-0 m-auto max-h-[95dvh] w-[94vw] max-w-6xl overflow-auto rounded-2xl border border-border-default bg-bg-primary p-4 text-text-primary shadow-2xl backdrop:bg-black/90 md:p-6">
        {photo && <>
          <div className="mb-4 flex items-center justify-between"><span className="text-sm text-text-secondary">{(active ?? 0) + 1} / {photos.length}</span><button autoFocus onClick={() => setActive(null)} aria-label="Close photo" className="rounded-full p-3 hover:bg-bg-card"><X size={22} /></button></div>
          <Image src={photo.src} alt={photo.title} width={photo.width} height={photo.height} unoptimized className="mx-auto h-auto max-h-[65dvh] w-auto max-w-full rounded-lg object-contain" />
          <div className="mt-5 flex items-center justify-between gap-4"><div><h2 id="gallery-caption" className="text-lg font-semibold">{photo.title}</h2>{photo.date && <p className="mt-1 text-sm text-text-secondary">{photo.date}</p>}</div>{photos.length > 1 && <div className="flex shrink-0 gap-2"><button onClick={() => move(-1)} aria-label="Previous photo" className="rounded-full border border-border-default p-3 hover:bg-bg-card"><ArrowLeft size={20} /></button><button onClick={() => move(1)} aria-label="Next photo" className="rounded-full border border-border-default p-3 hover:bg-bg-card"><ArrowRight size={20} /></button></div>}</div>
        </>}
      </dialog>
    </>
  );
}
