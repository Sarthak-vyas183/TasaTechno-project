import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import CountUp from 'react-countup';

const HeroSection = () => {
  const services = [
    "Web Development",
    "Digital Forensics",
    "Cybersecurity Solutions",
    "Cloud & Hosting",
    "IT Training",
    "Technical Support",
    "Bug Resolution",
    "VAPT Services"
  ];
  
  const [currentService, setCurrentService] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const serviceInterval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentService((prev) => (prev + 1) % services.length);
        setFade(true);
      }, 500);
    }, 2000);

    return () => clearInterval(serviceInterval);
  }, [services.length]);

  return (
    <section className="w-full h-screen flex items-center justify-center relative z-10 overflow-hidden">
      <div className="text-center text-white px-4">
        
        {/* Top Tagline */}
        <div className="mb-2 fade-in-top delay-100">
          <p className="text-sm sm:text-base md:text-lg font-light tracking-widest text-cyan-300 opacity-90">
            IT SOLUTION AGENCY IN INDIA
          </p>
        </div>

        {/* Main Heading */}
        <div className="relative fade-in-up delay-300">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
            <span className="text-white">FROM VISION TO REALITY, </span>
            <span className="tasa-glitch">TASA TECHNO</span>
            <span className="text-white"> DRIVES THE CHANGE</span>
          </h1>
        </div>

        {/* Services Rotating Text */}
        <div className="mt-12 fade-in-up delay-500">
          <p className="text-lg sm:text-xl md:text-2xl font-medium mb-2 text-gray-300">
            We Provide
          </p>
          <div className="h-12 sm:h-16 flex items-center justify-center">
            <p className={`text-xl sm:text-3xl md:text-4xl font-bold text-cyan-400 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}>
              {services[currentService]}
            </p>
          </div>
        </div>

        {/* Animated Counter Example */}
        

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bounce-in delay-700">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-cyan-400 rounded-full mt-2 animate-scroll"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
