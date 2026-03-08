import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { BookOpen, Megaphone, Languages, TreePine, CheckCircle, ArrowRight, X, Handshake, Users } from "lucide-react";
import pageProgramsCartoon from "@/assets/page-programs-cartoon.png";

const programs = [
  {
    icon: BookOpen,
    title: "Climate Education Workshops",
    subtitle: "Knowledge for Every Community",
    description:
      "Interactive sessions in schools and community centers, teaching climate science in Kiswahili and local languages. We use storytelling, visual aids, and participatory methods to make climate knowledge stick.",
    fullDescription:
      "Our Climate Education Workshops are designed to bring climate science to life in communities across Tanzania. We work with local schools, community centers, and gathering spaces to deliver interactive, hands-on learning experiences. Each workshop is tailored to the audience — from primary school students to village elders — ensuring that everyone can engage with and understand the material. Our trained youth facilitators deliver content in Kiswahili and local tribal languages, using storytelling, visual aids, and participatory activities that make complex climate concepts accessible and memorable.",
    highlights: [
      "Tailored curriculum for different age groups",
      "Hands-on activities and visual aids",
      "Local language delivery for maximum impact",
      "Trained youth facilitators in every region",
    ],
    impact: "500+ workshops conducted across 30+ communities",
    color: "leaf" as const,
  },
  {
    icon: Megaphone,
    title: "Community Awareness Campaigns",
    subtitle: "Reaching Every Corner of Tanzania",
    description:
      "Grassroots campaigns that bring climate information directly to rural and urban communities through radio, community gatherings, and creative media in local languages.",
    fullDescription:
      "Our Community Awareness Campaigns take climate information directly to the people who need it most. Through community radio broadcasts in local languages, village-level meetings, creative visual storytelling, and partnerships with local leaders, we ensure that critical climate knowledge reaches every corner of Tanzania. We believe that awareness is the first step toward action, and our campaigns are designed to spark conversations, change behaviors, and inspire communities to take charge of their environmental future.",
    highlights: [
      "Community radio broadcasts in local languages",
      "Village-level awareness meetings",
      "Creative media and visual storytelling",
      "Partnerships with local leaders and organizations",
    ],
    impact: "Reached 50,000+ community members through campaigns",
    color: "gold" as const,
  },
  {
    icon: Languages,
    title: "Youth Translation Volunteer Program",
    subtitle: "Bridging the Language Gap",
    description:
      "Training young volunteers to translate climate documents, reports, and educational materials into over 15 Tanzanian languages — creating a library of accessible climate knowledge.",
    fullDescription:
      "The Youth Translation Volunteer Program is at the heart of our mission. We recruit, train, and certify young Tanzanians to translate critical climate documents, scientific reports, educational materials, and policy briefs into over 15 Tanzanian languages. Every translation undergoes quality review by native speakers to ensure accuracy and cultural relevance. Together, we are building an open-access library of climate knowledge that any community can use — breaking down the language barriers that have kept vital information out of reach.",
    highlights: [
      "Translation into 15+ Tanzanian languages",
      "Volunteer training and certification",
      "Growing open-access knowledge library",
      "Quality review by native speakers",
    ],
    impact: "120+ active volunteer translators nationwide",
    color: "leaf" as const,
  },
  {
    icon: TreePine,
    title: "Tree Planting & Environmental Restoration",
    subtitle: "From Knowledge to Action",
    description:
      "Hands-on environmental action — organizing community tree planting events that restore ecosystems while educating participants about the role of forests in climate regulation.",
    fullDescription:
      "Our Tree Planting & Environmental Restoration program turns climate knowledge into tangible action. We organize community-led planting events across Tanzania, prioritizing native species to maximize biodiversity and ecological impact. Every planting event includes an educational component — teaching participants about the critical role forests play in carbon sequestration, water regulation, and biodiversity. We also run long-term monitoring and care programs to ensure that planted trees survive and thrive, creating lasting environmental impact.",
    highlights: [
      "Community-led planting events",
      "Native species prioritized for biodiversity",
      "Education integrated into every event",
      "Long-term monitoring and care programs",
    ],
    impact: "10,000+ trees planted across Tanzania",
    color: "gold" as const,
  },
];

