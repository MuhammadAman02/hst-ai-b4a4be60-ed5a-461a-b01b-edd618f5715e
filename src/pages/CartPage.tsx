import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      dispatch({ type: 'REMOVE_ITEM', payload: id });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity: newQuantity } });
    }
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const subtotal = state.total;
  const shipping = subtotal > 500 ? 0 : 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (state.items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
        <h1 className="text-3xl font-serif font-bold text-luxury-charcoal mb-4">
          Your Cart is Empty
        </h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Looks like you haven't added any items to your cart yet. 
          Start shopping to fill it up with amazing designer pieces.
        </p>
        <Button asChild size="lg" className="bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal">
          <Link to="/products">
            Start Shopping
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif font-bold text-luxury-charcoal mb-8">
        Shopping Cart ({state.items.reduce((sum, item) => sum + item.quantity, 0)} items)
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={`${item.id}-${item.size}`} className="border-luxury-gray-medium">
              <CardContent className="p-6">
                <div className="flex space-x-4">
                  <div className="w-24 h-24 bg-luxury-gray-light rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-luxury-charcoal">{item.name}</h3>
                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="w-3 h-3" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </Button>
                      </div>
                      
                      <div className="text-right">
                        <p className="font-semibold text-luxury-charcoal">
                          ${(item.price * item.quantity).toLocaleString()}
                        </p>
                        {item.quantity > 1 && (
                          <p className="text-sm text-gray-500">
                            ${item.price.toLocaleString()} each
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="border-luxury-gray-medium sticky top-24">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                </div>
                
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                
                <Separator />
                
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              {shipping > 0 && (
                <p className="text-sm text-gray-600 mt-4 p-3 bg-luxury-gray-light rounded">
                  Add ${(500 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              
              <div className="space-y-3 mt-6">
                <Button className="w-full bg-luxury-charcoal hover:bg-luxury-gold hover:text-luxury-charcoal transition-all duration-300" size="lg">
                  Proceed to Checkout
                </Button>
                
                <Button asChild variant="outline" className="w-full" size="lg">
                  <Link to="/products">
                    Continue Shopping
                  </Link>
                </Button>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-xs text-gray-500">
                  Secure checkout with SSL encryption
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CartPage;