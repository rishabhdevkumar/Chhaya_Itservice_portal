// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Web1 from "../assets/images/web2.webp";
// import Web2 from "../assets/images/web1.webp";
// import Web3 from "../assets/images/web3.webp";
// import { FaCode, FaServer, FaUsers, FaArrowRight } from "react-icons/fa";
// import { CheckCircle, Settings, Code2, Server, Users, ShoppingCart, Factory, Landmark, ClipboardList, Truck, Building2 } from "lucide-react";

// /* ---------------- PREMIUM IMAGE WRAPPER ---------------- */
// const PremiumImage = ({ src, alt }) => (
//   <div className="relative group">
//     <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-400/30 to-blue-400/30 blur-xl opacity-70 group-hover:opacity-100 transition" />
//     <img
//       src={src}
//       alt={alt}
//       loading="lazy"
//       className="relative w-full rounded-2xl border border-slate-200
//       shadow-[0_25px_60px_rgba(15,23,42,0.35)]"
//     />
//   </div>
// );

// /* ---------------- MAIN COMPONENT ---------------- */
// export default function WebServices() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full overflow-x-hidden font-sans bg-gradient-to-l from-slate-100 to-slate-200">

//       {/* ================= HERO SECTION ================= */}
//       <section className="bg-gradient-to-r from-indigo-50 to-blue-100 pt-28">
//         <div className="max-w-7xl mx-auto px-6 py-28 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">

//           {/* TEXT */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="md:w-1/2 flex flex-col gap-6"
//           >
//             <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-wide font-heading">
//               Scalable & Secure
//               <span className="text-indigo-600"> Web Development Solutions</span>
//             </h1>

//             <p className="text-gray-600 text-base leading-relaxed font-heading">
//               Chhaya IT Services delivers enterprise-grade web applications and
//               deploys skilled technical resources to help businesses build,
//               scale, and modernize digital platforms efficiently.
//             </p>

//             <button
//               onClick={() => navigate("/contact")}
//               className="mt-6 px-7 py-3 bg-indigo-600 hover:bg-indigo-800
//               text-white font-semibold rounded-lg shadow-md transition w-fit"
//             >
//               Contact Our Experts
//             </button>
//           </motion.div>

//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="md:w-1/2 flex justify-center"
//           >
//             <PremiumImage src={Web1} alt="Web Development Services" />
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= ABOUT SECTION ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">

//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-heading">
//             Enterprise-Focused
//             <span className="text-indigo-600 font-extrabold"> Web Development</span>
//           </h2>
//           <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-indigo-500" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           {/* IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//           >
//             <PremiumImage src={Web2} alt="Web Development Overview" />
//           </motion.div>

//           {/* CONTENT */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <p className="text-lg text-slate-500">
//               We build modern, secure, and scalable web solutions aligned
//               with business goals, performance standards, and long-term growth.
//             </p>

//             <div className="h-px w-full bg-slate-300" />

//             <div className="grid gap-6">

//               <div className="flex gap-4">
//                 <CheckCircle className="h-6 w-6 text-indigo-600 mt-1" />
//                 <p className="text-lg text-slate-500">
//                   <span className="font-medium text-slate-900">
//                     Frontend Development
//                   </span>{" "}
//                   using React, Next.js, Tailwind CSS, and modern UI frameworks.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Server className="h-6 w-6 text-indigo-600 mt-1" />
//                 <p className="text-lg text-slate-500">
//                   <span className="font-medium text-slate-900">
//                     Backend Engineering
//                   </span>{" "}
//                   with Java, PHP, Node.js, APIs, and scalable architectures.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Code2 className="h-6 w-6 text-indigo-600 mt-1" />
//                 <p className="text-lg text-slate-500">
//                   <span className="font-medium text-slate-900">
//                     Full-Stack Solutions
//                   </span>{" "}
//                   delivering secure, high-performance business platforms.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Settings className="h-6 w-6 text-indigo-600 mt-1" />
//                 <p className="text-lg text-slate-500">
//                   <span className="font-medium text-slate-900">
//                     Skilled Resource Deployment
//                   </span>{" "}
//                   across SAP, Java, PHP, and Web technologies.
//                 </p>
//               </div>

