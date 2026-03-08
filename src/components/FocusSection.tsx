import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, TreePine, Languages, Users, ArrowRight } from "lucide-react";

const focusAreas = [
  {
    title: "Climate Education",
    description: "Delivering climate literacy programs in schools and communities across Tanzania, making complex climate science understandable and actionable.",
    Icon: BookOpen,
    accent: "gold",
    gradient: "from-gold/20 via-gold/5 to-transparent",
    iconBg: "bg-gold/15",
    iconColor: "text-gold",
    borderColor: "border-gold/20 hover:border-gold/50",
    tag: "In Action",
  },
  {
    title: "Tree Planting",
    description: "Organizing tree planting initiatives to restore degraded ecosystems and combat deforestation — one seedling at a time.",
    Icon: TreePine,
    accent: "leaf",
    gradient: "from-leaf/20 via-leaf/5 to-transparent",
    iconBg: "bg-leaf/15",
    iconColor: "text-leaf",
    borderColor: "border-leaf/20 hover:border-leaf/50",
    tag: "In Action",
  },
  {
    title: "Translation Work",
    description: "Translating critical climate documents, guides, and educational materials into Kiswahili and tribal languages — bridging the knowledge gap.",
    Icon: Languages,
    accent: "sky",
    gradient: "from-sky/15 via-sky/5 to-transparent",
    iconBg: "bg-sky/15",
    iconColor: "text-sky",
    borderColor: "border-sky/20 hover:border-sky/50",
    tag: "In Action",
  },
  {
    title: "Youth Leadership",
    description: "Training and empowering young Tanzanians to become climate ambassadors in their communities — building the next generation of change-makers.",
    Icon: Users,
    accent: "cardinal",
    gradient: "from-cardinal/15 via-cardinal/5 to-transparent",
    iconBg: "bg-cardinal/15",
    iconColor: "text-cardinal",
    borderColor: "border-cardinal/20 hover:border-cardinal/50",
    tag: "In Action",
  },
];

// Organic blob positions for each card
const cardPositions = [
  { rotate: -2, translateY: 0 },
  { rotate: 1.5, translateY: 20 },
  { rotate: -1, translateY: -10 },
  { rotate: 2, translateY: 15 },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="focus" ref={ref} className="relative py-24 md:py-36 bg-forest-night overflow-hidden">
      {/* Decorative floating circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-gold/[0.06] animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-leaf/[0.08] animate-[spin_45s_linear_infinite_reverse]" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-gold/[0.02] blur-3xl" />
      <div className="absolute top-10 right-1/4 w-64 h-64 rounded-full bg-leaf/[0.02] blur-3xl" />
      
      {/* Dotted orbital ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full border border-dashed border-foreground/[0.04]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[650px] md:h-[650px] rounded-full border border-dashed border-foreground/[0.03]" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5"
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

        {/* Creative staggered layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 60, rotate: cardPositions[i].rotate * 2 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -8, 
                rotate: cardPositions[i].rotate * 0.5,
                transition: { duration: 0.4 } 
              }}
              className="group relative"
              style={{ marginTop: `${cardPositions[i].translateY}px` }}
            >
              {/* Card with organic rounded shape */}
              <div className={`relative bg-card/80 backdrop-blur-sm rounded-[2rem] overflow-hidden border ${area.borderColor} transition-all duration-500 shadow-lg shadow-background/20 hover:shadow-xl hover:shadow-background/30`}>
                {/* Gradient blob top-right */}
                <div className={`absolute -top-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${area.gradient} opacity-60 group-hover:opacity-100 group-hover:scale-125 transition-all duration-700`} />
                
                {/* Gradient blob bottom-left */}
                <div className={`absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr ${area.gradient} opacity-30 group-hover:opacity-60 transition-all duration-700`} />

                <div className="relative p-8 md:p-10">
                  {/* Tag + Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <motion.div 
                        className={`w-14 h-14 rounded-full ${area.iconBg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
                        whileHover={{ rotate: 15 }}
                      >
                        <area.Icon className={`w-7 h-7 ${area.iconColor}`} />
                      </motion.div>
                      <span className={`font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full ${area.iconBg} ${area.iconColor} font-semibold`}>
                        {area.tag}
                      </span>
                    </div>
                    <span className="font-display text-6xl font-bold text-foreground/[0.04] group-hover:text-foreground/[0.08] transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {area.title}
                  </h3>
                  <p className="font-body text-muted-foreground group-hover:text-foreground/70 transition-colors text-sm md:text-base leading-relaxed mb-6">
                    {area.description}
                  </p>

                  {/* Animated underline + learn more */}
                  <div className="flex items-center gap-2">
                    <div className={`h-[2px] w-8 group-hover:w-12 ${area.iconBg} rounded-full transition-all duration-500`} />
                    <span className={`font-body text-sm font-medium ${area.iconColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
                      Learn more
                    </span>
                    <ArrowRight className={`w-4 h-4 ${area.iconColor} opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300`} />
                  </div>
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
