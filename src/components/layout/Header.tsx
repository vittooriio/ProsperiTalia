
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
          <span className="text-primary font-montserrat font-bold text-2xl">Prosperi<span className="text-secondary">Talia</span></span>
        </Link>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="nav-link font-medium">Home</Link>
          <Link to="/blog" className="nav-link font-medium">Blog</Link>
          <Link to="/investimenti" className="nav-link font-medium">Investimenti</Link>
          <Link to="/risparmio" className="nav-link font-medium">Risparmio</Link>
          <Link to="/budgeting" className="nav-link font-medium">Budgeting</Link>
          {/* <Link to="/chi-siamo" className="nav-link font-medium">Chi Siamo</Link> */}
          {/* <Link to="/contatti" className="nav-link font-medium">Contatti</Link> */}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-3">
              <Link to="/" className="nav-link font-medium p-2" onClick={closeMenu}>Home</Link>
              <Link to="/blog" className="nav-link font-medium p-2" onClick={closeMenu}>Blog</Link>
              <Link to="/investimenti" className="nav-link font-medium p-2" onClick={closeMenu}>Investimenti</Link>
              <Link to="/risparmio" className="nav-link font-medium p-2" onClick={closeMenu}>Risparmio</Link>
              <Link to="/budgeting" className="nav-link font-medium p-2" onClick={closeMenu}>Budgeting</Link>
              {/* <Link to="/chi-siamo" className="nav-link font-medium p-2" onClick={closeMenu}>Chi Siamo</Link> */}
              {/* <Link to="/contatti" className="nav-link font-medium p-2" onClick={closeMenu}>Contatti</Link> */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
