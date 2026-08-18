import { Wallet, Truck, ShieldCheck, Sun, Headphones } from "lucide-react";

const ITEMS = [
  { icon: Wallet, label: "Cash on Delivery Available" },
  { icon: Truck, label: "Fast Delivery" },
  { icon: ShieldCheck, label: "Quality Product" },
  { icon: Sun, label: "Solar Energy Efficient" },
  { icon: Headphones, label: "Customer Support" },
];

export function Trust() {
  return (
    <section className="bg-forest-gradient py-12 lg:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-3 lg:grid-cols-5 lg:px-8">
        {ITEMS.map(({ icon: Icon, label }) => (
          <div key={label} className="flex flex-col items-center gap-3 text-center">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-foreground/10 text-sun">
              <Icon className="h-6 w-6" strokeWidth={2.2} />
            </span>
            <span className="text-sm font-semibold text-forest-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
