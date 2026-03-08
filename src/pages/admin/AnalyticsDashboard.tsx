import { BarChart3, TrendingUp, Eye, Users, Globe, Clock, ArrowUpRight, ArrowDownRight } from "lucide-react";

const pageViews = [
  { page: "Home", views: 8420, change: 12 },
  { page: "Programs", views: 4210, change: 8 },
  { page: "About", views: 3150, change: -3 },
  { page: "Join Us", views: 2890, change: 22 },
  { page: "Contact", views: 1640, change: 5 },
  { page: "Community", views: 1280, change: 15 },
  { page: "Journal", views: 980, change: -1 },
  { page: "FAQ", views: 720, change: 0 },
];

const topCountries = [
  { country: "🇹🇿 Tanzania", visitors: 15200, pct: 62 },
  { country: "🇰🇪 Kenya", visitors: 3100, pct: 13 },
  { country: "🇺🇬 Uganda", visitors: 1800, pct: 7 },
  { country: "🇺🇸 United States", visitors: 1200, pct: 5 },
  { country: "🇬🇧 United Kingdom", visitors: 800, pct: 3 },
];

const trafficSources = [
  { source: "Direct", pct: 35, color: "bg-gold" },
  { source: "Social Media", pct: 28, color: "bg-leaf" },
  { source: "Search", pct: 22, color: "bg-sky" },
  { source: "Referral", pct: 15, color: "bg-cardinal" },
];

const AnalyticsDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-display text-xl font-bold text-foreground">Analytics</h1>
        <p className="font-body text-sm text-muted-foreground">Website performance overview — last 30 days</p>
      </div>

      {/* Key metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {[
          { label: "Total Views", value: "24,580", change: 12, icon: Eye },
          { label: "Unique Visitors", value: "8,240", change: 8, icon: Users },
          { label: "Avg. Time on Site", value: "3m 42s", change: 5, icon: Clock },
          { label: "Bounce Rate", value: "34%", change: -3, icon: TrendingUp },
        ].map((metric) => (
          <div key={metric.label} className="bg-card border border-border rounded-xl p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <metric.icon className="w-4 h-4 text-muted-foreground" />
              <span className={`flex items-center gap-0.5 font-body text-[10px] font-semibold ${metric.change > 0 ? "text-leaf" : "text-cardinal"}`}>
                {metric.change > 0 ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {Math.abs(metric.change)}%
              </span>
            </div>
            <p className="font-display text-lg sm:text-xl font-bold text-foreground">{metric.value}</p>
            <p className="font-body text-xs text-muted-foreground mt-0.5">{metric.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Page views */}
        <div className="bg-card border border-border rounded-xl p-5">
          <h3 className="font-display text-base font-semibold text-foreground mb-4">Page Views</h3>
          <div className="space-y-3">
            {pageViews.map((page) => (
              <div key={page.page} className="flex items-center gap-3">
                <span className="font-body text-sm text-foreground w-24 flex-shrink-0">{page.page}</span>
                <div className="flex-1 bg-muted/30 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-gold to-gold-warm rounded-full"
                    style={{ width: `${(page.views / 8420) * 100}%` }}
                  />
                </div>
                <span className="font-mono text-xs text-muted-foreground w-14 text-right">{page.views.toLocaleString()}</span>
                <span className={`font-body text-[10px] font-semibold w-10 text-right ${page.change > 0 ? "text-leaf" : page.change < 0 ? "text-cardinal" : "text-muted-foreground"}`}>
                  {page.change > 0 ? "+" : ""}{page.change}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Traffic sources */}
        <div className="space-y-4">
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-base font-semibold text-foreground mb-4">Traffic Sources</h3>
            <div className="flex h-4 rounded-full overflow-hidden mb-4">
              {trafficSources.map((src) => (
                <div key={src.source} className={`${src.color} h-full`} style={{ width: `${src.pct}%` }} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {trafficSources.map((src) => (
                <div key={src.source} className="flex items-center gap-2">
                  <div className={`w-2.5 h-2.5 rounded-full ${src.color}`} />
                  <span className="font-body text-xs text-muted-foreground">{src.source}</span>
                  <span className="font-body text-xs font-semibold text-foreground ml-auto">{src.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Top countries */}
          <div className="bg-card border border-border rounded-xl p-5">
            <h3 className="font-display text-base font-semibold text-foreground mb-4">Top Countries</h3>
            <div className="space-y-3">
              {topCountries.map((c) => (
                <div key={c.country} className="flex items-center gap-3">
                  <span className="font-body text-sm text-foreground flex-1">{c.country}</span>
                  <span className="font-mono text-xs text-muted-foreground">{c.visitors.toLocaleString()}</span>
                  <span className="font-body text-xs font-semibold text-gold w-8 text-right">{c.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
