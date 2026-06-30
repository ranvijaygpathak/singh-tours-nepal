import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { PACKAGES, CITIES, DESTINATION_DETAILS, TOUR_TYPES, BLOG_POSTS } from "@/lib/site";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "https://singh-tours-nepal.lovable.app";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/nepal-tour-packages", changefreq: "weekly", priority: "0.9" },
          { path: "/taxi-booking", changefreq: "monthly", priority: "0.7" },
          { path: "/vehicle-booking", changefreq: "monthly", priority: "0.7" },
          { path: "/blog", changefreq: "weekly", priority: "0.7" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.6" },
          { path: "/gallery", changefreq: "monthly", priority: "0.5" },
          { path: "/faq", changefreq: "monthly", priority: "0.5" },
          ...PACKAGES.map((p) => ({
            path: `/packages/${p.slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...Object.keys(DESTINATION_DETAILS).map((slug) => ({
            path: `/destinations/${slug}`,
            changefreq: "monthly" as const,
            priority: "0.8",
          })),
          ...TOUR_TYPES.map((t) => ({
            path: `/tours/${t.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
          ...BLOG_POSTS.map((b) => ({
            path: `/blog/${b.slug}`,
            changefreq: "monthly" as const,
            priority: "0.6",
          })),
          ...CITIES.map((c) => ({
            path: `/nepal-tour-package-from/${c.slug}`,
            changefreq: "monthly" as const,
            priority: "0.7",
          })),
        ];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});