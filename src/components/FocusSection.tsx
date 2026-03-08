import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, TreePine, Languages, Users, ArrowRight } from "lucide-react";

const focusAreas = [
  {
    title: "Climate Education",
    description: "Delivering climate literacy programs in schools and communities across Tanzania, making complex climate science understandable and actionable.",
    Icon: BookOpen,
    color: "from-leaf/20 to-leaf/5",
    iconBg: "bg-leaf/15",
    iconColor: "text-leaf",
  },
  {
    title: "Tree Planting",
    description: "Organizing tree planting initiatives to restore degraded ecosystems and combat deforestation — one seedling at a time.",
    Icon: TreePine,
    color: "from-gold/20 to-gold/5",
    iconBg: "bg-gold/15",
    iconColor: "text-gold",
  },
  {
    title: "Translation Work",
    description: "Translating critical climate documents, guides, and educational materials into Kiswahili and tribal languages — bridging the knowledge gap.",
    Icon: Languages,
    color: "from-leaf/15 to-forest/10",
    iconBg: "bg-leaf/10",
    iconColor: "text-leaf",
  },
  {
    title: "Youth Leadership",
    description: "Training and empowering young Tanzanians to become climate ambassadors in their communities — building the next generation of change-makers.",
    Icon: Users,
    color: "from-gold/15 to-gold/5",
    iconBg: "bg-gold/10",
    iconColor: "text-gold",
  },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="focus" ref={ref} className="relative py-24 md:py-36 bg-forest-night overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-leaf/[0.03] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block"
          >
            Our Approach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            How We Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground max-w-xl mx-auto"
          >
            Four pillars that define our approach to climate action in Tanzania.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-gradient-to-br from-card to-card/80 rounded-2xl overflow-hidden border border-border hover:border-gold/30 transition-all duration-500"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative p-8 md:p-10">
                {/* Number badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${area.iconBg} group-hover:scale-110 flex items-center justify-center transition-transform duration-500`}>
                    <area.Icon className={`w-7 h-7 ${area.iconColor}`} />
                  </div>
                  <span className="font-display text-5xl font-bold text-foreground/[0.06] group-hover:text-foreground/[0.1] transition-colors">
                    0{i + 1}
                  </span>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3">
                  {area.title}
                </h3>
                <p className="font-body text-muted-foreground group-hover:text-foreground/70 transition-colors text-sm md:text-base leading-relaxed mb-6">
                  {area.description}
                </p>

                <div className="flex items-center gap-2 text-gold/60 group-hover:text-gold transition-colors">
                  <span className="font-body text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
