import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state: cartState } = useCart();
  const { state: authState, logout } = useAuth();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  const handleAuthClick = () => {
    if (authState.isAuthenticated) {
      logout();
    } else {
      navigate('/auth');
    }
  };

  return (
    <header className="bg-white border-b border-luxury-gray-medium sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-bold text-luxury-charcoal">
            LUXE
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products" className="text-luxury-charcoal hover:text-luxury-gold transition-colors">
              All Products
            </Link>
            <Link to="/products?category=women" className="text-luxury-charcoal hover:text-luxury-gold transition-colors">
              Women
            </Link>
            <Link to="/products?category=men" className="text-luxury-charcoal hover:text-luxury-gold transition-colors">
              Men
            </Link>
            <Link to="/products?category=accessories" className="text-luxury-charcoal hover:text-luxury-gold transition-colors">
              Accessories
            </Link>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search designer pieces..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-luxury-gray-medium focus:border-luxury-gold"
              />
            </div>
          </form>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleAuthClick}
              className="hidden md:flex items-center space-x-1 text-luxury-charcoal hover:text-luxury-gold"
            >
              <User className="w-4 h-4" />
              <span>{authState.isAuthenticated ? 'Logout' : 'Login'}</span>
            </Button>

            <Link to="/cart" className="relative">
              <Button variant="ghost" size="sm" className="text-luxury-charcoal hover:text-luxury-gold">
                <ShoppingBag className="w-4 h-4" />
                {cartState.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-luxury-gold text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartState.items.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-luxury-charcoal"
            >
              {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-luxury-gray-medium py-4 animate-slide-in">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search designer pieces..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-luxury-gray-medium focus:border-luxury-gold"
                />
              </div>
            </form>
            
            <nav className="space-y-2">
              <Link
                to="/products"
                className="block py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                All Products
              </Link>
              <Link
                to="/products?category=women"
                className="block py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/products?category=men"
                className="block py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/products?category=accessories"
                className="block py-2 text-luxury-charcoal hover:text-luxury-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Accessories
              </Link>
              <Button
                variant="ghost"
                onClick={() => {
                  handleAuthClick();
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start p-2 text-luxury-charcoal hover:text-luxury-gold"
              >
                <User className="w-4 h-4 mr-2" />
                {authState.isAuthenticated ? 'Logout' : 'Login'}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;