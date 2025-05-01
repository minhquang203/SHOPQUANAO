import React from "react";
import ProductCard from "./ProductCard";

function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <ProductCard key={item} id={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;