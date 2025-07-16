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
    desc: "We create fast, secure, and beautifully designed websites tailored for your brand. Our team specializes in responsive design, ensuring your site looks great on any device. We use the latest technologies like React, Next.js, and Node.js to build scalable solutions. From e-commerce platforms to custom web apps, we handle everything from UI/UX design to backend integration and deployment. We also provide ongoing maintenance and SEO optimization to help your business grow online.",
    image: Img1,
  },
  {
    title: "Digital Forensics",
    desc: "We investigate, analyze, and recover digital evidence with precision. Our certified forensic experts use industry-standard tools to examine computers, mobile devices, and cloud data. We assist in legal cases, internal audits, and incident response by providing detailed forensic reports, chain-of-custody documentation, and expert testimony. Our services include malware analysis, data recovery, email tracing, and cybercrime investigation, ensuring your organization is protected and compliant.",
    image: Img2,
  },
  {
    title: "Cybersecurity Solutions",
    desc: "From firewalls to advanced threat detection, we build multi-layered defense systems to protect your data. Our cybersecurity team conducts vulnerability assessments, penetration testing, and security audits to identify and mitigate risks. We implement endpoint protection, intrusion detection systems, and security awareness training for your staff. Our managed security services provide 24/7 monitoring, incident response, and compliance support to keep your business safe from evolving cyber threats.",
    image: img3,
  },
  {
    title: "Cloud & Hosting",
    desc: "Experience seamless cloud deployment with rock-solid hosting. We offer cloud migration, infrastructure setup, and managed hosting for websites, applications, and databases. Our solutions leverage AWS, Azure, and Google Cloud for scalability, security, and high availability. We handle backups, disaster recovery, and performance optimization, so you can focus on your business while we ensure your digital assets are always online and secure.",
    image: img4,
  },
  {
    title: "IT Training",
    desc: "We equip teams and individuals with industry-relevant skills — from basic IT literacy to advanced tech stack training. Our courses cover programming, cybersecurity, cloud computing, and digital forensics. We offer hands-on workshops, certification preparation, and customized corporate training programs. Learn from experienced instructors and gain practical knowledge to excel in the fast-paced tech industry.",
    image: img5,
  },
  {
    title: "Technical Support",
    desc: "24/7 support with a human touch. Our team helps resolve system errors, configuration issues, and user problems with patience, speed, and empathy. We provide remote and onsite support, troubleshooting hardware and software issues, network setup, and user training. Our proactive monitoring and maintenance services minimize downtime and keep your IT infrastructure running smoothly.",
    image: img6,
  },
  {
    title: "Bug Resolution",
    desc: "Facing unexpected errors or weird behavior in your systems? We dive deep into your codebase, diagnose bugs quickly, and apply clean fixes without breaking other parts of your app. Our debugging process includes code review, automated testing, and regression analysis to ensure long-term stability. We also provide documentation and recommendations to prevent similar issues in the future.",
    image: img7,
  },
  {
    title: "VAPT Services",
    desc: "Our Vulnerability Assessment and Penetration Testing (VAPT) services identify loopholes before hackers do. We simulate real-world attacks to evaluate your network, applications, and infrastructure. Our detailed reports highlight vulnerabilities, risk levels, and actionable remediation steps. We help you achieve compliance with industry standards like ISO 27001, PCI DSS, and GDPR, strengthening your security posture.",
    image: img8,
  },
  {
    title: "AI & Machine Learning",
    desc: "Harness the power of AI to transform your business. We develop custom machine learning models for data analysis, automation, and predictive insights. Our services include natural language processing, computer vision, recommendation systems, and chatbot development. We guide you from data collection and model training to deployment and ongoing optimization, enabling smarter decision-making and innovation.",
    image: img9,
  },
  {
    title: "Graphics Designing",
    desc: "We create visually stunning graphics that capture your brand's essence. Our design team specializes in logo creation, branding, social media graphics, UI/UX design, and marketing materials. We combine creativity with the latest design tools to deliver eye-catching visuals that engage your audience and elevate your business identity.",
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
