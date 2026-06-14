import type { Metadata } from "next";
import { ApplicationsGrid, ProductGrid, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Applications",
  description:
    "Custom metal gifts for military, government, sports events, corporate gifts, brand merchandise, tourism souvenirs, schools, clubs and charity events."
};

export default function ApplicationsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Applications</h1>
          <p>
            Match product type, process and packaging to the buyer scenario: recognition,
            promotion, retail, event souvenir or institutional program.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <ApplicationsGrid />
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-heading center">
            <h2>Recommended Products</h2>
            <p>Common product choices for B2B procurement and promotional campaigns.</p>
          </div>
          <ProductGrid limit={6} />
        </div>
      </section>
      <QuoteSection />
    </main>
  );
}
