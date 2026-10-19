import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu, Minus, Plus, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DesignSwitcher } from "@/components/presentation/DesignSwitcher";
import { useLightbox } from "@/components/presentation/Lightbox";
import { ProposalFourForm } from "@/components/presentation/ProposalFourForm";
import { BRAND, FACEBOOK_URL, LOGO_TRANSPARENT_URL, PHOTOS, SERVICES } from "@/lib/site-data";
import { FOUR_PROJECTS, nextFourProject } from "@/lib/proposal-four";

export const Route = createFileRoute("/navrh-4")({
  head: () => ({
    meta: [
      { title: "Od nákresu k realizaci — Truhlářství Slavík | Návrh 4" },
      { name: "description", content: "Zakázkový nábytek z masivu a dřeva s epoxidem. Prohlédněte si skutečné realizace Truhlářství Slavík v podobě otevřeného návrhového listu." },
      { property: "og:title", content: "Od nákresu k realizaci — Truhlářství Slavík" },
      { property: "og:description", content: "Začíná to představou. Končí poctivým řemeslem. Skutečné realizace nábytku z masivního dřeva." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: PHOTOS.epoxyRecepce.src },
      { name: "twitter:image", content: PHOTOS.epoxyRecepce.src },
    ],
  }),
  component: ProposalFour,
});

const navigation = [
  { id: "uvod", title: "Úvod" }, { id: "realizace", title: "Realizace" },
  { id: "prace", title: "Naše práce" }, { id: "spoluprace", title: "Spolupráce" }, { id: "kontakt", title: "Kontakt" },
];
const steps = [
  { title: "Vaše představa", text: "Co potřebujete a kam má nový kus přijít? Začneme vaším přáním." },
  { title: "Upřesnění a návrh řešení", text: "Probereme podobu, dřevinu, rozměry a další detaily zadání." },
  { title: "Výroba", text: "Z odsouhlasené představy vzniká skutečný kus nábytku." },
  { title: "Předání", text: "Hotový výrobek a domluva na jeho předání." },
];
const servicePhotos = [PHOTOS.postel, null, null, PHOTOS.epoxyDesky, null];
const number = (value: number) => String(value + 1).padStart(2, "0");

