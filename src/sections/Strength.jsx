import React from "react";
import { FaCogs, FaShieldAlt, FaRocket, FaUsersCog, FaChartLine } from "react-icons/fa";

const strengths = [
  {
    title: "Deep SAP Expertise",
    text: "Certified SAP professionals delivering industry-focused, best-practice solutions.",
    icon: <FaCogs />,
  },
  {
    title: "Enterprise-Grade Security",
    text: "Robust, compliant, and secure SAP implementations you can trust.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Scalable & Future-Ready",
    text: "SAP architectures designed to evolve with your business growth.",
    icon: <FaRocket />,
  },
  {
    title: "Client-First Approach",
    text: "Tailored SAP strategies aligned precisely with your business goals.",
    icon: <FaUsersCog />,
  },
  {
    title: "Performance-Driven",
    text: "Optimized processes that deliver measurable efficiency and ROI.",
    icon: <FaChartLine />,
  },
];

export default function Strength() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm uppercase tracking-widest text-orange-400 mb-3">
            Our Core Strengths
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            What Makes Us a <br />
            <span className="text-orange-500">Trusted SAP Partner</span>
          </h2>
          <p className="mt-4 text-gray-300 text-base md:text-lg">
            We combine deep SAP expertise, industry knowledge, and innovative solutions to help organizations scale securely and efficiently.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {strengths.map((item, idx) => (
            <div
              key={idx}
              className="
                relative rounded-2xl bg-gray-800 border border-gray-700
                shadow-lg hover:shadow-2xl transform transition duration-500 ease-in-out
                hover:-translate-y-2 group overflow-hidden
              "
            >
              {/* ICON */}
              <div className="
                w-16 h-16 mx-auto mt-6 mb-4 flex items-center justify-center rounded-full
                bg-gray-700 text-orange-400 text-2xl shadow-md
                relative z-10
                transition-all duration-500 ease-in-out
                group-hover:bg-black group-hover:text-white group-hover:scale-110
              ">
                {item.icon}
                {/* subtle glowing overlay */}
                <div className="absolute inset-0 rounded-full bg-black/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-md" />
              </div>

              {/* TITLE */}
              <h3 className="
                text-lg font-semibold text-white text-center mb-2
                transition-colors duration-500
                group-hover:text-orange-400
              ">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="
                text-gray-300 text-sm text-center px-4 pb-6
                transition-colors duration-500
                group-hover:text-white
              ">
                {item.text}
              </p>
              {/* BOTTOM GRADIENT ACCENT */}
              <div className="
                h-1 w-16 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6 rounded-full
                transition-all duration-500
              " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
