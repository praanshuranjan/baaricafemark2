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
      { title: 'Baked Nachos', price: '₹275', dietType: 'veg' },
      { title: 'Chicken Tikka', price: '₹346', dietType: 'non-veg' },
      { title: 'Crispy Chicken Popcorn', price: '₹274', dietType: 'non-veg' },
      { title: 'Nachos with Salsa', price: '₹239', dietType: 'veg' },
      { title: 'Paneer Tikka', price: '₹323', dietType: 'veg' },
      { title: 'Drums of Heaven', price: '₹369', dietType: 'non-veg', description: 'Succulent chicken legs, crisped to perfection, and glazed with a sweet and tangy sauce. A delectable delight for your taste buds!' },
      { title: 'Veg Platter', price: '₹719', dietType: 'veg', smallText: 'honey chilli potato, cheese veggie toast, hakka noodles, peri peri fries, nachos' },
      { title: 'Non Veg Platter', price: '₹839', dietType: 'non-veg', smallText: 'chicken toast, keema chicken fries, chicken nuggets, chicken noodles, chilli chicken' },
      { title: 'Continental Platter Veg', price: '₹959', dietType: 'veg', smallText: 'any pasta, very veggie pizza (three slices), cheesy garlic sandwich, peri peri fries, garlic toast' },
      { title: 'Continental Platter Non Veg', price: '₹1079', dietType: 'non-veg', smallText: 'any chicken pasta, chicken tikka pizza (three slices), cheesy chicken sandwich, keema fries, chicken toast' },
      { title: 'Non Veg Hummus Platter', price: '₹549', dietType: 'non-veg', description: 'Delight in our exquisite Hummus Platter, a symphony of flavors featuring creamy hummus, warm pita bread, seasoned chickpeas, and zesty peri peri fries' },
      { title: 'Veg Hummus Platter', price: '₹499', dietType: 'veg', description: 'Grilled paneer, zesty peri peri fries, velvety hummus, and warm pita. A symphony of flavors in every bite!' },
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
      { title: 'Barbeque Cottage Cheese', price: '₹443', dietType: 'veg', description: 'paneer, capsicum, onion, barbeque sauce' },
      { title: 'Barbeque Chicken', price: '₹455', dietType: 'non-veg', description: 'chicken, bell pepper, onion, barbeque sauce' },
      { title: 'Classic Margherita', price: '₹382', dietType: 'veg', description: 'fresh cheese and basil' },
      { title: 'Chicken Tikka', price: '₹455', dietType: 'non-veg', description: 'chicken, bell pepper, onion' },
      { title: 'Paneer Tikka', price: '₹455', dietType: 'veg', description: 'mix of pomodoro & creamy sauce with exotic veggies and fresh herbs' },
      { title: 'Peri Peri Paneer', price: '₹467', dietType: 'veg', description: 'onion, bell pepper, cottage cheese, peri peri sauce' },
      { title: 'Peri Peri Chicken', price: '₹479', dietType: 'non-veg', description: 'fresh chicken, peri peri sauce, bell pepper' },
      { title: 'Very Veggie', price: '₹359/₹431', dietType: 'veg', description: 'corn, olive, bell pepper, mushroom, zucchini, broccoli' },
      { title: 'Make My Pizza (Half n Half)', price: '₹503', description: 'Combine any 2 of our delicious pizzas in 1' },
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
      { title: 'Alfredo', price: '₹370', dietType: 'veg', description: 'your all-time favourite creamy pasta cooked with exotic veggies' },
      { title: 'Arrabiata', price: '₹370', dietType: 'veg', description: 'spicy arrabbiata sauce infused with garlic and fresh basil' },
      { title: 'Aglio o Oglio', price: '₹370', dietType: 'veg', description: 'spaghetti tossed and sauteed in garlic & olive oil' },
      { title: 'Basil Pesto', price: '₹370', dietType: 'veg', description: 'homemade pesto sauce topped with parmesan cheese' },
      { title: 'Parma Rosa', price: '₹370', dietType: 'veg', description: 'mix of pomodoro & creamy sauce with exotic veggies and fresh herbs' },
      { title: 'Three Cheese', price: '₹430', dietType: 'veg', description: 'cheese overload to die for yellow cheddar, parmesan and mozzarella on penne' },
    ]
  },
  {
    id: 'chinese',
    title: 'Chinese',
    items: [
      { title: 'Honey Chilli Potato', price: '₹323', dietType: 'veg' },
      { title: 'Hakka Noodles', price: '₹311', dietType: 'veg' },
      { title: 'Chicken Hakka Noodles', price: '₹335', dietType: 'non-veg' },
      { title: 'Chilli Chicken (Dry/Gravy)', price: '₹383', dietType: 'non-veg' },
      { title: 'Chilli Potato', price: '₹287', dietType: 'veg' },
      { title: 'Chilli Garlic Noodles', price: '₹323', dietType: 'veg' },
      { title: 'Chilli Garlic Noodles with Chicken', price: '₹359', dietType: 'non-veg' },
    ]
  },
  {
    id: 'rice',
    title: 'Rice',
    items: [
      { title: 'Vegetable Fried Rice', price: '₹299', dietType: 'veg', description: 'Aromatic basmati rice stir-fried with colorful veggies, seasoned with Indian spices for a flavorful vegetarian delight' },
      { title: 'Chicken Fried Rice', price: '₹369', dietType: 'non-veg', description: 'Tender chicken chunks paired with fragrant basmati rice and a medley of vegetables, spiced with Indian flavors for a hearty option' },
      { title: 'Egg Fried Rice', price: '₹319', dietType: 'egg', description: 'Classic combination of fluffy basmati rice and scrambled eggs, tossed with vegetables and Indian spices for a simple yet delicious dish' },
      { title: 'Paneer Fried Rice', price: '₹369', dietType: 'veg', description: 'Soft paneer cubes mixed with aromatic basmati rice and vibrant veggies, elevated with the infusion of Indian spices' },
      { title: 'Schezwan Chicken', price: '₹399', dietType: 'non-veg', description: 'basmati rice, infused with our fiery Schezwan sauce for a flavorful kick' },
      { title: 'Schezwan Veg', price: '₹349', dietType: 'veg', description: 'Colorful vegetable medley stir-fried with basmati rice in our signature Schezwan sauce, delivering a zesty and satisfying vegetarian delight' },
    ]
  },
  {
    id: 'burgers',
    title: 'Burgers',
    subtitle: 'Made with goodness of sesame seed buns, served with a side of fries',
    items: [
      { title: 'Veggies Heaven', price: '₹275', dietType: 'veg', description: 'Patty made with exotic veggies, topped with our secret sauce - true delight for vegetarians' },
      { title: 'Paneer Tikka Burger', price: '₹299', dietType: 'veg', description: 'Infused paneer slice, marinated with tandoori goodness' },
      { title: 'Crispy Chicken Burger', price: '₹323', dietType: 'non-veg', description: 'Crispy chicken that makes you go muaaaaaaaah!, the moment it touches your lips, served with coleslaw' },
      { title: 'The Grand Indian Veg Burger', price: '₹359', dietType: 'veg', description: 'We love everything grand-double patty, lettuce, onion, tomato, sliced cheese, coleslaw, mint mayo - double the taste', smallText: 'Baari Special' },
      { title: 'The Grand Indian Chicken Burger', price: '₹407', dietType: 'non-veg', description: 'shredded chicken and cheese with caesar dressing-all with double goodness', smallText: 'Baari Special' },
    ]
  },
  {
    id: 'sandwiches',
    title: 'Sandwiches',
    items: [
      { title: 'Paneer Grilled', price: '₹299', dietType: 'veg', description: 'paneer slice marinated in tandoori spices' },
      { title: 'Cheesy Garlic', price: '₹275', dietType: 'veg', description: 'filled with mozzarella cheese, onion and corn' },
      { title: 'Cheesy Chicken', price: '₹323', dietType: 'non-veg', description: 'shredded chicken loaded with cheese and some secret spices' },
      { title: 'Classic Caesar', price: '₹287', dietType: 'veg', description: 'lettuce, cherry tomato, olive, garlic and cheese with caesar dressing' },
      { title: 'Caesar Chicken', price: '₹311', dietType: 'non-veg', description: 'shredded chicken, lettuce, cherry tomato, olive with Caesar dressing' },
      { title: 'Chicken Tikka Sandwich', price: '₹335', dietType: 'non-veg', description: 'marinated chicken loaded with cheese and veggies' },
    ]
  },
  {
    id: 'sides',
    title: 'Sides',
    items: [
      { title: 'Garlic Toast', price: '₹203', dietType: 'veg' },
      { title: 'Cheese Garlic Toast', price: '₹227', dietType: 'veg' },
      { title: 'Classic Bruschetta', price: '₹275', dietType: 'veg' },
      { title: 'Cheese Bruschetta', price: '₹299', dietType: 'veg' },
    ]
  },
  {
    id: 'fries',
    title: 'Fries',
    addOns: [{ name: 'Dips', price: '₹25' }],
    items: [
      { title: 'Peri Peri Fries', price: '₹239', dietType: 'veg', description: 'Crispy fries with peri peri masala' },
      { title: 'Cheese Fries', price: '₹299', dietType: 'veg', description: 'One combination that screams yummm! fries topped with cheese, parsley' },
      { title: 'Peri Peri Cheese Fries', price: '₹311', dietType: 'veg', description: 'Cheese fries topped with peri peri masala' },
      { title: 'Fireball Fries with Keema Chicken', price: '₹299', dietType: 'non-veg', description: 'Minced chicken with fire-y homemade sauce to elevate the taste', smallText: 'Baari Special' },
      { title: 'Garlic Butter Fries', price: '₹239', dietType: 'veg', description: 'Fries topped with our homemade garlic butter that satiates our soul' },
      { title: 'Classic Fries', price: '₹215', dietType: 'veg', description: 'Only salt, no pepper' },
    ]
  },
  {
    id: 'salads',
    title: 'Salads',
    items: [
      { title: 'Caesar Salad', price: '₹275', dietType: 'veg' },
      { title: 'Caesar Chicken Salad', price: '₹323', dietType: 'non-veg' },
    ]
  },
  {
    id: 'mains',
    title: 'Mains',
    items: [
      { title: 'Grilled Chicken Breast with Mushroom Sauce', price: '₹599', dietType: 'non-veg', description: 'beautifully amalgamated taste of fresh cream and parsley in eggs served with toasted bread and fries' },
      { title: 'Cottage Cheese Steak with Mushroom Sauce', price: '₹563', dietType: 'veg', description: 'cottage cheese steak marinated with herbs, served with potato fries and grilled veggies' },
    ]
  },
  {
    id: 'desserts',
    title: 'Desserts',
    items: [
      { title: 'Sizzling Brownie', price: '₹239', dietType: 'egg' },
      { title: 'Donuts with Ice Cream', price: '₹263', dietType: 'egg', description: 'two shell donuts' },
      { title: 'Baked Cheesecake Slice', price: '₹275', dietType: 'egg' },
    ]
  },
  {
    id: 'iced-tea',
    title: 'Iced Tea',
    items: [
      { title: 'Peach', price: '₹239' },
      { title: 'Lemon', price: '₹239' },
    ]
  },
  {
    id: 'cakes',
    title: 'Celebration Cakes',
    items: [
      { title: 'Red Velvet', price: '₹599', dietType: 'egg' },
      { title: 'Choco Truffle', price: '₹599', dietType: 'egg' },
    ]
  },
  {
    id: 'coolers',
    title: 'Coolers',
    items: [
      { title: 'Virgin Mojito', price: '₹239' },
      { title: 'Cranberry', price: '₹251' },
      { title: 'Green Apple', price: '₹251' },
      { title: 'Blueberry', price: '₹251' },
      { title: 'Passion Fruit', price: '₹251' },
      { title: 'Blue Lagoon', price: '₹251' },
      { title: 'Watermelon', price: '₹251' },
      { title: 'Pink Lemonade', price: '₹263' },
      { title: 'Hurricane', price: '₹263' },
      { title: 'Sunset', price: '₹263' },
      { title: 'Fresh Lime Soda', price: '₹203', description: 'Salty/mix/sweet' },
      { title: 'Coke', price: '₹120' },
      { title: 'Mineral Water', price: '₹60' },
    ]
  },
  {
    id: 'premium-shakes',
    title: 'Premium Shakes',
    items: [
      { title: 'Choco Belgian', price: '₹299' },
      { title: 'Nut Brownie', price: '₹299' },
      { title: 'Heavenly Nutella', price: '₹299' },
      { title: 'Oreo Coffee', price: '₹299' },
    ]
  },
  {
    id: 'thick-shakes',
    title: 'Thick Shakes',
    items: [
      { title: 'Oreo Special', price: '₹263' },
      { title: 'Bubblegum', price: '₹251' },
      { title: 'Strawberry', price: '₹239' },
      { title: 'KitKat Choco', price: '₹275' },
      { title: 'Butterscotch', price: '₹239' },
      { title: 'Pina Colada', price: '₹251' },
    ]
  },
  {
    id: 'coffee',
    title: 'Coffee',
    addOns: [{ name: 'Add Caramel/Hazelnut', price: '₹29' }],
    items: [
      { title: 'Espresso', price: '₹99', description: 'A strong and concentrated shot, perfect for the pure coffee connoisseur' },
      { title: 'Cappuccino', price: '₹189', description: 'Rich espresso balanced with steamed milk and topped with velvety foam' },
      { title: 'Latte', price: '₹199', description: 'Smooth espresso combined with creamy steamed milk, a classic indulgence' },
      { title: 'Americano', price: '₹179', description: 'Diluted espresso for a milder flavor, perfect for sipping' },
      { title: 'Mocha', price: '₹239', description: 'Espresso blended with decadent chocolate and topped with whipped cream' },
      { title: 'Flat White', price: '₹198', description: 'Espresso with velvety microfoam, delivering a strong yet creamy experience' },
      { title: 'Coffee (Homemade Hand-Beaten)', price: '₹143' },
    ]
  },
  {
    id: 'hot-beverages',
    title: 'Hot Beverages',
    items: [
      { title: 'Kadak Chai', price: '₹107' },
      { title: 'Masala Chai', price: '₹120' },
      { title: 'Ginger Honey Lemon Tea', price: '₹107' },
      { title: 'Hot Chocolate', price: '₹215', description: 'Served with Marshmallow' },
    ]
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee',
    items: [
      { title: 'Classic', price: '₹239' },
      { title: 'Hazelnut', price: '₹251' },
      { title: 'Caramel', price: '₹251' },
    ]
  },
];
