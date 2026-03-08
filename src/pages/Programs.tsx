import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Megaphone, Languages, TreePine, CheckCircle } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Climate Education Workshops",
    subtitle: "Knowledge for Every Community",
    description:
      "Interactive sessions in schools and community centers, teaching climate science in Kiswahili and local languages. We use storytelling, visual aids, and participatory methods to make climate knowledge stick.",
    highlights: [
      "Tailored curriculum for different age groups",
      "Hands-on activities and visual aids",
      "Local language delivery for maximum impact",
      "Trained youth facilitators in every region",
    ],
    color: "leaf" as const,
  },
  {
    icon: Megaphone,
    title: "Community Awareness Campaigns",
    subtitle: "Reaching Every Corner of Tanzania",
    description:
      "Grassroots campaigns that bring climate information directly to rural and urban communities through radio, community gatherings, and creative media in local languages.",
    highlights: [
      "Community radio broadcasts in local languages",
      "Village-level awareness meetings",
      "Creative media and visual storytelling",
      "Partnerships with local leaders and organizations",
    ],
    color: "gold" as const,
  },
  {
    icon: Languages,
    title: "Youth Translation Volunteer Program",
    subtitle: "Bridging the Language Gap",
    description:
      "Training young volunteers to translate climate documents, reports, and educational materials into over 15 Tanzanian languages — creating a library of accessible climate knowledge.",
    highlights: [
      "Translation into 15+ Tanzanian languages",
      "Volunteer training and certification",
      "Growing open-access knowledge library",
      "Quality review by native speakers",
    ],
    color: "leaf" as const,
  },
  {
    icon: TreePine,
    title: "Tree Planting & Environmental Restoration",
    subtitle: "From Knowledge to Action",
    description:
      "Hands-on environmental action — organizing community tree planting events that restore ecosystems while educating participants about the role of forests in climate regulation.",
    highlights: [
      "Community-led planting events",
      "Native species prioritized for biodiversity",
      "Education integrated into every event",
      "Long-term monitoring and care programs",
    ],
    color: "gold" as const,
  },
];

const Programs = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-night overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="programs-dots" width="30" height="30" patternUnits="userSpaceOnUse">
                <circle cx="15" cy="15" r="1.5" fill="hsl(152 43% 50%)" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#programs-dots)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block"
          >
            Our Programs
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-3xl"
          >
            Climate Action <span className="text-gold">In Action</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-lg text-muted-foreground max-w-2xl leading-relaxed"
          >
            From classrooms to communities, from translation desks to tree nurseries — 
            discover how we're making climate knowledge accessible and actionable across Tanzania.
          </motion.p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-20">
          {programs.map((program, i) => {
            const ProgramCard = () => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-80px" });
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7 }}
                  className={`grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start ${
                    !isEven ? "lg:direction-rtl" : ""
                  }`}
                >
                  {/* SVG Illustration */}
                  <div className={`lg:col-span-2 flex justify-center ${!isEven ? "lg:order-2" : ""}`}>
                    <div className="w-full max-w-xs aspect-square bg-forest-night/5 rounded-2xl border border-forest/10 flex items-center justify-center p-8">
                      <svg viewBox="0 0 200 200" className="w-full" aria-hidden="true">
                        <circle cx="100" cy="100" r="80" fill="none" stroke={`hsl(var(--${program.color}))`} strokeWidth="1" opacity="0.2" strokeDasharray="6 3" />
                        <circle cx="100" cy="100" r="60" fill={`hsl(var(--${program.color}))`} opacity="0.08" />
                        <g transform="translate(70,70)">
                          <program.icon size={60} color={`hsl(var(--${program.color}))`} strokeWidth={1.2} />
                        </g>
                      </svg>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-3 ${!isEven ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        program.color === "gold" ? "bg-gold/10" : "bg-leaf/10"
                      }`}>
                        <program.icon className={`w-5 h-5 ${
                          program.color === "gold" ? "text-gold" : "text-leaf"
                        }`} />
                      </div>
                      <span className="font-mono text-xs text-parchment-foreground/50 tracking-wider uppercase">
                        Program 0{i + 1}
                      </span>
                    </div>
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-parchment-foreground mb-2">
                      {program.title}
                    </h2>
                    <p className="font-body text-sm text-parchment-foreground/50 mb-4 italic">
                      {program.subtitle}
                    </p>
                    <p className="font-body text-parchment-foreground/75 leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <ul className="space-y-2.5">
                      {program.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5">
                          <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                            program.color === "gold" ? "text-gold" : "text-leaf"
                          }`} />
                          <span className="font-body text-sm text-parchment-foreground/70">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            };
            return <ProgramCard key={program.title} />;
          })}
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-16 bg-forest-night">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Languages" },
              { number: "120+", label: "Volunteers" },
              { number: "30+", label: "Communities" },
              { number: "500+", label: "Workshops" },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="font-display text-3xl md:text-4xl font-bold text-gold">{stat.number}</span>
                <p className="font-body text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-forest">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Want to Get Involved?
          </h2>
          <p className="font-body text-foreground/70 mb-8 max-w-xl mx-auto">
            Whether you want to volunteer, translate, or partner with us — there's a place for you in the movement.
          </p>
          <a
            href="/join"
            className="inline-block font-body text-base font-semibold bg-gold text-accent-foreground px-8 py-3 rounded-full hover:bg-gold-warm transition-colors"
          >
            Join the Movement
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Programs;
