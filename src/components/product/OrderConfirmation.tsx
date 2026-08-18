import { CheckCircle2, X } from "lucide-react";
import { formatPKR } from "./product-data";

export type OrderDetails = {
  orderId: string;
  name: string;
  product: string;
  quantity: number;
  total: number;
  address: string;
  city: string;
  province: string;
  phone: string;
  paymentMethod: string;
};

export function OrderConfirmation({
  order,
  onClose,
}: {
  order: OrderDetails;
  onClose: () => void;
}) {
  const rows: [string, string][] = [
    ["Order ID", order.orderId],
    ["Customer Name", order.name],
    ["Product", order.product],
    ["Quantity", String(order.quantity)],
    ["Total Amount", formatPKR(order.total)],
    ["Delivery Address", `${order.address}, ${order.city}, ${order.province}`],
    ["Phone Number", order.phone],
    ["Payment Method", order.paymentMethod],
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Order confirmation"
      className="fixed inset-0 z-50 flex items-end justify-center bg-forest/50 p-4 backdrop-blur-sm sm:items-center"
    >
      <div className="animate-rise max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-card p-6 shadow-lift sm:p-8">
        <div className="flex items-start justify-between">
          <span className="grid h-14 w-14 place-items-center rounded-2xl bg-mint text-primary">
            <CheckCircle2 className="h-8 w-8" strokeWidth={2.2} />
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition hover:bg-mint"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <h3 className="mt-5 text-2xl font-semibold text-forest">Order Placed Successfully!</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Thank you for your order. Our team will call you shortly to confirm delivery.
        </p>

        <dl className="mt-6 divide-y divide-border rounded-2xl border border-border">
          {rows.map(([k, v]) => (
            <div key={k} className="flex gap-4 px-4 py-3">
              <dt className="w-2/5 shrink-0 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {k}
              </dt>
              <dd className="text-sm font-medium text-forest">{v}</dd>
            </div>
          ))}
        </dl>

        <button
          type="button"
          onClick={onClose}
          className="mt-6 w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
