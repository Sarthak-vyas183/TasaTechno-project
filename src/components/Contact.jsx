import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from '../assets/logo.png'; // rectangular image

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="relative text-white py-24 px-6 md:px-20 font-orbitron bg-transparent"
    >
      {/* Heading */}
      <h2
        className="text-4xl md:text-6xl font-bold text-center mb-16 text-cyan-400 animate-pulse"
        data-aos="zoom-in"
      >
        <span className="glow-text">Contact Us</span>
      </h2>

      {/* Contact Info + Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="space-y-6" data-aos="fade-right">
          <div>
            <h3 className="text-xl text-cyan-400 mb-2">📧 Email</h3>
            <p className="text-gray-300">contact@tasatechno.com</p>
          </div>
          <div>
            <h3 className="text-xl text-cyan-400 mb-2">📞 Phone</h3>
            <p className="text-gray-300">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl text-cyan-400 mb-2">💬 WhatsApp</h3>
            <p className="text-gray-300">+91 98765 43210</p>
          </div>

          {/* Rectangular Image Below WhatsApp - visible only on large screens */}
          <div className="hidden lg:block mt-10 max-w-[420px]">
            <img
              src={logo}
              alt="Decorative Graphic"
              className="w-full h-[180px] object-contain rounded-xl shadow-lg"
              data-aos="zoom-in"
            />
          </div>
        </div>

        {/* Form */}
        <form
          data-aos="fade-left"
          action="https://docs.google.com/forms/d/e/1FAIpQLSeNjIv4bLUxxxxxxxFORM_URL/formResponse"
          method="POST"
          target="_blank"
          className="bg-black bg-opacity-40 p-8 rounded-xl shadow-2xl space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-cyan-400 mb-2">Your Name</label>
            <input
              type="text"
              name="entry.1234567890" // <-- Replace with actual Google Form field ID
              id="name"
              required
              className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-500 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-cyan-400 mb-2">Your Email</label>
            <input
              type="email"
              name="entry.0987654321" // <-- Replace with actual Google Form field ID
              id="email"
              required
              className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-500 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-cyan-400 mb-2">Your Message</label>
            <textarea
              name="entry.1122334455" // <-- Replace with actual Google Form field ID
              id="message"
              rows="4"
              required
              className="w-full px-4 py-2 rounded bg-[#1a1a2e] border border-cyan-500 text-white placeholder-gray-400 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Google Map */}
      <div className="mt-20" data-aos="fade-up">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.073948168731!2d72.50119671510534!3d23.08603268492612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84fb9c381a89%3A0xaaa13cbd4c7b7117!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1614766400000!5m2!1sen!2sin"
          width="100%"
          height="300"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border-4 border-cyan-400 shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
