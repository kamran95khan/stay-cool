import { Sun, Phone, Mail, MessageCircle } from "lucide-react";
import {
  BRAND_NAME,
  CONTACT_EMAIL,
  CONTACT_PHONE,
  WHATSAPP_NUMBER,
} from "./product-data";

const LINKS = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Order", href: "#order" },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-forest text-forest-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-foreground/10 text-sun">
              <Sun className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-lg font-semibold">{BRAND_NAME}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-forest-foreground/70">
            Solar-powered cooling and lighting solutions for Pakistani homes. Energy efficient,
            load-shedding ready and delivered to your doorstep.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-sun">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-sm text-forest-foreground/75 transition hover:text-sun"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-sun">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-forest-foreground/75">
            <li>
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`} className="flex items-center gap-2.5 transition hover:text-sun">
                <Phone className="h-4 w-4 text-sun" /> {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-2.5 transition hover:text-sun">
                <Mail className="h-4 w-4 text-sun" /> {CONTACT_EMAIL}
              </a>
            </li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition hover:text-sun"
              >
                <MessageCircle className="h-4 w-4 text-sun" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-forest-foreground/10 px-4 py-6 text-center text-xs text-forest-foreground/60">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
