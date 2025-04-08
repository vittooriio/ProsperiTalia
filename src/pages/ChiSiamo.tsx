
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter } from "lucide-react";

const ChiSiamo = () => {
  return (
    <Layout
      title="Chi Siamo - La nostra missione"
      description="Scopri chi siamo e la nostra missione di rendere l'educazione finanziaria accessibile a tutti con consigli pratici e strategie efficaci."
    >
      {/* Hero section */}
      <section className="bg-primary text-white py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi Siamo</h1>
          <p className="text-xl md:text-2xl mb-0">
            Rendiamo l'educazione finanziaria accessibile a tutti attraverso contenuti pratici, chiari e basati su evidenze.
          </p>
        </div>
      </section>

      {/* La nostra storia */}
      <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">La Nostra Storia</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              ProsperItalia è nato dalla passione di un piccolo gruppo di professionisti del settore finanziario con una missione chiara: rendere l'educazione finanziaria accessibile a tutti.
            </p>
            
            <p>
              Troppo spesso l'informazione finanziaria è presentata in modo complicato, piena di gergo e difficile da applicare alla vita reale. Noi di ProsperItalia crediamo che la conoscenza finanziaria debba essere:
            </p>
            
            <ul>
              <li><strong>Accessibile</strong> - Comprensibile per tutti, non solo per gli esperti</li>
              <li><strong>Pratica</strong> - Facilmente applicabile alla vita quotidiana</li>
              <li><strong>Imparziale</strong> - Non influenzata da interessi commerciali</li>
              <li><strong>Basata su evidenze</strong> - Supportata da ricerca e best practices</li>
            </ul>
            
            <p>
              Ogni giorno lavoriamo per creare contenuti che rispettino questi principi e che possano davvero fare la differenza nella vita finanziaria dei nostri lettori.
            </p>
          </div>
        </div>
      </section>

      {/* La nostra missione */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">La Nostra Missione</h2>
            <p className="text-xl text-center mb-12">
              Democratizzare la conoscenza finanziaria e aiutare le persone a prendere decisioni informate per costruire un futuro finanziario solido.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Educare</h3>
                <p className="text-gray-600">
                  Forniamo informazioni chiare e accessibili su tutti gli aspetti della finanza personale.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Guidare</h3>
                <p className="text-gray-600">
                  Offriamo strategie pratiche e strumenti concreti per migliorare la gestione finanziaria.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 mx-auto flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Ispirare</h3>
                <p className="text-gray-600">
                  Motiviamo le persone a prendere il controllo delle proprie finanze e a perseguire i propri obiettivi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Il nostro team
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Il Nostro Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80" 
                  alt="Marco Bianchi" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold">Marco Bianchi</h3>
              <p className="text-primary font-medium mb-3">Fondatore e Direttore</p>
              <p className="text-gray-600 mb-4">
                Ex consulente finanziario con 15 anni di esperienza nel settore bancario e degli investimenti.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="mailto:marco@ProsperItalia.it" className="text-gray-500 hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80" 
                  alt="Laura Ferrari" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold">Laura Ferrari</h3>
              <p className="text-primary font-medium mb-3">Responsabile Contenuti</p>
              <p className="text-gray-600 mb-4">
                Economista con specializzazione in finanza comportamentale e una passione per l'educazione finanziaria.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="mailto:laura@ProsperItalia.it" className="text-gray-500 hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80" 
                  alt="Giovanni Russo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-xl font-semibold">Giovanni Russo</h3>
              <p className="text-primary font-medium mb-3">Analista Finanziario</p>
              <p className="text-gray-600 mb-4">
                Esperto di mercati finanziari con un approccio orientato al valore e alla gestione del rischio.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="mailto:giovanni@ProsperItalia.it" className="text-gray-500 hover:text-primary transition-colors">
                  <Mail size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* I nostri valori */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">I Nostri Valori</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Trasparenza</h3>
              <p className="text-gray-600">
                Siamo completamente trasparenti riguardo le nostre fonti, metodologie e potenziali conflitti di interesse. Vogliamo che i nostri lettori si fidino delle informazioni che forniamo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Accessibilità</h3>
              <p className="text-gray-600">
                Crediamo che l'informazione finanziaria di qualità debba essere accessibile a tutti, indipendentemente dalla formazione o dalle risorse economiche.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Inclusività</h3>
              <p className="text-gray-600">
                La finanza personale non è uguale per tutti. Riconosciamo e rispettiamo le diverse situazioni economiche, culturali e sociali dei nostri lettori.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">Responsabilità</h3>
              <p className="text-gray-600">
                Prendiamo sul serio il nostro ruolo nell'influenzare le decisioni finanziarie delle persone e ci impegniamo a fornire sempre informazioni accurate e ben ricercate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Unisciti a Noi nel Nostro Percorso</h2>
          {/* <p className="text-xl mb-8">
            Vuoi far parte della nostra missione di migliorare l'educazione finanziaria? Ci sono diversi modi per collaborare con noi.
          </p> */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Link
              to="/contatti"
              className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              Contattaci
            </Link> */}
            <Link
              to="/blog"
              className="bg-transparent border border-white text-white font-semibold px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Leggi il nostro blog
            </Link>
          </div>
        </div>
      </section>

      {/* Collaborazioni */}
      {/* <section className="py-16 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center">Collaborazioni e Riconoscimenti</h2>
          
          <p className="text-lg text-center mb-12">
            Siamo orgogliosi di collaborare con organizzazioni che condividono la nostra missione di migliorare l'educazione finanziaria.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            <div className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=Partner+1" alt="Partner 1" className="max-h-12" />
            </div>
            <div className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=Partner+2" alt="Partner 2" className="max-h-12" />
            </div>
            <div className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=Partner+3" alt="Partner 3" className="max-h-12" />
            </div>
            <div className="p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all">
              <img src="https://via.placeholder.com/150x80?text=Partner+4" alt="Partner 4" className="max-h-12" />
            </div>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default ChiSiamo;
