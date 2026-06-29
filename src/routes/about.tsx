import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Heart, MapPin, Users } from "lucide-react";
import { BRAND } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const TITLE = `About ${BRAND.name} | Trusted Nepal tour operator in ${BRAND.city}`;
const DESC = `${BRAND.name} has been crafting Nepal tour packages from ${BRAND.city} since ${BRAND.established}. Learn about our story, team and commitment to traveller-first service.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={`Nepal, the way locals would show their family.`}
        subtitle={`Founded in ${BRAND.city} in ${BRAND.established}, ${BRAND.name} is a family-run travel company with deep roots on both sides of the Indo-Nepal border.`}
        crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
      />
      <section className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-6 text-foreground/85">
          <p>For over {new Date().getFullYear() - BRAND.established} years, families, pilgrims and honeymooners across India have trusted us to design memorable Nepal journeys — from the spiritual heart of Pashupatinath and the sacred grounds of Muktinath, to the Annapurna sunrises of Pokhara and the jungle trails of Chitwan.</p>
          <p>We're not a faceless aggregator. Our team is on the ground in {BRAND.city}, with handpicked partner hotels, vetted drivers, and direct relationships at the Sunauli border — which means smoother trips, faster problem solving, and itineraries that respect your time and budget.</p>
          <p>Every package is fully customisable. Want pure-veg meals only? Need a wheelchair-friendly vehicle? Travelling with senior parents? Just tell us — we tailor the trip to you, not the other way around.</p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {[
              { icon: Users, label: "1,200+ happy travellers" },
              { icon: MapPin, label: "60+ cities served across India" },
              { icon: BadgeCheck, label: `Established ${BRAND.established}` },
              { icon: Heart, label: "Family-run & local" },
            ].map((s) => (
              <div key={s.label} className="flex items-center gap-3 rounded-xl border border-border bg-card p-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-primary"><s.icon className="h-5 w-5" /></span>
                <span className="font-medium">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <EnquiryForm title="Plan a custom tour" />
      </section>
    </>
  );
}