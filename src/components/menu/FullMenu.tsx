import { menuSections } from '@/data/menuData';
import { 
  SectionHeader, 
  FoodCard, 
  FullWidthCard, 
  DrinkCard, 
  AddOnBox, 
  Footnote 
} from './MenuComponents';

// Sections that should use drink cards (compact layout)
const drinkSections = ['iced-tea', 'coolers', 'premium-shakes', 'thick-shakes', 'coffee', 'hot-beverages', 'cold-coffee'];

// Sections that have platters (full width cards for some items)
const platterTitles = ['Veg Platter', 'Non Veg Platter', 'Continental Platter Veg', 'Continental Platter Non Veg', 'Non Veg Hummus Platter', 'Veg Hummus Platter'];

const FullMenu = () => {
  return (
    <div className="bg-parchment/5 py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {menuSections.map((section) => {
          const isDrinkSection = drinkSections.includes(section.id);
          
          return (
            <section 
              key={section.id} 
              id={section.id}
              className="mb-16 scroll-mt-24"
            >
              <SectionHeader title={section.title} subtitle={section.subtitle} />
              
              <div className={`grid gap-6 ${
                isDrinkSection 
                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'
              }`}>
                {section.items.map((item) => {
                  const isPlatter = platterTitles.includes(item.title);
                  
                  if (isDrinkSection) {
                    return <DrinkCard key={item.title} item={item} />;
                  }
                  
                  if (isPlatter) {
                    return <FullWidthCard key={item.title} item={item} />;
                  }
                  
                  return <FoodCard key={item.title} item={item} />;
                })}
              </div>
              
              {section.addOns && <AddOnBox addOns={section.addOns} />}
              
              {section.footnote && <Footnote text={section.footnote} />}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default FullMenu;
