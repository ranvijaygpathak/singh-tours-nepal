import { Breadcrumbs, type Crumb } from "./Breadcrumbs";

export function PageHero({
  eyebrow, title, subtitle, crumbs,
}: { eyebrow?: string; title: string; subtitle?: string; crumbs: Crumb[] }) {
  return (
    <section className="border-b border-border bg-brand-soft">
      <div className="container-page py-12 md:py-16">
        <Breadcrumbs items={crumbs} />
        {eyebrow && <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl font-display text-4xl font-semibold text-foreground md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}