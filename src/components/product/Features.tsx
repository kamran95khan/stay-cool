import {
  Wind,
  Sun,
  BatteryCharging,
  Gauge,
  Usb,
  Lamp,
  Clock,
  Move,
  type LucideIcon,
} from "lucide-react";
import { FEATURES } from "./product-data";

const ICONS: Record<string, LucideIcon> = {
  wind: Wind,
  sun: Sun,
  battery: BatteryCharging,
  gauge: Gauge,
  usb: Usb,
  lamp: Lamp,
  clock: Clock,
  move: Move,
};

export function Features() {
  return (
    <section id="features" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
            Key Features
          </span>
          <h2 className="mt-3 text-3xl font-semibold text-forest sm:text-4xl">
            Engineered for Pakistani summers
          </h2>
          <p className="mt-3 text-muted-foreground">
            Powerful airflow, solar charging and a built-in night light — everything you need when the
            power goes out.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = ICONS[f.icon] ?? Sun;
            return (
              <div
                key={f.title}
                className="group rounded-3xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-card"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-mint text-primary transition group-hover:bg-forest-gradient group-hover:text-sun">
                  <Icon className="h-6 w-6" strokeWidth={2.2} />
                </span>
                <h3 className="mt-5 text-base font-semibold text-forest">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
