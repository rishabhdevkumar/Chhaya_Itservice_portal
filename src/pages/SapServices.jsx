<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Sap1 from "../assets/images/sap.webp";
import Sap2 from "../assets/images/sap2.webp";

import {
  Package,
  Truck,
  Wallet,
  Settings,
  ShieldCheck,
  Wrench,
  Presentation,
  Code2,
  CheckCircle,
  ArrowRight,
  Layers,
  Headphones,
  SearchCheck,
  Workflow,
  Zap,
  RefreshCcw,
  ClipboardList,
  PencilRuler,
} from 'lucide-react';

export default function SapServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF2FF] font-sans pt-14">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white pt-32 pb-28">

        {/* Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-[#D4AF37]/20 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <span className="text-xs tracking-[0.4em] text-[#D4AF37] uppercase">
              Enterprise SAP Solutions
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
              Transform Your Business <br />
              with Intelligent <span className="text-blue-400">SAP Systems</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              End-to-end SAP consulting, implementation, and support services designed
              to optimize enterprise operations and drive scalable growth.
            </p>

            <div className="flex gap-4 mt-8 flex-wrap">
              <button
                onClick={() => navigate("/contact")}
                className="px-8 py-4 bg-white text-[#0B1220] rounded-full font-semibold hover:scale-105 transition"
              >
                Get Started →
              </button>


            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src={Sap1}
              alt="SAP"
              className="rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
            />

            <div className="absolute -bottom-6 -left-6 bg-white text-black p-5 rounded-xl shadow-xl">
              <p className="text-sm font-semibold">SAP S/4HANA Experts</p>
              <p className="text-xs text-gray-500">Implementation & Support</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT + IMAGE ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-16 items-stretch">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col h-full justify-between">

              {/* TOP CONTENT */}
              <div>
                <div className="inline-flex items-center px-4 py-1 rounded-full
            bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                  SAP Enterprise Consulting
                </div>

                <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#0B1220] leading-tight">
                  Driving{" "}
                  <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-blue-600 to-[#D4AF37]">
                    Enterprise Efficiency
                  </span>{" "}
                  Through SAP Solutions
                </h2>

                <p className="mt-6 text-[#475569] text-lg leading-relaxed">
                  We provide complete SAP solutions across functional and technical areas,
                  helping businesses streamline operations, improve decision-making,
                  and achieve scalable digital transformation.
                </p>
              </div>

              {/* BOTTOM IMAGE (ANCHOR) */}
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-transparent to-[#D4AF37]/20 blur-2xl rounded-3xl" />

                  <img
                    src={Sap2}
                    alt="SAP Process"
                    className="relative rounded-3xl shadow-2xl border border-white"
                  />
                </div>
              </div>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex flex-col h-full justify-between">

              {/* TOP HEADING */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                  What We Deliver
                </h3>

                <p className="text-[#0B1220] font-semibold text-xl mt-2">
                  Core SAP Capabilities
                </p>

                <p className="text-[#475569] text-sm mt-3 leading-relaxed">
                  We specialize in delivering end-to-end SAP services covering implementation,
                  optimization, integration, and continuous enterprise support.
                </p>
              </div>

              {/* BOTTOM LIST (ANCHOR) */}
              <div className="space-y-3">

                {[
                  {
                    title: "SAP Implementation & Support",
                    desc: "End-to-end SAP implementation with continuous support ensuring stability and performance.",
                  },
                  {
                    title: "Gap Analysis & Process Design",
                    desc: "Deep process analysis and optimized system design aligned with business goals.",
                  },
                  {
                    title: "Business Process Optimization",
                    desc: "Improving efficiency through streamlined workflows and automation.",
                  },
                  {
                    title: "Enterprise System Integration",
                    desc: "Seamless integration across multiple enterprise platforms and systems.",
                  },


                  // ➕ NEW CARD 2
                  {
                    title: "SAP Performance Optimization",
                    desc: "Enhancing system speed, reliability, and scalability through deep technical tuning and monitoring.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group flex gap-5 p-5 rounded-xl border border-[#E2E8F0]
              bg-[#F8FAFC] hover:bg-white
              hover:shadow-[0_15px_40px_rgba(15,23,42,0.10)]
              transition-all duration-300"
                  >

                    {/* NUMBER */}
                    <div className="w-10 h-10 rounded-full bg-white border border-[#E2E8F0]
                flex items-center justify-center text-[#0B1220] font-semibold
                group-hover:border-blue-300 group-hover:text-blue-600 transition">
                      {i + 1}
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className="text-[#0B1220] font-semibold group-hover:text-blue-600 transition">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

          </div>
        </div>
      </section>









      {/* ================= MODULES ================= */}
      <section className="py-24 bg-[#051139] text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header Section */}
          <div className="text-left mb-16">
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">What We Offer</p>
            <h2 className="text-4xl md:text-5xl font-bold  leading-tight max-w-fit">
              SAP Functional & Technical Modules for every stage of growth.
            </h2>
            <p className="text-slate-400 mt-6 max-w-fit text-lg">
              We provide deep expertise across core SAP modules to ensure seamless integration,
              operational efficiency, and business process optimization.
            </p>
          </div>

          {/* Grid: 4 columns on large devices (lg:grid-cols-4) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "MM", desc: "Efficient inventory and procurement management.", icon: <Package size={24} /> },
              { title: "SD", desc: "Optimized sales and distribution workflows.", icon: <Truck size={24} /> },
              { title: "FICO", desc: "Robust financial reporting and control.", icon: <Wallet size={24} /> },
              { title: "PP", desc: "Streamlined production planning processes.", icon: <Settings size={24} /> },
              { title: "QM", desc: "Quality assurance and compliance tracking.", icon: <ShieldCheck size={24} /> },
              { title: "PM", desc: "Plant maintenance and asset optimization.", icon: <Wrench size={24} /> },
              { title: "PS", desc: "Project system for enterprise planning.", icon: <Presentation size={24} /> },
              { title: "ABAP & BASIS", desc: "Technical backbone and customization.", icon: <Code2 size={24} /> }
            ].map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer overflow-hidden"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/20">
                  {m.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {m.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                  {m.desc}
                </p>

                {/* Hover Glow Line at bottom */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase bg-blue-50 px-4 py-2 rounded-full">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] tracking-tight mt-6">
              Comprehensive <span className="text-blue-600">SAP Solutions</span>
            </h2>
            <p className="text-[#475569] mt-6 text-lg leading-relaxed">
              We provide high-impact SAP services designed to streamline your business operations
              through functional precision and technical excellence.
            </p>
          </div>

          {/* Professional Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Functional Modules",
                desc: "End-to-end business process mapping and optimization across core enterprise modules like Finance, Sales, and Logistics.",
                points: ["MM - Inventory & Materials", "SD - Sales & Distribution", "FICO - Finance & Control", "PP - Production Planning", "QM - Quality Management"],
                icon: <Settings className="text-blue-600" size={24} />,
                accent: "border-t-blue-600"
              },
              {
                title: "Technical Services",
                desc: "Maintaining a robust SAP backbone through custom ABAP development, Basis administration, and seamless system integrations.",
                points: ["ABAP Custom Development", "SAP BASIS Administration", "System Monitoring", "Custom API Integrations", "Security & Patching"],
                icon: <Code2 className="text-indigo-600" size={24} />,
                accent: "border-t-indigo-600"
              },
              {
                title: "Implementation & Support",
                desc: "Reliable post-go-live support and strategic gap analysis to ensure your SAP environment evolves with your growth.",
                points: ["24/7 Managed Support", "Gap Analysis & Process Design", "New Process Engineering", "System Upgrades", "User Training"],
                icon: <ShieldCheck className="text-emerald-600" size={24} />,
                accent: "border-t-emerald-600"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 border-t-4 ${item.accent}`}
              >
                {/* Icon Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-slate-50 rounded-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1220] tracking-tight">{item.title}</h3>
                </div>

                {/* Service Description */}
                <p className="text-slate-500 mb-8 text-sm leading-relaxed min-h-[60px]">
                  {item.desc}
                </p>

                {/* Capability List */}
                <div className="space-y-4">
                  {item.points.map((point, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/item">
                      <CheckCircle className="text-blue-500/40 group-hover/item:text-blue-600 transition-colors shrink-0" size={18} />
                      <span className="text-slate-700 text-sm font-medium tracking-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button
  onClick={() => navigate("/contact")}
  className="mt-10 text-blue-600 text-sm font-bold flex items-center gap-2 group transition-all"
>
  Let's Connect
  <ArrowRight
    className="group-hover:translate-x-1 transition-transform"
    size={16}
  />
</button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      <section className="relative min-h-screen lg:h-screen flex items-center justify-center py-16 px-6 overflow-hidden bg-[#051139] font-['Instrument_Sans',sans-serif]">

        {/* PREMIUM BACKGROUND AMBIENCE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-600/15 blur-[140px] rounded-full opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/10 blur-[160px] rounded-full opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* LEFT SIDE: STRATEGIC CONTENT */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase"
                >
                  Enterprise Excellence
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95]">
                  Engineering <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">Digital Value.</span>
                </h2>

                <p className="text-slate-400 text-xl leading-relaxed font-light max-w-lg">
                  We architect resilient enterprise ecosystems that drive global manufacturing and infrastructure.
                </p>
              </div>

              {/* STRATEGIC STATS */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                {[
                  { label: "Client Retention", val: "98%" },
                  { label: "Global Regions", val: "15+" },
                  { label: "Core Expertise", val: "SAP S/4" },
                  { label: "Expert Support", val: "24/7" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: CARDS (No scrollbar, New Hover) */}
            <div className="lg:col-span-7 space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar py-4">
              {[
                { name: "KR Pulp and Papers Ltd", desc: "SAP S/4HANA Process Enhancement & Support improving automation.", tag: "Manufacturing" },
                { name: "Pakka Ltd", desc: "SAP ECC6 enhancements across Purchase, PM & PP modules.", tag: "Enterprise" },
                { name: "Garden Reach Shipbuilders", desc: "BIBO revamp project executed via subcontract performance.", tag: "Defense" },
                { name: "Tata Metaliks Ltd", desc: "E-Invoice implementation across MM, SD & PIPO efficiency.", tag: "Steel Industry" },
                { name: "Thimphu TechPark (Bhutan)", desc: "SAP BW implementation delivering advanced analytics.", tag: "International" },
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  {/* NEW HOVER: BORDER REPLACEMENT ANIMATION */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-transparent transition-all duration-300" />
                  <div className="absolute inset-0 rounded-2xl p-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', maskComposite: 'exclude', WebkitMaskComposite: 'xor' }} />

                  {/* CARD BODY */}
                  <div className="relative flex items-center justify-between gap-8 p-8 rounded-2xl bg-blue-500/[0.03] backdrop-blur-2xl group-hover:bg-blue-600/[0.08] group-hover:translate-x-2 transition-all duration-500 overflow-hidden">

                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors mb-2">
                        {client.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2 max-w-md">
                        {client.desc}
                      </p>
                    </div>

                    {/* SECTOR FIELD - FULLY RIGHT ALIGNED */}
                    <div className="flex flex-col items-end shrink-0">
                      <span className="text-[10px] tracking-[0.25em] text-blue-400 font-black px-4 py-1.5 rounded-full border border-blue-400/20 bg-blue-400/5 uppercase group-hover:border-blue-400/50 transition-all duration-500">
                        {client.tag}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
    /* Hide scrollbar for Chrome, Safari and Opera */
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    /* Hide scrollbar for IE, Edge and Firefox */
    .no-scrollbar {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `}</style>
      </section>







      {/* ================= SERVICES ================= */}
     {/* ================= SERVICES ================= */}
<section className="bg-white py-14">
  <div className="max-w-7xl mx-auto px-6">

    {/* ================= PREMIUM HEADING ================= */}
    <div className="text-center max-w-3xl mx-auto mb-16">

      {/* BADGE */}
      <div className="inline-flex items-center px-4 py-1 rounded-full
        bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
        Enterprise SAP Consulting
      </div>

      {/* TITLE */}
      <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1220] leading-tight">
        Our{" "}
        <span className="text-transparent bg-clip-text
          bg-gradient-to-r from-blue-600 via-[#0B1220] to-[#D4AF37]">
          SAP Services
        </span>
      </h2>

      {/* UNDERLINE */}
      <div className="w-24 h-[3px] mx-auto mt-4 rounded-full
        bg-gradient-to-r from-blue-500 to-[#D4AF37]" />

      {/* SUBTITLE */}
      <p className="text-[#475569] mt-6 text-lg leading-relaxed">
        Comprehensive SAP services covering implementation, support, and continuous
        improvement tailored to enterprise business needs.
      </p>

    </div>

    {/* ================= GRID ================= */}
    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "SAP Implementation",
          desc: "Full-cycle SAP implementation ensuring alignment with business goals, system architecture, and long-term scalability.",
          icon: Layers,
        },
        {
          title: "SAP Support (24/7)",
          desc: "Continuous monitoring, issue resolution, and system maintenance to ensure stability and minimal downtime.",
          icon: Headphones,
        },
        {
          title: "Gap Analysis",
          desc: "Identifying operational gaps and recommending strategic improvements to optimize system performance.",
          icon: SearchCheck,
        },
        {
          title: "Process Design",
          desc: "Designing efficient workflows aligned with SAP best practices and enterprise requirements.",
          icon: Workflow,
        },
        {
          title: "SAP Enhancements",
          desc: "Custom enhancements and feature upgrades to meet evolving business and technical needs.",
          icon: Zap,
        },
        {
          title: "S/4HANA Migration",
          desc: "Smooth migration to SAP S/4HANA ensuring data integrity, performance, and future readiness.",
          icon: RefreshCcw,
        },
      ].map((s, i) => {
        const Icon = s.icon;

        return (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-2xl bg-white
              border border-[#E2E8F0] p-8 overflow-hidden
              shadow-[0_10px_30px_rgba(0,0,0,0.08)]
              hover:shadow-[0_30px_80px_rgba(0,0,0,0.18)]
              hover:border-blue-300 transition-all duration-300"
          >

            {/* HOVER GLOW */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500
              bg-gradient-to-br from-blue-50/60 via-transparent to-[#D4AF37]/10 pointer-events-none" />

            {/* ICON */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-white border border-slate-200 text-[#0B1220]
              group-hover:text-blue-700 group-hover:border-blue-300
              transition-all duration-300 shadow-sm">
              <Icon size={20} />
            </div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-[#0B1220] mt-5
              group-hover:text-blue-600 transition-colors duration-300">
              {s.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-sm text-[#475569] mt-3 leading-relaxed">
              {s.desc}
            </p>

          </motion.div>
        );
      })}

    </div>

  </div>
</section>



      {/* ================= PROCESS ================= */}
      ;

      <section className="bg-[#0B1220] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
            Our SAP Delivery Process
          </h2>

          {/* WRAPPER */}
          <div className="relative">

            {/* TOP FLOW LINE (desktop only) */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-white/10" />

            {/* ANIMATED FLOW LINE */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-[slide_3s_linear_infinite]" />
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-4 gap-12 relative z-10">

              {[
                {
                  title: "Requirement Analysis",
                  desc: "Understanding business needs, gathering requirements, and defining scope.",
                  icon: ClipboardList,
                },
                {
                  title: "System Design",
                  desc: "Designing scalable SAP architecture aligned with enterprise workflows.",
                  icon: PencilRuler,
                },
                {
                  title: "Implementation",
                  desc: "Executing SAP configuration, development, and integration processes.",
                  icon: Settings,
                },
                {
                  title: "Support & Optimization",
                  desc: "Continuous monitoring, support, and performance optimization.",
                  icon: Headphones,
                },
              ].map((step, i) => {
                const Icon = step.icon;

                return (
                  <div key={i} className="text-center relative">

                    {/* NUMBER ON LINE */}
                    <div className="relative z-10 flex justify-center md:block">
                      <div className="w-12 h-12 rounded-full bg-white text-[#0B1220]
                  font-semibold flex items-center justify-center
                  mx-auto shadow-md">
                        {i + 1}
                      </div>
                    </div>

                    {/* ICON (BELOW LINE) */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20
                  flex items-center justify-center text-[#D4AF37]
                  hover:bg-[#D4AF37] hover:text-[#0B1220]
                  transition-all duration-300">
                        <Icon size={20} />
                      </div>
                    </div>

                    {/* TITLE */}
                    <h3 className="mt-5 text-lg font-semibold">
                      {step.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-slate-400 mt-3 max-w-[240px] mx-auto leading-relaxed">
                      {step.desc}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* ANIMATION */}
        <style>
          {`
      @keyframes slide {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}
        </style>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-[#0B1220] to-[#1E40AF] text-white">
        <h2 className="text-4xl font-semibold">
          Ready to Transform Your SAP Systems?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-10 py-4 bg-white text-[#0B1220] rounded-full shadow-lg hover:scale-105 transition"
        >
          Get Started →
        </button>
      </section>

    </div>
  );
}
=======
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
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
