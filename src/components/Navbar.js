// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold">Goon Lights</a>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/shop" className="hover:text-gray-300">Shop</a>
          <a href="/customize" className="hover:text-gray-300">Customize</a>
          <a href="/about" className="hover:text-gray-300">About Us</a>
          <a href="/contact" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
