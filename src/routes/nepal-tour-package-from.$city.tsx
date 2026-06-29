import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, MapPin, Check } from "lucide-react";
import { BRAND, PACKAGES, CITIES, cityFromSlug, whatsappLink, IMAGES } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PackageCard } from "@/components/site/PackageCard";

export const Route = createFileRoute("/nepal-tour-package-from/$city")({
  loader: ({ params }) => cityFromSlug(params.city),
  head: ({ loaderData, params }) => {
    const city = loaderData ?? cityFromSlug(params.city);
    const title = `Nepal Tour Package from ${city.name} | ${BRAND.name} ${BRAND.city}`;
    const desc = `Best Nepal tour packages from ${city.name}, ${city.state}. Kathmandu, Pokhara, Muktinath, Lumbini, Janakpur & Chitwan tours with pickup support from ${BRAND.city}. Call ${BRAND.phone}.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: `Nepal tour package from ${city.name}, Nepal trip from ${city.name}, Kathmandu Pokhara from ${city.name}, Muktinath yatra from ${city.name}` },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/nepal-tour-package-from/${params.city}` },
        { property: "og:image", content: IMAGES.hero },
        { name: "twitter:image", content: IMAGES.hero },
      ],
      links: [{ rel: "canonical", href: `/nepal-tour-package-from/${params.city}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: `Nepal tour package from ${city.name}`,
            provider: { "@type": "TravelAgency", name: BRAND.name, telephone: BRAND.phone },
            areaServed: { "@type": "City", name: city.name },
          }),
        },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const city = Route.useLoaderData() as { slug: string; name: string; state: string };
  const enquiryMsg = `Hi Singh Travels, I'm from ${city.name} and want a Nepal tour package quote.`;

  return (
    <>
      <PageHero
        eyebrow={`From ${city.state}`}
        title={`Nepal Tour Package from ${city.name}`}
        subtitle={`Plan your Nepal trip from ${city.name} with ${BRAND.name} — a trusted Nepal tour operator based in ${BRAND.city}. We help travellers from ${city.name} reach Nepal smoothly with pre-arranged hotels, AC vehicles, border assistance and customisable itineraries.`}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Tour Packages", to: "/nepal-tour-packages" },
          { label: `From ${city.name}` },
        ]}
      />

      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8">
          <Section title={`Why travellers from ${city.name} love booking Nepal tours with us`}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {[
                `Pickup coordination from ${city.name} to ${BRAND.city}`,
                "All packages start and end at Gorakhpur (Sunauli border)",
                "Hand-picked hotels in Kathmandu, Pokhara & beyond",
                "Private AC vehicle and experienced drivers",
                "Pure-veg or non-veg meal options",
                "Transparent pricing — no hidden charges",
              ].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-primary" /><span>{b}</span></li>
              ))}
            </ul>
          </Section>

          <Section title={`How to reach Nepal from ${city.name}`}>
            <p>From {city.name}, the most convenient route is to travel to Gorakhpur (by train or flight) where our team takes over for the journey to Nepal via the Sunauli border. We coordinate your arrival timings, offer station/airport pickup, and start the Nepal tour straight away.</p>
            <p className="mt-3">Once at the border, formalities are quick — Indian travellers only need a valid Aadhaar, Voter ID, or Passport. Our staff handles the entire process for you.</p>
          </Section>

          <Section title={`Popular Nepal tour packages for travellers from ${city.name}`}>
            <div className="grid gap-6 sm:grid-cols-2">
              {PACKAGES.slice(0, 4).map((p) => <PackageCard key={p.slug} pkg={p} />)}
            </div>
          </Section>

          <Section title={`Best time for Nepal trips from ${city.name}`}>
            <p>October to April offers the clearest Himalayan views and the most pleasant weather. Spring (March–May) is excellent for sightseeing and pilgrimage; autumn (October–November) is the most popular festival season. We recommend avoiding heavy monsoon (July–August) for mountain regions.</p>
          </Section>

          <Section title={`Plan a custom Nepal tour from ${city.name}`}>
            <p>Every itinerary is fully customisable — extend days, upgrade hotels, add Muktinath, Chitwan or Lumbini. Send us your preferences and we'll respond within an hour with a tailor-made quote.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={whatsappLink(enquiryMsg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white">
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
              <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-brand-foreground">
                <Phone className="h-4 w-4" /> {BRAND.phone}
              </a>
            </div>
          </Section>
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm title={`Quote for ${city.name}`} defaultMessage={enquiryMsg} />
          <div className="mt-6 rounded-2xl border border-border bg-brand-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">More cities</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {CITIES.filter((c) => c.slug !== city.slug).slice(0, 14).map((c) => (
                <Link
                  key={c.slug}
                  to="/nepal-tour-package-from/$city"
                  params={{ city: c.slug }}
                  className="rounded-full bg-card px-3 py-1 ring-1 ring-border hover:text-primary"
                >
                  <MapPin className="mr-1 inline h-3 w-3" />{c.name}
                </Link>
              ))}
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-foreground">{title}</h2>
      <div className="mt-3 text-foreground/85">{children}</div>
    </div>
  );
}