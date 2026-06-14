import Link from "next/link";
import { LanguageSwitcher } from "./language-switcher";

const nav = [
  ["Home", "/"],
  ["Custom Process", "/custom-process"],
  ["Applications", "/applications"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
];

const productMenu = [
  ["Custom Lapel Pins", "Enamel, die struck and printed pins", "/products/custom-lapel-pins"],
  ["Challenge Coins", "2D and 3D commemorative coins", "/products/challenge-coins"],
  ["Custom Medals", "Sports, school and event medals", "/products/custom-medals"],
  ["Metal Keychains", "Promotional and retail keychains", "/products/metal-keychains"],
  ["Belt Buckles", "Premium zinc alloy buckles", "/products/belt-buckles"],
  ["Fridge Magnets", "Souvenir and promotional magnets", "/products/fridge-magnets"]
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Main navigation">
        <Link className="brand" href="/">
          <img src="/images/logo.jpg" alt="Unique Pin logo" />
          <span>Unique Pin</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <div className="nav-dropdown">
            <Link className="nav-dropdown-trigger" href="/products">
              Products
              <span aria-hidden="true">v</span>
            </Link>
            <div className="mega-menu" aria-label="Products mega menu">
              <div className="mega-menu-panel">
                <div className="mega-menu-intro">
                  <span>Product Categories</span>
                  <strong>Custom metal crafts for B2B buyers</strong>
                  <p>
                    Select the product type that matches your artwork, campaign,
                    event or retail program.
                  </p>
                  <Link href="/products">View all products</Link>
                </div>
                <div className="mega-menu-list">
                  {productMenu.map(([label, text, href]) => (
                    <Link className="mega-menu-item" key={href} href={href}>
                      <span>{label}</span>
                      <small>{text}</small>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {nav.slice(1).map(([label, href]) => (
            <Link key={href} href={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="nav-actions">
          <LanguageSwitcher />
          <Link className="nav-cta" href="/contact">
            Get a Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand" href="/">
            <img src="/images/logo.jpg" alt="Unique Pin logo" />
            <span>Unique Pin</span>
          </Link>
          <p>
            Zhongshan Unique Metal Gift Co., LTD provides OEM and ODM custom
            metal crafts for importers, brands, event teams and institutional buyers.
          </p>
        </div>
        <div>
          <h3>Products</h3>
          <div className="footer-list">
            <Link href="/products/custom-lapel-pins">Custom Lapel Pins</Link>
            <Link href="/products/challenge-coins">Challenge Coins</Link>
            <Link href="/products/custom-medals">Custom Medals</Link>
            <Link href="/products/metal-keychains">Metal Keychains</Link>
          </div>
        </div>
        <div>
          <h3>Company</h3>
          <div className="footer-list">
            <Link href="/about">About & Factory</Link>
            <Link href="/custom-process">Custom Process</Link>
            <Link href="/applications">Applications</Link>
            <Link href="/download">Download Catalog</Link>
          </div>
        </div>
        <div>
          <h3>Contact</h3>
          <p>
            Building A, 1st Floor, No. 7 Xingyu Road, Jidong TaiFeng Industrial
            Zone, Xiaolan Town, Zhongshan City, Guangdong, China
          </p>
          <div className="footer-list">
            <a href="mailto:ceo@chinauniquepin.com">ceo@chinauniquepin.com</a>
            <a href="tel:+86076022831989">+86 0760 22831989</a>
            <a href="https://wa.me/18895316752">WhatsApp: +18895316752</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
