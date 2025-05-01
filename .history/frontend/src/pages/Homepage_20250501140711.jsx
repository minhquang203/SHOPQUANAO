import React from "react";
import { FaExchangeAlt, FaHeadset, FaShieldAlt, FaShippingFast } from 'react-icons/fa';

function Homepage() {
  return (
    <div className="min-h-screen">
      {/* Hero Banner with Overlay */}
      <section className="relative h-[80vh]">
        <img 
          src="/assets/banner.jpg" 
          alt="Hero Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0  flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl">
              <h1 className="text-6xl font-bold mb-6 text-pink leading-tight">
                New Season Arrivals
              </h1>
              <p className="text-xl text-white mb-8">
                Discover the latest trends in fashion and explore our new collection
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition duration-300">
                  Shop Women
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition duration-300">
                  Shop Men
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Services Section */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4 p-4">
              <FaShippingFast className="text-3xl text-gray-700" />
              <div>
                <h3 className="font-semibold">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $100</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <FaExchangeAlt className="text-3xl text-gray-700" />
              <div>
                <h3 className="font-semibold">Easy Returns</h3>
                <p className="text-sm text-gray-600">30 days return policy</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <FaHeadset className="text-3xl text-gray-700" />
              <div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-gray-600">Customer service</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4">
              <FaShieldAlt className="text-3xl text-gray-700" />
              <div>
                <h3 className="font-semibold">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Women', 'Men', 'Accessories'].map((category) => (
              <div key={category} className="group relative overflow-hidden rounded-xl h-[400px]">
                <img 
                  src={`/${category.toLowerCase()}.jpg`} 
                  alt={category} 
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-3">{category}</h3>
                  <button className="bg-white text-black w-full py-3 rounded-full opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition duration-300">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={`/product${item}.jpg`} 
                    alt={`Product ${item}`} 
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Product Name</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">$99.99</p>
                    <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join Our Newsletter</h2>
            <p className="text-gray-300 mb-8">Subscribe to get special offers, free giveaways, and amazing deals.</p>
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 rounded-full w-full max-w-md text-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;