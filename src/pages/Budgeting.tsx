
import Layout from "../components/layout/Layout";
import HeroSection from "../components/ui/HeroSection";
import { Calculator, BarChart, PieChart, LineChart } from "lucide-react";
import { Link } from "react-router-dom";
import Newsletter from "../components/ui/Newsletter";

const Budgeting = () => {
  return (
    <Layout
      title="Budgeting - Gestione del Budget"
      description="Impara a creare e gestire un budget efficace. Strumenti, strategie e consigli per una gestione finanziaria personale di successo."
    >
      <HeroSection
        title="Budgeting Efficace"
        subtitle="Strategie e strumenti per creare, gestire e rispettare un budget personale che ti aiuti a raggiungere i tuoi obiettivi finanziari."
        image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80"
      />

      {/* Introduzione */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Cos'è un Budget e Perché è Importante</h2>
          <p className="text-lg mb-6">
            Un budget non è una limitazione, ma uno strumento di libertà finanziaria. È un piano che ti aiuta ad allocare le tue risorse finanziarie in modo da soddisfare le tue esigenze attuali e raggiungere i tuoi obiettivi futuri.
          </p>
          <p className="text-lg mb-8">
            Creare e seguire un budget ti permette di:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Avere il controllo delle tue finanze</h3>
              <p className="text-gray-700">Saprai esattamente dove va il tuo denaro, eliminando l'ansia dell'incertezza finanziaria.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Evitare spese eccessive</h3>
              <p className="text-gray-700">Prevenire l'accumulo di debiti inutili e identificare aree dove stai spendendo troppo.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Raggiungere obiettivi finanziari</h3>
              <p className="text-gray-700">Che si tratti di risparmiare per una vacanza, comprare casa o prepararti per la pensione.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Costruire resilienza finanziaria</h3>
              <p className="text-gray-700">Prepararti per le emergenze e navigare periodi finanziari difficili con maggiore sicurezza.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Come creare un budget */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Come Creare un Budget in 5 Passi</h2>
          
          <div className="space-y-12">
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Calcola il tuo reddito netto</h3>
                <p className="text-lg mb-4">
                  Il primo passo è determinare quanto denaro hai effettivamente a disposizione ogni mese. Calcola il tuo reddito mensile netto (dopo le tasse) da tutte le fonti.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Consigli pratici:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Includi stipendio, redditi da libera professione, investimenti e altre entrate regolari</li>
                    <li>Se hai un reddito variabile, calcola una media degli ultimi 3-6 mesi</li>
                    <li>Considera solo il reddito su cui puoi effettivamente contare</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Traccia le tue spese</h3>
                <p className="text-lg mb-4">
                  Per un mese intero, annota ogni singola spesa che fai. Questo ti darà una chiara comprensione delle tue abitudini di spesa attuali.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Metodi di tracciamento:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>App di gestione finanziaria</li>
                    <li>Fogli di calcolo</li>
                    <li>Metodo tradizionale carta e penna</li>
                    <li>Conservare le ricevute e analizzarle a fine giornata</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Categorizza le tue spese</h3>
                <p className="text-lg mb-4">
                  Organizza le tue spese in categorie per avere una visione chiara di come stai allocando il tuo denaro. Questo ti aiuterà a individuare aree di miglioramento.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Categorie essenziali:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Alloggio (affitto/mutuo)</li>
                      <li>Utenze (luce, gas, acqua)</li>
                      <li>Alimentazione</li>
                      <li>Trasporti</li>
                      <li>Assicurazioni e sanità</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-md">
                    <h4 className="font-semibold mb-2">Categorie discrezionali:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Intrattenimento e svago</li>
                      <li>Ristoranti e cibo da asporto</li>
                      <li>Shopping e abbigliamento</li>
                      <li>Abbonamenti e iscrizioni</li>
                      <li>Viaggi e vacanze</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  4
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Definisci obiettivi e priorità</h3>
                <p className="text-lg mb-4">
                  Stabilisci obiettivi finanziari chiari a breve, medio e lungo termine. Questi ti motiveranno a rispettare il budget.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Esempi di obiettivi:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Creare un fondo di emergenza (3-6 mesi di spese)</li>
                    <li>Estinguere debiti ad alto interesse</li>
                    <li>Risparmiare per un anticipo su una casa</li>
                    <li>Investire per la pensione</li>
                    <li>Pianificare una vacanza</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
                  5
                </div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-2xl font-semibold mb-4">Crea e implementa il tuo piano</h3>
                <p className="text-lg mb-4">
                  Ora che hai raccolto tutte le informazioni necessarie, sviluppa un piano di budget che allochi il tuo reddito nelle varie categorie in modo consapevole.
                </p>
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-semibold mb-2">Metodi popolari:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><strong>50/30/20</strong>: 50% necessità, 30% desideri, 20% risparmio</li>
                    <li><strong>Zero-based budgeting</strong>: assegna ogni euro ad una categoria specifica</li>
                    <li><strong>Sistema delle buste</strong>: dividi fisicamente o digitalmente il denaro in "buste" per ogni categoria</li>
                    <li><strong>Pay yourself first</strong>: destina subito una percentuale al risparmio</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/blog/budget-mensile-efficace" className="btn-primary">
              Guida completa: Come creare un budget mensile efficace
            </Link>
          </div>
        </div>
      </section>

      {/* Strumenti di budgeting */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Strumenti di Budgeting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Calculator size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Digitali</h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold">App per smartphone</h4>
                  <p className="text-gray-600 mt-1">Permettono di tracciare spese in tempo reale, categorizzarle automaticamente e visualizzare report dettagliati.</p>
                </li>
                <li className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold">Fogli di calcolo</h4>
                  <p className="text-gray-600 mt-1">Offrono massima personalizzazione e controllo sui tuoi dati finanziari.</p>
                </li>
                <li className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold">Servizi bancari online</h4>
                  <p className="text-gray-600 mt-1">Molte banche offrono strumenti di categorizzazione e analisi delle spese integrati.</p>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link to="/strumenti" className="inline-flex items-center text-primary hover:underline">
                  Scopri i nostri strumenti di budgeting digitale
                  <LineChart size={16} className="ml-1" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <PieChart size={32} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-center">Tradizionali</h3>
              <ul className="space-y-4">
                <li className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold">Sistema delle buste</h4>
                  <p className="text-gray-600 mt-1">Divide fisicamente il denaro in buste etichettate per ogni categoria di spesa.</p>
                </li>
                <li className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold">Diario delle spese</h4>
                  <p className="text-gray-600 mt-1">Annota manualmente ogni spesa in un taccuino dedicato per aumentare la consapevolezza.</p>
                </li>
                <li className="bg-white p-4 rounded-md shadow-sm">
                  <h4 className="font-semibold">Calendario di budget</h4>
                  <p className="text-gray-600 mt-1">Visualizza entrate e spese in un formato di calendario per gestire meglio il flusso di cassa.</p>
                </li>
              </ul>
              <div className="mt-8 text-center">
                <Link to="/blog" className="inline-flex items-center text-primary hover:underline">
                  Metodi tradizionali di budgeting che funzionano ancora
                  <BarChart size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consigli per rispettare il budget */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">7 Strategie per Rispettare il Budget</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">1</span>
                Automatizza i risparmi
              </h3>
              <p className="text-gray-600">
                Imposta trasferimenti automatici dal tuo conto principale a un conto di risparmio il giorno stesso in cui ricevi lo stipendio. Ciò che non vedi, non spendi.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">2</span>
                Usa la regola delle 24 ore
              </h3>
              <p className="text-gray-600">
                Per acquisti non essenziali, aspetta 24 ore prima di procedere. Questo periodo di "raffreddamento" ti aiuta a distinguere tra desideri impulsivi e bisogni reali.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">3</span>
                Verifica regolarmente il tuo progresso
              </h3>
              <p className="text-gray-600">
                Dedica 15-30 minuti ogni settimana per rivedere le tue spese e assicurarti di essere in linea con il budget. Piccole correzioni frequenti sono più facili di grandi aggiustamenti.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">4</span>
                Pianifica le spese straordinarie
              </h3>
              <p className="text-gray-600">
                Crea fondi specifici per spese occasionali ma prevedibili (regali, vacanze, manutenzione auto). Distribuire queste spese durante l'anno evita sorprese al budget.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">5</span>
                Trova un partner di responsabilità
              </h3>
              <p className="text-gray-600">
                Condividi i tuoi obiettivi finanziari con un amico o un familiare che possa aiutarti a rimanere motivato e responsabile.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">6</span>
                Premiati per i successi
              </h3>
              <p className="text-gray-600">
                Includi nel budget piccoli premi quando raggiungi obiettivi specifici. Questo rende il processo più sostenibile e piacevole nel lungo periodo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">7</span>
                Sii flessibile e adattati
              </h3>
              <p className="text-gray-600">
                Un budget è uno strumento vivo che deve evolversi con le tue circostanze. Rivedi e aggiorna il tuo budget regolarmente per riflettere cambiamenti nella vita e nelle priorità.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-16">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Inizia a Prendere il Controllo delle Tue Finanze</h2>
          <p className="text-xl mb-8 opacity-90">
            Il primo passo verso la libertà finanziaria è creare un budget che funzioni per te. Scarica il nostro modello gratuito di budget e inizia oggi stesso.
          </p>
          
          <Link
            to="/strumenti/modello-budget"
            className="bg-white text-primary font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors inline-block"
          >
            Scarica il Modello di Budget
          </Link>
        </div>
      </section>

      {/* Consigli per situazioni specifiche */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Budget per Situazioni Specifiche</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/blog" className="block">
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Reddito Variabile</h3>
                <p className="text-gray-600">
                  Strategie di budgeting per freelancer, lavoratori stagionali e chi ha entrate non regolari.
                </p>
              </div>
            </Link>
            
            <Link to="/blog" className="block">
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Famiglie</h3>
                <p className="text-gray-600">
                  Come creare un budget familiare che tenga conto delle esigenze di tutti i membri.
                </p>
              </div>
            </Link>
            
            <Link to="/blog" className="block">
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Studenti</h3>
                <p className="text-gray-600">
                  Gestire le finanze durante gli studi tra tasse universitarie, libri e vita sociale.
                </p>
              </div>
            </Link>
            
            <Link to="/blog" className="block">
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Giovani Coppie</h3>
                <p className="text-gray-600">
                  Combinare le finanze e pianificare insieme il futuro: strategie per le coppie.
                </p>
              </div>
            </Link>
            
            <Link to="/blog" className="block">
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Budget di Emergenza</h3>
                <p className="text-gray-600">
                  Come adattare il budget durante periodi di crisi finanziaria o imprevisti.
                </p>
              </div>
            </Link>
            
            <Link to="/blog" className="block">
              <div className="bg-gray-50 rounded-lg p-6 h-full hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3">Pensionati</h3>
                <p className="text-gray-600">
                  Gestire le finanze a reddito fisso e pianificare per le esigenze della terza età.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* <Newsletter /> */}
    </Layout>
  );
};

export default Budgeting;
