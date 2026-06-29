import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Clock, MapPin, Check, X, Hotel, Car, UtensilsCrossed, Phone, MessageCircle, Star } from "lucide-react";
import { BRAND, PACKAGES, formatINR, whatsappLink, type TourPackage } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/packages/$slug")({
  loader: ({ params }): TourPackage => {
    const pkg = PACKAGES.find((p) => p.slug === params.slug);
    if (!pkg) throw notFound();
    return pkg;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Tour Package" }] };
    const pkg = loaderData;
    const title = `${pkg.name} | ${formatINR(pkg.startingPrice)} | ${BRAND.name}`;
    const desc = `${pkg.summary} ${pkg.duration} package from ${BRAND.city}. Starting at ${formatINR(pkg.startingPrice)} per person. Call ${BRAND.phone}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "product" },
        { property: "og:image", content: pkg.image },
        { property: "og:url", content: `/packages/${params.slug}` },
        { name: "twitter:image", content: pkg.image },
      ],
      links: [{ rel: "canonical", href: `/packages/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            name: pkg.name,
            description: pkg.summary,
            image: pkg.image,
            touristType: pkg.category,
            itinerary: pkg.itinerary.map((d) => ({ "@type": "ListItem", position: d.day, name: d.title })),
            offers: { "@type": "Offer", price: pkg.startingPrice, priceCurrency: "INR", availability: "https://schema.org/InStock" },
            provider: { "@type": "TravelAgency", name: BRAND.name, telephone: BRAND.phone },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: pkg.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl">Package not found</h1>
      <Link to="/nepal-tour-packages" className="mt-4 inline-block text-primary hover:underline">Browse all packages →</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-24">Something went wrong.</div>,
  component: PackagePage,
});

function PackagePage() {
  const pkg = Route.useLoaderData();
  const related = PACKAGES.filter((p) => p.slug !== pkg.slug).slice(0, 3);
  const enquiryMsg = `Hi Singh Travels, I'm interested in the ${pkg.name} (${pkg.duration}) package starting at ${formatINR(pkg.startingPrice)}.`;

  return (
    <>
      <PageHero
        eyebrow={pkg.category + " · " + pkg.duration}
        title={pkg.name}
        subtitle={pkg.summary}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Tour Packages", to: "/nepal-tour-packages" },
          { label: pkg.name },
        ]}
      />
      <section className="container-page py-12">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
          <img src={pkg.image} alt={pkg.name} width={1280} height={896} className="h-[420px] w-full object-cover" />
        </div>
      </section>

      <section className="container-page grid gap-10 pb-20 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-10">
          <div className="flex flex-wrap gap-3 text-sm">
            <Badge icon={Clock}>{pkg.duration}</Badge>
            <Badge icon={MapPin}>{pkg.destinations.join(" · ")}</Badge>
            <Badge icon={Star}>{pkg.category}</Badge>
          </div>

          <Block title="Tour overview">
            <p>{pkg.summary} Designed for travellers from {BRAND.city} and across India, this {pkg.duration} journey covers {pkg.destinations.join(", ")} with hand-picked stays and private transfers.</p>
          </Block>

          <Block title="Highlights">
            <ul className="grid gap-2 sm:grid-cols-2">
              {pkg.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 text-primary" /><span>{h}</span></li>
              ))}
            </ul>
          </Block>

          <Block title="Day-wise itinerary">
            <ol className="space-y-4">
              {pkg.itinerary.map((d) => (
                <li key={d.day} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[image:var(--gradient-brand)] font-display font-semibold text-brand-foreground">{d.day}</span>
                  <div>
                    <h4 className="font-semibold text-foreground">{d.title}</h4>
                    <p className="text-sm text-muted-foreground">{d.details}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Block>

          <div className="grid gap-6 md:grid-cols-2">
            <Block title="Inclusions" tight>
              <ul className="space-y-2">
                {pkg.inclusions.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-primary" /><span>{i}</span></li>
                ))}
              </ul>
            </Block>
            <Block title="Exclusions" tight>
              <ul className="space-y-2">
                {pkg.exclusions.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm"><X className="mt-0.5 h-4 w-4 text-destructive" /><span>{i}</span></li>
                ))}
              </ul>
            </Block>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <InfoCard icon={Hotel} title="Hotels">{pkg.hotels}</InfoCard>
            <InfoCard icon={Car} title="Transport">{pkg.transport}</InfoCard>
            <InfoCard icon={UtensilsCrossed} title="Meals">{pkg.meals}</InfoCard>
          </div>

          <Block title="Frequently asked questions">
            <div className="divide-y divide-border rounded-xl border border-border bg-card">
              {pkg.faqs.map((f) => (
                <details key={f.q} className="group p-4 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold">
                    {f.q}
                    <span className="ml-4 text-primary transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
                </details>
              ))}
            </div>
          </Block>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting from</p>
            <p className="font-display text-3xl font-semibold text-foreground">{formatINR(pkg.startingPrice)} <span className="text-sm font-normal text-muted-foreground">/ person</span></p>
            <p className="mt-1 text-xs text-muted-foreground">Twin sharing · taxes included</p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={whatsappLink(enquiryMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white">
                <MessageCircle className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a href={BRAND.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-brand-foreground">
                <Phone className="h-4 w-4" /> Call {BRAND.phone}
              </a>
            </div>
          </div>
          <div className="mt-6">
            <EnquiryForm title="Request a custom quote" defaultMessage={enquiryMsg} compact />
          </div>
        </aside>
      </section>

      <section className="bg-brand-soft py-16">
        <div className="container-page">
          <h2 className="font-display text-2xl font-semibold md:text-3xl">You might also like</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => <PackageCard key={p.slug} pkg={p} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function Badge({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 text-xs font-semibold text-primary">
      <Icon className="h-3.5 w-3.5" /> {children}
    </span>
  );
}

function Block({ title, children, tight }: { title: string; children: React.ReactNode; tight?: boolean }) {
  return (
    <div>
      <h2 className={`font-display font-semibold text-foreground ${tight ? "text-xl" : "text-2xl"}`}>{title}</h2>
      <div className="mt-3 text-foreground/85">{children}</div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-primary"><Icon className="h-4 w-4" /></span>
      <h4 className="mt-3 font-semibold">{title}</h4>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </div>
  );
}