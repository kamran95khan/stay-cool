import { useState } from "react";
import { Menu, X, Sun } from "lucide-react";
import { BRAND_NAME } from "./product-data";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-forest-gradient text-sun">
            <Sun className="h-5 w-5" strokeWidth={2.4} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-forest">
            {BRAND_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-8 min-[860px]:flex">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#order"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:brightness-110 min-[860px]:inline-flex"
          >
            Order Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border text-forest min-[860px]:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 min-[860px]:hidden">
          <nav className="flex flex-col">
            {NAV.map((n) => (
              <a
                key={n.label}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm font-medium text-forest hover:bg-mint"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="#order"
            onClick={() => setOpen(false)}
            className="mt-2 block w-full rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  );
}
