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
    weight: '1KG',
    price: 180,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424679/breast_hxqwzx.jpg',
    description: 'Premium boneless chicken breast, ideal for grilling and frying'
  },
  {
    id: 'cut-wings',
    name: 'Chicken Wings',
    category: 'cuts',
    weight: '1KG',
    price: 120,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424710/wings_fd3axg.jpg',
    description: 'Juicy chicken wings, perfect for BBQ and appetizers'
  },
  {
    id: 'cut-thigh',
    name: 'Chicken Thigh Boneless',
    category: 'cuts',
    weight: '1KG',
    price: 160,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424780/thigh_paemaw.jpg',
    description: 'Tender boneless thigh meat, rich in flavor'
  },
  {
    id: 'cut-drumstick',
    name: 'Chicken Drumsticks',
    category: 'cuts',
    weight: '1KG',
    price: 140,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424780/sticks_jo2lqa.jpg',
    description: 'Succulent drumsticks, great for roasting and curry'
  },
  {
    id: 'cut-quarter',
    name: 'Chicken Quarter Legs',
    category: 'cuts',
    weight: '1KG',
    price: 130,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424878/legs_idwdpq.jpg',
    description: 'Full leg quarters with thigh and drumstick'
  },
  {
    id: 'cut-mix',
    name: 'Mixed Cuts',
    category: 'cuts',
    weight: '1KG',
    price: 150,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424987/mixed-cut_hjuwqn.jpg',
    description: 'Assorted chicken cuts for variety in your meals'
  },
  {
    id: 'offal-liver',
    name: 'Chicken Liver',
    category: 'offals',
    price: 80,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424987/liver_r6most.jpg',
    description: 'Fresh chicken liver, nutrient-rich and flavorful'
  },
  {
    id: 'offal-gizzard',
    name: 'Chicken Gizzard',
    category: 'offals',
    price: 70,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765424986/gizzard_fpkfvm.jpg',
    description: 'Cleaned chicken gizzard, perfect for curries'
  },
 /*  {
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
    image: 'https://slapfarms.com/wp-content/uploads/ChiceknBackshoppable.jpg',
    description: 'Ideal for making rich chicken stock'
  },
  {
    id: 'offal-feet',
    name: 'Chicken Feet',
    category: 'offals',
    price: 60,
    image: '/feet.jpg',
    description: 'Collagen-rich chicken feet'
  }, */
  /*
  {
    id: 'offal-mix',
    name: 'Mixed Cuts',
    category: 'offals',
    price: 90,
    image: 'https://i.pinimg.com/736x/4e/56/2b/4e562b2fe00aa1699c65056842f2fba8.jpg',
    description: 'Assorted offals for traditional cooking'
  }, */
  {
    id: 'egg-6',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 6,
    price: 60,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765425071/eggs_kq98pb.jpg',
    description: 'Farm fresh eggs, 6 pieces'
  },
  {
    id: 'egg-15',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 15,
    price: 150,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765425071/eggs_kq98pb.jpg',
    description: 'Farm fresh eggs, 15 pieces'
  },
  {
    id: 'egg-30',
    name: 'Eggs Tray',
    category: 'eggs',
    quantity: 30,
    price: 280,
    image: 'https://res.cloudinary.com/dfp5qmbgz/image/upload/v1765425071/eggs_kq98pb.jpg',
    description: 'Farm fresh eggs, 30 pieces'
  }
];

export interface CartItem extends Product {
  cartQuantity: number;
}

