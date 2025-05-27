export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  category: 'women' | 'men' | 'accessories';
  images: string[];
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  isNew?: boolean;
  isFeatured?: boolean;
}