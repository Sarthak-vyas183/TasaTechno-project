import React, { useState } from 'react';
import member1 from '../assets/logo1.jpg';
import member2 from '../assets/logo1.jpg';
import member3 from '../assets/logo1.jpg';
import member4 from '../assets/logo1.jpg';
import member5 from '../assets/logo1.jpg';
import member6 from '../assets/logo1.jpg';
import member7 from '../assets/logo1.jpg';

const OurTeam = () => {
  const [selectedMember, setSelectedMember] = useState(null);

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
    <section className="bg-gradient-to-b from-[#0f172a] via-[#101828] to-[#0f172a] text-white py-24 px-6 md:px-20 font-orbitron relative">
      <h2 className="mb-16 text-4xl font-bold text-center text-transparent md:text-6xl bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 animate-pulse">
        <span className="glow-text">Our Creative Minds</span>
      </h2>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {teamData.map((member, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden transition-transform duration-700 bg-gray-900 bg-opacity-60 shadow-xl backdrop-blur-md cursor-pointer rounded-3xl hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] group"
            onMouseEnter={() => setSelectedMember(member)}
            onMouseLeave={() => setSelectedMember(null)}
          >
            <div className="flex items-center justify-center p-6">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-40 h-40 transition-all duration-700 ease-in-out rounded-full shadow-md group-hover:rounded-2xl group-hover:scale-110"
              />
            </div>

            <div className="px-4 pb-6 text-center">
              <h3 className="text-xl font-bold text-cyan-400">{member.name}</h3>
              <p className="text-sm text-gray-300">{member.profession}</p>
            </div>

            {/* Hover Popup */}
            {selectedMember?.name === member.name && (
              <div className="absolute top-0 left-0 z-10 flex flex-col items-center justify-center w-full h-full p-6 text-sm text-white transition-all duration-500 bg-black bg-opacity-50 backdrop-blur-sm rounded-3xl">
                <h4 className="mb-2 text-lg font-semibold text-cyan-400">{member.name}</h4>
                <p className="mb-1 text-sm italic text-gray-400">{member.profession}</p>
                <p className="text-xs leading-relaxed text-center text-gray-300">
                  {member.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
