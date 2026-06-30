import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { BRAND, blogPostFromSlug, BLOG_POSTS, type BlogPost } from "@/lib/site";
import { PageHero } from "@/components/site/PageHero";
import { EnquiryForm } from "@/components/site/EnquiryForm";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }): BlogPost => {
    const p = blogPostFromSlug(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) return { meta: [{ title: "Blog post" }] };
    const p = loaderData;
    const title = `${p.title} | ${BRAND.name} Blog`;
    return {
      meta: [
        { title },
        { name: "description", content: p.excerpt },
        { property: "og:title", content: title },
        { property: "og:description", content: p.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:image", content: p.cover },
        { property: "og:url", content: `/blog/${params.slug}` },
        { name: "twitter:image", content: p.cover },
      ],
      links: [{ rel: "canonical", href: `/blog/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: p.title,
            description: p.excerpt,
            image: p.cover,
            datePublished: p.date,
            author: { "@type": "Organization", name: BRAND.name },
            publisher: { "@type": "Organization", name: BRAND.name },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="font-display text-3xl">Post not found</h1>
      <Link to="/blog" className="mt-4 inline-block text-primary hover:underline">Back to blog →</Link>
    </div>
  ),
  errorComponent: () => <div className="container-page py-24">Something went wrong.</div>,
  component: PostPage,
});

function PostPage() {
  const p = Route.useLoaderData() as BlogPost;
  const related = BLOG_POSTS.filter((b) => b.slug !== p.slug).slice(0, 3);
  return (
    <>
      <PageHero
        eyebrow={p.category}
        title={p.title}
        subtitle={p.excerpt}
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: p.title }]}
      />
      <section className="container-page py-12">
        <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-elegant)]">
          <img src={p.cover} alt={p.title} width={1280} height={800} className="h-[420px] w-full object-cover" />
        </div>
      </section>
      <section className="container-page grid gap-10 pb-20 lg:grid-cols-[1.5fr_1fr]">
        <article className="space-y-6">
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><CalendarDays className="h-3.5 w-3.5" />{new Date(p.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{p.readMins} min read</span>
          </div>
          {p.content.map((s) => (
            <div key={s.heading}>
              <h2 className="font-display text-2xl font-semibold text-foreground">{s.heading}</h2>
              <p className="mt-3 text-foreground/85">{s.body}</p>
            </div>
          ))}
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
            <ArrowLeft className="h-4 w-4" /> Back to all posts
          </Link>
        </article>
        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <EnquiryForm title="Plan your Nepal trip" />
          <div className="rounded-2xl border border-border bg-card p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">Related reads</p>
            <ul className="mt-3 space-y-3 text-sm">
              {related.map((b) => (
                <li key={b.slug}>
                  <Link to="/blog/$slug" params={{ slug: b.slug }} className="font-medium text-foreground hover:text-primary">{b.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </>
  );
}