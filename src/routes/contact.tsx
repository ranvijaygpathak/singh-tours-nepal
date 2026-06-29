import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const TITLE = `Contact ${BRAND.name} | Nepal tour bookings in ${BRAND.city}`;
const DESC = `Talk to a Nepal tour specialist in ${BRAND.city}. Call ${BRAND.phone}, WhatsApp, or email ${BRAND.email} for a custom quote.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's plan your Nepal trip together."
        subtitle="Reach us any way you like — phone, WhatsApp, email or by visiting our office in Golghar, Gorakhpur."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <Item icon={Phone} title="Call us">
            <a href={BRAND.phoneHref} className="font-semibold text-primary">{BRAND.phone}</a>
          </Item>
          <Item icon={MessageCircle} title="WhatsApp">
            <a href={whatsappLink("Hi Singh Travels!")} className="font-semibold text-primary">Chat now</a>
          </Item>
          <Item icon={Mail} title="Email">
            <a href={`mailto:${BRAND.email}`} className="font-semibold text-primary">{BRAND.email}</a>
          </Item>
          <Item icon={MapPin} title="Office">
            {BRAND.address}
          </Item>
          <Item icon={Clock} title="Hours">
            {BRAND.hours}
          </Item>
          <div className="overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Office location map"
              src="https://www.google.com/maps?q=Golghar,Gorakhpur&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full"
            />
          </div>
        </div>
        <EnquiryForm title="Send us a message" />
      </section>
    </>
  );
}

function Item({ icon: Icon, title, children }: { icon: React.ComponentType<{ className?: string }>; title: string; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-primary"><Icon className="h-5 w-5" /></span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</p>
        <p className="mt-1 text-sm">{children}</p>
      </div>
    </div>
  );
}