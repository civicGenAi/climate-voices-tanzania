import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Instagram, Clock, Send } from "lucide-react";
import pageContactCartoon from "@/assets/page-contact-cartoon.png";
import { PageTransition } from "@/components/animations/AnimationUtils";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "climatecardinalstz@gmail.com",
    href: "mailto:climatecardinalstz@gmail.com",
    description: "We respond within 24-48 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+255 626 700 442",
    href: "tel:+255626700442",
    description: "Monday to Friday, 9am - 5pm EAT",
  },
  {
    icon: Instagram,
    title: "Follow Us",
    value: "@climatecardinalstz",
    href: "https://instagram.com/climatecardinalstz",
    description: "Updates, stories & community highlights",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Tanzania, East Africa",
    href: "#",
    description: "Operating across 30+ communities",
  },
];

const Contact = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <PageTransition>
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero with cartoon */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-forest-night overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl"
            >
              Let's <span className="text-gold">Connect</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Have questions about our work? Want to partner with us or learn more? We'd love to hear from you.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <motion.img
              src={pageContactCartoon}
              alt="People connecting and collaborating"
              className="w-56 md:w-72 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Contact methods + Form */}
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-6">
              <h2 className="font-display text-2xl font-bold text-parchment-foreground mb-6">
                Reach Out
              </h2>
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-parchment border border-forest/10 hover:border-gold/30 hover:shadow-sm transition-all duration-300 group block"
                >
                  <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                    <method.icon className="w-5 h-5 text-forest group-hover:text-gold transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-semibold text-parchment-foreground mb-0.5">
                      {method.title}
                    </h3>
                    <p className="font-body text-sm text-parchment-foreground/80 font-medium">
                      {method.value}
                    </p>
                    <p className="font-body text-xs text-parchment-foreground/50 mt-1">
                      {method.description}
                    </p>
                  </div>
                </motion.a>
              ))}

              <div className="flex items-start gap-3 mt-8 pt-6 border-t border-forest/10">
                <Clock className="w-4 h-4 text-forest/40 mt-0.5" />
                <div>
                  <p className="font-body text-xs text-parchment-foreground/50 font-semibold uppercase tracking-wider mb-1">
                    Office Hours
                  </p>
                  <p className="font-body text-sm text-parchment-foreground/70">
                    Monday – Friday: 9:00 AM – 5:00 PM (EAT)
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-forest-night rounded-2xl p-8 md:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                  Send a Message
                </h2>
                <p className="font-body text-sm text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>

                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                        First Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your first name"
                        className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                        Last Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your last name"
                        className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                      Subject
                    </label>
                    <select className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold/40 transition-colors">
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="volunteer">Volunteer Opportunity</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media / Press</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us how we can help..."
                      className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body text-sm font-semibold py-3 rounded-lg hover:bg-gold-warm transition-colors duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-forest-night">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-4">Where We Operate</h2>
          <p className="font-body text-sm text-muted-foreground mb-10 max-w-lg mx-auto">
            Our impact spans across Tanzania, from the slopes of Kilimanjaro to the shores of Lake Victoria.
          </p>
          <div className="flex justify-center">
            <svg viewBox="0 0 500 400" className="w-full max-w-lg" aria-label="Map of Tanzania showing areas of operation">
              <path
                d="M200 50 L250 40 L300 50 L350 70 L380 100 L390 150 L400 200 L390 250 L370 300 L340 340 L300 360 L260 370 L220 360 L180 330 L160 290 L150 250 L140 200 L150 150 L160 100 L180 70 Z"
                fill="hsl(153 44% 18%)"
                opacity="0.2"
                stroke="hsl(152 43% 50%)"
                strokeWidth="1.5"
              />
              {[
                { x: 300, y: 70, name: "Kilimanjaro" },
                { x: 350, y: 120, name: "Tanga" },
                { x: 370, y: 200, name: "Dar es Salaam" },
                { x: 270, y: 180, name: "Dodoma" },
                { x: 230, y: 120, name: "Mwanza" },
                { x: 170, y: 220, name: "Kigoma" },
                { x: 200, y: 290, name: "Mbeya" },
                { x: 330, y: 280, name: "Lindi" },
                { x: 280, y: 100, name: "Arusha" },
              ].map((city) => (
                <g key={city.name}>
                  <circle cx={city.x} cy={city.y} r="5" fill="hsl(43 75% 46%)" opacity="0.8" />
                  <circle cx={city.x} cy={city.y} r="10" fill="none" stroke="hsl(43 75% 46%)" strokeWidth="0.5" opacity="0.4" />
                  <text x={city.x} y={city.y - 12} textAnchor="middle" fontSize="9" fill="hsl(40 33% 95%)" opacity="0.7" className="font-body">
                    {city.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
