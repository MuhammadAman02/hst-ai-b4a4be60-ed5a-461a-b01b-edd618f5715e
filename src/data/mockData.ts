import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    brand: 'Valentino',
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    description: 'Exquisite silk evening gown with intricate beadwork and flowing silhouette. Perfect for special occasions.',
    images: [
      'https://images.unsplash.com/photo-1566479179817-c0e8b4b4b2d5?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'women',
    subcategory: 'dresses',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Burgundy'],
    rating: 4.8,
    reviews: 24,
    isNew: true,
    inStock: true,
    tags: ['evening', 'formal', 'silk']
  },
  {
    id: '2',
    name: 'Cashmere Overcoat',
    brand: 'Tom Ford',
    price: 2800,
    description: 'Luxurious cashmere overcoat with tailored fit and premium construction.',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'men',
    subcategory: 'outerwear',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Charcoal', 'Navy', 'Camel'],
    rating: 4.9,
    reviews: 18,
    isNew: false,
    inStock: true,
    tags: ['cashmere', 'formal', 'winter']
  },
  {
    id: '3',
    name: 'Designer Handbag',
    brand: 'Hermès',
    price: 8500,
    description: 'Iconic leather handbag crafted from the finest materials with impeccable attention to detail.',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'accessories',
    subcategory: 'bags',
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 5.0,
    reviews: 42,
    isNew: false,
    inStock: true,
    tags: ['leather', 'luxury', 'handbag']
  },
  {
    id: '4',
    name: 'Tailored Blazer',
    brand: 'Giorgio Armani',
    price: 1800,
    description: 'Perfectly tailored blazer in premium wool with modern cut and classic styling.',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'women',
    subcategory: 'blazers',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray'],
    rating: 4.7,
    reviews: 31,
    isNew: true,
    inStock: true,
    tags: ['wool', 'tailored', 'professional']
  },
  {
    id: '5',
    name: 'Luxury Watch',
    brand: 'Rolex',
    price: 12000,
    description: 'Swiss-made luxury timepiece with automatic movement and sapphire crystal.',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'accessories',
    subcategory: 'watches',
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Rose Gold'],
    rating: 4.9,
    reviews: 67,
    isNew: false,
    inStock: true,
    tags: ['swiss', 'automatic', 'luxury']
  },
  {
    id: '6',
    name: 'Silk Scarf',
    brand: 'Chanel',
    price: 450,
    description: 'Hand-rolled silk scarf with signature print and luxurious feel.',
    images: [
      'https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'accessories',
    subcategory: 'scarves',
    sizes: ['One Size'],
    colors: ['Pink', 'Blue', 'Gold'],
    rating: 4.6,
    reviews: 15,
    isNew: true,
    inStock: true,
    tags: ['silk', 'printed', 'accessory']
  },
  {
    id: '7',
    name: 'Leather Boots',
    brand: 'Christian Louboutin',
    price: 1200,
    description: 'Handcrafted leather boots with signature red sole and elegant design.',
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'women',
    subcategory: 'shoes',
    sizes: ['35', '36', '37', '38', '39', '40'],
    colors: ['Black', 'Brown', 'Nude'],
    rating: 4.8,
    reviews: 28,
    isNew: false,
    inStock: true,
    tags: ['leather', 'boots', 'designer']
  },
  {
    id: '8',
    name: 'Dress Shirt',
    brand: 'Brunello Cucinelli',
    price: 650,
    description: 'Premium cotton dress shirt with mother-of-pearl buttons and perfect fit.',
    images: [
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400&h=600&fit=crop'
    ],
    category: 'men',
    subcategory: 'shirts',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink'],
    rating: 4.7,
    reviews: 22,
    isNew: true,
    inStock: true,
    tags: ['cotton', 'formal', 'dress shirt']
  }
];