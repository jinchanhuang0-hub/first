import type { Metadata } from "next";
import { ProductGrid, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Unique Pin custom lapel pins, challenge coins, medals, metal keychains, belt buckles, bottle openers, fridge magnets and accessories."
};

export default function ProductsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Custom Metal Products</h1>
          <p>
            Product categories built for B2B buyers who need clear specifications,
            factory-direct pricing, OEM/ODM support and reliable delivery.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ProductGrid />
        </div>
      </section>
      <QuoteSection />
    </main>
  );
}
