// src/pages/blog/InvestireInBorsaGuida.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { usePageMetadata } from '@/hooks/usePageMetadata';
// import ArticleCard from '@/components/ui/ArticleCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, TrendingUp, User, Calendar, Clock, ArrowLeft, AlertTriangle, Banknote, Target, ArrowRight, BookOpen, HelpCircle, Scale, Feather, Zap, Goal, ShieldCheck, Microscope, Users, Repeat, FileText, Lightbulb, Map, ShoppingCart, Sparkles, Anchor } from 'lucide-react';

// --- Dati Specifici per questa Pagina (SEO Ottimizzati) ---
const pageTitle = 'Come Iniziare a Investire in Borsa nel 2025: Guida Completa per Principianti Assoluti';
const pageSlug = 'investire-borsa-guida-completa-principianti';
const pageDescription = 'La guida definitiva 2025 per principianti che spiega passo-passo come iniziare a investire in borsa da zero. Dalla scelta del broker all\'analisi di azioni/ETF, strategie PAC e gestione del rischio.';
const BASE_URL = 'https://prosperitalia.net'; // IMPORTANTE: Sostituisci con il tuo dominio reale
const pageUrl = `${BASE_URL}/blog/${pageSlug}`;

// --- IMMAGINI ESEMPLIFICATIVE DA UNSPLASH ---
// !! ATTENZIONE: Si consiglia di scaricare, ottimizzare e ospitare le proprie immagini !!
const unsplashOgImage = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80'; // Esempio: Trading screen
const unsplashHeroImage = 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'; // Esempio: Trading screen (leggermente diverso per hero)
const placeholderPublisherLogoUrl = `${BASE_URL}/favicon.ico`; // MANTIENI IL LOGO REALE QUI

const authorName = 'Team di Analisti ProsperItalia';
const authorUrl = `${BASE_URL}/chi-siamo`;
const publisherName = "ProsperItalia";
const publicationDate = '2025-04-07';
const lastUpdatedDate = '2025-05-20';
const estimatedReadTime = '18 minuti';

// --- Dati Strutturati JSON-LD ---
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": pageTitle,
  "description": pageDescription,
  "image": [unsplashOgImage, unsplashHeroImage], // Usa URL Unsplash
  "datePublished": publicationDate,
  "dateModified": lastUpdatedDate,
  "author": { "@type": "Organization", "name": authorName, "url": authorUrl },
  "publisher": {
    "@type": "Organization", "name": publisherName,
    "logo": { "@type": "ImageObject", "url": placeholderPublisherLogoUrl, "width": 600, "height": 60 } // Usa placeholder logo reale
  },
  "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
  "keywords": "investire in borsa, come iniziare a investire, guida investimenti borsa, investire per principianti, borsa italiana, azioni, ETF, broker online italia, PAC, piano accumulo capitale, gestione rischio investimenti, analisi fondamentale, analisi tecnica, finanza personale 2025, investire da zero, guida completa borsa",
  "articleSection": "Guida Investimenti, Finanza Personale per Principianti",
  "timeRequired": `PT${estimatedReadTime.split(' ')[0]}M`,
};

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto capitale serve per iniziare ad investire in borsa?",
        "acceptedAnswer": { "@type": "Answer", "text": "Non esiste una cifra minima universale, dipende dal broker e dallo strumento. Molti broker moderni permettono di iniziare anche con poche decine o centinaia di euro, specialmente tramite Piani di Accumulo (PAC) su ETF. L'importante è iniziare con una somma che ti senti a tuo agio a investire e che puoi permetterti di non toccare per diversi anni. La costanza è più importante dell'importo iniziale." }
      },
      {
        "@type": "Question",
        "name": "È davvero rischioso investire in borsa?",
        "acceptedAnswer": { "@type": "Answer", "text": "Sì, ogni investimento comporta un rischio di perdita del capitale. Tuttavia, il livello di rischio può essere gestito attraverso la diversificazione, un orizzonte temporale lungo e scelte di investimento consapevoli. Non investire in borsa è anch'esso un rischio (quello di perdere potere d'acquisto a causa dell'inflazione). Il rischio maggiore per un principiante è agire senza conoscenza o spinto dalle emozioni." }
      },
      {
        "@type": "Question",
        "name": "Meglio iniziare con azioni singole o con ETF?",
        "acceptedAnswer": { "@type": "Answer", "text": "Per la stragrande maggioranza dei principianti, gli ETF sono la scelta migliore per iniziare. Offrono diversificazione immediata a basso costo, riducendo significativamente il rischio rispetto alla selezione di singole azioni, che richiede analisi più approfondite e comporta una maggiore volatilità. Puoi sempre aggiungere azioni singole al tuo portafoglio in un secondo momento, quando avrai acquisito più esperienza." }
      },
      {
        "@type": "Question",
        "name": "Quanto spesso devo controllare i miei investimenti?",
        "acceptedAnswer": { "@type": "Answer", "text": "Se stai investendo a lungo termine, controllare troppo spesso può essere controproducente e indurre ansia o decisioni affrettate. Un controllo generale del portafoglio ogni 3-6 mesi è solitamente sufficiente per verificare l'andamento complessivo e valutare eventuali necessità di ribilanciamento (una o due volte l'anno). Evita di controllare i prezzi ogni giorno!" }
      },
      {
        "@type": "Question",
        "name": "Posso perdere tutti i miei soldi investendo in borsa?",
        "acceptedAnswer": { "@type": "Answer", "text": "Teoricamente, se investi tutto in una singola azione di un'azienda che fallisce, potresti perdere l'intero capitale investito in quel titolo. Tuttavia, investendo in modo diversificato (specialmente tramite ETF globali) e scegliendo broker regolamentati e sicuri, il rischio di perdere *tutto* il capitale è estremamente basso, quasi nullo in condizioni normali di mercato e con un approccio sensato. Il rischio principale è subire perdite temporanee durante le fasi di ribasso del mercato." }
      }
    ]
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home", 
      "item": BASE_URL
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Investimenti", 
      "item": `${BASE_URL}/investimenti`
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": pageTitle,
      "item": pageUrl
    }
  ]
};

