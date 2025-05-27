import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Heart, Star, Truck, Shield, RotateCcw, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { mockProducts } from '@/data/mockData';
import { useCart } from '@/contexts/CartContext';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { dispatch } = useCart();
  
  const product = mockProducts.find(p => p.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Button onClick={() => navigate('/products')}>
          Back to Products
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }

    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: 'ADD_ITEM',
        payload: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          size: selectedSize,
        }
      });
    }

    toast.success(`Added ${quantity} item(s) to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square overflow-hidden rounded-lg bg-luxury-gray-light">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImage === index ? 'border-luxury-gold' : 'border-luxury-gray-medium'
                }`}
              >
                <img
                  src={image}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <Badge variant="secondary" className="bg-luxury-gold-light text-luxury-charcoal">
                {product.brand}
              </Badge>
              <Button variant="ghost" size="sm">
                <Heart className="w-5 h-5" />
              </Button>
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-luxury-charcoal mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'text-luxury-gold fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-luxury-charcoal">
                ${product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.originalPrice.toLocaleString()}
                </span>
              )}
              {product.discount && (
                <Badge variant="destructive">
                  -{product.discount}% OFF
                </Badge>
              )}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="font-semibold mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map(size => (
                <Button
                  key={size}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  onClick={() => setSelectedSize(size)}
                  className={selectedSize === size ? 'bg-luxury-charcoal' : ''}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div>
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="flex space-x-3">
              {product.colors.map(color => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? 'border-luxury-gold scale-110'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
            {selectedColor && (
              <p className="text-sm text-gray-600 mt-2">Selected: {selectedColor}</p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="space-y-3">
            <Button
              onClick={handleAddToCart}
              className="w-full bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300"
              size="lg"
            >
              Add to Cart - ${(product.price * quantity).toLocaleString()}
            </Button>
            
            <Button variant="outline" className="w-full" size="lg">
              Buy Now
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-luxury-gray-medium">
            <div className="text-center">
              <Truck className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
              <p className="text-xs text-gray-600">Free Shipping</p>
            </div>
            <div className="text-center">
              <Shield className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
              <p className="text-xs text-gray-600">Authentic</p>
            </div>
            <div className="text-center">
              <RotateCcw className="w-6 h-6 mx-auto mb-2 text-luxury-gold" />
              <p className="text-xs text-gray-600">Easy Returns</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </TabsContent>
          
          <TabsContent value="details" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Product Information</h4>
                <dl className="space-y-2">
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Brand:</dt>
                    <dd className="font-medium">{product.brand}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Category:</dt>
                    <dd className="font-medium capitalize">{product.category}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Available Sizes:</dt>
                    <dd className="font-medium">{product.sizes.join(', ')}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-600">Available Colors:</dt>
                    <dd className="font-medium">{product.colors.join(', ')}</dd>
                  </div>
                </dl>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Care Instructions</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Dry clean only</li>
                  <li>• Store in dust bag when not in use</li>
                  <li>• Avoid direct sunlight</li>
                  <li>• Handle with care</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold">Customer Reviews</h4>
                <Button variant="outline">Write a Review</Button>
              </div>
              
              <div className="space-y-4">
                {[1, 2, 3].map(review => (
                  <div key={review} className="border-b border-luxury-gray-medium pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-luxury-gold fill-current" />
                          ))}
                        </div>
                        <span className="font-medium">Anonymous Customer</span>
                      </div>
                      <span className="text-sm text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-gray-700">
                      Absolutely love this piece! The quality is exceptional and it fits perfectly. 
                      Highly recommend for anyone looking for luxury fashion.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetailPage;