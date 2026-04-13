import React from "react";
import { Routes, Route } from "react-router-dom";

// Import pages
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Career from "../pages/Career";

// 🔴 IMPORT PAGES (NOT SECTIONS)
import SapServices from "../pages/SapServices";
import WebServices from "../pages/WebServices";
import ErpServices from "../pages/ErpServices";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/services" element={<Services />} />
      <Route path="/services/sap" element={<SapServices />} />
      <Route path="/services/web-development" element={<WebServices />} />
      <Route path="/services/erp" element={<ErpServices />} />

      <Route path="/contact" element={<Contact />} />
      <Route path="/career" element={<Career />} />
    </Routes>
  );
}