//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* ================= EXPERTISE CARDS ================= */}
//       <section className="bg-white py-24">
//         <div className="max-w-7xl mx-auto px-6 text-center">

//           <h2 className="text-3xl md:text-4xl font-bold text-slate-700 mb-12 font-heading">
//             Our Web Expertise
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">

//             <motion.div
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 24 }}
//               className="bg-gray-200 rounded-xl p-8 hover:-translate-y-2 transition shadow-lg"
//             >
//               <FaCode className="text-4xl text-indigo-600 mx-auto mb-5" />
//               <h3 className="text-xl font-semibold mb-3">Frontend Engineering</h3>
//               <p className="text-gray-700 text-sm">
//                 Responsive, fast, and user-centric web interfaces.
//               </p>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 24 }}
//               className="bg-gray-200 rounded-xl p-8 hover:-translate-y-2 transition shadow-lg"
//             >
//               <FaServer className="text-4xl text-indigo-600 mx-auto mb-5" />
//               <h3 className="text-xl font-semibold mb-3">Backend Systems</h3>
//               <p className="text-gray-700 text-sm">
//                 Secure APIs, databases, and enterprise-ready architectures.
//               </p>
//             </motion.div>

//             <motion.div
//               whileInView={{ opacity: 1, y: 0 }}
//               initial={{ opacity: 0, y: 24 }}
//               className="bg-gray-200 rounded-xl p-8 hover:-translate-y-2 transition shadow-lg"
//             >
//               <FaUsers className="text-4xl text-indigo-600 mx-auto mb-5" />
//               <h3 className="text-xl font-semibold mb-3">Staff Augmentation</h3>
//               <p className="text-gray-700 text-sm">
//                 Flexible deployment of skilled technical professionals.
//               </p>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="max-w-7xl mx-auto px-6 py-24 md:grid-cols-2 grid gap-16 items-center">

//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <PremiumImage src={Web3} alt="Why Choose Chhaya IT Services" />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-8">
//             Why Partner with
//             <span className="text-indigo-600"> Chhaya IT Services</span>
//           </h2>

//           <div className="space-y-4">
//             <p className="bg-slate-50 p-5 rounded-xl border">
//               ✔ Proven delivery with enterprise experience
//             </p>
//             <p className="bg-slate-50 p-5 rounded-xl border">
//               ✔ Scalable teams & flexible engagement models
//             </p>
//             <p className="bg-slate-50 p-5 rounded-xl border">
//               ✔ Secure, performance-driven development
//             </p>
//             <p className="bg-slate-50 p-5 rounded-xl border">
//               ✔ Long-term support & partnership approach
//             </p>
//           </div>
//         </motion.div>
//       </section>


//       {/* ================= WEB DEVELOPMENT & CLOUD ERP SERVICES ================= */}

//       <section className="relative py-32 overflow-hidden bg-[#0B1120] text-white">
//         {/* Ambient Background Effects */}
//         <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-indigo-600/30 rounded-full blur-[140px]" />
//         <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] bg-blue-600/30 rounded-full blur-[140px]" />

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center max-w-4xl mx-auto mb-24">
//             <span className="inline-flex items-center px-4 py-1 rounded-full
//                        bg-white/10 text-sm tracking-widest text-indigo-300 uppercase">
//               Enterprise Capabilities
//             </span>

//             <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
//               Web Development & Cloud ERP
//               <span className="block text-transparent bg-clip-text
//                          bg-gradient-to-r from-indigo-400 to-cyan-400">
//                 CITS cERP Platform
//               </span>
//             </h2>

//             <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed">
//               High-performance web and ERP solutions designed for
//               complex enterprise operations, real-time intelligence,
//               and scalable growth.
//             </p>
//           </div>

