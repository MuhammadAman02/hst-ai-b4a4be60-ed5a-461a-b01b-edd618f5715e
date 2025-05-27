import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import ProductCard from '@/components/products/ProductCard';
import { mockProducts } from '@/data/mockData';

const HomePage = () => {
  const featuredProducts = mockProducts.slice(0, 4);
  const newArrivals = mockProducts.slice(4, 8);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center luxury-gradient">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-luxury-charcoal mb-6 animate-fade-in">
            Luxury Fashion
            <span className="block text-luxury-gold">Redefined</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
            Discover curated designer pieces that embody elegance, sophistication, and timeless style.
          </p>
          <div className="space-x-4 animate-fade-in">
            <Button asChild size="lg" className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300">
              <Link to="/products">
                Shop Collection
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white">
              <Link to="/products?category=new">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-gold-light rounded-full flex items-center justify-center mx-auto">
                <Truck className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-lg">Free Worldwide Shipping</h3>
              <p className="text-gray-600">Complimentary shipping on all orders over $500</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-gold-light rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-lg">Authenticity Guaranteed</h3>
              <p className="text-gray-600">Every piece is verified for authenticity and quality</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-luxury-gold-light rounded-full flex items-center justify-center mx-auto">
                <Headphones className="w-8 h-8 text-luxury-gold" />
              </div>
              <h3 className="font-semibold text-lg">24/7 Concierge</h3>
              <p className="text-gray-600">Personal styling and customer service available anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-luxury-gray-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-luxury-charcoal mb-4">
              Featured Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Handpicked pieces from the world's most prestigious designers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild variant="outline" size="lg" className="border-luxury-charcoal text-luxury-charcoal hover:bg-luxury-charcoal hover:text-white">
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-luxury-charcoal mb-4">
              New Arrivals
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The latest additions to our curated collection
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-luxury-charcoal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Stay in Style
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to know about new collections, exclusive offers, and fashion insights
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white text-luxury-charcoal rounded focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
            <Button className="bg-luxury-gold text-luxury-charcoal hover:bg-luxury-gold-light px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;