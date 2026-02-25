import { Link } from "react-router-dom";
import { FiInstagram, FiTwitter, FiFacebook, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="border-t border-gold bg-card">
      <div className="container-main py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-3 text-2xl font-display text-gradient-gold">INFINIOX</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Crafting premium furniture, smart watches, and bespoke epoxy art pieces that redefine luxury living.
            </p>
            <div className="mt-4 flex gap-3">
              {[FiInstagram, FiTwitter, FiFacebook].map((Icon, i) => (
                <a key={i} href="#" className="rounded-sm border border-gold p-2 text-muted-foreground transition-all hover:text-primary hover:border-primary">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Navigation</h4>
            <ul className="space-y-2">
              {[{ label: "Home", to: "/" }, { label: "About", to: "/about" }, { label: "Products", to: "/products" }, { label: "Contact", to: "/contact" }].map((item) => (
                <li key={item.label}>
                  <Link to={item.to} className="text-sm text-muted-foreground transition-colors hover:text-foreground">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Categories</h4>
            <ul className="space-y-2">
              {["Premium Furniture", "Smart Watches", "Epoxy Art", "Custom Orders"].map((item) => (
                <li key={item}><span className="text-sm text-muted-foreground">{item}</span></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <FiMapPin size={14} className="mt-0.5 shrink-0 text-primary" /> 42 Artisan Boulevard, Mumbai, India
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <FiPhone size={14} className="shrink-0 text-primary" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <FiMail size={14} className="shrink-0 text-primary" /> hello@infiniox.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gold pt-6 text-center text-xs text-muted-foreground tracking-wide">
          © {new Date().getFullYear()} INFINIOX. All rights reserved. Crafted with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
