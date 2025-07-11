import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import member1 from '../assets/arpit.jpg';
import member2 from '../assets/hitanshi.jpg';
import member3 from '../assets/arpit b.jpg';
import member4 from '../assets/yash.jpg';
import member5 from '../assets/sarthak.jpg';
import member6 from '../assets/yogi.jpg';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const teamData = [
    {
      name: 'Arpit Panchal',
      profession: 'Founder & CEO',
      image: member1,
      description: 'Expert in Cybersecurity, specializing in digital forensics and vulnerability assessments.',
    },
    {
      name: 'Hitanshi Mistry',
      profession: 'Co-Founder',
      image: member2,
      description: 'HR management Head',
    },
    {
      name: 'Anand Panchal',
      profession: 'Chief Information Officer',
      image: member3,
      description: 'Expert in CyberSecurity Head Opreations.',
    },
    {
      name: 'Yash Sharama',
      profession: 'Java Springboot Developer',
      image: member4,
      description: 'Specializes in backend systems using JAVA Springboot',
    },
    {
      name: 'Sarthak Vyas',
      profession: 'Full Stack Developer',
      image: member5,
      description: 'Specializes in Web Development With Trendy Code Structure',
    },
    {
      name: 'Yogender Mishra',
      profession: 'DevOps/Cloud Engineer',
      image: member6,
      description: 'Specializes in cloud infrastructure and CI/CD pipelines.',
    },
  ];

  return (
    <section className="relative px-6 py-24 overflow-hidden text-white bg-transparent md:px-20 font-orbitron">
      <h2 className="mb-16 text-4xl font-bold text-center md:text-6xl text-cyan-400 animate-pulse">
        <span className="glow-text">Our Creative Minds</span>
      </h2>

      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="relative rounded-3xl p-6 border border-cyan-400 bg-white/5 backdrop-blur-sm hover:shadow-[0_0_25px_rgba(34,211,238,0.4)] transition-all duration-500 hover:scale-105 cursor-pointer"
            onMouseEnter={() => setSelectedMember(member)}
            onMouseLeave={() => setSelectedMember(null)}
            data-aos="fade-up"
          >
            <div className="flex justify-center mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 object-cover object-center transition-transform duration-500 border-4 rounded-full shadow-lg border-cyan-400 hover:scale-110"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold text-cyan-400">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.profession}</p>
            </div>

            {/* Hover Description Overlay */}
            {selectedMember?.name === member.name && member.description && (
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
