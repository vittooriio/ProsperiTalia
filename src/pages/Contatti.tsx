
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6">FAQ</h1>

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

      

     
    </Layout>
  );
};

export default Contatti;
