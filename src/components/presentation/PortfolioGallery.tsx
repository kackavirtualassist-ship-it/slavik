import { Button } from "@/components/ui/button";
import { useLightbox } from "@/components/presentation/Lightbox";
import { PORTFOLIO_GROUPS, PORTFOLIO_PHOTOS, type PortfolioPhoto } from "@/lib/portfolio";

export function PortfolioGallery() {
  const lightbox = useLightbox(PORTFOLIO_PHOTOS);
  const tile = (photo: PortfolioPhoto, wide = false) => (
    <Button
      key={photo.id}
      variant="ghost"
      onClick={() => lightbox.open(PORTFOLIO_PHOTOS.indexOf(photo))}
      aria-label={`Zvětšit: ${photo.title}${photo.label ? ` — ${photo.label}` : ""}`}
      className={`group relative block h-auto w-full overflow-hidden rounded-none bg-d2-anthracite p-0 text-d2-white hover:bg-d2-anthracite focus-visible:ring-d2-bronze ${wide ? "aspect-[4/5] md:aspect-[2/1]" : "aspect-[4/5]"}`}
    >
      <img src={photo.src} alt={photo.alt} width={photo.w} height={photo.h} loading="lazy" className="h-full w-full object-contain transition duration-1000 motion-safe:group-hover:scale-[1.02]" />
      {photo.label && <span className="absolute left-4 top-4 bg-d2-white px-4 py-2 text-sm font-semibold text-d2-coal">{photo.label}</span>}
      <span className="absolute bottom-0 left-0 max-w-full whitespace-normal bg-d2-coal/80 px-4 py-2 text-left text-xs uppercase text-d2-white">{photo.title}</span>
    </Button>
  );

  return (
    <>
      <div className="space-y-20">
        {PORTFOLIO_GROUPS.filter(group => group.photos.length > 0).map(group => {
          const rows: PortfolioPhoto[][] = [];
          for (let i = 0; i < group.photos.length;) {
            const count = rows.length % 2 === 0 ? 1 : 2;
            rows.push(group.photos.slice(i, i + count));
            i += count;
          }
          return (
            <section key={group.id} aria-labelledby={`portfolio-${group.id}`}>
              <h3 id={`portfolio-${group.id}`} className="mb-8 border-t border-d2-white/15 pt-6 font-display2 text-2xl font-semibold text-d2-bronze md:text-3xl">{group.title}</h3>
              <div className="grid gap-4">
                {rows.map(row => row.length === 1 ? tile(row[0], true) : (
                  <div key={row.map(photo => photo.id).join("-")} className="grid gap-4 md:grid-cols-2">
                    {row.map(photo => tile(photo))}
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
      {lightbox.node}
    </>
  );
}