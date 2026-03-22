import React from 'react';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { cartItems, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-brand-dark/50 backdrop-blur-sm z-[150] transition-opacity duration-300 ${isCartOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Slide-out Drawer */}
      <div className={`fixed top-0 right-0 h-full w-full sm:w-[450px] bg-brand-light shadow-2xl z-[200] transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.8,0.25,1)] flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-brand-gold/20 bg-white">
          <div className="flex items-center space-x-4 text-brand-dark">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="font-serif text-2xl font-bold tracking-wide">Your Cart</h2>
          </div>
          <button onClick={() => setIsCartOpen(false)} className="text-brand-dark/40 hover:text-brand-dark transition-colors">
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Content Items */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-6">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-brand-dark/40 space-y-6">
              <ShoppingBag className="w-20 h-20 opacity-20" />
              <p className="font-medium text-lg">Your cart is currently empty.</p>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm hover:text-brand-dark transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex space-x-5 bg-white p-4 rounded-md shadow-sm border border-gray-100 relative group transition-all hover:shadow-md">
                <div className="w-24 h-24 rounded-sm overflow-hidden bg-surface flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div className="flex justify-between items-start pr-6">
                    <h3 className="font-sans font-semibold text-brand-dark text-sm md:text-base leading-tight pr-2">{item.name}</h3>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors">
                    <Trash2 className="w-[18px] h-[18px]" />
                  </button>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center border border-gray-200 rounded-sm">
                      <button onClick={() => updateQuantity(item.id, -1)} className="px-3 py-1.5 text-gray-500 hover:bg-surface transition-colors"><Minus className="w-3 h-3" /></button>
                      <span className="px-4 py-1.5 text-sm font-bold text-brand-dark min-w-[2rem] text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="px-3 py-1.5 text-gray-500 hover:bg-surface transition-colors"><Plus className="w-3 h-3" /></button>
                    </div>
                    <span className="font-bold text-brand-dark text-lg">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout */}
        {cartItems.length > 0 && (
          <div className="p-6 md:p-8 border-t border-brand-gold/20 bg-white shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex justify-between items-center mb-6">
              <span className="text-brand-dark/70 font-medium uppercase tracking-widest text-xs font-bold">Subtotal</span>
              <span className="text-3xl font-bold font-serif text-brand-dark tracking-tight">₹{cartTotal}</span>
            </div>
            <button className="w-full bg-brand-gold text-brand-light py-5 font-bold tracking-[0.2em] uppercase hover:bg-brand-dark transition-colors rounded-sm shadow-xl flex justify-center items-center space-x-2">
              <span>Checkout Safely</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
