import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navClass = "nav-link font-medium";
  const activeClass = "text-blue-500"; // colore azzurro per il link attivo

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container flex justify-between items-center">
        <NavLink
          to="/"
          className={navData => `${navClass} ${navData.isActive ? activeClass : ""}`}
          onClick={closeMenu}
        >
          <span className="text-primary font-montserrat font-bold text-2xl">
            Prosperi<span className="text-secondary">Talia</span>
          </span>
        </NavLink>

        {/* Mobile menu button */}
        <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <NavLink to="/" className={navData => `${navClass} ${navData.isActive ? activeClass : ""}`}>
            Home
          </NavLink>
          <NavLink to="/blog" className={navData => `${navClass} ${navData.isActive ? activeClass : ""}`}>
            Blog
          </NavLink>
          <NavLink to="/investimenti" className={navData => `${navClass} ${navData.isActive ? activeClass : ""}`}>
            Investimenti
          </NavLink>
          <NavLink to="/risparmio" className={navData => `${navClass} ${navData.isActive ? activeClass : ""}`}>
            Risparmio
          </NavLink>
          <NavLink to="/budgeting" className={navData => `${navClass} ${navData.isActive ? activeClass : ""}`}>
            Budgeting
          </NavLink>
          {/* eventualmente altri link */}
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md md:hidden z-50">
            <nav className="flex flex-col p-4 space-y-3">
              <NavLink to="/" className={navData => `${navClass} p-2 ${navData.isActive ? activeClass : ""}`} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/blog" className={navData => `${navClass} p-2 ${navData.isActive ? activeClass : ""}`} onClick={closeMenu}>
                Blog
              </NavLink>
              <NavLink to="/investimenti" className={navData => `${navClass} p-2 ${navData.isActive ? activeClass : ""}`} onClick={closeMenu}>
                Investimenti
              </NavLink>
              <NavLink to="/risparmio" className={navData => `${navClass} p-2 ${navData.isActive ? activeClass : ""}`} onClick={closeMenu}>
                Risparmio
              </NavLink>
              <NavLink to="/budgeting" className={navData => `${navClass} p-2 ${navData.isActive ? activeClass : ""}`} onClick={closeMenu}>
                Budgeting
              </NavLink>
              {/* eventualmente altri link */}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
