// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import Erp1 from "../assets/images/erp1.webp";
// import Erp2 from "../assets/images/erp2.webp";
// import Erp3 from "../assets/images/erp3.webp";
// import { FaCog, FaDatabase, FaHandsHelping, FaArrowRight } from "react-icons/fa";
// import { CheckCircle, Settings, Code2, Server } from "lucide-react";

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

// export default function ErpServices() {
//   const navigate = useNavigate();

//   return (
//     <div className="w-full overflow-x-hidden font-sans bg-gradient-to-l from-slate-100 to-slate-200">

//       {/* HERO SECTION */}
//       <section className="bg-gradient-to-r from-blue-50 to-blue-100 pt-28">
//         <div className="max-w-7xl mx-auto px-6 py-28 md:py-32 flex flex-col-reverse md:flex-row items-center gap-12">

//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="md:w-1/2 flex flex-col gap-6"
//           >
//             <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight font-heading tracking-wide">
//               Power Your Business with <span className="text-orange-400">Web ERP Solutions</span>
//             </h1>

//             <p className="text-gray-600 text-base leading-relaxed font-heading">
//               Chhaya IT Services delivers secure, scalable, and fully customized Web ERP
//               solutions that centralize operations, improve visibility, and enable
//               data-driven business decisions.
//             </p>

//             <button
//               onClick={() => navigate("/contact")}
//               className="mt-6 px-7 py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold rounded-lg shadow-md transition duration-300 w-fit font-body"
//             >
//               Contact Our ERP Experts
//             </button>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1 }}
//             className="md:w-1/2 flex justify-center"
//           >
//             <PremiumImage src={Erp1} alt="Web Development Services" />
//           </motion.div>
//         </div>
//       </section>

//       {/* ABOUT ERP SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-16 md:py-28">

//         <div className="text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
//             <span className="text-orange-500 font-extrabold"> Web ERP </span> Consulting & Solutions
//           </h2>
//           <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-blue-400"></div>
//         </div>

//         <div className="grid md:grid-cols-2 gap-16 items-center">

//           <motion.div
//                       initial={{ opacity: 0, y: 20 }}
//                       whileInView={{ opacity: 1, y: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ duration: 0.8 }}
//                     >
//                       <PremiumImage src={Erp2} alt="Web Development Overview" />
//                     </motion.div>
          

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-8"
//           >
//             <p className="text-lg text-slate-500 font-body">
//               Our Web ERP solutions integrate finance, HR, inventory, sales,
//               procurement, and operations into a centralized platform
//               tailored to your unique business workflows.
//             </p>

//             <div className="h-px w-full bg-slate-300"></div>

//             <div className="grid gap-6">

//               <div className="flex gap-4">
//                 <CheckCircle className="h-6 w-6 text-blue-700 mt-1" />
//                 <p className="text-lg text-slate-500 font-body">
//                   <span className="font-medium text-slate-900">
//                     Custom ERP Development
//                   </span>{" "}
//                   designed around your business processes.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Server className="h-6 w-6 text-blue-700 mt-1" />
//                 <p className="text-lg text-slate-500 font-body">
//                   <span className="font-medium text-slate-900">
//                     Centralized Data Management
//                   </span>{" "}
//                   with secure role-based access.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Code2 className="h-6 w-6 text-blue-700 mt-1" />
//                 <p className="text-lg text-slate-500 font-body">
//                   <span className="font-medium text-slate-900">
//                     Modular ERP Architecture
//                   </span>{" "}
//                   for finance, HR, CRM, inventory, and reporting.
//                 </p>
//               </div>

//               <div className="flex gap-4">
//                 <Settings className="h-6 w-6 text-blue-700 mt-1" />
//                 <p className="text-lg text-slate-500 font-body">
//                   <span className="font-medium text-slate-900">
//                     Ongoing ERP Support
//                   </span>{" "}
//                   ensuring performance, scalability, and security.
//                 </p>
//               </div>

//             </div>

//             <p className="text-lg text-slate-500 leading-relaxed pt-2 font-body">
//               Our ERP solutions help organizations improve efficiency,
//               reduce operational costs, and gain real-time business insights.
//             </p>

//           </motion.div>
//         </div>
//       </section>

//       {/* DETAILED SERVICES */}
//       <section className="bg-white py-24 md:py-20">
//         <div className="max-w-7xl mx-auto px-6 text-center">

//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 font-heading">
//             Our Web ERP Capabilities
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8">

