import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/site-data";

export function useLightbox(photos: Photo[]) {
  const [index, setIndex] = useState<number | null>(null);
  const open = useCallback((i: number) => setIndex(i), []);
  const node =
    index === null ? null : (
      <Lightbox photos={photos} index={index} onChange={setIndex} onClose={() => setIndex(null)} />
    );
  return { open, node };
}

function Lightbox({
  photos,
  index,
  onChange,
  onClose,
}: {
  photos: Photo[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const touchX = useRef<number | null>(null);
  const n = photos.length;
  const prev = useCallback(() => onChange((index - 1 + n) % n), [index, n, onChange]);
  const next = useCallback(() => onChange((index + 1) % n), [index, n, onChange]);

  useEffect(() => {
    const last = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      last?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const p = photos[index];
  if (!p) return null;
  const btn =
    "flex h-12 w-12 items-center justify-center rounded-full bg-lb-ui/15 text-lb-ui text-2xl transition hover:bg-lb-ui/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lb-ui";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Fotografie ${index + 1} z ${n}: ${p.title}`}
      className="fixed inset-0 z-[100] flex flex-col bg-lb-bg/95 motion-safe:animate-in motion-safe:fade-in"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onTouchStart={(e) => (touchX.current = e.touches[0]?.clientX ?? null)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current;
        if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
        touchX.current = null;
      }}
    >
      <div className="flex items-center justify-between p-4 text-lb-ui">
        <p className="text-sm">
          {index + 1} / {n} · {p.title}
        </p>
        <button ref={closeRef} onClick={onClose} className={btn} aria-label="Zavřít galerii">
          ×
        </button>
      </div>
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-6 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <img src={p.src} alt={p.alt} className="max-h-full max-w-full object-contain" />
        <button onClick={prev} className={`${btn} absolute left-3 top-1/2 -translate-y-1/2`} aria-label="Předchozí fotografie">
          ‹
        </button>
        <button onClick={next} className={`${btn} absolute right-3 top-1/2 -translate-y-1/2`} aria-label="Další fotografie">
          ›
        </button>
      </div>
    </div>
  );
}
