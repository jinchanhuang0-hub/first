import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QuoteForm } from "@/components/quote-form";
import { FAQList, ProcessList } from "@/components/sections";
import { products } from "@/lib/site-data";
import { faqJsonLd, productJsonLd } from "@/lib/structured-data";

const allowed = ["custom-lapel-pins", "challenge-coins", "custom-medals", "metal-keychains"];
type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return allowed.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product || !allowed.includes(slug)) return {};
  return {
    title: `${product.name} Quote`,
    description: `Request a factory-direct quote for ${product.name.toLowerCase()} from Unique Pin.`
  };
}

export default async function LandingPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product || !allowed.includes(slug)) notFound();

  return (
    <main>
      {[productJsonLd(product.slug), faqJsonLd(product.name)].map((item, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }} />
      ))}
      <section className="landing-hero">
        <div className="container landing-grid">
          <div>
            <h1>{product.name} Manufacturer</h1>
            <p>
              Get factory-direct OEM/ODM support for {product.name.toLowerCase()}.
              Send artwork, quantity, country and deadline for a practical quote.
            </p>
            <img className="landing-product" src={product.image} alt={`${product.name} advertising landing page`} />
          </div>
          <div className="landing-panel">
            <h2>Request Pricing</h2>
            <p>No fake instant price. We quote based on artwork, material, finish, quantity and packaging.</p>
            <QuoteForm compact />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <span className="small-label">Why Unique Pin</span>
            <h2>Built for paid traffic, fast decisions and serious B2B buyers.</h2>
            <p>
              This landing page keeps buyers focused on product fit, manufacturing
              capability and quote submission.
            </p>
          </div>
          <div className="landing-benefit-grid">
            {["Free Design", "Factory Direct", "OEM & ODM", "Global Delivery"].map((item) => (
              <div className="application-card" key={item}>
                <strong>{item}</strong>
                <span>Clear support before sampling and mass production.</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section soft">
        <div className="container split">
          <div>
            <h2>Process and FAQ</h2>
            <p>Useful details for procurement teams comparing suppliers.</p>
          </div>
          <ProcessList />
        </div>
      </section>
      <section className="section">
        <div className="container split">
          <div>
            <h2>Buyer Questions</h2>
          </div>
          <FAQList productName={product.name} />
        </div>
      </section>
    </main>
  );
}
