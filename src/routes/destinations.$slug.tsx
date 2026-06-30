import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Clock, Mountain, CalendarDays, Check } from "lucide-react";
import { BRAND, PACKAGES, destinationFromSlug, type DestinationDetail } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }): DestinationDetail => {
    const d = destinationFromSlug(params.slug);
    if (!d) throw notFound();
    return d;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Destination" }] };
    const d = loaderData;
    const title = `${d.name} Tour Package from ${BRAND.city} | ${BRAND.name}`;
    const desc = `${d.name} — ${d.tagline}. ${d.description} Book ${d.name} tour from ${BRAND.city} with ${BRAND.name}. Call ${BRAND.phone}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `${d.name} tour package, ${d.name} from Gorakhpur, ${d.name} from India, Nepal ${d.name} trip` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: d.image },
        { property: "og:url", content: `/destinations/${params.slug}` },
        { name: "twitter:image", content: d.image },
      ],
      links: [{ rel: "canonical", href: `/destinations/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristDestination",
            name: d.name,
            description: d.description,
            image: d.image,
            touristType: ["Family", "Religious", "Honeymoon", "Adventure"],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl">Destination not found</h1>
      <Link to="/nepal-tour-packages" className="mt-4 inline-block text-primary hover:underline">Browse packages →</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-24">Something went wrong.</div>,
  component: DestinationPage,
});

function DestinationPage() {
  const d = Route.useLoaderData() as DestinationDetail;
  const related = PACKAGES.filter((p) => p.destinations.includes(d.name)).slice(0, 3);
  return (
    <>
      <PageHero
        eyebrow="Destination"
        title={`${d.name} — ${d.tagline}`}
        subtitle={d.description}
        crumbs={[{ label: "Home", to: "/" }, { label: "Destinations" }, { label: d.name }]}
      />
      <section className="container-page py-12">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
          <img src={d.image} alt={d.name} width={1280} height={896} className="h-[420px] w-full object-cover" />
        </div>
      </section>

      <section className="container-page grid gap-10 pb-20 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-10">
          <div className="grid gap-4 sm:grid-cols-3">
            <Stat icon={CalendarDays} title="Best time">{d.bestTime}</Stat>
            <Stat icon={Clock} title="Recommended">{d.duration}</Stat>
            {d.altitude && <Stat icon={Mountain} title="Altitude">{d.altitude}</Stat>}
          </div>

          <Block title={`Top things to do in ${d.name}`}>
            <div className="grid gap-4 sm:grid-cols-2">
              {d.attractions.map((a) => (
                <div key={a.name} className="rounded-xl border border-border bg-card p-4">
                  <h4 className="font-semibold text-foreground">{a.name}</h4>
                  <p className="mt-1 text-sm text-muted-foreground">{a.about}</p>
                </div>
              ))}
            </div>
          </Block>

          <Block title="How to reach">
            <p>{d.howToReach}</p>
          </Block>

          <Block title="Travel tips">
            <ul className="grid gap-2 sm:grid-cols-2">
              {d.tips.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-primary" />{t}</li>
              ))}
            </ul>
          </Block>

          <Block title="FAQs">
            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {d.faqs.map((f) => (
                <details key={f.q} className="group p-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                    {f.q}<span className="ml-4 text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Block>

          {related.length > 0 && (
            <Block title={`Packages featuring ${d.name}`}>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((p) => <PackageCard key={p.slug} pkg={p} />)}
              </div>
            </Block>
          )}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm title={`Plan my ${d.name} trip`} defaultMessage={`Hi Singh Travels, please send me details for a ${d.name} tour package.`} />
        </aside>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-foreground/85">{children}</div>
    </div>
  );
}

function Stat({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-primary"><Icon className="h-4 w-4" /></span>
      <p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{title}</p>
      <p className="mt-1 font-semibold text-foreground">{children}</p>
    </div>
  );
}