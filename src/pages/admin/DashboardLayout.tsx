import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  HelpCircle,
  BookOpen,
  BarChart3,
  Users,
  FileText,
  Mail,
  Newspaper,
  ChevronLeft,
  Menu,
  TreePine,
  LogOut,
} from "lucide-react";
import logo from "@/assets/logo.png";

const sidebarLinks = [
  { label: "Overview", href: "/admin", icon: LayoutDashboard },
  { label: "FAQs", href: "/admin/faqs", icon: HelpCircle },
  { label: "Programs", href: "/admin/programs", icon: BookOpen },
  { label: "Impact Stats", href: "/admin/impact", icon: BarChart3 },
  { label: "Team", href: "/admin/team", icon: Users },
  { label: "Journal", href: "/admin/journal", icon: FileText },
  { label: "Messages", href: "/admin/messages", icon: Mail },
  { label: "Newsletter", href: "/admin/newsletter", icon: Newspaper },
  { label: "Analytics", href: "/admin/analytics", icon: BarChart3 },
];

const DashboardLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) =>
    href === "/admin"
      ? location.pathname === "/admin"
      : location.pathname.startsWith(href);

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-5 border-b border-border">
        <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
        {!collapsed && (
          <div className="flex flex-col">
            <span className="font-display text-sm font-semibold text-foreground leading-tight">
              Admin Panel
            </span>
            <span className="font-body text-[10px] text-gold tracking-wider uppercase">
              Climate Cardinals TZ
            </span>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-4 px-2 space-y-1">
        {sidebarLinks.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm transition-colors ${
                active
                  ? "bg-gold/10 text-gold font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
              }`}
              title={collapsed ? link.label : undefined}
            >
              <link.icon className={`w-4 h-4 flex-shrink-0 ${active ? "text-gold" : ""}`} />
              {!collapsed && <span>{link.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-border p-3 space-y-1">
        <Link
          to="/"
          className="flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
        >
          <TreePine className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>View Site</span>}
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg font-body text-sm text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Desktop Sidebar */}
      <aside
        className={`hidden md:flex flex-col border-r border-border bg-card transition-all duration-300 ${
          collapsed ? "w-16" : "w-60"
        }`}
      >
        <SidebarContent />
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute top-5 -right-3 z-10 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground"
          style={{ left: collapsed ? "52px" : "228px" }}
        >
          <ChevronLeft className={`w-3 h-3 transition-transform ${collapsed ? "rotate-180" : ""}`} />
        </button>
      </aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -260 }}
              animate={{ x: 0 }}
              exit={{ x: -260 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 z-50 w-60 bg-card border-r border-border md:hidden"
            >
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="h-14 border-b border-border bg-card flex items-center px-4 gap-3">
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-muted-foreground hover:text-foreground"
          >
            <Menu className="w-5 h-5" />
          </button>
          <h2 className="font-display text-sm font-semibold text-foreground">
            {sidebarLinks.find((l) => isActive(l.href))?.label || "Dashboard"}
          </h2>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
