// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Sap1 from "../assets/images/sap.webp";
// import Sap2 from "../assets/images/sap2.webp";
// import Sap3 from "../assets/images/sap3.webp";
// import { FaCog, FaDatabase, FaHandsHelping, FaArrowRight } from "react-icons/fa";
// import {
//     CheckCircle, Settings, Code2, Server, LifeBuoy,
//     Layers,
//     Rocket,
//     Users,
//     Database,
//     Briefcase,
//     Factory,
//     ShieldCheck,
//     Wrench,
//     Ship,
//     FileCheck,
//     BarChart3
// } from "lucide-react";


// const PremiumImage = ({ src, alt }) => (
//     <div className="relative group">
//         <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-400/30 to-blue-400/30 blur-xl opacity-70 group-hover:opacity-100 transition" />
//         <img
//             src={src}
//             alt={alt}
//             loading="lazy"
//             className="relative w-full rounded-2xl border border-slate-200
//       shadow-[0_25px_60px_rgba(15,23,42,0.35)]"
//         />
//     </div>
// );

// export default function SapServices() {
//     const navigate = useNavigate();

//     return (
//         <div className="w-full overflow-x-hidden font-sans bg-gradient-to-l from-slate-100 to-slate-200">

//             {/* HERO SECTION */}
//             <section className="bg-gradient-to-r from-blue-50 to-blue-100 pt-28">
//                 <div className="max-w-7xl mx-auto px-6 py-28 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">

//                     {/* TEXT CONTENT */}
//                     <motion.div
//                         initial={{ opacity: 0, x: -40 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 1 }}
//                         className="md:w-1/2 flex flex-col gap-6"
//                     >
//                         <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight font-heading tracking-wide">
//                             Transform Your Business with Expert <span className="text-orange-400">SAP Solutions </span>
//                         </h1>
//                         <p className="text-gray-600 text-base leading-relaxed font-heading">
//                             Chhaya IT Services provides end-to-end SAP solutions to streamline operations, improve decision-making, and boost business growth.
//                             From functional consulting to technical development, we ensure your SAP systems run efficiently and effectively.
//                         </p>

//                         {/* CONTACT BUTTON */}
//                         <button
//                             onClick={() => navigate("/contact")}
//                             className="mt-6 px-7 py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-md transition duration-300 w-fit font-body "
//                         >
//                             Contact Our SAP Experts
//                         </button>
//                     </motion.div>

//                     {/* IMAGE */}
//                     <motion.div
//                         initial={{ opacity: 0, x: 40 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 1 }}
//                         className="md:w-1/2 flex justify-center"
//                     >
//                         <PremiumImage src={Sap1} alt="Web Development Services" />
//                     </motion.div>

//                 </div>
//             </section>

//             {/* ABOUT SAP SECTION */}


//             <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">

//                 {/* SECTION HEADING */}
//                 <div className="text-center mb-16">
//                     <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight font-sans">
//                         <span className="text-orange-500 font-extrabold font-heading"> SAP Consulting </span> & Enterprise Services
//                     </h2>
//                     <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-blue-400"></div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-16 items-center">

//                     {/* LEFT – IMAGE */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8 }}
//                     >
//                         <PremiumImage src={Sap2} alt="Web Development Overview" />
//                     </motion.div>


//                     {/* RIGHT – PREMIUM CONTENT */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.8, delay: 0.2 }}
//                         className="space-y-8"
//                     >

//                         {/* INTRO TEXT */}
//                         <p className="text-lg text-slate-500  font-body">
//                             Chhaya IT Services provides end-to-end SAP consulting services that help
//                             organizations align technology with business objectives while maintaining
//                             system reliability and performance.
//                         </p>


//                         {/* DIVIDER */}
//                         <div className="h-px w-full bg-slate-300"></div>

//                         {/* SERVICES LIST */}
//                         <div className="grid gap-6">

//                             <div className="flex gap-4">
//                                 <CheckCircle className="h-6 w-6 text-blue-700 mt-1" />
//                                 <p className="text-lg text-slate-500 font-body">
//                                     <span className="font-medium text-slate-900 font-sans">
//                                         SAP Functional Consulting
//                                     </span>{" "}
//                                     across FI, CO, MM, and SD modules to optimize core business processes.
//                                 </p>
//                             </div>

//                             <div className="flex gap-4">
//                                 <Server className="h-6 w-6 text-blue-700 mt-1" />
//                                 <p className="text-lg text-slate-500 font-body">
//                                     <span className="font-medium text-slate-900 font-sans">
//                                         SAP BASIS Services
//                                     </span>{" "}
//                                     including system administration, monitoring, and performance tuning.
//                                 </p>
//                             </div>