// Articoli correlati con immagini Unsplash ESEMPLIFICATIVE
const relatedArticlesData = [
    { id: 'investimenti-alternativi', title: 'Investimenti Alternativi (2025): Guida a REIT, Materie Prime, Crypto e Altro', excerpt: 'Esplora il mondo degli investimenti alternativi nel 2025: REIT, materie prime (oro), private equity, criptovalute. Guida per capire rischi, opportunità e accessibilità.', category: 'Strumenti Finanziari', author: authorName, date: '2025-04-10', readTime: '16 min', image: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', slug: 'investimenti-alternativi' }, // Immagine: Warning light
    { id: 'obbligazioni', title: 'Guida Completa alle Obbligazioni e Reddito Fisso (2025): Investire per Principianti', excerpt: 'Scopri come investire in obbligazioni (titoli di stato, corporate) e strumenti a reddito fisso nel 2025. Guida completa per principianti su tassi, rischi, rendimenti e diversificazione.', category: 'Strumenti Finanziari', author: authorName, date: '2025-04-15', readTime: '14 min', image: 'https://images.unsplash.com/photo-1559067096-49ebca3406aa?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', slug: 'obbligazioni' }, // Immagine: Pie chart / Diversification
   ];


// --- Componente React Pagina ---
const InvestireInBorsaGuida: React.FC = () => {

  usePageMetadata({
    title: pageTitle,
    description: pageDescription,
    canonicalUrl: pageUrl,
    ogImageUrl: unsplashOgImage, // Usa URL Unsplash
    ogType: 'article',
    jsonLd: [articleJsonLd, faqJsonLd, breadcrumbJsonLd],
  });

  return (
    <Layout>
      <article className="bg-gray-50 dark:bg-gray-900">

        {/* === Sezione Hero === */}
        <header className="relative h-[45vh] md:h-[55vh]">
          <img
            src={unsplashHeroImage} // Usa URL Unsplash
            alt="Grafico azionario su schermo con freccia verde in salita - Guida completa per iniziare a investire in borsa"
            className="object-cover w-full h-full"
            loading="eager"
            fetchPriority="high"
            width={1470} // Fornisci dimensioni se possibile
            height={827} // Fornisci dimensioni se possibile
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent" aria-hidden="true"></div>
          <div className="container absolute inset-0 flex flex-col justify-end pb-12 md:pb-20">
            <div className="text-white max-w-3xl">
              <div className="mb-3">
                 <Link to="/blog" className="text-sm text-gray-200 hover:text-white transition-colors duration-300 inline-flex items-center">
                    <ArrowLeft size={16} className="mr-2" /> Torna alle Guide sugli Investimenti
                 </Link>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight tracking-tight text-shadow-lg">
                {pageTitle}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 mb-5 text-shadow-md leading-relaxed">
                Scopri tutto quello che devi sapere per muovere i primi passi nel mondo degli investimenti azionari nel 2025, anche se parti da zero. Una guida pratica e senza fronzoli.
              </p>
              <div className="flex flex-wrap items-center text-xs md:text-sm gap-x-5 gap-y-2 text-gray-200">
                <span className="flex items-center font-medium">
                  <User size={14} className="mr-1.5 text-primary" /> Di {authorName}
                </span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1.5 text-primary" /> Pubbl.: <time dateTime={publicationDate}>{publicationDate}</time>
                </span>
                 <span className="flex items-center">
                  <Clock size={14} className="mr-1.5 text-primary" /> Aggior.: <time dateTime={lastUpdatedDate}>{lastUpdatedDate}</time>
                </span>
                <span className="flex items-center">
                  <BookOpen size={14} className="mr-1.5 text-primary" /> Lettura: {estimatedReadTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* === Corpo Principale dell'Articolo === */}
        <div className="container py-12 md:py-16 lg:py-20">
          <main className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-10 prose prose-lg dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-gray-900 dark:prose-headings:text-white prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:font-semibold prose-headings:scroll-mt-24">

            {/* --- Sezione Introduzione --- */}
            <section id="introduzione" aria-labelledby="introduzione-title" className="mb-12">
               {/* Titolo H2 implicito */}
              <h2 id="introduzione-title" className="sr-only">Introduzione alla Guida per Investire in Borsa</h2> {/* Titolo per screen reader */}
              <p className="lead text-xl mb-6 font-normal">
                Sei affascinato dal potenziale della Borsa Valori ma ti senti sopraffatto da termini come 'azioni', 'ETF' e 'broker'? Non preoccuparti, sei nel posto giusto. Questa guida è stata creata <strong>specificamente per principianti come te</strong>, desiderosi di capire <strong className='text-primary'>come iniziare concretamente ad investire in borsa</strong> nel 2025, in modo ragionato e sicuro.
              </p>
              <p className="mb-4">
                Lascia da parte il timore del linguaggio tecnico. Ti guideremo <strong>passo dopo passo</strong> attraverso un percorso chiaro: dalla comprensione del perché investire, alla scelta degli strumenti giusti (azioni ed ETF), fino all'apertura del conto con un broker online e alla definizione di una strategia di lungo termine come il PAC (Piano di Accumulo Capitale).
              </p>
              <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-md border border-gray-200 dark:border-gray-700 mb-6">
                <p className="font-semibold mb-3 text-base text-gray-800 dark:text-gray-200">In questa guida scoprirai:</p>
                <ul className="list-none space-y-2 mb-0 pl-0 text-sm">
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span>I <strong className='text-secondary'>vantaggi concreti</strong> dell'investire (e perché il tempo è il tuo alleato).</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span>Le <strong className='text-secondary'>fondamenta indispensabili</strong> prima di iniziare (fondo emergenza, obiettivi).</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span><strong className='text-secondary'>Cos'è e come funziona</strong> realmente il mercato azionario, spiegato facile.</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span>Come <strong className='text-secondary'>scegliere il broker online</strong> migliore per le tue esigenze in Italia.</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span>Differenze e analisi di <strong className='text-secondary'>Azioni vs ETF</strong>: cosa comprare all'inizio?</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span><strong className='text-secondary'>Strategie efficaci</strong> per principianti (focus sul lungo termine e PAC).</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span>L'importanza cruciale della <strong className='text-secondary'>gestione del rischio</strong> e della <strong className='text-secondary'>diversificazione</strong>.</span></li>
                  <li className="flex items-start"><CheckCircle size={16} className="mr-2 mt-0.5 text-green-600 flex-shrink-0" /><span>Consigli pratici per <strong className='text-secondary'>evitare gli errori</strong> più costosi.</span></li>
                </ul>
              </div>
              
            {/* --- Sezione Disclaimer --- */}
             <section style={{marginBottom:30}} id="disclaimer" aria-labelledby="disclaimer-title" className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
                <Alert variant="default" className="bg-orange-50 border-l-4 border-orange-500 text-orange-800 dark:bg-orange-900/30 dark:border-orange-600 dark:text-orange-300">
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <AlertTitle id="disclaimer-title" className="font-semibold">Avvertenza Importante (Disclaimer)</AlertTitle>
                    <AlertDescription className="text-sm">
                    Le informazioni fornite in questa guida hanno <strong className='text-orange-700 dark:text-orange-200'>esclusivamente scopo informativo ed educativo</strong>. Non costituiscono in alcun modo consulenza finanziaria personalizzata, raccomandazione all'investimento, sollecitazione al pubblico risparmio, né consulenza legale o fiscale. Investire nei mercati finanziari comporta <strong className='text-orange-700 dark:text-orange-200'>rischi significativi</strong>, inclusa la possibilità di perdere l'intero capitale investito. Le performance passate non sono indicative di quelle future. Prima di prendere qualsiasi decisione di investimento, è fondamentale condurre le proprie ricerche approfondite (<em className='italic'>due diligence</em>) e/o rivolgersi a un <strong className='text-orange-700 dark:text-orange-200'>consulente finanziario indipendente</strong> regolarmente iscritto all'Albo OCF, che possa valutare la tua specifica situazione personale, finanziaria, i tuoi obiettivi e la tua propensione al rischio. {publisherName} declina ogni responsabilità per eventuali decisioni di investimento basate, in tutto o in parte, sulle informazioni contenute in questa pagina.
                    </AlertDescription>
                </Alert>
             </section>

              <Alert variant="default" className="bg-blue-50 border-l-4 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:border-blue-600 dark:text-blue-300 mb-6">
                <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                <AlertTitle className="font-semibold">Il Tuo Punto di Partenza per Investire</AlertTitle>
                <AlertDescription>
                  Questa guida è densa di informazioni. Prenditi il tempo per leggerla attentamente. L'investimento consapevole inizia dalla conoscenza. Iniziamo questo viaggio insieme!
                </AlertDescription>
              </Alert>
            </section>

            {/* --- Sezione Perché Investire --- */}
            <section id="perche-investire" aria-labelledby="perche-investire-title" className="mb-12 scroll-mt-24">
              <h2 id="perche-investire-title" className="text-3xl font-bold mb-5 flex items-center"><TrendingUp size={28} className="mr-3 text-primary" />Perché Dovresti Iniziare a Investire in Borsa (Anche Oggi)?</h2>
              <p className="mb-4">
                Tenere i risparmi fermi sul conto corrente può sembrare sicuro, ma in realtà l'<strong>inflazione</strong> ne erode silenziosamente il valore anno dopo anno. Investire in borsa offre l'opportunità concreta di <strong className='text-success'>far crescere il tuo capitale</strong> nel tempo, superando l'aumento dei prezzi e costruendo le basi per i tuoi obiettivi futuri: che sia la pensione integrativa, l'acquisto di una casa, o semplicemente una maggiore serenità finanziaria.
              </p>
              <p className="mb-4">
                Nonostante le inevitabili fluttuazioni e le crisi periodiche, storicamente il mercato azionario globale ha dimostrato di poter offrire rendimenti medi annui superiori ad altre classi di investimento nel lungo periodo. Il motore di questa crescita? Il potente effetto dell'<strong>interesse composto</strong>.
              </p>
              <Card className="bg-green-50 border border-green-200 dark:bg-green-900/30 dark:border-green-700 mb-6 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-xl text-green-800 dark:text-green-300 flex items-center"><Zap size={20} className="mr-2" />Cos'è l'Interesse Composto e Perché è Fondamentale?</CardTitle>
                </CardHeader>
                <CardContent className="text-green-700 dark:text-green-400">
                  <p>È l'interesse calcolato non solo sul capitale iniziale, ma anche sugli interessi accumulati precedentemente. In pratica, i tuoi guadagni iniziano a generare altri guadagni. Esempio semplice: 1000€ al 7% annuo diventano 1070€ dopo 1 anno. Il secondo anno, il 7% si calcola su 1070€ (non più 1000€). Su orizzonti di 10, 20, 30 anni, questo effetto "palla di neve" può fare una differenza enorme sul risultato finale del tuo investimento. <strong className='text-green-800 dark:text-green-200'>Prima inizi, più tempo dai all'interesse composto per lavorare per te.</strong></p>
                </CardContent>
              </Card>
            </section>

             {/* --- Sezione Prerequisiti --- */}
            <section id="prerequisiti" aria-labelledby="prerequisiti-title" className="mb-12 scroll-mt-24">
              <h2 id="prerequisiti-title" className="text-3xl font-bold mb-5 flex items-center"><ShieldCheck size={28} className="mr-3 text-primary" />Prima di Investire un Euro: 4 Passi Fondamentali</h2>
              <p className="mb-6">
                L'entusiasmo è un ottimo motore, ma partire senza le giuste basi è come costruire una casa senza fondamenta: rischioso. Ignorare questi prerequisiti è uno degli errori più comuni (e costosi) per chi inizia.
              </p>
              <div className="space-y-6">
                {/* Sottosezione Obiettivi */}
                <div id="obiettivi">
                    <h3 className="text-2xl font-semibold mb-3 flex items-center"><Goal size={22} className="mr-2 text-secondary" />1. Definisci Obiettivi Chiari e Orizzonte Temporale</h3>
                    <p className="mb-3">Perché stai investendo? "Guadagnare di più" è troppo vago. Sii specifico: "Accumulare 20.000€ per l'acconto di una casa tra 7 anni", oppure "Integrare la pensione tra 25 anni". L'obiettivo determina la strategia e l'orizzonte temporale (quanto a lungo puoi lasciare i soldi investiti) influenza la tua tolleranza al rischio.</p>
                </div>
                 {/* Sottosezione Fondo Emergenza */}
                <div id="fondo-emergenza">
                    <h3 className="text-2xl font-semibold mb-3 flex items-center"><Banknote size={22} className="mr-2 text-secondary" />2. Crea un Solido Fondo di Emergenza (Non Negoziabile!)</h3>
                    <p className="mb-3">Prima ancora di pensare alla Borsa, devi avere da parte, in un posto sicuro e facilmente accessibile (es. conto deposito svincolato), un <strong className="text-red-600 dark:text-red-400">fondo di emergenza</strong>. Questo cuscinetto deve coprire almeno 3-6 mesi delle tue spese essenziali (affitto/mutuo, bollette, cibo, trasporti). Serve per affrontare imprevisti (perdita lavoro, spese mediche) senza dover disinvestire nel momento meno opportuno, magari in perdita.</p>
                     <Alert variant="destructive" className="mt-4">
                      <AlertTriangle className="h-5 w-5" />
                      <AlertTitle className="font-semibold">Regola d'Oro: MAI Investire Soldi Essenziali!</AlertTitle>
                      <AlertDescription>
                        Investi SOLO denaro che puoi permetterti di non toccare per anni (minimo 3-5 anni, idealmente di più). Il mercato ha alti e bassi; non devi essere costretto a vendere durante un ribasso perché ti servono quei soldi.
                      </AlertDescription>
                    </Alert>
                </div>
                 {/* Sottosezione Tolleranza Rischio */}
                 <div id="tolleranza-rischio">
                    <h3 className="text-2xl font-semibold mb-3 flex items-center"><Scale size={22} className="mr-2 text-secondary" />3. Valuta Onestamente la Tua Tolleranza al Rischio</h3>
                    <p className="mb-3">Come reagiresti se il valore del tuo portafoglio scendesse del 10%, 20% o anche di più in un breve periodo? La tua capacità (e volontà) di sopportare queste oscillazioni senza farti prendere dal panico è la tua tolleranza al rischio. Dipende da età, obiettivi, situazione finanziaria e personalità. Essere onesti qui è cruciale per costruire un portafoglio adatto a te.</p>
                </div>
                 {/* Sottosezione Formazione Base */}
                 <div id="formazione-base">
                    <h3 className="text-2xl font-semibold mb-3 flex items-center"><BookOpen size={22} className="mr-2 text-secondary" />4. Acquisisci le Conoscenze di Base (Sei già sulla buona strada!)</h3>
                    <p className="mb-3">Non devi diventare un trader professionista, ma capire i concetti fondamentali (cosa sono azioni, ETF, diversificazione, rischio/rendimento) è essenziale per prendere decisioni informate. Questa guida è un ottimo inizio. Continua a leggere, informarti da fonti affidabili e non smettere mai di imparare.</p>
                </div>
              </div>
            </section>

            {/* --- Sezione Come Funziona Mercato --- */}
            <section id="mercato-azionario" aria-labelledby="mercato-azionario-title" className="mb-12 scroll-mt-24">
                <h2 id="mercato-azionario-title" className="text-3xl font-bold mb-5 flex items-center"><Microscope size={28} className="mr-3 text-primary" />Come Funziona la Borsa: Il Mercato Azionario in Pillole</h2>
                <p className="mb-4">Immagina la Borsa (o mercato azionario) come un enorme mercato globale e regolamentato dove vengono scambiate quote di proprietà delle aziende: le <strong>azioni</strong>. Ecco gli attori principali:</p>
                <ul className="list-none space-y-3 mb-4 pl-0">
                    <li className="flex items-start"><Feather size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" /><span><strong>Aziende Quotate:</strong> Società che decidono di "quotarsi" in Borsa per raccogliere capitali vendendo azioni al pubblico, finanziando così la loro crescita.</span></li>
                    <li className="flex items-start"><Feather size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" /><span><strong>Azioni (Stocks/Equities):</strong> Rappresentano una piccola frazione di proprietà di un'azienda. Comprandole, diventi socio (azionista).</span></li>
                    <li className="flex items-start"><Feather size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" /><span><strong>Investitori:</strong> Individui (come te!), fondi pensione, banche, ecc., che comprano azioni sperando in un aumento del loro valore nel tempo (<strong className='text-success'>capital gain</strong>) e/o per ricevere parte degli utili aziendali (<strong className='text-info'>dividendi</strong>).</span></li>
                    <li className="flex items-start"><Feather size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" /><span><strong>Borse Valori (Es. Euronext Milan, NYSE, Nasdaq):</strong> Piattaforme fisiche o elettroniche dove avvengono gli scambi in modo ordinato, trasparente e regolamentato.</span></li>
                    <li className="flex items-start"><Feather size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" /><span><strong>Broker/Intermediari Finanziari:</strong> Società (banche o piattaforme online specializzate) autorizzate che forniscono agli investitori l'accesso ai mercati e eseguono gli ordini di acquisto/vendita per loro conto.</span></li>
                    <li className="flex items-start"><Feather size={16} className="mr-2 mt-1 text-secondary flex-shrink-0" /><span><strong>Prezzo delle Azioni:</strong> Determinato continuamente dall'incontro tra domanda (chi vuole comprare) e offerta (chi vuole vendere). È influenzato da innumerevoli fattori: risultati aziendali, notizie economiche e politiche, tassi di interesse, sentiment generale degli investitori, ecc.</span></li>
                </ul>
                 <p className='italic'>In sintesi: comprando azioni, scommetti sulla crescita e sul successo futuro delle aziende in cui investi.</p>
            </section>

             {/* --- Guida Passo Passo --- */}
            <section id="come-iniziare" aria-labelledby="come-iniziare-title" className="mb-12 scroll-mt-24">
              <h2 id="come-iniziare-title" className="text-3xl font-bold mb-6 flex items-center"><Map size={28} className="mr-3 text-primary" />La Tua Mappa Operativa: 7 Passi per Iniziare a Investire in Borsa</h2>

              {/* Passo 1: Scegliere il Broker */}
              <div id="scegliere-broker" className="mb-8 p-5 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center"><Users size={24} className="mr-2 text-secondary" />Passo 1: Scegliere il Broker Online: Il Tuo Partner per Investire</h3>
                <p className="mb-4">Il broker è l'intermediario che ti permette di accedere ai mercati. Sceglierlo con cura è fondamentale. Valuta questi aspetti chiave per trovare il <strong className='text-info'>miglior broker per le tue esigenze di principiante</strong>:</p>
                <ul className="list-disc list-inside space-y-2 mb-5 pl-4">
                    <li><strong>Costi e Commissioni Trasparenti:</strong> Analizza le commissioni per eseguito su Borsa Italiana e mercati esteri, eventuali costi fissi (tenuta conto, inattività), spread (differenza prezzo acquisto/vendita, specie su CFD/derivati), costi di cambio valuta. Cerca strutture chiare e adatte alla tua operatività (es. PAC a zero commissioni su ETF).</li>
                    <li><strong>Piattaforma Intuitiva e Funzionale:</strong> Deve essere facile da usare, specialmente all'inizio. Valuta la presenza di un'app mobile efficiente, grafici chiari, dati informativi e strumenti di base per l'analisi.</li>
                    <li><strong>Mercati e Prodotti Accessibili:</strong> Verifica l'accesso a Euronext Milan (Borsa Italiana), ai principali mercati USA (NYSE, Nasdaq) ed Europei. Controlla la disponibilità di Azioni, ETF (fondamentali!), Obbligazioni. (Evita strumenti complessi come opzioni o futures all'inizio).</li>
                    <li><strong>Sicurezza, Regolamentazione e Garanzie:</strong> Assolutamente cruciale! Il broker deve essere autorizzato da autorità di vigilanza primarie (CONSOB per l'Italia, CySEC, BaFin, FCA...). Verifica l'adesione a fondi di compensazione che proteggono i tuoi asset in caso di fallimento del broker (fino a un certo limite).</li>
                    <li><strong>Deposito Minimo Iniziale:</strong> Alcuni richiedono importi minimi per aprire il conto, altri no.</li>
                    <li><strong>Qualità del Servizio Clienti:</strong> Supporto in italiano, tempi di risposta, canali disponibili (telefono, chat, email). Utile in caso di problemi.</li>
                    <li><strong>Regime Fiscale Offerto (Importante in Italia):</strong>
                        <ul className="list-circle list-inside pl-6 mt-1 text-sm">
                            <li><strong className='text-success'>Regime Amministrato:</strong> Il broker calcola e versa le tasse (26% su plusvalenze e dividendi) per te. Ideale per semplicità.</li>
                            <li><strong className='text-warning'>Regime Dichiarativo:</strong> Ricevi un report annuale e devi occuparti tu (o il commercialista) di dichiarare i redditi da capitale. Più complesso ma permette di compensare plus/minusvalenze tra diversi conti/anni.</li>
                        </ul>
                    </li>
                </ul>
                <Alert className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-600 dark:text-yellow-300">
                  <ShieldCheck className="h-5 w-5 text-yellow-600 dark:text-yellow-400"/>
                  <AlertTitle className="font-semibold">Consiglio dell'Esperto: Non Guardare Solo le Commissioni!</AlertTitle>
                  <AlertDescription>
                    Un broker a zero commissioni potrebbe recuperare costi altrove (es. spread più alti, costi di cambio). Valuta il pacchetto completo: sicurezza, piattaforma, prodotti e regime fiscale sono altrettanto (se non più) importanti del costo per eseguito, specialmente per investimenti a lungo termine. <Link to="/blog/scegliere-broker-online-italia" className="font-medium underline hover:text-yellow-900 dark:hover:text-yellow-200">Consulta il nostro confronto dettagliato dei migliori broker online per l'Italia.</Link>
                  </AlertDescription>
                </Alert>
              </div>

              {/* Passo 2: Aprire Conto */}
              <div id="aprire-conto" className="mb-8 p-5 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center"><FileText size={24} className="mr-2 text-secondary" />Passo 2: Aprire e Attivare il Tuo Conto di Investimento</h3>
                <p className="mb-4">Una volta scelto il broker, l'apertura del conto è quasi sempre un processo digitale:</p>
                <ol className="list-decimal list-inside space-y-2 pl-4">
                    <li><strong>Registrazione Online:</strong> Compila il form con i tuoi dati anagrafici e di contatto.</li>
                    <li><strong>Questionario MIFID:</strong> Rispondi alle domande sulla tua esperienza, conoscenza finanziaria, obiettivi e situazione patrimoniale. È un obbligo normativo per il broker per valutare l'adeguatezza dei prodotti per te. <strong className='text-warning'>Rispondi con sincerità!</strong></li>
                    <li><strong>Verifica Identità (KYC):</strong> Carica le copie digitali di un documento d'identità valido (carta d'identità o passaporto), del codice fiscale e spesso di una prova di residenza (es. bolletta recente).</li>
                    <li><strong>Primo Deposito (Funding):</strong> Trasferisci fondi sul tuo nuovo conto di investimento. I metodi più comuni sono bonifico bancario (potrebbe richiedere 1-2 giorni lavorativi) o carta di credito/debito (spesso istantaneo). Verifica eventuali commissioni sul deposito.</li>
                </ol>
              </div>

              {/* Passo 3: Cosa Comprare */}
              <div id="cosa-comprare" className="mb-8 p-5 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                 <h3 className="text-2xl font-semibold mb-4 flex items-center"><Target size={24} className="mr-2 text-secondary" />Passo 3: Scegliere Cosa Comprare: Il Dilemma Azioni vs ETF</h3>
                <p className="mb-4">È il momento di decidere su quali strumenti puntare i tuoi primi investimenti. Le due categorie principali per chi inizia sono:</p>

                {/* Sottosezione Azioni */}
                <div id="azioni" className="mb-6 pb-4 border-b border-gray-200 dark:border-gray-700 scroll-mt-24">
                    <h4 className="text-xl font-semibold mb-2 text-info">A) Azioni Singole: Diventare Socio di un'Azienda</h4>
                    <p className="mb-3">Acquisti direttamente quote di una specifica società quotata (es. Ferrari, Intesa Sanpaolo, Microsoft, Google). Il potenziale di rendimento può essere elevato se scegli aziende vincenti, ma il <strong className='text-danger'>rischio è concentrato</strong>: le sorti del tuo investimento dipendono fortemente da quella singola azienda.</p>
                    <p className="font-medium mb-2 text-sm">Come si analizzano (in breve)?</p>
                    <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                        <li><strong>Analisi Fondamentale:</strong> Valuta la salute finanziaria, la redditività, l'indebitamento e le prospettive di crescita future dell'azienda. Si studiano bilanci, indicatori come P/E (Prezzo/Utili), ROE (Return on Equity), si analizza il management, il settore e il vantaggio competitivo (se esiste). Richiede tempo e competenze.</li>
                         <li><strong>Analisi Tecnica:</strong> Si basa sullo studio dei grafici dei prezzi e dei volumi di scambio passati per identificare trend e pattern, con l'obiettivo di prevedere i movimenti futuri. Usa indicatori come Medie Mobili, RSI, MACD. <strong className="text-warning">(Approccio più speculativo, generalmente meno adatto per l'investitore principiante a lungo termine).</strong></li>
                    </ul>
                </div>

                 {/* Sottosezione ETF */}
                <div id="etf" className="mb-6 scroll-mt-24">
                    <h4 className="text-xl font-semibold mb-2 text-success">B) ETF (Exchange Traded Funds): Diversificazione Immediata e a Basso Costo</h4>
                    <p className="mb-3">Sono fondi d'investimento quotati in borsa che replicano passivamente l'andamento di un determinato indice (es. FTSE MIB di Borsa Italiana, S&P 500 americano, MSCI World globale), di un settore (es. tecnologia, energie rinnovabili), di una materia prima (es. oro) o di un tipo di obbligazione. Acquistando una sola quota di un ETF, investi automaticamente in un <strong className='text-success'>paniere diversificato</strong> di decine, centinaia o migliaia di titoli sottostanti.</p>
                     <p className="font-medium mb-2 text-sm">Perché gli ETF sono spesso la scelta ideale per iniziare?</p>
                    <ul className="list-disc list-inside space-y-1 pl-4 text-sm">
                       <li><strong className='text-success'>Diversificazione Istantanea:</strong> Riducono drasticamente il rischio specifico legato a una singola azienda. È il loro vantaggio principale.</li>
                       <li><strong className='text-success'>Costi Molto Bassi:</strong> Hanno spese di gestione annue (TER - Total Expense Ratio) significativamente inferiori rispetto ai fondi comuni a gestione attiva venduti tradizionalmente dalle banche.</li>
                       <li><strong className='text-success'>Semplicità e Trasparenza:</strong> Facili da capire (replicano un indice) e sai sempre esattamente cosa c'è dentro il fondo.</li>
                       <li><strong className='text-success'>Flessibilità:</strong> Si comprano e vendono in borsa come le normali azioni durante gli orari di mercato.</li>
                    </ul>
                     {/* <Link to="/blog/guida-etf-cosa-sono-come-investire" className="inline-flex items-center text-sm text-primary hover:underline mt-3 font-medium">
                        Approfondisci: Guida Completa agli ETF per il 2025 <ArrowRight size={14} className="ml-1" />
                     </Link> */}
                </div>

                 <Alert variant="default" className="mt-6 bg-purple-50 border-l-4 border-purple-500 text-purple-800 dark:bg-purple-900/30 dark:border-purple-600 dark:text-purple-300">
                    <HelpCircle className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    <AlertTitle className="font-semibold">Il Nostro Consiglio per Chi Inizia (Basato sull'Esperienza)</AlertTitle>
                    <AlertDescription>
                     Per la maggior parte dei principianti, iniziare costruendo il nucleo del portafoglio con <strong>ETF ampiamente diversificati</strong> è la strategia più sensata, efficiente e meno stressante. Un ETF sull'indice <strong>MSCI World</strong> (azioni globali dei paesi sviluppati) o <strong>MSCI ACWI</strong> (che include anche i mercati emergenti) rappresenta un eccellente punto di partenza per un'esposizione globale diversificata a basso costo. Potrai eventualmente aggiungere azioni singole o ETF settoriali più avanti, una volta acquisita maggiore confidenza.
                    </AlertDescription>
                </Alert>
              </div>

               {/* Passo 4: Strategia */}
              <div id="strategia" className="mb-8 p-5 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center"><Map size={24} className="mr-2 text-secondary" />Passo 4: Definire la Tua Strategia di Investimento (La Bussola)</h3>
                 <p className="mb-4">Investire senza una strategia è come navigare senza bussola: rischi di perderti. Una strategia ti aiuta a rimanere disciplinato, soprattutto quando i mercati sono turbolenti.</p>
                 {/* Sottosezione Lungo Termine / PAC */}
                 <div id="strategia-lungo-termine" className="mb-5 scroll-mt-24">
                     <h4 className="text-xl font-semibold mb-2 text-success">Strategia Consigliata: Investimento a Lungo Termine e PAC</h4>
                     <p className="mb-3">È l'approccio più adatto ai principianti e quello che, statisticamente, ha maggiori probabilità di successo nel tempo. Si basa su principi semplici ma potenti:</p>
                     <ul className="list-disc list-inside space-y-2 pl-4">
                         <li><strong className='text-success'>Orizzonte Temporale Lungo:</strong> Pensare in termini di anni, non di giorni o mesi. Mantenere gli investimenti per almeno 5-10 anni o più, ignorando il "rumore" di fondo del mercato quotidiano.</li>
                         <li><strong className='text-success'>Buy and Hold ("Compra e Tieni"):</strong> Selezionare asset di qualità (ETF diversificati o azioni di aziende solide) e mantenerli in portafoglio nel tempo, beneficiando della crescita a lungo termine.</li>
                         <li><strong className='text-success'>Reinvestimento dei Proventi:</strong> Utilizzare eventuali dividendi ricevuti o i guadagni realizzati per acquistare ulteriori quote dello stesso investimento, sfruttando al massimo l'interesse composto. Molti ETF esistono in versione "Accumulazione" (ACC) che reinvestono automaticamente i dividendi.</li>
                         <li><strong className='text-success'>Piano di Accumulo Capitale (PAC):</strong> Questa è una tecnica potentissima per i principianti. Consiste nell'investire una <strong>somma fissa</strong> (es. 100€, 200€, o quanto puoi permetterti) a <strong>intervalli regolari</strong> (es. ogni mese o trimestre), indipendentemente dall'andamento del mercato.
                            <ul className="list-circle list-inside pl-6 mt-1 text-sm">
                                <li><strong>Vantaggio 1 (Mediazione del Prezzo - Dollar Cost Averaging):</strong> Compri più quote quando i prezzi sono bassi e meno quote quando sono alti, mediando il tuo prezzo medio di carico nel tempo.</li>
                                <li><strong>Vantaggio 2 (Disciplina e Automazione):</strong> Rende l'investimento un'abitudine, togliendo l'emotività dalla decisione di "quando" comprare. Molti broker permettono di impostare PAC automatici su ETF.</li>
                            </ul>
                             <Link to="/blog/piano-accumulo-capitale-pac-guida-definitiva-principianti" className="inline-flex items-center text-sm text-primary hover:underline mt-3 font-medium">
                                Scopri tutto sul Piano di Accumulo Capitale (PAC) <ArrowRight size={14} className="ml-1" />
                             </Link>
                         </li>
                     </ul>
                 </div>
                  {/* Sottosezione Trading */}
                 <div id="strategia-breve-termine">
                     <h4 className="text-xl font-semibold mb-2 text-danger">Strategia Sconsigliata (ai Principianti): Trading a Breve Termine</h4>
                     <p className="mb-3">Tentare di prevedere e sfruttare le piccole oscillazioni di prezzo giornaliere o settimanali (Day Trading, Swing Trading) per ottenere profitti rapidi. <strong className='text-danger'>È estremamente difficile, richiede molto tempo, competenze specifiche di analisi tecnica, forte controllo emotivo e comporta rischi elevatissimi di perdita del capitale.</strong> La stragrande maggioranza di chi prova senza adeguata preparazione perde denaro. Evitalo assolutamente se sei agli inizi.</p>
                 </div>
              </div>

               {/* Passo 5: Primo Ordine */}
              <div id="primo-ordine" className="mb-8 p-5 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                 <h3 className="text-2xl font-semibold mb-4 flex items-center"><ShoppingCart size={24} className="mr-2 text-secondary" />Passo 5: Inserire il Tuo Primo Ordine di Acquisto</h3>
                 <p className="mb-4">Ci siamo! Hai scelto il broker, aperto il conto, depositato fondi e deciso cosa comprare (es. l'ETF MSCI World). Ora devi comunicare al broker la tua intenzione di acquisto tramite un ordine.</p>
                 <p className="mb-3">Nella piattaforma del broker, cerca lo strumento desiderato usando il <strong className='text-info'>nome</strong> (es. "iShares Core MSCI World UCITS ETF") o, meglio ancora, il suo codice identificativo univoco <strong className='text-info'>ISIN</strong> (es. IE00B4L5Y983 - questo è un esempio reale, verifica sempre!).</p>
                  <p className="mb-3">Dovrai specificare principalmente:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
                     <li><strong>Quantità:</strong> Quante quote dell'ETF (o azione) vuoi acquistare, oppure l'importo totale che vuoi investire (alcuni broker permettono ordini basati sull'importo).</li>
                     <li><strong>Tipo di Ordine:</strong> I due tipi principali sono:
                        <ul className="list-circle list-inside pl-6 mt-1">
                            <li><strong className='text-info'>Ordine a Mercato (Market Order):</strong> Il broker eseguirà l'ordine il prima possibile al miglior prezzo disponibile in quel preciso istante sul mercato. Vantaggio: esecuzione quasi certa (se c'è liquidità). Svantaggio: non hai controllo esatto sul prezzo finale, che potrebbe essere leggermente diverso da quello visualizzato (slippage).</li>
                            <li><strong className='text-info'>Ordine Limite (Limit Order):</strong> Imposti tu un prezzo massimo che sei disposto a pagare per ogni quota. L'ordine verrà eseguito solo se il prezzo di mercato raggiunge o scende sotto il tuo limite. Vantaggio: controllo totale sul prezzo di acquisto. Svantaggio: l'ordine potrebbe non essere eseguito se il prezzo non raggiunge mai il tuo limite.</li>
                        </ul>
                     </li>
                 </ul>
                 <Alert variant="default" className="mt-4 bg-sky-50 border-l-4 border-sky-500 text-sky-800 dark:bg-sky-900/30 dark:border-sky-600 dark:text-sky-300">
                    <Lightbulb className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                    <AlertTitle className="font-semibold">Quale Ordine Usare?</AlertTitle>
                    <AlertDescription>
                    Per un principiante che investe a lungo termine in ETF molto liquidi (come quelli sugli indici globali), un <strong className='text-sky-700 dark:text-sky-200'>ordine a mercato</strong> è generalmente la scelta più semplice e pratica. Per azioni meno liquide o se hai una forte preferenza sul prezzo, l'ordine limite offre più controllo.
                    </AlertDescription>
                 </Alert>
              </div>

              {/* Passo 6: Gestione Rischio */}
              <div id="gestione-rischio" className="mb-8 p-5 border rounded-lg shadow-sm bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700 scroll-mt-24">
                 <h3 className="text-2xl font-semibold mb-4 flex items-center text-red-800 dark:text-red-300"><AlertTriangle size={24} className="mr-2" />Passo 6: Gestire il Rischio: Proteggere il Tuo Capitale</h3>
                <p className="mb-4 text-red-700 dark:text-red-400">Ricorda: investire comporta rischi. Non puoi eliminarli, ma puoi (e devi) gestirli intelligentemente. Ecco le strategie fondamentali:</p>
                 <ul className="list-disc list-inside space-y-3 pl-4 text-red-700 dark:text-red-400">
                     <li><strong className='text-red-600 dark:text-red-200'>Diversificazione (La Regola N.1):</strong> È il concetto più importante per la gestione del rischio. Non concentrare tutti i tuoi investimenti su un'unica azione, settore o area geografica. Diversifica il più possibile:
                         <ul className="list-circle list-inside pl-6 mt-1 text-sm">
                            <li><strong>Tra Asset Class:</strong> Combina azioni (più rischiose ma con potenziale di crescita maggiore) con obbligazioni (generalmente meno rischiose), e potenzialmente piccole quote di materie prime o immobiliare (spesso tramite ETF).</li>
                            <li><strong>Geograficamente:</strong> Non investire solo in Italia. Esponiti ai mercati globali (USA, Europa, Asia, Emergenti).</li>
                            <li><strong>Settorialmente:</strong> Non puntare tutto su un unico settore (es. solo tecnologia).</li>
                         </ul>
                         <span className="text-sm italic block mt-1">(Nota: Un ETF globale come MSCI World o ACWI offre già un'eccellente diversificazione geografica e settoriale di base).</span>
                     </li>
                    <li><strong className='text-red-600 dark:text-red-200'>Asset Allocation Strategica:</strong> Definisci in anticipo come suddividere percentualmente il tuo capitale tra le diverse asset class (es. 60% Azioni Globali, 30% Obbligazioni Globali, 10% Liquidità/Conto Deposito). Questa suddivisione deve basarsi sui tuoi obiettivi, orizzonte temporale e tolleranza al rischio.</li>
                    <li><strong className='text-red-600 dark:text-red-200'>Orizzonte Temporale Adeguato:</strong> Più a lungo puoi lasciare investiti i tuoi soldi, maggiore è la probabilità di superare le fasi di ribasso del mercato e beneficiare della crescita a lungo termine. Non investire in azioni denaro che ti servirà tra meno di 3-5 anni.</li>
                    <li><strong className='text-red-600 dark:text-red-200'>Comprensione di Ciò che Compri:</strong> Non investire in strumenti finanziari che non capisci appieno.</li>
                    <li><strong className='text-red-600 dark:text-red-200'>Stop Loss (Usare con Estrema Cautela nel Lungo Termine):</strong> Sono ordini automatici per vendere un titolo se scende sotto un certo prezzo. Possono limitare le perdite, ma nel contesto di un investimento a lungo termine, rischiano di farti vendere inutilmente durante correzioni temporanee, perdendo il successivo recupero. Generalmente sconsigliati per strategie "Buy and Hold" su ETF diversificati.</li>
                 </ul>
              </div>

               {/* Passo 7: Monitoraggio */}
              <div id="monitoraggio-ribilanciamento" className="p-5 border rounded-lg shadow-sm bg-gray-50 dark:bg-gray-800/50 scroll-mt-24">
                <h3 className="text-2xl font-semibold mb-4 flex items-center"><Repeat size={24} className="mr-2 text-secondary" />Passo 7: Monitorare (Poco) e Ribbilanciare (Quando Serve)</h3>
                 <p className="mb-4">Una volta avviato il tuo piano, non devi controllare l'andamento ogni giorno (anzi, è controproducente!). Ma non puoi nemmeno dimenticartene completamente.</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong>Monitoraggio Periodico (Non Ossessivo):</strong> Dai un'occhiata al tuo portafoglio ogni 3, 6 o 12 mesi. L'obiettivo è verificare se sei ancora in linea con i tuoi obiettivi e se la tua asset allocation è cambiata significativamente, non reagire alle piccole fluttuazioni.</li>
                     <li><strong>Ribbilanciamento Periodico:</strong> Con il tempo, le diverse componenti del tuo portafoglio cresceranno a ritmi diversi. Ad esempio, le azioni potrebbero sovraperformare le obbligazioni, portando la tua asset allocation da 60/40 a 70/30. Ribbilanciare significa vendere una parte degli asset che sono cresciuti di più e comprare quelli che sono rimasti indietro per riportare il portafoglio alle percentuali target originali. Questo aiuta a mantenere il livello di rischio desiderato. Di solito si fa una volta all'anno, o quando le percentuali si discostano di un valore predefinito (es. +/- 5% o 10%).</li>
                 </ul>
              </div>
            </section>

             {/* --- Sezione Psicologia --- */}
            <section id="psicologia" aria-labelledby="psicologia-title" className="mb-12 scroll-mt-24">
              <h2 id="psicologia-title" className="text-3xl font-bold mb-5 flex items-center"><User size={28} className="mr-3 text-primary" />Psicologia dell'Investitore: Controlla le Tue Emozioni</h2>
              <p className="mb-4">Spesso, il più grande nemico dei tuoi rendimenti non è il mercato, ma la tua stessa mente. Le emozioni come la paura e l'avidità possono portarti a prendere decisioni finanziarie disastrose:</p>
              <ul className="list-none space-y-3 mb-6 pl-0">
                 <li className="flex items-start"><AlertTriangle size={16} className="mr-2 mt-1 text-danger flex-shrink-0" /><span><strong>Paura (Fear) e Panic Selling:</strong> Vendere tutto durante un crollo del mercato per paura di perdere ancora di più, cristallizzando perdite che potrebbero essere solo temporanee.</span></li>
                 <li className="flex items-start"><TrendingUp size={16} className="mr-2 mt-1 text-warning flex-shrink-0" /><span><strong>Avidità (Greed) e FOMO (Fear Of Missing Out):</strong> Comprare un asset solo perché il suo prezzo sta salendo vertiginosamente, per paura di "perdere il treno", spesso comprando vicino ai massimi di mercato.</span></li>
                 <li className="flex items-start"><User size={16} className="mr-2 mt-1 text-warning flex-shrink-0" /><span><strong>Eccesso di Fiducia (Overconfidence):</strong> Credere di poter prevedere i mercati o di essere più bravi della media nel selezionare azioni vincenti (spoiler: è difficilissimo).</span></li>
                 <li className="flex items-start"><Anchor size={16} className="mr-2 mt-1 text-warning flex-shrink-0" /><span><strong>Avversione alle Perdite e Ancoraggio:</strong> Soffrire di più per una perdita che gioire per un guadagno equivalente, portando a tenere in portafoglio titoli in perdita troppo a lungo ("si riprenderà...") o a vendere troppo presto i titoli vincenti.</span></li>
              </ul>
               <Alert variant="default" className="bg-teal-50 border-l-4 border-teal-500 text-teal-800 dark:bg-teal-900/30 dark:border-teal-600 dark:text-teal-300">
                  <CheckCircle className="h-5 w-5 text-teal-600 dark:text-teal-400" />
                  <AlertTitle className="font-semibold">Come Vincere la Battaglia Emotiva?</AlertTitle>
                  <AlertDescription>
                    <ul className="list-disc list-inside space-y-1">
                        <li><strong>Avere un Piano di Investimento Scritto e Rispettarlo:</strong> È la tua difesa più forte contro le decisioni impulsive.</li>
                        <li><strong>Automatizzare il Più Possibile (PAC):</strong> Rimuove l'emotività dal processo decisionale.</li>
                        <li><strong>Focalizzarsi sul Lungo Termine:</strong> Capire che i ribassi sono parte normale del ciclo di mercato.</li>
                        <li><strong>Ignorare il Rumore:</strong> Non farsi influenzare dalle notizie finanziarie quotidiane o dai "consigli" sui social media.</li>
                        <li><strong>Diversificare Adeguatamente:</strong> Riduce la volatilità complessiva del portafoglio e l'ansia.</li>
                        <li><strong>Continuare a Studiare:</strong> La conoscenza è potere (e riduce la paura).</li>
                    </ul>
                   <Link to="/blog/errori-investimenti-principianti" className="inline-flex items-center text-sm text-teal-600 dark:text-teal-300 hover:underline mt-3 font-medium">
                        Leggi di più sui 7 errori psicologici da evitare <ArrowRight size={14} className="ml-1" />
                   </Link>
                  </AlertDescription>
              </Alert>
            </section>

             {/* --- Sezione Tassazione --- */}
            <section id="tasse" aria-labelledby="tasse-title" className="mb-12 scroll-mt-24">
                <h2 id="tasse-title" className="text-3xl font-bold mb-5 flex items-center"><Scale size={28} className="mr-3 text-primary" />Tassazione degli Investimenti in Italia (Breve Panoramica)</h2>
                <p className="mb-4">I profitti generati dai tuoi investimenti (chiamati <strong className='text-success'>plusvalenze</strong> o capital gain) e i dividendi distribuiti dalle aziende sono soggetti a tassazione. In Italia, l'aliquota standard attuale per la maggior parte degli strumenti finanziari (azioni, ETF non armonizzati, obbligazioni societarie) è del <strong className='text-info'>26%</strong>. (I Titoli di Stato italiani e strumenti equiparati hanno un'aliquota agevolata del 12.5%).</p>
                 <p className="mb-4">La modalità con cui paghi le tasse dipende dal <strong className='text-info'>regime fiscale</strong> offerto dal tuo broker:</p>
                 <ul className="list-disc list-inside space-y-2 pl-4">
                     <li><strong className='text-success'>Regime Amministrato:</strong> Il broker agisce da sostituto d'imposta. Calcola, trattiene e versa automaticamente le tasse dovute per tuo conto. È il regime <strong className='text-success'>più semplice</strong> per l'investitore, che non deve preoccuparsi di nulla a livello dichiarativo per questi redditi. Molti broker italiani o con succursale in Italia lo offrono.</li>
                     <li><strong className='text-warning'>Regime Dichiarativo:</strong> Il broker non trattiene le tasse. A fine anno ti fornirà un report con tutte le operazioni e i redditi generati. Sarai <strong className='text-warning'>tu (o il tuo commercialista)</strong> a dover calcolare le imposte dovute e inserirle nella tua dichiarazione dei redditi (modello Redditi PF, quadri RT e RM). Offre più flessibilità (es. per compensare plusvalenze e minusvalenze tra conti diversi o per anni diversi) ma richiede maggiore attenzione e potenzialmente l'aiuto di un professionista. È comune per i broker esteri senza stabile organizzazione in Italia.</li>
                 </ul>
                 <Alert variant="default" className="mt-4 bg-sky-50 border-l-4 border-sky-500 text-sky-800 dark:bg-sky-900/30 dark:border-sky-600 dark:text-sky-300">
                    <HelpCircle className="h-5 w-5 text-sky-600 dark:text-sky-400" />
                    <AlertTitle className="font-semibold">Nota Bene sulla Fiscalità</AlertTitle>
                    <AlertDescription>
                    Le normative fiscali possono cambiare. Le informazioni qui riportate sono una semplificazione. Per la tua situazione specifica, soprattutto se complessa o se usi il regime dichiarativo, è sempre <strong className='text-sky-700 dark:text-sky-200'>altamente raccomandato consultare un commercialista qualificato</strong>.
                    </AlertDescription>
                </Alert>
            </section>

            {/* --- Sezione Formazione Continua --- */}
             <section id="formazione" aria-labelledby="formazione-title" className="mb-12 scroll-mt-24">
              <h2 id="formazione-title" className="text-3xl font-bold mb-5 flex items-center"><BookOpen size={28} className="mr-3 text-primary" />Il Viaggio Continua: L'Importanza della Formazione</h2>
              <p className="mb-4">Hai assorbito molte informazioni, ma il mondo degli investimenti è dinamico. Considera questa guida come il tuo "campo base". Per raggiungere la vetta della consapevolezza finanziaria, devi continuare a imparare.</p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                  <li><strong>Leggi Libri Fondamentali:</strong> Cerca classici sulla finanza personale (es. "Padre Ricco Padre Povero" per la mentalità, "A Spasso per Wall Street" per l'investimento passivo) e sull'investimento (es. libri di Bogle, Graham - anche se più avanzati).</li>
                  <li><strong>Segui Fonti Online Affidabili e Indipendenti:</strong> Blog di finanza personale seri (come questo!), canali YouTube educativi, podcast. Sii critico: diffida da chi promette guadagni facili e veloci o spinge prodotti specifici senza trasparenza.</li>
                  <li><strong>Consulta Siti Istituzionali:</strong> Borsa Italiana, CONSOB, Banca d'Italia offrono glossari, guide e notizie ufficiali.</li>
                  <li><strong>Non Aver Paura di Fare Domande:</strong> Cerca community online moderate o chiedi a professionisti qualificati (consulenti finanziari indipendenti).</li>
                  <li><strong>Impara dagli Errori (Tuoi e Altrui):</strong> Ogni investimento, anche quelli sbagliati, è una lezione. Analizza cosa è andato storto senza colpevolizzarti eccessivamente.</li>
              </ul>
            </section>

            {/* --- Sezione Conclusione --- */}
            <section id="conclusione" aria-labelledby="conclusione-title" className="mb-12 text-center border-t border-gray-200 dark:border-gray-700 pt-8 mt-8">
              <h2 id="conclusione-title" className="text-3xl font-bold mb-5 flex items-center justify-center"><Sparkles size={28} className="mr-3 text-primary" />È il Tuo Momento: Inizia a Costruire il Tuo Futuro Finanziario!</h2>
              <p className="mb-4 text-lg">
                Se hai letto fin qui, hai fatto un passo enorme! Ora possiedi le conoscenze essenziali e una mappa chiara per <strong className='text-primary'>iniziare ad investire in borsa con fiducia e consapevolezza</strong>. Ricorda i pilastri: definisci obiettivi, crea un fondo emergenza, scegli il broker giusto, prediligi ETF diversificati (soprattutto all'inizio), investi regolarmente (PAC!), gestisci il rischio e controlla le emozioni.
              </p>
              <p className="mb-6">
                Non devi investire grandi cifre per iniziare. La cosa più importante è <strong className='text-success'>cominciare</strong>, essere <strong className='text-info'>costante</strong> e <strong className='text-warning'>paziente</strong>. Il tempo e l'interesse composto saranno i tuoi migliori alleati.
              </p>
              {/* Eventuale CTA Finale */}
              {/*
              <Button size="lg" asChild className="mt-4">
                <Link to="/risorse-utili">
                   Scopri Altre Risorse Utili per Investitori <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              */}
            </section>

             {/* --- Sezione FAQ --- */}
            <section id="faq" aria-labelledby="faq-title" className="mb-12 scroll-mt-24">
              <h2 id="faq-title" className="text-3xl font-bold mb-6 flex items-center"><HelpCircle size={28} className="mr-3 text-primary" />Domande Frequenti (FAQ) sull'Iniziare a Investire</h2>
              <Accordion type="single" collapsible className="w-full border-t border-b border-gray-200 dark:border-gray-700 divide-y divide-gray-200 dark:divide-gray-700">
                {/* FAQ Item 1 */}
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">Quanto capitale serve per iniziare ad investire in borsa?</AccordionTrigger>
                  <AccordionContent className="text-base pt-2 pb-4">Non esiste una cifra minima universale, dipende dal broker e dallo strumento. Molti broker moderni permettono di iniziare anche con poche decine o centinaia di euro, specialmente tramite Piani di Accumulo (PAC) su ETF. L'importante è iniziare con una somma che ti senti a tuo agio a investire e che puoi permetterti di non toccare per diversi anni. La costanza è più importante dell'importo iniziale.</AccordionContent>
                </AccordionItem>
                 {/* FAQ Item 2 */}
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">È davvero rischioso investire in borsa?</AccordionTrigger>
                  <AccordionContent className="text-base pt-2 pb-4">Sì, ogni investimento comporta un rischio di perdita del capitale. Tuttavia, il livello di rischio può essere gestito attraverso la diversificazione, un orizzonte temporale lungo e scelte di investimento consapevoli. Non investire in borsa è anch'esso un rischio (quello di perdere potere d'acquisto a causa dell'inflazione). Il rischio maggiore per un principiante è agire senza conoscenza o spinto dalle emozioni.</AccordionContent>
                </AccordionItem>
                 {/* FAQ Item 3 */}
                 <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">Meglio iniziare con azioni singole o con ETF?</AccordionTrigger>
                  <AccordionContent className="text-base pt-2 pb-4">Per la stragrande maggioranza dei principianti, gli ETF sono la scelta migliore per iniziare. Offrono diversificazione immediata a basso costo, riducendo significativamente il rischio rispetto alla selezione di singole azioni, che richiede analisi più approfondite e comporta una maggiore volatilità. Puoi sempre aggiungere azioni singole al tuo portafoglio in un secondo momento, quando avrai acquisito più esperienza.</AccordionContent>
                </AccordionItem>
                 {/* FAQ Item 4 */}
                 <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">Quanto spesso devo controllare i miei investimenti?</AccordionTrigger>
                  <AccordionContent className="text-base pt-2 pb-4">Se stai investendo a lungo termine, controllare troppo spesso può essere controproducente e indurre ansia o decisioni affrettate. Un controllo generale del portafoglio ogni 3-6 mesi è solitamente sufficiente per verificare l'andamento complessivo e valutare eventuali necessità di ribilanciamento (una o due volte l'anno). Evita di controllare i prezzi ogni giorno!</AccordionContent>
                </AccordionItem>
                 {/* FAQ Item 5 */}
                 <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline py-4">Posso perdere tutti i miei soldi investendo in borsa?</AccordionTrigger>
                  <AccordionContent className="text-base pt-2 pb-4">Teoricamente, se investi tutto in una singola azione di un'azienda che fallisce, potresti perdere l'intero capitale investito in quel titolo. Tuttavia, investendo in modo diversificato (specialmente tramite ETF globali) e scegliendo broker regolamentati e sicuri, il rischio di perdere *tutto* il capitale è estremamente basso, quasi nullo in condizioni normali di mercato e con un approccio sensato. Il rischio principale è subire perdite temporanee durante le fasi di ribasso del mercato.</AccordionContent>
                </AccordionItem>
              </Accordion>
            </section>

            {/* --- Sezione Disclaimer --- */}
             <section id="disclaimer" aria-labelledby="disclaimer-title" className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-6">
                <Alert variant="default" className="bg-orange-50 border-l-4 border-orange-500 text-orange-800 dark:bg-orange-900/30 dark:border-orange-600 dark:text-orange-300">
                    <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <AlertTitle id="disclaimer-title" className="font-semibold">Avvertenza Importante (Disclaimer)</AlertTitle>
                    <AlertDescription className="text-sm">
                    Le informazioni fornite in questa guida hanno <strong className='text-orange-700 dark:text-orange-200'>esclusivamente scopo informativo ed educativo</strong>. Non costituiscono in alcun modo consulenza finanziaria personalizzata, raccomandazione all'investimento, sollecitazione al pubblico risparmio, né consulenza legale o fiscale. Investire nei mercati finanziari comporta <strong className='text-orange-700 dark:text-orange-200'>rischi significativi</strong>, inclusa la possibilità di perdere l'intero capitale investito. Le performance passate non sono indicative di quelle future. Prima di prendere qualsiasi decisione di investimento, è fondamentale condurre le proprie ricerche approfondite (<em className='italic'>due diligence</em>) e/o rivolgersi a un <strong className='text-orange-700 dark:text-orange-200'>consulente finanziario indipendente</strong> regolarmente iscritto all'Albo OCF, che possa valutare la tua specifica situazione personale, finanziaria, i tuoi obiettivi e la tua propensione al rischio. {publisherName} declina ogni responsabilità per eventuali decisioni di investimento basate, in tutto o in parte, sulle informazioni contenute in questa pagina.
                    </AlertDescription>
                </Alert>
             </section>

             {/* --- Sezione Articoli Correlati --- */}
            <section aria-labelledby="related-articles-title" className="mt-16 border-t border-gray-200 dark:border-gray-700 pt-10">
              <h3 id="related-articles-title" className="text-2xl font-bold mb-6 text-center">Approfondisci la Tua Conoscenza</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {relatedArticlesData.map((article) => (
                   <Card key={article.id} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800">
                        <Link to={`/blog/${article.slug}`} aria-label={`Leggi l'articolo: ${article.title}`} className="block group">
                            <img
                                src={article.image} // URL Unsplash Esemplificativo
                                alt={`Immagine articolo correlato: ${article.title}`}
                                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                                loading="lazy"
                                width="870" // Fornisci dimensioni se possibile (adattare per ogni immagine)
                                height="580" // Fornisci dimensioni se possibile (adattare per ogni immagine)
                            />
                        </Link>
                        <CardContent className="p-5 flex flex-col flex-grow">
                            <div className="mb-2">
                                <div style={{ width: 'auto' }} className="text-xs font-semibold bg-primary/10 text-primary px-2 py-1 rounded-full hover:bg-primary/20 transition-colors">
                                    {article.category}
                                </div>
                            </div>
                            <h4 className="text-lg font-semibold mb-2 leading-snug">
                                <Link to={`/categoria/${article.slug}`} className="hover:text-primary transition-colors">
                                    {article.title}
                                </Link>
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                                {article.excerpt}
                            </p>
                            <div className="flex flex-wrap justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
                                <span className="flex items-center space-x-1">
                                    <User size={13} />
                                    <span>{article.author}</span>
                                </span>
                                <span className="flex items-center space-x-1">
                                    <Clock size={13} />
                                    <span>{article.readTime}</span>
                                </span>
                            </div>
                            <div className="mt-4">
                                <Link
                                    to={`/categoria/${article.slug}`}
                                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium text-sm group"
                                    aria-label={`Leggi di più su: ${article.title}`}
                                >
                                    Leggi l'articolo
                                    <ArrowRight size={16} className="ml-1 transition-transform duration-200 group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ))}
              </div>
            </section>

          </main> {/* Chiusura main content container */}
        </div> {/* Chiusura container principale */}
      </article>
    </Layout>
  );
};

export default InvestireInBorsaGuida;