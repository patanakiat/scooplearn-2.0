
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

// Layout components
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Pages
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Lazy loaded pages
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));

// Loading component
const PageLoader = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex space-x-2">
      <div className="w-3 h-3 bg-scoop-500 rounded-full loading-dot"></div>
      <div className="w-3 h-3 bg-scoop-500 rounded-full loading-dot"></div>
      <div className="w-3 h-3 bg-scoop-500 rounded-full loading-dot"></div>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
