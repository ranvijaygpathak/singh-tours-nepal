import { Link } from "@tanstack/react-router";
import { MapPin, Clock, ArrowRight } from "lucide-react";
import type { TourPackage } from "@/lib/site";
import { formatINR } from "@/lib/site";

export function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <Link
      to="/packages/$slug"
      params={{ slug: pkg.slug }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          width={1280}
          height={896}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
          {pkg.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">{pkg.name}</h3>
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{pkg.destinations.join(" · ")}</span>
          <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{pkg.duration}</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm text-muted-foreground">{pkg.summary}</p>
        <div className="mt-5 flex items-center justify-between">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Starting</span>
            <div className="font-display text-xl font-semibold text-foreground">{formatINR(pkg.startingPrice)}<span className="text-xs text-muted-foreground"> / person</span></div>
          </div>
          <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">View <ArrowRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  );
}