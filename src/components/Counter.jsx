import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const stats = [
  { label: "Projects Completed", value: 120 },
  { label: "Happy Clients", value: 80 },
  { label: "Security Audits", value: 45 },
  { label: "Team Members", value: 6 },
];

const Counter = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setCounts((prev) =>
          prev.map((val, i) =>
            val < stats[i].value ? val + Math.ceil(stats[i].value / 50) : stats[i].value
          )
        );
      }, 50);
      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <section
      className="w-full py-24 px-6 md:px-16 font-orbitron text-white relative z-10"
      id="counter-section"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-once="true"
      onMouseEnter={() => setVisible(true)}
    >
      <h2 className="text-4xl md:text-5xl text-center font-bold text-cyan-400 mb-16 animate-fade-down">
        OUR ACHIEVEMENTS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-md border border-cyan-400/20 rounded-xl p-8 hover:shadow-[0_0_20px_#00fff7] shadow-md transition-transform duration-500 hover:scale-105"
          >
            <div className="text-5xl text-cyan-300 font-bold mb-3">
              {counts[index]}+
            </div>
            <div className="text-md text-gray-300">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
