import React from "react";

function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[600px]">
        <img 
          src="/banner.jpg" 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
          <h1 className="text-5xl font-bold mb-4">Summer Collection 2024</h1>
          <button className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100">
            Shop Now
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img src="/women.jpg" alt="Women" className="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">Women</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img src="/men.jpg" alt="Men" className="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">Men</h3>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg cursor-pointer group">
            <img src="/accessories.jpg" alt="Accessories" className="w-full h-[300px] object-cover transition duration-300 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold">Accessories</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={`/product${item}.jpg`} alt={`Product ${item}`} className="w-full h-[300px] object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Product Name</h3>
                  <p className="text-gray-600">$99.99</p>
                  <button className="mt-3 w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-6">Get updates about new products and special offers</p>
          <div className="flex gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border rounded-md w-full max-w-md"
            />
            <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;