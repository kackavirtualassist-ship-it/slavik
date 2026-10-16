import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { DesignSwitcher } from "@/components/presentation/DesignSwitcher";
import { InquiryForm } from "@/components/presentation/InquiryForm";
import { useLightbox } from "@/components/presentation/Lightbox";
import { BRAND, CATEGORY_LABEL, FACEBOOK_URL, GALLERY, LOGO_URL, PHOTOS, PROCESS, PROCESS_NOTE, SERVICES, type Category } from "@/lib/site-data";

export const Route = createFileRoute("/navrh-3")({
  head: () => ({
    meta: [
      { title: "Návrh 3: Moderní portfolio — Truhlářství Slavík" },
      { name: "description", content: "Návrh webu Truhlářství Slavík jako světlé moderní portfolio realizací z masivu a epoxidu." },
      { property: "og:title", content: "Návrh 3: Moderní portfolio — Truhlářství Slavík" },
      { property: "og:description", content: "Přehledné portfolio realizací zakázkového nábytku z masivního dřeva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Design3,
});

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d3-green";
type Filter = "vse" | Category;

function Design3() {
  const [filter, setFilter] = useState<Filter>("vse");
  const list = useMemo(() => (filter === "vse" ? GALLERY : GALLERY.filter((p) => p.category === filter)), [filter]);
  const lb = useLightbox(list);
  const heroLb = useLightbox([PHOTOS.epoxyDesky, PHOTOS.postel, PHOTOS.stolek]);

  return (
    <div className="bg-d3-white font-sans3 text-d3-graphite">
      <header className="sticky top-0 z-40 border-b border-d3-gray bg-d3-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
          <a href="#top" className={focus}>
            <img src={LOGO_URL} alt={BRAND} className="h-12 w-auto mix-blend-multiply" />
          </a>
          <nav aria-label="Hlavní" className="hidden gap-7 text-sm font-medium md:flex">
            {[["#portfolio", "Portfolio"], ["#sluzby", "Služby"], ["#postup", "Postup"], ["#o-nas", "O nás"]].map(([h, l]) => (
              <a key={h} href={h} className={`rounded py-2 hover:text-d3-green ${focus}`}>{l}</a>
            ))}
          </nav>
          <a href="#kontakt" className={`inline-flex min-h-11 items-center rounded-full bg-d3-green px-5 text-sm font-semibold text-d3-white hover:bg-d3-graphite ${focus}`}>
            Kontaktovat
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-7xl px-5 pt-12 md:px-8 md:pt-16">
          <div className="grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-end">
            <h1 className="text-5xl font-extrabold leading-[1] tracking-tight md:text-7xl motion-safe:animate-in motion-safe:fade-in motion-safe:duration-700">
              Vaše představa. <span className="text-d3-green">Naše řemeslo.</span>
            </h1>
            <p className="text-lg text-d3-muted">
              Nábytek z masivního dřeva na zakázku — z tuzemských i exotických dřevin, s epoxidem, nebo renovace starého kusu.
            </p>
          </div>
          <div className="mt-10 grid h-[60vh] max-h-[560px] min-h-[340px] grid-cols-4 grid-rows-2 gap-3">
            {[
              [PHOTOS.epoxyDesky, "col-span-4 row-span-1 md:col-span-2 md:row-span-2"],
              [PHOTOS.postel, "col-span-2 md:col-span-1 md:row-span-2"],
              [PHOTOS.stolek, "col-span-2 md:col-span-1 md:row-span-2"],
            ].map(([p, c], i) => (
              <button key={i} onClick={() => heroLb.open(i)} className={`group overflow-hidden rounded-2xl ${c} ${focus}`} aria-label={`Zvětšit: ${(p as typeof PHOTOS.postel).title}`}>
                <img src={(p as typeof PHOTOS.postel).src} alt={(p as typeof PHOTOS.postel).alt} className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105" />
              </button>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold text-d3-green">Portfolio</p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">Realizace</h2>
            </div>
            <div role="group" aria-label="Filtr realizací" className="flex flex-wrap gap-2">
              {(["vse", "epoxid", "masiv"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  aria-pressed={filter === f}
                  className={`min-h-11 rounded-full border px-5 text-sm font-medium transition ${focus} ${filter === f ? "border-d3-graphite bg-d3-graphite text-d3-white" : "border-d3-gray bg-d3-gray hover:border-d3-graphite"}`}
                >
                  {f === "vse" ? "Vše" : CATEGORY_LABEL[f]}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <li key={p.src} className="motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500">
                <button onClick={() => lb.open(i)} className={`group block w-full text-left ${focus} rounded-2xl`} aria-label={`Zvětšit: ${p.title}`}>
                  <div className="overflow-hidden rounded-2xl bg-d3-gray">
                    <img src={p.src} alt={p.alt} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-700 motion-safe:group-hover:scale-105" />
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="font-semibold">{p.title}</h3>
                    <span className="rounded-full bg-d3-gray px-3 py-1 text-xs text-d3-muted">{CATEGORY_LABEL[p.category]}</span>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <section id="sluzby" className="scroll-mt-24 bg-d3-gray py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <p className="text-sm font-semibold text-d3-green">Služby</p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">Co nabízíme</h2>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {SERVICES.map((s) => (
                <li key={s.title} className="rounded-2xl bg-d3-white p-6">
                  <span aria-hidden className="block h-1.5 w-8 rounded-full bg-d3-green" />
                  <h3 className="mt-5 text-lg font-bold leading-snug">{s.title}</h3>
                  <p className="mt-2 text-sm text-d3-muted">{s.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="postup" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 md:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">Jak spolupráce probíhá</h2>
            <p className="text-sm text-d3-muted">{PROCESS_NOTE}</p>
          </div>
          <ol className="mt-10 grid gap-6 md:grid-cols-4">
            {PROCESS.map((p, i) => (
              <li key={p.title} className="relative">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-d3-graphite font-bold text-d3-white">{i + 1}</span>
                <h3 className="mt-4 text-lg font-bold">{p.title}</h3>
                <p className="mt-1 text-sm text-d3-muted">{p.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="o-nas" className="mx-auto max-w-7xl scroll-mt-24 px-5 pb-20 md:px-8">
          <div className="grid items-center gap-8 rounded-3xl bg-d3-graphite p-6 text-d3-white md:grid-cols-2 md:p-12">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">{BRAND}</h2>
              <p className="mt-4 text-lg leading-relaxed text-d3-gray">
                Zakázková výroba nábytku z masivního dřeva. Tuzemské dřeviny, exotika, moderní spojení dřeva s epoxidem a renovace starého nábytku.
              </p>
            </div>
            <img src={PHOTOS.platek.src} alt={PHOTOS.platek.alt} loading="lazy" className="aspect-[4/3] w-full rounded-2xl object-cover" />
          </div>
        </section>

        <section id="kontakt" className="scroll-mt-24 border-t border-d3-gray">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-8">
            <div>
              <p className="text-sm font-semibold text-d3-green">Kontakt</p>
              <h2 className="mt-2 text-4xl font-extrabold tracking-tight md:text-5xl">Pojďme to probrat</h2>
              <ul className="mt-10 space-y-3">
                {[["Telefon", "Doplnit telefon"], ["E-mail", "Doplnit e-mail"], ["Oblast působení", "Doplnit oblast působení"]].map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 rounded-xl bg-d3-gray px-5 py-4">
                    <span className="text-sm text-d3-muted">{k}</span>
                    <span className="font-semibold">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <InquiryForm
              idPrefix="d3"
              s={{
                label: "mb-2 block text-sm font-semibold",
                input: `w-full rounded-xl border border-d3-gray bg-d3-gray px-4 py-3 focus:bg-d3-white aria-[invalid=true]:border-d3-graphite ${focus}`,
                error: "mt-1 text-sm font-semibold text-d3-graphite",
                button: `min-h-12 rounded-full bg-d3-green px-8 font-semibold text-d3-white hover:bg-d3-graphite ${focus}`,
                notice: "rounded-xl bg-d3-green p-4 text-sm text-d3-white",
              }}
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-d3-gray pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-8">
          <img src={LOGO_URL} alt={BRAND} className="h-12 w-auto mix-blend-multiply" />
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={`rounded-full border border-d3-gray px-5 py-2 text-sm font-medium hover:border-d3-graphite ${focus}`}>
            Facebook
          </a>
          <p className="text-sm text-d3-muted">© {BRAND}</p>
        </div>
      </footer>
      {lb.node}
      {heroLb.node}
      <DesignSwitcher />
    </div>
  );
}
