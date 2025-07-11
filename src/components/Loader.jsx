import React, { useEffect, useState } from 'react';
import logo from '../assets/logo4.jpg'; // your circular logo

const Loader = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Auto hide loader after 3 seconds
    const timer = setTimeout(() => {
      setHide(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-black transition-opacity duration-1000 ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
      {/* Background animated particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#1b1a55]/30 via-[#535c91]/10 to-transparent animate-pulse blur-2xl opacity-10" />
      </div>

      {/* Center Logo */}
      <img
        src={logo}
        alt="Logo"
        className="w-28 h-28 rounded-full border-4 border-white shadow-2xl z-10 animate-ping-slow"
      />

      {/* Glowing Company Name */}
      <h1 className="mt-6 text-2xl md:text-4xl font-bold text-yellow-400 z-10 animate-glow">
        TASA TECHNO
      </h1>
    </div>
  );
};

export default Loader;
