import { createFileRoute } from "@tanstack/react-router";
import { DesignSwitcher } from "@/components/presentation/DesignSwitcher";
import { InquiryForm } from "@/components/presentation/InquiryForm";
import { useLightbox } from "@/components/presentation/Lightbox";
import { BRAND, FACEBOOK_URL, GALLERY, LOGO_URL, PHOTOS, PROCESS, PROCESS_NOTE, SERVICES } from "@/lib/site-data";

export const Route = createFileRoute("/navrh-1")({
  head: () => ({
    meta: [
      { title: "Návrh 1: Přírodní řemeslo — Truhlářství Slavík" },
      { name: "description", content: "Návrh webu Truhlářství Slavík ve stylu přírodního řemesla: nábytek z masivního dřeva na zakázku." },
      { property: "og:title", content: "Návrh 1: Přírodní řemeslo — Truhlářství Slavík" },
      { property: "og:description", content: "Teplý, osobní návrh webu pro zakázkovou výrobu nábytku z masivu." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Design1,
});

const focus = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-d1-brown";
const nav = [
  ["#nabidka", "Co nabízíme"],
  ["#realizace", "Z naší dílny"],
  ["#spoluprace", "Postup"],
  ["#o-nas", "O truhlářství"],
  ["#kontakt", "Kontakt"],
] as const;

// Gallery layout: irregular but balanced
const spans = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-4",
  "md:col-span-3 md:row-span-2",
  "md:col-span-4",
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-12 md:aspect-[16/6]",
];

function Design1() {
  const lb = useLightbox(GALLERY);
  return (
    <div className="bg-d1-cream font-sans1 text-d1-brown">
      <header className="border-b border-d1-sand">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-5 md:px-10">
          <a href="#top" className={focus}>
            <img src={LOGO_URL} alt={BRAND} className="h-16 w-auto mix-blend-multiply md:h-20" />
          </a>
          <nav aria-label="Hlavní" className="hidden gap-8 text-sm lg:flex">
            {nav.map(([h, l]) => (
              <a key={h} href={h} className={`py-2 hover:text-d1-olive ${focus}`}>{l}</a>
            ))}
          </nav>
          <a href="#kontakt" className={`inline-flex min-h-11 items-center bg-d1-brown px-5 text-sm text-d1-cream hover:bg-d1-olive ${focus}`}>
            Nezávazná poptávka
          </a>
        </div>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-8 md:grid-cols-12 md:px-10 md:pb-24 md:pt-12">
          <div className="md:col-span-5 md:self-center motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
            <p className="text-xs uppercase tracking-[0.25em] text-d1-olive">Zakázková výroba z masivního dřeva</p>
            <h1 className="mt-6 font-serif1 text-5xl font-medium leading-[1.05] md:text-7xl">
              Poctivé řemeslo. <em className="text-d1-olive">Dřevo podle vašich představ.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed">
              Vyrábíme nábytek na zakázku z tuzemských i exotických dřevin, stoly s epoxidem a vracíme život starému nábytku.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#kontakt" className={`inline-flex min-h-12 items-center bg-d1-brown px-7 text-d1-cream hover:bg-d1-olive ${focus}`}>Nezávazná poptávka</a>
              <a href="#realizace" className={`inline-flex min-h-12 items-center border-b border-d1-brown px-1 hover:text-d1-olive ${focus}`}>Ukázky realizací →</a>
            </div>
          </div>
          <div className="relative md:col-span-7">
            <img src={PHOTOS.epoxyStul.src} alt={PHOTOS.epoxyStul.alt} className="aspect-[4/5] w-full object-cover md:ml-auto md:w-[88%]" />
            <img
              src={PHOTOS.platek.src}
              alt={PHOTOS.platek.alt}
              className="absolute -bottom-8 left-0 aspect-square w-40 border-8 border-d1-cream object-cover sm:w-56 md:-left-4 md:w-64"
            />
          </div>
        </section>

        {/* Nabídka */}
        <section id="nabidka" className="mx-auto max-w-7xl scroll-mt-6 px-5 py-24 md:px-10">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <p className="text-xs uppercase tracking-[0.25em] text-d1-olive">Nabídka</p>
              <h2 className="mt-4 font-serif1 text-4xl font-medium md:text-5xl">Co pro vás vyrobíme</h2>
            </div>
            <ol className="md:col-span-8">
              {SERVICES.map((s, i) => (
                <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-d1-sand py-7 last:border-b md:grid-cols-[4rem_1fr_1.2fr]">
                  <span className="font-serif1 text-2xl text-d1-olive">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif1 text-2xl font-medium">{s.title}</h3>
                  <p className="col-start-2 leading-relaxed md:col-start-3">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Realizace */}
        <section id="realizace" className="scroll-mt-6 bg-d1-sand/40 py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-d1-olive">Realizace</p>
                <h2 className="mt-4 font-serif1 text-4xl font-medium md:text-5xl">Z naší dílny</h2>
              </div>
              <p className="max-w-xs text-sm">Fotografii zvětšíte kliknutím.</p>
            </div>
            <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-12 md:gap-4">
              {GALLERY.map((p, i) => (
                <button
                  key={p.src}
                  onClick={() => lb.open(i)}
                  className={`group relative overflow-hidden ${i === 6 ? "col-span-2" : ""} ${spans[i]} ${focus}`}
                  aria-label={`Zvětšit: ${p.title}`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105" />
                  <span className="absolute inset-x-0 bottom-0 bg-d1-brown/70 px-4 py-2 text-left text-sm text-d1-cream opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                    {p.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Spolupráce */}
        <section id="spoluprace" className="scroll-mt-6 border-y border-d1-sand py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <p className="text-xs uppercase tracking-[0.25em] text-d1-olive">Postup spolupráce</p>
            <h2 className="mt-4 font-serif1 text-4xl font-medium md:text-5xl">Od nápadu k hotovému kusu</h2>
            <p className="mt-3 text-sm italic text-d1-olive">{PROCESS_NOTE}</p>
            <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {PROCESS.map((p, i) => (
                <li key={p.title} className="border-l border-d1-olive pl-5">
                  <span className="font-serif1 text-4xl text-d1-olive">{i + 1}</span>
                  <h3 className="mt-3 font-serif1 text-2xl font-medium">{p.title}</h3>
                  <p className="mt-2 leading-relaxed">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* O nás */}
        <section id="o-nas" className="mx-auto grid max-w-7xl scroll-mt-6 items-center gap-12 px-5 py-24 md:grid-cols-2 md:px-10">
          <img src={PHOTOS.stoly.src} alt={PHOTOS.stoly.alt} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-d1-olive">O truhlářství</p>
            <h2 className="mt-4 font-serif1 text-4xl font-medium md:text-5xl">Každý kus vzniká na zakázku</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed">
              <p>{BRAND} se věnuje výrobě nábytku z masivního dřeva. Pracujeme s tuzemskými i exotickými dřevinami a nebojíme se spojit dřevo s epoxidem.</p>
              <p>Rádi se pustíme také do renovace starého nábytku, který má pro vás hodnotu.</p>
            </div>
            <img src={LOGO_URL} alt="" className="mt-10 h-20 w-auto mix-blend-multiply" />
          </div>
        </section>

        {/* Kontakt */}
        <section id="kontakt" className="mx-auto grid max-w-7xl scroll-mt-6 gap-14 px-5 py-24 md:grid-cols-12 md:px-10">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-d1-olive">Kontakt</p>
            <h2 className="mt-4 font-serif1 text-4xl font-medium md:text-5xl">Napište nám, co máte v plánu</h2>
            <dl className="mt-10 space-y-5">
              {[
                ["Telefon", "Doplnit telefon"],
                ["E-mail", "Doplnit e-mail"],
                ["Oblast působení", "Doplnit oblast působení"],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-d1-sand pt-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-d1-olive">{k}</dt>
                  <dd className="mt-1 font-serif1 text-2xl">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="bg-d1-sand/40 p-6 md:col-span-7 md:p-10">
            <InquiryForm
              idPrefix="d1"
              s={{
                label: "mb-2 block text-sm font-medium",
                input: `w-full border border-d1-sand bg-d1-cream px-4 py-3 text-d1-brown aria-[invalid=true]:border-d1-brown ${focus}`,
                error: "mt-1 text-sm font-medium text-d1-brown underline decoration-d1-olive",
                button: `min-h-12 justify-self-start bg-d1-brown px-8 text-d1-cream hover:bg-d1-olive ${focus}`,
                notice: "border-l-4 border-d1-olive bg-d1-cream p-4 text-sm",
              }}
            />
          </div>
        </section>
      </main>

      <footer className="border-t border-d1-sand pb-24">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 md:flex-row md:px-10">
          <img src={LOGO_URL} alt={BRAND} className="h-16 w-auto mix-blend-multiply" />
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className={`py-2 underline underline-offset-4 hover:text-d1-olive ${focus}`}>
            Sledujte nás na Facebooku
          </a>
          <p className="text-sm">© {BRAND}</p>
        </div>
      </footer>
      {lb.node}
      <DesignSwitcher />
    </div>
  );
}
