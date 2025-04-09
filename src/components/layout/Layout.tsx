
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { usePageMetadata } from "@/hooks/usePageMetadata";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ children, title, description }: LayoutProps) => {
  // Update document title if provided
  if (title) {
    document.title = `${title} | ProsperiTalia`;
  }
  const location = useLocation();
  const canonicalUrl="https://prosperitalia.net/"
  // Generate current URL if no canonical is explicitly provided
  const currentUrl = `${window.location.origin}${location.pathname}`;
  console.log(currentUrl)
  // Update meta description if provided
  if (description) {
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }
  }
  usePageMetadata({
    title: title || "ProsperiTalia",
    description: description || "Scopri strategie efficaci per risparmiare, investire e gestire le tue finanze personali con consigli di esperti e guide pratiche.",
    canonicalUrl: currentUrl
  });
  return (
    <>
      <Header />
      <main className="min-h-[70vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
