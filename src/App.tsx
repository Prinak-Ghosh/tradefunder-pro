import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

// Authentication pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

// Dashboard pages
import Dashboard from "./pages/Dashboard";
import Portfolio from "./pages/dashboard/Portfolio";
import Settings from "./pages/dashboard/Settings";

// Ideas pages
import Ideas from "./pages/Ideas";
import IdeaDetail from "./pages/IdeaDetail";
import CreateIdea from "./pages/CreateIdea";

// Funding pages
import Funding from "./pages/Funding";
import FundingDetail from "./pages/FundingDetail";

// Admin pages
import AdminDashboard from "./pages/admin/Dashboard";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/portfolio" element={<Portfolio />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          
          {/* Ideas Routes */}
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/ideas/:id" element={<IdeaDetail />} />
          <Route path="/ideas/create" element={<CreateIdea />} />
          
          {/* Funding Routes */}
          <Route path="/funding" element={<Funding />} />
          <Route path="/funding/:id" element={<FundingDetail />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminDashboard />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
