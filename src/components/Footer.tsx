import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-forest-night overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-forest via-gold to-forest" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="Climate Cardinals Tanzania" className="h-12 w-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-display text-base font-semibold text-foreground leading-tight">
                  Climate Cardinals
                </span>
                <span className="font-body text-xs text-gold font-medium tracking-wider">
                  TANZANIA CHAPTER
                </span>
              </div>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Breaking language barriers to bring climate knowledge to every Tanzanian community in Kiswahili and local languages.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/climatecardinalstz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Join Us", to: "/join" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
              Our Programs
            </h4>
            <ul className="space-y-3">
              {[
                "Climate Education",
                "Community Campaigns",
                "Youth Translation",
                "Tree Planting",
              ].map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="font-body text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-sm font-semibold text-foreground mb-5 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:climatecardinalstz@gmail.com"
                  className="flex items-start gap-3 font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                  climatecardinalstz@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+255626700442"
                  className="flex items-start gap-3 font-body text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                  +255 626 700 442
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-body text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                  Tanzania, East Africa
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter mini */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display text-base font-semibold text-foreground mb-1">
                Stay Updated
              </h4>
              <p className="font-body text-sm text-muted-foreground">
                Subscribe to our newsletter for climate action updates.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 md:w-64 bg-muted/30 border border-border rounded-l-lg px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button className="bg-gold text-accent-foreground font-body text-sm font-semibold px-5 py-2.5 rounded-r-lg hover:bg-gold-warm transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-foreground text-center md:text-left">
            © 2026 Climate Cardinals Tanzania · Founded by Ester Kimario · All Rights Reserved
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
