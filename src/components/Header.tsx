import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Ornament from './Ornament';
import { menuSections } from '@/data/menuData';
import { useActiveSection } from '@/hooks/useActiveSection';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
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
    setIsOpen(false);
  };

  return (
    <>
      {/* Header with Logo */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-midnight-deep/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4">
              <Ornament className="text-gold rotate-180 hidden sm:block w-8" />
              <h1 className="font-script text-3xl md:text-4xl lg:text-5xl text-gold tracking-wide">
                Baari Café
              </h1>
              <Ornament className="text-gold hidden sm:block w-8" />
            </div>
          </div>
        </div>
      </header>

      {/* Floating Menu Button */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="fixed bottom-6 right-6 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm rounded-full w-16 h-16 shadow-xl border border-gold/30 transition-all duration-300 hover:scale-105 hover:border-gold/50"
            aria-label="Open menu"
          >
            <Menu size={22} className="text-gold" />
            <span className="text-[10px] font-serif text-gold mt-0.5 uppercase tracking-wider">Menu</span>
          </button>
        </SheetTrigger>
        
        <SheetContent 
          side="bottom" 
          className="bg-midnight-deep/98 backdrop-blur-md border-t border-gold/20 rounded-t-3xl max-h-[70vh] overflow-hidden"
        >
          <SheetHeader className="pb-4 border-b border-gold/10">
            <SheetTitle className="font-script text-2xl text-gold text-center">
              Browse Menu
            </SheetTitle>
          </SheetHeader>
          
          <div className="overflow-y-auto max-h-[calc(70vh-100px)] py-4 px-2">
            <div className="space-y-1">
              {menuSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === section.id
                      ? 'bg-gold/15 text-gold'
                      : 'text-cream hover:bg-gold/5 hover:text-gold'
                  }`}
                >
                  <span className="font-serif text-base tracking-wide">{section.title}</span>
                  <span className={`text-sm ${
                    activeSection === section.id ? 'text-gold/80' : 'text-cream/50'
                  }`}>
                    {section.items.length} items
                  </span>
                </button>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default Header;
