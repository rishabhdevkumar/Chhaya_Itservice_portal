import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaRocket, FaChartLine, FaDollarSign } from "react-icons/fa";

import Img1 from "../assets/images/hero1.webp";
import Img2 from "../assets/images/hero2.webp";
import Img3 from "../assets/images/hero3.webp";
import CardBg1 from "../assets/images/card.webp";

import Card from "../components/Card";

const slides = [
  {
    img: Img1,
    title: (
      <>
        Empowering Businesses with{" "}
        <span className="text-orange-500">SAP Solutions</span>
      </>
    ),
    desc:
      "Streamline your operations with our top-notch SAP implementation, consulting, and support services.",
    btnText: "Get a Demo",
    btnLink: "/contact",

  },
  {
    img: Img2,
    title: (
      <>
        Skilled IT <span className="text-green-400">Resource Deployment</span>
      </>
    ),
    desc: "Manpower solution for SAP and Web developers.",
    btnText: "Get a Demo",
    btnLink: "/contact",
  },
  {
    img: Img3,
    title: (
      <>
        Innovative Web & <br />
        <span className="text-yellow-500">ERP Solutions</span>
      </>
    ),
    desc: "Powerful web and ERP solutions to streamline operations and accelerate business growth.",
    btnText: "Get a Demo",
    btnLink: "/contact",
  }

];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleTouchStart = (e) =>
    (touchStartX.current = e.touches[0].clientX);

  const handleTouchMove = (e) =>
    (touchEndX.current = e.touches[0].clientX);

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) setCurrent((prev) => (prev + 1) % slides.length);
    if (distance < -50)
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const cards = [
    {
      icon: <FaRocket />,
      title: "On-time -Defectfree delivery",
      desc:
        "Minimize downtime with our expertise, ensuring and delivery within agreed timeline with no delay",
      bgImage: CardBg1,
    },
    {
      icon: <FaChartLine />,
      title: "Leveraging IT in Descision Making.",
      desc:
        "Gain a competitive edge with instant data analytics from SAP/Business Application, driving sales and profitability.",
      bgImage: CardBg1,
    },
    {
      icon: <FaDollarSign />,
      title: "Affordable and Scalable Solution Designing",
      desc:
        "Achieve a Sustainable IT enabled Landscape with an Affordable Investment and Scalable Solution",
      bgImage: CardBg1,
    },
  ];

  return (
    <>
      <section
        className="relative min-h-[85vh] sm:min-h-screen w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => {
          const isCurrent = index === current;
          const isLCP = index === 0;

          return (
            <motion.div
              key={index}
              initial={false}
              animate={{ opacity: isCurrent ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <img
                src={slide.img}
                alt=""
                className={`w-full h-full object-cover 
                  ${slide.contain
                    ? "object-contain bg-slate-50"
                    : "object-cover object-center"
                  }
                `}
                loading={isLCP ? "eager" : "lazy"}
              />

              <div className="absolute inset-0 bg-black/30 md:bg-black/20" />

              <div
                className="absolute inset-0 flex items-center"
              >
                <div className="px-6 md:px-24 lg:px-32 max-w-5xl">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={isCurrent ? { y: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-6 drop-shadow-lg">
                      {slide.title}
                    </h1>

                    {slide.desc && (
                      <p className="mt-4 text-lg sm:text-xl md:text-2xl text-white/95 max-w-2xl leading-relaxed drop-shadow-md">
                        {slide.desc}
                      </p>
                    )}

                    <div className="mt-10">
                      <Link
                        to={slide.btnLink}
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-2xl transition-all hover:scale-105 active:scale-95"
                      >
                        {slide.btnText}
                      </Link>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          );
        })}

        <button
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
          className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white/20 hover:bg-white/90 text-white hover:text-gray-900 rounded-full backdrop-blur-md transition-all z-20 group"
        >
          <span className="text-2xl group-hover:scale-110">❮</span>
        </button>

        <button
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
          className="hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 items-center justify-center bg-white/20 hover:bg-white/90 text-white hover:text-gray-900 rounded-full backdrop-blur-md transition-all z-20 group"
        >
          <span className="text-2xl group-hover:scale-110">❯</span>
        </button>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, i) => (
            <span
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all ${current === i ? "bg-white w-8" : "bg-white/40"
                }`}
            />
          ))}
        </div>
      </section>

      <section className="-mt-32 relative z-10 px-6 md:px-20 pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </section>
    </>
  );
}
