import { useState } from "react";
import { Star, Minus, Plus, Truck, BadgeCheck, Wallet } from "lucide-react";
import { ProductVisual } from "./ProductVisual";
import {
  DISCOUNT_PERCENT,
  ORDERS_COUNT,
  ORIGINAL_PRICE,
  PRODUCT_SHORT_DESC,
  PRODUCT_TITLE,
  RATING,
  UNIT_PRICE,
  formatPKR,
} from "./product-data";

const TRUST = [
  { icon: Wallet, label: "Cash on Delivery" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: BadgeCheck, label: "7-Day Replacement" },
];

export function Hero({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (n: number) => void;
}) {
  const [active, setActive] = useState<0 | 1 | 2 | 3>(0);

  return (
    <section id="home" className="bg-mint/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        {/* Gallery */}
        <div className="animate-rise">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <div className="aspect-square">
              <ProductVisual variant={active} />
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i as 0 | 1 | 2 | 3)}
                aria-label={`View image ${i + 1}`}
                className={`aspect-square overflow-hidden rounded-2xl border-2 bg-card transition ${
                  active === i
                    ? "border-primary shadow-soft"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <ProductVisual variant={i as 0 | 1 | 2 | 3} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div id="product" className="flex flex-col justify-center animate-rise">
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-sun/25 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-forest">
            <span className="h-1.5 w-1.5 rounded-full bg-solar" /> Solar Powered · Load-shedding Ready
          </span>

          <h1 className="mt-4 text-3xl font-semibold leading-tight text-forest sm:text-4xl lg:text-[2.75rem]">
            {PRODUCT_TITLE}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            {PRODUCT_SHORT_DESC}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-4.5 w-4.5 ${i < Math.round(RATING) ? "fill-solar text-solar" : "text-border"}`}
                />
              ))}
            </span>
            <span className="text-sm font-semibold text-forest">{RATING} out of 5</span>
            <span className="text-sm text-muted-foreground">
              ({ORDERS_COUNT.toLocaleString("en-PK")} orders)
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-end gap-3">
            <span className="font-display text-4xl font-bold text-forest">{formatPKR(UNIT_PRICE)}</span>
            <span className="pb-1 text-lg text-muted-foreground line-through">
              {formatPKR(ORIGINAL_PRICE)}
            </span>
            <span className="mb-1.5 rounded-full bg-solar px-3 py-1 text-xs font-bold text-forest">
              {DISCOUNT_PERCENT}% OFF
            </span>
          </div>

          <div className="mt-7 flex items-center gap-4">
            <span className="text-sm font-semibold text-forest">Quantity</span>
            <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="grid h-9 w-9 place-items-center rounded-full text-forest transition hover:bg-mint"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center font-semibold text-forest">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity(Math.min(20, quantity + 1))}
                className="grid h-9 w-9 place-items-center rounded-full text-forest transition hover:bg-mint"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#order"
              className="w-full rounded-full bg-primary px-8 py-4 text-center text-base font-semibold text-primary-foreground shadow-lift transition hover:brightness-110 sm:w-auto"
            >
              Order Now
            </a>
            <a
              href="#order"
              className="w-full rounded-full border-2 border-forest px-8 py-4 text-center text-base font-semibold text-forest transition hover:bg-forest hover:text-forest-foreground sm:w-auto"
            >
              Add to Cart
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 border-t border-border pt-6 sm:grid-cols-3">
            {TRUST.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-primary">
                  <Icon className="h-4.5 w-4.5" />
                </span>
                <span className="text-sm font-medium text-forest">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
