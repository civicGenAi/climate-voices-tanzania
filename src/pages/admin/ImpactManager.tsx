import { useState } from "react";
import { Pencil, Save, X } from "lucide-react";

const initialStats = [
  { id: "1", label: "Trees Planted", value: "10,000+", icon: "🌳" },
  { id: "2", label: "People Reached", value: "50,000+", icon: "👥" },
  { id: "3", label: "Active Translators", value: "120+", icon: "🌍" },
  { id: "4", label: "Languages Covered", value: "15+", icon: "💬" },
  { id: "5", label: "Workshops Conducted", value: "20+", icon: "📚" },
  { id: "6", label: "Partner Organizations", value: "25+", icon: "🤝" },
  { id: "7", label: "Planting Sites", value: "20+", icon: "📍" },
  { id: "8", label: "Documents Translated", value: "200+", icon: "📄" },
];

const ImpactManager = () => {
  const [stats, setStats] = useState(initialStats);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editValue, setEditValue] = useState("");
  const [editLabel, setEditLabel] = useState("");

  const startEdit = (stat: typeof initialStats[0]) => {
    setEditingId(stat.id);
    setEditValue(stat.value);
    setEditLabel(stat.label);
  };

  const saveEdit = () => {
    setStats(stats.map((s) => (s.id === editingId ? { ...s, value: editValue, label: editLabel } : s)));
    setEditingId(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl font-bold text-foreground">Impact Statistics</h1>
        <p className="font-body text-sm text-muted-foreground">Update the numbers displayed across the site</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-card border border-border rounded-xl p-5">
            {editingId === stat.id ? (
              <div className="space-y-3">
                <input
                  value={editLabel}
                  onChange={(e) => setEditLabel(e.target.value)}
                  className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-gold/40"
                  placeholder="Label"
                />
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-full bg-muted/30 border border-border rounded-lg px-3 py-2 font-body text-sm text-foreground focus:outline-none focus:border-gold/40"
                  placeholder="Value"
                />
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="flex items-center gap-1 font-body text-xs font-semibold bg-gold text-accent-foreground px-3 py-1.5 rounded-lg">
                    <Save className="w-3 h-3" /> Save
                  </button>
                  <button onClick={() => setEditingId(null)} className="flex items-center gap-1 font-body text-xs text-muted-foreground px-3 py-1.5 rounded-lg border border-border">
                    <X className="w-3 h-3" /> Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-2xl mb-2 block">{stat.icon}</span>
                  <p className="font-display text-xl font-bold text-foreground">{stat.value}</p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{stat.label}</p>
                </div>
                <button onClick={() => startEdit(stat)} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                  <Pencil className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactManager;
