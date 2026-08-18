import { Check, PackageOpen } from "lucide-react";
import { PACKAGE_ITEMS, SPECS } from "./product-data";

const BADGES = ["Monocrystalline Panel", "Lithium Battery", "Premium White", "16 Inches"];

export function Specifications() {
  return (
    <section className="bg-mint/40 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
              Specifications
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-forest sm:text-4xl">
              Built with quality components
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              A 120W motor paired with a high-efficiency 9V 15W monocrystalline solar panel and a
              12000mAh lithium battery pack — charges in 4–6 hours and runs up to 10 hours.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-primary/25 bg-card px-4 py-2 text-xs font-semibold text-forest shadow-soft"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-card">
            <table className="w-full text-sm">
              <tbody>
                {SPECS.map(([k, v], i) => (
                  <tr key={k} className={i % 2 ? "bg-mint/40" : ""}>
                    <th scope="row" className="w-2/5 px-5 py-4 text-left font-semibold text-forest">
                      {k}
                    </th>
                    <td className="px-5 py-4 text-muted-foreground">{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-primary/20 bg-card p-6 shadow-soft sm:p-8">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-sun/30 text-solar">
              <PackageOpen className="h-5 w-5" />
            </span>
            <h3 className="text-xl font-semibold text-forest">Package Includes</h3>
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {PACKAGE_ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-mint/60 px-4 py-3">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={3} />
                <span className="text-sm font-medium text-forest">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
