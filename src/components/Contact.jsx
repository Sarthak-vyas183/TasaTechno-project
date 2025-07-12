import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://docs.google.com/forms/d/e/1FAIpQLSd-1f8BpR9TgCANexeJmrXLO8ABh_2KgeAweu4DnfYcj-ywAQ/formResponse', {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section
      id="contact"
      className="relative text-white py-24 px-4 md:px-20 font-orbitron bg-transparent"
    >
      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-400 animate-pulse"
        data-aos="zoom-in"
      >
        <span className="glow-text">Contact Us</span>
      </h2>

      {/* Form + Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
        
        {/* ✅ Contact Form */}
        <div className="lg:col-span-2 bg-white/5 backdrop-blur-md rounded-xl p-8 shadow-xl" data-aos="fade-right">
          {!submitted ? (
            <>
              <h3 className="text-2xl font-bold mb-8 text-white">Write to Us Anytime</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    name="entry.243037522"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-400 text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                  <input
                    type="email"
                    name="entry.2024256054"
                    placeholder="Enter E-Mail"
                    className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-400 text-white placeholder-gray-400 focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="text"
                  name="entry.646429997"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-400 text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                <textarea
                  rows="4"
                  name="entry.764041495"
                  placeholder="Write Message"
                  className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-400 text-white placeholder-gray-400 focus:outline-none"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </>
          ) : (
            <div className="text-center text-green-400 text-xl font-semibold">
              ✅ Thank you! Your response has been submitted.
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="bg-transparent rounded-xl p-8 shadow-2xl flex flex-col gap-6" data-aos="fade-left">
          <h4 className="text-xl font-bold mb-4 text-white">Don't Forget to Contact Us</h4>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="mt-1 text-cyan-300" />
            <div>
              <span className="block font-semibold text-cyan-200">Call Us</span>
              <span className="block text-white text-sm">+91 6352519413</span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaEnvelope className="mt-1 text-cyan-300" />
            <div>
              <span className="block font-semibold text-cyan-200">Send E-Mail</span>
              <span className="block text-white text-sm">info@tasatechno.com</span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="mt-1 text-cyan-300" />
            <div>
              <span className="block font-semibold text-cyan-200">Head Office</span>
              <span className="block text-white text-sm">
                B-303, Shantiniketan Business Center,<br />
                Gangotri Circle, Nikol, Ahmedabad - 380060
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="mt-1 text-cyan-300" />
            <div>
              <span className="block font-semibold text-cyan-200">Branch</span>
              <span className="block text-white text-sm">
                B-812, Pragati IT Park, Mota Varacha, Surat, Gujarat 394107
              </span>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="mt-1 text-cyan-300" />
            <div>
              <span className="block font-semibold text-cyan-200">Call Us</span>
              <span className="block text-white text-sm">
                +91 7359550788<br />
                +91 9662972424
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
