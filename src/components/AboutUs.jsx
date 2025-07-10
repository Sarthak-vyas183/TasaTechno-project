import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HelloWorld = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      className="w-full h-screen flex items-center justify-center px-6 md:px-16 font-orbitron text-white relative z-10"
    >
      <h1
        className="text-4xl md:text-6xl font-bold text-cyan-400"
        data-aos="zoom-in"
      >
        Hello World
      </h1>
    </section>
  );
};

export default HelloWorld;
