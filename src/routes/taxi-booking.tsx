import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Check } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const TITLE = `Taxi Booking in ${BRAND.city} | Gorakhpur to Nepal Taxi Service | ${BRAND.name}`;
const DESC = `Taxi booking in ${BRAND.city} — one-way and round-trip cabs from Gorakhpur to Kathmandu, Pokhara, Muktinath, Lumbini, Chitwan and Sunauli border. Airport & railway pickup, 24x7 booking. Call ${BRAND.phone}.`;

const ROUTES = [
  { from: "Gorakhpur", to: "Kathmandu", price: 11000 },
  { from: "Gorakhpur", to: "Pokhara", price: 14000 },
  { from: "Gorakhpur", to: "Lumbini", price: 3500 },
  { from: "Gorakhpur", to: "Janakpur", price: 6500 },
  { from: "Gorakhpur", to: "Chitwan", price: 9500 },
  { from: "Gorakhpur", to: "Muktinath (via Pokhara)", price: 22000 },
  { from: "Gorakhpur Airport", to: "Sunauli Border", price: 2200 },
  { from: "Gorakhpur Railway", to: "Bhairahawa Airport", price: 2800 },
];

export const Route = createFileRoute("/taxi-booking")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "taxi booking in Gorakhpur, Gorakhpur taxi service, taxi Gorakhpur to Kathmandu, Gorakhpur to Nepal taxi, Gorakhpur airport taxi, Sunauli taxi, Pokhara taxi from Gorakhpur, Muktinath taxi from Gorakhpur" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/taxi-booking" },
    ],
    links: [{ rel: "canonical", href: "/taxi-booking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TaxiService",
          name: `${BRAND.name} Taxi Service`,
          areaServed: "Gorakhpur, Nepal",
          telephone: BRAND.phone,
          provider: { "@type": "TravelAgency", name: BRAND.name },
        }),
      },
    ],
  }),
  component: TaxiPage,
});

function TaxiPage() {
  return (
    <>
      <PageHero
        eyebrow="Taxi service"
        title={`Taxi booking from ${BRAND.city}`}
        subtitle="One-way and round-trip taxis for Nepal, airport transfers and intercity travel — clean cars, verified drivers, fair fares."
        crumbs={[{ label: "Home", to: "/" }, { label: "Taxi Booking" }]}
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-8">
          <div>
            <h2 className="font-display text-2xl font-semibold">Popular taxi routes</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ROUTES.map((r) => (
                <div key={r.from + r.to} className="flex items-center justify-between rounded-xl border border-border bg-card px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold">{r.from} → {r.to}</p>
                    <p className="text-xs text-muted-foreground">One-way · sedan · AC</p>
                  </div>
                  <p className="font-display text-lg font-semibold text-primary">₹{r.price.toLocaleString("en-IN")}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-muted-foreground">* Indicative one-way fares for sedan. SUV / Tempo rates differ. Toll & border charges extra where applicable.</p>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Why book a taxi with us</h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {["Verified Nepal-route drivers","Clean, sanitised AC vehicles","Transparent up-front fares","24×7 phone & WhatsApp booking","Free pickup at Gorakhpur airport/railway","GST invoicing for companies"].map((b) => (
                <li key={b} className="flex items-start gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 text-primary" />{b}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href={BRAND.phoneHref} className="inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-brand-foreground">
              <Phone className="h-4 w-4" /> Call {BRAND.phone}
            </a>
            <a href={whatsappLink("Hi Singh Travels, I'd like to book a taxi.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-5 py-3 text-sm font-semibold text-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp to book
            </a>
            <Link to="/vehicle-booking" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground hover:border-primary">
              See full vehicle list
            </Link>
          </div>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm title="Book a taxi" defaultMessage="Hi Singh Travels, I'd like to book a taxi. Route + date below:" />
        </aside>
      </section>
    </>
  );
}