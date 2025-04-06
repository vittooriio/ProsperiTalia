
import { useState } from "react";
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Grazie per esserti iscritto alla nostra newsletter!");
      setEmail("");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="bg-blue-50 py-16">
      {/* <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Iscriviti alla nostra Newsletter</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Ricevi i nostri migliori consigli e strategie di finanza personale direttamente nella tua casella email.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Il tuo indirizzo email"
            className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
            required
          />
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary disabled:opacity-70"
          >
            {isLoading ? "Iscrizione..." : "Iscriviti"}
          </button>
        </form>
        
        <p className="text-sm text-gray-500 mt-4">
          Non condivideremo mai il tuo indirizzo email. Puoi annullare l'iscrizione in qualsiasi momento.
        </p>
      </div> */}
    </section>
  );
};

export default Newsletter;
