import Link from "next/link";
import { applications, crafts, faqs, processSteps, products } from "@/lib/site-data";
import { QuoteForm } from "./quote-form";

export function ProductGrid({ limit }: { limit?: number }) {
  const list = limit ? products.slice(0, limit) : products;
  return (
    <div className="product-grid">
      {list.map((product) => (
        <Link className="product-card" key={product.slug} href={`/products/${product.slug}`}>
          <img src={product.image} alt={`${product.name} product examples`} />
          <div className="product-card-body">
            <h3>{product.name}</h3>
            <p>{product.short}</p>
            <span className="text-link">View details</span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export function ProcessList() {
  return (
    <div className="process-list">
      {processSteps.map((step, index) => (
        <div className="process-step" key={step.title}>
          <div className="step-number">{index + 1}</div>
          <div>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ApplicationsGrid() {
  return (
    <div className="application-grid">
      {applications.map((item) => (
        <div className="application-card" key={item.title}>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function CraftsGrid() {
  return (
    <div className="craft-grid">
      {crafts.map((item) => (
        <div className="craft-card" key={item.title}>
          <strong>{item.title}</strong>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function FAQList({ productName }: { productName?: string }) {
  return (
    <div className="process-list">
      {faqs.map((faq) => (
        <div className="faq-item" key={faq.q}>
          <h3>{faq.q.replace("custom metal crafts", productName || "custom metal crafts")}</h3>
          <p>{faq.a.replace("custom metal crafts", productName || "custom metal crafts")}</p>
        </div>
      ))}
    </div>
  );
}

export function QuoteSection() {
  return (
    <section className="section quote-section" id="quote">
      <div className="container quote-grid">
        <div>
          <span className="small-label">Get a Quote</span>
          <h2>Send artwork, quantity and deadline. We will suggest the right process.</h2>
          <p>
            The form is designed for high-quality B2B inquiries. It captures country,
            product type, quantity, artwork and deadline so the sales team can reply
            with a practical OEM/ODM solution.
          </p>
          <div className="inline-actions">
            <a className="button-secondary" href="/catalog.pdf" download>
              Download Catalog
            </a>
            <a className="button-secondary" href="https://wa.me/18895316752">
              WhatsApp
            </a>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}
