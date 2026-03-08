import { useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { programs } from "@/data/programs";
import { ArrowRight, ArrowLeft, CheckCircle, Users, Handshake, MessageCircle } from "lucide-react";

const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const approachRef = useRef(null);
  const approachInView = useInView(approachRef, { once: true, margin: "-80px" });
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });

  const program = programs.find((p) => p.slug === slug);
  if (!program) return <Navigate to="/programs" replace />;

  const currentIndex = programs.findIndex((p) => p.slug === slug);
  const nextProgram = programs[(currentIndex + 1) % programs.length];
  const prevProgram = programs[(currentIndex - 1 + programs.length) % programs.length];

  const colorClass = program.color === "gold" ? "text-gold" : "text-leaf";
  const bgColorClass = program.color === "gold" ? "bg-gold" : "bg-leaf";
  const bgColorLightClass = program.color === "gold" ? "bg-gold/10" : "bg-leaf/10";
  const borderColorClass = program.color === "gold" ? "border-gold/20" : "border-leaf/20";

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero — immersive split */}
      <section ref={heroRef} className="relative min-h-[85vh] bg-forest-night overflow-hidden flex items-center">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className={`absolute top-20 right-20 w-96 h-96 rounded-full ${bgColorLightClass} blur-[120px] opacity-30`} />
          <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-forest/20 blur-[80px]" />
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-20 relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Text */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                className="mb-6"
              >
                <Link
                  to="/programs"
                  className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition-colors tracking-wider uppercase"
                >
                  <ArrowLeft className="w-3 h-3" />
                  All Programs
                </Link>
              </motion.div>

              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className={`font-mono text-xs ${colorClass} tracking-[0.3em] uppercase mb-4 block`}
              >
                {program.subtitle}
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6"
              >
                {program.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.35 }}
                className={`font-display text-xl md:text-2xl ${colorClass} italic mb-6`}
              >
                "{program.tagline}"
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="font-body text-lg text-muted-foreground max-w-xl leading-relaxed"
              >
                {program.description}
              </motion.p>
            </div>

            {/* Visual — large icon + stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 relative"
            >
              {/* Orbit rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-dashed border-foreground/[0.06]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-foreground/[0.03]" />

              <div className="relative z-10 flex flex-col items-center">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className={`w-36 h-36 rounded-[2rem] flex items-center justify-center ${bgColorLightClass} mb-8`}
                >
                  <program.icon className={`w-20 h-20 ${colorClass}`} strokeWidth={1} />
                </motion.div>

                {/* Stats orbiting */}
                <div className="flex gap-6">
                  {[program.impact, ...program.stats].map((stat, si) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      animate={heroInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.6 + si * 0.1 }}
                      className={`text-center px-4 py-3 rounded-xl ${si === 0 ? `${bgColorLightClass} border ${borderColorClass}` : ""}`}
                    >
                      <span className={`font-display text-xl font-bold ${si === 0 ? colorClass : "text-foreground"}`}>
                        {stat.number}
                      </span>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Full description */}
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold text-parchment-foreground mb-8">
              About This Program
            </h2>
            {program.fullDescription.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="font-body text-parchment-foreground/75 text-lg leading-relaxed"
              >
                {p}
              </motion.p>
            ))}

            {/* Highlights */}
            <div className="pt-6">
              <h3 className="font-display text-lg font-bold text-parchment-foreground mb-4">Key Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.highlights.map((h) => (
                  <div key={h} className={`flex items-start gap-2.5 p-3 rounded-xl ${bgColorLightClass}`}>
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${colorClass}`} />
                    <span className="font-body text-sm text-parchment-foreground/80">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach — stepped process */}
      <section ref={approachRef} className="py-20 md:py-28 bg-forest-night">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={approachInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className={`font-mono text-xs ${colorClass} tracking-[0.3em] uppercase mb-3 block`}>How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Approach</h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={approachInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`hidden md:block absolute top-12 left-0 right-0 h-0.5 ${bgColorClass} opacity-20 origin-left`}
            />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {program.approach.map((step, si) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={approachInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + si * 0.15, duration: 0.6 }}
                  className="text-center relative"
                >
                  <div className={`w-12 h-12 rounded-full ${bgColorLightClass} border-2 ${borderColorClass} flex items-center justify-center mx-auto mb-4 relative z-10 bg-card`}>
                    <span className={`font-display text-lg font-bold ${colorClass}`}>{si + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.step}</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">{step.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-24 md:py-32 bg-parchment relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-forest" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold" />
        </div>

        <div className="max-w-3xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment-foreground mb-4">
              Ready to Be Part of This?
            </h2>
            <p className="font-body text-parchment-foreground/70 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
              Whether you want to join as a volunteer, partner with us, or simply learn more — we'd love to hear from you.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-forest text-foreground font-body font-semibold px-8 py-4 rounded-full hover:bg-forest/90 transition-colors text-lg"
              >
                <Users className="w-5 h-5" />
                Join Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors text-lg"
              >
                <Handshake className="w-5 h-5" />
                Become a Partner
              </Link>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-body text-forest font-semibold hover:text-forest/80 transition-colors underline underline-offset-4 decoration-forest/30 hover:decoration-forest"
            >
              <MessageCircle className="w-4 h-4" />
              Still have questions? Send us a message
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Navigate between programs */}
      <section className="py-12 bg-forest-night border-t border-border/10">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between">
            <Link
              to={`/programs/${prevProgram.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <div>
                <span className="font-mono text-xs tracking-wider uppercase block">Previous</span>
                <span className="font-display text-sm font-semibold">{prevProgram.title}</span>
              </div>
            </Link>
            <Link
              to={`/programs/${nextProgram.slug}`}
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors text-right"
            >
              <div>
                <span className="font-mono text-xs tracking-wider uppercase block">Next</span>
                <span className="font-display text-sm font-semibold">{nextProgram.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProgramDetail;
