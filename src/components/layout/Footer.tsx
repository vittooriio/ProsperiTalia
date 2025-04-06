
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">ProsperiTalia</h3>
            <p className="text-gray-300">
              La tua guida alla finanza personale. Articoli, consigli e strategie per gestire meglio il tuo denaro.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Risorse</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/investimenti" className="text-gray-300 hover:text-primary transition-colors">Investimenti</Link></li>
              <li><Link to="/risparmio" className="text-gray-300 hover:text-primary transition-colors">Risparmio</Link></li>
              <li><Link to="/budgeting" className="text-gray-300 hover:text-primary transition-colors">Budgeting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Informazioni</h3>
            <ul className="space-y-2">
              <li><Link to="/chi-siamo" className="text-gray-300 hover:text-primary transition-colors">Chi Siamo</Link></li>
              <li><Link to="/contatti" className="text-gray-300 hover:text-primary transition-colors">Contatti</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/termini-servizio" className="text-gray-300 hover:text-primary transition-colors">Termini di Servizio</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Seguici</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="text-gray-300 hover:text-primary transition-colors" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="text-gray-300 hover:text-primary transition-colors" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-gray-300">Iscriviti alla newsletter:</p>
              <form className="flex mt-2">
                <input
                  type="email"
                  placeholder="La tua email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                />
                <button type="submit" className="bg-primary px-4 py-2 rounded-r-md hover:bg-primary/90 transition-colors">
                  <Mail size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} ProsperiTalia. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
