import type { Metadata } from "next";
import { CraftsGrid, ProcessList, QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Custom Process",
  description:
    "Learn Unique Pin's custom metal craft production process: artwork, mold engraving, die struck, die casting, polishing, plating, coloring, QC and packaging."
};

export default function CustomProcessPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Custom Process</h1>
          <p>
            A practical production path for pins, challenge coins, medals, keychains,
            belt buckles and other custom metal crafts.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div className="image-frame">
            <img src="/images/raw/6-250.png" alt="Custom metal craft material and finish options" />
          </div>
          <ProcessList />
        </div>
      </section>
      <section className="section soft">
        <div className="container">
          <div className="section-heading center">
            <h2>Craft Center</h2>
            <p>Use this section to explain options clearly for buyers and AI search engines.</p>
          </div>
          <CraftsGrid />
        </div>
      </section>
      <QuoteSection />
    </main>
  );
}
