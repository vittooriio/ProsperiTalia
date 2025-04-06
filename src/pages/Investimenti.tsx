
import Layout from "../components/layout/Layout";
import HeroSection from "../components/ui/HeroSection";
import { Link } from "react-router-dom";
import { TrendingUp, BarChart3, LineChart, PieChart } from "lucide-react";

const Investimenti = () => {
  return (
    <Layout
      title="Investimenti - Strategie e Consigli"
      description="Scopri le migliori strategie di investimento, consigli per principianti e avanzati, e guide complete su come far crescere il tuo patrimonio."
    >
      <HeroSection
        title="Strategie di Investimento"
        subtitle="Scopri come far crescere il tuo patrimonio con strategie di investimento adatte al tuo profilo di rischio e ai tuoi obiettivi finanziari."
        image="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80"
      />

      {/* Introduzione */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Cosa Troverai in Questa Sezione</h2>
          <p className="text-lg mb-6">
            Benvenuto nella sezione dedicata agli investimenti, dove troverai guide dettagliate, strategie e consigli per investire in modo intelligente il tuo denaro. Che tu sia alle prime armi o un investitore esperto, abbiamo contenuti adatti al tuo livello di esperienza.
          </p>
          <p className="text-lg mb-6">
            Gli investimenti sono un elemento cruciale nella costruzione di un futuro finanziario solido. Attraverso le giuste strategie e conoscenze, puoi far crescere il tuo capitale nel tempo e raggiungere i tuoi obiettivi finanziari.
          </p>
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">Il nostro approccio agli investimenti</h3>
            <p>
              In ProsperItalia, crediamo in un approccio basato su diversificazione, investimenti a lungo termine e conoscenza approfondita. Non promuoviamo strategie get-rich-quick o investimenti speculativi, ma ti aiutiamo a costruire un patrimonio solido nel tempo.
            </p>
          </div>
        </div>
      </section>

      {/* Categorie di investimento */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Categorie di Investimento</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Mercato Azionario</h3>
              <p className="text-gray-600 mb-4">
                Scopri come investire in azioni, comprendere i fondamentali delle aziende e costruire un portafoglio azionario diversificato.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li>• Analisi fondamentale e tecnica</li>
                <li>• Strategie di investimento a lungo termine</li>
                <li>• ETF e fondi indice</li>
                <li>• Gestione del rischio</li>
              </ul>
              <Link to="/blog/categoria/mercato-azionario" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Approfondisci →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Obbligazioni e Reddito Fisso</h3>
              <p className="text-gray-600 mb-4">
                Esplora le opportunità di investimento nel mercato obbligazionario e altri strumenti a reddito fisso.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li>• Obbligazioni governative e corporate</li>
                <li>• Comprendere i tassi di interesse</li>
                <li>• Strategie per generare reddito passivo</li>
                <li>• Diversificazione del portafoglio</li>
              </ul>
              <Link to="/blog/categoria/obbligazioni" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Approfondisci →
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <PieChart size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Investimenti Alternativi</h3>
              <p className="text-gray-600 mb-4">
                Valuta opportunità di investimento oltre le azioni e le obbligazioni tradizionali.
              </p>
              <ul className="mb-6 space-y-2 text-gray-600">
                <li>• Immobiliare e REIT</li>
                <li>• Materie prime</li>
                <li>• Private equity</li>
                <li>• Criptovalute e asset digitali</li>
              </ul>
              <Link to="/blog/categoria/investimenti-alternativi" className="text-primary hover:text-primary/80 font-medium transition-colors">
                Approfondisci →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide per livello di esperienza */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Guide per Livello di Esperienza</h2>
          
          <div className="mb-12 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Per Principianti</h3>
            <p className="text-gray-600 mb-6">
              Se sei all'inizio del tuo percorso di investimento, queste risorse ti aiuteranno a costruire solide fondamenta.
            </p>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog/investire-in-borsa-guida" className="text-lg font-medium text-primary hover:underline">Come Iniziare ad Investire in Borsa: Guida Completa per Principianti</Link>
                <p className="text-gray-600 mt-1">Scopri i passi fondamentali per iniziare ad investire in borsa in modo sicuro e consapevole.</p>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog/diversificare-investimenti" className="text-lg font-medium text-primary hover:underline">L'Importanza della Diversificazione negli Investimenti</Link>
                <p className="text-gray-600 mt-1">Perché non dovresti mai mettere tutte le uova nello stesso paniere e come costruire un portafoglio diversificato.</p>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog/errori-comuni-investimenti" className="text-lg font-medium text-primary hover:underline">5 Errori Comuni che i Principianti Fanno negli Investimenti</Link>
                <p className="text-gray-600 mt-1">Evita questi errori frequenti che possono compromettere i tuoi risultati negli investimenti.</p>
              </li>
            </ul>
          </div>
          
          <div className="mb-12 bg-green-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Per Investitori Intermedi</h3>
            <p className="text-gray-600 mb-6">
              Hai già le basi e sei pronto per strategie più avanzate? Questi contenuti ti aiuteranno a migliorare le tue competenze.
            </p>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog" className="text-lg font-medium text-primary hover:underline">Strategie di Asset Allocation per Diverse Fasi della Vita</Link>
                <p className="text-gray-600 mt-1">Come adattare il tuo portafoglio di investimenti alle diverse fasi della tua vita e ai tuoi obiettivi.</p>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog" className="text-lg font-medium text-primary hover:underline">Come Valutare la Qualità di un'Azienda Prima di Investire</Link>
                <p className="text-gray-600 mt-1">Tecniche di analisi fondamentale per identificare aziende di qualità con potenziale a lungo termine.</p>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog" className="text-lg font-medium text-primary hover:underline">Investire in Periodi di Volatilità: Strategie Difensive</Link>
                <p className="text-gray-600 mt-1">Come proteggere il tuo portafoglio durante periodi di incertezza e volatilità dei mercati.</p>
              </li>
            </ul>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-4">Per Investitori Avanzati</h3>
            <p className="text-gray-600 mb-6">
              Per chi ha esperienza significativa e cerca di ottimizzare ulteriormente la propria strategia di investimento.
            </p>
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog" className="text-lg font-medium text-primary hover:underline">Strategie di Fattore e Smart Beta: Un'Analisi Approfondita</Link>
                <p className="text-gray-600 mt-1">Esplora approcci di investimento basati su fattori di rischio e rendimento per migliorare i risultati del portafoglio.</p>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog" className="text-lg font-medium text-primary hover:underline">Ottimizzazione Fiscale degli Investimenti</Link>
                <p className="text-gray-600 mt-1">Strategie legali per minimizzare l'impatto fiscale sui tuoi investimenti e massimizzare i rendimenti netti.</p>
              </li>
              <li className="bg-white p-4 rounded-md shadow-sm">
                <Link to="/blog" className="text-lg font-medium text-primary hover:underline">Investimenti ESG e Impact Investing: Oltre il Rendimento Finanziario</Link>
                <p className="text-gray-600 mt-1">Come integrare considerazioni ambientali, sociali e di governance nelle tue decisioni di investimento.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Strumenti e risorse */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Strumenti e Risorse</h2>
          
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-6">
              <div className="text-primary mr-4">
                <LineChart size={32} />
              </div>
              <h3 className="text-2xl font-semibold">Calcolatori di Investimento</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              Utilizza i nostri calcolatori interattivi per pianificare i tuoi investimenti e visualizzare potenziali scenari futuri.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Link to="/strumenti/calcolatore-interesse-composto" className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold">Calcolatore di Interesse Composto</h4>
                <p className="text-sm text-gray-600">Visualizza la crescita potenziale dei tuoi investimenti nel tempo.</p>
              </Link>
              
              <Link to="/strumenti/calcolatore-pensione" className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold">Calcolatore di Pensione</h4>
                <p className="text-sm text-gray-600">Quanto devi risparmiare oggi per la tua pensione futura.</p>
              </Link>
              
              <Link to="/strumenti/confronto-investimenti" className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold">Confronto tra Investimenti</h4>
                <p className="text-sm text-gray-600">Confronta diversi scenari di investimento e strategie.</p>
              </Link>
              
              <Link to="/strumenti/calcolatore-inflazione" className="block p-4 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors">
                <h4 className="font-semibold">Calcolatore di Inflazione</h4>
                <p className="text-sm text-gray-600">Calcola l'impatto dell'inflazione sul potere d'acquisto nel tempo.</p>
              </Link>
            </div>
            
            <div className="text-center">
              <Link to="/strumenti" className="btn-primary">
                Esplora tutti gli strumenti
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter e CTA */}
      {/* <section className="bg-primary text-white py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Rimani Aggiornato sul Mondo degli Investimenti</h2>
          <p className="text-xl mb-8 opacity-90">
            Iscriviti alla nostra newsletter dedicata agli investimenti per ricevere analisi di mercato, opportunità emergenti e strategie aggiornate.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Il tuo indirizzo email"
              className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Iscriviti
            </button>
          </form>
          
          <p className="text-sm mt-4 opacity-80">
            Non condivideremo mai il tuo indirizzo email. Puoi annullare l'iscrizione in qualsiasi momento.
          </p>
        </div>
      </section> */}
    </Layout>
  );
};

export default Investimenti;
