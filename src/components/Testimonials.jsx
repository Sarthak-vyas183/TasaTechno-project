import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import SwiperCore from "swiper";
import { Autoplay } from "swiper/modules"; // ✅ Fix for new Swiper

import logo4 from "../assets/logo4.jpg";

SwiperCore.use([Autoplay]);

const testimonials = [
  {
    name: "Aarav Mehta",
    feedback:
      "Tasa Techno transformed our outdated website into a sleek, high-performance platform. Loved their futuristic mindset!",
  },
  {
    name: "Priya Sharma",
    feedback:
      "The cybersecurity team at Tasa Techno identified vulnerabilities no one else could.",
  },
  {
    name: "Vikram Sinha",
    feedback:
      "From training our staff to fixing long-standing bugs, these guys handled everything with professionalism and a smile.",
  },
  {
    name: "Neha Patel",
    feedback:
      "Their technical support is lightning fast. Solved my issue at 2 AM. That’s real dedication!",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="testimonials"
      className="w-full py-24 px-6 md:px-16 font-orbitron text-white relative z-10"
    >
      <h2
        className="text-4xl md:text-5xl text-center font-bold text-cyan-400 mb-12"
        data-aos="fade-down"
      >
        WHAT OUR CLIENT SAY
      </h2>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl p-6 m-4 hover:shadow-[0_0_20px_#00fff7] transition-transform duration-500 hover:scale-105 text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-center mb-4">
                <img
                  src={logo4}
                  alt="Client"
                  className="w-16 h-16 rounded-full border-2 border-cyan-400 shadow"
                />
              </div>
              <p className="text-sm text-gray-300 mb-4 italic">“{t.feedback}”</p>
              <h4 className="text-cyan-300 font-semibold text-lg">– {t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
