import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Globe, BookOpen, TreePine, Heart, Target, Eye, ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import React from "react";
import pageAboutCartoon from "@/assets/page-about-cartoon.png";
import { PageTransition, WordReveal } from "@/components/animations/AnimationUtils";

const values = [
  { icon: Users, title: "Youth-Led", description: "We believe young people are the most powerful agents of change in the climate movement.", color: "gold" },
  { icon: Globe, title: "Language Justice", description: "Climate knowledge must be accessible in every language — no community left behind.", color: "leaf" },
  { icon: BookOpen, title: "Education First", description: "Informed communities are empowered communities. Knowledge is our greatest tool.", color: "gold" },
  { icon: TreePine, title: "Rooted Locally", description: "Our solutions are designed by and for Tanzanian communities, respecting local contexts.", color: "leaf" },
  { icon: Heart, title: "Community Driven", description: "We work with communities, not for them — centering local voices and needs.", color: "gold" },
  { icon: Target, title: "Action Oriented", description: "We translate knowledge into tangible environmental action and measurable impact.", color: "leaf" },
];

const timeline = [
  { year: "2020", event: "Global Climate Cardinals movement inspires Tanzanian youth activists" },
  { year: "2021", event: "Early grassroots organizing and climate translation pilot projects begin" },
  { year: "2022", event: "Climate Cardinals Tanzania Chapter officially founded by Ester Kimario" },
  { year: "2022", event: "First volunteer cohort recruited — 20 youth translators onboarded" },
  { year: "2023", event: "First climate education workshops held in Kilimanjaro region" },
  { year: "2023", event: "Youth Translation Volunteer Program launched nationwide" },
  { year: "2023", event: "Community tree planting initiatives begin in rural villages" },
  { year: "2024", event: "Partnership with Chanya Change established" },
  { year: "2024", event: "Expanded to 30+ communities across Tanzania" },
  { year: "2024", event: "Digital climate literacy platform development started" },
  { year: "2025", event: "Translated climate materials into 15+ local languages" },
  { year: "2025", event: "120+ active youth volunteers across the country" },
  { year: "2025", event: "Regional leadership training programs launched" },
  { year: "2026", event: "National Climate Education Summit planned" },
  { year: "2026", event: "Goal: Reach 50+ communities and 25+ languages" },
  { year: "2027", event: "Vision: Establish permanent climate learning centers in every region" },
  { year: "2028", event: "Vision: Full integration of climate education in local school curricula" },
  { year: "2029", event: "Vision: Pan-African expansion — sharing our model with neighboring nations" },
  { year: "2030", event: "Vision: Every Tanzanian community climate-literate in their own language" },
];

const INITIAL_VISIBLE = 8;

