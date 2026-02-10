import { Link } from "react-router-dom";
import { FiFacebook, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-main py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-foreground">
                <span className="text-base font-bold text-primary">I</span>
              </div>
              <span className="text-lg font-bold">Innovation Pvt. Ltd.</span>
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Empowering businesses through cutting-edge software solutions and
              result-driven digital marketing strategies.
            </p>
            <div className="mt-4 flex gap-3">
              {[FiFacebook, FiTwitter, FiLinkedin, FiInstagram].map((Icon, i) => (
                <a key={i} href="#" className="rounded-lg p-2 opacity-70 transition-opacity hover:opacity-100 hover:bg-primary-foreground/10">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-70">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className="text-sm opacity-80 transition-opacity hover:opacity-100">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-70">Services</h4>
            <ul className="space-y-2">
              {["Web Development", "Mobile Apps", "UI/UX Design", "SEO Services", "Digital Marketing"].map((item) => (
                <li key={item}>
                  <span className="text-sm opacity-80">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-sans text-sm font-semibold uppercase tracking-wider opacity-70">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <FiMapPin size={16} className="mt-0.5 shrink-0" />
                123 Innovation Street, Tech Park, New Delhi, India
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <FiPhone size={16} className="shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <FiMail size={16} className="shrink-0" />
                info@innovationpvt.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/20 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Innovation Private Limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