//           {/* Cards */}
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">

//             {[
//               {
//                 icon: Users,
//                 title: "Human Capital Management",
//                 desc: "Intelligent onboarding, organization structure, attendance, and payroll automation."
//               },
//               {
//                 icon: ShoppingCart,
//                 title: "Order to Cash Management",
//                 desc: "Customer master, order lifecycle, billing, and service operations."
//               },
//               {
//                 icon: Factory,
//                 title: "Manufacturing Management",
//                 desc: "Production planning, costing, warehousing, and plant maintenance."
//               },
//               {
//                 icon: Landmark,
//                 title: "Financials Management",
//                 desc: "Real-time accounting, cash-flow forecasting, and compliance reporting."
//               },
//               {
//                 icon: ClipboardList,
//                 title: "Project Management",
//                 desc: "Live execution tracking, milestone control, and performance analytics."
//               },
//               {
//                 icon: Truck,
//                 title: "Procurement to Pay",
//                 desc: "Supplier collaboration, sourcing, contracts, and purchasing workflows."
//               }
//             ].map((item, i) => {
//               const Icon = item.icon;
//               return (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: i * 0.05 }}
//                   className="relative group rounded-3xl p-[1px]
//                        bg-gradient-to-br from-white/20 to-white/5"
//                 >
//                   <div className="relative h-full rounded-3xl bg-white/5
//                             backdrop-blur-xl p-8
//                             border border-white/10
//                             hover:border-indigo-400/40 transition">

//                     {/* Icon */}
//                     <div className="flex items-center justify-center w-14 h-14
//                               rounded-2xl bg-gradient-to-br
//                               from-indigo-500/20 to-cyan-500/20
//                               text-indigo-300 mb-6">
//                       <Icon className="w-7 h-7" />
//                     </div>

//                     <h3 className="text-xl font-semibold mb-3">
//                       {item.title}
//                     </h3>

//                     <p className="text-slate-300 leading-relaxed">
//                       {item.desc}
//                     </p>

//                     {/* Subtle hover glow */}
//                     <div className="absolute inset-0 rounded-3xl
//                               bg-gradient-to-br from-indigo-500/10
//                               to-cyan-500/10 opacity-0
//                               group-hover:opacity-100 transition" />
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </section>


//       {/* ================= OUR CUSTOMERS ================= */}
      

//       <section className="relative py-28 overflow-hidden bg-[#0B1120] text-white">

//         {/* Premium Ambient Background */}
//         <div className="absolute inset-0">
//           {/* Soft radial glow */}
//           <div className="absolute -top-40 -left-40 w-[520px] h-[520px]
//                     bg-indigo-600/25 rounded-full blur-[140px]" />
//           <div className="absolute top-1/3 -right-40 w-[480px] h-[480px]
//                     bg-cyan-600/25 rounded-full blur-[140px]" />

//           {/* Noise / texture substitute (safe gradient) */}
//           <div className="absolute inset-0
//                     bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.04),_transparent_55%)]" />
//         </div>

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* Header */}
//           <div className="text-center max-w-4xl mx-auto mb-28">
//             <span className="inline-block text-xs font-semibold tracking-[0.28em]
//                        text-indigo-300 uppercase mb-4">
//               Client Portfolio
//             </span>

//             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight font-body">
//               Our  Customers
//             </h2>

//             <p className="mt-6 text-base md:text-base text-slate-300 leading-relaxed ">
//               Trusted by organizations leveraging Cloud ERP and SAP-integrated
//               web platforms to modernize enterprise operations.
//             </p>
//           </div>

