import { useCallback, useEffect, useRef, useState } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const touchX = useRef<number | null>(null);
  const n = photos.length;
  const prev = useCallback(() => onChange((index - 1 + n) % n), [index, n, onChange]);
  const next = useCallback(() => onChange((index + 1) % n), [index, n, onChange]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  const p = photos[index];
  if (!p) return null;
  const btn = "h-12 w-12 shrink-0 rounded-full bg-lb-ui/15 p-0 text-lb-ui hover:bg-lb-ui/30 focus-visible:ring-lb-ui";

  return (
    <DialogPrimitive.Root open onOpenChange={open => { if (!open) onClose(); }}>
    <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-[100] bg-lb-bg/95" />
    <DialogPrimitive.Content
      aria-describedby={undefined}
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
        <DialogPrimitive.Title className="min-w-0 pr-3 text-sm font-normal">
          {index + 1} / {n} · {p.title}
        </DialogPrimitive.Title>
        <Button variant="ghost" onClick={onClose} className={btn} aria-label="Zavřít galerii" title="Zavřít galerii"><X /></Button>
      </div>
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-2 pb-6 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <img src={p.src} alt={p.alt} className="max-h-full max-w-full object-contain" />
        <Button variant="ghost" onClick={prev} className={`${btn} absolute left-3 top-1/2 -translate-y-1/2`} aria-label="Předchozí fotografie" title="Předchozí fotografie"><ChevronLeft /></Button>
        <Button variant="ghost" onClick={next} className={`${btn} absolute right-3 top-1/2 -translate-y-1/2`} aria-label="Další fotografie" title="Další fotografie"><ChevronRight /></Button>
      </div>
    </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
