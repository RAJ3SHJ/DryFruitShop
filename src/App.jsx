import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSellers from './components/BestSellers';
import AllProductsGrid from './components/AllProductsGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import GlobalProductDrawer from './components/GlobalProductDrawer';
import { CartProvider } from './context/CartContext';
import { QuickViewProvider } from './context/QuickViewContext';

function App() {
  return (
    <CartProvider>
      <QuickViewProvider>
        <div className="min-h-screen bg-brand-light font-sans text-brand-dark overflow-x-hidden">
          <Header />
          <main>
            <Hero />
            <BestSellers />
            <AllProductsGrid />
          </main>
          <Footer />
          <CartDrawer />
          <GlobalProductDrawer />
        </div>
      </QuickViewProvider>
    </CartProvider>
  );
}

export default App;