//                             <div className="flex gap-4">
//                                 <Code2 className="h-6 w-6 text-blue-700 mt-1" />
//                                 <p className="text-lg text-slate-500 font-body">
//                                     <span className="font-medium text-slate-900 font-sans">
//                                         ABAP Development
//                                     </span>{" "}
//                                     for custom enhancements, reports, and integrations.
//                                 </p>
//                             </div>

//                             <div className="flex gap-4">
//                                 <Settings className="h-6 w-6 text-blue-700 mt-1" />
//                                 <p className="text-lg text-slate-500 font-body">
//                                     <span className="font-medium text-slate-900 font-sans">
//                                         Ongoing SAP Support
//                                     </span>{" "}
//                                     ensuring stability, scalability, and operational continuity.
//                                 </p>
//                             </div>

//                         </div>

//                         {/* CLOSING STATEMENT */}
//                         <p className="text-lg text-slate-500 leading-relaxed pt-2 font-body">
//                             With a disciplined delivery approach and deep SAP expertise, we help
//                             organizations operate confidently in complex enterprise environments.
//                         </p>

//                     </motion.div>
//                 </div>
//             </section>


//             {/* DETAILED SERVICES WITH ICONS */}
//             <section className="bg-white py-24 md:py-20">
//                 <div className="max-w-7xl mx-auto px-6 text-center">

//                     <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 font-heading">
//                         Our SAP Expertise
//                     </h2>

//                     <div className="grid md:grid-cols-3 gap-8">

//                         {/* CARD 1 */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 24 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5 }}
//                             className="
//             bg-gray-200 rounded-xl p-8
//             shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//             hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)]
//             transition-all duration-300 ease-out
//             hover:-translate-y-2
//             group
//             "
//                         >
//                             <div className="
//             text-blue-700 mb-5 text-4xl flex justify-center
//             transition-colors duration-300
//             group-hover:text-blue-800
//             ">
//                                 <FaCog />
//                             </div>

//                             <h3 className="text-xl font-semibold text-blue-800 mb-3">
//                                 SAP Functional Consulting
//                             </h3>

//                             <p className="text-gray-700 leading-relaxed text-[15px]">
//                                 Expert consulting and configuration across SAP FI, CO, MM, and SD
//                                 modules to streamline finance, logistics, and core business operations.
//                             </p>
//                         </motion.div>

//                         {/* CARD 2 */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 24 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.1 }}
//                             className="
//             bg-gray-200 rounded-xl p-8
//             shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//             hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)]
//             transition-all duration-300 ease-out
//             hover:-translate-y-2
//             group
//             "
//                         >
//                             <div className="
//             text-blue-700 mb-5 text-4xl flex justify-center
//             transition-colors duration-300
//             group-hover:text-blue-800
//             ">
//                                 <FaDatabase />
//                             </div>

//                             <h3 className="text-xl font-semibold text-blue-800 mb-3">
//                                 SAP Technical Services
//                             </h3>

//                             <p className="text-gray-700 leading-relaxed text-[15px]">
//                                 SAP BASIS administration, ABAP development, and seamless integrations
//                                 ensuring performance, security, and system scalability.
//                             </p>
//                         </motion.div>

//                         {/* CARD 3 */}
//                         <motion.div
//                             initial={{ opacity: 0, y: 24 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.5, delay: 0.2 }}
//                             className="
//             bg-gray-200 rounded-xl p-8
//             shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//             hover:shadow-[0_18px_45px_rgba(0,0,0,0.15)]
//             transition-all duration-300 ease-out
//             hover:-translate-y-2
//             group
//             "
//                         >
//                             <div className="
//             text-blue-700 mb-5 text-4xl flex justify-center
//             transition-colors duration-300
//             group-hover:text-blue-800
//             ">
//                                 <FaHandsHelping />
//                             </div>

//                             <h3 className="text-xl font-semibold text-blue-800 mb-3">
//                                 SAP Support & Maintenance 24/7
//                             </h3>

//                             <p className="text-gray-700 leading-relaxed text-[15px]">
//                                 Continuous functional and technical SAP support services designed to
//                                 reduce downtime and protect business continuity.
//                             </p>
//                         </motion.div>

//                     </div>
//                 </div>
//             </section>


