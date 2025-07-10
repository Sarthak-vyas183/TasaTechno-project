import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="about"
      className="w-full py-24 px-6 md:px-16 font-orbitron text-white relative z-10"
    >
      <h2
        className="text-4xl md:text-5xl text-center font-bold text-cyan-400 mb-12"
        data-aos="fade-down"
      >
        WHO WE ARE
      </h2>

      <div className="max-w-5xl mx-auto text-center space-y-8 text-gray-300 text-[1rem] leading-7">
        <p data-aos="fade-up">
          <span className="text-cyan-300 font-bold">Welcome to Tasa Techno</span> — your futuristic tech partner based in Ahmedabad, India. 🚀
          We’re not just another IT company — we’re a registered entity under the Indian Government since <strong className="text-white">January 2025</strong>, committed to providing secure, reliable, and forward-thinking digital solutions.
        </p>

        <p data-aos="fade-up" data-aos-delay="100">
          Our mission is simple — <span className="text-cyan-400 font-semibold">make technology fun, secure, and human</span>. Whether you're a startup with wild ideas or an enterprise fighting cyber threats, we bridge the gap between complexity and clarity.
        </p>

        <p data-aos="fade-up" data-aos-delay="200">
          We started with one goal: <em>"Turn tech frustration into satisfaction."</em> Over time, our journey has evolved into becoming one of the most trusted IT solution providers in Gujarat — delivering everything from cutting-edge web development to advanced VAPT services.
        </p>

        <div
          className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 mt-10 shadow-md hover:shadow-[0_0_20px_#00fff7] transition-all duration-500"
          data-aos="zoom-in"
        >
          <h3 className="text-2xl text-cyan-300 font-semibold mb-2">Registered & Recognized</h3>
          <p className="text-sm text-gray-300">
            We are officially registered with the Government of India as a tech services company.
            Our certifications ensure that your data, software, and systems are handled with complete trust, ethics, and legal compliance.
          </p>
        </div>

        <p data-aos="fade-up" data-aos-delay="300" className="pt-6">
          So whether you’re planning to scale your digital infrastructure, train your team, or test your systems for vulnerabilities — <span className="text-cyan-400 font-bold">Tasa Techno</span> is your go-to partner.
        </p>

        <p data-aos="fade-up" data-aos-delay="400" className="text-cyan-400 font-semibold pt-6">
          Because at Tasa Techno — “We don’t just solve problems, we future-proof them.”
        </p>
      </div>
    </section>
  );
};

export default About;
