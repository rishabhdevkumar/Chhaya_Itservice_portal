import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

/* ---------- IMPORT INDUSTRY IMAGES ---------- */
import PharmaImg from "../assets/images/pharma.webp";
import TextileImg from "../assets/images/textile.webp";
import AutomotiveImg from "../assets/images/Automotive.webp";
import RetailImg from "../assets/images/Retail.webp"; 
import HealthcareImg from "../assets/images/Healthcare.webp";
import FinanceImg from "../assets/images/Finance.webp";
import TelecomImg from "../assets/images/Telecommunications.webp";
import EnergyImg from "../assets/images/Energy.webp";
import LogisticsImg from "../assets/images/logistics.webp";
import ConsumerImg from "../assets/images/public.webp";

/* ---------- INDUSTRIES DATA ---------- */
const industries = [
  { name: "Pharmaceuticals", description: "Compliance-driven production excellence.", image: PharmaImg },
  { name: "Textile", description: "Digitizing textile manufacturing and supply chains.", image: TextileImg },
  { name: "Automotive", description: "Optimizing manufacturing and supply chains.", image: AutomotiveImg },
  { name: "Retail", description: "Enhancing customer experience and inventory control.", image: RetailImg },
  { name: "Healthcare", description: "Improving patient care and operational efficiency.", image: HealthcareImg },
  { name: "Finance", description: "Ensuring compliance and risk management.", image: FinanceImg },
  { name: "Telecommunications", description: "Managing networks and customer operations.", image: TelecomImg },
  { name: "Energy & Utilities", description: "Optimizing asset performance and sustainability.", image: EnergyImg },
  { name: "Logistics", description: "End-to-end supply chain visibility.", image: LogisticsImg },
  { name: "Consumer Products", description: "Demand planning and innovation acceleration.", image: ConsumerImg },
];

/* Duplicate list for infinite loop */
const loopIndustries = [...industries, ...industries];

export default function IndustriesSection() {
  const scrollRef = useRef(null);
  const CARD_WIDTH = 360; // Professional card width
  const INTERVAL = 3000;

  /* ---------- AUTO SCROLL ---------- */
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      container.scrollTo({ left: index * CARD_WIDTH, behavior: "smooth" });

      if (index >= industries.length) {
        setTimeout(() => {
          container.style.scrollBehavior = "auto";
          index = 0;
          container.scrollLeft = 0;
          container.style.scrollBehavior = "smooth";
        }, 400);
      }
    }, INTERVAL);

    return () => clearInterval(interval);
  }, []);

  /* ---------- ARROW CONTROLS ---------- */
  const scrollLeft = () => scrollRef.current.scrollBy({ left: -CARD_WIDTH, behavior: "smooth" });
  const scrollRight = () => scrollRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });

  return (
    <section className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">

        {/* HEADING */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="md:w-1/2">
            <p className="text-sm uppercase tracking-wider text-orange-500 border-l-4 border-orange-500 pl-2 mb-2">
              Industries Area
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading  ">
              Transforming Industries <br />Through Intelligent <br /><span className="text-orange-400 font-bold font-heading">SAP ERP Excellence</span>
            </h2>
          </div>
          <div className="md:w-1/2 text-gray-600 mt-4 md:mt-0 font-body">
            <p>
              Serving multiple industries with deep SAP expertise, we help organizations unlock their full potential. <br />
              Our <span className="text-red-900 font-bold">SAP solutions </span> are secure, scalable, and aligned with evolving business needs. <br />
              Built to accelerate performance, resilience, and digital transformation.
            </p>
          </div>
        </div>

        {/* DESKTOP ARROWS */}
        <button
          onClick={scrollLeft}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10
                     p-3 bg-white shadow-lg rounded-full hover:bg-orange-500 hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={scrollRight}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10
                     p-3 bg-white shadow-lg rounded-full hover:bg-orange-500 hover:text-white transition"
        >
          <FaChevronRight />
        </button>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto touch-pan-x scroll-smooth scrollbar-none"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // IE 10+
          }}
        >
          {loopIndustries.map((industry, idx) => (
            <motion.div
              key={idx}
              className="flex-shrink-0"
              style={{ width: CARD_WIDTH }}
              whileHover={{ y: -8 }}
            >
              {/* CARD */}
              <div className="relative h-[480px] rounded-xl overflow-hidden shadow-2xl bg-white group ">

                {/* IMAGE */}
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* NAME OVERLAY */}
                <div className="absolute bottom-0 left-0 w-full px-4 py-3 bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-white text-lg font-semibold">{industry.name}</h3>
                </div>

                {/* HOVER DESCRIPTION */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-6 text-center">
                  <p className="text-white text-sm md:text-base">{industry.description}</p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
