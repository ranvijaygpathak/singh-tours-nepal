import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star, Phone, ShieldCheck, BadgeCheck, Headphones, MapPin, Sparkles } from "lucide-react";
import { BRAND, IMAGES, PACKAGES, DESTINATIONS, TESTIMONIALS, FAQS, CITIES, whatsappLink, formatINR } from "@/lib/site";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { PackageCard } from "@/components/site/PackageCard";

const TITLE = `Nepal Tour Packages from ${BRAND.city} | ${BRAND.name}`;
const DESC = `Book affordable Nepal tour packages from ${BRAND.city} & across India — Kathmandu, Pokhara, Muktinath, Lumbini & Chitwan. Trusted since ${BRAND.established}. Call ${BRAND.phone}.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Nepal tour package from Gorakhpur, Nepal tour from India, Kathmandu Pokhara package, Muktinath yatra, Lumbini tour, Chitwan safari, Singh Tour and Travels Gorakhpur" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMAGES.hero },
      { name: "twitter:image", content: IMAGES.hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.slice(0, 5).map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featured = PACKAGES.filter((p) => p.featured);
  return (
    <>
      <Hero />
      <TrustBar />
      <Featured packages={featured} />
      <Destinations />
      <WhyChoose />
      <Testimonials />
      <CityLinks />
      <FAQSection />
      <EnquirySection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={IMAGES.hero}
        alt="Annapurna Himalayan range at sunrise over Phewa Lake, Nepal"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[image:var(--gradient-hero)]" />
      <div className="container-page py-20 md:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Nepal specialists since {BRAND.established}
            </span>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Nepal tour packages, <br className="hidden md:block" /> crafted in {BRAND.city}.
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Kathmandu · Pokhara · Muktinath · Lumbini · Janakpur · Chitwan. Family, honeymoon and pilgrimage tours with hand-picked hotels, private vehicles and zero hidden charges.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/nepal-tour-packages"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-elegant)] transition hover:opacity-95"
              >
                Browse Packages <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hi Singh Travels, I'd like to know more about your Nepal packages.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Chat on WhatsApp
              </a>
              <a
                href={BRAND.phoneHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:bg-white/90"
              >
                <Phone className="h-4 w-4" /> {BRAND.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-white/85">
              <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-gold text-gold" /> 4.9 / 5 across 1,200+ travellers</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Govt. registered operator</span>
            </div>
          </div>
          <div className="lg:justify-self-end lg:w-[440px]">
            <EnquiryForm title="Plan my Nepal trip" compact />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: BadgeCheck, label: "Registered tour operator" },
    { icon: ShieldCheck, label: "100% safe & transparent" },
    { icon: Headphones, label: "24×7 travel support" },
    { icon: Star, label: "4.9★ Google rating" },
  ];
  return (
    <section className="border-y border-border bg-card">
      <div className="container-page grid grid-cols-2 gap-4 py-6 md:grid-cols-4">
        {items.map((it) => (
          <div key={it.label} className="flex items-center gap-3 text-sm">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft text-primary">
              <it.icon className="h-4 w-4" />
            </span>
            <span className="font-medium text-foreground">{it.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Featured({ packages }: { packages: typeof PACKAGES }) {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Featured packages</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Bestselling Nepal tours from {BRAND.city}</h2>
        </div>
        <Link to="/nepal-tour-packages" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
          View all packages <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((p) => <PackageCard key={p.slug} pkg={p} />)}
      </div>
    </section>
  );
}

function Destinations() {
  return (
    <section className="bg-brand-soft py-16 md:py-24">
      <div className="container-page">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Popular destinations</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Where will Nepal take you?</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DESTINATIONS.map((d) => (
            <div key={d.slug} className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-soft)] transition hover:shadow-[var(--shadow-elegant)]">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={d.image} alt={d.name} loading="lazy" width={1280} height={896} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{d.name}</h3>
                <p className="text-sm text-muted-foreground">{d.tagline}</p>
                <p className="mt-2 text-sm text-foreground/75">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { title: "Local Gorakhpur team", desc: "Founded and run from Gorakhpur — we know the Sunauli border and Nepal routes inside-out." },
    { title: "Hand-picked hotels", desc: "We personally inspect every hotel. No surprises on arrival." },
    { title: "All-inclusive pricing", desc: "What you see is what you pay — taxes, transfers and tolls included." },
    { title: "1-hour quote turnaround", desc: "Send an enquiry and get a custom quote within an hour, even on weekends." },
  ];
  return (
    <section className="container-page py-16 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why travellers choose us</p>
      <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold md:text-4xl">The most trusted Nepal tour operator in eastern UP.</h2>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <div key={it.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-primary"><BadgeCheck className="h-5 w-5" /></span>
            <h3 className="mt-4 font-display text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-brand-deep py-16 text-brand-foreground md:py-24">
      <div className="container-page">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What travellers say</p>
        <h2 className="mt-2 max-w-2xl font-display text-3xl font-semibold md:text-4xl">Stories from 1,200+ happy travellers.</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
              <div className="flex text-gold">
                {Array.from({ length: t.rating }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-3 text-sm text-white/85">"{t.text}"</p>
              <p className="mt-4 text-sm font-semibold">{t.name} <span className="font-normal text-white/60">· {t.city}</span></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CityLinks() {
  return (
    <section className="container-page py-16 md:py-24">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Pan-India bookings</p>
      <h2 className="mt-2 max-w-3xl font-display text-3xl font-semibold md:text-4xl">Nepal tour packages from every major Indian city.</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">We arrange seamless pickup from {BRAND.city} for travellers arriving from any city across India.</p>
      <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {CITIES.slice(0, 24).map((c) => (
          <Link
            key={c.slug}
            to="/nepal-tour-package-from/$city"
            params={{ city: c.slug }}
            className="group flex items-center justify-between rounded-lg border border-border bg-card px-4 py-3 text-sm transition hover:border-primary hover:bg-brand-soft"
          >
            <span className="font-medium text-foreground"><MapPin className="mr-2 inline h-3.5 w-3.5 text-primary" />Nepal Tour from {c.name}</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary" />
          </Link>
        ))}
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-brand-soft py-16 md:py-24">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Good to know</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Frequently asked questions</h2>
          <p className="mt-4 text-muted-foreground">Can't find the answer? <Link to="/contact" className="font-semibold text-primary hover:underline">Get in touch</Link> — we usually reply within an hour.</p>
        </div>
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-foreground">
                {f.q}
                <span className="ml-4 text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function EnquirySection() {
  return (
    <section className="container-page py-16 md:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ready when you are</p>
          <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">Let's plan your Nepal trip.</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you have in mind. We'll send back a custom itinerary with transparent pricing — usually within an hour.</p>
          <div className="mt-6 space-y-3 text-sm">
            <p>📞 Call: <a href={BRAND.phoneHref} className="font-semibold text-primary">{BRAND.phone}</a></p>
            <p>💬 WhatsApp: <a href={whatsappLink("Hi Singh Travels!")} className="font-semibold text-primary">+91 {BRAND.whatsapp.slice(2)}</a></p>
            <p>✉️ Email: <a href={`mailto:${BRAND.email}`} className="font-semibold text-primary">{BRAND.email}</a></p>
            <p>📍 Office: {BRAND.address}</p>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">Starting prices from <span className="font-display text-lg text-foreground">{formatINR(8999)}</span> per person.</p>
        </div>
        <EnquiryForm />
      </div>
    </section>
  );
}