const ProgramDetail = ({
  program,
  onClose,
}: {
  program: (typeof programs)[0];
  onClose: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-forest-night/80 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-card rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto z-10"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors z-20"
        >
          <X className="w-5 h-5 text-foreground" />
        </button>

        {/* Header */}
        <div className={`p-8 pb-6 ${program.color === "gold" ? "bg-gold/10" : "bg-leaf/10"} rounded-t-3xl`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
              program.color === "gold" ? "bg-gold/20" : "bg-leaf/20"
            }`}>
              <program.icon className={`w-6 h-6 ${program.color === "gold" ? "text-gold" : "text-leaf"}`} />
            </div>
            <span className={`font-mono text-xs tracking-widest uppercase ${
              program.color === "gold" ? "text-gold" : "text-leaf"
            }`}>
              {program.subtitle}
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            {program.title}
          </h2>
          {program.impact && (
            <p className={`font-mono text-sm mt-3 ${program.color === "gold" ? "text-gold" : "text-leaf"}`}>
              ✦ {program.impact}
            </p>
          )}
        </div>

        {/* Body */}
        <div className="p-8 pt-6 space-y-6">
          <p className="font-body text-foreground/80 leading-relaxed">
            {program.fullDescription}
          </p>

          {/* Highlights */}
          <div>
            <h3 className="font-display text-sm font-bold text-foreground mb-3 uppercase tracking-wider">
              Key Highlights
            </h3>
            <ul className="space-y-2.5">
              {program.highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5">
                  <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                    program.color === "gold" ? "text-gold" : "text-leaf"
                  }`} />
                  <span className="font-body text-sm text-foreground/70">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action buttons */}
          <div className="pt-4 border-t border-border space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/contact"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-forest text-foreground font-body font-semibold px-6 py-3.5 rounded-full hover:bg-forest/90 transition-colors"
              >
                <Users className="w-4 h-4" />
                Join Us
              </Link>
              <Link
                to="/contact"
                onClick={onClose}
                className="flex-1 inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3.5 rounded-full hover:bg-gold/90 transition-colors"
              >
                <Handshake className="w-4 h-4" />
                Become a Partner
              </Link>
            </div>
            <Link
              to="/contact"
              onClick={onClose}
              className="w-full inline-flex items-center justify-center gap-2 border-2 border-border text-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-muted transition-colors text-sm"
            >
              Have Questions? Contact Us
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Programs = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null);

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero with cartoon */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-night overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1">
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={heroInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
          >
            <motion.img
              src={pageProgramsCartoon}
              alt="Youth planting trees and teaching"
              className="w-64 md:w-80 drop-shadow-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </section>

      {/* Programs — clickable cards */}
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map((program, i) => {
              const ref = useRef(null);
              const inView = useInView(ref, { once: true, margin: "-60px" });

              return (
                <motion.div
                  key={program.title}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  onClick={() => setSelectedProgram(program)}
                  className="group cursor-pointer"
                >
                  <div className={`relative bg-card border-2 ${
                    program.color === "gold" ? "border-gold/15 hover:border-gold/50" : "border-leaf/15 hover:border-leaf/50"
                  } rounded-2xl p-8 h-full transition-all duration-300 shadow-md hover:shadow-2xl overflow-hidden`}>
                    {/* Background glow on hover */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                      program.color === "gold" ? "bg-gold/[0.03]" : "bg-leaf/[0.03]"
                    }`} />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-5">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                          program.color === "gold" ? "bg-gold/15" : "bg-leaf/15"
                        }`}>
                          <program.icon className={`w-7 h-7 ${
                            program.color === "gold" ? "text-gold" : "text-leaf"
                          }`} />
                        </div>
                        <motion.div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            program.color === "gold" ? "bg-gold/10 group-hover:bg-gold/20" : "bg-leaf/10 group-hover:bg-leaf/20"
                          } transition-colors`}
                        >
                          <ArrowRight className={`w-5 h-5 ${
                            program.color === "gold" ? "text-gold" : "text-leaf"
                          } group-hover:translate-x-0.5 transition-transform`} />
                        </motion.div>
                      </div>

                      <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase block mb-2">
                        {program.subtitle}
                      </span>
                      <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                        {program.title}
                      </h2>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                        {program.description}
                      </p>

                      {/* Mini highlights preview */}
                      <div className="flex flex-wrap gap-2">
                        {program.highlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className={`inline-flex items-center gap-1.5 text-xs font-body px-3 py-1 rounded-full ${
                              program.color === "gold" ? "bg-gold/10 text-gold" : "bg-leaf/10 text-leaf"
                            }`}
                          >
                            <CheckCircle className="w-3 h-3" />
                            {h}
                          </span>
                        ))}
                        {program.highlights.length > 2 && (
                          <span className="text-xs font-body text-muted-foreground px-3 py-1">
                            +{program.highlights.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
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
          <Link
            to="/join"
            className="inline-block font-body text-base font-semibold bg-gold text-accent-foreground px-8 py-3 rounded-full hover:bg-gold-warm transition-colors"
          >
            Join the Movement
          </Link>
        </div>
      </section>

      {/* Program detail modal */}
      <AnimatePresence>
        {selectedProgram && (
          <ProgramDetail
            program={selectedProgram}
            onClose={() => setSelectedProgram(null)}
          />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
};

export default Programs;
