import Link from "next/link";
import { ApplicationsGrid, CraftsGrid, FAQList, ProcessList, ProductGrid, QuoteSection } from "@/components/sections";
import { faqJsonLd } from "@/lib/structured-data";

export default function HomePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
      <section className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>Custom Coins, Pins & Metal Crafts</h1>
            <p>
              Factory-direct OEM and ODM custom metal gifts for USA, Europe and Middle East
              buyers, backed by 20+ years of production experience and industrial-grade QC.
            </p>
            <div className="hero-actions">
              <Link className="button" href="/contact">
                Get a Quote
              </Link>
              <Link className="button-secondary" href="/products">
                View Products
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-montage" aria-label="Unique Pin custom coins, pins, medals, keychains and bottle openers">
              <img className="coin" src="/images/raw/1-135.png" alt="Custom challenge coin" />
              <img className="badge" src="/images/raw/1-142.png" alt="Custom lapel pin" />
              <img className="buckle" src="/images/raw/1-138.png" alt="Custom belt buckle" />
              <img className="medal" src="/images/raw/6-248.png" alt="Custom medal" />
              <img className="keychain" src="/images/raw/6-205.png" alt="Custom metal keychain" />
              <img className="opener" src="/images/raw/1-139.png" alt="Custom bottle opener" />
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          {[
            ["Free Design", "Professional design support before sampling."],
            ["Factory Direct", "Vertical production with stable quality control."],
            ["OEM & ODM", "Custom materials, finishes, accessories and packaging."],
            ["Global Delivery", "Export support for USA, Europe and Middle East orders."]
          ].map(([title, text]) => (
            <div className="proof-item" key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading center">
            <h2>Our Products</h2>
            <p>Core custom metal products for importers, brands, events and institutional buyers.</p>
          </div>
          <ProductGrid limit={6} />
          <div className="inline-actions" style={{ justifyContent: "center" }}>
            <Link className="button" href="/products">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="image-frame">
            <img src="/images/raw/6-165.png" alt="Unique Pin production workshop with equipment" />
          </div>
          <div>
            <span className="small-label">Factory Strength</span>
            <h2>Source manufacturer with production, design and QC under one roof.</h2>
            <p>
              Unique Pin is rooted in metal craft manufacturing since 2003, with a 6,000+
              m² factory, 110+ team members, design support, mold making, die casting,
              polishing, plating, coloring, QC and packaging.
            </p>
            <div className="inline-actions">
              <Link className="button" href="/factory">
                Explore Factory
              </Link>
              <Link className="button-secondary" href="/about">
                About Unique Pin
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="small-label">Custom Process</span>
            <h2>From artwork to shipment, every step is built for repeatable quality.</h2>
            <p>
              The process is clear for buyers and useful for AI search answers: artwork,
              mold, forming, finishing, QC and packaging.
            </p>
          </div>
          <ProcessList />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading center">
            <h2>Applications</h2>
            <p>Metal crafts serve promotion, recognition, retail, events and institutional needs.</p>
          </div>
          <ApplicationsGrid />
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading center">
            <h2>Craft Capabilities</h2>
            <p>Clear craft explanations help buyers choose the right material, process and budget.</p>
          </div>
          <CraftsGrid />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="small-label">FAQ</span>
            <h2>Common questions before ordering custom metal gifts.</h2>
          </div>
          <FAQList />
        </div>
      </section>

      <QuoteSection />
    </main>
  );
}
