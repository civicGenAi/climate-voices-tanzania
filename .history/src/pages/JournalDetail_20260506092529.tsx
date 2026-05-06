import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PageTransition } from "@/components/animations/AnimationUtils";
import { ArrowLeft, Calendar, Clock, Copy, Facebook, Linkedin, MessageCircle, Share2, Tag, Twitter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import all nature images
import nature01 from "@/assets/nature/01.jpeg";
import nature02 from "@/assets/nature/02.jpeg";
import nature03 from "@/assets/nature/03.jpeg";
import nature04 from "@/assets/nature/04.jpeg";
import nature05 from "@/assets/nature/05.jpeg";
import nature07 from "@/assets/nature/07.jpeg";
import nature08 from "@/assets/nature/08.jpeg";
import nature09 from "@/assets/nature/09.jpeg";
import nature10 from "@/assets/nature/10.jpeg";
import nature11 from "@/assets/nature/11.jpeg";
import nature12 from "@/assets/nature/12.jpeg";
import nature13 from "@/assets/nature/13.jpeg";
import nature14 from "@/assets/nature/14.jpeg";
import { blogPosts } from "@/data/journal";

const natureImages = [
  nature01, nature02, nature03, nature04, nature05,
  nature07, nature08, nature09, nature10, nature11,
  nature12, nature13, nature14
];

const JournalDetail = () => {
  const [commentText, setCommentText] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === parseInt(id || "0"));
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(post?.title || "Climate Voices Tanzania");
  const encodedText = encodeURIComponent(`${post?.title || "Climate Voices Tanzania"} - Read more on Climate Voices Tanzania.`);
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: post?.title || "Climate Voices Tanzania", text: post?.excerpt || "", url: shareUrl });
      } catch (error) {
        console.warn("Native share canceled or failed", error);
      }
    } else if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopyStatus("Story link copied to clipboard.");
        setTimeout(() => setCopyStatus(""), 3000);
      } catch (error) {
        console.warn("Copy failed", error);
      }
    }
  };

  if (!post) {
    return (
      <PageTransition>
        <main className="min-h-screen bg-forest-night">
          <Navigation />
          <div className="pt-32 pb-16 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Story not found</h1>
            <button
              onClick={() => navigate('/journal')}
              className="text-gold hover:underline"
            >
              Back to Journal
            </button>
          </div>
          <Footer />
        </main>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-forest-night">
        <Navigation />

        {/* Back Button */}
        <section className="pt-24 pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <button
              onClick={() => navigate('/journal')}
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Journal
            </button>
          </div>
        </section>

        {/* Article Header */}
        <section className="pb-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full bg-gold/15 text-gold font-semibold">
                  {post.category}
                </span>
                {post.featured && (
                  <span className="font-mono text-xs tracking-[0.2em] uppercase px-3 py-1 rounded-full border border-gold/30 text-gold">
                    Featured
                  </span>
                )}
              </div>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                {post.title}
              </h1>
              <div className="flex items-center gap-6 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
                <span className="text-sm">By {post.author}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
            {post.id === 7 ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr]"
                >
                  <div className="prose prose-lg prose-invert max-w-none">
                    <div className="font-body text-foreground leading-relaxed whitespace-pre-line mb-12">
                      {post.content}
                    </div>
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3 text-foreground font-semibold mb-4">
                      <Share2 className="w-4 h-4" />
                      Share this story
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleNativeShare}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                      <a
                        href={shareUrls.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                      <a
                        href={shareUrls.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a
                        href={shareUrls.email}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Copy className="w-4 h-4" />
                        Email link
                      </a>
                    </div>
                    {copyStatus ? <p className="mt-3 text-xs text-gold">{copyStatus}</p> : null}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 }}
                  className="rounded-3xl border border-border bg-card p-6 mt-6"
                >
                  <div className="flex items-center gap-3 text-foreground font-semibold mb-4">
                    <MessageCircle className="w-4 h-4" />
                    Comments (mockup)
                  </div>
                  <textarea
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                    placeholder="Leave your thoughts here..."
                    className="w-full min-h-[140px] rounded-3xl border border-border bg-background/80 p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <div className="mt-3 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                    <span>Comment posting is not enabled yet.</span>
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 font-semibold text-gold opacity-70 cursor-not-allowed"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Post comment
                    </button>
                  </div>
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  <div className="font-body text-foreground leading-relaxed whitespace-pre-line mb-12">
                    {post.content}
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="grid gap-6"
                >
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3 text-foreground font-semibold mb-4">
                      <Share2 className="w-4 h-4" />
                      Share this story
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleNativeShare}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <a
                        href={shareUrls.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Twitter className="w-4 h-4" />
                        Twitter
                      </a>
                      <a
                        href={shareUrls.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Facebook className="w-4 h-4" />
                        Facebook
                      </a>
                      <a
                        href={shareUrls.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                      </a>
                      <a
                        href={shareUrls.email}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-foreground transition hover:border-gold/40 hover:text-gold"
                      >
                        <Copy className="w-4 h-4" />
                        Email link
                      </a>
                    </div>
                    {copyStatus ? <p className="mt-3 text-xs text-gold">{copyStatus}</p> : null}
                  </div>
                  <div className="rounded-3xl border border-border bg-card p-6">
                    <div className="flex items-center gap-3 text-foreground font-semibold mb-4">
                      <MessageCircle className="w-4 h-4" />
                      Comments (mockup)
                    </div>
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Leave your thoughts here..."
                      className="w-full min-h-[140px] rounded-3xl border border-border bg-background/80 p-4 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                    <div className="mt-3 flex items-center justify-between gap-4 text-xs text-muted-foreground">
                      <span>Comment posting is not enabled yet.</span>
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 font-semibold text-gold opacity-70 cursor-not-allowed"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Post comment
                      </button>
                    </div>
                  </div>
                </motion.div>
              </>
            )}

            {post.id === 7 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
              >
                {natureImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="group relative overflow-hidden rounded-xl bg-card border border-border"
                  >
                    <img
                      src={image}
                      alt={`Nature scene ${index + 1}`}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  );
};

export default JournalDetail;