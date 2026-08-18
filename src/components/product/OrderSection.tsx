import { useState } from "react";
import { Banknote, Building2, Loader2, MessageCircle } from "lucide-react";
import { ProductVisual } from "./ProductVisual";
import type { OrderDetails } from "./OrderConfirmation";
import {
  DELIVERY_CHARGE,
  PRODUCT_TITLE,
  PROVINCES,
  UNIT_PRICE,
  WHATSAPP_NUMBER,
  formatPKR,
} from "./product-data";

type Form = {
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  payment: string;
};

type Errors = Partial<Record<keyof Form | "quantity", string | undefined>>;

const PAYMENTS = [
  { value: "Cash on Delivery", icon: Banknote, desc: "Pay when your order arrives" },
  { value: "Bank Transfer", icon: Building2, desc: "Account details sent after order" },
];

const inputClass =
  "w-full rounded-2xl border border-input bg-card px-4 py-3 text-sm text-forest outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/12";

export function OrderSection({
  quantity,
  setQuantity,
  onSuccess,
}: {
  quantity: number;
  setQuantity: (n: number) => void;
  onSuccess: (o: OrderDetails) => void;
}) {
  const [form, setForm] = useState<Form>({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    payment: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const subtotal = UNIT_PRICE * quantity;
  const total = subtotal + DELIVERY_CHARGE;

  const set = (key: keyof Form, value: string) => {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = () => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Please enter your full name";
    else if (form.name.trim().length < 3) e.name = "Name must be at least 3 characters";

    const phone = form.phone.replace(/[\s-]/g, "");
    if (!phone) e.phone = "Please enter your phone number";
    else if (!/^03\d{9}$/.test(phone))
      e.phone = "Enter a valid Pakistani mobile number (03XXXXXXXXX)";

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      e.email = "Enter a valid email address";

    if (!form.address.trim()) e.address = "Please enter your complete delivery address";
    else if (form.address.trim().length < 10) e.address = "Address is too short";

    if (!form.city.trim()) e.city = "Please enter your city";
    if (!form.province) e.province = "Please select your province";
    if (!quantity || quantity < 1) e.quantity = "Quantity must be at least 1";
    if (!form.payment) e.payment = "Please select a payment method";

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildOrder = (): OrderDetails => {
    const d = new Date();
    const stamp = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, "0")}${String(
      d.getDate(),
    ).padStart(2, "0")}`;
    const rand = Math.floor(10000 + Math.random() * 90000);
    return {
      orderId: `SB-${stamp}-${rand}`,
      name: form.name.trim(),
      product: PRODUCT_TITLE,
      quantity,
      total,
      address: form.address.trim(),
      city: form.city.trim(),
      province: form.province,
      phone: form.phone.replace(/[\s-]/g, ""),
      paymentMethod: form.payment,
    };
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const order = buildOrder();
    window.setTimeout(() => {
      setSubmitting(false);
      onSuccess(order);
    }, 500);
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const o = buildOrder();
    const message = [
      `*New Order — ${o.orderId}*`,
      ``,
      `Name: ${o.name}`,
      `Product: ${o.product}`,
      `Quantity: ${o.quantity}`,
      `Total: ${formatPKR(o.total)} (incl. ${formatPKR(DELIVERY_CHARGE)} delivery)`,
      `Phone: ${o.phone}`,
      `Address: ${o.address}`,
      `City: ${o.city}`,
      `Province: ${o.province}`,
      `Payment Method: ${o.paymentMethod}`,
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  const Err = ({ msg }: { msg?: string | undefined }) =>
    msg ? <p className="mt-1.5 text-xs font-medium text-destructive">{msg}</p> : null;

  return (
    <section id="order" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Place Your Order
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-forest sm:text-4xl">
            Cash on Delivery all across Pakistan
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fill in your details and our team will call you to confirm the order.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.35fr] lg:gap-10">
          {/* Summary */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <h3 className="text-lg font-semibold text-forest">Order Summary</h3>
              <div className="mt-5 flex gap-4">
                <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-border">
                  <ProductVisual variant={0} />
                </div>
                <div>
                  <p className="text-sm font-semibold leading-snug text-forest">{PRODUCT_TITLE}</p>
                  <p className="mt-1 text-xs text-muted-foreground">Premium White · 16 Inches</p>
                </div>
              </div>

              <dl className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Unit Price</dt>
                  <dd className="font-medium text-forest">{formatPKR(UNIT_PRICE)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Quantity</dt>
                  <dd className="font-medium text-forest">{quantity}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Subtotal</dt>
                  <dd className="font-medium text-forest">{formatPKR(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Delivery Charge</dt>
                  <dd className="font-medium text-forest">{formatPKR(DELIVERY_CHARGE)}</dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-mint px-4 py-4">
                <span className="text-sm font-semibold text-forest">Total</span>
                <span className="font-display text-2xl font-bold text-forest">
                  {formatPKR(total)}
                </span>
              </div>
            </div>
          </aside>

          {/* Form */}
          <form
            noValidate
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-6 shadow-card sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-forest">
                  Full Name *
                </label>
                <input
                  id="name"
                  value={form.name}
                  maxLength={100}
                  onChange={(e) => set("name", e.target.value)}
                  placeholder="e.g. Ahmed Raza"
                  className={inputClass}
                />
                <Err msg={errors.name} />
              </div>

              <div>
                <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-forest">
                  Phone Number *
                </label>
                <input
                  id="phone"
                  inputMode="numeric"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  placeholder="03XXXXXXXXX"
                  className={inputClass}
                />
                <Err msg={errors.phone} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-forest">
                  Email <span className="font-normal text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="email"
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  placeholder="you@example.com"
                  className={inputClass}
                />
                <Err msg={errors.email} />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="address" className="mb-1.5 block text-sm font-semibold text-forest">
                  Complete Delivery Address *
                </label>
                <textarea
                  id="address"
                  rows={3}
                  maxLength={500}
                  value={form.address}
                  onChange={(e) => set("address", e.target.value)}
                  placeholder="House / Flat no, street, area, nearest landmark"
                  className={`${inputClass} resize-none`}
                />
                <Err msg={errors.address} />
              </div>

              <div>
                <label htmlFor="city" className="mb-1.5 block text-sm font-semibold text-forest">
                  City *
                </label>
                <input
                  id="city"
                  maxLength={60}
                  value={form.city}
                  onChange={(e) => set("city", e.target.value)}
                  placeholder="e.g. Lahore"
                  className={inputClass}
                />
                <Err msg={errors.city} />
              </div>

              <div>
                <label htmlFor="province" className="mb-1.5 block text-sm font-semibold text-forest">
                  Province *
                </label>
                <select
                  id="province"
                  value={form.province}
                  onChange={(e) => set("province", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select province</option>
                  {PROVINCES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <Err msg={errors.province} />
              </div>

              <div>
                <label htmlFor="qty" className="mb-1.5 block text-sm font-semibold text-forest">
                  Quantity *
                </label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-input text-forest transition hover:bg-mint"
                  >
                    −
                  </button>
                  <input
                    id="qty"
                    inputMode="numeric"
                    value={quantity}
                    onChange={(e) => {
                      const n = parseInt(e.target.value.replace(/\D/g, ""), 10);
                      setQuantity(Number.isNaN(n) ? 1 : Math.min(20, Math.max(1, n)));
                      setErrors((er) => ({ ...er, quantity: undefined }));
                    }}
                    className={`${inputClass} text-center`}
                  />
                  <button
                    type="button"
                    aria-label="Increase quantity"
                    onClick={() => setQuantity(Math.min(20, quantity + 1))}
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-input text-forest transition hover:bg-mint"
                  >
                    +
                  </button>
                </div>
                <Err msg={errors.quantity} />
              </div>

              <div className="sm:col-span-2">
                <span className="mb-1.5 block text-sm font-semibold text-forest">
                  Payment Method *
                </span>
                <div className="grid gap-3 sm:grid-cols-2">
                  {PAYMENTS.map(({ value, icon: Icon, desc }) => {
                    const selected = form.payment === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() => set("payment", value)}
                        aria-pressed={selected}
                        className={`flex items-start gap-3 rounded-2xl border-2 p-4 text-left transition ${
                          selected
                            ? "border-primary bg-mint/70 shadow-soft"
                            : "border-border hover:border-primary/40"
                        }`}
                      >
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${
                            selected ? "bg-primary text-primary-foreground" : "bg-mint text-primary"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-forest">{value}</span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">{desc}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
                <Err msg={errors.payment} />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lift transition hover:brightness-110 disabled:opacity-70"
            >
              {submitting && <Loader2 className="h-5 w-5 animate-spin" />}
              {submitting ? "Placing Order…" : `Place Order — ${formatPKR(total)}`}
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border-2 border-forest px-8 py-4 text-base font-semibold text-forest transition hover:bg-forest hover:text-forest-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              Order via WhatsApp
            </button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              By placing an order you agree to our delivery and 7-day replacement policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