//           {/* Customer Cards */}
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//             {[
//               { name: "Orissa Sponge Iron & Steel Ltd", sector: "Iron & Steel Manufacturing" },
//               { name: "Srijan Infrassociates Pvt Ltd", sector: "Railway Infrastructure Projects" },
//               { name: "Srijan Homemakers Pvt Ltd", sector: "Building & Facility Construction" },
//               { name: "Maa Tara Construction & Equipment Co", sector: "Mining & Heavy Equipment" },
//               { name: "Material Transport Company", sector: "Logistics & Equipment Handling" },
//               { name: "Shreyansh Trading & Construction Pvt Ltd", sector: "Railway Facility Construction" },
//             ].map((item, i) => (
//               <motion.div
//                 key={i}
//                 initial={{ opacity: 0, y: 16 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.45, delay: i * 0.04 }}
//                 className="relative rounded-2xl p-[1px]
//                      bg-gradient-to-br from-white/15 to-white/5"
//               >
//                 <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8
//                           border border-white/10
//                           hover:border-indigo-400/40 transition">

//                   {/* Accent line */}
//                   <div className="absolute left-0 top-0 h-full w-1
//                             bg-gradient-to-b from-indigo-500 to-cyan-400
//                             rounded-l-2xl" />

//                   <div className="flex items-start gap-4">
//                     <div className="flex items-center justify-center
//                               w-10 h-10 rounded-lg
//                               bg-white/10 text-indigo-300">
//                       <Building2 className="w-5 h-5" />
//                     </div>

//                     <div>
//                       <h3 className="text-lg font-semibold leading-snug">
//                         {item.name}
//                       </h3>
//                       <p className="mt-1 text-sm text-slate-300">
//                         Sector — {item.sector}
//                       </p>
//                     </div>
//                   </div>

//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>



//       {/* ================= MORE SERVICES (FIXED) ================= */}
//       <section className="relative bg-white py-20 font-[Inter] overflow-hidden">

//         {/* Premium background behind services */}
//         <div className="absolute inset-x-0 top-[300px] h-[480px] 
//           bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#EEF2FF]" />

//         <div className="relative max-w-7xl mx-auto px-6">

//           {/* Header */}
//           <div className="grid md:grid-cols-12 gap-12 mb-16">
//             <div className="md:col-span-5">
//               <span className="block text-xs uppercase tracking-[0.35em] text-[#C8A24D] font-semibold mb-4">
//                 Our Capabilities
//               </span>

//               <h2 className="text-4xl md:text-5xl font-semibold leading-tight
//         text-transparent bg-clip-text
//         bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A]">
//                 Extended <br /> Service Portfolio
//               </h2>

//             </div>

//             <div className="md:col-span-7 flex items-end">
//               <p className="text-lg text-[#475569] leading-relaxed max-w-xl">
//                 Architected web platforms built with discipline, security, and scalability — enabling process automation, system integration, and real-time operational visibility across the enterprise.
//               </p>
//             </div>
//           </div>

//           {/* Services Wrapper */}
//           <div className="relative rounded-[32px] 
//             bg-white/70 backdrop-blur-xl
//             border border-slate-200
//             shadow-[0_40px_90px_rgba(15,23,42,0.12)]
//             p-16">

//             <div className="space-y-16">

//               {/* Service 1 */}
//               {/* Service – Web ERP Services */}
//               <motion.div
//                 whileHover={{ x: 8 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => navigate("/services/erp")}
//                 className="group grid md:grid-cols-12 gap-12 cursor-pointer"
//               >
//                 {/* Vertical Accent */}
//                 <div className="md:col-span-1 hidden md:flex justify-center">
//                   <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#C8A24D]" />
//                 </div>

//                 {/* Content */}
//                 <div className="md:col-span-5">
//                   <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
//                     Web ERP Services
//                   </h3>

//                   <p className="text-[#475569] leading-relaxed">
//                     Custom-built, cloud-ready ERP platforms designed to streamline
//                     finance, operations, HR, procurement, and reporting workflows
//                     with real-time visibility and scalable architecture.
//                   </p>
//                 </div>

