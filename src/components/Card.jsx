import React from "react";
import { motion } from "framer-motion";
import cardBg from "../assets/images/card.webp";
import { ThumbsUpIcon } from "lucide-react";

export default function Card({ icon, title, desc }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
        relative rounded-2xl
        bg-slate-900
        border border-slate-200
        shadow-[0_16px_40px_-18px_rgba(0,0,0,0.18)]
        overflow-hidden cursor-pointer
      "
    >
      {/* TOP-LEFT CORNER ACCENT */}
      <div className="absolute top-0 left-0 z-20">
        <div className="w-10 h-[2px] bg-blue-600" />
        <div className="w-[2px] h-10 bg-blue-600" />
      </div>

      {/* BOTTOM-RIGHT CORNER ACCENT */}
      <div className="absolute bottom-0 right-0 z-20">
        <div className="w-10 h-[2px] bg-sky-400" />
      </div>

      {/* BACKGROUND IMAGE (Unfold from bottom on hover) */}
      <motion.div
        variants={{
          rest: { y: "100%" },
          hover: { y: "0%" },
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        style={{ backgroundImage: `url(${cardBg})` }}
        className="absolute inset-0 bg-cover bg-center"
      >
        {/* Transparency for text visibility */}
        <div className="absolute inset-0 bg-black/55" />
      </motion.div>

      {/* CONTENT */}
      <motion.div
        variants={{
          rest: { color: "#0f172a" }, // slate-900
          hover: { color: "#ffffff" },
        }}
        transition={{ duration: 0.25 }} 
        className="
          relative z-10
          p-6 sm:p-7
          flex flex-col
          h-full
        "
      >
        {/* Icon */}
        <div className="text-4xl mb-4 text-white
         group-hover:text-white transition-colors">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-semibold tracking-tight mb-2 text-white">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-base leading-relaxed opacity-90 text-white ">
          {desc}
        </p>
      
      </motion.div>
    </motion.div>
  );
}
