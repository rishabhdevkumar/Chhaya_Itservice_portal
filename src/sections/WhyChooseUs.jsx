import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cloud,
  Users,
  BadgeCheck,
  Headphones,
  Lightbulb,
} from "lucide-react";

import cardBg from "../assets/images/WhyChooseUs1.webp";
import WhyChooseUsBg from "../assets/images/WhyChooseUsBg.webp";

export default function WhyChooseUs() {
  return (
    <section
      className="relative py-20 overflow-hidden"
      style={{
        backgroundImage: `url(${WhyChooseUsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/10" /> {/* soft overlay */}

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="text-sm font-bold text-orange-300 uppercase tracking-wide">
            Why Choose <span className="text-blue-400">Chhaya IT Services</span>
          </h2>

          {/* Accent line */}
          <div className="mt-3 mb-6 h-[3px] w-24 bg-gradient-to-r from-white to-sky-400 rounded-full" />

          {/* Highlight line */}
          <p className="text-lg sm:text-xl font-semibold mb-5 max-w-xl">
            <span className="text-white text-4xl sm:text-5xl font-heading">
              Your Certified RISE <br /> with{" "}
              <span className="text-yellow-300">SAP S/4HANA Cloud</span>{" "}
              Implementation Partner
            </span>
          </p>

          {/* Supporting paragraph */}
          <p className="text-slate-200 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
            We take pride in delivering innovative, secure, and scalable SAP
            solutions that empower businesses to grow with confidence.
          </p>

          {/* Bulb statement */}
          <div className="flex items-center gap-3 mb-10">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            >
              <Lightbulb className="text-yellow-400" size={52} />
            </motion.div>
            <p className="text-white font-semibold leading-snug">
              We’re doing the right thing. <br />
              <span className="text-blue-300">The right way.</span>
            </p>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <Feature
      icon={Cloud}
      text="End-to-end SAP services, pre & post-implementation"
    />
    <Feature
      icon={BadgeCheck}
      text="Trusted SAP Gold Partner, globally recognized"
    />
    <Feature
      icon={Users}
      text="50+ RISE / SAP S/4HANA implementations"
    />
    <Feature
      icon={ShieldCheck}
      text="Affordable SAP solutions with Mawai add-ons"
    />
    <Feature
      icon={Headphones}
      text="Expert SAP consultants & round-the-clock support"
    />
  </div>
        </motion.div>
        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full flex justify-center items-center"
        >
        
          <div className="relative w-full max-w-full lg:max-w-[700px] h-[400px] sm:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden ">
            <img
              src={cardBg}
              alt="Why Choose Chhaya IT Services"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain"
            />
            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/45 via-black/25 to-transparent" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}


/* Feature Item */
function Feature({ icon: Icon, text }) {
  return (
    <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3">
      <Icon size={18} className="text-blue-400 mt-1" />
      <span className="text-slate-100 text-sm sm:text-base">{text}</span>
    </div>
  );
}

