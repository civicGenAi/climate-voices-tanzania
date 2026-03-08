import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Quote, Star, MessageSquarePlus, ChevronLeft, ChevronRight, Send, CheckCircle, X } from "lucide-react";
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
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reviewForm, setReviewForm] = useState({ name: "", position: "", description: "" });

  const nextReview = () => setCurrentReview((prev) => (prev + 1) % reviews.length);
  const prevReview = () => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.description.trim() || rating === 0) return;
    setReviewSubmitted(true);
    setTimeout(() => {
      setShowReviewModal(false);
      setReviewSubmitted(false);
      setReviewForm({ name: "", position: "", description: "" });
      setRating(0);
    }, 3000);
  };

  return (
    <>
      <section id="leadership" ref={ref} className="relative py-16 sm:py-24 md:py-36 bg-forest-night overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
          {/* Founder Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative mb-16 sm:mb-24"
          >
            <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-16">
              <div className="flex-shrink-0">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="relative"
                >
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-3 border-gold/40 shadow-lg shadow-gold/10">
                    <img src={founderImg} alt="Ester Kimario — Founder" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -inset-2 rounded-full border border-gold/15 hidden sm:block" />
                  <div className="absolute -inset-4 rounded-full border border-gold/8 hidden sm:block" />
                </motion.div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.3em] uppercase mb-3 sm:mb-4 block">Message from the Founder</span>
                <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-1 sm:mb-2">Ester Kimario</h2>
                <p className="font-mono text-[10px] sm:text-xs text-gold/60 mb-4 sm:mb-6">Founder & Chapter Lead</p>
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 text-gold/15 hidden sm:block" />
                  <p className="font-body text-foreground/70 text-sm sm:text-base md:text-lg leading-relaxed sm:pl-8 sm:border-l-2 sm:border-gold/20">
                    I founded Climate Cardinals Tanzania because I believe that language should never be a barrier
                    to survival. Every Tanzanian — whether they speak Kiswahili, Sukuma, Chagga, or any of our
                    beautiful tribal languages — deserves to understand the climate crisis and how to protect
                    their community. Together, we are building a movement where climate knowledge belongs to everyone.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center mb-8 sm:mb-12">
              <span className="font-mono text-[10px] sm:text-xs text-gold tracking-[0.3em] uppercase mb-3 sm:mb-4 block">Community Voices</span>
              <h3 className="font-display text-xl sm:text-2xl md:text-4xl font-bold text-foreground">What People Say</h3>
            </div>

            <div className="relative max-w-3xl mx-auto">
              <div className="bg-card border border-border rounded-xl sm:rounded-2xl p-5 sm:p-8 md:p-12 min-h-[200px] sm:min-h-[250px] flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentReview}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="flex gap-1 mb-4 sm:mb-6">
                      {Array.from({ length: reviews[currentReview].rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold fill-gold" />
                      ))}
                    </div>
                    <p className="font-body text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed italic mb-6 sm:mb-8">
                      "{reviews[currentReview].text}"
                    </p>
                    <div>
                      <p className="font-display text-base sm:text-lg font-bold text-foreground">{reviews[currentReview].name}</p>
                      <p className="font-body text-xs sm:text-sm text-muted-foreground">{reviews[currentReview].role}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between mt-4 sm:mt-6">
                <button onClick={prevReview} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border hover:border-gold/40 flex items-center justify-center transition-colors">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
                </button>
                <div className="flex gap-2">
                  {reviews.map((_, i) => (
                    <button key={i} onClick={() => setCurrentReview(i)} className={`w-2 h-2 rounded-full transition-colors ${i === currentReview ? "bg-gold" : "bg-foreground/20"}`} />
                  ))}
                </div>
                <button onClick={nextReview} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-border hover:border-gold/40 flex items-center justify-center transition-colors">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground/60" />
                </button>
              </div>

              <div className="text-center mt-8 sm:mt-10">
                <button
                  onClick={() => setShowReviewModal(true)}
                  className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-body text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full hover:bg-gold-warm transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                >
                  <MessageSquarePlus className="w-4 h-4" />
                  Write Your Review Too
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Review Modal */}
      <AnimatePresence>
        {showReviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-background/80 backdrop-blur-sm"
            onClick={() => setShowReviewModal(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full sm:max-w-lg bg-card border border-border rounded-t-2xl sm:rounded-2xl p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <button onClick={() => setShowReviewModal(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                  <MessageSquarePlus className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">Write Your Review</h3>
              </div>

              {reviewSubmitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <CheckCircle className="w-14 h-14 text-leaf mx-auto mb-3" />
                  <p className="font-display text-xl font-bold text-foreground mb-1">Thank You!</p>
                  <p className="font-body text-muted-foreground text-sm">Your review has been submitted.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text" value={reviewForm.name} onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                      placeholder="Your Name *" maxLength={100} required
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    />
                    <input
                      type="text" value={reviewForm.position} onChange={(e) => setReviewForm({ ...reviewForm, position: e.target.value })}
                      placeholder="Position (optional)" maxLength={100}
                      className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Rating *</label>
                    <div className="flex items-center gap-1.5">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star} type="button"
                          onMouseEnter={() => setHoveredStar(star)} onMouseLeave={() => setHoveredStar(0)}
                          onClick={() => setRating(star)}
                          className="focus:outline-none transition-transform hover:scale-125"
                        >
                          <Star className={`w-6 h-6 sm:w-7 sm:h-7 transition-colors duration-200 ${star <= (hoveredStar || rating) ? "text-gold fill-gold" : "text-muted-foreground/30"}`} />
                        </button>
                      ))}
                      {rating > 0 && <span className="ml-2 font-body text-sm text-gold">{rating}/5</span>}
                    </div>
                  </div>

                  <textarea
                    value={reviewForm.description} onChange={(e) => setReviewForm({ ...reviewForm, description: e.target.value })}
                    placeholder="Share your experience... *" maxLength={1000} required rows={4}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  />

                  <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground font-body font-semibold px-6 py-3 rounded-full hover:bg-gold-warm transition-all duration-300">
                    <Send className="w-4 h-4" />
                    Submit Review
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LeadershipSection;
