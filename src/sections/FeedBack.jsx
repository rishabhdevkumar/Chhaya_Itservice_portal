import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

import user1 from "../assets/images/user1.webp";
import user2 from "../assets/images/user2.webp";
import user3 from "../assets/images/user3.webp";
import user4 from "../assets/images/user4.webp";
import user5 from "../assets/images/user5.webp";
import user6 from "../assets/images/Sanjay.jpeg";
import feedbackBg from "../assets/images/feedbackBg.webp";

const feedbacks = [
  {
    id: 1,
    name: "Rahul Mehta",
    location: "Mumbai, India",
    image: user1,
    feedback:
      "The SAP solutions delivered by the team exceeded our expectations in every aspect. Their consultants demonstrated a deep understanding of our business processes and challenges. The project execution was well-structured, transparent, and aligned with our enterprise goals. Communication throughout the engagement was clear and proactive. Timelines were strictly adhered to without compromising quality. The implementation significantly improved operational efficiency and reporting accuracy. We truly value their professionalism and long-term support commitment.",
  },
  {
    id: 2,
    name: "Anita Sharma",
    location: "Delhi, India",
    image: user2,
    feedback:
      "Working with this SAP consulting team was a seamless and highly professional experience. They carefully analyzed our requirements and proposed scalable solutions aligned with future growth. The consultants were knowledgeable, responsive, and solution-oriented. Project milestones were clearly defined and consistently met. Their collaborative approach made the transition smooth for our internal teams. Post-implementation support was prompt and reliable. We confidently recommend their services to enterprise clients.",
  },
  {
    id: 3,
    name: "David Wilson",
    location: "London, UK",
    image: user3,
    feedback:
      "The team showcased exceptional expertise in SAP implementation and enterprise transformation. From initial planning to final deployment, every phase was executed with precision. Their structured methodology ensured minimal disruption to ongoing operations. The consultants provided valuable insights that enhanced our reporting and decision-making capabilities. Communication remained transparent throughout the project lifecycle. The solution delivered measurable performance improvements. Their professionalism and commitment to quality truly stand out.",
  },
  {
    id: 4,
    name: "Neha Kapoor",
    location: "Bengaluru, India",
    image: user4,
    feedback:
      "This team proved to be a highly reliable SAP consulting partner. They demonstrated strong technical knowledge and a clear understanding of complex business processes. The project was managed efficiently with consistent progress tracking. Their consultants were proactive in identifying potential risks and resolving issues early. The implementation was delivered on schedule with high quality standards. Ongoing support has been prompt and dependable. We appreciate their attention to detail and customer-focused approach.",
  },
  {
    id: 5,
    name: "Michael Brown",
    location: "New York, USA",
    image: user5,
    feedback:
      "The quality of service and SAP expertise provided was exceptional. The team took the time to understand our operational challenges and tailored solutions accordingly. Their structured execution approach ensured clarity and alignment at every stage. Communication was transparent and timely throughout the engagement. The solution helped optimize workflows and improve overall productivity. Deliverables were completed within agreed timelines. We value their professionalism, accountability, and technical excellence.",
  },
  {
    id: 6,
    name: "Sanjay Panthangi",
    location: "India",
    profession: "IT Head, KR Papers",
    image: user6,
    feedback: "Working with chhaya it services was seamless and highly professional experience.They carefully analyzed our requirements and proposed scalable solutions. The solution helped optimize workflow and improve overall productivity.",
    },
  ];

export default function Feedback() {
  const [active, setActive] = useState(feedbacks[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => {
        const nextIndex = (feedbacks.findIndex((f) => f.id === prev.id) + 1) % feedbacks.length;
        return feedbacks[nextIndex];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 min-h-[600px] lg:min-h-[700px] shadow-[0_-20px_40px_rgba(0,0,0,0.04)]">
      <img
        src={feedbackBg}
        alt="Feedback Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 "></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

        {/* LEFT FEEDBACK */}
        <div className="min-h-[400px] flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-900">
            Our Feedback
          </p>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Trusted by Clients <br /> Across the Globe
          </h2>
          <div className="mt-10 bg-gray-50 bg-opacity-90 p-8 rounded-2xl border border-gray-100 shadow-sm min-h-[350px]">
            <FaQuoteLeft className="text-orange-400 text-3xl mb-4" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-orange-400" />
              ))}
            </div>
            <div className="relative min-h-[220px] md:min-h-[260px] overflow-hidden">

              <AnimatePresence mode="wait">
                <motion.p
                  key={active.id}
                  className="absolute inset-0 text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                >
                  {active.feedback}
                </motion.p>
              </AnimatePresence>

            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-900">{active.name}</p>
              <p className="text-sm text-gray-500 flex items-center gap-1">
                <FaMapMarkerAlt className="text-orange-400" />
                {active.location}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE GROUP */}
        <div className="relative flex items-center justify-center lg:justify-end">

          <div className="relative w-[360px] h-[360px] md:w-[400px] md:h-[400px] flex items-center justify-center">

            {/* MAIN IMAGE */}
            <div className="relative z-10 w-72 h-72 md:w-80 md:h-80 rounded-full">
              <AnimatePresence mode="wait">
                <motion.img
                  key={active.id}
                  src={active.image}
                  alt={active.name}
                  className="w-full h-full rounded-full object-cover"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                />
              </AnimatePresence>
            </div>

            {/* SMALL IMAGES ORBIT */}
            {feedbacks.map((item, index) => {
              const angle = (360 / feedbacks.length) * index;
              const radius = 160;
              return (
                <button
                  key={item.id}
                  onClick={() => setActive(item)}
                  style={{
                    transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                  }}
                  className={`absolute z-20 w-14 h-14 rounded-full transition-all duration-300 ${active.id === item.id
                    ? "scale-110 shadow-[0_0_20px_rgba(249,115,22,0.55)]"
                    : "opacity-85 hover:opacity-100"
                    }`}
                >
                  <div
                    className={`w-full h-full rounded-full ${active.id === item.id ? "bg-orange-500 p-[3px]" : "bg-white p-[2px] shadow-md"
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full rounded-full object-contain bg-white"
                    />
                  </div>
                </button>
              );
            })}

            {/* BOTTOM ANIMATED PROFESSIONAL CONTENT */}
            <div className="
              absolute bottom-[-190px] left-1/2 -translate-x-1/2 
              hidden lg:flex
              flex-col md:flex-row items-center gap-6 z-10
            ">
              {[
                { icon: "⭐", text: "100% Client Satisfaction" },
                { icon: "💼", text: "Professional SAP Services" },
                { icon: "📈", text: "Optimized Operations" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center bg-white/90 p-4 rounded-2xl shadow-lg w-36"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i, duration: 0.6 }}
                >
                  <div className="text-orange-500 text-3xl mb-2">{item.icon}</div>
                  <p className="text-gray-700 font-semibold text-center text-sm">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
