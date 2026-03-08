import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle } from "lucide-react";
import { programs } from "@/data/programs";
import pageProgramsCartoon from "@/assets/page-programs-cartoon.png";
import { PageTransition } from "@/components/animations/AnimationUtils";

const Programs = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <PageTransition>
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-24 pb-14 sm:pt-32 sm:pb-20 md:pt-40 md:pb-28 bg-forest-night overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-6 sm:gap-10">
          <div className="flex-1">
            <motion.span
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-3 sm:mb-4 block"
            >
              Our Programs
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 sm:mb-6 max-w-3xl"
            >
              Climate Action <span className="text-gold">In Action</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="font-body text-sm sm:text-lg text-muted-foreground max-w-2xl leading-relaxed"
            >
              From classrooms to communities, from translation desks to tree nurseries — 
              discover how we're making climate knowledge accessible and actionable across Tanzania.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <motion.img
              src={pageProgramsCartoon}
              alt="Youth planting trees and teaching"
              className="w-40 sm:w-64 md:w-80 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Programs — immersive alternating sections */}
      {programs.map((program, i) => {
        const isEven = i % 2 === 0;
        return <ProgramSection key={program.slug} program={program} index={i} isEven={isEven} />;
      })}

      {/* Impact stats */}
      <section className="py-12 sm:py-16 bg-forest-night">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { number: "6+", label: "Languages" },
              { number: "20+", label: "Volunteers" },
              { number: "20+", label: "Communities" },
              { number: "300+", label: "Workshops" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-gold">{stat.number}</span>
                <p className="font-body text-xs sm:text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 sm:py-20 bg-forest">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Want to Get Involved?
          </h2>
          <p className="font-body text-sm sm:text-base text-foreground/70 mb-6 sm:mb-8 max-w-xl mx-auto">
            Whether you want to volunteer, translate, or partner with us — there's a place for you in the movement.
          </p>
          <Link
            to="/join"
            className="inline-block font-body text-sm sm:text-base font-semibold bg-gold text-accent-foreground px-6 sm:px-8 py-3 rounded-full hover:bg-gold-warm transition-colors"
          >
            Join the Movement
          </Link>
        </div>
      </section>

      <Footer />
    </main>
    </PageTransition>
  );
};

const ProgramSection = ({
  program,
  index,
  isEven,
}: {
  program: (typeof programs)[0];
  index: number;
  isEven: boolean;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${isEven ? "bg-parchment" : "bg-forest-night"}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} min-h-[auto] sm:min-h-[70vh]`}>
          {/* Visual side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -60 : 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`w-full lg:w-2/5 flex items-center justify-center p-6 sm:p-10 md:p-16 relative ${
              isEven ? "bg-forest" : program.color === "gold" ? "bg-gold/10" : "bg-leaf/10"
            }`}
          >
            {/* Decorative rings — hidden on mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-dashed border-foreground/[0.06] hidden sm:block" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-foreground/[0.04] hidden sm:block" />

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                animate={inView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`w-20 h-20 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl mx-auto mb-4 sm:mb-6 flex items-center justify-center ${
                  isEven
                    ? program.color === "gold" ? "bg-gold/20" : "bg-leaf/20"
                    : program.color === "gold" ? "bg-gold/15" : "bg-leaf/15"
                }`}
              >
                <program.icon
                  className={`w-10 h-10 sm:w-14 sm:h-14 ${program.color === "gold" ? "text-gold" : "text-leaf"}`}
                  strokeWidth={1.3}
                />
              </motion.div>
              <span className={`font-mono text-[10px] sm:text-xs tracking-[0.3em] uppercase ${
                isEven ? "text-foreground/50" : "text-muted-foreground"
              }`}>
                Program 0{index + 1}
              </span>
              <div className={`mt-2 sm:mt-4 font-display text-3xl sm:text-4xl md:text-5xl font-bold ${
                program.color === "gold" ? "text-gold" : "text-leaf"
              }`}>
                {program.impact.number}
              </div>
              <p className={`font-body text-xs sm:text-sm mt-1 ${
                isEven ? "text-foreground/60" : "text-muted-foreground"
              }`}>
                {program.impact.label}
              </p>
            </div>
          </motion.div>

          {/* Content side */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? 60 : -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="w-full lg:w-3/5 p-5 sm:p-8 md:p-16 flex flex-col justify-center"
          >
            <span className={`font-mono text-[10px] sm:text-xs tracking-widest uppercase mb-2 sm:mb-3 block ${
              program.color === "gold" ? "text-gold" : "text-leaf"
            }`}>
              {program.subtitle}
            </span>
            <h2 className={`font-display text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 ${
              isEven ? "text-parchment-foreground" : "text-foreground"
            }`}>
              {program.title}
            </h2>
            <p className={`font-body text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 max-w-lg ${
              isEven ? "text-parchment-foreground/70" : "text-foreground/70"
            }`}>
              {program.description}
            </p>

            {/* Highlights as pills */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-8">
              {program.highlights.map((h, hi) => (
                <motion.span
                  key={h}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + hi * 0.08 }}
                  className={`inline-flex items-center gap-1 sm:gap-1.5 text-[10px] sm:text-xs font-body px-2 sm:px-3 py-1 sm:py-1.5 rounded-full ${
                    program.color === "gold"
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : "bg-leaf/10 text-leaf border border-leaf/20"
                  }`}
                >
                  <CheckCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  {h}
                </motion.span>
              ))}
            </div>

            {/* Mini stats row */}
            <div className="flex gap-4 sm:gap-6 mb-5 sm:mb-8">
              {program.stats.map((stat, si) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + si * 0.1 }}
                  className="text-center"
                >
                  <span className={`font-display text-lg sm:text-xl font-bold ${
                    program.color === "gold" ? "text-gold" : "text-leaf"
                  }`}>
                    {stat.number}
                  </span>
                  <p className={`font-body text-[10px] sm:text-xs mt-0.5 ${
                    isEven ? "text-parchment-foreground/50" : "text-muted-foreground"
                  }`}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <Link
                to={`/programs/${program.slug}`}
                className={`inline-flex items-center gap-2 font-body text-sm sm:text-base font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors duration-300 ${
                  program.color === "gold"
                    ? "bg-gold text-accent-foreground hover:bg-gold/90"
                    : "bg-forest text-foreground hover:bg-forest/90"
                }`}
              >
                Learn More & Get Involved
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
