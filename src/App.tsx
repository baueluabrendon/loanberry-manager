import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Apply from "./pages/Apply";
import ClientPortal from "./pages/ClientPortal";
import Repayments from "./pages/Repayments";
import Loans from "./pages/Loans";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Applications from "./pages/Applications";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/portal" element={<ClientPortal />} />
            <Route path="/portal/profile" element={<Profile />} />
            <Route path="/portal/repayments" element={<Repayments />} />
            <Route path="/portal/loans" element={<Loans />} />
            <Route path="/portal/support" element={<Support />} />
            <Route path="/portal/applications" element={<Applications />} />
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;