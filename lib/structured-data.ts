import { faqs, products, siteUrl } from "./site-data";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zhongshan Unique Metal Gift Co., LTD",
  alternateName: "Unique Pin",
  url: siteUrl,
  logo: `${siteUrl}/images/logo.jpg`,
  email: "ceo@chinauniquepin.com",
  telephone: "+86 0760 22831989",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Building A, 1st Floor, No. 7 Xingyu Road, Jidong TaiFeng Industrial Zone, Xiaolan Town",
    addressLocality: "Zhongshan",
    addressRegion: "Guangdong",
    addressCountry: "CN"
  }
};

export function faqJsonLd(productName?: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q.replace("custom metal crafts", productName || "custom metal crafts"),
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a.replace("custom metal crafts", productName || "custom metal crafts")
      }
    }))
  };
}

export function productJsonLd(slug: string) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: `${siteUrl}${product.image}`,
    description: product.short,
    brand: {
      "@type": "Brand",
      name: "Unique Pin"
    },
    manufacturer: organizationJsonLd,
    category: "Custom Metal Crafts"
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; href: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`
    }))
  };
}
