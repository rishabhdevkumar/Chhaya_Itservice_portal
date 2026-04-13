import React from "react";
import { motion } from "framer-motion";

export default function Card({ icon, title, desc, bgImage }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="
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
    </motion.div>
  );
}
