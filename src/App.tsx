import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import About from "./pages/About";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/startups-teams" element={<CategoryPage categoryId="startups-teams" />} />
            <Route path="/events-conferences" element={<CategoryPage categoryId="events-conferences" />} />
            <Route path="/hospitality-service-staff" element={<CategoryPage categoryId="hospitality-service-staff" />} />
            <Route path="/studios-performance-teams" element={<CategoryPage categoryId="studios-performance-teams" />} />
            <Route path="/fitness-wellness-brands" element={<CategoryPage categoryId="fitness-wellness-brands" />} />
            <Route path="/schools-educational-institutions" element={<CategoryPage categoryId="schools-educational-institutions" />} />
            <Route path="/retail-cafes-boutiques" element={<CategoryPage categoryId="retail-cafes-boutiques" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
