import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-black">
      {/* Logo */}
      <div className="text-white text-4xl font-bold">
        r1.
      </div>
      
      {/* Desktop Navigation Links - hidden on small screens */}
      <div className="hidden md:flex items-center space-x-8">
        <div className="bg-white text-black px-4 py-2 rounded-full">
          Home
        </div>
        <div className="text-white">
          About
        </div>
        <div className="text-white">
          Projects
        </div>
        <div className="text-white">
          Contact
        </div>
      </div>
      
      {/* Hire Me Button - hidden on small screens */}
      <div className="hidden md:block border border-white text-white px-6 py-2 rounded-full">
        HIRE ME
      </div>
      
      {/* Mobile Menu Button - visible only on small screens */}
      <button 
        className="md:hidden text-white"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          // X icon when menu is open
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          // Hamburger icon when menu is closed
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>
      
      {/* Mobile Menu - only visible when menu is open on small screens */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 right-0 left-0 bg-black p-4 flex flex-col space-y-4 z-50">
          <div className="bg-white text-black px-4 py-2 rounded-full text-center">
            Home
          </div>
          <div className="text-white text-center">
            About
          </div>
          <div className="text-white text-center">
            Projects
          </div>
          <div className="text-white text-center">
            Contact
          </div>
          <div className="border border-white text-white px-6 py-2 rounded-full text-center">
            HIRE ME
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;