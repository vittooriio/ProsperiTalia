import { useState } from "react";
import Layout from "../components/layout/Layout";
import ArticleCard from "../components/ui/ArticleCard";
import { Search } from "lucide-react";
import { Helmet } from "react-helmet";

// Mock data for blog articles
const articles = [
  {
    id: "investire-in-borsa-guida",
    title: "Come Iniziare ad Investire in Borsa: Guida Completa per Principianti",
    excerpt: "Scopri i passi fondamentali per iniziare ad investire in borsa in modo sicuro e consapevole, anche con piccole somme.",
    category: "Investimenti",
    author: "Marco Bianchi",
    date: "2023-03-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
  },
  {
    id: "budget-mensile-efficace",
    title: "Come Creare un Budget Mensile Efficace e Rispettarlo",
    excerpt: "Un budget ben pianificato è la base per una gestione finanziaria sana. Ecco come crearlo e mantenerlo nel tempo.",
    category: "Budgeting",
    author: "Laura Ferrari",
    date: "2023-02-28",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
  },
  {
    id: "risparmiare-spese-quotidiane",
    title: "10 Strategie Pratiche per Risparmiare sulle Spese Quotidiane",
    excerpt: "Piccoli cambiamenti nelle abitudini quotidiane possono portare a significativi risparmi nel lungo periodo.",
    category: "Risparmio",
    author: "Giovanni Russo",
    date: "2023-01-18",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?auto=format&fit=crop&q=80",
  },
  {
    id: "diversificare-investimenti",
    title: "L'Importanza della Diversificazione negli Investimenti",
    excerpt: "Perché non dovresti mai mettere tutte le uova nello stesso paniere e come costruire un portafoglio diversificato.",
    category: "Investimenti",
    author: "Marco Bianchi",
    date: "2023-01-05",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?auto=format&fit=crop&q=80",
  },
  {
    id: "fondo-emergenza",
    title: "Come Costruire un Fondo di Emergenza Solido",
    excerpt: "Un fondo di emergenza è la base della sicurezza finanziaria. Ecco come crearlo e quanto dovrebbe essere grande.",
    category: "Risparmio",
    author: "Laura Ferrari",
    date: "2022-12-10",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1633158829799-56bdf8cd93a7?auto=format&fit=crop&q=80",
  },
  {
    id: "errori-comuni-investimenti",
    title: "5 Errori Comuni che i Principianti Fanno negli Investimenti",
    excerpt: "Evita questi errori frequenti che possono compromettere i tuoi risultati negli investimenti e la tua sicurezza finanziaria.",
    category: "Investimenti",
    author: "Giovanni Russo",
    date: "2022-11-25",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?auto=format&fit=crop&q=80",
  },
  {
    id: "pianificare-pensione-anticipata",
    title: "Come Pianificare la Pensione Anticipata: La Guida FIRE",
    excerpt: "Scopri il movimento FIRE (Financial Independence, Retire Early) e come pianificare una pensione anticipata con strategie concrete.",
    category: "Pensione",
    author: "Sofia Ricci",
    date: "2023-04-20",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1473186505569-9c61870c11f9?auto=format&fit=crop&q=80",
  },
  {
    id: "investimenti-sostenibili",
    title: "Investimenti ESG: Come Investire Responsabilmente",
    excerpt: "Una guida agli investimenti sostenibili che rispettano criteri ambientali, sociali e di governance per un futuro migliore.",
    category: "Investimenti",
    author: "Marco Bianchi",
    date: "2023-05-12",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1464692805480-a69dfaafdb0d?auto=format&fit=crop&q=80",
  },
  {
    id: "criptovalute-guida-principianti",
    title: "Criptovalute: Una Guida Completa per Principianti",
    excerpt: "Dalle basi di Bitcoin ed Ethereum alle strategie di investimento: tutto quello che devi sapere sul mondo crypto.",
    category: "Crypto",
    author: "Alessandro Moretti",
    date: "2023-06-05",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80",
  },
  {
    id: "mutuo-casa-consigli",
    title: "Come Ottenere il Miglior Mutuo per la Casa: 7 Consigli Essenziali",
    excerpt: "Evita errori costosi e trova il mutuo più adatto alle tue esigenze con questa guida pratica all'acquisto della casa.",
    category: "Mutui",
    author: "Laura Ferrari",
    date: "2023-07-18",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80",
  },
  {
    id: "tasse-regime-forfettario",
    title: "Regime Forfettario: Vantaggi, Svantaggi e Come Funziona",
    excerpt: "Una guida completa al regime fiscale agevolato per partite IVA: calcoli, requisiti e consigli per ottimizzare la tua situazione fiscale.",
    category: "Tasse",
    author: "Paolo Verdi",
    date: "2023-08-22",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1554224155-8947eb1c8a40?auto=format&fit=crop&q=80",
  },
  {
    id: "obiettivi-finanziari-smart",
    title: "Come Impostare Obiettivi Finanziari SMART",
    excerpt: "La tecnica SMART applicata alla finanza personale: crea obiettivi specifici, misurabili, raggiungibili, rilevanti e temporamente definiti.",
    category: "Pianificazione",
    author: "Sofia Ricci",
    date: "2023-09-10",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80",
  },
  {
    id: "educazione-finanziaria-bambini",
    title: "Insegnare l'Educazione Finanziaria ai Bambini: Guida per Genitori",
    excerpt: "Come educare i tuoi figli al denaro, al risparmio e agli investimenti fin dalla giovane età per garantire loro un futuro finanziario solido.",
    category: "Educazione",
    author: "Laura Ferrari",
    date: "2023-10-05",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1484820540004-14229fe36ca4?auto=format&fit=crop&q=80",
  },
  {
    id: "investire-immobili-rendita",
    title: "Investire in Immobili per Generare Rendita Passiva",
    excerpt: "Strategie per creare un portafoglio immobiliare che generi reddito passivo costante: dall'acquisto alla gestione efficiente degli affitti.",
    category: "Immobili",
    author: "Giovanni Russo",
    date: "2023-11-14",
    readTime: "9 min",
    image: "https://images.unsplash.com/photo-1560518883-3d5adc7f2430?auto=format&fit=crop&q=80",
  },
  {
    id: "analisi-fondamentale-azioni",
    title: "Analisi Fondamentale delle Azioni: Guida Pratica",
    excerpt: "Come valutare un'azienda prima di investire: indicatori chiave, rapporti finanziari e metriche fondamentali per decisioni consapevoli.",
    category: "Investimenti",
    author: "Marco Bianchi",
    date: "2023-12-08",
    readTime: "11 min",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80",
  },
  {
    id: "minimizzare-tasse-legalmente",
    title: "Come Minimizzare le Tasse Legalmente: Strategie di Pianificazione Fiscale",
    excerpt: "Ottimizza la tua situazione fiscale conoscendo detrazioni, deduzioni e strategie legali per ridurre il carico fiscale nel rispetto della legge.",
    category: "Tasse",
    author: "Paolo Verdi",
    date: "2024-01-15",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1586486855514-8c633cc8b83f?auto=format&fit=crop&q=80",
  },
  {
    id: "finanza-comportamentale-errori",
    title: "Finanza Comportamentale: Come Evitare Errori Cognitivi negli Investimenti",
    excerpt: "I bias cognitivi che influenzano le decisioni finanziarie e come riconoscerli per migliorare i risultati dei tuoi investimenti.",
    category: "Psicologia",
    author: "Sofia Ricci",
    date: "2024-02-20",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80",
  },
  {
    id: "prestiti-personali-confronto",
    title: "Come Scegliere il Prestito Personale Giusto: Guida al Confronto",
    excerpt: "TAEG, TAN e altre sigle importanti per confrontare i prestiti personali e scegliere l'opzione più conveniente per le tue esigenze.",
    category: "Prestiti",
    author: "Laura Ferrari",
    date: "2024-03-12",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1579621970590-9d624316904b?auto=format&fit=crop&q=80",
  },
];

