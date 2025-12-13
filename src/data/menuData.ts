// Single placeholder image for all menu items
export const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop";

export type DietType = 'veg' | 'non-veg' | 'egg';

export interface MenuItem {
  title: string;
  description?: string;
  price: string;
  dietType?: DietType;
  smallText?: string;
  options?: { name: string; price: string }[];
  image?: string;
}

export interface MenuSection {
  id: string;
  title: string;
  subtitle?: string;
  note?: string;
  items: MenuItem[];
  addOns?: { name: string; price: string }[];
  footnote?: string;
}

export const menuSections: MenuSection[] = [
  {
    id: 'appetizers',
    title: 'Appetizers & Platters',
    footnote: 'Please note: 5% GST charged over the menu prices as per the government regulation',
    items: [
      { title: 'Baked Nachos', price: '₹275', dietType: 'veg', image: '/images/Baked nachos.jpeg' },
      { title: 'Chicken Tikka', price: '₹346', dietType: 'non-veg', image: '/images/Chicken tikka.jpeg1.jpeg' },
      { title: 'Crispy Chicken Popcorn', price: '₹274', dietType: 'non-veg', image: '/images/Crispy Chicken popcorn.jpeg' },
      { title: 'Nachos with Salsa', price: '₹239', dietType: 'veg', image: '/images/Nachos with Salsa.jpeg' },
      { title: 'Paneer Tikka', price: '₹323', dietType: 'veg', image: '/images/Paneer tikka.jpeg1.jpeg' },
      { title: 'Drums of Heaven', price: '₹369', dietType: 'non-veg', description: 'Succulent chicken legs, crisped to perfection, and glazed with a sweet and tangy sauce. A delectable delight for your taste buds!', image: '/images/Drums of heaven.jpeg' },
      { title: 'Veg Platter', price: '₹719', dietType: 'veg', smallText: 'honey chilli potato, cheese veggie toast, hakka noodles, peri peri fries, nachos', image: '/images/Veg platter.png' },
      { title: 'Non Veg Platter', price: '₹839', dietType: 'non-veg', smallText: 'chicken toast, keema chicken fries, chicken nuggets, chicken noodles, chilli chicken', image: '/images/Non veg platter.png' },
      { title: 'Continental Platter Veg', price: '₹959', dietType: 'veg', smallText: 'any pasta, very veggie pizza (three slices), cheesy garlic sandwich, peri peri fries, garlic toast', image: '/images/Continental veg platter.png' },
      { title: 'Continental Platter Non Veg', price: '₹1079', dietType: 'non-veg', smallText: 'any chicken pasta, chicken tikka pizza (three slices), cheesy chicken sandwich, keema fries, chicken toast', image: '/images/Continental non veg platter.png' },
      { title: 'Non Veg Hummus Platter', price: '₹549', dietType: 'non-veg', description: 'Delight in our exquisite Hummus Platter, a symphony of flavors featuring creamy hummus, warm pita bread, seasoned chickpeas, and zesty peri peri fries', image: '/images/Non veg hummus platter.png' },
      { title: 'Veg Hummus Platter', price: '₹499', dietType: 'veg', description: 'Grilled paneer, zesty peri peri fries, velvety hummus, and warm pita. A symphony of flavors in every bite!', image: '/images/Veg hummus platter.png' },
    ]
  },
  {
    id: 'pizza',
    title: 'Pizza',
    subtitle: 'Thin crust pizzas made with our homemade sauce',
    addOns: [
      { name: 'Chicken', price: '₹95' },
      { name: 'Paneer', price: '₹95' },
      { name: 'Cheese', price: '₹90' },
    ],
    items: [
      { title: 'Barbeque Cottage Cheese', price: '₹443', dietType: 'veg', description: 'paneer, capsicum, onion, barbeque sauce', image: '/images/Barbeque cottage cheese.jpeg' },
      { title: 'Barbeque Chicken', price: '₹455', dietType: 'non-veg', description: 'chicken, bell pepper, onion, barbeque sauce', image: '/images/Barbeque chicken.jpeg' },
      { title: 'Classic Margherita', price: '₹382', dietType: 'veg', description: 'fresh cheese and basil', image: '/images/Classic Margherita.jpeg' },
      { title: 'Chicken Tikka', price: '₹455', dietType: 'non-veg', description: 'chicken, bell pepper, onion', image: '/images/Chicken tikka.jpeg1.jpeg' },
      { title: 'Paneer Tikka', price: '₹455', dietType: 'veg', description: 'mix of pomodoro & creamy sauce with exotic veggies and fresh herbs', image: '/images/Paneer tikka.jpeg1.jpeg' },
      { title: 'Peri Peri Paneer', price: '₹467', dietType: 'veg', description: 'onion, bell pepper, cottage cheese, peri peri sauce', image: '/images/peri peri paneer.jpeg' },
      { title: 'Peri Peri Chicken', price: '₹479', dietType: 'non-veg', description: 'fresh chicken, peri peri sauce, bell pepper', image: '/images/Peri peri chicken.jpeg' },
      { title: 'Very Veggie', price: '₹359/₹431', dietType: 'veg', description: 'corn, olive, bell pepper, mushroom, zucchini, broccoli', image: '/images/Very veggie 359.jpeg' },
      { title: 'Make My Pizza (Half n Half)', price: '₹503', description: 'Combine any 2 of our delicious pizzas in 1', image: '/images/Very veggie 359.jpeg' },
    ]
  },
  {
    id: 'pasta',
    title: 'Pasta',
    addOns: [
      { name: 'Chicken', price: '₹102' },
      { name: 'Veggies', price: '₹47' },
      { name: 'Cheese', price: '₹71' },
      { name: 'Garlic Bread', price: '₹20' },
    ],
    items: [
      { title: 'Alfredo', price: '₹370', dietType: 'veg', description: 'your all-time favourite creamy pasta cooked with exotic veggies', image: '/images/Creamy alfredo.jpeg' },
      { title: 'Arrabiata', price: '₹370', dietType: 'veg', description: 'spicy arrabbiata sauce infused with garlic and fresh basil', image: '/images/spicy arrabiata.jpeg' },
      { title: 'Aglio o Oglio', price: '₹370', dietType: 'veg', description: 'spaghetti tossed and sauteed in garlic & olive oil', image: '/images/Tasty Aglio O Oglio.jpeg' },
      { title: 'Basil Pesto', price: '₹370', dietType: 'veg', description: 'homemade pesto sauce topped with parmesan cheese', image: '/images/Basil Pesto.jpeg' },
      { title: 'Parma Rosa', price: '₹370', dietType: 'veg', description: 'mix of pomodoro & creamy sauce with exotic veggies and fresh herbs', image: '/images/perma Rosa.jpeg' },
      { title: 'Three Cheese', price: '₹430', dietType: 'veg', description: 'cheese overload to die for yellow cheddar, parmesan and mozzarella on penne', image: '/images/Three cheese.jpeg' },
    ]
  },
  {
    id: 'chinese',
    title: 'Chinese',
    items: [
      { title: 'Honey Chilli Potato', price: '₹323', dietType: 'veg', image: '/images/Honey chilli potato.jpeg' },
      { title: 'Hakka Noodles', price: '₹311', dietType: 'veg', image: '/images/Hakka noddles.jpeg' },
      { title: 'Chicken Hakka Noodles', price: '₹335', dietType: 'non-veg', image: '/images/Chicken hakka noddles.jpeg' },
      { title: 'Chilli Chicken (Dry/Gravy)', price: '₹383', dietType: 'non-veg', image: '/images/Chilli chicken.png' },
      { title: 'Chilli Potato', price: '₹287', dietType: 'veg', image: '/images/Chilli potato.jpeg' },
      { title: 'Chilli Garlic Noodles', price: '₹323', dietType: 'veg', image: '/images/Chilli garlic noddles.jpeg' },
      { title: 'Chilli Garlic Noodles with Chicken', price: '₹359', dietType: 'non-veg', image: '/images/Chilli garlic chicken noddles.jpeg' },
    ]
  },
  {
    id: 'rice',
    title: 'Rice',
    items: [
      { title: 'Vegetable Fried Rice', price: '₹299', dietType: 'veg', description: 'Aromatic basmati rice stir-fried with colorful veggies, seasoned with Indian spices for a flavorful vegetarian delight', image: '/images/Vegetable froed rice.jpeg' },
      { title: 'Chicken Fried Rice', price: '₹369', dietType: 'non-veg', description: 'Tender chicken chunks paired with fragrant basmati rice and a medley of vegetables, spiced with Indian flavors for a hearty option', image: '/images/Chicken fried rice.jpeg' },
      { title: 'Egg Fried Rice', price: '₹319', dietType: 'egg', description: 'Classic combination of fluffy basmati rice and scrambled eggs, tossed with vegetables and Indian spices for a simple yet delicious dish', image: '/images/Egg fried rice.jpeg' },
      { title: 'Paneer Fried Rice', price: '₹369', dietType: 'veg', description: 'Soft paneer cubes mixed with aromatic basmati rice and vibrant veggies, elevated with the infusion of Indian spices', image: '/images/Paneer fried rice.jpeg' },
      { title: 'Schezwan Chicken', price: '₹399', dietType: 'non-veg', description: 'basmati rice, infused with our fiery Schezwan sauce for a flavorful kick', image: '/images/Schezwan chicken rice.png' },
      { title: 'Schezwan Veg', price: '₹349', dietType: 'veg', description: 'Colorful vegetable medley stir-fried with basmati rice in our signature Schezwan sauce, delivering a zesty and satisfying vegetarian delight', image: '/images/Schezwan fried rice.jpeg' },
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    subtitle: 'Made with goodness of sesame seed buns, served with a side of fries',
    items: [
      { title: 'Veggies Heaven', price: '₹275', dietType: 'veg', description: 'Patty made with exotic veggies, topped with our secret sauce - true delight for vegetarians', image: '/images/Veggies heaven.jpeg' },
      { title: 'Paneer Tikka Burger', price: '₹299', dietType: 'veg', description: 'Infused paneer slice, marinated with tandoori goodness', image: '/images/Paneer tikka burger.jpeg' },
      { title: 'Crispy Chicken Burger', price: '₹323', dietType: 'non-veg', description: 'Crispy chicken that makes you go muaaaaaaaah!, the moment it touches your lips, served with coleslaw', image: '/images/Crispy chicken burger.jpeg' },
      { title: 'The Grand Indian Veg Burger', price: '₹359', dietType: 'veg', description: 'We love everything grand-double patty, lettuce, onion, tomato, sliced cheese, coleslaw, mint mayo - double the taste', smallText: 'Baari Special', image: '/images/The grand indian veg burger.jpeg' },
      { title: 'The Grand Indian Chicken Burger', price: '₹407', dietType: 'non-veg', description: 'shredded chicken and cheese with caesar dressing-all with double goodness', smallText: 'Baari Special', image: '/images/the grand indian chicken burger.jpeg' },
    ]
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    items: [
      { title: 'Paneer Grilled', price: '₹299', dietType: 'veg', description: 'paneer slice marinated in tandoori spices', image: '/images/Paneer grilled.jpeg' },
      { title: 'Cheesy Garlic', price: '₹275', dietType: 'veg', description: 'filled with mozzarella cheese, onion and corn', image: '/images/Cheesy garlic.jpeg' },
      { title: 'Cheesy Chicken', price: '₹323', dietType: 'non-veg', description: 'shredded chicken loaded with cheese and some secret spices', image: '/images/Cheesy chicken.jpeg' },
      { title: 'Classic Caesar', price: '₹287', dietType: 'veg', description: 'lettuce, cherry tomato, olive, garlic and cheese with caesar dressing', image: '/images/Classic caesar.jpeg' },
      { title: 'Caesar Chicken', price: '₹311', dietType: 'non-veg', description: 'shredded chicken, lettuce, cherry tomato, olive with Caesar dressing', image: '/images/caesar chicken.png' },
      { title: 'Chicken Tikka Sandwich', price: '₹335', dietType: 'non-veg', description: 'marinated chicken loaded with cheese and veggies', image: '/images/Chicken tikka sandwich.jpeg' },
    ]
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { title: 'Garlic Toast', price: '₹203', dietType: 'veg', image: '/images/garlic toast.png' },
      { title: 'Cheese Garlic Toast', price: '₹227', dietType: 'veg', image: '/images/Cheese garlic toast.png' },
      { title: 'Classic Bruschetta', price: '₹275', dietType: 'veg', image: '/images/Classic bruschetta.png' },
      { title: 'Cheese Bruschetta', price: '₹299', dietType: 'veg', image: '/images/Cheese bruschetta.png' },
    ]
  },
  {
    id: 'fries',
    title: 'Fries',
    addOns: [{ name: 'Dips', price: '₹25' }],
    items: [
      { title: 'Peri Peri Fries', price: '₹239', dietType: 'veg', description: 'Crispy fries with peri peri masala', image: '/images/Peri Peri fries.jpeg' },
      { title: 'Cheese Fries', price: '₹299', dietType: 'veg', description: 'One combination that screams yummm! fries topped with cheese, parsley', image: '/images/Cheese fries.jpeg' },
      { title: 'Peri Peri Cheese Fries', price: '₹311', dietType: 'veg', description: 'Cheese fries topped with peri peri masala', image: '/images/Peri peri cheese fries.jpeg' },
      { title: 'Fireball Fries with Keema Chicken', price: '₹299', dietType: 'non-veg', description: 'Minced chicken with fire-y homemade sauce to elevate the taste', smallText: 'Baari Special', image: '/images/Fireball fries with keema chicken.jpeg' },
      { title: 'Garlic Butter Fries', price: '₹239', dietType: 'veg', description: 'Fries topped with our homemade garlic butter that satiates our soul', image: '/images/Garlic butter fries.png' },
      { title: 'Classic Fries', price: '₹215', dietType: 'veg', description: 'Only salt, no pepper', image: '/images/Classic fries.jpeg' },
    ]
  },
  {
    id: 'salads',
    title: 'Salads',
    items: [
      { title: 'Caesar Salad', price: '₹275', dietType: 'veg', image: '/images/Caesar salad.jpeg' },
      { title: 'Caesar Chicken Salad', price: '₹323', dietType: 'non-veg', image: '/images/Caesar chicken salad.jpeg' },
    ]
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { title: 'Grilled Chicken Breast with Mushroom Sauce', price: '₹599', dietType: 'non-veg', description: 'beautifully amalgamated taste of fresh cream and parsley in eggs served with toasted bread and fries', image: '/images/Grilled chicken breast with mushroom sauce.jpeg' },
      { title: 'Cottage Cheese Steak with Mushroom Sauce', price: '₹563', dietType: 'veg', description: 'cottage cheese steak marinated with herbs, served with potato fries and grilled veggies', image: '/images/Cottage cheese steak with mushroom sauce.png' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { title: 'Sizzling Brownie', price: '₹239', dietType: 'egg', image: '/images/Sizzling brownie.png' },
      { title: 'Donuts with Ice Cream', price: '₹263', dietType: 'egg', description: 'two shell donuts', image: '/images/Sizzling brownie.png' },
      { title: 'Baked Cheesecake Slice', price: '₹275', dietType: 'egg', image: '/images/Chocolate truffle.png' },
    ]
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    items: [
      { title: 'Peach', price: '₹239', image: '/images/peach iced tea.jpeg' },
      { title: 'Lemon', price: '₹239', image: '/images/lemon iced tea.jpeg' },
    ]
  },
  {
    id: 'cakes',
    title: 'Celebration Cakes',
    items: [
      { title: 'Red Velvet', price: '₹599', dietType: 'egg', image: '/images/red velvet.png' },
      { title: 'Choco Truffle', price: '₹599', dietType: 'egg', image: '/images/Chocolate truffle.png' },
    ]
  },
  {
    id: 'coolers',
    title: 'Coolers',
    items: [
      { title: 'Virgin Mojito', price: '₹239', image: '/images/Virgin mojito.jpeg' },
      { title: 'Cranberry', price: '₹251', image: '/images/Cranberry.jpeg' },
      { title: 'Green Apple', price: '₹251', image: '/images/Green Apple.jpeg' },
      { title: 'Blueberry', price: '₹251', image: '/images/Blueberry.jpeg' },
      { title: 'Passion Fruit', price: '₹251', image: '/images/Passion fruit.jpeg' },
      { title: 'Blue Lagoon', price: '₹251', image: '/images/Blue Lagoon.jpeg' },
      { title: 'Watermelon', price: '₹251', image: '/images/Watermelon.jpeg' },
      { title: 'Pink Lemonade', price: '₹263', image: '/images/Pink Lemonade.jpeg' },
      { title: 'Hurricane', price: '₹263', image: '/images/Hurricane.png' },
      { title: 'Sunset', price: '₹263', image: '/images/Sunset.jpeg' },
      { title: 'Fresh Lime Soda', price: '₹203', description: 'Salty/mix/sweet', image: '/images/Fresh Lime Soda.jpeg' },
      { title: 'Coke', price: '₹120', image: '/images/Virgin mojito.jpeg' },
      { title: 'Mineral Water', price: '₹60', image: '/images/Fresh Lime Soda.jpeg' },
    ]
  },
  {
    id: 'premium-shakes',
    title: 'Premium Shakes',
    items: [
      { title: 'Choco Belgian', price: '₹299', image: '/images/Choco beligian shake.jpeg' },
      { title: 'Nut Brownie', price: '₹299', image: '/images/Nut browniw shake.jpeg' },
      { title: 'Heavenly Nutella', price: '₹299', image: '/images/Heavenly nutella shake.jpeg' },
      { title: 'Oreo Coffee', price: '₹299', image: '/images/Oreo coffee shake.jpeg' },
    ]
  },
  {
    id: 'thick-shakes',
    title: 'Thick Shakes',
    items: [
      { title: 'Oreo Special', price: '₹263', image: '/images/Oreo special shake.jpeg' },
      { title: 'Bubblegum', price: '₹251', image: '/images/Bubblegum shake.jpeg' },
      { title: 'Strawberry', price: '₹239', image: '/images/Strawberry shake.jpeg' },
      { title: 'KitKat Choco', price: '₹275', image: '/images/Kitkat choco shake.jpeg' },
      { title: 'Butterscotch', price: '₹239', image: '/images/Butterscotch shake.jpeg' },
      { title: 'Pina Colada', price: '₹251', image: '/images/Pina colada shake.jpeg' },
    ]
  },
  {
    id: 'coffee',
    title: 'Coffee',
    addOns: [{ name: 'Add Caramel/Hazelnut', price: '₹29' }],
    items: [
      { title: 'Espresso', price: '₹99', description: 'A strong and concentrated shot, perfect for the pure coffee connoisseur', image: '/images/Espresso.png' },
      { title: 'Cappuccino', price: '₹189', description: 'Rich espresso balanced with steamed milk and topped with velvety foam', image: '/images/cappuccino.png' },
      { title: 'Latte', price: '₹199', description: 'Smooth espresso combined with creamy steamed milk, a classic indulgence', image: '/images/cappuccino.png' },
      { title: 'Americano', price: '₹179', description: 'Diluted espresso for a milder flavor, perfect for sipping', image: '/images/Americano.png' },
      { title: 'Mocha', price: '₹239', description: 'Espresso blended with decadent chocolate and topped with whipped cream', image: '/images/Coffee.png' },
      { title: 'Flat White', price: '₹198', description: 'Espresso with velvety microfoam, delivering a strong yet creamy experience', image: '/images/Flat white.png' },
      { title: 'Coffee (Homemade Hand-Beaten)', price: '₹143', image: '/images/Coffee.png' },
    ]
  },
  {
    id: 'hot-beverages',
    title: 'Hot Beverages',
    items: [
      { title: 'Kadak Chai', price: '₹107', image: '/images/kadak chai.png' },
      { title: 'Masala Chai', price: '₹120', image: '/images/Masala chai.png' },
      { title: 'Ginger Honey Lemon Tea', price: '₹107', image: '/images/Ginger honey lemon tea.png' },
      { title: 'Hot Chocolate', price: '₹215', description: 'Served with Marshmallow', image: '/images/Hot chocolate.png' },
    ]
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee',
    items: [
      { title: 'Classic', price: '₹239', image: '/images/Classic cold coffee.jpeg' },
      { title: 'Hazelnut', price: '₹251', image: '/images/Hazelnut cold coffee.jpeg' },
      { title: 'Caramel', price: '₹251', image: '/images/Caramel cold coffee.jpeg' },
    ]
  },
];
