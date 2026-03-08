import { useState } from "react";
import { Mail, MailOpen, Trash2, Star, Search } from "lucide-react";

interface Message {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
  read: boolean;
  starred: boolean;
}

const initialMessages: Message[] = [
  { id: "1", name: "John Kamau", email: "john@example.com", subject: "Partnership Inquiry", message: "We'd love to partner with Climate Cardinals Tanzania for our upcoming...", date: "2026-03-07", read: false, starred: true },
  { id: "2", name: "Sarah Mwenda", email: "sarah@ngo.org", subject: "Workshop Request — Dodoma", message: "Our school in Dodoma would like to host a climate education workshop...", date: "2026-03-06", read: false, starred: false },
  { id: "3", name: "Peter Njau", email: "peter@uni.ac.tz", subject: "Research Collaboration", message: "I'm a researcher at UDSM working on climate communication and would...", date: "2026-03-04", read: true, starred: false },
  { id: "4", name: "Maria Lema", email: "maria@radio.co.tz", subject: "Radio Feature Request", message: "We'd like to feature Climate Cardinals on our weekly environment...", date: "2026-03-01", read: true, starred: true },
  { id: "5", name: "Alex Munisi", email: "alex@gmail.com", subject: "Volunteer Application", message: "I speak Kisukuma and Kiswahili and would love to join the translation...", date: "2026-02-28", read: true, starred: false },
];

const MessagesManager = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [selected, setSelected] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  const filtered = messages.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.subject.toLowerCase().includes(search.toLowerCase())
  );

  const toggleRead = (id: string) => setMessages(messages.map((m) => m.id === id ? { ...m, read: !m.read } : m));
  const toggleStar = (id: string) => setMessages(messages.map((m) => m.id === id ? { ...m, starred: !m.starred } : m));
  const deleteMsg = (id: string) => { setMessages(messages.filter((m) => m.id !== id)); if (selected === id) setSelected(null); };

  const selectedMsg = messages.find((m) => m.id === selected);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl font-bold text-foreground">Contact Messages</h1>
        <p className="font-body text-sm text-muted-foreground">
          {messages.filter((m) => !m.read).length} unread · {messages.length} total
        </p>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search messages..." className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* List */}
        <div className="lg:col-span-2 space-y-2">
          {filtered.map((msg) => (
            <button
              key={msg.id}
              onClick={() => { setSelected(msg.id); toggleRead(msg.id); }}
              className={`w-full text-left bg-card border rounded-xl p-4 transition-colors ${
                selected === msg.id ? "border-gold/40" : "border-border hover:border-gold/20"
              } ${!msg.read ? "bg-gold/5" : ""}`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`font-body text-sm ${!msg.read ? "font-semibold text-foreground" : "text-muted-foreground"}`}>
                  {msg.name}
                </span>
                <div className="flex items-center gap-1">
                  {!msg.read && <div className="w-2 h-2 rounded-full bg-gold" />}
                  <button onClick={(e) => { e.stopPropagation(); toggleStar(msg.id); }} className="p-1">
                    <Star className={`w-3 h-3 ${msg.starred ? "text-gold fill-gold" : "text-muted-foreground"}`} />
                  </button>
                </div>
              </div>
              <p className="font-body text-xs font-medium text-foreground truncate">{msg.subject}</p>
              <p className="font-body text-[10px] text-muted-foreground mt-0.5">{msg.date}</p>
            </button>
          ))}
        </div>

        {/* Detail */}
        <div className="lg:col-span-3">
          {selectedMsg ? (
            <div className="bg-card border border-border rounded-xl p-5 sm:p-6 space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{selectedMsg.subject}</h3>
                  <p className="font-body text-sm text-muted-foreground mt-0.5">
                    From: {selectedMsg.name} · <a href={`mailto:${selectedMsg.email}`} className="text-gold hover:underline">{selectedMsg.email}</a>
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-0.5">{selectedMsg.date}</p>
                </div>
                <div className="flex gap-1">
                  <button onClick={() => toggleRead(selectedMsg.id)} className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors">
                    {selectedMsg.read ? <Mail className="w-4 h-4" /> : <MailOpen className="w-4 h-4" />}
                  </button>
                  <button onClick={() => deleteMsg(selectedMsg.id)} className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="border-t border-border pt-4">
                <p className="font-body text-sm text-foreground leading-relaxed">{selectedMsg.message}</p>
              </div>
              <div className="pt-2">
                <a href={`mailto:${selectedMsg.email}`} className="inline-flex font-body text-sm font-semibold bg-gold text-accent-foreground px-5 py-2.5 rounded-lg hover:bg-gold-warm transition-colors">
                  Reply via Email
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-border rounded-xl p-10 text-center">
              <Mail className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
              <p className="font-body text-sm text-muted-foreground">Select a message to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagesManager;