function ProposalFour() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("uvod");
  const [draft, setDraft] = useState(false);
  const [project, setProject] = useState(0);
  const [service, setService] = useState<number | null>(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const lightbox = useLightbox(FOUR_PROJECTS);
  const photo = FOUR_PROJECTS[project] ?? FOUR_PROJECTS[0];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActiveSection(entry.target.id);
    }, { rootMargin: "-15% 0px -55% 0px" });
    navigation.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="d4-page">
      <aside className="d4-rail">
        <a href="#uvod" aria-label="Truhlářství Slavík — úvod" onClick={() => setMenuOpen(false)}><img src={LOGO_TRANSPARENT_URL} alt={BRAND} className="d4-logo" /></a>
        <Button variant="ghost" size="icon" className="d4-mobile-menu d4-icon" aria-label={menuOpen ? "Zavřít menu" : "Otevřít menu"} aria-expanded={menuOpen} aria-controls="d4-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
        <nav id="d4-navigation" aria-label="Hlavní navigace" className={`d4-navigation ${menuOpen ? "is-open" : ""}`}>
          <p className="d4-micro d4-rail-label">Návrhový list / 04</p>
          {navigation.map((item, index) => <a key={item.id} href={`#${item.id}`} aria-current={activeSection === item.id ? "location" : undefined} onClick={() => setMenuOpen(false)}><span className="d4-micro">{number(index)}</span>{item.title}<ArrowUpRight aria-hidden="true" /></a>)}
          <Button asChild className="d4-cta d4-rail-cta"><a href="#kontakt" onClick={() => setMenuOpen(false)}>Poptat zakázku <ArrowUpRight /></a></Button>
        </nav>
        <div className="d4-rail-foot"><p>Masiv. Detail. Řemeslo.</p><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Facebook <ArrowUpRight size={14} /></a></div>
      </aside>

      <main className="d4-workspace">
        <section id="uvod" className="d4-intro d4-section">
          <div className="d4-sheet-heading d4-micro"><span>Truhlářství Slavík</span><span>Od nákresu k realizaci <span className="d4-cross">+</span></span></div>
          <h1>Začíná to představou<span className="d4-accent">.</span></h1>
          <div className={`d4-drawing-sheet ${draft ? "is-draft" : ""}`}>
            <div className="d4-image-meta"><span className="d4-micro"><span className="d4-accent">01</span> / Masiv & epoxid</span><div className="d4-mode" role="group" aria-label="Zobrazení realizace"><Button variant="ghost" aria-pressed={draft} onClick={() => setDraft(true)}>Nákres</Button><Button variant="ghost" aria-pressed={!draft} onClick={() => setDraft(false)}>Realizace</Button></div></div>
            <div className="d4-hero-frame">
              <Button variant="ghost" className="d4-hero-photo" aria-label="Zvětšit úvodní realizaci" onClick={() => lightbox.open(0)}><img src={PHOTOS.epoxyRecepce.src} alt={PHOTOS.epoxyRecepce.alt} fetchPriority="high" /><span className="d4-photo-zoom"><ZoomIn size={18} /></span></Button>
              <span className="d4-guide d4-guide-top" aria-hidden="true" /><span className="d4-guide d4-guide-side" aria-hidden="true" />
            </div>
            <div className="d4-image-caption d4-micro"><span>{draft ? "Ilustrační rám · skutečná fotografie" : "Realizace 01"}</span><span>Masivní deska s tyrkysovou epoxidovou výplní</span></div>
          </div>
          <h2 className="d4-intro-finish">Končí poctivým řemeslem<span className="d4-accent">.</span></h2>
          <div className="d4-intro-bottom"><p>Zakázkový nábytek z masivního dřeva.<br />Vaše představa, přirozená kresba dřeva a práce našich rukou.</p><Button asChild className="d4-cta"><a href="#kontakt">Probrat můj projekt <ArrowUpRight /></a></Button><a href="#realizace" className="d4-down" aria-label="Přejít k realizacím"><ArrowDown /></a></div>
        </section>

        <section id="realizace" className="d4-section d4-project-section">
          <SectionHeading index="02" label="Realizace" title="Z naší dílny." aside="Každý kus má svůj příběh." />
          <div className="d4-project-browser">
            <div className="d4-project-main">
              <Button variant="ghost" className="d4-project-image" aria-label={`Zvětšit: ${photo.title}`} onClick={() => lightbox.open(project)} onTouchStart={(event) => { const touch = event.touches[0]; if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY }; }} onTouchEnd={(event) => { const end = event.changedTouches[0]; const start = touchStart.current; if (end && start && Math.abs(end.clientX - start.x) > 45 && Math.abs(end.clientX - start.x) > Math.abs(end.clientY - start.y)) setProject(nextFourProject(project, end.clientX > start.x ? -1 : 1)); touchStart.current = null; }}>
                <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" /><span className="d4-photo-zoom"><ZoomIn size={20} /></span>
              </Button>
              <div className="d4-project-toolbar"><div aria-live="polite"><span className="d4-micro d4-accent">{number(project)} / {String(FOUR_PROJECTS.length).padStart(2, "0")}</span><h3>{photo.title}</h3></div><div className="d4-arrows"><Button variant="ghost" size="icon" className="d4-icon" aria-label="Předchozí realizace" title="Předchozí realizace" onClick={() => setProject(nextFourProject(project, -1))}><ArrowLeft /></Button><Button variant="ghost" size="icon" className="d4-icon" aria-label="Další realizace" title="Další realizace" onClick={() => setProject(nextFourProject(project, 1))}><ArrowRight /></Button></div></div>
              <p className="d4-project-description">{photo.alt}.</p>
            </div>
            <div className="d4-project-list" role="group" aria-label="Výběr realizace"><p className="d4-micro">Listy realizací</p>{FOUR_PROJECTS.map((item, index) => <Button key={item.src} variant="ghost" aria-pressed={project === index} onClick={() => setProject(index)}><span className="d4-micro">{number(index)}</span><span>{item.title}</span><ArrowUpRight /></Button>)}</div>
          </div>
        </section>

        <section id="prace" className="d4-section">
          <SectionHeading index="03" label="Naše práce" title="Co spolu vyrobíme." aside="Materiál, který dává smysl." />
          <div className="d4-services">{SERVICES.map((item, index) => {
            const image = servicePhotos[index];
            return <article key={item.title}><h3><Button variant="ghost" aria-expanded={service === index} aria-controls={`d4-service-${index}`} onClick={() => setService(service === index ? null : index)}><span className="d4-micro">{number(index)}</span><span>{item.title}</span>{service === index ? <Minus /> : <Plus />}</Button></h3><div id={`d4-service-${index}`} hidden={service !== index} className="d4-service-detail"><p>{item.text}</p>{image && <img src={image.src} alt={image.alt} loading="lazy" />}</div></article>;
          })}</div>
        </section>

        <section id="spoluprace" className="d4-section d4-process-section">
          <SectionHeading index="04" label="Spolupráce" title="Od nápadu k hotovému kusu." />
          <div className="d4-process">{steps.map((step, index) => <article key={step.title}><div className="d4-step-marker"><span className="d4-micro">{number(index)}</span><Plus size={15} aria-hidden="true" /></div><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
          <p className="d4-micro d4-process-note">Pracovní postup — k potvrzení klientem.</p>
        </section>

        <section id="kontakt" className="d4-section d4-contact-section">
          <SectionHeading index="05" label="Nový projekt" title="Co spolu vyrobíme?" />
          <div className="d4-contact-layout"><ProposalFourForm /><aside className="d4-contact-details"><span className="d4-micro">Truhlářství Slavík</span><p>Poctivá práce.<br />Začíná u dobré domluvy.</p><dl><dt>E-mail</dt><dd>K doplnění</dd><dt>Telefon</dt><dd>K doplnění</dd><dt>Oblast působení</dt><dd>K doplnění</dd></dl><a href={FACEBOOK_URL} target="_blank" rel="noreferrer">Najdete nás na Facebooku <ArrowUpRight size={18} /></a></aside></div>
        </section>
        <footer className="d4-footer"><span>{BRAND}</span><span className="d4-micro">Od nákresu k realizaci / Návrh 04</span><a href="#uvod">Zpět nahoru <ArrowUpRight size={16} /></a></footer>
      </main>
      <DesignSwitcher />
      {lightbox.node}
    </div>
  );
}

function SectionHeading({ index, label, title, aside }: { index: string; label: string; title: string; aside?: string }) {
  return <header className="d4-section-heading"><div className="d4-micro"><span className="d4-accent">{index}</span> / {label}</div><div><h2>{title}</h2>{aside && <p>{aside}</p>}</div></header>;
}