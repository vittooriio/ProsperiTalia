
import Layout from "../components/layout/Layout";
import HeroSection from "../components/ui/HeroSection";
import FeaturedCard from "../components/ui/FeaturedCard";
import ArticleCard from "../components/ui/ArticleCard";
import CallToAction from "../components/ui/CallToAction";
import Newsletter from "../components/ui/Newsletter";
import { Wallet, TrendingUp, PiggyBank, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const recentArticles = [
  {
    id: "investire-in-borsa-guida",
    title: "Come Iniziare ad Investire in Borsa: Guida Completa per Principianti",
    excerpt: "Scopri i passi fondamentali per iniziare ad investire in borsa in modo sicuro e consapevole, anche con piccole somme.",
    category: "Investimenti",
    author: "Team di Analisti ProsperItalia",
    date: "2023-03-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
  },
  {
    id: "budget-mensile-efficace",
    title: "Come Creare un Budget Mensile Efficace e Rispettarlo",
    excerpt: "Un budget ben pianificato è la base per una gestione finanziaria sana. Ecco come crearlo e mantenerlo nel tempo.",
    category: "Budgeting",
    author: "Team di Analisti ProsperItalia",
    date: "2023-02-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
  },
  {
    id: "risparmiare-spese-quotidiane",
    title: "10 Strategie Pratiche per Risparmiare sulle Spese Quotidiane",
    excerpt: "Piccoli cambiamenti nelle abitudini quotidiane possono portare a significativi risparmi nel lungo periodo.",
    category: "Risparmio",
    author: "Team di Analisti ProsperItalia",
    date: "2023-01-18",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80",
  },
];

const Index = () => {
  return (
    <Layout
      title="La Tua Guida alla Finanza Personale"
      description="Scopri strategie efficaci per risparmiare, investire e gestire le tue finanze personali con consigli di esperti e guide pratiche."
    >
      <HeroSection
        title="Costruisci un Futuro Finanziario Solido"
        subtitle="Strategie pratiche, consigli di esperti e guide complete per gestire al meglio le tue finanze personali."
        image="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80"
        buttonText="Inizia Ora"
        buttonLink="/blog"
      />

      {/* Temi Principali */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Temi Principali</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Esplora le aree chiave della finanza personale per migliorare la tua situazione economica e raggiungere i tuoi obiettivi finanziari.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturedCard
              title="Budgeting"
              description="Impara a creare e mantenere un budget efficace per controllare le tue finanze e raggiungere i tuoi obiettivi."
              icon={<Wallet size={36} />}
              link="/budgeting"
            />
            <FeaturedCard
              title="Investimenti"
              description="Scopri diverse strategie di investimento adatte ai tuoi obiettivi finanziari e alla tua tolleranza al rischio."
              icon={<TrendingUp size={36} />}
              link="/investimenti"
            />
            <FeaturedCard
              title="Risparmio"
              description="Tecniche e consigli pratici per risparmiare denaro nella vita quotidiana e costruire un fondo d'emergenza."
              icon={<PiggyBank size={36} />}
              link="/risparmio"
            />
            {/* <FeaturedCard
              title="Gestione Finanziaria"
              description="Ottimizza la gestione delle tue finanze con strumenti e strategie per monitorare e migliorare la tua situazione."
              icon={<LineChart size={36} />}
              link="/blog/categoria/gestione-finanziaria"
            /> */}
          </div>
        </div>
      </section>

      {/* Articoli Recenti */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Articoli Recenti</h2>
            <Link to="/blog" className="text-primary hover:text-primary/80 font-medium">
              Vedi tutti gli articoli →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <ArticleCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                category={article.category}
                author={article.author}
                date={article.date}
                readTime={article.readTime}
                image={article.image}
              />
            ))}
          </div>
        </div>
      </section>

      <CallToAction
        title="Pronto a prendere il controllo delle tue finanze?"
        description="Accedi alle nostre guide complete e strumenti pratici per migliorare la tua situazione finanziaria."
        buttonText="Inizia il tuo percorso"
        buttonLink="/blog"
      />

      <Newsletter />
    </Layout>
  );
};

export default Index;
