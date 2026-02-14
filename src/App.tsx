import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Homepage from "./pages/Homepage";
import PenalePage from "./pages/PenalePage";
import FamigliaPage from "./pages/FamigliaPage";
import SeparazionePage from "./pages/SeparazionePage";
import DivorzioPage from "./pages/DivorzioPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/avvocato-penalista-messina" replace />} />
            <Route path="/avvocato-penalista-messina" element={<Homepage />} />
            <Route path="/avvocato-diritto-penale-messina" element={<PenalePage />} />
            <Route path="/avvocato-diritto-famiglia-messina" element={<FamigliaPage />} />
            <Route path="/avvocato-separazione-messina" element={<SeparazionePage />} />
            <Route path="/avvocato-divorzio-messina" element={<DivorzioPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
