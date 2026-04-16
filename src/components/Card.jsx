import React from "react";
import { motion } from "framer-motion";
<<<<<<< HEAD
import cardBg from "../assets/images/card.webp";
import { ThumbsUpIcon } from "lucide-react";

export default function Card({ icon, title, desc }) {
=======

export default function Card({ icon, title, desc, bgImage }) {
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
<<<<<<< HEAD
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
=======
        relative rounded-xl
        bg-[#0a1128]
        border border-white/5
        shadow-[0_20px_50px_rgba(0,0,0,0.3)]
        overflow-hidden cursor-pointer
        group h-full
      "
    >
      {/* Background Image on Hover */}
      {bgImage && (
        <motion.div
          variants={{
            rest: { opacity: 0, scale: 1.1 },
            hover: { opacity: 0.5, scale: 1 },
          }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 z-0"
        >
          <img src={bgImage} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      )}

      <div className="absolute top-0 left-0 w-12 h-1 overflow-hidden z-20">
        <div className="w-full h-full bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.5)]" />
      </div>

      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none z-10"
      />

      <div className="relative z-10 p-8 flex flex-col h-full">
        <div className="text-4xl mb-6 text-blue-500 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>

        <h3 className="text-xl font-bold mb-3 text-white leading-tight">
          {title}
        </h3>

        <p className="text-gray-400 text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
          {desc}
        </p>
      </div>
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
    </motion.div>
  );
}
