import { useState } from "react";
import { Plus, Pencil, Trash2, Eye, Calendar } from "lucide-react";

interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  status: "published" | "draft";
  date: string;
  author: string;
}

const initialPosts: JournalPost[] = [
  { id: "1", title: "Our Journey to 10,000 Trees", excerpt: "Celebrating a milestone in our environmental restoration efforts...", status: "published", date: "2026-03-01", author: "Ester Kimario" },
  { id: "2", title: "Translation Workshop in Arusha", excerpt: "50 new volunteers joined our translation program last month...", status: "published", date: "2026-02-15", author: "Amina Hassan" },
  { id: "3", title: "Climate Education in Rural Schools", excerpt: "Bringing climate science to schools that have never heard the word...", status: "draft", date: "2026-03-05", author: "Grace Mwangi" },
  { id: "4", title: "Partnership with Local Radio Stations", excerpt: "How we're reaching 50,000 people through community radio...", status: "published", date: "2026-01-20", author: "David Lyimo" },
];

const JournalManager = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ title: "", excerpt: "", author: "", status: "draft" as JournalPost["status"] });

  const handleAdd = () => {
    if (!form.title) return;
    setPosts([{ id: `p-${Date.now()}`, ...form, date: new Date().toISOString().split("T")[0] }, ...posts]);
    setForm({ title: "", excerpt: "", author: "", status: "draft" });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">Journal Posts</h1>
          <p className="font-body text-sm text-muted-foreground">{posts.length} posts · {posts.filter((p) => p.status === "published").length} published</p>
        </div>
        <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 font-body text-sm font-semibold bg-gold text-accent-foreground px-4 py-2.5 rounded-lg hover:bg-gold-warm transition-colors">
          <Plus className="w-4 h-4" /> New Post
        </button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <h3 className="font-display text-base font-semibold text-foreground">New Journal Post</h3>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Post Title" className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
          <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={3} placeholder="Brief excerpt..." className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 resize-none" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author" className="bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as JournalPost["status"] })} className="bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-gold/40">
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className="flex gap-2">
            <button onClick={handleAdd} className="font-body text-sm font-semibold bg-gold text-accent-foreground px-5 py-2.5 rounded-lg hover:bg-gold-warm transition-colors">Create Post</button>
            <button onClick={() => setShowForm(false)} className="font-body text-sm text-muted-foreground px-5 py-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="space-y-3">
        {posts.map((post) => (
          <div key={post.id} className="bg-card border border-border rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 group">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`font-body text-[10px] font-semibold px-2 py-0.5 rounded-full ${post.status === "published" ? "bg-leaf/10 text-leaf" : "bg-gold/10 text-gold"}`}>
                  {post.status}
                </span>
                <span className="flex items-center gap-1 font-body text-[10px] text-muted-foreground">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground">{post.title}</h3>
              <p className="font-body text-xs text-muted-foreground mt-0.5 line-clamp-1">{post.excerpt}</p>
              <p className="font-body text-[10px] text-muted-foreground mt-1">By {post.author}</p>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"><Eye className="w-3.5 h-3.5" /></button>
              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
              <button onClick={() => setPosts(posts.filter((p) => p.id !== post.id))} className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JournalManager;
