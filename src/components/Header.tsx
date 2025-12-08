import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Ornament from './Ornament';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = ['Home', 'Menu', 'Our Story', 'Gallery', 'Contact'];

  return (
    <header className="relative z-50 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex flex-col items-center mb-4">
          <div className="flex items-center gap-4">
            <Ornament className="text-gold rotate-180 hidden sm:block" />
            <h1 className="font-script text-4xl md:text-5xl lg:text-6xl text-gold tracking-wide">
              Baari Café
            </h1>
            <Ornament className="text-gold hidden sm:block" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="font-serif text-gold-light hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden absolute right-4 top-6 text-gold p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute left-0 right-0 top-full bg-midnight-deep/95 backdrop-blur-sm py-6 animate-fade-in">
            <div className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-gold-light hover:text-gold transition-colors duration-300 text-sm tracking-widest uppercase"
                >
                  {link}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
