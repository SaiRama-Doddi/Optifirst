export interface Product {
  id: string;
  name: string;
  category: 'whole-chicken' | 'cuts' | 'offals' | 'eggs';
  weight?: string;
  quantity?: number;
  price: number;
  image: string;
  description: string;
}

export const products: Product[] = [
  {
    id: 'wc-900',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '900gm',
    price: 180,
    image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1000',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1KG',
    price: 200,
    image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1100',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.1KG',
    price: 220,
    image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1200',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.2KG',
    price: 240,
    image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1300',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.3KG',
    price: 260,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1400',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.4KG',
    price: 280,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1500',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.5KG',
    price: 300,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'cut-breast',
    name: 'Chicken Breast',
    category: 'cuts',
    weight: '500gm',
    price: 180,
    image: 'https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Premium boneless chicken breast, ideal for grilling and frying'
  },
  {
    id: 'cut-wings',
    name: 'Chicken Wings',
    category: 'cuts',
    weight: '500gm',
    price: 120,
    image: 'https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Juicy chicken wings, perfect for BBQ and appetizers'
  },
  {
    id: 'cut-thigh',
    name: 'Chicken Thigh Boneless',
    category: 'cuts',
    weight: '500gm',
    price: 160,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Tender boneless thigh meat, rich in flavor'
  },
  {
    id: 'cut-drumstick',
    name: 'Chicken Drumsticks',
    category: 'cuts',
    weight: '500gm',
    price: 140,
    image: 'https://i.pinimg.com/736x/9f/a6/29/9fa62945fe989bba7ce43b654904c261.jpg',
    description: 'Succulent drumsticks, great for roasting and curry'
  },
  {
    id: 'cut-quarter',
    name: 'Chicken Quarter Legs',
    category: 'cuts',
    weight: '500gm',
    price: 130,
    image: 'https://images.pexels.com/photos/616353/pexels-photo-616353.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Full leg quarters with thigh and drumstick'
  },
  {
    id: 'cut-mix',
    name: 'Mixed Cuts',
    category: 'cuts',
    weight: '500gm',
    price: 150,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Assorted chicken cuts for variety in your meals'
  },
  {
    id: 'offal-liver',
    name: 'Chicken Liver',
    category: 'offals',
    weight: '250gm',
    price: 80,
    image: 'https://i.pinimg.com/736x/a6/21/d7/a621d7a99b747a0b3876d0ec2499dd16.jpg',
    description: 'Fresh chicken liver, nutrient-rich and flavorful'
  },
  {
    id: 'offal-gizzard',
    name: 'Chicken Gizzard',
    category: 'offals',
    weight: '250gm',
    price: 70,
    image: 'https://i.pinimg.com/736x/22/96/40/229640803f4dfde02c69a9410b54431c.jpg',
    description: 'Cleaned chicken gizzard, perfect for curries'
  },
  {
    id: 'offal-head',
    name: 'Chicken Head',
    category: 'offals',
    weight: '250gm',
    price: 40,
    image: 'https://i.pinimg.com/736x/32/6b/49/326b494eeac668a4ff87ed5eb55cf92e.jpg',
    description: 'For traditional recipes and special dishes'
  },
  {
    id: 'offal-back',
    name: 'Chicken Back',
    category: 'offals',
    weight: '500gm',
    price: 50,
    image: 'https://i.pinimg.com/1200x/63/4f/2f/634f2fe9db773d347339b2daf732589a.jpg',
    description: 'Ideal for making rich chicken stock'
  },
  {
    id: 'offal-feet',
    name: 'Chicken Feet',
    category: 'offals',
    weight: '500gm',
    price: 60,
    image: 'https://i.pinimg.com/736x/cc/30/83/cc30832330292bd29e1ab9a5b0ad4f89.jpg',
    description: 'Collagen-rich chicken feet'
  },
  {
    id: 'offal-mix',
    name: 'Mixed Offals',
    category: 'offals',
    weight: '500gm',
    price: 90,
    image: 'https://i.pinimg.com/736x/4e/56/2b/4e562b2fe00aa1699c65056842f2fba8.jpg',
    description: 'Assorted offals for traditional cooking'
  },
  {
    id: 'egg-6',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 6,
    price: 60,
    image: 'https://i.pinimg.com/736x/83/9e/ac/839eac8b3b90203638c8bc715c0b3143.jpg',
    description: 'Farm fresh eggs, 6 pieces'
  },
  {
    id: 'egg-15',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 15,
    price: 150,
    image: 'https://i.pinimg.com/1200x/e7/ec/ad/e7ecad2cb4407d501f771f28ec66ce45.jpg',
    description: 'Farm fresh eggs, 15 pieces'
  },
  {
    id: 'egg-30',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 30,
    price: 280,
    image: 'https://i.pinimg.com/1200x/15/35/3e/15353ed0b6de9533ae1cd80a9ea668b3.jpg',
    description: 'Farm fresh eggs, 30 pieces'
  }
];

export interface CartItem extends Product {
  cartQuantity: number;
}

