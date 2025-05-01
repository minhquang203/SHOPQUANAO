import React from "react";

function ProductCard({ id }) {
  return (
    <div className="group bg-white rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
      <div className="relative overflow-hidden">
        <img
          src={`/product${id}.jpg`}
          alt={`Product ${id}`}
          className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
        />
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
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
  );
}

export default ProductCard;