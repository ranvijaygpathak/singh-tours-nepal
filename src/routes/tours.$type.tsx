import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { BRAND, IMAGES, PACKAGES, tourTypeFromSlug, type TourTypeInfo } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/tours/$type")({
  loader: ({ params }): TourTypeInfo => {
    const t = tourTypeFromSlug(params.type);
    if (!t) throw notFound();
    return t;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Tour Type" }] };
    const t = loaderData;
    const title = `Nepal ${t.name} from ${BRAND.city} | ${BRAND.name}`;
    const desc = `${t.intro} Book Nepal ${t.name.toLowerCase()} from ${BRAND.city} with ${BRAND.name}. Call ${BRAND.phone}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `Nepal ${t.name}, Nepal ${t.category} tour, ${t.name} from Gorakhpur, Nepal ${t.category} package` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: IMAGES.hero },
        { property: "og:url", content: `/tours/${params.type}` },
        { name: "twitter:image", content: IMAGES.hero },
      ],
      links: [{ rel: "canonical", href: `/tours/${params.type}` }],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl">Tour type not found</h1>
      <Link to="/nepal-tour-packages" className="mt-4 inline-block text-primary hover:underline">Browse packages →</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-24">Something went wrong.</div>,
  component: TourTypePage,
});

function TourTypePage() {
  const t = Route.useLoaderData() as TourTypeInfo;
  const matches = PACKAGES.filter((p) => p.category === t.category);
  return (
    <>
      <PageHero
        eyebrow={t.category + " Tours"}
        title={`Nepal ${t.name} from ${BRAND.city}`}
        subtitle={t.tagline}
        crumbs={[{ label: "Home", to: "/" }, { label: "Tour Types" }, { label: t.name }]}
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8">
          <p className="text-foreground/85">{t.intro}</p>
          <div>
            <h2 className="font-display text-2xl font-semibold">What's special</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {t.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-primary" />{b}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Recommended {t.name.toLowerCase()}</h2>
            {matches.length === 0 ? (
              <p className="mt-3 text-sm text-muted-foreground">We craft every {t.name.toLowerCase()} on request — share your dates and we'll build a custom itinerary.</p>
            ) : (
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {matches.map((p) => <PackageCard key={p.slug} pkg={p} />)}
              </div>
            )}
          </div>

          <Link to="/nepal-tour-packages" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            View all Nepal tour packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm title={`Plan my ${t.name}`} defaultMessage={`Hi Singh Travels, I'd like a Nepal ${t.name} quote.`} />
        </aside>
      </section>
    </>
  );
}