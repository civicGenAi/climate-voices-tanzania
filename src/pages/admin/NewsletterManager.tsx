import { useState } from "react";
import { Search, Download, Trash2, Mail } from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  date: string;
  status: "active" | "unsubscribed";
}

const initialSubs: Subscriber[] = [
  { id: "1", email: "amina@example.com", date: "2026-03-07", status: "active" },
  { id: "2", email: "john.k@gmail.com", date: "2026-03-05", status: "active" },
  { id: "3", email: "sarah@ngo.org", date: "2026-03-01", status: "active" },
  { id: "4", email: "peter@uni.ac.tz", date: "2026-02-28", status: "active" },
  { id: "5", email: "grace@outlook.com", date: "2026-02-20", status: "unsubscribed" },
  { id: "6", email: "david.l@yahoo.com", date: "2026-02-15", status: "active" },
  { id: "7", email: "maria@radio.co.tz", date: "2026-02-10", status: "active" },
  { id: "8", email: "alex@gmail.com", date: "2026-01-30", status: "active" },
];

const NewsletterManager = () => {
  const [subs, setSubs] = useState(initialSubs);
  const [search, setSearch] = useState("");

  const filtered = subs.filter((s) => s.email.toLowerCase().includes(search.toLowerCase()));
  const activeCount = subs.filter((s) => s.status === "active").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">Newsletter Subscribers</h1>
          <p className="font-body text-sm text-muted-foreground">{activeCount} active · {subs.length} total</p>
        </div>
        <button className="inline-flex items-center gap-2 font-body text-sm font-medium text-foreground border border-border px-4 py-2.5 rounded-lg hover:bg-muted/30 transition-colors">
          <Download className="w-4 h-4" /> Export CSV
        </button>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="font-display text-xl font-bold text-foreground">{subs.length}</p>
          <p className="font-body text-xs text-muted-foreground">Total</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="font-display text-xl font-bold text-leaf">{activeCount}</p>
          <p className="font-body text-xs text-muted-foreground">Active</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-4 text-center">
          <p className="font-display text-xl font-bold text-gold">{subs.length - activeCount}</p>
          <p className="font-body text-xs text-muted-foreground">Unsubscribed</p>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search subscribers..." className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Email</th>
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Date</th>
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-right px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((sub) => (
                <tr key={sub.id} className="border-b border-border last:border-0 hover:bg-muted/10">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                      <span className="font-body text-sm text-foreground">{sub.email}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground hidden sm:table-cell">{sub.date}</td>
                  <td className="px-4 py-3">
                    <span className={`font-body text-[10px] font-semibold px-2 py-0.5 rounded-full ${sub.status === "active" ? "bg-leaf/10 text-leaf" : "bg-muted text-muted-foreground"}`}>
                      {sub.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => setSubs(subs.filter((s) => s.id !== sub.id))} className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default NewsletterManager;
