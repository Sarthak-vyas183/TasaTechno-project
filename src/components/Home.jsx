import React from 'react'
import HeroSection from './HeroSection'
import Services from '../Services'
import Counter from './Counter'
import About from './About'
import Testimonials from './Testimonials'

function Home() {
  return (
    <div>
      <HeroSection />
      <Services/>
      <Counter />
      <About />
      <Testimonials />
    </div>
  )
}

export default Home
