import { useState } from "react";
import { z } from "zod";
import { BRAND, whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  email: z.string().trim().email("Enter a valid email").max(120).optional().or(z.literal("")),
  travellers: z.string().trim().max(20).optional().or(z.literal("")),
  date: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().min(5, "Tell us a little about your trip").max(800),
});

interface Props {
  defaultMessage?: string;
  title?: string;
  compact?: boolean;
}

export function EnquiryForm({ defaultMessage = "", title = "Get a free quote", compact = false }: Props) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const v = result.data;
    const lines = [
      `Hello ${BRAND.shortName}, I would like to enquire about a Nepal tour.`,
      `Name: ${v.name}`,
      `Phone: ${v.phone}`,
      v.email ? `Email: ${v.email}` : "",
      v.travellers ? `Travellers: ${v.travellers}` : "",
      v.date ? `Travel date: ${v.date}` : "",
      `Message: ${v.message}`,
    ].filter(Boolean);
    window.open(whatsappLink(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] ${compact ? "" : "md:p-8"}`}>
      <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">Share a few details — we reply within 1 hour.</p>
      <form onSubmit={onSubmit} className="mt-5 grid gap-4 sm:grid-cols-2">
        <Field label="Your name *" name="name" error={errors.name} placeholder="Full name" />
        <Field label="Phone *" name="phone" error={errors.phone} placeholder="+91" type="tel" />
        <Field label="Email" name="email" error={errors.email} placeholder="you@example.com" type="email" />
        <Field label="Travellers" name="travellers" error={errors.travellers} placeholder="e.g. 2 adults, 1 child" />
        <Field label="Travel date" name="date" error={errors.date} placeholder="e.g. Nov 2026" />
        <div className="sm:col-span-2">
          <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">Message *</label>
          <textarea
            name="message"
            defaultValue={defaultMessage}
            rows={4}
            className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/40 transition focus:ring-2"
            placeholder="Destinations, hotel preference, special requests…"
          />
          {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-brand-foreground shadow-[var(--shadow-soft)] transition hover:opacity-95"
        >
          Send Enquiry via WhatsApp
        </button>
        {submitted && (
          <p className="sm:col-span-2 rounded-md bg-secondary px-3 py-2 text-sm text-secondary-foreground">
            Thank you! Your enquiry has opened in WhatsApp — please hit send to reach us.
          </p>
        )}
      </form>
    </div>
  );
}

function Field({
  label, name, error, placeholder, type = "text",
}: { label: string; name: string; error?: string; placeholder?: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none ring-ring/40 transition focus:ring-2"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}