import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';

// Diet Icon Component - Baari Style (with optional label)
export const DietIcon = ({ type, showLabel = true }: { type?: DietType; showLabel?: boolean }) => {
  if (!type) return null;
  
  const configs = {
    veg: { border: 'border-emerald-600', bg: 'bg-emerald-600', textColor: 'text-emerald-700', label: 'Vegetarian' },
    'non-veg': { border: 'border-red-700', bg: 'bg-red-700', textColor: 'text-red-700', label: 'Contains Chicken' },
    egg: { border: 'border-amber-600', bg: 'bg-amber-600', textColor: 'text-amber-700', label: 'Contains Egg' },
  };

  const config = configs[type];

  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-4 h-4 border-2 ${config.border} flex items-center justify-center`}>
        {type === 'non-veg' ? (
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-red-700" />
        ) : (
          <div className={`w-2.5 h-2.5 rounded-full ${config.bg}`} />
        )}
      </div>
      {showLabel && <span className={`text-xs font-medium ${config.textColor}`}>{config.label}</span>}
    </div>
  );
};

// Section Header - Baari elegant style with gold accent
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 px-4 text-center">
    <h2 className="font-script text-3xl md:text-4xl text-gold mb-2">{title}</h2>
    {subtitle && (
      <p className="font-serif text-sm text-cream/70 italic">{subtitle}</p>
    )}
    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mt-3" />
  </div>
);

// Banner Header - For featured sections (warm chocolate background)
export const BannerHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="bg-chocolate text-cream px-6 py-5 rounded-xl mx-4 mb-6 shadow-lg">
    <h2 className="font-script text-2xl md:text-3xl text-gold mb-2">{title}</h2>
    {subtitle && (
      <p className="font-serif text-sm text-cream/80 italic">{subtitle}</p>
    )}
  </div>
);

// Add-Ons Box Component
export const AddOnBox = ({ addOns }: { addOns: { name: string; price: string }[] }) => (
  <div className="bg-midnight/30 border border-gold/20 rounded-xl p-4 mx-4 mt-4 backdrop-blur-sm">
    <h4 className="font-serif text-sm text-gold uppercase tracking-wider mb-3">Add-Ons</h4>
    <div className="flex flex-wrap gap-4">
      {addOns.map((addon) => (
        <span key={addon.name} className="text-sm text-cream/80">
          {addon.name} <span className="font-bold text-gold">{addon.price}</span>
        </span>
      ))}
    </div>
  </div>
);

// Food Card Component - Baari Style (Warm cream cards)
export const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-warm-cream rounded-xl overflow-hidden shadow-md border border-chocolate/10 hover:shadow-xl transition-shadow duration-300">
    {/* Image at top */}
    <div className="relative">
      <img 
        src={PLACEHOLDER_IMAGE} 
        alt={item.title}
        className="w-full h-36 object-cover"
        loading="lazy"
      />
      {item.smallText && (
        <div className="absolute top-2 left-2 bg-chocolate text-cream text-[10px] font-bold px-2 py-0.5 rounded">
          {item.smallText}
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-3">
      {/* Title */}
      <h3 className="font-body font-bold text-chocolate text-sm leading-tight mb-1">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-[11px] text-chocolate/70 leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>
      )}
      
      {/* Bottom: Diet icon + Price */}
      <div className="flex justify-between items-center pt-2 border-t border-dashed border-chocolate/20">
        <DietIcon type={item.dietType} />
        <span className="font-bold text-sm text-chocolate">{item.price}</span>
      </div>
    </div>
  </div>
);

// Full Width Card for Platters/Featured Items
export const FullWidthCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-warm-cream rounded-xl overflow-hidden shadow-lg border border-chocolate/10 col-span-full hover:shadow-xl transition-shadow duration-300">
    {/* Large Image */}
    <img 
      src={PLACEHOLDER_IMAGE} 
      alt={item.title}
      className="w-full h-48 object-cover"
      loading="lazy"
    />
    
    {/* Content - Centered */}
    <div className="p-4 text-center">
      {/* Title */}
      <h3 className="font-body font-bold text-chocolate text-xl mb-2">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-sm text-chocolate/70 mb-3 leading-relaxed">
          {item.description}
        </p>
      )}
      
      {/* Ingredients as small text */}
      {item.smallText && (
        <p className="text-xs text-chocolate/50 italic mb-4">
          {item.smallText}
        </p>
      )}
      
      {/* Bottom: Price + Diet indicator centered */}
      <div className="flex justify-center items-center gap-5 pt-3 border-t border-chocolate/20">
        <span className="font-bold text-lg text-chocolate">{item.price}</span>
        <DietIcon type={item.dietType} />
      </div>
    </div>
  </div>
);

// Drink Card Component - with options
export const DrinkCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-warm-cream rounded-xl overflow-hidden shadow-md border border-chocolate/10 hover:shadow-xl transition-shadow duration-300">
    {/* Image */}
    <img 
      src={PLACEHOLDER_IMAGE} 
      alt={item.title}
      className="w-full h-40 object-cover"
      loading="lazy"
    />
    
    {/* Content */}
    <div className="p-3">
      <h3 className="font-body font-bold text-chocolate text-sm leading-tight mb-2">
        {item.title}
      </h3>
      
      {item.description && (
        <p className="text-[11px] text-chocolate/70 leading-relaxed mb-3">
          {item.description}
        </p>
      )}
      
      {/* Price row */}
      <div className="flex justify-between items-center pt-2 border-t border-dotted border-chocolate/20">
        <span className="font-bold text-sm text-chocolate">{item.price}</span>
        <span className="text-[10px] text-chocolate/50">Still / Sparkling</span>
      </div>
    </div>
  </div>
);

// Simple List Card - For drinks without images
export const ListCard = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-center py-3 px-4 bg-warm-cream/80 rounded-lg border border-chocolate/10 mb-2 shadow-sm hover:bg-warm-cream transition-colors">
    <div className="flex items-center gap-3">
      <DietIcon type={item.dietType} showLabel={false} />
      <div>
        <h4 className="font-body font-semibold text-sm text-chocolate">{item.title}</h4>
        {item.description && (
          <p className="text-[11px] text-chocolate/60">{item.description}</p>
        )}
      </div>
    </div>
    <span className="font-bold text-sm text-chocolate">{item.price}</span>
  </div>
);

// Footnote Component
export const Footnote = ({ text }: { text: string }) => (
  <p className="text-xs text-cream/60 italic mt-4 mx-4 pt-3 border-t border-gold/20">
    * {text}
  </p>
);
