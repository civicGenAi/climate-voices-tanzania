import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import Journal from "./pages/Journal";
import Community from "./pages/Community";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./pages/admin/DashboardLayout";
import Overview from "./pages/admin/Overview";
import FAQManager from "./pages/admin/FAQManager";
import ProgramsManager from "./pages/admin/ProgramsManager";
import ImpactManager from "./pages/admin/ImpactManager";
import TeamManager from "./pages/admin/TeamManager";
import JournalManager from "./pages/admin/JournalManager";
import MessagesManager from "./pages/admin/MessagesManager";
import NewsletterManager from "./pages/admin/NewsletterManager";
import AnalyticsDashboard from "./pages/admin/AnalyticsDashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/:slug" element={<ProgramDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/join" element={<Join />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/community" element={<Community />} />
          <Route path="/faq" element={<FAQ />} />
          {/* Admin Dashboard */}
          <Route path="/admin" element={<DashboardLayout />}>
            <Route index element={<Overview />} />
            <Route path="faqs" element={<FAQManager />} />
            <Route path="programs" element={<ProgramsManager />} />
            <Route path="impact" element={<ImpactManager />} />
            <Route path="team" element={<TeamManager />} />
            <Route path="journal" element={<JournalManager />} />
            <Route path="messages" element={<MessagesManager />} />
            <Route path="newsletter" element={<NewsletterManager />} />
            <Route path="analytics" element={<AnalyticsDashboard />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
