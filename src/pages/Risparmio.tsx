
import Layout from "../components/layout/Layout";
import HeroSection from "../components/ui/HeroSection";
import { Link } from "react-router-dom";
import { PiggyBank, Wallet, ShoppingBag, LightbulbIcon } from "lucide-react";
import CallToAction from "../components/ui/CallToAction";

const Risparmio = () => {
  return (
    <Layout
      title="Risparmio - Strategie Efficaci"
      description="Scopri strategie pratiche e consigli efficaci per risparmiare denaro, costruire un fondo d'emergenza e raggiungere i tuoi obiettivi finanziari."
    >
      <HeroSection
        title="Strategie di Risparmio"
        subtitle="Tecniche pratiche per risparmiare denaro ogni giorno, costruire un fondo di emergenza e raggiungere i tuoi obiettivi finanziari."
        image="https://images.unsplash.com/photo-1579621970795-87facc2f976d?auto=format&fit=crop&q=80"
      />

      {/* Introduzione */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Perché il Risparmio è Fondamentale</h2>
          <p className="text-lg mb-6">
            Il risparmio è la base di una solida struttura finanziaria personale. Non si tratta semplicemente di rinunciare ai piaceri della vita, ma di fare scelte consapevoli su come utilizzare il proprio denaro.
          </p>
          <p className="text-lg mb-8">
            Un approccio strutturato al risparmio ti permette di:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">1</span>
                Costruire sicurezza finanziaria
              </h3>
              <p>Un fondo di emergenza solido ti protegge da imprevisti e riduce lo stress finanziario.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">2</span>
                Raggiungere obiettivi importanti
              </h3>
              <p>Che si tratti di acquistare casa, viaggiare o creare un'attività, il risparmio è il primo passo.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">3</span>
                Prepararti per il futuro
              </h3>
              <p>La pensione e altre esigenze a lungo termine richiedono pianificazione e risparmio costante.</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2">4</span>
                Creare opportunità di investimento
              </h3>
              <p>I risparmi sono la materia prima per gli investimenti che faranno crescere il tuo patrimonio nel tempo.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategie di risparmio quotidiano */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Strategie di Risparmio Quotidiano</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Piccoli cambiamenti nelle abitudini quotidiane possono portare a significativi risparmi nel lungo periodo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <ShoppingBag size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spesa Intelligente</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Pianifica i pasti settimanali prima della spesa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Utilizza app per confrontare prezzi e trovare offerte</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Acquista prodotti di stagione e in offerta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Considera marchi alternativi e prodotti sfusi</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/blog/risparmiare-spese-quotidiane" className="text-primary hover:text-primary/80 font-medium">
                  Leggi l'articolo completo →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <Wallet size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Gestione delle Utenze</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Confronta regolarmente le offerte di fornitori diversi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Investi in dispositivi a basso consumo energetico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Ottimizza l'uso di elettrodomestici nelle ore non di punta</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Considera piccole modifiche strutturali per l'efficienza energetica</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/blog" className="text-primary hover:text-primary/80 font-medium">
                  Scopri come ottimizzare le utenze →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full mb-4">
                <LightbulbIcon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Abitudini Quotidiane</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Prepara il caffè e i pasti a casa</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Utilizza la regola delle 24 ore prima di acquisti non essenziali</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Sfrutta biblioteche, parchi e attività gratuite</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span> 
                  <span>Rivaluta abbonamenti e iscrizioni non utilizzati</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link to="/blog" className="text-primary hover:text-primary/80 font-medium">
                  Altre strategie quotidiane →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fondo d'emergenza */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <div className="bg-secondary/10 rounded-lg p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center mr-6">
                <PiggyBank size={32} />
              </div>
              <h2 className="text-3xl font-bold">Costruire un Fondo di Emergenza</h2>
            </div>
            
            <p className="text-lg mb-6">
              Un fondo di emergenza è la prima linea di difesa contro imprevisti finanziari. Ecco come crearne uno solido:
            </p>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Quanto dovrebbe essere grande?</h3>
                <p>
                  La regola generale è avere da 3 a 6 mesi di spese essenziali. Se hai un reddito variabile o responsabilità familiari, considera di aumentare questa cifra a 6-12 mesi.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Dove conservarlo</h3>
                <p>
                  Il fondo di emergenza deve essere facilmente accessibile ma separato dai conti correnti ordinari. Considera un conto di risparmio ad alto rendimento o un conto deposito a breve termine.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Come costruirlo gradualmente</h3>
                <p>
                  Inizia con un obiettivo modesto (ad esempio €1.000) e poi aumenta gradualmente. Automatizza i trasferimenti mensili per rendere il risparmio una priorità.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Quando utilizzarlo</h3>
                <p>
                  Il fondo di emergenza dovrebbe essere usato solo per vere emergenze: spese mediche impreviste, riparazioni urgenti, perdita di lavoro. Non è destinato a vacanze o acquisti pianificabili.
                </p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link to="/blog/fondo-emergenza" className="btn-secondary">
                Guida completa al fondo di emergenza
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge di risparmio */}
      <section className="py-16 bg-gray-100">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Challenge di Risparmio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-primary flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Challenge 30 Giorni</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Per 30 giorni, impegnati a non fare acquisti non essenziali. Ogni volta che sei tentato di fare un acquisto impulsivo, trasferisci quella somma in un conto di risparmio.
                </p>
                <p className="mb-6">
                  Al termine dei 30 giorni, avrai una nuova consapevolezza delle tue abitudini di spesa e un gruzzoletto extra.
                </p>
                <Link to="/blog" className="btn-primary inline-block">
                  Partecipa alla challenge
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-40 bg-secondary flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Challenge 52 Settimane</h3>
              </div>
              <div className="p-6">
                <p className="mb-4">
                  Inizia risparmiando €1 la prima settimana, €2 la seconda, e così via. Alla fine dell'anno avrai risparmiato €1.378.
                </p>
                <p className="mb-6">
                  Questa challenge graduale ti aiuta a costruire l'abitudine del risparmio in modo progressivo e sostenibile.
                </p>
                <Link to="/blog" className="btn-secondary inline-block">
                  Scarica il piano settimanale
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Storie di Successo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80" 
                    alt="Martina" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Martina, 32 anni</h3>
                  <p className="text-gray-500">Insegnante</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "Seguendo la strategia del risparmio automatico, sono riuscita a costruire il mio fondo di emergenza di 6 mesi in soli 18 mesi, nonostante uno stipendio medio. È incredibile come piccoli cambiamenti nelle abitudini quotidiane possano fare una grande differenza."
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100">
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img 
                    src="https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80" 
                    alt="Alessandro" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">Alessandro, 28 anni</h3>
                  <p className="text-gray-500">Libero professionista</p>
                </div>
              </div>
              <p className="italic text-gray-600">
                "La challenge dei 30 giorni è stata un'esperienza illuminante. Non solo ho risparmiato €560 in un mese, ma ho anche scoperto quanti acquisti facessi per abitudine o noia. Ora sono molto più consapevole e gestisco meglio il mio denaro."
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction
        title="Pronto a iniziare il tuo percorso di risparmio?"
        description="Accedi alle nostre guide complete e strumenti pratici per costruire abitudini di risparmio efficaci e durature."
        buttonText="Inizia oggi stesso"
        buttonLink="/blog/risparmiare-spese-quotidiane"
        bgColor="bg-secondary"
      />
    </Layout>
  );
};

export default Risparmio;
