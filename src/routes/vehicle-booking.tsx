import { createFileRoute } from "@tanstack/react-router";
import { Users, IndianRupee, Check } from "lucide-react";
import { BRAND, VEHICLES, formatINR, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const TITLE = `Vehicle Booking in ${BRAND.city} for Nepal Tours | ${BRAND.name}`;
const DESC = `Hire AC vehicles in ${BRAND.city} — Innova, Ertiga, Tempo Traveller and mini-buses for Nepal tours, weddings and corporate offsites. Call ${BRAND.phone}.`;

export const Route = createFileRoute("/vehicle-booking")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: `vehicle booking Gorakhpur, Innova hire Gorakhpur, Tempo Traveller Nepal, AC car rental Gorakhpur, Nepal vehicle hire` },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/vehicle-booking" },
    ],
    links: [{ rel: "canonical", href: "/vehicle-booking" }],
  }),
  component: VehicleBookingPage,
});

function VehicleBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Vehicle hire"
        title={`Vehicle booking in ${BRAND.city} for Nepal tours`}
        subtitle="Sedans, SUVs, Tempo Travellers and mini-buses — fully maintained AC vehicles with experienced Nepal-route drivers."
        crumbs={[{ label: "Home", to: "/" }, { label: "Vehicle Booking" }]}
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          {VEHICLES.map((v) => (
            <div key={v.slug} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="font-display text-xl font-semibold">{v.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground"><Users className="mr-1 inline h-3.5 w-3.5" />{v.capacity} · {v.bestFor}</p>
                <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                  {v.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-foreground/80"><Check className="mt-0.5 h-3.5 w-3.5 text-primary" />{f}</li>
                  ))}
                </ul>
              </div>
              <div className="sm:text-right">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Starting</p>
                <p className="font-display text-2xl font-semibold text-foreground"><IndianRupee className="inline h-5 w-5" />{v.pricePerKm}<span className="text-sm font-normal text-muted-foreground"> /km</span></p>
                <p className="text-xs text-muted-foreground">or {formatINR(v.pricePerDay)} / day</p>
                <a
                  href={whatsappLink(`Hi Singh Travels, I'd like to book a ${v.name}.`)}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-3 inline-flex rounded-full bg-[image:var(--gradient-brand)] px-4 py-2 text-xs font-semibold text-brand-foreground"
                >Book {v.name}</a>
              </div>
            </div>
          ))}
          <p className="text-xs text-muted-foreground">* Prices are indicative for Nepal-route trips and may vary based on season, distance and itinerary. Final quote confirmed on enquiry.</p>
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm title="Request a vehicle quote" defaultMessage="Hi Singh Travels, I need a vehicle for a Nepal trip. Please share rates." />
        </aside>
      </section>
    </>
  );
}