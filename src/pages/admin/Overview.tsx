import { BarChart3, Users, FileText, TreePine, Mail, HelpCircle, Newspaper, TrendingUp } from "lucide-react";

const stats = [
  { label: "Total Page Views", value: "24,580", change: "+12%", icon: BarChart3, color: "text-leaf" },
  { label: "Team Members", value: "45", change: "+3", icon: Users, color: "text-gold" },
  { label: "Journal Posts", value: "18", change: "+2", icon: FileText, color: "text-sky" },
  { label: "Trees Planted", value: "10,000+", change: "+500", icon: TreePine, color: "text-leaf" },
  { label: "Messages", value: "32", change: "5 new", icon: Mail, color: "text-cardinal" },
  { label: "FAQs", value: "16", change: "—", icon: HelpCircle, color: "text-gold" },
  { label: "Subscribers", value: "1,240", change: "+85", icon: Newspaper, color: "text-sky" },
  { label: "Programs", value: "4", change: "—", icon: TrendingUp, color: "text-leaf" },
];

const recentActivity = [
  { action: "New contact message", detail: "From: John K. — Partnership inquiry", time: "2 hours ago" },
  { action: "Newsletter signup", detail: "amina@example.com subscribed", time: "5 hours ago" },
  { action: "Journal post published", detail: "\"Our Journey to 10,000 Trees\"", time: "1 day ago" },
  { action: "New volunteer signup", detail: "David M. — Translator (Kisukuma)", time: "2 days ago" },
  { action: "FAQ updated", detail: "Added new climate education question", time: "3 days ago" },
];

const Overview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl sm:text-2xl font-bold text-foreground">Dashboard Overview</h1>
        <p className="font-body text-sm text-muted-foreground mt-1">
          Welcome back! Here's what's happening with Climate Cardinals Tanzania.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-4 sm:p-5"
          >
            <div className="flex items-center justify-between mb-3">
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
              <span className="font-body text-[10px] font-semibold text-leaf bg-leaf/10 px-2 py-0.5 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="font-display text-lg sm:text-xl font-bold text-foreground">{stat.value}</p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-5 sm:p-6">
        <h3 className="font-display text-base font-semibold text-foreground mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {recentActivity.map((item, i) => (
            <div key={i} className="flex items-start gap-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <div className="w-2 h-2 rounded-full bg-gold mt-1.5 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm font-medium text-foreground">{item.action}</p>
                <p className="font-body text-xs text-muted-foreground truncate">{item.detail}</p>
              </div>
              <span className="font-body text-[10px] text-muted-foreground whitespace-nowrap">{item.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
