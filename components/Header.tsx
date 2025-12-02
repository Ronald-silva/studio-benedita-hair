import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Button } from './ui/Button';
import { NAV_LINKS } from '../constants';

interface HeaderProps {
  onOpenBooking: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#" className={`font-heading font-bold text-xl md:text-2xl tracking-tighter ${isScrolled ? 'text-studio-black' : 'text-white'}`}>
            Studio <span className="text-studio-gold">Benedita</span> Hair
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className={`text-sm font-medium hover:text-studio-gold transition-colors uppercase tracking-wide ${isScrolled ? 'text-studio-black' : 'text-white'}`}
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="primary" 
            size="sm" 
            onClick={onOpenBooking}
            id="btn-agendar-header"
          >
            Agendar Agora
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-studio-black' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 flex flex-col p-6 gap-4 animate-in slide-in-from-top-5 duration-300">
          {NAV_LINKS.map((link) => (
            <button 
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-left text-lg font-medium text-studio-black py-2 border-b border-gray-50 last:border-0"
            >
              {link.label}
            </button>
          ))}
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => {
              setIsMenuOpen(false);
              onOpenBooking();
            }}
            className="mt-2"
          >
            Agendar Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;