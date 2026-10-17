import { createFileRoute } from "@tanstack/react-router";
import { DesignSwitcher } from "@/components/presentation/DesignSwitcher";
import { InquiryForm } from "@/components/presentation/InquiryForm";
import { useLightbox } from "@/components/presentation/Lightbox";
import { BRAND, FACEBOOK_URL, LOGO_URL, PHOTOS, PROCESS, PROCESS_NOTE, SERVICES, type Photo } from "@/lib/site-data";

export const Route = createFileRoute("/navrh-2")({
  head: () => ({
    meta: [
      { title: "Návrh 2: Tmavá elegance — Truhlářství Slavík" },
      { name: "description", content: "Návrh webu Truhlářství Slavík v tmavém elegantním stylu s důrazem na detail realizací." },
      { property: "og:title", content: "Návrh 2: Tmavá elegance — Truhlářství Slavík" },
      { property: "og:description", content: "Tmavá, sebevědomá prezentace zakázkového nábytku z masivu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Design2,
});

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d2-bronze";
// Order defines the wide / split rhythm
const ORDER: Photo[] = [PHOTOS.epoxyStul, PHOTOS.platek, PHOTOS.stoly, PHOTOS.epoxyDesky, PHOTOS.postel, PHOTOS.stolek, PHOTOS.epoxyRecepce];

function Design2() {
  const lb = useLightbox(ORDER);
  const Tile = ({ i, className }: { i: number; className: string }) => {
    const ph = ORDER[i]!;
    return (
    <button onClick={() => lb.open(i)} className={`group relative block overflow-hidden ${className} ${focus}`} aria-label={`Zvětšit: ${ph.title}`}>
      <img src={ph.src} alt={ph.alt} loading="lazy" className="h-full w-full object-cover transition duration-1000 motion-safe:group-hover:scale-[1.03]" />
      <span className="absolute bottom-0 left-0 bg-d2-coal/80 px-4 py-2 text-xs uppercase tracking-[0.2em] text-d2-white">{ph.title}</span>
    </button>
  );
  };

  return (
    <div className="bg-d2-coal font-sans2 text-d2-white">
      {/* Hero */}
      <section id="top" className="relative flex min-h-[100svh] flex-col">
        <img src={PHOTOS.epoxyRecepce.src} alt={PHOTOS.epoxyRecepce.alt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-d2-coal via-d2-coal/70 to-d2-coal/30" />
        <header className="relative z-10">
          <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 md:px-10">
            <a href="#top" className={`bg-d2-white p-2 ${focus}`}>
              <img src={LOGO_URL} alt={BRAND} className="h-12 w-auto md:h-14" />
            </a>
            <nav aria-label="Hlavní" className="hidden gap-10 text-xs uppercase tracking-[0.2em] md:flex">
              {[["#realizace", "Realizace"], ["#nabidka", "Nabídka"], ["#pristup", "Přístup"], ["#poptavka", "Poptávka"]].map(([h, l]) => (
                <a key={h} href={h} className={`py-2 hover:text-d2-bronze ${focus}`}>{l}</a>
              ))}
            </nav>
          </div>
        </header>
        <div className="relative z-10 mx-auto mt-auto w-full max-w-[1500px] px-5 pb-16 md:px-10 md:pb-24">
          <p className="text-xs uppercase tracking-[0.3em] text-d2-bronze">{BRAND} · nábytek z masivu na zakázku</p>
          <h1 className="mt-6 max-w-5xl font-display2 text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:duration-1000">
            Řemeslo, které vynikne v každém detailu.
          </h1>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#realizace" className={`inline-flex min-h-12 items-center bg-d2-bronze px-7 text-sm font-medium text-d2-coal hover:bg-d2-white ${focus}`}>Prohlédnout realizace</a>
            <a href="#poptavka" className={`inline-flex min-h-12 items-center border border-d2-white/60 px-7 text-sm font-medium hover:border-d2-bronze hover:text-d2-bronze ${focus}`}>Poptat výrobu</a>
          </div>
        </div>
      </section>

      <main>
        {/* Realizace */}
        <section id="realizace" className="mx-auto max-w-[1500px] scroll-mt-4 px-5 py-24 md:px-10">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display2 text-4xl font-bold tracking-tight md:text-6xl">Realizace</h2>
            <p className="max-w-sm text-sm text-d2-muted">Masiv, plátky s přírodní hranou i dřevo s epoxidem. Kliknutím fotografii zvětšíte.</p>
          </div>
          <div className="grid gap-4">
            <Tile i={0} className="aspect-[4/5] md:aspect-[21/9]" />
            <div className="grid gap-4 md:grid-cols-2">
              <Tile i={1} className="aspect-[4/5]" />
              <Tile i={2} className="aspect-[4/5]" />
            </div>
            <Tile i={3} className="aspect-[3/2] md:aspect-[21/9]" />
            <div className="grid gap-4 md:grid-cols-3">
              <Tile i={4} className="aspect-[4/3] md:col-span-2 md:aspect-auto md:h-full" />
              <Tile i={5} className="aspect-[3/4]" />
            </div>
            <Tile i={6} className="aspect-[4/3] md:aspect-[21/9]" />
          </div>
        </section>

        {/* Nabídka */}
        <section id="nabidka" className="scroll-mt-4 bg-d2-anthracite py-24">
          <div className="mx-auto grid max-w-[1500px] gap-12 px-5 md:grid-cols-[1fr_2fr] md:px-10">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-d2-bronze">Nabídka</p>
              <h2 className="mt-4 font-display2 text-4xl font-bold tracking-tight md:text-5xl">Co děláme</h2>
            </div>
            <ul>
              {SERVICES.map((s, i) => (
                <li key={s.title} className="group grid grid-cols-[3rem_1fr] items-baseline gap-4 border-t border-d2-white/15 py-6 transition-colors last:border-b hover:bg-d2-coal/40 md:grid-cols-[4rem_1fr_1fr] md:px-4">
                  <span className="text-xs tracking-[0.2em] text-d2-bronze">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-display2 text-xl font-semibold transition-transform motion-safe:group-hover:translate-x-1 md:text-2xl">{s.title}</h3>
                  <p className="col-start-2 text-sm text-d2-muted md:col-start-3">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Přístup */}
        <section id="pristup" className="mx-auto max-w-[1500px] scroll-mt-4 px-5 py-24 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-d2-bronze">Přístup</p>
              <h2 className="mt-4 font-display2 text-4xl font-bold tracking-tight md:text-5xl">Dřevo vybíráme podle toho, co z něj má vzniknout.</h2>
            </div>
            <div className="space-y-5 self-end text-lg leading-relaxed text-d2-muted">
              <p>Pracujeme s masivem tuzemských i exotických dřevin. Kresbu, praskliny a přírodní hranu necháváme vyniknout, epoxidem je umíme doplnit.</p>
              <p>Starý nábytek nevyhazujeme — rádi ho renovujeme.</p>
            </div>
          </div>
          <div className="mt-20">
            <p className="text-xs uppercase tracking-[0.3em] text-d2-bronze">Postup spolupráce</p>
            <p className="mt-2 text-xs text-d2-muted">{PROCESS_NOTE}</p>
            <ol className="mt-8 grid gap-px bg-d2-white/15 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p, i) => (
                <li key={p.title} className="bg-d2-coal p-6">
                  <span className="font-display2 text-5xl font-bold text-d2-bronze">{i + 1}</span>
                  <h3 className="mt-4 font-display2 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-d2-muted">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Poptávka — light block */}
        <section id="poptavka" className="scroll-mt-4 bg-d2-white text-d2-coal">
          <div className="mx-auto grid max-w-[1500px] gap-14 px-5 py-24 md:grid-cols-2 md:px-10">
            <div>
              <h2 className="font-display2 text-4xl font-bold tracking-tight md:text-6xl">Poptat výrobu</h2>
              <p className="mt-6 max-w-md text-lg">Popište, co potřebujete. Ozveme se a probereme detaily.</p>
              <dl className="mt-12 grid gap-6 text-sm">
                {[["Telefon", "Doplnit telefon"], ["E-mail", "Doplnit e-mail"], ["Působnost", "Doplnit oblast působení"]].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-xs uppercase tracking-[0.25em] text-d2-anthracite/70">{k}</dt>
                    <dd className="mt-1 font-display2 text-2xl font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <InquiryForm
              idPrefix="d2"
              s={{
                label: "mb-2 block text-xs uppercase tracking-[0.2em]",
                input: "w-full border-b-2 border-d2-coal/30 bg-transparent px-0 py-3 text-lg focus:border-d2-coal focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-d2-coal aria-[invalid=true]:border-d2-coal",
                error: "mt-1 text-sm font-medium text-d2-coal underline decoration-d2-bronze decoration-2",
                button: "min-h-12 justify-self-start bg-d2-coal px-8 text-sm font-medium text-d2-white hover:bg-d2-anthracite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d2-coal",
                notice: "bg-d2-coal p-4 text-sm text-d2-white",
              }}
            />
          </div>
        </section>
      </main>

      <footer className="bg-d2-coal pb-24">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center md:px-10">
          <span className="bg-d2-white p-2">
            <img src={LOGO_URL} alt={BRAND} className="h-12 w-auto" />
          </span>
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={`py-2 text-xs uppercase tracking-[0.2em] hover:text-d2-bronze ${focus}`}>
            Facebook ↗
          </a>
          <p className="text-xs text-d2-muted">© {BRAND}</p>
        </div>
      </footer>
      {lb.node}
      <DesignSwitcher />
    </div>
  );
}
