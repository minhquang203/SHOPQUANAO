import React from "react";

function Newsletter() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Join Our Newsletter</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to get special offers, free giveaways, and amazing
            deals.
          </p>
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
  );
}

export default Newsletter;