//                 {/* Tag Card */}
//                 <div
//                   className="md:col-span-6 bg-white rounded-2xl
//     border border-slate-200 p-10
//     shadow-[0_25px_60px_rgba(15,23,42,0.08)]
//     flex items-center justify-between"
//                 >
//                   <span className="text-base font-medium text-[#e74b0d] tracking-wide">
//                     Cloud ERP & Business Automation
//                   </span>

//                   <span className="text-[#1E3A8A] text-xl group-hover:translate-x-1 transition">
//                     →
//                   </span>
//                 </div>
//               </motion.div>


//               {/* Service – SAP Services */}
//               <motion.div
//                 whileHover={{ x: 8 }}
//                 transition={{ duration: 0.3 }}
//                 onClick={() => navigate("/services/sap")}
//                 className="group grid md:grid-cols-12 gap-12 cursor-pointer"
//               >
//                 {/* Vertical Accent */}
//                 <div className="md:col-span-1 hidden md:flex justify-center">
//                   <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#C8A24D]" />
//                 </div>

//                 {/* Content */}
//                 <div className="md:col-span-5">
//                   <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
//                     SAP Services
//                   </h3>

//                   <p className="text-[#475569] leading-relaxed">
//                     Comprehensive SAP consulting and implementation services including
//                     SAP S/4HANA, ECC support, MM, SD, FICO, PP, and system integrations,
//                     focused on operational efficiency and business transformation.
//                   </p>
//                 </div>

//                 {/* Tag Card */}
//                 <div
//                   className="md:col-span-6 bg-white rounded-2xl
//       border border-slate-200 p-10
//       shadow-[0_25px_60px_rgba(15,23,42,0.08)]
//       flex items-center justify-between"
//                 >
//                   <span className="text-base font-medium text-[#b44707] tracking-wide">
//                     SAP S/4HANA & Enterprise Consulting
//                   </span>

//                   <span className="text-[#1E3A8A] text-xl group-hover:translate-x-1 transition">
//                     →
//                   </span>
//                 </div>
//               </motion.div>


//             </div>
//           </div>

//           {/* Footer CTA (Compact) */}
//           <div className="mt-16">
//             <button
//               onClick={() => navigate("/services")}
//               className="group relative inline-flex items-center gap-4
//           px-14 py-4 rounded-full
//           bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0B1120]
//           text-white text-sm font-semibold tracking-[0.12em]
//           shadow-[0_25px_60px_rgba(15,23,42,0.45)]
//           hover:shadow-[0_35px_80px_rgba(30,58,138,0.55)]
//           transition-all duration-300 overflow-hidden"
//             >
//               {/* Gold shine */}
//               <span className="absolute inset-0 bg-gradient-to-r
//           from-transparent via-[#C8A24D]/20 to-transparent
//           translate-x-[-120%] group-hover:translate-x-[120%]
//           transition-transform duration-700" />

//               <span className="relative z-10 font-heading">Our Services</span>

//               <span className="relative z-10 text-[#C8A24D] group-hover:translate-x-1 transition">
//                 →
//               </span>
//             </button>
//           </div>

//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-14 text-white">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
//           <h2 className="text-2xl md:text-3xl font-bold">
//             Ready to Build Your Next Digital Product?
//           </h2>
//           <button
//             onClick={() => navigate("/contact")}
//             className="bg-white text-indigo-700 px-7 py-3 rounded-full font-semibold shadow hover:shadow-lg transition"
//           >
//             Get Started →
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// }



import React from "react";
import { useNavigate } from "react-router-dom";

const WebServices = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-3xl w-full text-center bg-white shadow-lg rounded-2xl p-8 md:p-12">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Staffing Services
        </h2>

        {/* Subheading */}
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Our staffing services section is currently under development.
        </p>

        {/* Highlight Box */}
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg p-4 mb-6">
          🚧 Under Construction 🚧
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm md:text-base">
          We are preparing to provide top-notch staffing solutions to help you
          find the right talent quickly and efficiently. Stay tuned!
        </p>

        {/* Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Contact Us
          </button>
        </div>

      </div>
    </section>
  );
};

export default WebServices;