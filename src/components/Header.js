import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white no-underline">
            Personal Blog
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="text-white hover:text-gray-800 no-underline">Home</Link>
            <Link to="/create" className="text-white hover:text-gray-800 no-underline">Create Post</Link>
            <Link to="/posts" className="text-white hover:text-gray-800 no-underline">PostList</Link>
            <Link className="text-white hover:text-gray-800 no-underline">Contact</Link>
          </div>
          <button 
            className="md:hidden focus:outline-none" 
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <Link to="/" className="block py-2 text-gray-600 hover:text-gray-800 no-underline" onClick={toggleMenu}>Home</Link>
            <Link to="/create" className="block py-2 text-gray-600 hover:text-gray-800 no-underline" onClick={toggleMenu}>Create Post</Link>
            <Link to="/about" className="block py-2 text-gray-600 hover:text-gray-800 no-underline" onClick={toggleMenu}>About</Link>
            <Link to="/contact" className="block py-2 text-gray-600 hover:text-gray-800 no-underline" onClick={toggleMenu}>Contact</Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;