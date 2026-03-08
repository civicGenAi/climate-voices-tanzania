import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Heart, Share2, Trophy, TrendingUp, Users, ChevronUp, Send, Flame, Clock, Filter } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import communityHero from "@/assets/community-hero-cartoon.png";

type Topic = {
  id: number;
  title: string;
  description: string;
  author: string;
  authorRole: string;
  category: string;
  likes: number;
  comments: Comment[];
  shares: number;
  createdAt: string;
  liked: boolean;
};

type Comment = {
  id: number;
  author: string;
  text: string;
  time: string;
  likes: number;
};

const categoryFilters = ["All", "Climate Action", "Education", "Tree Planting", "Translation", "General"];

const initialTopics: Topic[] = [
  {
    id: 1,
    title: "How can we make climate education more accessible in rural schools?",
    description: "I've been working with a school in Singida region and noticed that most teachers lack resources for climate education. What approaches have worked in your communities?",
    author: "Amina J.",
    authorRole: "Volunteer",
    category: "Education",
    likes: 24,
    comments: [
      { id: 1, author: "David M.", text: "We created simple visual guides in Kiswahili that teachers loved. Happy to share templates!", time: "2h ago", likes: 8 },
      { id: 2, author: "Fatuma K.", text: "Partnering with local NGOs helped us get materials printed for free.", time: "1h ago", likes: 5 },
    ],
    shares: 6,
    createdAt: "3h ago",
    liked: false,
  },
  {
    id: 2,
    title: "Tree planting season is coming — let's coordinate efforts across regions!",
    description: "March-April is the perfect time for planting in most parts of Tanzania. Let's share our plans and potentially collaborate on larger initiatives.",
    author: "John K.",
    authorRole: "Community Leader",
    category: "Tree Planting",
    likes: 42,
    comments: [
      { id: 1, author: "Sarah N.", text: "Our Mwanza group is planning to plant 200 trees near Lake Victoria!", time: "5h ago", likes: 12 },
    ],
    shares: 15,
    createdAt: "6h ago",
    liked: false,
  },
  {
    id: 3,
    title: "Need help translating a water conservation guide into Sukuma",
    description: "We have a comprehensive guide about water conservation practices but need native Sukuma speakers to help with accurate translation. Any volunteers?",
    author: "Ester K.",
    authorRole: "Founder",
    category: "Translation",
    likes: 31,
    comments: [
      { id: 1, author: "Peter L.", text: "I'm a native Sukuma speaker and would love to help! DM me.", time: "1h ago", likes: 7 },
      { id: 2, author: "Grace W.", text: "I can review the translation for accuracy. I teach Sukuma at the university.", time: "30m ago", likes: 4 },
      { id: 3, author: "Amina J.", text: "This is great! We did something similar for Gogo language last month.", time: "15m ago", likes: 3 },
    ],
    shares: 9,
    createdAt: "1d ago",
    liked: false,
  },
  {
    id: 4,
    title: "Share your climate action win this week! 🎉",
    description: "Let's celebrate our small and big victories. What positive climate action did you take or witness this week?",
    author: "Climate Cardinals TZ",
    authorRole: "Official",
    category: "General",
    likes: 56,
    comments: [
      { id: 1, author: "Hassan R.", text: "Convinced my neighbor to start composting! Small step but it felt amazing.", time: "4h ago", likes: 15 },
    ],
    shares: 22,
    createdAt: "12h ago",
    liked: false,
  },
];

const sortOptions = [
  { label: "Trending", icon: Flame },
  { label: "Latest", icon: Clock },
  { label: "Top", icon: TrendingUp },
];

