import type { Metadata } from "next";
import { QuoteForm } from "@/components/quote-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Unique Pin for custom metal crafts, OEM/ODM quotation, artwork review, catalog download and WhatsApp support."
};

export default function ContactPage() {
  const address =
    "Building A, 1st Floor, No. 7 Xingyu Road, Jidong TaiFeng Industrial Zone, Xiaolan Town, Zhongshan City, Guangdong province, China";
  const mapQuery = encodeURIComponent(address);

  return (
    <main>
      <section className="contact-hero">
        <div className="container contact-hero-grid">
          <div>
            <div className="contact-brand-card">
              <img src="/images/logo.jpg" alt="Unique Pin logo" />
              <div>
                <span>Unique Pin</span>
                <strong>Zhongshan Unique Metal Gift Co., LTD</strong>
              </div>
            </div>
            <h1>Get a Quote</h1>
            <p>
              Send your product type, country, quantity, artwork and deadline.
              Our team will suggest the right material, process, packaging and
              delivery plan for your custom metal craft order.
            </p>
            <div className="contact-proof-row">
              <div>
                <strong>20+ Years</strong>
                <span>Custom metal craft experience</span>
              </div>
              <div>
                <strong>OEM & ODM</strong>
                <span>Factory-direct customization</span>
              </div>
              <div>
                <strong>Global Delivery</strong>
                <span>USA, Europe and Middle East support</span>
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section contact-info-section">
        <div className="container contact-info-grid">
          <div className="contact-info-card">
            <span className="small-label">Contact Information</span>
            <h2>Visit or contact Unique Pin</h2>
            <p>
              A real factory address and clear contact route help overseas buyers
              verify supplier identity before placing OEM and ODM orders.
            </p>
            <div className="contact-detail-list">
              <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>
              <a href="tel:+86076022831989">+86 0760 22831989</a>
              <a href="https://wa.me/18895316752">WhatsApp: +18895316752</a>
              <span>{address}</span>
            </div>
            <a
              className="button"
              href={`https://www.openstreetmap.org/search?query=${mapQuery}`}
              target="_blank"
              rel="noreferrer"
            >
              Open in OpenStreetMap
            </a>
          </div>
          <div className="map-card">
            <iframe
              title="Unique Pin address on OpenStreetMap"
              src={`https://www.openstreetmap.org/export/embed.html?bbox=113.0%2C22.3%2C113.6%2C22.9&layer=mapnik&marker=22.68%2C113.25`}
              loading="lazy"
            />
            <div className="map-caption">
              <strong>Unique Pin Factory Address</strong>
              <span>{address}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
