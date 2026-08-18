import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/product/Header";
import { Hero } from "@/components/product/Hero";
import { Features } from "@/components/product/Features";
import { Specifications } from "@/components/product/Specifications";
import { Trust } from "@/components/product/Trust";
import { OrderSection } from "@/components/product/OrderSection";
import { Footer } from "@/components/product/Footer";
import {
  OrderConfirmation,
  type OrderDetails,
} from "@/components/product/OrderConfirmation";

const TITLE = "16-Inch Solar Rechargeable Fan — Rs. 6,999 | SolarBreeze Pakistan";
const DESCRIPTION =
  "Buy the 16-inch portable solar rechargeable fan with night light and 9V 15W solar panel for Rs. 6,999. Cash on Delivery across Pakistan, 7-day replacement.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [quantity, setQuantity] = useState(1);
  const [order, setOrder] = useState<OrderDetails | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero quantity={quantity} setQuantity={setQuantity} />
        <Features />
        <Specifications />
        <Trust />
        <OrderSection quantity={quantity} setQuantity={setQuantity} onSuccess={setOrder} />
      </main>
      <Footer />
      {order && <OrderConfirmation order={order} onClose={() => setOrder(null)} />}
    </div>
  );
}
