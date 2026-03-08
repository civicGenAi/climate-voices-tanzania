import { useState } from "react";
import { Plus, Pencil, Trash2, Search } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  status: "active" | "inactive";
}

const initialMembers: TeamMember[] = [
  { id: "1", name: "Ester Kimario", role: "Founder & Chapter Lead", department: "Leadership", status: "active" },
  { id: "2", name: "James Moshi", role: "Programs Coordinator", department: "Programs", status: "active" },
  { id: "3", name: "Amina Hassan", role: "Lead Translator", department: "Translation", status: "active" },
  { id: "4", name: "David Lyimo", role: "Community Outreach", department: "Campaigns", status: "active" },
  { id: "5", name: "Grace Mwangi", role: "Education Facilitator", department: "Education", status: "active" },
];

const TeamManager = () => {
  const [members, setMembers] = useState(initialMembers);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", role: "", department: "" });

  const filtered = members.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase()) ||
    m.role.toLowerCase().includes(search.toLowerCase())
  );

  const handleAdd = () => {
    if (!form.name || !form.role) return;
    setMembers([...members, { id: `m-${Date.now()}`, ...form, status: "active" }]);
    setForm({ name: "", role: "", department: "" });
    setShowForm(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h1 className="font-display text-xl font-bold text-foreground">Team Management</h1>
          <p className="font-body text-sm text-muted-foreground">{members.length} members</p>
        </div>
        <button onClick={() => setShowForm(true)} className="inline-flex items-center gap-2 font-body text-sm font-semibold bg-gold text-accent-foreground px-4 py-2.5 rounded-lg hover:bg-gold-warm transition-colors">
          <Plus className="w-4 h-4" /> Add Member
        </button>
      </div>

      {showForm && (
        <div className="bg-card border border-border rounded-xl p-5 space-y-4">
          <h3 className="font-display text-base font-semibold text-foreground">Add Team Member</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Full Name" className="bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
            <input value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} placeholder="Role" className="bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
            <input value={form.department} onChange={(e) => setForm({ ...form, department: e.target.value })} placeholder="Department" className="bg-muted/30 border border-border rounded-lg px-3 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
          </div>
          <div className="flex gap-2">
            <button onClick={handleAdd} className="font-body text-sm font-semibold bg-gold text-accent-foreground px-5 py-2.5 rounded-lg hover:bg-gold-warm transition-colors">Add Member</button>
            <button onClick={() => setShowForm(false)} className="font-body text-sm text-muted-foreground px-5 py-2.5 rounded-lg border border-border hover:bg-muted/30 transition-colors">Cancel</button>
          </div>
        </div>
      )}

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search team..." className="w-full bg-card border border-border rounded-lg pl-10 pr-4 py-2.5 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold/40" />
      </div>

      {/* Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Name</th>
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Role</th>
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Department</th>
                <th className="text-left px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
                <th className="text-right px-4 py-3 font-body text-xs font-semibold text-muted-foreground uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((member) => (
                <tr key={member.id} className="border-b border-border last:border-0 hover:bg-muted/10 transition-colors">
                  <td className="px-4 py-3">
                    <p className="font-body text-sm font-medium text-foreground">{member.name}</p>
                    <p className="font-body text-xs text-muted-foreground sm:hidden">{member.role}</p>
                  </td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground hidden sm:table-cell">{member.role}</td>
                  <td className="px-4 py-3 font-body text-sm text-muted-foreground hidden md:table-cell">{member.department}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex font-body text-[10px] font-semibold px-2 py-0.5 rounded-full bg-leaf/10 text-leaf">
                      {member.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"><Pencil className="w-3.5 h-3.5" /></button>
                      <button onClick={() => setMembers(members.filter((m) => m.id !== member.id))} className="p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                    </div>
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

export default TeamManager;
