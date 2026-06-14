import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FAQList, ProcessList, QuoteSection } from "@/components/sections";
import { breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/structured-data";
import { products } from "@/lib/site-data";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: `${product.short} Learn specifications, materials, process, packaging and quote requirements from Unique Pin.`
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();

  const jsonLd = [
    productJsonLd(product.slug),
    faqJsonLd(product.name),
    breadcrumbJsonLd([
      { name: "Home", href: "/" },
      { name: "Products", href: "/products" },
      { name: product.name, href: `/products/${product.slug}` }
    ])
  ];

  return (
    <main>
      {jsonLd.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
      <section className="page-hero">
        <div className="container split">
          <div>
            <h1>{product.name}</h1>
            <p>{product.short}</p>
            <div className="inline-actions">
              <Link className="button" href="/contact">
                Get a Quote
              </Link>
              <a className="button-secondary" href="/catalog.pdf" download>
                Download Catalog
              </a>
            </div>
          </div>
          <img className="landing-product" src={product.image} alt={`${product.name} by Unique Pin`} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="small-label">{product.keyword}</span>
            <h2>Specifications and buying details</h2>
            <p>
              These are practical reference ranges. Final pricing and delivery depend on
              artwork complexity, material, finish, quantity and packaging.
            </p>
          </div>
          <table className="table">
            <tbody>
              <tr><th>Material</th><td>{product.material}</td></tr>
              <tr><th>Common Size</th><td>{product.size}</td></tr>
              <tr><th>Process</th><td>{product.process}</td></tr>
              <tr><th>Lead Time</th><td>{product.leadTime}</td></tr>
              <tr><th>Mold Fee</th><td>{product.moldFee}</td></tr>
              <tr><th>Packaging</th><td>{product.packaging}</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="section soft">
        <div className="container split">
          <div>
            <span className="small-label">Custom Process</span>
            <h2>How {product.name.toLowerCase()} orders move from artwork to shipment.</h2>
            <p>
              Buyers can send a concept, logo, sketch, previous sample or production file.
              Unique Pin checks feasibility and recommends the right process before mass production.
            </p>
          </div>
          <ProcessList />
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <h2>{product.name} FAQ</h2>
            <p>
              AIO and GEO-ready answers for buyers comparing custom metal gifts,
              supplier capabilities and order requirements.
            </p>
          </div>
          <FAQList productName={product.name} />
        </div>
      </section>
      <QuoteSection />
    </main>
  );
}
