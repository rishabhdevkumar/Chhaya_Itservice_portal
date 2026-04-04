import React from "react";
import { Link } from "react-router-dom";

/* Client logos */
import Client1 from "../assets/images/client1.webp";
import Client2 from "../assets/images/client2.webp";
import Client3 from "../assets/images/client3.webp";

const clients = [
  Client1,
  Client2,
  Client3,
  
];

export default function ClientSection() {
  return (
    <section className=" overflow-hidden pt-10">


      {/* Heading */}
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
          </div>
        </div>
      </div>

      {/* Highlight CTA Section */}
     {/* Full Width Highlight CTA */}

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
          inline-flex items-center justify-center
          px-7 py-3 rounded-full
          bg-slate-900 text-white
          font-semibold whitespace-nowrap
          shadow-md hover:shadow-lg
          hover:bg-slate-800
          transition-all duration-300
        "
      >
        Let’s Connect →
      </Link>
    </div>

  </div>
</div>


    </section>
  );
}
