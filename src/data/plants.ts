import { Plant } from '../store/cartSlice';

export const plants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    price: 45.99,
    thumbnail: 'https://via.placeholder.com/150/150?text=Monstera',
    category: 'Tropical'
  },
  {
    id: 2,
    name: 'Snake Plant',
    price: 25.99,
    thumbnail: 'https://via.placeholder.com/150/150?text=Snake+Plant',
    category: 'Succulents'
  },
  {
    id: 3,
    name: 'Pothos',
    price: 19.99,
    thumbnail: 'https://via.placeholder.com/150/150?text=Pothos',
    category: 'Tropical'
  },
  {
    id: 4,
    name: 'Aloe Vera',
    price: 15.99,
    thumbnail: 'https://via.placeholder.com/150/150?text=Aloe+Vera',
    category: 'Succulents'
  },
  {
    id: 5,
    name: 'Fiddle Leaf Fig',
    price: 65.99,
    thumbnail: 'https://via.placeholder.com/150/150?text=Fiddle+Leaf',
    category: 'Trees'
  },
  {
    id: 6,
    name: 'Peace Lily',
    price: 35.99,
    thumbnail: 'https://via.placeholder.com/150/150?text=Peace+Lily',
    category: 'Flowering'
  }
];

export const categories = ['Tropical', 'Succulents', 'Trees', 'Flowering'];