//             <motion.div className="bg-gray-200 rounded-xl p-8 shadow hover:-translate-y-2 transition">
//               <FaCog className="text-4xl text-blue-700 mx-auto mb-5" />
//               <h3 className="text-xl font-semibold text-blue-800 mb-3">
//                 Process Automation
//               </h3>
//               <p className="text-gray-700">
//                 Automating workflows, approvals, and enterprise operations.
//               </p>
//             </motion.div>

//             <motion.div className="bg-gray-200 rounded-xl p-8 shadow hover:-translate-y-2 transition">
//               <FaDatabase className="text-4xl text-blue-700 mx-auto mb-5" />
//               <h3 className="text-xl font-semibold text-blue-800 mb-3">
//                 Reporting & Analytics
//               </h3>
//               <p className="text-gray-700">
//                 Real-time dashboards and business intelligence insights.
//               </p>
//             </motion.div>

//             <motion.div className="bg-gray-200 rounded-xl p-8 shadow hover:-translate-y-2 transition">
//               <FaHandsHelping className="text-4xl text-blue-700 mx-auto mb-5" />
//               <h3 className="text-xl font-semibold text-blue-800 mb-3">
//                 ERP Support & Optimization
//               </h3>
//               <p className="text-gray-700">
//                 Continuous upgrades, enhancements, and performance tuning.
//               </p>
//             </motion.div>

//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid md:grid-cols-2 gap-16 items-center">

//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <img
//             src={Erp3}
//             alt="ERP Benefits"
//             className="w-full rounded-2xl border border-slate-200 shadow-[0_30px_90px_rgba(15,23,42,0.35)]"
//             loading="lazy"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//         >
//           <div className="mb-8">
//             <span className="inline-block text-sm font-semibold tracking-widest text-blue-600 uppercase mb-2">
//               Trusted ERP Partner
//             </span>

//             <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
//               Why Choose <span className="text-blue-600">Our ERP Solutions</span>
//             </h2>
//           </div>

//           <div className="space-y-5">
//             <p className="text-slate-700 text-lg">✔ Tailor-made ERP platforms</p>
//             <p className="text-slate-700 text-lg">✔ Scalable & secure architecture</p>
//             <p className="text-slate-700 text-lg">✔ Seamless system integration</p>
//             <p className="text-slate-700 text-lg">✔ Long-term support & maintenance</p>
//           </div>
//         </motion.div>
//       </section>

//      <section className="relative py-24 md:py-32 bg-[#0B1120] text-white overflow-hidden">

//   {/* Subtle Grid Background */}
//   <div className="absolute inset-0 opacity-[0.08]
//     bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),
//         linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)]
//     bg-[size:48px_48px]" />

//   <div className="relative max-w-7xl mx-auto px-6">

//     <div className="grid lg:grid-cols-12 gap-16 items-start">

//       {/* LEFT – TITLE + VALUE STACK */}
//       <div className="lg:col-span-5 space-y-12">

//         {/* Heading */}
//         <div>
//           <span className="text-xs uppercase tracking-[0.35em] text-[#C8A24D]">
//             Web ERP Services
//           </span>

//           <h2 className="mt-6 text-4xl md:text-5xl font-semibold leading-tight">
//             Web-Based <br />
//             <span className="text-indigo-400">Enterprise ERP Platforms</span>
//           </h2>

//           <p className="mt-8 text-slate-300 text-lg leading-relaxed max-w-md">
//             Customized web ERP solutions designed with enterprise architecture
//             principles to digitize, integrate, and control core business
//             processes across the organization.
//           </p>
//         </div>

//         {/* Value Stack */}
//         <div className="space-y-6 border-l border-white/10 pl-6">

//           <div>
//             <p className="text-sm uppercase tracking-widest text-slate-400">
//               Architecture
//             </p>
//             <p className="mt-1 text-base text-white">
//               ERP-grade, process-driven system design
//             </p>
//           </div>

//           <div>
//             <p className="text-sm uppercase tracking-widest text-slate-400">
//               Integration
//             </p>
//             <p className="mt-1 text-base text-white">
//               SAP S/4HANA & API-based connectivity
//             </p>
//           </div>

//           <div>
//             <p className="text-sm uppercase tracking-widest text-slate-400">
//               Scalability
//             </p>
//             <p className="mt-1 text-base text-white">
//               Multi-location, multi-entity ready
//             </p>
//           </div>

//         </div>

//       </div>

//       {/* RIGHT – PROCESS STACK */}
//       <div className="lg:col-span-7 space-y-10">

