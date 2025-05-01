import React from "react";

function HeroBanner() {
  return (
    <section className="relative h-[80vh]">
      <img
        src="/assets/banner.jpg"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay darkening the image */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-xl">
            <h1 className="text-6xl font-bold mb-6 text-white leading-tight">
              New Season Arrivals
            </h1>
            <p className="text-xl text-white mb-8">
              Discover the latest trends in fashion and explore our new
              collection
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                Shop Tops
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                Shop Bottoms
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;