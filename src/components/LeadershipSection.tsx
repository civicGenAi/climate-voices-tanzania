import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Quote, Star, MessageSquarePlus, ChevronLeft, ChevronRight } from "lucide-react";
import founderImg from "@/assets/founder.jpeg";

const reviews = [
  {
    name: "Amina J.",
    role: "Youth Volunteer, Dodoma",
    text: "Joining Climate Cardinals Tanzania changed my perspective on climate action. I now translate climate documents into Gogo — my community finally understands what's happening to our environment.",
    rating: 5,
  },
  {
    name: "David M.",
    role: "Community Leader, Arusha",
    text: "The workshops brought by Climate Cardinals have educated our village elders about water conservation and sustainable farming. The materials in Kiswahili made all the difference.",
    rating: 5,
  },
  {
    name: "Fatuma K.",
    role: "Student, University of Dar es Salaam",
    text: "As a biology student, I was able to contribute my knowledge while learning about climate advocacy. The team is passionate and the impact is real.",
    rating: 5,
  },
];

const LeadershipSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [currentReview, setCurrentReview] = useState(0);

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="leadership" ref={ref} className="relative py-24 md:py-36 bg-forest-night overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Founder Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative mb-24"
        >
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Founder photo — circular */}
            <div className="flex-shrink-0">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative"
              >
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-gold/40 shadow-lg shadow-gold/10">
                  <img
                    src={founderImg}
                    alt="Ester Kimario — Founder"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -inset-2 rounded-full border border-gold/15" />
                <div className="absolute -inset-4 rounded-full border border-gold/8" />
              </motion.div>
            </div>

            {/* Message */}
            <div className="flex-1">
              <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block">
                Message from the Founder
              </span>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                Ester Kimario
              </h2>
              <p className="font-mono text-xs text-gold/60 mb-6">Founder & Chapter Lead</p>

              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gold/15" />
                <p className="font-body text-foreground/70 text-base md:text-lg leading-relaxed pl-8 border-l-2 border-gold/20">
                  I founded Climate Cardinals Tanzania because I believe that language should never be a barrier 
                  to survival. Every Tanzanian — whether they speak Kiswahili, Sukuma, Chagga, or any of our 
                  beautiful tribal languages — deserves to understand the climate crisis and how to protect 
                  their community. Together, we are building a movement where climate knowledge belongs to everyone.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Reviews section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <span className="font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 block">
              Community Voices
            </span>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground">
              What People Say
            </h3>
          </div>

          {/* Review carousel */}
          <div className="relative max-w-3xl mx-auto">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 min-h-[250px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                    ))}
                  </div>

                  <p className="font-body text-foreground/80 text-base md:text-lg leading-relaxed italic mb-8">
                    "{reviews[currentReview].text}"
                  </p>

                  <div>
                    <p className="font-display text-lg font-bold text-foreground">
                      {reviews[currentReview].name}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {reviews[currentReview].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-between mt-6">
              <button
                onClick={prevReview}
                className="w-10 h-10 rounded-full border border-border hover:border-gold/40 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-foreground/60" />
              </button>

              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReview(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentReview ? "bg-gold" : "bg-foreground/20"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="w-10 h-10 rounded-full border border-border hover:border-gold/40 flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-foreground/60" />
              </button>
            </div>

            <div className="text-center mt-10">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <MessageSquarePlus className="w-4 h-4" />
                Write Your Review Too
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LeadershipSection;