//         {[
//           {
//             icon: "🧩",
//             title: "Modular ERP Architecture",
//             desc: "Configurable modules aligned with organizational structure, approval hierarchy, and business rules."
//           },
//           {
//             icon: "🔐",
//             title: "Enterprise Security & Access Control",
//             desc: "Role-based authorization, approval workflows, and audit-ready access governance."
//           },
//           {
//             icon: "🔗",
//             title: "ERP & SAP Integrations",
//             desc: "API-based integration with SAP S/4HANA, accounting systems, CRMs, and third-party platforms."
//           },
//           {
//             icon: "📊",
//             title: "Real-Time MIS & Dashboards",
//             desc: "Management dashboards and operational reports for finance, sales, procurement, and projects."
//           },
//           {
//             icon: "☁️",
//             title: "Cloud & On-Premise Deployment",
//             desc: "Secure deployment options supporting cloud, hybrid, or on-premise infrastructure."
//           },
//           {
//             icon: "⚙️",
//             title: "Process Automation",
//             desc: "End-to-end digitization of finance, procurement, HR, inventory, and operational workflows."
//           }
//         ].map((item, i) => (
//           <div key={i} className="flex gap-6 items-start">

//             <div className="h-11 w-11 rounded-lg
//               bg-white/10 backdrop-blur
//               flex items-center justify-center
//               text-xl">
//               {item.icon}
//             </div>

//             <div className="pb-10 border-b border-white/10 w-full">
//               <h4 className="text-lg font-semibold mb-2">
//                 {item.title}
//               </h4>
//               <p className="text-slate-400 leading-relaxed max-w-xl">
//                 {item.desc}
//               </p>
//             </div>

//           </div>
//         ))}

//       </div>

//     </div>

//   </div>
// </section>



//       {/* SEE MORE SERVICES */}
//                  <section className="relative bg-white py-20 font-[Inter] overflow-hidden">
     
//                      {/* Premium background behind services */}
//                      <div className="absolute inset-x-0 top-[300px] h-[480px] 
//        bg-gradient-to-br from-[#EEF2FF] via-[#F8FAFC] to-[#EEF2FF]" />
     
//                      <div className="relative max-w-7xl mx-auto px-6">
     
//                          {/* Header */}
//                          <div className="grid md:grid-cols-12 gap-12 mb-16">
//                              <div className="md:col-span-5">
//                                  <span className="block text-xs uppercase tracking-[0.35em] text-[#C8A24D] font-semibold mb-4">
//                                      Our Capabilities
//                                  </span>
     
//                                  <h2 className="text-4xl md:text-5xl font-semibold leading-tight
//      text-transparent bg-clip-text
//      bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0F172A]">
//                                      Extended <br /> Service Portfolio
//                                  </h2>
     
//                              </div>
     
//                              <div className="md:col-span-7 flex items-end">
//                                  <p className="text-lg text-[#475569] leading-relaxed max-w-xl">
//                                      Premium digital and enterprise services designed as strategic
//                                      extensions to your core SAP and IT operations.
//                                  </p>
//                              </div>
//                          </div>
     
//                          {/* Services Wrapper */}
//                          <div className="relative rounded-[32px] 
//          bg-white/70 backdrop-blur-xl
//          border border-slate-200
//          shadow-[0_40px_90px_rgba(15,23,42,0.12)]
//          p-16">
     
//                              <div className="space-y-16">
     
//                                  {/* Service 1 */}
//                                  <motion.div
//                                      whileHover={{ x: 8 }}
//                                      transition={{ duration: 0.3 }}
//                                      onClick={() => navigate("/services/web-development")}
//                                      className="group grid md:grid-cols-12 gap-12 cursor-pointer"
//                                  >
//                                      <div className="md:col-span-1 hidden md:flex justify-center">
//                                          <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#C8A24D]" />
//                                      </div>
     
//                                      <div className="md:col-span-5">
//                                          <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
//                                              Web Development
//                                          </h3>
     
//                                          <p className="text-[#475569] leading-relaxed">
//                                              Secure, scalable, and performance-driven web applications
//                                              engineered with modern full-stack technologies and
//                                              enterprise-grade architecture.
//                                          </p>
//                                      </div>
     
//                                      <div className="md:col-span-6 bg-white rounded-2xl
//                border border-slate-200 p-10
//                shadow-[0_25px_60px_rgba(15,23,42,0.08)]
//                flex items-center justify-between">
//                                          <span className="text-base font-medium text-[#e74b0d] tracking-wide">
//                                              Digital Engineering
//                                          </span>
     
//                                          <span className="text-[#1E3A8A] text-xl group-hover:translate-x-1 transition">
//                                              →
//                                          </span>
//                                      </div>
//                                  </motion.div>
     
