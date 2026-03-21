import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function AllProductsGrid() {
  return (
    <section id="all-products" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-brand-dark font-serif tracking-tight text-left mb-12">
          Products
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 md:gap-x-10 md:gap-y-20">
          {products.map((product, index) => (
            <ProductCard key={`all-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
