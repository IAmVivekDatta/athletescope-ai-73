import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppLayout } from "@/components/layout/AppLayout";
import Login from "./pages/Login";
import LoginSelection from "./pages/LoginSelection";
import UserLogin from "./pages/UserLogin";
import AdminLogin from "./pages/AdminLogin";
import GovtLogin from "./pages/GovtLogin";
import CoordinatorLogin from "./pages/CoordinatorLogin";
import Dashboard from "./pages/Dashboard";
import AthleteManagement from "./pages/AthleteManagement";
import PerformanceVerification from "./pages/PerformanceVerification";
import Benchmarking from "./pages/Benchmarking";
import ReportsAnalytics from "./pages/ReportsAnalytics";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginSelection />} />
          <Route path="/login/user" element={<UserLogin />} />
          <Route path="/login/admin" element={<AdminLogin />} />
          <Route path="/login/govt" element={<GovtLogin />} />
          <Route path="/login/coordinator" element={<CoordinatorLogin />} />
          <Route path="/login/original" element={<Login />} />
          
          {/* Protected Routes with Layout */}
          <Route path="/" element={
            <SidebarProvider>
              <AppLayout />
            </SidebarProvider>
          }>
            <Route index element={<Dashboard />} />
            <Route path="athletes" element={<AthleteManagement />} />
            <Route path="verification" element={<PerformanceVerification />} />
            <Route path="benchmarking" element={<Benchmarking />} />
            <Route path="reports" element={<ReportsAnalytics />} />
            <Route path="admin" element={<AdminPanel />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;