import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenText,
  CaretDown,
  Check,
  ClockCounterClockwise,
  CopySimple,
  EnvelopeSimple,
  Lifebuoy,
  List,
  MapPin,
  ShoppingBagOpen,
  X,
} from "@phosphor-icons/react";
import { siteData } from "./siteData.js";

const navItems = [
  { label: "Themes", href: "#themes", menu: ["ESEN", "Verde"] },
  { label: "About", href: "#about" },
  { label: "Resources", href: "#resources", menu: ["Documentation", "Changelog"] },
  { label: "Support", href: "#support" },
];

function BrandLogo() {
  return (
    <a className="brand" href="#top" aria-label="Esen home">
      <span className="brand-symbol" aria-hidden="true">
        <img src="/assets/esen-logo-source.png" alt="" />
      </span>
      <span className="brand-word" aria-hidden="true">
        <img src="/assets/esen-logo-source.png" alt="" />
      </span>
    </a>
  );
}

function NavItem({ item, openMenu, setOpenMenu, onNavigate }) {
  if (!item.menu) {
    return (
      <a className="nav-link" href={item.href} onClick={onNavigate}>
        {item.label}
      </a>
    );
  }

  const isOpen = openMenu === item.label;

  return (
    <div className="nav-group">
      <button
        className="nav-link nav-button"
        type="button"
        aria-expanded={isOpen}
        onClick={() => setOpenMenu(isOpen ? null : item.label)}
      >
        {item.label}
        <CaretDown size={13} weight="bold" />
      </button>
      {isOpen && (
        <div className="nav-popover">
          {item.menu.map((entry) => (
            <a key={entry} href={item.href} onClick={onNavigate}>
              {entry}
              <ArrowRight size={14} />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const closeMenus = () => {
    setMenuOpen(false);
    setOpenMenu(null);
  };

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLogo />
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={23} /> : <List size={24} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Primary navigation">
          <div className="nav-items">
            {navItems.map((item) => (
              <NavItem
                key={item.label}
                item={item}
                openMenu={openMenu}
                setOpenMenu={setOpenMenu}
                onNavigate={closeMenus}
              />
            ))}
          </div>
          <a
            className="button button-dark header-support"
            href="#support"
            onClick={closeMenus}
          >
            <EnvelopeSimple size={17} />
            Get support
          </a>
        </nav>
      </div>
    </header>
  );
}

function HeroPreview() {
  return (
    <div className="hero-visual">
      <div className="hero-browser">
        <div className="hero-browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-browser-canvas">
          <img
            className="hero-showcase"
            src="/assets/esen-hero-eccenova-v2.png"
            alt="Eccenova skincare storefront featuring the Everyday care, elevated campaign"
            fetchPriority="high"
            decoding="async"
          />
        </div>

        <aside className="hero-sales-card" aria-label="Example store sales performance">
          <span className="sales-label">Total sales</span>
          <strong>$100.00</strong>
          <span className="sales-growth">
            <svg viewBox="0 0 16 16" aria-hidden="true">
              <path d="M2 11.5 6.1 7.4l2.7 2.7L14 4.9" />
              <path d="M10.4 4.9H14v3.6" />
            </svg>
            24% vs last 30 days
          </span>
          <span className="sales-divider" />
          <span className="sales-label">Top product</span>
          <span className="sales-product">
            <span className="sales-product-image">
              <img src="/assets/momonise-herbal-balm.png" alt="" />
            </span>
            <span>
              Momonise
              <strong>$100</strong>
            </span>
          </span>
        </aside>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">{siteData.hero.eyebrow}</span>
          <h1>{siteData.hero.title}</h1>
          <p>{siteData.hero.description}</p>
          <a className="button button-dark hero-button" href="#products">
            Discover products
            <ArrowRight size={18} />
          </a>
        </div>
        <HeroPreview />
      </div>
    </section>
  );
}

function ThemeCard({ theme, dark = false, sectionAnchor = false }) {
  return (
    <article className="product-card theme-card" id={sectionAnchor ? "themes" : undefined}>
      <a className="theme-preview" href={theme.href} target="_blank" rel="noreferrer">
        <img src={theme.image} alt={`${theme.name} Shopify theme preview`} />
        <span className="theme-browser-nav">
          <strong>{theme.name.toUpperCase()}</strong>
          <span>Shop &nbsp; Collections &nbsp; Journal</span>
        </span>
        {theme.previewTitle && (
          <span className={dark ? "theme-overlay theme-overlay-dark" : "theme-overlay"}>
            <strong>{theme.previewTitle}</strong>
            <span>{theme.previewCopy}</span>
            <span className="preview-cta">Shop collection</span>
          </span>
        )}
      </a>
      <span className="product-type">Theme</span>
      <h3>{theme.name}</h3>
      <p>{theme.tagline}</p>
      <a className="text-link" href={theme.href} target="_blank" rel="noreferrer">
        {theme.cta}
        <ArrowRight size={17} />
      </a>
    </article>
  );
}

function AppCard({ app }) {
  return (
    <article className="product-card app-card" id="apps">
      <a className="app-preview" href={app.href} target="_blank" rel="noreferrer">
        <div className="app-controls">
          <span className="app-preview-title"><ShoppingBagOpen size={17} /> Quick Add to Cart</span>
          <span>Add button to</span>
          <label><span className="radio is-selected" /> All products</label>
          <label><span className="radio" /> Specific collections</label>
          <span className="control-label">Button style</span>
          <label><span className="radio is-selected" /> Minimal</label>
          <label><span className="radio" /> Primary</label>
        </div>
        <div className="app-product">
          <img src={app.image} alt="Black skincare bottle product preview" />
          <span>Daily Cleanser</span>
          <small>$28.00</small>
          <span className="mini-button">Add to cart</span>
        </div>
      </a>
      <span className="product-type">App</span>
      <h3>{app.name}</h3>
      <p>{app.tagline}</p>
      <a className="text-link" href={app.href} target="_blank" rel="noreferrer">
        {app.cta}
        <ArrowRight size={17} />
      </a>
    </article>
  );
}

function Products() {
  return (
    <section className="products-section" id="products">
      <div className="section-heading-row">
        <h2>Made for modern commerce</h2>
        <a className="text-link" href="#themes">
          View all products
          <ArrowRight size={17} />
        </a>
      </div>
      <div className="product-grid">
        <ThemeCard theme={siteData.themes[0]} sectionAnchor />
        <ThemeCard theme={siteData.themes[1]} dark />
        <AppCard app={siteData.apps[0]} />
      </div>
    </section>
  );
}

function About() {
  const about = {
    founded: "2015",
    location: "Chiba, Japan",
    description:
      "Founded in 2015, ESEN is based in Chiba City, Chiba Prefecture, Japan. Since our founding, we have remained committed to professionalism, reliability, and continuous innovation, providing customers with high-quality products and services. We value every customer's needs and bring a rigorous approach to our work, supported by a comprehensive service system. By continually improving the customer experience and expanding into global markets, we strive to be a trusted long-term partner.",
    ...siteData.about,
  };

  return (
    <section className="about-section" id="about">
      <div className="about-heading">
        <span className="eyebrow">About ESEN</span>
        <h2>Built on trust.<br />Growing beyond borders.</h2>
      </div>
      <div className="about-copy">
        <p>{about.description}</p>
        <div className="about-facts">
          <div>
            <span>Established</span>
            <strong>{about.founded}</strong>
          </div>
          <div>
            <span>Based in</span>
            <strong>{about.location}</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function Resources() {
  return (
    <section className="resources-section" id="resources">
      <div>
        <span className="eyebrow">Resources</span>
        <h2>Launch with clarity.<br />Grow with confidence.</h2>
      </div>
      <div className="resource-list">
        <a href="https://docs.esentheme.com/" target="_blank" rel="noreferrer">
          <BookOpenText size={28} weight="light" />
          <span><strong>Documentation</strong>Setup guides, feature walkthroughs, and practical answers.</span>
          <ArrowUpRight size={20} />
        </a>
        <a href="https://docs.esentheme.com/en/support" target="_blank" rel="noreferrer">
          <ClockCounterClockwise size={28} weight="light" />
          <span><strong>Changelog</strong>Follow improvements, fixes, and new releases.</span>
          <ArrowUpRight size={20} />
        </a>
        <a href="#support">
          <Lifebuoy size={28} weight="light" />
          <span><strong>Support</strong>Get product help directly from our team.</span>
          <ArrowUpRight size={20} />
        </a>
      </div>
      <span id="documentation" className="anchor-target" />
      <span id="changelog" className="anchor-target" />
    </section>
  );
}

function Support() {
  const [copied, setCopied] = useState(false);
  const company = {
    name: "ESEN",
    address: "1-12-6 Shinjuku, Chuo-ku, Chiba-shi, Chiba 260-0021, Japan",
    phone: "+81 90 8722 7579",
    phoneHref: "+819087227579",
    ...siteData.company,
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(siteData.supportEmail);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section className="support-section" id="support">
      <div className="support-copy">
        <span className="eyebrow">Product support</span>
        <h2>Real help, from real people.</h2>
        <p>
          Tell us which theme or app you use, your store URL, product version, and what you expected to happen.
          We aim to respond within two business days.
        </p>
        <div className="support-actions">
          <a
            className="button button-light"
            href={`mailto:${siteData.supportEmail}?subject=Shopify%20product%20support&body=Product%3A%0AStore%20URL%3A%0AVersion%3A%0ADescription%3A`}
          >
            <EnvelopeSimple size={18} />
            Email support
          </a>
          <button className="copy-button" type="button" onClick={copyEmail}>
            {copied ? <Check size={17} /> : <CopySimple size={17} />}
            {copied ? "Copied" : siteData.supportEmail}
          </button>
        </div>
      </div>
      <div className="support-notes">
        <div className="company-contact">
          <MapPin size={20} />
          <span>
            <strong>{company.name}</strong>
            <address>
              {company.address}
              <a href={`tel:${company.phoneHref}`}>{company.phone}</a>
            </address>
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <BrandLogo />
      <p>Shopify themes and apps, thoughtfully made.</p>
      <div>
        <a href="#themes">Themes</a>
        <a href="#apps">Apps</a>
        <a href="#about">About</a>
        <a href="#resources">Resources</a>
        <a href="#support">Support</a>
      </div>
      <span>© 2026 Esen. All rights reserved.</span>
    </footer>
  );
}

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
        <Resources />
        <Support />
      </main>
      <Footer />
    </>
  );
}
