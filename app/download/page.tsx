import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Download Catalog",
  description: "Download the Unique Pin product catalog and send your inquiry details for custom metal craft quotation."
};

export default function DownloadPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Download Catalog</h1>
          <p>
            Use the catalog as a product reference, then submit the form so the team
            can match material, finish, packaging and price to your artwork.
          </p>
          <div className="inline-actions">
            <a className="button" href="/catalog.pdf" download>
              Download PDF Catalog
            </a>
          </div>
        </div>
      </section>
      <section className="section quote-section">
        <div className="container quote-grid">
          <div>
            <h2>Need a price after reviewing the catalog?</h2>
            <p>Share product type, quantity, destination country and deadline for a practical quote.</p>
          </div>
          <QuoteForm compact />
        </div>
      </section>
    </main>
  );
}
