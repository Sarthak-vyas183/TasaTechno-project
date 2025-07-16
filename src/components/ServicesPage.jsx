import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import defaultImage from '../assets/logo4.jpg';

import Img1 from '../assets/web.jpg';
import Img2 from '../assets/digital forensic.png';
import img3 from '../assets/cyber.png';
import img4 from '../assets/cloud.png'
import img5 from '../assets/IT training.png'
import img6 from '../assets/technical support.jpg'
import img7 from '../assets/bug resolution.png'
import img8 from '../assets/VAPT service.png'
import img10 from '../assets/gd.jpg'
import img9 from '../assets/AIML.png'


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
    image: img3,
  },
  {
    title: "Cloud & Hosting",
    desc: "Experience seamless cloud deployment with rock-solid hosting...",
    image: img4,
  },
  {
    title: "IT Training",
    desc: "We equip teams and individuals with industry-relevant skills...",
    image: img5,
  },
  {
    title: "Technical Support",
    desc: "24/7 support with a human touch...",
    image: img6,
  },
  {
    title: "Bug Resolution",
    desc: "Facing unexpected errors or weird behavior in your systems?",
    image: img7,
  },
  {
    title: "VAPT Services",
    desc: "Our Vulnerability Assessment and Penetration Testing services identify loopholes...",
    image: img8,
  },
  {
    title: "AI & Machine Learning",
    desc: "Harness the power of AI to transform your business...",
    image: img9,
  },
  {
    title: "Graphics Designing",
    desc: "We create visually stunning graphics that capture your brand's essence...",
    image: img10,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="services"
      className="px-4 py-24 text-white bg-transparent md:px-20 font-orbitron overflow-x-hidden"
    >
      <h2
        className="mb-16 text-4xl font-bold text-center md:text-6xl text-cyan-400 animate-pulse"
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
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
            </div>

            {/* Text */}
            <div data-aos="fade-left" className="space-y-4 text-gray-200">
              <h3 className="text-2xl font-semibold md:text-3xl text-cyan-400">
                {service.title}
              </h3>
              <p className="leading-relaxed text-md">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