//             {/* WHY CHOOSE US */}
//             <section className="relative overflow-hidden bg-[#0A0F1F] py-36 text-slate-300">
//                 {/* Background Orbs – CSS only */}
//                 <div className="absolute inset-0 pointer-events-none">
//                     <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-[#D4B15F]/10 blur-3xl animate-floatSlow" />
//                     <div className="absolute bottom-0 right-0 h-[360px] w-[360px] rounded-full bg-indigo-500/10 blur-3xl animate-floatSlower" />
//                 </div>

//                 <div className="relative max-w-7xl mx-auto px-6">
//                     {/* ================= HEADER ================= */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 30 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true }}
//                         transition={{ duration: 0.7 }}
//                         className="grid lg:grid-cols-12 gap-20 mb-28"
//                     >
//                         <div className="lg:col-span-5">
//                             <span className="block text-[11px] uppercase tracking-[0.45em] text-[#D4B15F] mb-8">
//                                 Enterprise SAP Services
//                             </span>
//                             <h2 className="text-[44px] md:text-[54px] font-semibold leading-tight text-white">
//                                 SAP Support, Delivery <br /> & Strategic Resourcing
//                             </h2>
//                         </div>

//                         <div className="lg:col-span-7 flex items-end">
//                             <p className="max-w-xl text-[17px] leading-[1.9] text-slate-400">
//                                 End-to-end SAP services covering application support, disciplined
//                                 project delivery, and specialized resourcing—focused on operational
//                                 stability and long-term enterprise value.
//                             </p>
//                         </div>
//                     </motion.div>

//                     {/* ================= SERVICES ================= */}
//                     <div className="grid md:grid-cols-3 gap-20 border-t border-slate-700 pt-24">
//                         {[
//                             {
//                                 icon: ShieldCheck,
//                                 title: "SAP Support Services",
//                                 subtitle: "Stability & continuity",
//                                 points: [
//                                     "Module-wise functional and technical SAP support",
//                                     "Project hyper-care during go-live and critical phases",
//                                     "Post-implementation stabilization and issue resolution",
//                                     "Ongoing support to ensure business continuity",
//                                 ],
//                             },
//                             {
//                                 icon: Settings,
//                                 title: "SAP Delivery Services",
//                                 subtitle: "Controlled execution",
//                                 points: [
//                                     "Hiring and deployment of SAP-skilled workforce",
//                                     "Access to certified SAP consultants and specialists",
//                                     "Databank of SAP and IT professionals",
//                                     "Structured delivery aligned with enterprise timelines",
//                                 ],
//                             },
//                             {
//                                 icon: Users,
//                                 title: "SAP Resourcing Services",
//                                 subtitle: "Right expertise, right role",
//                                 points: [
//                                     "Functional and technical SAP experts",
//                                     "MM, SD, FICO, PP, QM and PM module specialists",
//                                     "Additional SAP ECC and R/3 module expertise",
//                                     "Business process reengineering professionals",
//                                     "Experts aligned with SAP Solution Manager practices",
//                                 ],
//                             },
//                         ].map((item, i) => (
//                             <motion.div
//                                 key={i}
//                                 initial={{ opacity: 0, y: 25 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 viewport={{ once: true }}
//                                 transition={{ duration: 0.6, delay: i * 0.12 }}
//                                 className="space-y-10"
//                             >
//                                 <div className="flex items-center gap-5">
//                                     <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4B15F]/15 text-[#D4B15F]">
//                                         <item.icon size={22} />
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//                                         <p className="text-sm text-[#D4B15F]">{item.subtitle}</p>
//                                     </div>
//                                 </div>

//                                 <ul className="space-y-5 text-[15px]">
//                                     {item.points.map((point, idx) => (
//                                         <li key={idx} className="flex gap-4">
//                                             <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-[#D4B15F]" />
//                                             <span className="leading-relaxed text-slate-300">{point}</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </motion.div>
//                         ))}
//                     </div>

//                     {/* ================= CLIENTS ================= */}
//                     <div className="mt-32 border-t border-slate-700 pt-24">
//                         <motion.div
//                             initial={{ opacity: 0, y: 30 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             viewport={{ once: true }}
//                             transition={{ duration: 0.7 }}
//                             className="max-w-3xl mb-20"
//                         >
//                             <span className="block text-[11px] uppercase tracking-[0.45em] text-[#D4B15F] mb-6">
//                                 SAP Services Customers
//                             </span>
//                             <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
//                                 Trusted Enterprise Engagements
//                             </h3>
//                             <p className="text-[16px] leading-relaxed text-slate-400">
//                                 Our SAP consultants have supported manufacturing, public sector,
//                                 and infrastructure organizations across S/4HANA, ECC, BW, and
//                                 compliance-driven implementations.
//                             </p>
//                         </motion.div>

