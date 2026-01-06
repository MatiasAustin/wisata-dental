import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
      <div className={`container mx-auto px-4 md:px-6 transition-all duration-500`}>
        <div className={`flex justify-between items-center rounded-full transition-all duration-300 ${isScrolled ? 'bg-white/70 backdrop-blur-md border border-white/50 shadow-lg shadow-stone-200/20 px-6 py-3' : 'px-0'}`}>
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center text-white font-serif font-medium text-xl group-hover:scale-105 transition-transform duration-300">W</div>
            <div>
              <h1 className="font-serif font-medium text-xl leading-none text-stone-900">
                Wisata Dental
              </h1>
              <p className="text-[10px] text-stone-500 uppercase tracking-widest font-sans mt-0.5">Cikampek</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-stone-600 hover:text-stone-900 font-medium text-sm transition-colors font-sans tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-full font-medium text-sm transition-all transform hover:shadow-lg flex items-center gap-2 font-sans"
            >
              <Phone size={14} />
              Reservasi
            </a>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-800 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-4 right-4 glass-card rounded-3xl p-6 animate-fade-in-down shadow-xl z-50">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-stone-800 font-serif text-lg font-medium py-2 border-b border-stone-100/50 last:border-0"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="bg-stone-900 text-white py-3 rounded-xl text-center font-medium mt-2"
              onClick={() => setIsOpen(false)}
            >
              Reservasi via WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;