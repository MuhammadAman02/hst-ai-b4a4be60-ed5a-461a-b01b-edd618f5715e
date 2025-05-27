import { Product } from '@/types/product';

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Silk Evening Gown',
    brand: 'Valentino',
    price: 3200,
    originalPrice: 4000,
    discount: 20,
    description: 'An exquisite silk evening gown featuring intricate beadwork and a flowing silhouette. Perfect for special occasions and formal events.',
    category: 'women',
    images: [
      'https://images.unsplash.com/photo-1566479179817-c0e8e0b0b5e7?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Navy', 'Burgundy'],
    rating: 4.8,
    reviews: 124,
    isNew: true,
    isFeatured: true
  },
  {
    id: '2',
    name: 'Cashmere Overcoat',
    brand: 'Burberry',
    price: 2800,
    description: 'Luxurious cashmere overcoat with classic tailoring and timeless design. Features horn buttons and silk lining.',
    category: 'men',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Navy', 'Charcoal'],
    rating: 4.9,
    reviews: 89,
    isFeatured: true
  },
  {
    id: '3',
    name: 'Diamond Tennis Bracelet',
    brand: 'Tiffany & Co.',
    price: 12500,
    description: 'Stunning diamond tennis bracelet featuring brilliant-cut diamonds set in platinum. A timeless piece of luxury jewelry.',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=500&h=600&fit=crop'
    ],
    sizes: ['One Size'],
    colors: ['Platinum', 'White Gold'],
    rating: 5.0,
    reviews: 45,
    isNew: true
  },
  {
    id: '4',
    name: 'Designer Handbag',
    brand: 'Hermès',
    price: 8900,
    description: 'Iconic leather handbag crafted from the finest materials. Features gold hardware and signature design elements.',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop'
    ],
    sizes: ['One Size'],
    colors: ['Black', 'Brown', 'Tan'],
    rating: 4.7,
    reviews: 156,
    isFeatured: true
  },
  {
    id: '5',
    name: 'Cocktail Dress',
    brand: 'Chanel',
    price: 4200,
    description: 'Elegant cocktail dress with classic Chanel styling. Features tweed fabric and signature chain details.',
    category: 'women',
    images: [
      'https://images.unsplash.com/photo-1566479179817-c0e8e0b0b5e7?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Pink', 'White'],
    rating: 4.6,
    reviews: 78,
    isNew: true
  },
  {
    id: '6',
    name: 'Tailored Suit',
    brand: 'Tom Ford',
    price: 3800,
    description: 'Impeccably tailored suit crafted from premium wool. Features modern cut and attention to detail.',
    category: 'men',
    images: [
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&h=600&fit=crop'
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Charcoal', 'Black'],
    rating: 4.8,
    reviews: 92,
    isFeatured: true
  },
  {
    id: '7',
    name: 'Luxury Watch',
    brand: 'Rolex',
    price: 15000,
    description: 'Prestigious luxury watch with automatic movement and sapphire crystal. A symbol of excellence and precision.',
    category: 'accessories',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594576662059-6f4ac6c4d8b7?w=500&h=600&fit=crop'
    ],
    sizes: ['One Size'],
    colors: ['Gold', 'Silver', 'Rose Gold'],
    rating: 4.9,
    reviews: 234,
    isNew: true
  },
  {
    id: '8',
    name: 'Silk Blouse',
    brand: 'Saint Laurent',
    price: 1200,
    description: 'Luxurious silk blouse with elegant draping and sophisticated design. Perfect for both office and evening wear.',
    category: 'women',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&h=600&fit=crop',
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop'
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['White', 'Black', 'Cream'],
    rating: 4.5,
    reviews: 67,
    isFeatured: true
  }
];