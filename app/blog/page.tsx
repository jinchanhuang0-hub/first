import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "SEO and AIO-ready buying guides for custom lapel pins, challenge coins, medals, metal materials, artwork, pricing, packaging and lead time."
};

export default function BlogPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <h1>Buying Guides</h1>
          <p>
            Educational content planned for SEO, AIO and GEO: direct answers,
            material comparisons, process explanations and buyer checklists.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container blog-grid">
          {blogPosts.map((title) => (
            <Link className="blog-card" href="/blog" key={title}>
              <strong>{title}</strong>
              <p>Planned article outline with definitions, comparison table, procurement advice and FAQ.</p>
              <span className="text-link">Article planned</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
