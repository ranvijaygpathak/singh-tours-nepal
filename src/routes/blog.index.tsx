import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";
import { BRAND, BLOG_POSTS } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

const TITLE = `Nepal Travel Blog | ${BRAND.name}`;
const DESC = `Travel tips, itineraries and guides for Nepal trips from ${BRAND.city} and across India — curated by ${BRAND.name}.`;

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <PageHero
        eyebrow="Travel blog"
        title="Stories, guides and tips for Nepal travellers"
        subtitle="Honest, detailed Nepal travel writing from our team in Gorakhpur."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />
      <section className="container-page py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {BLOG_POSTS.map((p) => (
            <Link
              key={p.slug}
              to="/blog/$slug"
              params={{ slug: p.slug }}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.cover} alt={p.title} loading="lazy" width={1280} height={800} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.category}</span>
                <h2 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">{p.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "numeric" })}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readMins} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}