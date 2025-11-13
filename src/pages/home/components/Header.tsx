
import { useState } from 'react';

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-[#0E0E0E]/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold text-[#F2C7DA]" style={{ fontFamily: "'Playfair Display', serif" }}>
              Shine & Shape
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('acasa')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Acasă
            </button>
            <button onClick={() => scrollToSection('servicii')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Servicii
            </button>
            <button onClick={() => scrollToSection('galerie')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Galerie
            </button>
            <button onClick={() => scrollToSection('stiliste')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Stiliste
            </button>
            <button onClick={() => scrollToSection('preturi')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Prețuri
            </button>
            <button onClick={() => scrollToSection('programari')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Programări
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-white hover:text-[#F2C7DA] transition-colors whitespace-nowrap">
              Contact
            </button>
          </nav>

          <button
            onClick={() => scrollToSection('programari')}
            className="hidden lg:block px-6 py-3 bg-gradient-to-r from-[#F2C7DA] to-[#F5C84C] text-[#0E0E0E] font-semibold rounded-full hover:shadow-[0_0_20px_rgba(242,199,218,0.6)] transition-all duration-300 whitespace-nowrap"
          >
            Rezervă acum
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center"
          >
            <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E0E0E]/98 backdrop-blur-lg border-t border-[#F2C7DA]/20">
          <div className="px-4 py-6 space-y-4">
            <button onClick={() => scrollToSection('acasa')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Acasă
            </button>
            <button onClick={() => scrollToSection('servicii')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Servicii
            </button>
            <button onClick={() => scrollToSection('galerie')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Galerie
            </button>
            <button onClick={() => scrollToSection('stiliste')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Stiliste
            </button>
            <button onClick={() => scrollToSection('preturi')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Prețuri
            </button>
            <button onClick={() => scrollToSection('programari')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Programări
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-white hover:text-[#F2C7DA] transition-colors py-2 whitespace-nowrap">
              Contact
            </button>
            <button
              onClick={() => scrollToSection('programari')}
              className="w-full px-6 py-3 bg-gradient-to-r from-[#F2C7DA] to-[#F5C84C] text-[#0E0E0E] font-semibold rounded-full hover:shadow-[0_0_20px_rgba(242,199,218,0.6)] transition-all duration-300 whitespace-nowrap"
            >
              Rezervă acum
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
