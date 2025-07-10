import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo4.jpg';

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <footer className="relative w-full bg-black text-white py-6 px-6 md:px-10 overflow-hidden font-sans">
      {/* Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[7vw] font-extrabold tracking-widest text-white/5 whitespace-nowrap pointer-events-none select-none z-0" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.06)' }}>
        TASA TECHNO
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-5 md:gap-8 max-w-6xl mx-auto">
        {/* Logo with Circular Rotating Text */}
        <div className="relative flex flex-col items-center justify-center" data-aos="zoom-in">
          <div className="relative w-32 h-32 flex items-center justify-center">
            <svg viewBox="0 0 120 120" className="absolute w-full h-full animate-rotate-circle">
              <defs>
                <path
                  id="circlePath"
                  d="M60,60 m-50,0 a50,50 0 1,1 100,0 a50,50 0 1,1 -100,0"
                />
              </defs>
              <text className="fill-[#fefefe] text-[8px] font-bold uppercase tracking-widest">
                <textPath href="#circlePath" startOffset="0%">
                  ⏺ TASA TECHNO • Web Dev • Cybersecurity • Cloud • VAPT • Support •
                </textPath>
              </text>
            </svg>
            <img
              src={logo}
              alt="Company Logo"
              className="w-20 h-20 rounded-full border-4 border-white shadow-xl bg-black z-10"
              style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-300 leading-snug text-center max-w-md px-2" data-aos="fade-up">
          <span className="text-cyan-400 font-semibold text-base">TASA TECHNO</span> — Your trusted partner in futuristic IT solutions. Secure web, cyber defense, VAPT, and more.
        </p>

        {/* Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center w-full px-4 md:px-0" data-aos="fade-up">
          <div>
            <h4 className="text-cyan-400 font-bold text-base mb-2 tracking-wide">EXPLORE</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">Services</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Partners</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Insights</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold text-base mb-2 tracking-wide">ABOUT</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">Leadership</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Our Story</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-cyan-400 font-bold text-base mb-2 tracking-wide">CONTACT</h4>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition">Email</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Support</a></li>
              <li><a href="#" className="hover:text-cyan    -400 transition">Feedback</a></li>
            </ul>
          </div>
        </div>

       
      </div>

      {/* Custom Animation Styles */}
      <style>{`
        .animate-rotate-circle {
          animation: rotateCircle 16s linear infinite;
          transform-origin: center;
        }
        @keyframes rotateCircle {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
