import { useState } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLightbox } from "@/components/presentation/Lightbox";
import { PORTFOLIO_GROUPS, type PortfolioGroup } from "@/lib/portfolio";

export function PortfolioGallery() {
  const [selected, setSelected] = useState<PortfolioGroup | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6">
        {PORTFOLIO_GROUPS.map(group => {
          const cover = group.photos[0];
          if (!cover) return null;
          return (
            <Button key={group.id} variant="ghost" onClick={() => setSelected(group)} aria-label={`Prohlédnout: ${group.title}`}
              className="group block h-auto min-w-0 self-start whitespace-normal rounded-none p-0 text-left text-d2-white hover:bg-transparent hover:text-d2-bronze focus-visible:ring-d2-bronze">
              <div className="aspect-[4/3] overflow-hidden bg-d2-anthracite">
                <img src={cover.src} alt={cover.alt} width={cover.w} height={cover.h} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-[1.04]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-2">
                <h3 className="font-display2 text-lg font-semibold md:text-xl">{group.title}</h3>
                <ArrowUpRight aria-hidden="true" className="mt-1 shrink-0 text-d2-bronze" />
              </div>
              <p className="mt-1 text-xs font-normal text-d2-muted">{group.photos.length} fotografií</p>
            </Button>
          );
        })}
      </div>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        {selected && <CategoryGallery key={selected.id} group={selected} />}
      </Dialog>
    </>
  );
}

function CategoryGallery({ group }: { group: PortfolioGroup }) {
  const [page, setPage] = useState(0);
  const lightbox = useLightbox(group.photos);
  const pageSize = 6;
  const pages = Math.ceil(group.photos.length / pageSize);
  const photos = group.photos.slice(page * pageSize, (page + 1) * pageSize);
  const control = "rounded-none border border-d2-white/20 text-d2-white hover:bg-d2-white/10 hover:text-d2-bronze focus-visible:ring-d2-bronze";

  return (
    <DialogContent className="max-h-[90svh] w-[calc(100%-2rem)] max-w-4xl overflow-y-auto rounded-none border-d2-white/20 bg-d2-coal p-5 font-sans2 text-d2-white sm:rounded-none sm:p-8 [&>button]:text-d2-white [&>button>span]:hidden" aria-describedby={`gallery-description-${group.id}`}>
      <div className="pr-6">
        <DialogTitle className="font-display2 text-2xl font-semibold md:text-3xl">{group.title}</DialogTitle>
        <DialogDescription id={`gallery-description-${group.id}`} className="mt-2 text-d2-muted">{group.photos.length} fotografií</DialogDescription>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((photo, index) => (
          <Button key={photo.id} variant="ghost" onClick={() => lightbox.open(page * pageSize + index)} aria-label={`Zvětšit: ${photo.title}${photo.label ? ` — ${photo.label}` : ""}`}
            className="group relative block aspect-[4/3] h-auto w-full overflow-hidden rounded-none bg-d2-anthracite p-0 text-d2-white hover:bg-d2-anthracite focus-visible:ring-d2-bronze">
            <img src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} loading="lazy" className="h-full w-full object-contain transition-transform motion-safe:group-hover:scale-[1.03]" />
            {photo.label && <span className="absolute left-2 top-2 bg-d2-white px-2 py-1 text-xs text-d2-coal">{photo.label}</span>}
          </Button>
        ))}
      </div>
      <div className="flex min-h-11 items-center justify-between gap-3 border-t border-d2-white/15 pt-4">
        <p className="text-xs text-d2-muted">{page * pageSize + 1}–{Math.min((page + 1) * pageSize, group.photos.length)} / {group.photos.length}</p>
        {pages > 1 && <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className={control} disabled={page === 0} onClick={() => setPage(p => p - 1)} aria-label="Předchozí náhledy" title="Předchozí náhledy"><ChevronLeft /></Button>
          <span className="text-xs text-d2-muted">{page + 1} / {pages}</span>
          <Button variant="ghost" size="icon" className={control} disabled={page === pages - 1} onClick={() => setPage(p => p + 1)} aria-label="Další náhledy" title="Další náhledy"><ChevronRight /></Button>
        </div>}
      </div>
      {lightbox.node}
    </DialogContent>
  );
}