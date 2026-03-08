import { useState } from "react";
import { Plus, Pencil, Trash2, Search, GripVertical } from "lucide-react";
import { faqs as initialFaqs, faqCategories, type FAQItem } from "@/data/faq";

const FAQManager = () => {
  const [items, setItems] = useState<FAQItem[]>(initialFaqs);
  const [search, setSearch] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ question: "", answer: "", category: "organization" as FAQItem["category"] });

  const filtered = items.filter(
    (f) =>
      f.question.toLowerCase().includes(search.toLowerCase()) ||
      f.answer.toLowerCase().includes(search.toLowerCase())
  );

  const handleSave = () => {
    if (!form.question || !form.answer) return;
    if (editingId) {
      setItems(items.map((f) => (f.id === editingId ? { ...f, ...form } : f)));
    } else {
      setItems([...items, { id: `faq-${Date.now()}`, ...form }]);
    }
    resetForm();
  };

  const handleEdit = (faq: FAQItem) => {
    setForm({ question: faq.question, answer: faq.answer, category: faq.category });
    setEditingId(faq.id);
    setShowForm(true);
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((f) => f.id !== id));
  };

  const resetForm = () => {
    setForm({ question: "", answer: "", category: "organization" });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">FAQ Management</h1>
          <p className="font-body text-sm text-muted-foreground">{items.length} questions</p>
        </div>
        <button
          onClick={() => { resetForm(); setShowForm(true); }}
          className="inline-flex items-center gap-2 font-body text-sm font-semibold bg-gold text-accent-foreground px-4 py-2.5 rounded-lg hover:bg-gold-warm transition-colors"
        >
          <Plus className="w-4 h-4" /> Add Question
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <h3 className="font-display text-base font-semibold text-foreground">
            {editingId ? "Edit Question" : "New Question"}
          </h3>
          <div>
            <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Category</label>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as FAQItem["category"] })}
              className="mt-1 w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground focus:outline-none focus:border-gold/40"
            >
              {faqCategories.map((c) => (
                <option key={c.key} value={c.key}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Question</label>
            <input
              value={form.question}
              onChange={(e) => setForm({ ...form, question: e.target.value })}
              className="mt-1 w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
              placeholder="Enter the question..."
            />
          </div>
          <div>
            <label className="font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Answer</label>
            <textarea
              value={form.answer}
              onChange={(e) => setForm({ ...form, answer: e.target.value })}
              rows={4}
              className="mt-1 w-full bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40 resize-none"
              placeholder="Enter the answer..."
            />
          </div>
          <div className="flex gap-2">
            <button onClick={handleSave} className="font-body text-sm font-semibold bg-gold text-accent-foreground px-5 py-2.5 rounded-lg hover:bg-gold-warm transition-colors">
              {editingId ? "Update" : "Add"} Question
            </button>
            <button onClick={resetForm} className="font-body text-sm font-medium text-muted-foreground px-5 py-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search FAQs..."
          className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40"
        />
      </div>

      {/* List */}
      <div className="space-y-2">
        {filtered.map((faq) => (
          <div key={faq.id} className="bg-card border border-border rounded-xl p-4 flex items-start gap-3 group">
            <GripVertical className="w-4 h-4 text-muted-foreground/30 mt-0.5 flex-shrink-0 cursor-grab" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-body text-[10px] font-semibold text-gold bg-gold/10 px-2 py-0.5 rounded-full uppercase">
                  {faqCategories.find((c) => c.key === faq.category)?.label}
                </span>
              </div>
              <p className="font-display text-sm font-semibold text-foreground">{faq.question}</p>
              <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">{faq.answer}</p>
            </div>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button onClick={() => handleEdit(faq)} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button onClick={() => handleDelete(faq.id)} className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQManager;
