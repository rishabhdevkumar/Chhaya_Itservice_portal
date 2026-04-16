import React from "react";
import { Link } from "react-router-dom";

<<<<<<< HEAD
/* Client logos */
import Client1 from "../assets/images/client1.webp";
import Client2 from "../assets/images/client2.webp";
import Client3 from "../assets/images/client3.webp";
import Client4 from "../assets/images/clientnew.png";
=======
import Client1 from "../assets/images/client1.webp";
import Client2 from "../assets/images/client2.webp";
import Client3 from "../assets/images/client3.webp";
import client4 from "../assets/images/welspun.jpg";
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf

const clients = [
  Client1,
  Client2,
  Client3,
<<<<<<< HEAD
  Client4,
=======
  client4,
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
];

export default function ClientSection() {
  return (
<<<<<<< HEAD
    <section className="bg-white overflow-hidden pt-16">

      {/* ================= HEADING ================= */}
      <div className="max-w-4xl mx-auto text-center px-4 mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0B1220]">
          Empowering Businesses With{" "}
          <span className="text-blue-600">Chhaya IT Services</span>
        </h2>

        <p className="mt-6 text-slate-500 text-base leading-relaxed max-w-3xl mx-auto">
          Chhaya IT Services is trusted by enterprises and organizations across
          industries for delivering reliable, scalable, and high-performance{" "}
          <span className="text-blue-600 font-semibold">
            SAP and ERP solutions
          </span>.
          We help businesses streamline operations, optimize processes, and
          achieve digital excellence with cutting-edge technology.
        </p>
      </div>

      {/* ================= LOGO SCROLLER ================= */}
      <div className="relative overflow-hidden mb-20">
        <div className="mx-auto max-w-6xl overflow-hidden">

          <div className="flex items-center gap-10 animate-clientScroll">

            {[...clients, ...clients].map((logo, index) => (
              <div
  key={index}
  className="
    min-w-[160px] sm:min-w-[180px] md:min-w-[200px]
    h-[100px] sm:h-[120px] md:h-[130px]
    flex items-center justify-center
    bg-white
    border border-slate-200
    rounded-2xl
    shadow-sm hover:shadow-md
    transition-all duration-300
    p-4
  "
>
  <img
  src={logo}
  alt="Client Logo"
  loading="lazy"
  className={`
    max-h-full
    max-w-full
    object-contain
    opacity-90 hover:opacity-100
    transition duration-300
    ${logo === Client4 ? "scale-125 sm:scale-150" : ""}
  `}
/>

</div>

            ))}

=======
    <section className=" overflow-hidden pt-10">

      <div className="max-w-4xl mx-auto text-center px-4 mb-10 ">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
          Empowering Businesses With{" "}
          <span className="text-orange-400">Chhaya IT Services</span>
        </h2>
        <p className="mt-6 text-slate-400 text-base leading-relaxed max-w-3xl mx-auto">
          Chhaya IT Services is trusted by enterprises and organizations across
          industries for delivering reliable, scalable, and high-performance{" "}
          <span className="text-orange-400 font-semibold">
            SAP and ERP solutions
          </span>.
          We help businesses streamline operations, optimize processes, and
          achieve digital excellence with cutting-edge technology and expert
          guidance.
        </p>
      </div>

      {/* Auto scrolling logos */}
      <div className="relative overflow-hidden mb-20">
        <div className="mx-auto max-w-6xl overflow-hidden">
          <div className="flex items-center gap-20 animate-clientScroll">
            {[...clients, ...clients].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[180px]"
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  loading="lazy"
                  decoding="async"
                  className="h-20 sm:h-24 md:h-28 object-contain opacity-90"
                />
              </div>
            ))}
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* ================= CTA ================= */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Content */}
          <div className="max-w-3xl">
            <h3 className="text-xl md:text-3xl font-bold text-white">
              Ready to Transform Your Business?
            </h3>

            <p className="mt-3 text-white/80 text-sm md:text-base leading-relaxed">
              Partner with{" "}
              <span className="font-semibold text-white">
                Chhaya IT Services
              </span>{" "}
              to deliver scalable, secure, and high-performance{" "}
              <span className="font-medium text-white">
=======
      <div className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 border-t border-amber-300/40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-8">

          {/* Content */}
          <div className="max-w-3xl">
            <h3 className="text-xl md:text-3xl font-bold text-slate-900">
              Ready to Transform Your Business?
            </h3>

            <p className="mt-3 text-slate-800/90 text-sm md:text-base leading-relaxed">
              Partner with{" "}
              <span className="font-semibold text-slate-900">
                Chhaya IT Services
              </span>{" "}
              to deliver scalable, secure, and high-performance{" "}
              <span className="font-medium text-slate-900">
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
                SAP & ERP solutions
              </span>{" "}
              that drive long-term business growth.
            </p>
          </div>

          {/* Button */}
          <div className="flex">
            <Link
              to="/contact"
              className="
<<<<<<< HEAD
                inline-flex items-center justify-center
                px-8 py-3 rounded-full
                bg-white text-[#0B1220]
                font-semibold whitespace-nowrap
                shadow-md hover:shadow-lg
                hover:bg-gray-100
                transition-all duration-300
              "
            >
              Let’s Connect →
            </Link>
          </div>

        </div>
      </div>

      {/* ================= SCROLL ANIMATION ================= */}
      <style>
        {`
          @keyframes clientScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-clientScroll {
            animation: clientScroll 20s linear infinite;
          }
        `}
      </style>
=======
              inline-flex items-center justify-center
              px-7 py-3 rounded-full
              bg-slate-900 text-white
              font-semibold whitespace-nowrap
              shadow-md hover:shadow-lg
              hover:bg-slate-800
              transition-all duration-300
              ">
              Let’s Connect →
            </Link>
          </div>
        </div>
      </div>

>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf

    </section>
  );
}
