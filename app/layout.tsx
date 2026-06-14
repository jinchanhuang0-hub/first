import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/site-chrome";
import { TranslationRuntime } from "@/components/translation-runtime";
import { WhatsAppFloatingButton } from "@/components/whatsapp-floating-button";
import { organizationJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chinauniquepin.com"),
  title: {
    default: "Unique Pin | Custom Metal Crafts Manufacturer",
    template: "%s | Unique Pin"
  },
  description:
    "Unique Pin is a custom metal crafts manufacturer and OEM/ODM supplier for lapel pins, challenge coins, medals, keychains, belt buckles and promotional metal gifts.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Unique Pin | Custom Metal Crafts Manufacturer",
    description:
      "Factory-direct OEM and ODM metal gifts for USA, Europe and Middle East buyers.",
    url: "https://www.chinauniquepin.com",
    siteName: "Unique Pin",
    images: ["/images/reference-home.png"],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <TranslationRuntime />
        <Header />
        {children}
        <Footer />
        <WhatsAppFloatingButton />
      </body>
    </html>
  );
}