// Available categories
const categories = [
  "Tutti", 
  "Investimenti", 
  "Risparmio", 
  "Budgeting", 
  "Gestione Finanziaria", 
  "Pensione", 
  "Crypto", 
  "Mutui", 
  "Tasse", 
  "Pianificazione", 
  "Educazione", 
  "Immobili", 
  "Psicologia", 
  "Prestiti"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tutti");

  // Filter articles based on search query and selected category
  const filteredArticles = articles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Tutti" || article.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Crea i dati strutturati per la pagina blog
  const blogData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "headline": "Blog di ProsperiTalia - Finanza Personale",
    "description": "Articoli, guide e consigli pratici sulla gestione finanziaria, investimenti, risparmio e budgeting su ProsperiTalia.",
    "url": "https://prosperitalia.net/blog",
    "author": {
      "@type": "Organization",
      "name": "ProsperiTalia Team",
      "url": "https://prosperitalia.net/chi-siamo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ProsperiTalia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prosperitalia.net/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://prosperitalia.net/blog"
    },
    "blogPost": filteredArticles.map(article => ({
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.excerpt,
      "author": {
        "@type": "Person",
        "name": article.author
      },
      "datePublished": article.date,
      "image": article.image,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://prosperitalia.net/blog/${article.id}`
      },
      "articleSection": article.category
    }))
  };

  return (
    <Layout
      title="Blog di Finanza Personale | ProsperiTalia"
      description="Articoli, guide e consigli pratici sulla gestione finanziaria, investimenti, risparmio e budgeting su ProsperiTalia."
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(blogData)}
        </script>
      </Helmet>
      <section className="bg-gray-50 py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-6 text-center">Blog di ProsperiTalia</h1>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Scopri articoli, guide e consigli pratici per migliorare la tua gestione finanziaria, aumentare i tuoi risparmi e investire in modo intelligente.
          </p>

          {/* Search and Filter */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search bar */}
              <div className="flex-grow relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Cerca articoli..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Cerca articoli"
                />
              </div>

              {/* Category filter */}
              <div className="flex-shrink-0">
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Filtra per categoria
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Filtra articoli per categoria"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((article) => (
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
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">
                Nessun articolo trovato per la tua ricerca. Prova con termini diversi o un'altra categoria.
              </p>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
