import { Phone, MessageCircle } from "lucide-react";
import { BRAND, whatsappLink } from "@/lib/site";

export function StickyCTAs() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        aria-label="Chat on WhatsApp"
        href={whatsappLink("Hello Singh Travels, I'd like to enquire about a Nepal tour package.")}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-whatsapp text-white shadow-[var(--shadow-elegant)] transition hover:scale-105"
      >
        <MessageCircle className="h-5 w-5" />
      </a>
      <a
        aria-label="Call us"
        href={BRAND.phoneHref}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[image:var(--gradient-brand)] text-brand-foreground shadow-[var(--shadow-elegant)] transition hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
}