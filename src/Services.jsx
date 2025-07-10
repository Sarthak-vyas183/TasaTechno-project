import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaCode,
  FaSearch,
  FaShieldAlt,
  FaCloud,
  FaChalkboardTeacher,
  FaHeadset,
  FaBug,
  FaLock,
} from "react-icons/fa";

const services = [
  {
    name: "Web Development",
    icon: <FaCode size={30} />,
    desc: "We build high-performance, modern, and scalable web applications.",
  },
  {
    name: "Digital Forensics",
    icon: <FaSearch size={30} />,
    desc: "Recover, analyze, and preserve digital evidence with precision.",
  },
  {
    name: "Cybersecurity Solution",
    icon: <FaShieldAlt size={30} />,
    desc: "Robust security measures to protect your digital assets.",
  },
  {
    name: "Cloud & Hosting",
    icon: <FaCloud size={30} />,
    desc: "Secure, fast, and scalable cloud hosting solutions.",
  },
  {
    name: "IT Training",
    icon: <FaChalkboardTeacher size={30} />,
    desc: "Expert-led training programs for modern IT skills.",
  },
  {
    name: "Technical Support",
    icon: <FaHeadset size={30} />,
    desc: "24/7 reliable support for all your tech problems.",
  },
  {
    name: "Bug Resolution",
    icon: <FaBug size={30} />,
    desc: "Identify and fix critical software bugs efficiently.",
  },
  {
    name: "VAPT Services",
    icon: <FaLock size={30} />,
    desc: "Penetration testing and vulnerability assessments.",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="w-full py-24 px-6 md:px-16 font-orbitron text-white relative z-10">
      <h2
        className="text-4xl md:text-5xl text-center font-bold text-cyan-400 mb-16"
        data-aos="fade-down"
      >
        WE PROVIDE
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-500 hover:shadow-[0_0_20px_#00fff7] shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="text-cyan-400 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
            <p className="text-sm text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
