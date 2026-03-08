import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import realCommunity from "@/assets/real-community.jpeg";
import realEducation from "@/assets/real-education.jpeg";
import realPlanting from "@/assets/real-planting.jpeg";

const languages = [
  "KISWAHILI", "SUKUMA", "CHAGGA", "HEHE", "MAKONDE", "ARABIC", "ENGLISH", "LUGHA ZA JAMII",
  "MAASAI", "NYAMWEZI", "HAYA", "GOGO", "IRAQW",
];

const heroImages = [
  { src: realCommunity, alt: "Community outreach event" },
  { src: realEducation, alt: "Climate education workshop" },
  { src: realPlanting, alt: "Tree planting initiative" },
];

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; color: string; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["#D4A017", "#52B788"];
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.15,
        vy: -Math.random() * 0.2 - 0.03,
        size: Math.random() * 2 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.3 + 0.05,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Background images with crossfade */}
      <div className="absolute inset-0">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={heroImages[currentImage].src}
              alt={heroImages[currentImage].alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Left shadow overlay — strong on left, fading to clear on right */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              to right,
              hsl(var(--forest-night)) 0%,
              hsl(var(--forest-night) / 0.97) 15%,
              hsl(var(--forest-night) / 0.88) 25%,
              hsl(var(--forest-night) / 0.7) 35%,
              hsl(var(--forest-night) / 0.4) 50%,
              hsl(var(--forest-night) / 0.1) 65%,
              transparent 80%
            )`,
          }}
        />

        {/* Bottom gradient for text readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              to top,
              hsl(var(--forest-night)) 0%,
              hsl(var(--forest-night) / 0.6) 15%,
              transparent 40%
            )`,
          }}
        />

        {/* Top subtle gradient for nav readability */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background: `linear-gradient(
              to bottom,
              hsl(var(--forest-night) / 0.5) 0%,
              transparent 20%
            )`,
          }}
        />
      </div>

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[2]" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-6 md:px-12 lg:px-20 pt-28 pb-24">
        <div className="w-full max-w-xl">
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6"
            >
              Climate Knowledge
              <br />
              <span className="text-gold">For Every Voice.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="font-body text-base md:text-lg text-foreground/80 max-w-md leading-relaxed mb-10"
          >
            We break language barriers to bring vital climate education to Tanzanian
            communities — translating knowledge into Kiswahili and local tribal languages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-7 py-3.5 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
            >
              Join the Movement
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-foreground/10 backdrop-blur-sm text-foreground font-body font-medium px-7 py-3.5 rounded-full border border-foreground/20 hover:border-gold/40 hover:bg-foreground/15 transition-all duration-300"
            >
              Learn More
            </Link>
          </motion.div>

          {/* Image indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-3"
          >
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="relative h-1 rounded-full overflow-hidden transition-all duration-500"
                style={{ width: i === currentImage ? "40px" : "16px" }}
              >
                <div className="absolute inset-0 bg-foreground/20 rounded-full" />
                {i === currentImage && (
                  <motion.div
                    key={`bar-${currentImage}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-gold rounded-full"
                  />
                )}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 border-t border-gold/20 bg-forest-night/80 backdrop-blur-sm py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...languages, ...languages].map((lang, i) => (
            <span key={i} className="font-mono text-sm text-gold/80 mx-6">
              {lang} ·
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
      >
        <span className="font-mono text-[10px] text-foreground/50 tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