const TimelineSection = React.forwardRef<HTMLElement, { inView: boolean }>(({ inView }, ref) => {
  const [expanded, setExpanded] = useState(false);
  const visibleItems = expanded ? timeline : timeline.slice(0, INITIAL_VISIBLE);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-forest-night">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3 block">Where We've Been & Where We're Going</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">Our Journey</h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 2.5, ease: "easeOut" }}
            className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold via-leaf to-forest origin-top"
          />

          <AnimatePresence mode="sync">
            {visibleItems.map((item, i) => {
              const isFuture = parseInt(item.year) > 2025;
              return (
                <motion.div
                  key={`${item.year}-${item.event}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: i < INITIAL_VISIBLE ? 0.2 + i * 0.08 : 0.05 * (i - INITIAL_VISIBLE) }}
                  className={`relative flex items-start gap-6 mb-6 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <span className={`font-mono text-sm font-semibold ${isFuture ? "text-leaf" : "text-gold"}`}>
                      {item.year}
                    </span>
                  </div>
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full ${isFuture ? "bg-leaf/20 border-leaf/40" : "bg-forest border-parchment"} border-4 flex items-center justify-center`}>
                      <div className={`w-2 h-2 rounded-full ${isFuture ? "bg-leaf" : "bg-gold"}`} />
                    </div>
                  </div>
                  <div className="flex-1 pb-2">
                    <span className={`font-mono text-sm font-semibold md:hidden ${isFuture ? "text-leaf" : "text-gold"}`}>
                      {item.year}
                    </span>
                    <p className={`font-body text-sm leading-relaxed ${isFuture ? "text-muted-foreground italic" : "text-foreground/80"}`}>
                      {isFuture && <span className="text-leaf/60 mr-1">→</span>}
                      {item.event}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Show more / less */}
          {timeline.length > INITIAL_VISIBLE && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="flex justify-center mt-8"
            >
              <button
                onClick={() => setExpanded(!expanded)}
                className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold hover:text-gold/80 transition-colors bg-gold/10 hover:bg-gold/20 px-6 py-3 rounded-full"
              >
                {expanded ? "Show Less" : `View Full Journey (${timeline.length - INITIAL_VISIBLE} more)`}
                <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="w-4 h-4" />
                </motion.div>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
});
TimelineSection.displayName = "TimelineSection";

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, margin: "-100px" });
  const storyRef = useRef(null);
  const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-night overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl"
            >
              Breaking Language Barriers for <span className="text-gold">Climate Justice</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              Climate Cardinals Tanzania is a youth-led chapter of the global Climate Cardinals movement. 
              We translate critical climate information into Kiswahili and local tribal languages so that 
              no community is left behind in the fight against climate change.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <motion.img
              src={pageAboutCartoon}
              alt="Youth studying climate science"
              className="w-64 md:w-80 drop-shadow-2xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision — clean side-by-side */}
      <section ref={missionRef} className="py-20 md:py-32 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-forest tracking-[0.3em] uppercase mb-3 block">What Drives Us</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground">
              Our Purpose
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-xl">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="bg-forest p-10 md:p-14 flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-leaf/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-leaf" />
              </div>
              <span className="font-mono text-xs text-leaf tracking-widest uppercase mb-2 block">Our Mission</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-5">
                Translate. Educate. Empower.
              </h3>
              <p className="font-body text-foreground/80 leading-relaxed text-lg">
                To make climate education accessible to every Tanzanian community by translating climate 
                knowledge into Kiswahili and local tribal languages — empowering youth to lead climate 
                action at the grassroots level.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="bg-gold p-10 md:p-14 flex flex-col justify-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-forest/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-forest" />
              </div>
              <span className="font-mono text-xs text-forest/70 tracking-widest uppercase mb-2 block">Our Vision</span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-accent-foreground mb-5">
                Climate Literacy for All
              </h3>
              <p className="font-body text-accent-foreground/80 leading-relaxed text-lg">
                A Tanzania where every community — urban or rural, young or old — has the knowledge and 
                tools to understand, respond to, and combat the effects of climate change in their own language.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-20 md:py-28 bg-forest-night">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3 block">How It Started</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold via-leaf to-forest rounded-full" />
            <div className="pl-8 space-y-6">
              <p className="font-body text-foreground/80 leading-relaxed text-lg">
                Climate Cardinals is the world's largest youth-led climate translation organization. 
                The Tanzania Chapter was founded by <span className="text-gold font-semibold">Ester Kimario</span> with 
                a singular vision: ensuring that every Tanzanian community has access to life-saving 
                climate information in their own language.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-lg">
                In Tanzania, where over 120 tribal languages are spoken, critical climate knowledge 
                often remains locked in English or Kiswahili — leaving rural communities without the 
                information they need to adapt to a changing climate.
              </p>
              <p className="font-body text-foreground/70 leading-relaxed text-lg">
                We mobilize young volunteers to translate, educate, and advocate — building a 
                generation of climate-literate Tanzanians who can lead their communities toward 
                a sustainable future.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values — Connected hexagonal web */}
      <section ref={valuesRef} className="py-20 md:py-32 bg-parchment overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-16"
          >
            <span className="font-mono text-xs text-forest tracking-[0.3em] uppercase mb-3 block">What We Stand For</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground">Our Values</h2>
          </motion.div>

          {/* Connected web layout */}
          <div className="relative max-w-4xl mx-auto">
            {/* SVG connections between nodes (desktop) */}
            <svg className="hidden md:block absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
              {/* Row 1 connections */}
              <motion.line x1="25%" y1="30%" x2="50%" y2="30%" stroke="hsl(var(--forest))" strokeWidth="1" strokeDasharray="6 4" opacity="0.15"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 0.8, duration: 0.6 }} />
              <motion.line x1="50%" y1="30%" x2="75%" y2="30%" stroke="hsl(var(--forest))" strokeWidth="1" strokeDasharray="6 4" opacity="0.15"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 0.9, duration: 0.6 }} />
              {/* Cross connections */}
              <motion.line x1="25%" y1="30%" x2="37%" y2="75%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="6 4" opacity="0.1"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 1.0, duration: 0.6 }} />
              <motion.line x1="75%" y1="30%" x2="63%" y2="75%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="6 4" opacity="0.1"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 1.1, duration: 0.6 }} />
              <motion.line x1="50%" y1="30%" x2="37%" y2="75%" stroke="hsl(var(--forest))" strokeWidth="1" strokeDasharray="6 4" opacity="0.1"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 1.2, duration: 0.6 }} />
              <motion.line x1="50%" y1="30%" x2="63%" y2="75%" stroke="hsl(var(--forest))" strokeWidth="1" strokeDasharray="6 4" opacity="0.1"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 1.3, duration: 0.6 }} />
              {/* Row 2 connections */}
              <motion.line x1="37%" y1="75%" x2="63%" y2="75%" stroke="hsl(var(--gold))" strokeWidth="1" strokeDasharray="6 4" opacity="0.15"
                initial={{ pathLength: 0 }} animate={valuesInView ? { pathLength: 1 } : {}} transition={{ delay: 1.4, duration: 0.6 }} />
            </svg>

            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 relative z-10">
              {values.slice(0, 3).map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className={`bg-card border-2 ${value.color === "gold" ? "border-gold/20 group-hover:border-gold/60" : "border-leaf/20 group-hover:border-leaf/60"} rounded-2xl p-6 text-center transition-all duration-300 shadow-md group-hover:shadow-xl h-full`}>
                    <div className={`w-14 h-14 rounded-2xl ${value.color === "gold" ? "bg-gold/15" : "bg-leaf/15"} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className={`w-7 h-7 ${value.color === "gold" ? "text-gold" : "text-leaf"}`} />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Row 2: 3 cards offset */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:px-16 relative z-10">
              {values.slice(3).map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                  className="group"
                >
                  <div className={`bg-card border-2 ${value.color === "gold" ? "border-gold/20 group-hover:border-gold/60" : "border-leaf/20 group-hover:border-leaf/60"} rounded-2xl p-6 text-center transition-all duration-300 shadow-md group-hover:shadow-xl h-full`}>
                    <div className={`w-14 h-14 rounded-2xl ${value.color === "gold" ? "bg-gold/15" : "bg-leaf/15"} flex items-center justify-center mx-auto mb-4`}>
                      <value.icon className={`w-7 h-7 ${value.color === "gold" ? "text-gold" : "text-leaf"}`} />
                    </div>
                    <h3 className="font-display text-base font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline — collapsible */}
      <TimelineSection ref={timelineRef} inView={timelineInView} />

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-parchment relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-forest" />
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-gold" />
        </div>

        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs text-forest tracking-[0.3em] uppercase mb-4 block">
              Be Part of the Movement
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-parchment-foreground mb-6">
              Ready to Make a <span className="text-gold">Difference</span>?
            </h2>
            <p className="font-body text-parchment-foreground/70 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Join our growing community of youth climate activists and help us translate climate 
              knowledge into every Tanzanian language. Together, we can build a climate-literate nation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/join"
                className="inline-flex items-center gap-2 bg-forest text-foreground font-body font-semibold px-8 py-4 rounded-full hover:bg-forest/90 transition-colors duration-300 text-lg"
              >
                Join Our Community
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-8 py-4 rounded-full hover:bg-gold/90 transition-colors duration-300 text-lg"
              >
                Explore Programs
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <p className="font-body text-parchment-foreground/50 text-sm mb-3">Still have questions?</p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-body text-forest font-semibold hover:text-forest/80 transition-colors underline underline-offset-4 decoration-forest/30 hover:decoration-forest"
              >
                <MessageCircle className="w-4 h-4" />
                Send us a message
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
