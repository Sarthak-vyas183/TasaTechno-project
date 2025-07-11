import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import defaultImage from '../assets/logo4.jpg';

import Img1 from '../assets/logo4.jpg';
import Img2 from '../assets/logo4.jpg';
import img3 from '../assets/logo4.jpg';

const services = [
  {
    title: "Web Development",
    desc: "We create fast, secure, and beautifully designed websites tailored for your brand...",
    image: Img1,
  },
  {
    title: "Digital Forensics",
    desc: "We investigate, analyze, and recover digital evidence with precision...",
    image: Img2,
  },
  {
    title: "Cybersecurity Solutions",
    desc: "From firewalls to advanced threat detection, we build multi-layered defense systems...",
    image: Img3,
  },
  {
    title: "Cloud & Hosting",
    desc: "Experience seamless cloud deployment with rock-solid hosting...",
    image: null,
  },
  {
    title: "IT Training",
    desc: "We equip teams and individuals with industry-relevant skills...",
    image: null,
  },
  {
    title: "Technical Support",
    desc: "24/7 support with a human touch...",
    image: null,
  },
  {
    title: "Bug Resolution",
    desc: "Facing unexpected errors or weird behavior in your systems?",
    image: null,
  },
  {
    title: "VAPT Services",
    desc: "Our Vulnerability Assessment and Penetration Testing services identify loopholes...",
    image: null,
  },
  {
    title: "AI & Machine Learning",
    desc: "Harness the power of AI to transform your business...",
    image: null,
  },
  {
    title: "Graphics Designing",
    desc: "We create visually stunning graphics that capture your brand's essence...",
    image: null,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="bg-transparent text-white py-24 px-6 md:px-20 font-orbitron"
    >
      <h2
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-400 animate-pulse"
        data-aos="zoom-in"
      >
        Our Services
      </h2>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`grid grid-cols-1 md:grid-cols-2 items-center gap-12 ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Image */}
            <div data-aos="fade-right" className="flex justify-center">
              <div className="w-48 h-48 rounded-full border-4 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.5)] overflow-hidden animate-float hover:scale-105 transition-transform duration-500">
                <img
                  src={service.image || defaultImage}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text */}
            <div data-aos="fade-left" className="text-gray-200 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">
                {service.title}
              </h3>
              <p className="text-md leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
