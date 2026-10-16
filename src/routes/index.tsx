import { createFileRoute, Link } from "@tanstack/react-router";
import { LOGO_URL, PHOTOS } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Návrhy webu — Truhlářství Slavík" },
      { name: "description", content: "Tři vizuální směry webu Truhlářství Slavík k výběru: Přírodní řemeslo, Tmavá elegance a Moderní portfolio." },
      { property: "og:title", content: "Návrhy webu — Truhlářství Slavík" },
      { property: "og:description", content: "Tři vizuální směry webu Truhlářství Slavík k výběru." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Hub,
});

const designs = [
  { to: "/navrh-1", n: "01", name: "Přírodní řemeslo", text: "Teplá krémová, patkové nadpisy, osobní a vzdušná prezentace.", img: PHOTOS.platek, swatch: ["bg-d1-cream", "bg-d1-sand", "bg-d1-olive", "bg-d1-brown"] },
  { to: "/navrh-2", n: "02", name: "Tmavá elegance", text: "Tmavé plochy, bronzové akcenty a dominantní velké fotografie.", img: PHOTOS.epoxyRecepce, swatch: ["bg-d2-coal", "bg-d2-anthracite", "bg-d2-bronze", "bg-d2-white"] },
  { to: "/navrh-3", n: "03", name: "Moderní portfolio", text: "Světlý přehledný rastr, kde hlavní slovo mají realizace.", img: PHOTOS.epoxyStul, swatch: ["bg-d3-white", "bg-d3-gray", "bg-d3-green", "bg-d3-graphite"] },
] as const;

function Hub() {
  return (
    <main className="min-h-screen bg-hub-bg font-sans2 text-hub-fg">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-20">
        <header className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <img src={LOGO_URL} alt="Logo Truhlářství Slavík" className="h-24 w-auto mix-blend-multiply" />
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-hub-muted">Prezentace pro klienta</p>
            <h1 className="mt-3 font-serif1 text-5xl font-medium leading-tight md:text-6xl">Tři návrhy webu</h1>
          </div>
          <p className="max-w-sm text-hub-muted">
            Každý návrh je kompletní úvodní stránka se stejným obsahem, ale jiným výrazem. Vyberte směr, který vám sedí.
          </p>
        </header>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {designs.map((d) => (
            <article key={d.to} className="group flex flex-col">
              <Link to={d.to} className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-hub-fg" tabIndex={-1} aria-hidden="true">
                <img src={d.img.src} alt="" className="aspect-[4/5] w-full object-cover transition duration-700 motion-safe:group-hover:scale-[1.03]" />
              </Link>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-hub-muted">Návrh {d.n}</span>
                <span className="flex">
                  {d.swatch.map((c) => (
                    <span key={c} className={`h-4 w-4 border border-hub-fg/10 ${c}`} />
                  ))}
                </span>
              </div>
              <h2 className="mt-2 font-serif1 text-3xl font-medium">{d.name}</h2>
              <p className="mt-2 flex-1 text-hub-muted">{d.text}</p>
              <Link
                to={d.to}
                className="mt-6 inline-flex min-h-12 items-center justify-center border border-hub-fg px-6 text-sm font-medium transition hover:bg-hub-fg hover:text-hub-bg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hub-fg"
              >
                Prohlédnout návrh
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