//                         <div className="grid md:grid-cols-2 gap-12">
//                             {[
//                                 {
//                                     icon: Factory,
//                                     company: "KR Pulp and Papers Ltd",
//                                     work: "SAP S/4HANA process enhancement and application support",
//                                 },
//                                 {
//                                     icon: Ship,
//                                     company: "Garden Reach Shipbuilders & Engineers Ltd",
//                                     work: "BIBO revamp engagement (through Yogik Technologies Pvt. Ltd.)",
//                                 },
//                                 {
//                                     icon: FileCheck,
//                                     company: "Tata Metaliks Ltd",
//                                     work: "E-Invoice implementation across MM, SD & PIPO modules (through Yogik Technologies Pvt. Ltd.)",
//                                 },
//                                 {
//                                     icon: BarChart3,
//                                     company: "Thimpu TechPark Ltd (Bhutan)",
//                                     work: "SAP BW implementation for BHI and reporting enablement (through Yogik Technologies Pvt. Ltd.)",
//                                 },
//                             ].map((client, i) => (
//                                 <motion.div
//                                     key={i}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     viewport={{ once: true }}
//                                     transition={{ duration: 0.6, delay: i * 0.1 }}
//                                     className="flex gap-6 rounded-2xl border border-slate-700/60 bg-white/5 p-8 backdrop-blur-sm"
//                                 >
//                                     <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D4B15F]/15 text-[#D4B15F]">
//                                         <client.icon size={22} />
//                                     </div>
//                                     <div>
//                                         <h4 className="text-lg font-semibold text-white mb-2">
//                                             {client.company}
//                                         </h4>
//                                         <p className="text-[15px] leading-relaxed text-slate-400">
//                                             {client.work}
//                                         </p>
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>





//             {/* SEE MORE SERVICES */}
//             <section className="relative bg-white py-20 font-[Inter] overflow-hidden">

//                 {/* Premium background behind services */}
//                 <div className="absolute inset-x-0 top-[300px] h-[480px] 
//   bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#EEF2FF]" />

//                 <div className="relative max-w-7xl mx-auto px-6">
//                     {/* Header */}
//                     <div className="grid md:grid-cols-12 gap-12 mb-16">
//                         <div className="md:col-span-5">
//                             <span className="block text-xs uppercase tracking-[0.35em] text-[#C8A24D] font-semibold mb-4">
//                                 Our Capabilities
//                             </span>

//                             <h2 className="text-4xl md:text-5xl font-semibold leading-tight
// text-transparent bg-clip-text
// bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A]">
//                                 Extended <br /> Service Portfolio   
//                             </h2>

//                         </div>

//                         <div className="md:col-span-7 flex items-end">
//                             <p className="text-lg text-[#475569] leading-relaxed max-w-xl">
//                                 Premium digital and enterprise services designed as strategic
//                                 extensions to your core SAP and IT operations.
//                             </p>
//                         </div>
//                     </div>

//                     {/* Services Wrapper */}
//                     <div className="relative rounded-[32px] 
//     bg-white/70 backdrop-blur-xl
//     border border-slate-200
//     shadow-[0_40px_90px_rgba(15,23,42,0.12)]
//     p-16">


//                         <div className="space-y-16">

//                             {/* Service 1 */}
//                             <motion.div
//                                 whileHover={{ x: 8 }}
//                                 transition={{ duration: 0.3 }}
//                                 onClick={() => navigate("/services/web-development")}
//                                 className="group grid md:grid-cols-12 gap-12 cursor-pointer"
//                             >
//                                 <div className="md:col-span-1 hidden md:flex justify-center">
//                                     <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#C8A24D]" />
//                                 </div>

//                                 <div className="md:col-span-5">
//                                     <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
//                                         Web Development
//                                     </h3>

//                                     <p className="text-[#475569] leading-relaxed">
//                                         Secure, scalable, and performance-driven web applications
//                                         engineered with modern full-stack technologies and
//                                         enterprise-grade architecture.
//                                     </p>
//                                 </div>

//                                 <div className="md:col-span-6 bg-white rounded-2xl
//           border border-slate-200 p-10
//           shadow-[0_25px_60px_rgba(15,23,42,0.08)]
//           flex items-center justify-between">
//                                     <span className="text-base font-medium text-[#e74b0d] tracking-wide">
//                                         Digital Engineering
//                                     </span>

//                                     <span className="text-[#1E3A8A] text-xl group-hover:translate-x-1 transition">
//                                         →
//                                     </span>
//                                 </div>
//                             </motion.div>

