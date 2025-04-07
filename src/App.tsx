
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Investimenti from "./pages/Investimenti";
import Risparmio from "./pages/Risparmio";
import Budgeting from "./pages/Budgeting";
import ChiSiamo from "./pages/ChiSiamo";
import Contatti from "./pages/Contatti";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop"; // Assicurati che il percorso sia corretto
// import DiversificareInvestimenti from "@/pages/blog/DiversificareInvestimenti";
// import ErroriComuniInvestimenti from "@/pages/blog/ErroriComuniInvestimenti";
import InvestireInBorsaGuida from "@/pages/blog/InvestireInBorsaGuida";
import ObbligazioniGuida from "@/pages/blog/ObbligazioniGuida";
import InvestimentiAlternativiGuida from "@/pages/blog/InvestimentiAlternativiGuida";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/investimenti" element={<Investimenti />} />
          <Route path="/risparmio" element={<Risparmio />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/categoria/mercato-azionario" element={<InvestireInBorsaGuida />}  />
          <Route path="/categoria/obbligazioni" element={<ObbligazioniGuida />}  />
          <Route path="/categoria/investimenti-alternativi" element={<InvestimentiAlternativiGuida />}  />
          {/* <Route   path="/categoria/obbligazioni" element={<DiversificareInvestimenti />}  />
          <Route path="/categoria/investimenti-alternativi" element={<ErroriComuniInvestimenti />} /> */}
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
