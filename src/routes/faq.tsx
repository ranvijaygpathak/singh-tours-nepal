import { createFileRoute } from "@tanstack/react-router";
import { BRAND, FAQS } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const TITLE = `Nepal Tour FAQ | ${BRAND.name}`;
const DESC = `Visa, ID proof, payment, weather, hotels, customisation — everything you need to know before booking your Nepal tour from India.`;

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Everything you wanted to ask about Nepal travel."
        subtitle="Visa, payment, hotels, weather, customisation — all in one place."
        crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr]">
        <div className="divide-y divide-border rounded-2xl border border-border bg-card">
          {FAQS.map((f) => (
            <details key={f.q} className="group p-5 [&_summary::-webkit-details-marker]:hidden" open>
              <summary className="flex cursor-pointer items-center justify-between text-base font-semibold text-foreground">
                {f.q}
                <span className="ml-4 text-primary transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
        <EnquiryForm title="Still have a question?" />
      </section>
    </>
  );
}