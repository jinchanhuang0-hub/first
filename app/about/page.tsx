import type { Metadata } from "next";
import { QuoteSection } from "@/components/sections";

export const metadata: Metadata = {
  title: "About Us & Factory Strength",
  description:
    "Learn about Unique Pin's manufacturing roots, factory scale, production workflow, QC capability and OEM/ODM custom metal craft service."
};

const stats = [
  ["20+ Years", "Custom metal craft manufacturing experience"],
  ["6,000+ m²", "Integrated factory space in Zhongshan"],
  ["110+ Team", "Design, production, QC and export support"],
  ["OEM & ODM", "Artwork, sample, production and packaging solutions"]
];

const factorySteps = [
  ["Design & Artwork", "Free artwork review, Pantone color checks and product renderings before sampling."],
  ["Mold & Forming", "CNC engraving, die struck, die casting and tooling adjustments for different product structures."],
  ["Finishing", "Polishing, electroplating, enamel coloring, UV printing, glitter and epoxy protection."],
  ["QC & Packaging", "Independent checks on surface, color, size, accessories and export packaging before shipment."]
];

const capabilities = [
  ["Factory-direct control", "Production, communication and quality control stay close to the source, reducing handoff risk."],
  ["Multi-product range", "Lapel pins, challenge coins, medals, keychains, belt buckles, bottle openers and metal souvenirs."],
  ["Global buyer service", "Built for importers, brands, event companies, government buyers and institutional projects."],
  ["Compliance mindset", "Certificates and product tests should be verified before publication or buyer submission."]
];

const gallery = [
  ["/images/raw/6-165.png", "Production workshop with equipment"],
  ["/images/raw/6-167.png", "CNC and production equipment area"],
  ["/images/raw/1-046.jpeg", "Office and sales support team"],
  ["/images/raw/1-071.jpeg", "Factory exterior"],
  ["/images/raw/1-070.jpeg", "Workshop production area"],
  ["/images/raw/6-250.png", "Finish and material options"]
];

export default function AboutPage() {
  return (
    <main>
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div>
            <span className="small-label">About Unique Pin</span>
            <h1>Factory strength behind custom metal crafts.</h1>
            <p>
              Zhongshan Unique Metal Gift Co., LTD is a factory-direct OEM and ODM
              supplier rooted in metal craft manufacturing since 2003. We help
              overseas buyers turn artwork into lapel pins, challenge coins, medals,
              keychains, belt buckles, bottle openers and other custom metal gifts.
            </p>
            <div className="inline-actions">
              <a className="button" href="/contact">Get a Quote</a>
              <a className="button-secondary" href="/custom-process">View Process</a>
            </div>
          </div>
          <div className="about-hero-media">
            <img src="/images/raw/6-167.png" alt="Unique Pin manufacturing workshop" />
            <img src="/images/raw/1-135.png" alt="Custom challenge coin sample" />
          </div>
        </div>
      </section>

      <section className="proof-strip">
        <div className="container proof-grid">
          {stats.map(([title, text]) => (
            <div className="proof-item" key={title}>
              <strong>{title}</strong>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="image-frame">
            <img src="/images/raw/6-165.png" alt="Unique Pin factory equipment and production line" />
          </div>
          <div>
            <span className="small-label">Integrated Factory</span>
            <h2>From design to shipment, the workflow is built inside one manufacturing system.</h2>
            <p>
              The factory includes design, mold making, hydraulic press, stamping,
              die casting, polishing, electroplating, coloring, QC and packaging areas.
              This gives B2B buyers clearer control over cost, quality, sampling and
              delivery rhythm.
            </p>
            <table className="table">
              <tbody>
                <tr><th>Factory area</th><td>6,000+ m²</td></tr>
                <tr><th>Team</th><td>110+ design, production, QC and export members</td></tr>
                <tr><th>Product range</th><td>Pins, coins, medals, keychains, belt buckles, bottle openers and more</td></tr>
                <tr><th>Certificates to verify</th><td>Sedex, FSC, Disney FAMA, TCCC, SGS, CA65, EN71</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-heading center">
            <span className="small-label">Production Flow</span>
            <h2>What buyers can trust us to control.</h2>
            <p>
              A clear factory story helps customers understand how their artwork becomes a stable,
              repeatable product order.
            </p>
          </div>
          <div className="about-process-grid">
            {factorySteps.map(([title, text], index) => (
              <div className="about-process-card" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-gallery-layout">
          <div>
            <span className="small-label">Factory Gallery</span>
            <h2>More than a trading page. Show the people, equipment and products.</h2>
            <p>
              Buyers checking a supplier need visual proof. This gallery combines
              workshop, team, factory exterior and product capability images so the
              page feels concrete and less text-heavy.
            </p>
          </div>
          <div className="about-gallery">
            {gallery.map(([src, alt]) => (
              <img key={src} src={src} alt={alt} />
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="small-label">Why It Matters</span>
            <h2>Supplier strength that supports serious B2B purchasing.</h2>
            <p>
              The goal is not just to say we are reliable, but to show why buyers can
              discuss artwork, pricing, packaging and delivery with more confidence.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map(([title, text]) => (
              <div className="craft-card" key={title}>
                <strong>{title}</strong>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="image-frame">
            <img src="/images/raw/1-046.jpeg" alt="Unique Pin team and office" />
          </div>
          <div>
            <span className="small-label">Founder-backed Trust</span>
            <h2>Practical sourcing advice before chasing the lowest quote.</h2>
            <p>
              For custom metal crafts, the right material, plating, coloring method
              and packaging often decide the final result. Our role is to help buyers
              choose a process that fits their artwork, market and budget while
              protecting product consistency.
            </p>
          </div>
        </div>
      </section>

      <QuoteSection />
    </main>
  );
}
