import React, { useState } from 'react';
import { FaHeart, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          Free shipping on orders over $100
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">FASHION STORE</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/women" className="hover:text-gray-600 transition">Women</Link>
            <Link to="/men" className="hover:text-gray-600 transition">Men</Link>
            <Link to="/accessories" className="hover:text-gray-600 transition">Accessories</Link>
            <Link to="/sale" className="text-red-600 hover:text-red-700 transition">Sale</Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
            />
            <FaSearch className="absolute left-3 text-gray-400" />
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <button className="hover:text-gray-600 transition">
              <FaSearch className="h-5 w-5 md:hidden" />
            </button>
            <Link to="/wishlist" className="hover:text-gray-600 transition">
              <FaHeart className="h-5 w-5" />
            </Link>
            <Link to="/cart" className="relative hover:text-gray-600 transition">
              <FaShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link to="/account" className="hover:text-gray-600 transition">
              <FaUser className="h-5 w-5" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/women" className="hover:text-gray-600 transition px-4">Women</Link>
              <Link to="/men" className="hover:text-gray-600 transition px-4">Men</Link>
              <Link to="/accessories" className="hover:text-gray-600 transition px-4">Accessories</Link>
              <Link to="/sale" className="text-red-600 hover:text-red-700 transition px-4">Sale</Link>
              <div className="relative px-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                <FaSearch className="absolute left-7 top-3 text-gray-400" />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;