import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, Users, Globe, Handshake, CheckCircle, ArrowRight } from "lucide-react";

const roles = [
  { value: "translator", label: "Translation Volunteer", description: "Translate climate materials into local languages" },
  { value: "educator", label: "Climate Educator", description: "Facilitate workshops in schools and communities" },
  { value: "ambassador", label: "Community Ambassador", description: "Represent Climate Cardinals in your community" },
  { value: "media", label: "Media & Communications", description: "Help with social media, design, and outreach" },
  { value: "other", label: "Other", description: "Let us know how you'd like to contribute" },
];

const benefits = [
  { icon: Heart, title: "Make Real Impact", description: "Your work directly helps communities understand and respond to climate change." },
  { icon: Users, title: "Join a Global Network", description: "Connect with Climate Cardinals chapters worldwide and climate advocates across Africa." },
  { icon: Globe, title: "Build Your Skills", description: "Gain experience in translation, education, leadership, and environmental advocacy." },
  { icon: Handshake, title: "Certificate of Service", description: "Receive recognition for your contribution to climate action and community service." },
];

const Join = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    languages: "",
    role: "",
    motivation: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-forest-night overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="join-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="hsl(43 75% 46%)" />
                <circle cx="0" cy="0" r="1" fill="hsl(152 43% 50%)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#join-pattern)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block"
          >
            Join Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl"
          >
            Be Part of the <span className="text-gold">Movement</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            Join over 120 young Tanzanians who are breaking language barriers and fighting climate change — 
            one translation, one workshop, one community at a time.
          </motion.p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-parchment">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-parchment-foreground text-center mb-12">
            Why Join Climate Cardinals Tanzania?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center mx-auto mb-4">
                  <b.icon className="w-6 h-6 text-forest" />
                </div>
                <h3 className="font-display text-base font-semibold text-parchment-foreground mb-2">{b.title}</h3>
                <p className="font-body text-sm text-parchment-foreground/60 leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 md:py-28 bg-forest-night">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Volunteer Application
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto">
              Fill out the form below to apply as a volunteer. We'll review your application and get back to you within a week.
            </p>
          </div>

          <form
            className="bg-card border border-border rounded-2xl p-8 md:p-10 space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Personal info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Your first name"
                  required
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Your last name"
                  required
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+255 xxx xxx xxx"
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Your age"
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                  Location / Region
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Dar es Salaam, Arusha"
                  className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                Languages You Speak *
              </label>
              <input
                type="text"
                name="languages"
                value={formData.languages}
                onChange={handleChange}
                placeholder="e.g. Kiswahili, English, Chagga, Sukuma"
                required
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors"
              />
            </div>

            <div>
              <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                Preferred Role *
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-gold/40 transition-colors"
              >
                <option value="">Select a role</option>
                {roles.map((role) => (
                  <option key={role.value} value={role.value}>
                    {role.label} — {role.description}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-body text-xs text-muted-foreground mb-1.5 font-medium uppercase tracking-wider">
                Why do you want to join? *
              </label>
              <textarea
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us what motivates you to join Climate Cardinals Tanzania..."
                required
                className="w-full bg-muted/30 border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/40 transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body text-base font-semibold py-3.5 rounded-lg hover:bg-gold-warm transition-colors duration-300"
              >
                Submit Application
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="font-body text-xs text-muted-foreground text-center mt-3">
                By submitting, you agree to be contacted about volunteer opportunities.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-parchment">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <h2 className="font-display text-2xl font-bold text-parchment-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              { q: "Do I need prior experience?", a: "No! We provide training for all our volunteer roles. All you need is passion and willingness to learn." },
              { q: "How much time do I need to commit?", a: "We're flexible. Most volunteers contribute 3-5 hours per week, but you can adjust based on your schedule." },
              { q: "What languages can I translate?", a: "Any Tanzanian language! We especially need volunteers who speak Sukuma, Chagga, Hehe, Makonde, Maasai, and other tribal languages." },
              { q: "Is this a paid position?", a: "This is a volunteer program. However, you gain valuable experience, training, and a certificate of service." },
            ].map((faq, i) => (
              <div key={i} className="border-b border-forest/10 pb-5">
                <h3 className="font-display text-base font-semibold text-parchment-foreground mb-2 flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  {faq.q}
                </h3>
                <p className="font-body text-sm text-parchment-foreground/70 pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Join;
