import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { BRAND } from "@/lib/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/nepal-tour-packages", label: "Tour Packages" },
  { to: "/destinations/kathmandu", label: "Destinations" },
  { to: "/taxi-booking", label: "Taxi" },
  { to: "/vehicle-booking", label: "Vehicles" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] text-brand-foreground font-display text-lg font-bold">S</span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold text-foreground">{BRAND.shortName}</span>
            <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">Gorakhpur · Est. {BRAND.established}</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <a
            href={BRAND.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-soft)] transition hover:opacity-95"
          >
            <Phone className="h-4 w-4" /> {BRAND.phone}
          </a>
        </div>
        <button className="lg:hidden" aria-label="Toggle menu" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-3">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-medium text-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={BRAND.phoneHref}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-sm font-semibold text-brand-foreground"
            >
              <Phone className="h-4 w-4" /> {BRAND.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}