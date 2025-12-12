import { useState, useEffect } from 'react';
import { Menu, X, Home, Camera } from 'lucide-react';
import { menuSections } from '@/data/menuData';
import { useActiveSection } from '@/hooks/useActiveSection';

// Navigation items grouped for JugMug style
const navItems = [
  { id: 'appetizers', label: 'Snacks &\nStarters' },
  { id: 'pizza', label: 'Pizza &\nPasta' },
  { id: 'burgers', label: 'Burgers &\nSandwich' },
  { id: 'mains', label: 'Mains &\nRice' },
  { id: 'desserts', label: 'Desserts &\nDrinks' },
  { id: 'coffee', label: 'Chai &\nCoffee' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      {/* Top bar with logo */}
      <div className="bg-[#FFFBF2] relative py-4">
        {/* Icon buttons */}
        <div className="absolute top-4 left-4 right-4 flex justify-between pointer-events-none">
          <button className="pointer-events-auto bg-[#E8E0C5] p-2 rounded-lg text-[#5C3019]">
            <Home size={20} />
          </button>
          <button className="pointer-events-auto bg-[#E8E0C5] p-2 rounded-lg text-[#5C3019]">
            <Camera size={20} />
          </button>
        </div>
        
        {/* Logo */}
        <div className="text-center">
          <h1 className="font-slab text-3xl md:text-4xl text-[#5C3019] uppercase tracking-wider leading-none">
            Baari
          </h1>
          <span className="font-slab text-lg md:text-xl text-[#D2691E] uppercase tracking-wide">
            Café
          </span>
        </div>
      </div>

      {/* Navigation bar - Sage green */}
      <div className="bg-[#C4D7C4] border-t-2 border-b-2 border-[#A8BFA8] overflow-x-auto scrollbar-hide">
        <div className="flex whitespace-nowrap">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex-1 min-w-[80px] font-slab text-[10px] md:text-xs text-center py-2 px-3 uppercase leading-tight transition-colors whitespace-pre-line ${
                index < navItems.length - 1 ? 'border-r border-[#5C3019]/20' : ''
              } ${
                activeSection === item.id
                  ? 'text-[#5C3019] font-bold'
                  : 'text-[#D2691E] hover:text-[#5C3019]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button (for full menu access) */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed bottom-6 right-6 bg-[#5C3019] text-white p-4 rounded-full shadow-xl z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Full Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden fixed inset-0 bg-[#FFFBF2]/98 backdrop-blur-sm z-40 animate-fade-in overflow-y-auto pt-32">
          <div className="flex flex-col items-center px-6 pb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 text-[#5C3019] p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            
            <h2 className="font-slab text-2xl text-[#5C3019] mb-6 uppercase">Full Menu</h2>
            
            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`font-slab text-xs tracking-wider uppercase py-3 px-4 rounded-lg border-2 transition-all ${
                    activeSection === section.id
                      ? 'text-[#5C3019] border-[#5C3019] bg-[#5C3019]/10'
                      : 'text-[#D2691E] border-[#D2691E]/30 hover:border-[#D2691E]'
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
