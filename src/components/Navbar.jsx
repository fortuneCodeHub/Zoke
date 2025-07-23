'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80); // Adjust threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#100918]/90 backdrop-blur border-b border-purple-800' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/images/avatar.jpg"
            alt="Logo"
            className="w-10 h-10 rounded-full object-cover me-2"
          />
          <h3>  
            <Link href='/' className='font-zentry text-[30px] font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent'>
                Zoke
            </Link>
          </h3>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-[50px]">
          <a href="#about" className="text-white hover:text-purple-300 transition">
            About
          </a>
          <a href="#work" className="text-white hover:text-purple-300 transition">
            Work
          </a>
          <a href="#contact" className="text-white hover:text-purple-300 transition">
            Contact
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pb-3 pt-2 bg-[#100918]/90 backdrop-blur-sm">
          <a href="#aout" className="block px-3 py-2 text-white rounded-md hover:bg-purple-800/30">
            About
          </a>
          <a href="#work" className="block px-3 py-2 text-white rounded-md hover:bg-purple-800/30">
            Work
          </a>
          <a href="#contact" className="block px-3 py-2 text-white rounded-md hover:bg-purple-800/30">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
