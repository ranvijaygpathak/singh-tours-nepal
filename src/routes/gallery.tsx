import { createFileRoute } from "@tanstack/react-router";
import { BRAND, GALLERY_IMAGES } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";

const TITLE = `Nepal Tour Gallery | ${BRAND.name}`;
const DESC = `Photos from our Nepal tours — Kathmandu, Pokhara, Muktinath, Lumbini, Janakpur and Chitwan, captured by travellers and our team.`;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from our Nepal journeys."
        subtitle="A few favourites from temples, lakes, mountains and jungle drives across Nepal."
        crumbs={[{ label: "Home", to: "/" }, { label: "Gallery" }]}
      />
      <section className="container-page py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY_IMAGES.map((g, i) => (
            <figure key={i} className="overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img src={g.src} alt={g.alt} loading="lazy" width={1280} height={896} className="w-full" />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}