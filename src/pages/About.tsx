import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Globe, BookOpen, TreePine, Heart, Target } from "lucide-react";

const values = [
  { icon: Users, title: "Youth-Led", description: "We believe young people are the most powerful agents of change in the climate movement." },
  { icon: Globe, title: "Language Justice", description: "Climate knowledge must be accessible in every language — no community left behind." },
  { icon: BookOpen, title: "Education First", description: "Informed communities are empowered communities. Knowledge is our greatest tool." },
  { icon: TreePine, title: "Rooted Locally", description: "Our solutions are designed by and for Tanzanian communities, respecting local contexts." },
  { icon: Heart, title: "Community Driven", description: "We work with communities, not for them — centering local voices and needs." },
  { icon: Target, title: "Action Oriented", description: "We translate knowledge into tangible environmental action and measurable impact." },
];

const timeline = [
  { year: "2022", event: "Climate Cardinals Tanzania Chapter founded by Ester Kimario" },
  { year: "2023", event: "First climate education workshops held in Kilimanjaro region" },
  { year: "2023", event: "Youth Translation Volunteer Program launched" },
  { year: "2024", event: "Partnership with Chanya Change established" },
  { year: "2024", event: "Expanded to 30+ communities across Tanzania" },
  { year: "2025", event: "Translated climate materials into 15+ local languages" },
];

const About = () => {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, margin: "-100px" });
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: "-100px" });

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-forest-night overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="about-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="hsl(43 75% 46%)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
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
      </section>

      {/* Illustration + Story */}
      <section className="py-20 md:py-28 bg-parchment">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* SVG Illustration */}
            <div className="flex justify-center">
              <svg viewBox="0 0 400 400" className="w-full max-w-sm" aria-hidden="true">
                {/* Earth circle */}
                <circle cx="200" cy="200" r="150" fill="hsl(153 44% 18%)" opacity="0.15" />
                <circle cx="200" cy="200" r="130" fill="none" stroke="hsl(43 75% 46%)" strokeWidth="1" strokeDasharray="8 4" />
                {/* Africa shape simplified */}
                <path
                  d="M185 120 L195 100 L215 95 L230 110 L235 140 L240 170 L230 200 L225 230 L210 260 L195 280 L180 270 L170 240 L165 210 L170 180 L175 150 Z"
                  fill="hsl(152 43% 50%)"
                  opacity="0.3"
                  stroke="hsl(152 43% 50%)"
                  strokeWidth="1"
                />
                {/* Tanzania dot */}
                <circle cx="225" cy="210" r="6" fill="hsl(43 75% 46%)" />
                <circle cx="225" cy="210" r="12" fill="none" stroke="hsl(43 75% 46%)" strokeWidth="1" opacity="0.5" />
                <circle cx="225" cy="210" r="20" fill="none" stroke="hsl(43 75% 46%)" strokeWidth="0.5" opacity="0.3" />
                {/* Language lines radiating */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x1 = 225 + Math.cos(rad) * 25;
                  const y1 = 210 + Math.sin(rad) * 25;
                  const x2 = 225 + Math.cos(rad) * 55;
                  const y2 = 210 + Math.sin(rad) * 55;
                  return (
                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="hsl(43 75% 46%)" strokeWidth="0.8" opacity="0.5" />
                  );
                })}
                {/* People icons */}
                {[30, 90, 150, 210, 270, 330].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 200 + Math.cos(rad) * 120;
                  const y = 200 + Math.sin(rad) * 120;
                  return (
                    <g key={i} transform={`translate(${x},${y})`}>
                      <circle r="8" fill="hsl(153 44% 18%)" opacity="0.2" />
                      <circle r="3" fill="hsl(43 75% 46%)" opacity="0.7" />
                    </g>
                  );
                })}
                {/* Text labels */}
                <text x="200" y="340" textAnchor="middle" className="font-mono" fontSize="10" fill="hsl(153 44% 18%)" opacity="0.6">
                  CONNECTING COMMUNITIES THROUGH LANGUAGE
                </text>
              </svg>
            </div>

            {/* Story text */}
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-parchment-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-body text-parchment-foreground/80 leading-relaxed">
                <p>
                  Climate Cardinals is the world's largest youth-led climate translation organization. 
                  The Tanzania Chapter was founded by Ester Kimario with a singular vision: ensuring 
                  that every Tanzanian community has access to life-saving climate information in their 
                  own language.
                </p>
                <p>
                  In Tanzania, where over 120 tribal languages are spoken, critical climate knowledge 
                  often remains locked in English or Kiswahili — leaving rural communities without the 
                  information they need to adapt to a changing climate.
                </p>
                <p>
                  We mobilize young volunteers to translate, educate, and advocate — building a 
                  generation of climate-literate Tanzanians who can lead their communities toward 
                  a sustainable future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-20 md:py-28 bg-forest-night">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-20 md:py-28 bg-parchment">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={timelineInView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-4xl font-bold text-parchment-foreground text-center mb-16"
          >
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-forest/20" />
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                className={`relative flex items-start gap-6 mb-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                  <span className="font-mono text-sm text-gold font-semibold">{item.year}</span>
                </div>
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-forest border-4 border-parchment flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-gold" />
                  </div>
                </div>
                <div className="flex-1 pb-2">
                  <span className="font-mono text-sm text-gold font-semibold md:hidden">{item.year}</span>
                  <p className="font-body text-sm text-parchment-foreground/80">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-forest-night">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-forest border border-leaf/20 rounded-2xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-leaf/10 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-leaf" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                To make climate education accessible to every Tanzanian community by translating climate 
                knowledge into Kiswahili and local tribal languages — empowering youth to lead climate 
                action at the grassroots level.
              </p>
            </div>
            <div className="bg-gold/10 border border-gold/20 rounded-2xl p-8 md:p-10">
              <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-6">
                <Globe className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="font-body text-foreground/70 leading-relaxed">
                A Tanzania where every community — urban or rural, young or old — has the knowledge and 
                tools to understand, respond to, and combat the effects of climate change in their own language.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
