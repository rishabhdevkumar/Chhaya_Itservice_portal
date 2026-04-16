import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  CheckCircle,
  ArrowRight,
  Layers,
  Settings,
} from "lucide-react";

import cardBg1 from "../assets/images/about1.webp";
import cardBg2 from "../assets/images/about2.webp";

export default function AboutSection() {
  const navigate = useNavigate();

  return (
    <section
      className="
        relative overflow-hidden
        py-16 sm:py-20
        bg-gradient-to-br
        from-sky-50
        via-white
        to-slate-100
      "
    >
<<<<<<< HEAD
      {/* TOP ACCENT LINE */}
     <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none">
  <div
    className="
=======
      <div className="absolute top-0 left-0 w-full flex justify-center pointer-events-none">
        <div
          className="
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
      h-[2px]
      w-32 sm:w-48 md:w-72 lg:w-96
      bg-gradient-to-r
      from-blue-600
      via-sky-400
      to-transparent
      rounded-full
    "
<<<<<<< HEAD
  />
</div>


     
=======
        />
      </div>

>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
      <div
        className="
          max-w-7xl mx-auto px-4 lg:px-8
          grid grid-cols-1 lg:grid-cols-2
          gap-16 lg:gap-20 items-center
        "
      >
<<<<<<< HEAD
        {/* LEFT SECTION */}
        <div className="flex justify-center lg:justify-start relative">
          <div className="w-full max-w-[460px] relative">
            {/* IMAGE WRAPPER */}
            <div className="relative rounded-3xl bg-black shadow-xl p-4 sm:p-6">
              {/* IMAGE 1 */}
=======
        <div className="flex justify-center lg:justify-start relative">
          <div className="w-full max-w-[460px] relative">
            <div className="relative rounded-3xl bg-black shadow-xl p-4 sm:p-6">
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
              <motion.img
                src={cardBg1}
                alt="About company"
                loading="lazy"
                decoding="async"
                className="
                  w-full h-[220px] sm:h-[280px]
                  object-cover rounded-2xl shadow-md
                "
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />

<<<<<<< HEAD
              {/* IMAGE 2 */}
=======
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
              <motion.img
                src={cardBg2}
                alt="SAP solutions"
                loading="lazy"
                decoding="async"
                className="
                  w-full h-[200px]
                  object-cover rounded-2xl shadow-lg mt-4
                  lg:w-[85%] lg:h-[220px]
                  lg:absolute lg:top-[220px] lg:right-[-18px]
                  border-4 border-white
                "
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div>
          <div
            className="
              flex items-center gap-3
              text-blue-600 font-semibold
              mb-4 uppercase tracking-wide text-sm
            "
          >
            <Layers size={18} />
            <span>Digitize Your Business Processes</span>
          </div>

          <h2
            className="
              text-2xl sm:text-3xl lg:text-4xl
              font-extrabold text-gray-900
              leading-snug sm:leading-tight
              mb-6 tracking-tight
            "
          >
            <span className="text-blue-600">Chhaya IT Services</span>,{" "}
            <br className="hidden md:block" />
            Your Partner in a{" "}
            <span className="text-gray-800 font-semibold">
              Sustainable Digital Future
            </span>
          </h2>

          <p
            className="
              text-gray-700 text-base sm:text-lg
              leading-relaxed mb-8
            "
          >

            Chhaya IT Services is a trusted IT Consulting service provider specializing in both <b>SAP and Custom web-based solutions</b>.
          </p>

          <ul className="space-y-4 sm:space-y-5 mb-10">
            <li className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 mt-1" size={22} />
              <span className="text-gray-700">
                <strong> SAP Services.	</strong> End-to-End SAP Services
              </span>
            </li>

            <li className="flex items-start gap-4">
              <Settings className="text-blue-600 mt-1" size={22} />
              <span className="text-gray-700">
                <strong> Customized ERP Solutions.		</strong> Tailored ERP Solutions
              </span>
            </li>

            <li className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 mt-1" size={22} />
              <span className="text-gray-700">
                <strong> 24/7 Managed Services.	</strong> Continuous Managed Services
              </span>
            </li>
            <li className="flex items-start gap-4">
              <CheckCircle className="text-blue-600 mt-1" size={22} />
              <span className="text-gray-700">
                <strong>  IT Manpower Provider.	</strong> IT Staffing Services
              </span>
            </li>
          </ul>

          <button
            onClick={() => navigate("/about")}
            className="
              inline-flex items-center gap-3
              px-7 py-3.5
              bg-blue-600 text-white
              text-base sm:text-lg font-semibold
              rounded-xl
              hover:bg-blue-700 transition
              shadow-lg
            "
          >
            Discover More
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
