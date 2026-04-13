import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../assets/images/ChhayaLogo.webp";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Chevron = ({ open }) => (
  <svg
    className={`w-4 h-4 ml-1 transition-transform duration-300 ${open ? "rotate-180" : ""
      }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  const isServiceActive = location.pathname.startsWith("/services");

  const services = [
    { name: "SAP Services", path: "/services/sap" },
    { name: "Web-based business solution", path: "/services/erp" },
    { name: "Staffing services", path: "/services/web-development" },
  ];

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const baseLink =
    "relative text-gray-700 font-normal tracking-wide transition duration-300 " +
    "after:absolute after:left-0 after:-bottom-3 after:h-[2px] after:w-0 " +
    "after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full";

  const activeLink = "text-blue-600 after:w-full";

  return (
    <header className="fixed top-0 w-full z-50">

      <motion.div
        initial={false}
        animate={{ height: isScrolled ? 0 : 40, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.4 }}
        className="hidden md:flex overflow-hidden bg-gray-900 border-b border-white/10 text-white text-[14px]"
      >
        <div className="max-w-[1440px] mx-auto px-10 w-full grid grid-cols-[1fr_auto_1fr] items-center">
          <div className="flex justify-start items-center">
            <span className="flex items-center gap-1">
              <span className="font-bold">📧</span> partha.basack@chhayaitservices.com
            </span>
          </div>
          <div className="flex justify-center items-center">
            <span className="flex items-center gap-1">
              <span className="text-blue-500 font-bold">📍</span> Taj Building, 30 SNP Area, Aambagan, Sakchi, East Singhbhum, Jharkhand, India - 831001
            </span>
          </div>
          <div className="flex justify-end gap-5 items-center">
            <FaFacebookF className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaLinkedinIn className="hover:text-blue-400 cursor-pointer transition-colors" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </motion.div>

      <nav
        className={`transition-all duration-500 ${isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-white"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Chhaya IT Services" className="h-10 w-auto" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Chhaya IT Services
            </span>
          </NavLink>

          <ul className="hidden md:flex items-center gap-10 text-[15px] font-medium">

            <li>
              <NavLink to="/" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/about" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
                About
              </NavLink>
            </li>

            {/* SERVICES */}
            <li
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                className={`${baseLink} flex items-center ${isServiceActive ? activeLink : ""
                  }`}
              >
                Services <Chevron open={servicesOpen} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    className="absolute top-full left-0 mt-5 bg-white rounded-xl shadow-xl px-6 py-4 min-w-[240px] border border-gray-100"
                  >
                    {services.map((s) => (
                      <NavLink
                        key={s.name}
                        to={s.path}
                        className={({ isActive }) =>
                          `block py-2 text-sm transition-colors ${isActive
                            ? "text-blue-600 font-semibold"
                            : "text-gray-600 hover:text-blue-600"
                          }`
                        }
                      >
                        {s.name}
                      </NavLink>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <NavLink to="/contact" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className={({ isActive }) => `${baseLink} ${isActive ? activeLink : ""}`}>
                Career
              </NavLink>
            </li>

          </ul>

          <button
            className="md:hidden text-3xl text-gray-900"
            onClick={() => setMobileOpen(true)}
          >
            ☰
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed top-0 right-0 h-full w-72 bg-black text-white z-50 flex flex-col"
            >
              <div className="flex justify-between items-center px-6 py-5 border-b border-white/10">
                <img src={Logo} alt="Logo" className="h-9" />
                <button className="text-4xl" onClick={() => setMobileOpen(false)}>
                  ×
                </button>
              </div>

              <div className="flex-1 flex flex-col gap-5 px-6 pt-6 text-[16px]">
                <NavLink to="/" onClick={() => setMobileOpen(false)} className="hover:text-blue-400">Home</NavLink>
                <NavLink to="/about" onClick={() => setMobileOpen(false)} className="hover:text-blue-400">About</NavLink>

                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className={`flex items-center gap-2 ${isServiceActive ? "text-blue-400" : "hover:text-blue-400"
                    }`}
                >
                  Services <Chevron open={mobileServicesOpen} />
                </button>

                {mobileServicesOpen && (
                  <div className="ml-4 flex flex-col gap-3 text-gray-300">
                    {services.map((s) => (
                      <NavLink
                        key={s.name}
                        to={s.path}
                        onClick={() => setMobileOpen(false)}
                        className="hover:text-blue-400"
                      >
                        {s.name}
                      </NavLink>
                    ))}
                  </div>
                )}

                <NavLink to="/contact" onClick={() => setMobileOpen(false)} className="hover:text-blue-400">
                  Contact
                </NavLink>
                <NavLink to="/career" onClick={() => setMobileOpen(false)} className="hover:text-blue-400">
                  Career
                </NavLink>
              </div>

              <div className="py-6 border-t border-white/10 flex justify-center gap-8">
                <FaFacebookF className="hover:text-blue-400 cursor-pointer" />
                <FaLinkedinIn className="hover:text-blue-400 cursor-pointer" />
                <FaTwitter className="hover:text-blue-400 cursor-pointer" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
