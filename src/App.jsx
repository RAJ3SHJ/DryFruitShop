import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import AllProductsGrid from './components/AllProductsGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ProductGrid />
        <AllProductsGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
