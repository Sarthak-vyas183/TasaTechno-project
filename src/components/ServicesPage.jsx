import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo4.jpg';

// Rename ServicesPage array to 'services'
const services = [
  {
    title: "Web Development",
    desc: "We create fast, secure, and beautifully designed websites tailored for your brand. Whether you're launching a startup or upgrading your business site, we bring your vision to life through modern front-end and scalable back-end systems.",
  },
  {
    title: "Digital Forensics",
    desc: "We investigate, analyze, and recover digital evidence with precision. Whether it’s for legal, audit, or internal security purposes, our forensic experts track down threats and provide detailed reports for critical actions.",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "From firewalls to advanced threat detection, we build multi-layered defense systems to protect your data. Our team identifies vulnerabilities before attackers do — because prevention beats cure.",
  },
  {
    title: "Cloud & Hosting",
    desc: "Experience seamless cloud deployment with rock-solid hosting. We offer fast, secure, and scalable solutions for websites, apps, and databases — all optimized for uptime and performance.",
  },
  {
    title: "IT Training",
    desc: "We equip teams and individuals with industry-relevant skills — from basic IT literacy to advanced tech stack training. Learn from experts and gain hands-on experience for real-world success.",
  },
  {
    title: "Technical Support",
    desc: "24/7 support with a human touch. Our team helps resolve system errors, config issues, and user problems with patience, speed, and empathy — because your business can’t afford downtime.",
  },
  {
    title: "Bug Resolution",
    desc: "Facing unexpected errors or weird behavior in your systems? We dive deep into your codebase, diagnose bugs quickly, and apply clean fixes without breaking other parts of your app.",
  },
  {
    title: "VAPT Services",
    desc: "Our Vulnerability Assessment and Penetration Testing services identify loopholes before hackers do. We simulate real-world attacks to strengthen your infrastructure's defense from the inside out.",
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
                  src={logo}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Text */}
            <div data-aos="fade-left" className="text-gray-200 space-y-4">
              <h3 className="text-2xl md:text-3xl font-semibold text-cyan-400">{service.title}</h3>
              <p className="text-md leading-relaxed">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPage;
