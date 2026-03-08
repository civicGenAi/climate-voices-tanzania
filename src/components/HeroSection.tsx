import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const languages = [
  "KISWAHILI", "SUKUMA", "CHAGGA", "HEHE", "MAKONDE", "ARABIC", "ENGLISH", "LUGHA ZA JAMII",
  "MAASAI", "NYAMWEZI", "HAYA", "GOGO", "IRAQW",
];

const branchLanguages = ["Kiswahili", "Sukuma", "Chagga", "Hehe", "Makonde", "Maasai", "Haya"];

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
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -Math.random() * 0.4 - 0.1,
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.2,
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

  const headlineLines = ["Climate", "Knowledge", "For Every Voice."];

  return (
    <section id="hero" className="relative min-h-screen bg-forest-night overflow-hidden flex flex-col">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-end lg:items-center px-6 md:px-12 lg:px-20 pt-28 pb-20">
        {/* Left — Headline */}
        <div className="w-full lg:w-[60%] mb-12 lg:mb-0">
          {headlineLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3 + i * 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-foreground leading-[0.95]"
              >
                {line}
              </motion.h1>
            </div>
          ))}

          <motion.a
            href="#join"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="inline-flex items-center gap-2 mt-10 bg-forest text-foreground font-body px-7 py-3 rounded-full hover:bg-leaf transition-colors duration-300 border border-leaf/30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 8c0-5-5-5-5-5s-5 0-5 5c0 4 5 8 5 11 0-3 5-7 5-11z" />
              <path d="M12 19v3" />
            </svg>
            Join the Movement
          </motion.a>
        </div>

        {/* Right — Language Tree */}
        <div className="w-full lg:w-[40%] flex justify-center lg:justify-end">
          <div className="relative w-48 h-80 md:w-64 md:h-96">
            {/* Tree trunk */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.5, duration: 1.5, ease: "easeOut" }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-t from-gold/60 to-leaf/40 origin-bottom rounded-full"
            />
            {/* Language branches */}
            {branchLanguages.map((lang, i) => {
              const isLeft = i % 2 === 0;
              const yPos = 15 + i * 12;
              return (
                <motion.div
                  key={lang}
                  initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.5 + i * 0.3, duration: 0.8 }}
                  className={`absolute font-mono text-xs ${isLeft ? "right-[55%] text-right" : "left-[55%] text-left"}`}
                  style={{ top: `${yPos}%` }}
                >
                  <span className="text-leaf/70">{lang}</span>
                  <motion.span
                    className={`absolute top-1/2 ${isLeft ? "right-0 translate-x-full" : "left-0 -translate-x-full"} w-4 h-px bg-leaf/40`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 2.8 + i * 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
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
        transition={{ delay: 3 }}
        className="absolute bottom-20 right-8 z-10 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-muted-foreground tracking-widest [writing-mode:vertical-rl] rotate-180">
          SCROLL
        </span>
        <div className="w-px h-0 bg-gold/60 animate-root-grow" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
