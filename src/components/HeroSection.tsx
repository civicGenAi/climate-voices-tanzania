import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import heroYouth from "@/assets/hero-youth-cartoon.png";
import heroCommunity from "@/assets/hero-community-cartoon.png";
import heroTranslate from "@/assets/hero-translate-cartoon.png";

const languages = [
  "KISWAHILI", "SUKUMA", "CHAGGA", "HEHE", "MAKONDE", "ARABIC", "ENGLISH", "LUGHA ZA JAMII",
  "MAASAI", "NYAMWEZI", "HAYA", "GOGO", "IRAQW",
];

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

    const colors = ["#1B4332", "#D4A017", "#52B788", "#2D6A4F"];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: -Math.random() * 0.3 - 0.05,
        size: Math.random() * 2.5 + 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.4 + 0.1,
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
    <section id="hero" className="relative min-h-screen bg-forest-night overflow-hidden flex flex-col">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center px-6 md:px-12 lg:px-20 pt-28 pb-16">
        {/* Left — Text content */}
        <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block font-mono text-xs text-gold tracking-[0.2em] uppercase mb-4 border border-gold/20 rounded-full px-4 py-1.5"
          >
            Climate Cardinals Tanzania
          </motion.span>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-foreground leading-tight mb-4"
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
            className="font-body text-base text-muted-foreground max-w-md leading-relaxed mb-8"
          >
            We break language barriers to bring vital climate education to Tanzanian 
            communities — translating knowledge into Kiswahili and local tribal languages.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              to="/join"
              className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-warm transition-colors duration-300"
            >
              Join the Movement
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-transparent text-foreground font-body font-medium px-6 py-3 rounded-full border border-border hover:border-gold/40 transition-colors duration-300"
            >
              Learn More
            </Link>
          </motion.div>
        </div>

        {/* Right — Cartoon images collage */}
        <div className="w-full lg:w-[50%] relative flex justify-center items-center min-h-[350px] md:min-h-[450px]">
          {/* Main large image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-20"
          >
            <img
              src={heroCommunity}
              alt="African community learning about climate change"
              className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
            />
          </motion.div>

          {/* Top-right floating image */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: -20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 md:right-4 z-30"
          >
            <motion.img
              src={heroYouth}
              alt="Youth volunteers speaking different languages"
              className="w-36 md:w-44 drop-shadow-xl rounded-2xl"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Bottom-left floating image */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute bottom-4 left-0 md:left-4 z-30"
          >
            <motion.img
              src={heroTranslate}
              alt="Volunteers translating climate documents"
              className="w-32 md:w-40 drop-shadow-xl rounded-2xl"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </motion.div>

          {/* Decorative floating dots */}
          <motion.div
            animate={{ y: [0, -12, 0], x: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-8 left-16 w-3 h-3 rounded-full bg-gold/40"
          />
          <motion.div
            animate={{ y: [0, 8, 0], x: [0, -4, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-16 right-12 w-2 h-2 rounded-full bg-leaf/50"
          />
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-1/2 right-0 w-4 h-4 rounded-full bg-gold/20"
          />
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 border-t border-gold/20 bg-forest-night/80 py-3 overflow-hidden">
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
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-4 h-4 text-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
