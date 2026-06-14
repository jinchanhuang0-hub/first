import { products } from "@/lib/site-data";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  return (
    <form className="quote-form">
      <label>
        Name
        <input name="name" autoComplete="name" placeholder="Your name" />
      </label>
      <label>
        Email
        <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
      </label>
      <label>
        Country
        <input name="country" autoComplete="country-name" placeholder="USA, Germany, UAE..." />
      </label>
      <label>
        Product Type
        <select name="productType" defaultValue="">
          <option value="" disabled>
            Select product
          </option>
          {products.map((product) => (
            <option key={product.slug} value={product.name}>
              {product.name}
            </option>
          ))}
        </select>
      </label>
      <label>
        Quantity
        <input name="quantity" placeholder="500 / 1,000 / 5,000 pcs" />
      </label>
      <label>
        Deadline
        <input name="deadline" placeholder="Target delivery date" />
      </label>
      {!compact && (
        <label className="wide">
          Artwork Upload
          <input name="artwork" type="file" />
        </label>
      )}
      <label className="wide">
        Message
        <textarea name="message" placeholder="Tell us product size, material, finish, packaging and market." />
      </label>
      <button className="button wide" type="submit">
        Submit Inquiry
      </button>
    </form>
  );
}
