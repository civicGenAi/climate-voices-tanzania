import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Send, MessageSquareQuote, CheckCircle } from "lucide-react";

const ReviewSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", position: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.description.trim() || rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", position: "", description: "" });
      setRating(0);
    }, 3000);
  };

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-forest-deep overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-gold/[0.03] blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-leaf/[0.03] blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-dashed border-foreground/[0.03]" />

      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5"
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            Community Voices
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4"
          >
            Share Your Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="font-body text-muted-foreground max-w-lg mx-auto"
          >
            Your feedback helps us grow and inspire others to join the movement.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card/60 backdrop-blur-sm border border-leaf/30 rounded-[2rem] p-12 text-center"
            >
              <CheckCircle className="w-16 h-16 text-leaf mx-auto mb-4" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-2">Thank You!</h3>
              <p className="font-body text-muted-foreground">Your review has been submitted successfully.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card/60 backdrop-blur-sm border border-border rounded-[2rem] p-8 md:p-12 space-y-6">
              {/* Name & Position row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Your Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. John Mwangi"
                    maxLength={100}
                    required
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="font-body text-sm text-muted-foreground mb-2 block">Your Position</label>
                  <input
                    type="text"
                    value={form.position}
                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                    placeholder="e.g. Student, Teacher, Volunteer"
                    maxLength={100}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="font-body text-sm text-muted-foreground mb-3 block">Your Rating *</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      onClick={() => setRating(star)}
                      className="focus:outline-none transition-colors"
                    >
                      <Star
                        className={`w-8 h-8 transition-colors duration-200 ${
                          star <= (hoveredStar || rating)
                            ? "text-gold fill-gold"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    </motion.button>
                  ))}
                  {rating > 0 && (
                    <span className="ml-3 font-body text-sm text-gold">{rating}/5</span>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="font-body text-sm text-muted-foreground mb-2 block">Your Review *</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Share your experience with Climate Cardinals Tanzania..."
                  maxLength={1000}
                  required
                  rows={4}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-8 py-3.5 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
              >
                <Send className="w-4 h-4" />
                Submit Review
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewSection;
