import React, { useState, useEffect } from 'react';
import logo from '../assets/logo2.png'; // adjust path if Navbar is nested deeper
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;
      setVisible(isVisible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {/* Main Navbar */}
      <nav
        className={`
          fixed top-6 left-1/2 transform -translate-x-1/2 
          w-[calc(100%-3rem)] max-w-6xl 
          bg-black/70 backdrop-blur-md 
          border border-gray-700 rounded-xl 
          shadow-lg shadow-cyan-500/10 
          px-6 py-3 
          z-50 transition-all duration-500 ease-in-out
          ${visible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'}
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to={"/home"}><img 
  src={logo} 
  alt="TASA Techno Logo" 
  className="h-10 w-auto object-contain"
 /></Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'Services', 'About', 'Team', 'Contact'].map((item) => (
              <Link
                key={item}
                to={`${item.toLowerCase()}`}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Desktop Button */}
          <button className="hidden md:block px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
            <Link to={"/contact"}>Have Query</Link>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-800/50 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-cyan-400"></span>
              <span className="block w-5 h-0.5 bg-cyan-400"></span>
              <span className="block w-4 h-0.5 bg-cyan-400"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-40 flex flex-col justify-center items-center gap-10 md:hidden">
          {['Home', 'Services', 'About', 'Team', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl text-white hover:text-cyan-400 transition"
            >
              {item}
            </Link>
          ))}
          <button className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300">
            Get Quote
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
