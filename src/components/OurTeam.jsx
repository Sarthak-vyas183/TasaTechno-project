import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import member1 from '../assets/logo2.png';
import member2 from '../assets/logo1.jpg';
import member3 from '../assets/logo1.jpg';
import member4 from '../assets/logo1.jpg';
import member5 from '../assets/logo1.jpg';
import member6 from '../assets/logo1.jpg';
import member7 from '../assets/logo1.jpg';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamData = [
    {
      name: 'Yash Sharma',
      profession: 'Full Stack Developer',
      image: member1,
      description: 'Expert in Java, Spring Boot, and MERN stack. Builds scalable web applications with secure APIs.',
    },
    {
      name: 'Aarav Patel',
      profession: 'UI/UX Designer',
      image: member2,
      description: 'Designs intuitive interfaces and user journeys with Figma and Tailwind CSS.',
    },
    {
      name: 'Meera Jain',
      profession: 'Project Manager',
      image: member3,
      description: 'Handles sprint planning, Jira workflows, and team coordination with agile principles.',
    },
    {
      name: 'Vinit Gurjar',
      profession: 'Go Developer',
      image: member4,
      description: 'Specializes in backend systems using GoLang and distributed microservices.',
    },
    {
      name: 'Sarthak Vyas',
      profession: 'DevOps Engineer',
      image: member5,
      description: 'Automates CI/CD pipelines with Docker, Kubernetes, and Jenkins.',
    },
    {
      name: 'Priya Singh',
      profession: 'QA Engineer',
      image: member6,
      description: 'Ensures product quality through automated and manual testing techniques.',
    },
    {
      name: 'Ankit Rawat',
      profession: 'Cybersecurity Analyst',
      image: member7,
      description: 'Secures systems from threats and performs security audits and penetration testing.',
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden text-white bg-transparent md:px-20 font-orbitron">
      <h2 className="mb-16 text-4xl font-bold text-center md:text-6xl text-cyan-400 animate-pulse">
        <span className="glow-text">Our Creative Minds</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className={`relative rounded-3xl p-6 border border-cyan-400 bg-white/5 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer ${
              idx === teamData.length - 1 ? 'md:col-span-3 md:w-1/3 md:mx-auto' : ''
            }`}
            onMouseEnter={() => setSelectedMember(member)}
            onMouseLeave={() => setSelectedMember(null)}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 transition-transform duration-500 border-4 rounded-full shadow-lg border-cyan-400 hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-400">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.profession}</p>
            </div>

            {/* Hover Description Overlay */}
            {selectedMember?.name === member.name && (
              <div className="absolute top-0 left-0 z-20 flex flex-col items-center justify-center w-full h-full px-6 text-white transition-all duration-300 bg-black bg-opacity-60 backdrop-blur-sm rounded-3xl">
                <h4 className="text-lg font-semibold text-cyan-400">{member.name}</h4>
                <p className="text-sm italic text-gray-400">{member.profession}</p>
                <p className="mt-2 text-xs text-center text-gray-300">{member.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
