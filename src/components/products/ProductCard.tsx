import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="group hover-lift border-0 shadow-sm hover:shadow-lg transition-all duration-300">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <Link to={`/products/${product.id}`}>
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 bg-white/80 hover:bg-white text-luxury-charcoal rounded-full w-10 h-10 p-0"
          >
            <Heart className="w-4 h-4" />
          </Button>
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-luxury-gold text-luxury-charcoal px-3 py-1 text-xs font-medium rounded-full">
              New
            </span>
          )}
          {product.discount && (
            <span className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 text-xs font-medium rounded-full">
              -{product.discount}%
            </span>
          )}
        </div>
        
        <div className="p-4 space-y-2">
          <div className="flex items-center space-x-1 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'text-luxury-gold fill-current'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
          </div>
          
          <h3 className="font-medium text-luxury-charcoal group-hover:text-luxury-gold transition-colors">
            <Link to={`/products/${product.id}`}>
              {product.name}
            </Link>
          </h3>
          
          <p className="text-sm text-gray-600">{product.brand}</p>
          
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-luxury-charcoal">
              ${product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {product.colors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: color.toLowerCase() }}
                title={color}
              />
            ))}
            {product.colors.length > 4 && (
              <span className="text-xs text-gray-500 ml-1">
                +{product.colors.length - 4} more
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;