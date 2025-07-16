import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/office.jpg';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-transparent text-white py-24 px-4 md:px-20 font-orbitron overflow-x-hidden"
    >
      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-400 animate-pulse"
        data-aos="zoom-in"
      >
        <span className="glow-text">About Us</span>
      </h2>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div data-aos="fade-right">
          <div className="relative w-full max-w-md mx-auto border-4 border-cyan-400 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-500 animate-float">
            <img
              src={logo}
              alt="TASA Techno Team"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Text */}
        <div className="space-y-6 text-gray-200" data-aos="fade-left">
          <p className="text-lg leading-relaxed">
            Welcome to <span className="text-cyan-400 font-bold">TASA TECHNO</span> — the slightly rebellious tech team based in the heart of Ahmedabad, India.
            We’re not your average IT firm. We're the kind who believe tech should be powerful, secure, and (dare we say) fun.
          </p>

          <p className="text-md leading-relaxed">
            Since our official government registration in January 2025, we’ve made it our mission to help businesses become digitally unstoppable. Whether you're a small startup with big dreams or a corporate giant tired of legacy systems, we bring creative solutions, bold strategies, and futuristic tech.
          </p>

          <p className="text-md leading-relaxed">
            Our developers write clean code like it’s poetry. Our security team sleeps with one eye open—just in case. Our support crew? They’ve mastered the art of troubleshooting with a smile (and a coffee).
          </p>

          <p className="text-md leading-relaxed">
            We know tech can be overwhelming. That’s why we don’t just deliver services — we explain things in human, not just binary. With us, you’ll understand your infrastructure better than your lunch order.
          </p>

          <p className="text-md leading-relaxed">
            At TASA, we don’t follow trends. We build them. From cybersecurity audits to cloud migrations, bug resolution to full-stack development — we deliver solutions that actually solve. Period.
          </p>

          <p className="text-sm italic text-gray-400">
            “We debug, decode, and deliver — with a little humor and a lot of heart.”
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
