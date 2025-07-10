import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import HeroSection from './components/HeroSection';
import SmoothParticleBackground from './components/SmoothParticleBackground';
import Navbar from './components/Navbar'; 
import Services from './Services';
import Counter from './components/Counter';
import About from './components/About';
import Testimonials from './components/Testimonials'; 
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="relative min-h-screen">
      <SmoothParticleBackground />
      <Navbar />  
      <HeroSection />
      <Services />
      <Counter />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
