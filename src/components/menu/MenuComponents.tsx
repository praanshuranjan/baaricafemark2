import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';

// Diet Icon Component - Bigger and clearer
export const DietIcon = ({ type }: { type?: DietType }) => {
  if (!type) return null;
  
  const configs = {
    veg: { border: 'border-success', label: 'Vegetarian' },
    'non-veg': { border: 'border-danger', label: 'Contains Chicken' },
    egg: { border: 'border-warning', label: 'Contains Egg' },
  };

  const config = configs[type];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-5 h-5 border-2 ${config.border} rounded-sm flex items-center justify-center bg-midnight/50`}>
        {type === 'non-veg' ? (
          <div className="w-0 h-0 border-l-[5px] border-r-[5px] border-b-[8px] border-l-transparent border-r-transparent border-b-danger" />
        ) : (
          <div className={`w-2.5 h-2.5 rounded-full ${type === 'veg' ? 'bg-success' : 'bg-warning'}`} />
        )}
      </div>
      <span className="text-cream/60 text-xs hidden sm:inline">{config.label}</span>
    </div>
  );
};

// Section Header Component
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-8">
    <h2 className="font-script text-3xl md:text-4xl text-gold mb-2">{title}</h2>
    {subtitle && (
      <p className="text-cream/70 font-serif text-sm italic">{subtitle}</p>
    )}
    <div className="w-24 h-0.5 bg-gradient-to-r from-gold to-transparent mt-3" />
  </div>
);

// Add-Ons Box Component
export const AddOnBox = ({ addOns }: { addOns: { name: string; price: string }[] }) => (
  <div className="bg-midnight-light/50 border border-gold/20 rounded-lg p-4 mt-6">
    <h4 className="text-gold font-serif text-sm uppercase tracking-wider mb-3">Add-Ons</h4>
    <div className="flex flex-wrap gap-4">
      {addOns.map((addon) => (
        <span key={addon.name} className="text-cream/80 text-sm">
          {addon.name} <span className="text-gold">{addon.price}</span>
        </span>
      ))}
    </div>
  </div>
);

// Food Card Component - Redesigned based on reference
export const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-cream/95 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
    {/* Image at top */}
    <div className="relative h-44 overflow-hidden">
      <img 
        src={PLACEHOLDER_IMAGE} 
        alt={item.title}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      {item.smallText && (
        <div className="absolute top-3 left-3 bg-gold text-midnight text-xs font-bold px-2 py-1 rounded">
          {item.smallText}
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-4 bg-cream">
      {/* Title */}
      <h3 className="font-serif text-gold text-lg font-semibold leading-tight mb-2">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-midnight/70 text-sm font-serif leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>
      )}
      
      {/* Bottom: Diet icon + Price */}
      <div className="flex justify-between items-center pt-3 border-t border-gold/20">
        <DietIcon type={item.dietType} />
        <span className="text-midnight font-serif font-bold text-lg">{item.price}</span>
      </div>
    </div>
  </div>
);

// Full Width Card for Platters - Shows ingredients as small text
export const FullWidthCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-cream/95 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 col-span-full">
    <div className="flex flex-col md:flex-row">
      {/* Image */}
      <div className="relative w-full md:w-56 h-48 md:h-auto overflow-hidden shrink-0">
        <img 
          src={PLACEHOLDER_IMAGE} 
          alt={item.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      {/* Content */}
      <div className="p-5 flex-1 bg-cream flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-serif text-gold text-xl font-semibold mb-2">
            {item.title}
          </h3>
          
          {/* Description */}
          {item.description && (
            <p className="text-midnight/70 text-sm font-serif leading-relaxed mb-2">
              {item.description}
            </p>
          )}
          
          {/* Ingredients as small text */}
          {item.smallText && (
            <p className="text-midnight/50 text-xs font-serif italic">
              Includes: {item.smallText}
            </p>
          )}
        </div>
        
        {/* Bottom: Diet icon + Price */}
        <div className="flex justify-between items-center pt-4 mt-4 border-t border-gold/20">
          <DietIcon type={item.dietType} />
          <span className="text-midnight font-serif font-bold text-xl">{item.price}</span>
        </div>
      </div>
    </div>
  </div>
);

// Drink Card Component - Simpler layout for beverages
export const DrinkCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-cream/95 rounded-lg p-4 hover:shadow-lg transition-all duration-300">
    <div className="flex justify-between items-start gap-3">
      <div className="flex-1">
        <h3 className="font-serif text-gold text-base font-semibold">{item.title}</h3>
        {item.description && (
          <p className="text-midnight/60 text-xs mt-1 font-serif">{item.description}</p>
        )}
      </div>
      <div className="flex flex-col items-end gap-2">
        {item.dietType && <DietIcon type={item.dietType} />}
        <span className="text-midnight font-serif font-bold">{item.price}</span>
      </div>
    </div>
  </div>
);

// Footnote Component
export const Footnote = ({ text }: { text: string }) => (
  <p className="text-cream/50 text-xs font-serif italic mt-6 border-t border-gold/10 pt-4">
    * {text}
  </p>
);