//                                  {/* Service 2 */}
//                                  {/* Service – SAP Services */}
//                                                <motion.div
//                                                  whileHover={{ x: 8 }}
//                                                  transition={{ duration: 0.3 }}
//                                                  onClick={() => navigate("/services/sap")}
//                                                  className="group grid md:grid-cols-12 gap-12 cursor-pointer"
//                                                >
//                                                  {/* Vertical Accent */}
//                                                  <div className="md:col-span-1 hidden md:flex justify-center">
//                                                    <div className="h-full w-[3px] rounded-full bg-gradient-to-b from-[#1E3A8A] to-[#C8A24D]" />
//                                                  </div>
                                 
//                                                  {/* Content */}
//                                                  <div className="md:col-span-5">
//                                                    <h3 className="text-2xl font-semibold text-[#1E3A8A] mb-3">
//                                                      SAP Services
//                                                    </h3>
                                 
//                                                    <p className="text-[#475569] leading-relaxed">
//                                                      Comprehensive SAP consulting and implementation services including
//                                                      SAP S/4HANA, ECC support, MM, SD, FICO, PP, and system integrations,
//                                                      focused on operational efficiency and business transformation.
//                                                    </p>
//                                                  </div>
                                 
//                                                  {/* Tag Card */}
//                                                  <div
//                                                    className="md:col-span-6 bg-white rounded-2xl
//                                        border border-slate-200 p-10
//                                        shadow-[0_25px_60px_rgba(15,23,42,0.08)]
//                                        flex items-center justify-between"
//                                                  >
//                                                    <span className="text-base font-medium text-[#b44707] tracking-wide">
//                                                      SAP S/4HANA & Enterprise Consulting
//                                                    </span>
                                 
//                                                    <span className="text-[#1E3A8A] text-xl group-hover:translate-x-1 transition">
//                                                      →
//                                                    </span>
//                                                  </div>
//                                                </motion.div>
     
//                              </div>
//                          </div>
     
//                          {/* Footer CTA (Compact) */}
//                          <div className="mt-16">
//                              <button
//                                  onClick={() => navigate("/services")}
//                                  className="group relative inline-flex items-center gap-4
//        px-14 py-4 rounded-full
//        bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#0B1120]
//        text-white text-sm font-semibold tracking-[0.12em]
//        shadow-[0_25px_60px_rgba(15,23,42,0.45)]
//        hover:shadow-[0_35px_80px_rgba(30,58,138,0.55)]
//        transition-all duration-300 overflow-hidden"
//                              >
//                                  {/* Gold shine */}
//                                  <span className="absolute inset-0 bg-gradient-to-r
//        from-transparent via-[#C8A24D]/20 to-transparent
//        translate-x-[-120%] group-hover:translate-x-[120%]
//        transition-transform duration-700" />
     
//                                  <span className="relative z-10 font-heading">Our Services</span>
     
//                                  <span className="relative z-10 text-[#C8A24D] group-hover:translate-x-1 transition">
//                                      →
//                                  </span>
//                              </button>
//                          </div>
     
//                      </div>
//                  </section>


//       {/* CTA SECTION */}
//       <section className="relative bg-gradient-to-r from-blue-700 to-indigo-700 py-14 md:py-18 text-white">
//         <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">

//           {/* Content */}
//           <div className="max-w-3xl">
//             <h2 className="text-2xl md:text-3xl font-bold leading-tight">
//               Ready to Transform Your SAP Operations?
//             </h2>
//             <p className="mt-3 text-blue-100 text-sm md:text-base">
//               Partner with Chhaya IT Services to streamline processes and drive measurable business outcomes.
//             </p>
//           </div>

//           {/* CTA */}
//           <button
//             onClick={() => navigate("/contact")}
//             className="inline-flex items-center gap-2 px-7 py-3
//                                rounded-full bg-white text-blue-700 font-semibold
//                                shadow-md hover:shadow-lg
//                                hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap"
//           >
//             Get Started
//             <span className="text-blue-500 transition group-hover:translate-x-1">
//               →
//             </span>
//           </button>

//         </div>
//       </section>

//     </div>
//   );
// }

import React from "react";
import { useNavigate } from "react-router-dom";

const ErpServices = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full min-h-[60vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <div className="max-w-3xl w-full text-center bg-white shadow-lg rounded-2xl p-8 md:p-12">
        
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Web-Based Business Solutions
        </h2>

        <p className="text-gray-600 text-sm md:text-base mb-6">
          Our ERP services section is currently under development.
        </p>

        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 rounded-lg p-4 mb-6">
          🚧 Under Construction 🚧
        </div>

        <p className="text-gray-500 text-sm md:text-base">
          We are working to bring you advanced web-based ERP solutions including
          sales & dealer management and production planning tools. Stay tuned!
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

export default ErpServices;