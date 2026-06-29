import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { BRAND, CITIES, DESTINATIONS } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-brand-deep text-brand-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15 font-display text-lg font-bold">S</span>
            <span className="font-display text-lg font-semibold">{BRAND.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Trusted Nepal tour operator based in {BRAND.city}, organising curated Nepal tour packages since {BRAND.established}.
          </p>
          <div className="mt-5 space-y-2 text-sm text-white/80">
            <p className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {BRAND.address}</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> <a href={BRAND.phoneHref} className="hover:underline">{BRAND.phone}</a></p>
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> <a href={`mailto:${BRAND.email}`} className="hover:underline">{BRAND.email}</a></p>
            <p className="flex items-center gap-2"><Clock className="h-4 w-4" /> {BRAND.hours}</p>
          </div>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold">Destinations</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            {DESTINATIONS.map((d) => (
              <li key={d.slug}>
                <Link to="/nepal-tour-packages" hash={d.slug} className="hover:text-white">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/75">
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/nepal-tour-packages" className="hover:text-white">Tour Packages</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-display text-base font-semibold">Popular Routes</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 text-sm text-white/75">
            {CITIES.slice(0, 12).map((c) => (
              <li key={c.slug}>
                <Link to="/nepal-tour-package-from/$city" params={{ city: c.slug }} className="hover:text-white">
                  from {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-5 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</p>
          <p>Crafted with care in Gorakhpur, India.</p>
        </div>
      </div>
    </footer>
  );
}