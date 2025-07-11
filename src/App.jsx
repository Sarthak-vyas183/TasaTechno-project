import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import SmoothParticleBackground from './components/SmoothParticleBackground';
import Navbar from './components/Navbar'; 
import Home from './components/Home';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OurTeam from './components/OurTeam';
import ServicesPage from './components/ServicesPage';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <div className="relative min-h-screen">
        <SmoothParticleBackground />
        <Navbar />  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<AboutUs/>}/>

          <Route path='/team' element={<OurTeam/>}/>
          <Route path='/services' element={<ServicesPage/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
        </Router>
      );
    }
    
    export default App;
