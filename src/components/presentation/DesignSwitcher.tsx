import { Link } from "@tanstack/react-router";

const items = [
  { to: "/navrh-1", label: "Návrh 1" },
  { to: "/navrh-2", label: "Návrh 2" },
  { to: "/navrh-3", label: "Návrh 3" },
] as const;

/** Presentation helper only — not part of the final website. */
export function DesignSwitcher() {
  return (
    <nav
      aria-label="Přepínač návrhů (pomůcka pro prezentaci)"
      className="fixed bottom-4 left-1/2 z-[90] -translate-x-1/2 rounded-full border border-sw-border bg-sw-bg/90 p-1 font-sw text-xs text-sw-fg shadow-lg backdrop-blur"
    >
      <div className="flex items-center gap-1">
        <Link to="/" className="rounded-full px-3 py-2 text-sw-muted hover:text-sw-fg focus-visible:outline-2 focus-visible:outline-sw-fg" title="Zpět na výběr návrhů">
          Prezentace
        </Link>
        {items.map((i) => (
          <Link
            key={i.to}
            to={i.to}
            className="rounded-full px-3 py-2 transition hover:bg-sw-fg/10 focus-visible:outline-2 focus-visible:outline-sw-fg"
            activeProps={{ className: "bg-sw-fg !text-sw-bg", "aria-current": "page" }}
          >
            {i.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
