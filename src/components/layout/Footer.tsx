import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-luxury-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-luxury-gold">LUXE</h3>
            <p className="text-gray-300 text-sm">
              Curating the finest designer pieces for the modern wardrobe. 
              Discover luxury fashion that defines your style.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-luxury-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold text-luxury-gold">Shop</h4>
            <div className="space-y-2">
              <Link to="/products?category=women" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Women's Collection
              </Link>
              <Link to="/products?category=men" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Men's Collection
              </Link>
              <Link to="/products?category=accessories" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Accessories
              </Link>
              <Link to="/products?category=new" className="block text-gray-300 hover:text-white transition-colors text-sm">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="font-semibold text-luxury-gold">Customer Care</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Size Guide
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Shipping & Returns
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">
                FAQ
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold text-luxury-gold">Stay Updated</h4>
            <p className="text-gray-300 text-sm">
              Subscribe to receive exclusive offers and the latest fashion updates.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded text-white placeholder-gray-400 focus:border-luxury-gold focus:outline-none"
              />
              <button className="w-full bg-luxury-gold text-luxury-charcoal py-2 rounded font-medium hover:bg-luxury-gold-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 LUXE. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;