import cottageIllustration from '@/assets/cottage-illustration.png';

const MenuSection = () => {
  const menuItems = [
    'Italian',
    'Continental', 
    'Fast Food',
    'Coffee & Beverages'
  ];

  return (
    <div className="relative text-center">
      <h3 className="font-script text-3xl md:text-4xl text-card-foreground mb-6">
        Menu Highlights
      </h3>
      
      {/* Menu Items */}
      <ul className="font-serif text-card-foreground/80 space-y-2 mb-8">
        {menuItems.map((item, index) => (
          <li 
            key={item}
            className="text-sm md:text-base animate-fade-in-up"
            style={{ animationDelay: `${0.2 + index * 0.1}s` }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Cottage Illustration */}
      <div className="relative mx-auto max-w-xs md:max-w-sm animate-float">
        <img 
          src={cottageIllustration} 
          alt="Whimsical cottage cafe illustration" 
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MenuSection;