//                             {/* Service 2 */}
//                             <motion.div
//                                 whileHover={{ x: 8 }}
//                                 transition={{ duration: 0.3 }}
//                                 onClick={() => navigate("/services/erp")}
//                                 className="group grid md:grid-cols-12 gap-12 cursor-pointer"
//                             >
//                                 <div className="md:col-span-1 hidden md:flex justify-center">
//                                     <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#C8A24D]" />
//                                 </div>

//                                 <div className="md:col-span-5">
//                                     <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
//                                         Web ERP Solutions
//                                     </h3>

//                                     <p className="text-[#475569] leading-relaxed">
//                                         Custom ERP platforms that optimize workflows, enhance
//                                         operational visibility, and support enterprise-scale
//                                         business systems.
//                                     </p>
//                                 </div>

//                                 <div className="md:col-span-6 bg-white rounded-2xl
//           border border-slate-200 p-10
//           shadow-[0_25px_60px_rgba(15,23,42,0.08)]
//           flex items-center justify-between">
//                                     <span className="text-base font-medium text-[#b44707] tracking-wide">
//                                         Enterprise Systems
//                                     </span>

//                                     <span className="text-[#1E3A8A] text-xl group-hover:translate-x-1 transition">
//                                         →
//                                     </span>
//                                 </div>
//                             </motion.div>

//                         </div>
//                     </div>

//                     {/* Footer CTA (Compact) */}
//                     <div className="mt-16">
//                         <button
//                             onClick={() => navigate("/services")}
//                             className="group relative inline-flex items-center gap-4
//   px-14 py-4 rounded-full
//   bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0B1120]
//   text-white text-sm font-semibold tracking-[0.12em]
//   shadow-[0_25px_60px_rgba(15,23,42,0.45)]
//   hover:shadow-[0_35px_80px_rgba(30,58,138,0.55)]
//   transition-all duration-300 overflow-hidden"
//                         >
//                             {/* Gold shine */}
//                             <span className="absolute inset-0 bg-gradient-to-r
//   from-transparent via-[#C8A24D]/20 to-transparent
//   translate-x-[-120%] group-hover:translate-x-[120%]
//   transition-transform duration-700" />

//                             <span className="relative z-10 font-heading">Our Services</span>

//                             <span className="relative z-10 text-[#C8A24D] group-hover:translate-x-1 transition">
//                                 →
//                             </span>
//                         </button>
//                     </div>

//                 </div>
//             </section>






//             {/* CTA SECTION */}
//             <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#0B3B8C] to-[#1E40AF] py-16 md:py-20 text-white">

//                 {/* Decorative Glow */}
//                 <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
//                 <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />

//                 <div className="relative max-w-7xl mx-auto px-6">
//                     <div className="flex flex-col md:flex-row items-center justify-between gap-10">

//                         {/* Content */}
//                         <div className="max-w-3xl">
//                             <h2 className="text-3xl md:text-4xl font-semibold leading-tight tracking-tight">
//                                 Ready to Transform Your SAP Operations?
//                             </h2>

//                             <p className="mt-4 text-slate-200 text-base md:text-lg leading-relaxed">
//                                 Partner with <span className="font-semibold text-white">Chhaya IT Services</span> to streamline SAP processes, improve efficiency, and deliver measurable business outcomes.
//                             </p>
//                         </div>

//                         {/* CTA */}
//                         <button
//                             onClick={() => navigate("/contact")}
//                             className="group relative inline-flex items-center gap-3 px-8 py-4
//         rounded-full bg-white text-[#0B3B8C] font-semibold text-sm md:text-base
//         shadow-[0_20px_40px_rgba(0,0,0,0.25)]
//         hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]
//         hover:-translate-y-1 transition-all duration-300"
//                         >
//                             Get Started
//                             <span className="transform transition-transform duration-300 group-hover:translate-x-1">
//                                 →
//                             </span>
//                         </button>

//                     </div>
//                 </div>
//             </section>




//         </div>
//     );
// }


import React from "react";
import { useNavigate } from "react-router-dom";

const SapServices = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-3xl w-full text-center bg-white shadow-lg rounded-2xl p-8 md:p-12">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          SAP Services
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Our SAP services section is currently under development.
        </p>

        {/* Highlight Box */}
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg p-4 mb-6">
          🚧 Under Construction 🚧
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base">
          We are working to bring you comprehensive SAP solutions including
          consulting, implementation, and support services. Stay tuned!
        </p>

        {/* Optional Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>

      </div> {/* <-- Closing div added here */}
    </section>
  );
};

export default SapServices;