const Community = () => {
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSort, setActiveSort] = useState("Trending");
  const [expandedTopic, setExpandedTopic] = useState<number | null>(null);
  const [newComment, setNewComment] = useState("");

  const filteredTopics = topics
    .filter((t) => activeCategory === "All" || t.category === activeCategory)
    .sort((a, b) => {
      if (activeSort === "Top") return b.likes - a.likes;
      if (activeSort === "Latest") return a.id > b.id ? -1 : 1;
      return (b.likes + b.comments.length + b.shares) - (a.likes + a.comments.length + a.shares);
    });

  const handleLike = (topicId: number) => {
    setTopics((prev) =>
      prev.map((t) =>
        t.id === topicId ? { ...t, liked: !t.liked, likes: t.liked ? t.likes - 1 : t.likes + 1 } : t
      )
    );
  };

  const handleAddComment = (topicId: number) => {
    if (!newComment.trim()) return;
    setTopics((prev) =>
      prev.map((t) =>
        t.id === topicId
          ? {
              ...t,
              comments: [...t.comments, { id: Date.now(), author: "You", text: newComment, time: "Just now", likes: 0 }],
            }
          : t
      )
    );
    setNewComment("");
  };

  // Leaderboard
  const leaderboard = [
    { name: "Ester K.", points: 340, badge: "🌟" },
    { name: "Amina J.", points: 285, badge: "🌱" },
    { name: "David M.", points: 220, badge: "🔥" },
    { name: "John K.", points: 195, badge: "💚" },
    { name: "Fatuma K.", points: 170, badge: "🌍" },
  ];

  return (
    <main className="overflow-x-hidden">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 bg-forest-night">
        <div className="absolute top-0 left-0 w-80 h-80 bg-leaf/[0.03] rounded-full blur-3xl" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="inline-flex items-center gap-2 font-mono text-xs text-gold tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full border border-gold/20 bg-gold/5">
              <Users className="w-3.5 h-3.5" />
              Community
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-4">
              Climate <span className="text-gold">Community</span>
            </h1>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Connect, discuss, and collaborate with fellow climate advocates across Tanzania.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-forest-deep min-h-screen">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left — Topics */}
            <div className="flex-1">
              {/* Sort + Filter bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                <div className="flex gap-1 bg-card rounded-xl p-1 border border-border">
                  {sortOptions.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => setActiveSort(opt.label)}
                      className={`flex items-center gap-1.5 font-body text-sm px-3 py-2 rounded-lg transition-all ${
                        activeSort === opt.label ? "bg-gold text-accent-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <opt.icon className="w-3.5 h-3.5" />
                      {opt.label}
                    </button>
                  ))}
                </div>
                <div className="flex gap-2 overflow-x-auto">
                  {categoryFilters.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`font-body text-xs px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                        activeCategory === cat
                          ? "bg-leaf/15 text-leaf border border-leaf/30 font-semibold"
                          : "text-muted-foreground border border-border hover:border-gold/30"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Topics list */}
              <div className="space-y-4">
                {filteredTopics.map((topic, i) => (
                  <motion.div
                    key={topic.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-card border border-border rounded-2xl overflow-hidden hover:border-gold/20 transition-all duration-300"
                  >
                    <div className="p-6">
                      {/* Author + Category */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center font-display text-sm font-bold text-gold">
                            {topic.author[0]}
                          </div>
                          <div>
                            <span className="font-body text-sm font-semibold text-foreground">{topic.author}</span>
                            <span className="font-body text-xs text-muted-foreground ml-2">{topic.authorRole}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] tracking-wider uppercase px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                            {topic.category}
                          </span>
                          <span className="font-body text-xs text-muted-foreground">{topic.createdAt}</span>
                        </div>
                      </div>

                      <h3 className="font-display text-lg font-bold text-foreground mb-2">{topic.title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">{topic.description}</p>

                      {/* Actions */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => handleLike(topic.id)}
                          className={`flex items-center gap-1.5 font-body text-sm transition-colors ${
                            topic.liked ? "text-cardinal" : "text-muted-foreground hover:text-cardinal"
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${topic.liked ? "fill-cardinal" : ""}`} />
                          {topic.likes}
                        </button>
                        <button
                          onClick={() => setExpandedTopic(expandedTopic === topic.id ? null : topic.id)}
                          className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <MessageCircle className="w-4 h-4" />
                          {topic.comments.length}
                        </button>
                        <button className="flex items-center gap-1.5 font-body text-sm text-muted-foreground hover:text-gold transition-colors">
                          <Share2 className="w-4 h-4" />
                          {topic.shares}
                        </button>
                      </div>
                    </div>

                    {/* Comments */}
                    <AnimatePresence>
                      {expandedTopic === topic.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-border bg-background/30 p-6 space-y-4">
                            {topic.comments.map((comment) => (
                              <div key={comment.id} className="flex gap-3">
                                <div className="w-6 h-6 rounded-full bg-leaf/10 flex items-center justify-center font-body text-xs font-bold text-leaf flex-shrink-0 mt-0.5">
                                  {comment.author[0]}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="font-body text-sm font-semibold text-foreground">{comment.author}</span>
                                    <span className="font-body text-xs text-muted-foreground">{comment.time}</span>
                                  </div>
                                  <p className="font-body text-sm text-foreground/80">{comment.text}</p>
                                  <button className="flex items-center gap-1 mt-1 font-body text-xs text-muted-foreground hover:text-cardinal transition-colors">
                                    <Heart className="w-3 h-3" /> {comment.likes}
                                  </button>
                                </div>
                              </div>
                            ))}

                            {/* Add comment */}
                            <div className="flex gap-2 mt-4">
                              <input
                                type="text"
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleAddComment(topic.id)}
                                placeholder="Write a comment..."
                                maxLength={500}
                                className="flex-1 bg-background/50 border border-border rounded-xl px-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                              />
                              <button
                                onClick={() => handleAddComment(topic.id)}
                                className="w-10 h-10 rounded-xl bg-gold flex items-center justify-center hover:bg-gold-warm transition-colors"
                              >
                                <Send className="w-4 h-4 text-accent-foreground" />
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Sidebar — Leaderboard */}
            <div className="w-full lg:w-80 space-y-6">
              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card border border-border rounded-2xl p-6 sticky top-28"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Trophy className="w-5 h-5 text-gold" />
                  <h3 className="font-display text-lg font-bold text-foreground">Top Contributors</h3>
                </div>

                <div className="space-y-3">
                  {leaderboard.map((user, i) => (
                    <div
                      key={user.name}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        i === 0 ? "bg-gold/10 border border-gold/20" : "hover:bg-background/30"
                      }`}
                    >
                      <span className={`font-display text-lg font-bold ${i === 0 ? "text-gold" : "text-muted-foreground"}`}>
                        #{i + 1}
                      </span>
                      <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-sm">
                        {user.badge}
                      </div>
                      <div className="flex-1">
                        <p className="font-body text-sm font-semibold text-foreground">{user.name}</p>
                        <p className="font-body text-xs text-muted-foreground">{user.points} pts</p>
                      </div>
                      {i === 0 && <ChevronUp className="w-4 h-4 text-gold" />}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground text-center">
                    Earn points by posting, commenting, and getting likes!
                  </p>
                </div>
              </motion.div>

              {/* Quick Stats */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-4">Community Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-background/30 rounded-xl">
                    <p className="font-display text-2xl font-bold text-gold">120+</p>
                    <p className="font-body text-xs text-muted-foreground">Members</p>
                  </div>
                  <div className="text-center p-3 bg-background/30 rounded-xl">
                    <p className="font-display text-2xl font-bold text-leaf">45</p>
                    <p className="font-body text-xs text-muted-foreground">Topics</p>
                  </div>
                  <div className="text-center p-3 bg-background/30 rounded-xl">
                    <p className="font-display text-2xl font-bold text-sky">230</p>
                    <p className="font-body text-xs text-muted-foreground">Comments</p>
                  </div>
                  <div className="text-center p-3 bg-background/30 rounded-xl">
                    <p className="font-display text-2xl font-bold text-cardinal">8</p>
                    <p className="font-body text-xs text-muted-foreground">Regions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Community;
