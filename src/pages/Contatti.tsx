
import { useState } from "react";
import { toast } from "sonner";
import Layout from "../components/layout/Layout";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    oggetto: "",
    messaggio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulazione invio form
    setTimeout(() => {
      toast.success("Messaggio inviato con successo! Ti risponderemo al più presto.");
      setFormData({
        nome: "",
        email: "",
        oggetto: "",
        messaggio: "",
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout
      title="Contatti - Scrivici"
      description="Contattaci per domande, collaborazioni o feedback. Il nostro team è pronto ad aiutarti per qualsiasi esigenza relativa alla finanza personale."
    >
      {/* Hero section */}
      <section className="bg-primary text-white py-16">
        <div className="container text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contattaci</h1>
          <p className="text-xl">
            Hai domande, idee di collaborazione o feedback? Siamo qui per aiutarti. Contattaci e ti risponderemo al più presto.
          </p>
        </div>
      </section>

      {/* Info e Form */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonna sinistra - Informazioni di contatto */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-8 h-full">
                <h2 className="text-2xl font-semibold mb-6">Informazioni di Contatto</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href="mailto:info@finwell.it" className="text-primary hover:underline">info@finwell.it</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Telefono</h3>
                      <a href="tel:+390123456789" className="hover:text-primary">+39 012 345 6789</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Indirizzo</h3>
                      <address className="not-italic">
                        Via dell'Educazione Finanziaria, 42<br />
                        20123 Milano, Italia
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Clock className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Orari</h3>
                      <p>Lunedì - Venerdì: 9:00 - 18:00</p>
                      <p>Weekend: Chiuso</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold mb-3">Seguici sui Social</h3>
                  <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                      </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Colonna destra - Form di contatto */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Inviaci un messaggio</h2>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                        Nome completo <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nome"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="oggetto" className="block text-sm font-medium text-gray-700 mb-1">
                      Oggetto <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="oggetto"
                      name="oggetto"
                      value={formData.oggetto}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Seleziona un'opzione</option>
                      <option value="Richiesta informazioni">Richiesta informazioni</option>
                      <option value="Proposta di collaborazione">Proposta di collaborazione</option>
                      <option value="Supporto">Supporto</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Altro">Altro</option>
                    </select>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="messaggio" className="block text-sm font-medium text-gray-700 mb-1">
                      Messaggio <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="mt-1"
                      />
                      <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                        Ho letto e accetto la <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>. Acconsento al trattamento dei miei dati personali. <span className="text-red-500">*</span>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center justify-center disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      "Invio in corso..."
                    ) : (
                      <>
                        Invia messaggio
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Domande Frequenti</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Quanto tempo ci vuole per ricevere una risposta?</h3>
              <p className="text-gray-600">
                Ci impegniamo a rispondere a tutte le richieste entro 1-2 giorni lavorativi. Per questioni più complesse potrebbe essere necessario un po' più di tempo.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Offrite consulenze finanziarie personalizzate?</h3>
              <p className="text-gray-600">
                No, non offriamo consulenze finanziarie personalizzate. Il nostro obiettivo è fornire informazioni educative generali. Per consigli specifici sulla tua situazione, ti consigliamo di rivolgerti a un consulente finanziario autorizzato.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Come posso proporvi un argomento per un articolo?</h3>
              <p className="text-gray-600">
                Siamo sempre aperti a suggerimenti! Puoi inviarci la tua proposta compilando il modulo di contatto e selezionando "Feedback" o "Altro" come oggetto.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-2">Accettate guest post o collaborazioni?</h3>
              <p className="text-gray-600">
                Siamo aperti a collaborazioni con esperti del settore che condividono la nostra missione. Contattaci con i dettagli della tua proposta selezionando "Proposta di collaborazione" come oggetto nel modulo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="py-16 bg-white">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Dove Trovarci</h2>
          <div className="aspect-[16/9] rounded-lg overflow-hidden">
            <iframe
              title="Mappa FinWell"
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.1965588245943!2d9.189345776827104!3d45.464825032012204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c6aec34636a1%3A0xab7f4e27101a2e19!2sPiazza%20del%20Duomo%2C%20Milano%20MI!5e0!3m2!1sit!2sit!4v1708787057961!5m2!1sit!2sit"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary/10 py-16">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">Rimani Aggiornato</h2>
          <p className="text-lg mb-8">
            Iscriviti alla nostra newsletter per ricevere articoli, guide e consigli sulla finanza personale direttamente nella tua inbox.
          </p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Il tuo indirizzo email"
              className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="btn-primary"
            >
              Iscrivimi
            </button>
          </form>
          
          <p className="text-sm mt-4 text-gray-600">
            Non condivideremo mai il tuo indirizzo email. Puoi annullare l'iscrizione in qualsiasi momento.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contatti;
