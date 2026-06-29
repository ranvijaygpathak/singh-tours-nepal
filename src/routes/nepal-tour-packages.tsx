import { createFileRoute } from "@tanstack/react-router";
import { BRAND, PACKAGES } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { PackageCard } from "@/components/site/PackageCard";

const TITLE = `Nepal Tour Packages from ${BRAND.city} | ${BRAND.name}`;
const DESC = `Browse all Nepal tour packages from ${BRAND.city} — Kathmandu, Pokhara, Muktinath, Lumbini, Janakpur and Chitwan. Family, honeymoon, religious and adventure tours.`;

export const Route = createFileRoute("/nepal-tour-packages")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/nepal-tour-packages" },
    ],
    links: [{ rel: "canonical", href: "/nepal-tour-packages" }],
  }),
  component: ListPage,
});

function ListPage() {
  return (
    <>
      <PageHero
        eyebrow="Tour packages"
        title={`Nepal tour packages from ${BRAND.city}`}
        subtitle="Carefully crafted itineraries with transparent pricing. Every package is fully customisable — talk to us to tailor your own."
        crumbs={[{ label: "Home", to: "/" }, { label: "Tour Packages" }]}
      />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => <PackageCard key={p.slug} pkg={p} />)}
        </div>
      </section>
    </>
  );
}