import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { BookOpen, TreePine, Languages, Users, ArrowRight } from "lucide-react";
import focusEducation from "@/assets/focus-education-cartoon.png";
import focusPlanting from "@/assets/focus-planting-cartoon.png";
import focusTranslate from "@/assets/focus-translate-cartoon.png";
import focusLeadership from "@/assets/focus-leadership-cartoon.png";

const focusAreas = [
  {
    title: "Climate Education",
    description: "Delivering climate literacy programs in schools and communities across Tanzania, making complex climate science understandable and actionable.",
    Icon: BookOpen,
    image: focusEducation,
    iconColor: "text-gold",
    tag: "In Action",
  },
  {
    title: "Tree Planting",
    description: "Organizing tree planting initiatives to restore degraded ecosystems and combat deforestation — one seedling at a time.",
    Icon: TreePine,
    image: focusPlanting,
    iconColor: "text-leaf",
    tag: "In Action",
  },
  {
    title: "Translation Work",
    description: "Translating critical climate documents, guides, and educational materials into Kiswahili and tribal languages — bridging the knowledge gap.",
    Icon: Languages,
    image: focusTranslate,
    iconColor: "text-sky",
    tag: "In Action",
  },
  {
    title: "Youth Leadership",
    description: "Training and empowering young Tanzanians to become climate ambassadors in their communities — building the next generation of change-makers.",
    Icon: Users,
    image: focusLeadership,
    iconColor: "text-gold",
    tag: "In Action",
  },
];

const FocusSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % focusAreas.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="focus" ref={ref} className="relative py-24 md:py-36 bg-forest-night overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full border border-gold/[0.06] animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-leaf/[0.08] animate-[spin_45s_linear_infinite_reverse]" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 rounded-full bg-gold/[0.02] blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
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

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Main card with cartoon background */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 relative rounded-[2rem] overflow-hidden min-h-[400px] md:min-h-[450px] bg-card"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCard}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 flex items-end justify-end p-6"
              >
                <img
                  src={focusAreas[activeCard].image}
                  alt={focusAreas[activeCard].title}
                  className="w-[65%] md:w-[55%] max-h-[85%] object-contain drop-shadow-2xl"
                />
              </motion.div>
            </AnimatePresence>

            {/* Ocean wave shadow from left */}
            <div
              className="absolute inset-0 pointer-events-none z-[1]"
              style={{
                background: `linear-gradient(
                  to right,
                  hsl(var(--forest-night)) 0%,
                  hsl(var(--forest-night) / 0.97) 15%,
                  hsl(var(--forest-night) / 0.88) 25%,
                  hsl(var(--forest-night) / 0.65) 35%,
                  hsl(var(--forest-night) / 0.3) 45%,
                  transparent 60%
                )`,
              }}
            />

            {/* Bottom gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-forest-night/50 via-transparent to-transparent pointer-events-none z-[1]" />

            {/* Content on the left */}
            <div className="absolute inset-0 z-[2] flex flex-col justify-end p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-md flex items-center justify-center border border-foreground/10">
                      {(() => {
                        const IconComp = focusAreas[activeCard].Icon;
                        return <IconComp className={`w-6 h-6 ${focusAreas[activeCard].iconColor}`} />;
                      })()}
                    </div>
                    <span className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-gold/20 backdrop-blur-sm text-gold font-semibold border border-gold/20">
                      {focusAreas[activeCard].tag}
                    </span>
                  </div>

                  <span className="font-display text-7xl md:text-8xl font-bold text-foreground/[0.08] absolute top-8 left-8">
                    {String(activeCard + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                    {focusAreas[activeCard].title}
                  </h3>
                  <p className="font-body text-foreground/80 text-sm md:text-base leading-relaxed">
                    {focusAreas[activeCard].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right side selector pills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="w-full lg:w-72 flex flex-row lg:flex-col gap-3"
          >
            {focusAreas.map((area, i) => (
              <button
                key={area.title}
                onClick={() => setActiveCard(i)}
                className={`flex-1 lg:flex-none text-left p-4 md:p-5 rounded-2xl border transition-all duration-500 group ${
                  i === activeCard
                    ? "bg-card border-gold/30 shadow-lg shadow-gold/5"
                    : "bg-card/40 border-border hover:border-gold/20 hover:bg-card/70"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    i === activeCard ? "bg-gold/15" : "bg-background/50"
                  }`}>
                    <area.Icon className={`w-5 h-5 transition-colors duration-300 ${
                      i === activeCard ? area.iconColor : "text-muted-foreground"
                    }`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-display text-sm font-bold transition-colors truncate ${
                      i === activeCard ? "text-foreground" : "text-muted-foreground"
                    }`}>
                      {area.title}
                    </p>
                    <span className={`font-mono text-[10px] tracking-wider ${
                      i === activeCard ? "text-gold" : "text-muted-foreground/50"
                    }`}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {i === activeCard && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-1.5 h-8 bg-gold rounded-full hidden lg:block"
                    />
                  )}
                </div>

                {i === activeCard && (
                  <div className="mt-3 h-0.5 bg-border rounded-full overflow-hidden">
                    <motion.div
                      key={`progress-${activeCard}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      className="h-full bg-gold rounded-full"
                    />
                  </div>
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FocusSection;
