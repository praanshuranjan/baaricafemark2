import { PLACEHOLDER_IMAGE, DietType, MenuItem } from '@/data/menuData';
import { OptimizedImage } from '@/components/OptimizedImage';

// Diet Icon Component - Baari Style (cream labels for dark bg)
export const DietIcon = ({ type, showLabel = true }: { type?: DietType; showLabel?: boolean }) => {
  if (!type) return null;
  
  const configs = {
    veg: { border: 'border-emerald-500', bg: 'bg-emerald-500', label: 'Vegetarian' },
    'non-veg': { border: 'border-red-500', bg: 'bg-red-500', label: 'Contains Chicken' },
    egg: { border: 'border-amber-500', bg: 'bg-amber-500', label: 'Contains Egg' },
  };

  const config = configs[type];

  return (
    <div className="flex items-center gap-1.5">
      <div className={`w-4 h-4 border-2 ${config.border} flex items-center justify-center`}>
        {type === 'non-veg' ? (
          <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-b-[6px] border-l-transparent border-r-transparent border-b-red-500" />
        ) : (
          <div className={`w-2.5 h-2.5 rounded-full ${config.bg}`} />
        )}
      </div>
      {showLabel && <span className="text-xs font-medium text-cream/80">{config.label}</span>}
    </div>
  );
};

// Section Header - Baari elegant style with gold accent
export const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6 px-4 text-center">
    <h2 className="font-script text-3xl md:text-4xl text-gold mb-2">{title}</h2>
    {subtitle && (
      <p className="font-serif text-sm text-cream/60 italic">{subtitle}</p>
    )}
    <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold/60 to-transparent mx-auto mt-3" />
  </div>
);

// Banner Header - Navy blue with gold accent
export const BannerHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="bg-midnight/60 backdrop-blur-sm border border-gold/20 rounded-xl mx-4 mb-6 px-6 py-5">
    <h2 className="font-script text-2xl md:text-3xl text-gold mb-2">{title}</h2>
    {subtitle && (
      <p className="font-serif text-sm text-cream/70 italic">{subtitle}</p>
    )}
  </div>
);

// Add-Ons Box Component
export const AddOnBox = ({ addOns }: { addOns: { name: string; price: string }[] }) => (
  <div className="bg-midnight/60 border border-gold/30 rounded-xl p-4 mx-4 mt-4 backdrop-blur-sm">
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

// Food Card Component - Navy Blue with Gold Border
export const FoodCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-midnight/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/30 hover:border-gold/50 shadow-lg hover:shadow-gold/10 transition-all duration-300">
    {/* Image at top */}
    <div className="relative">
      <OptimizedImage
        src={item.image || PLACEHOLDER_IMAGE}
        alt={item.title}
        className="w-full h-36 object-cover"
      />
      {item.smallText && (
        <div className="absolute top-2 left-2 bg-gold text-midnight text-[10px] font-bold px-2 py-0.5 rounded">
          {item.smallText}
        </div>
      )}
    </div>
    
    {/* Content */}
    <div className="p-3">
      {/* Title */}
      <h3 className="font-serif font-bold text-gold text-sm leading-tight mb-1">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-[11px] text-cream/70 leading-relaxed mb-3 line-clamp-3">
          {item.description}
        </p>
      )}
      
      {/* Bottom: Diet icon + Price */}
      <div className="flex justify-between items-center pt-2 border-t border-dashed border-gold/30">
        <DietIcon type={item.dietType} />
        <span className="font-bold text-sm text-cream">{item.price}</span>
      </div>
    </div>
  </div>
);

// Full Width Card for Platters/Featured Items
export const FullWidthCard = ({ item }: { item: MenuItem }) => (
  <div className="bg-midnight/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/30 shadow-lg col-span-full hover:border-gold/50 hover:shadow-gold/10 transition-all duration-300">
    {/* Large Image */}
    <OptimizedImage
      src={item.image || PLACEHOLDER_IMAGE}
      alt={item.title}
      className="w-full h-48 object-cover"
    />
    
    {/* Content - Centered */}
    <div className="p-4 text-center">
      {/* Title */}
      <h3 className="font-serif font-bold text-gold text-xl mb-2">
        {item.title}
      </h3>
      
      {/* Description */}
      {item.description && (
        <p className="text-sm text-cream/70 mb-3 leading-relaxed">
          {item.description}
        </p>
      )}
      
      {/* Bottom: Price + Diet indicator centered */}
      <div className="flex justify-center items-center gap-5 pt-3 border-t border-gold/20">
        <span className="font-bold text-lg text-cream">{item.price}</span>
        <DietIcon type={item.dietType} />
      </div>
    </div>
  </div>
);

// Drink Card Component - Navy Blue with Gold Border
export const DrinkCard = ({ item }: { item: MenuItem }) => (
  <div className="menu-card bg-midnight/80 backdrop-blur-sm rounded-xl overflow-hidden border border-gold/30 hover:border-gold/50 shadow-lg hover:shadow-gold/10 transition-all duration-300">
    {/* Image */}
    <OptimizedImage
      src={item.image || PLACEHOLDER_IMAGE}
      alt={item.title}
      className="w-full h-40 object-cover"
    />
    
    {/* Content */}
    <div className="p-3">
      <h3 className="font-serif font-bold text-gold text-sm leading-tight mb-2">
        {item.title}
      </h3>
      
      {item.description && (
        <p className="text-[11px] text-cream/70 leading-relaxed mb-3">
          {item.description}
        </p>
      )}
      
      {/* Price row */}
      <div className="flex justify-between items-center pt-2 border-t border-dotted border-gold/30">
        <span className="font-bold text-sm text-cream">{item.price}</span>
        <span className="text-[10px] text-cream/50">Still / Sparkling</span>
      </div>
    </div>
  </div>
);

// Simple List Card - Navy Blue style
export const ListCard = ({ item }: { item: MenuItem }) => (
  <div className="flex justify-between items-center py-3 px-4 bg-midnight/60 backdrop-blur-sm rounded-lg border border-gold/20 mb-2 hover:bg-midnight/80 hover:border-gold/40 transition-all">
    <div className="flex items-center gap-3">
      <DietIcon type={item.dietType} showLabel={false} />
      <div>
        <h4 className="font-serif font-semibold text-sm text-gold">{item.title}</h4>
        {item.description && (
          <p className="text-[11px] text-cream/60">{item.description}</p>
        )}
      </div>
    </div>
    <span className="font-bold text-sm text-cream">{item.price}</span>
  </div>
);

// Footnote Component
export const Footnote = ({ text }: { text: string }) => (
  <p className="text-xs text-cream/60 italic mt-4 mx-4 pt-3 border-t border-gold/20">
    * {text}
  </p>
);
