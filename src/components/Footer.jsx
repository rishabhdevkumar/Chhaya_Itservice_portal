import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/ChhayaLogo.webp";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
    
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={Logo}
              alt="Chhaya IT Services"
              className="h-10 w-auto object-contain"
            />
            <h3 className="text-lg tracking-wide text-red-700 font-bold font-heading  ">
              Chhaya IT Services
            </h3>
          </div>

          <p className="text-sm text-gray-300 leading-6 max-w-sm">
            Chhaya IT Services is a trusted IT consulting and SAP services company
            delivering scalable, secure, and future-ready technology solutions that
            empower businesses to grow and innovate.
          </p>
          <div className="flex items-center gap-4 mt-5">
            <a 
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-orange-400 hover:text-black hover:border-orange-400 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-orange-400 hover:text-black hover:border-orange-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-orange-400 hover:text-black hover:border-orange-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={14} />
            </a>

            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-700 text-gray-300 hover:bg-orange-400 hover:text-black hover:border-orange-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={14} />
            </a>
          </div>
        </div>

        {/* Explore */}
        <div>
          <h4 className="text-base font-semibold tracking-wide">
            Explore
          </h4>
          <span className="block w-10 h-0.5 bg-orange-400 mt-2 mb-4" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link to="/" className="hover:text-orange-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-orange-400 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-orange-400 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Expertise */}
        <div>
          <h4 className="text-base font-semibold tracking-wide">
            Our Expertise
          </h4>
          <span className="block w-12 h-0.5 bg-orange-400 mt-2 mb-4" />
          <ul className="space-y-2 text-sm text-gray-300">
            <li>SAP Implementation & Support</li>
            <li>SAP S/4HANA Migration</li>
            <li>Enterprise IT Consulting</li>
            <li>Business Process Optimization</li>
            <li>Application Maintenance Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-semibold tracking-wide">
            Contact Us
          </h4>
          <span className="block w-14 h-0.5 bg-orange-400 mt-2 mb-4" />

          <p className="text-sm text-gray-300 leading-6 mb-3">
            3rd Floor, Taj Building, 30 SNP Area, Aambagan, Sakchi,
            East Singhbhum, Jharkhand, India – 831001
          </p>

          <p className="text-sm text-gray-300">
            📞 +91 8789124115
          </p>
          <p className="text-sm text-gray-300 mb-2">
            📞 +91 9431133764
          </p>

          <a
            href="mailto:partha.basack@chhayaitservices.com"
            className="text-sm text-gray-300 hover:text-orange-400 transition"
          >
            ✉️ partha.basack@chhayaitservices.com
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400">
          <p>
            © {new Date().getFullYear()} Chhaya IT Services. All rights reserved.
          </p>
          <p className="mt-2 sm:mt-0">
            Designed & Developed by Chhaya IT Services
          </p>
        </div>
      </div>
    </footer>
  );
}
