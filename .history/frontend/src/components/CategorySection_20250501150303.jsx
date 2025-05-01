import React from "react";

function CategoryCard({ name }) {
  return (
    <div className="group relative overflow-hidden rounded-xl h-[400px]">
      <img
        src={`/${name.toLowerCase()}.jpg`}
        alt={name}
        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
        <h3 className="text-white text-2xl font-bold mb-3">
          {name}
        </h3>
        <button className="bg-white text-black w-full py-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}

function CategorySection() {
  const categories = ["Women", "Men", "Accessories"];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard key={category} name={category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;