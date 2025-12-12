import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Ornament from './Ornament';
import { menuSections } from '@/data/menuData';
import { useActiveSection } from '@/hooks/useActiveSection';

const drinkSectionIds = ['coffee', 'hot-beverages', 'cold-coffee', 'iced-tea', 'coolers', 'premium-shakes', 'thick-shakes'];

const mainNavItems = [
  { id: 'appetizers', label: 'Appetizers' },
  { id: 'pizza', label: 'Pizza' },
  { id: 'pasta', label: 'Pasta' },
  { id: 'chinese', label: 'Chinese' },
  { id: 'rice', label: 'Rice' },
  { id: 'burgers', label: 'Burgers' },
  { id: 'sandwiches', label: 'Sandwiches' },
  { id: 'sides', label: 'Sides' },
  { id: 'fries', label: 'Fries' },
  { id: 'salads', label: 'Salads' },
  { id: 'mains', label: 'Mains' },
  { id: 'desserts', label: 'Desserts' },
];

const drinkSubItems = [
  { id: 'coffee', label: 'Coffee' },
  { id: 'hot-beverages', label: 'Hot Beverages' },
  { id: 'cold-coffee', label: 'Cold Coffee' },
  { id: 'iced-tea', label: 'Iced Tea' },
  { id: 'coolers', label: 'Coolers' },
  { id: 'premium-shakes', label: 'Premium Shakes' },
  { id: 'thick-shakes', label: 'Thick Shakes' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDrinksOpen, setIsDrinksOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const allSectionIds = menuSections.map(s => s.id);
  const activeSection = useActiveSection(allSectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setIsDrinksOpen(false);
  };

  const isActiveDrink = drinkSectionIds.includes(activeSection);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-midnight-deep/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Logo */}
        <div className="flex flex-col items-center mb-2">
          <div className="flex items-center gap-4">
            <Ornament className="text-gold rotate-180 hidden sm:block w-8" />
            <h1 className="font-script text-3xl md:text-4xl lg:text-5xl text-gold tracking-wide">
              Baari Café
            </h1>
            <Ornament className="text-gold hidden sm:block w-8" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center items-center gap-1 xl:gap-2 flex-wrap">
          {mainNavItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-serif text-xs xl:text-sm tracking-wider uppercase px-2 xl:px-3 py-1 transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-gold-light hover:text-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
          
          {/* Drinks Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDrinksOpen(!isDrinksOpen)}
              onMouseEnter={() => setIsDrinksOpen(true)}
              className={`font-serif text-xs xl:text-sm tracking-wider uppercase px-2 xl:px-3 py-1 transition-all duration-300 flex items-center gap-1 ${
                isActiveDrink
                  ? 'text-gold border-b-2 border-gold'
                  : 'text-gold-light hover:text-gold'
              }`}
            >
              Drinks
              <ChevronDown size={14} className={`transition-transform ${isDrinksOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isDrinksOpen && (
              <div 
                className="absolute top-full left-0 mt-2 bg-midnight-deep/95 backdrop-blur-sm border border-gold/20 rounded-lg py-2 min-w-[160px] shadow-xl"
                onMouseLeave={() => setIsDrinksOpen(false)}
              >
                {drinkSubItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left px-4 py-2 font-serif text-sm transition-colors ${
                      activeSection === item.id
                        ? 'text-gold bg-gold/10'
                        : 'text-gold-light hover:text-gold hover:bg-gold/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden absolute right-4 top-6 text-gold p-2"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden fixed inset-0 top-0 bg-midnight-deep/98 backdrop-blur-sm z-40 animate-fade-in overflow-y-auto">
            <div className="flex flex-col items-center pt-24 pb-8 px-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-4 text-gold p-2"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
              
              <h2 className="font-script text-2xl text-gold mb-8">Menu</h2>
              
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                {mainNavItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-serif text-sm tracking-wider uppercase py-3 px-4 rounded-lg border transition-all ${
                      activeSection === item.id
                        ? 'text-gold border-gold bg-gold/10'
                        : 'text-gold-light border-gold/20 hover:border-gold/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              
              <h3 className="font-script text-xl text-gold mt-8 mb-4">Drinks</h3>
              
              <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
                {drinkSubItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`font-serif text-sm tracking-wider py-3 px-4 rounded-lg border transition-all ${
                      activeSection === item.id
                        ? 'text-gold border-gold bg-gold/10'
                        : 'text-gold-light border-gold/20 hover:border-gold/40'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
