import { menuSections } from '@/data/menuData';
import { 
  BannerHeader,
  SectionHeader, 
  FoodCard, 
  FullWidthCard, 
  DrinkCard, 
  ListCard,
  AddOnBox, 
  Footnote 
} from './MenuComponents';

// Sections that should use drink cards (with images, 2-col grid)
const drinkCardSections = ['iced-tea', 'premium-shakes', 'thick-shakes', 'coolers', 'coffee', 'hot-beverages', 'cold-coffee'];

// Sections that should use list cards (compact, no images)
const listCardSections = [];

// Sections that have platters (use FoodCard in grid like others)
const platterTitles = [];

// Sections that get banner headers (warm chocolate background)
const bannerSections = ['appetizers', 'desserts', 'pizza', 'pasta', 'chinese', 'rice', 'burgers', 'sandwiches', 'sides', 'fries', 'salads', 'mains', 'iced-tea', 'cakes', 'coolers', 'premium-shakes', 'thick-shakes', 'coffee', 'hot-beverages', 'cold-coffee'];

const FullMenu = () => {
  return (
    <div className="py-12">
      <div className="max-w-2xl mx-auto">
        {menuSections.map((section) => {
          const isDrinkCardSection = drinkCardSections.includes(section.id);
          const isListCardSection = listCardSections.includes(section.id);
          const isBannerSection = bannerSections.includes(section.id);
          
          return (
            <section 
              key={section.id} 
              id={section.id}
              className="mb-12 scroll-mt-32"
            >
              {/* Header - Banner style for all sections */}
              <BannerHeader title={section.title} subtitle={section.subtitle} />
              
              {/* Cards Grid */}
              {isListCardSection ? (
                // List layout for drinks
                <div className="px-4">
                  {section.items.map((item) => (
                    <ListCard key={item.title} item={item} />
                  ))}
                </div>
              ) : (
                // Grid layout for food/drinks with images
                <div className="grid grid-cols-2 gap-4 px-4">
                  {section.items.map((item) => {
                    if (isDrinkCardSection) {
                      return <DrinkCard key={item.title} item={item} />;
                    }
                    
                    return <FoodCard key={item.title} item={item} />;
                  })}
                </div>
              )}
              
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
