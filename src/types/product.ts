export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  description: string;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  rating: number;
  reviews: number;
  isNew: boolean;
  inStock: boolean;
  tags: string[];
}