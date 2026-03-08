import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import globalLogo from "@/assets/climate-cardinals-global-logo.png";
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-forest-night overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-forest via-gold to-forest" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pt-10 sm:pt-16 pb-6 sm:pb-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4 sm:mb-6">
              <img src={logo} alt="Climate Cardinals Tanzania" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
              <div className="flex flex-col">
                <span className="font-display text-sm sm:text-base font-semibold text-foreground leading-tight">
                  Climate Cardinals
                </span>
                <span className="font-body text-[10px] sm:text-xs text-gold font-medium tracking-wider">
                  TANZANIA CHAPTER
                </span>
              </div>
            </Link>
            <p className="font-body text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
              Breaking language barriers to bring climate knowledge to every Tanzanian community in Kiswahili and local languages.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/climatecardinalstz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-5 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 sm:space-y-3">
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
                    className="font-body text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-display text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-5 uppercase tracking-wider">
              Our Programs
            </h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Climate Education",
                "Community Campaigns",
                "Youth Translation",
                "Tree Planting",
              ].map((program) => (
                <li key={program}>
                  <Link
                    to="/programs"
                    className="font-body text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors duration-200"
                  >
                    {program}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-display text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-5 uppercase tracking-wider">
              Get In Touch
            </h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href="mailto:climatecardinalstz@gmail.com"
                  className="flex items-start gap-3 font-body text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                  <span className="break-all sm:break-normal">climatecardinalstz@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+255626700442"
                  className="flex items-start gap-3 font-body text-xs sm:text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                  +255 626 700 442
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-body text-xs sm:text-sm text-muted-foreground">
                  <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mt-0.5 flex-shrink-0 text-gold/60" />
                  Tanzania, East Africa
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-border pt-6 sm:pt-8 mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
            <div>
              <h4 className="font-display text-sm sm:text-base font-semibold text-foreground mb-1">
                Stay Updated
              </h4>
              <p className="font-body text-xs sm:text-sm text-muted-foreground">
                Subscribe to our newsletter for climate action updates.
              </p>
            </div>
            <div className="flex w-full sm:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 sm:w-48 md:w-64 bg-muted/30 border border-border rounded-l-lg px-3 sm:px-4 py-2 sm:py-2.5 font-body text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 transition-colors"
              />
              <button className="bg-gold text-accent-foreground font-body text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-r-lg hover:bg-gold-warm transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <img src={globalLogo} alt="Climate Cardinals" className="h-5 sm:h-6 w-auto object-contain opacity-60" />
              <span className="font-body text-[10px] sm:text-xs text-muted-foreground">
                An official chapter of Climate Cardinals
              </span>
            </div>
            <span className="hidden sm:inline font-body text-[10px] text-muted-foreground/40">·</span>
            <p className="font-body text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">
              © 2026 Climate Cardinals Tanzania · Founded by Ester Kimario
            </p>
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-muted/30 border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold/40 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
