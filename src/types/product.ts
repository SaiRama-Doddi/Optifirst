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
    id: 'wc-800',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '800gm',
    price: 180,
    image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
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
   image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1400',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.4KG',
    price: 280,
  image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'wc-1500',
    name: 'Whole Chicken',
    category: 'whole-chicken',
    weight: '1.5KG',
    price: 300,
 image: '/chicken.png',
    description: 'Fresh whole chicken, perfectly cleaned and ready to cook'
  },
  {
    id: 'cut-breast',
    name: 'Chicken Breast',
    category: 'cuts',
    weight: '500gm',
    price: 180,
    image: 'https://i.pinimg.com/1200x/e3/39/1a/e3391a187bc06e904414c38e3d0f67a4.jpg',
    description: 'Premium boneless chicken breast, ideal for grilling and frying'
  },
  {
    id: 'cut-wings',
    name: 'Chicken Wings',
    category: 'cuts',
    weight: '500gm',
    price: 120,
    image: 'https://i.pinimg.com/originals/ba/b2/80/bab2808aeefe513910e2306504742af8.jpg',
    description: 'Juicy chicken wings, perfect for BBQ and appetizers'
  },
  {
    id: 'cut-thigh',
    name: 'Chicken Thigh Boneless',
    category: 'cuts',
    weight: '500gm',
    price: 160,
    image: 'https://i.pinimg.com/1200x/9c/56/6e/9c566eab92aa534a8cea6c6b91dd756f.jpg',
    description: 'Tender boneless thigh meat, rich in flavor'
  },
  {
    id: 'cut-drumstick',
    name: 'Chicken Drumsticks',
    category: 'cuts',
    weight: '500gm',
    price: 140,
    image: 'https://i.pinimg.com/1200x/f3/12/2a/f3122a4a3f8dcf507cd9980d13ec3981.jpg',
    description: 'Succulent drumsticks, great for roasting and curry'
  },
  {
    id: 'cut-quarter',
    name: 'Chicken Quarter Legs',
    category: 'cuts',
    weight: '500gm',
    price: 130,
    image: 'https://i.pinimg.com/736x/1c/87/89/1c8789472f7b81125642bc7b89916c52.jpg',
    description: 'Full leg quarters with thigh and drumstick'
  },
  {
    id: 'cut-mix',
    name: 'Mixed Cuts',
    category: 'cuts',
    weight: '500gm',
    price: 150,
    image: 'https://i.pinimg.com/1200x/08/57/12/0857123c4cae85b5bc0fe37f0abf4319.jpg',
    description: 'Assorted chicken cuts for variety in your meals'
  },
  {
    id: 'offal-liver',
    name: 'Chicken Liver',
    category: 'offals',
    price: 80,
    image: 'https://vintage-recipes.com/wp-content/uploads/2024/08/Chicken-Livers-Horizontal.jpg',
    description: 'Fresh chicken liver, nutrient-rich and flavorful'
  },
  {
    id: 'offal-gizzard',
    name: 'Chicken Gizzard',
    category: 'offals',
    price: 70,
    image: 'https://i.pinimg.com/736x/22/96/40/229640803f4dfde02c69a9410b54431c.jpg',
    description: 'Cleaned chicken gizzard, perfect for curries'
  },
  {
    id: 'offal-head',
    name: 'Chicken Head',
    category: 'offals',
    price: 40,
    image: 'https://i.pinimg.com/736x/32/6b/49/326b494eeac668a4ff87ed5eb55cf92e.jpg',
    description: 'For traditional recipes and special dishes'
  },
  {
    id: 'offal-back',
    name: 'Chicken Back',
    category: 'offals',
    price: 50,
    image: 'https://i.pinimg.com/1200x/63/4f/2f/634f2fe9db773d347339b2daf732589a.jpg',
    description: 'Ideal for making rich chicken stock'
  },
  {
    id: 'offal-feet',
    name: 'Chicken Feet',
    category: 'offals',
    price: 60,
    image: 'https://i.pinimg.com/736x/cc/30/83/cc30832330292bd29e1ab9a5b0ad4f89.jpg',
    description: 'Collagen-rich chicken feet'
  },
  {
    id: 'offal-mix',
    name: 'Mixed Cuts',
    category: 'offals',
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
    image: 'https://i.pinimg.com/736x/ac/05/ff/ac05ff382c8784edf71a460924522480.jpg',
    description: 'Farm fresh eggs, 6 pieces'
  },
  {
    id: 'egg-15',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 15,
    price: 150,
    image: 'https://i.pinimg.com/736x/ac/05/ff/ac05ff382c8784edf71a460924522480.jpg',
    description: 'Farm fresh eggs, 15 pieces'
  },
  {
    id: 'egg-30',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 30,
    price: 280,
    image: 'https://i.pinimg.com/736x/ac/05/ff/ac05ff382c8784edf71a460924522480.jpg',
    description: 'Farm fresh eggs, 30 pieces'
  }
];

export interface CartItem extends Product {
  cartQuantity: number;
}

