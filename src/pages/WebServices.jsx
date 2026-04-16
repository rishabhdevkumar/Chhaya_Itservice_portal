<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Web1 from "../assets/images/hero1.webp";
import Web2 from "../assets/images/hero2.webp";

import {
  Layers,
  Code2,
  Workflow,
  Zap,
  RefreshCcw,
  Headphones,
  Users,
  Briefcase,
  Database,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  PencilRuler,
  Settings
} from "lucide-react";

export default function WebServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF2FF] font-sans pt-14">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white pt-32 pb-28">

  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0">
    <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />
    <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />
  </div>

  <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

    {/* ================= LEFT ================= */}
    <div>
      <span className="text-xs tracking-[0.4em] text-blue-400 uppercase">
        Staffing Services
      </span>

      <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
        Skilled <br />
        <span className="text-blue-400">SAP & IT Manpower</span>
      </h1>

      <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
        We provide highly skilled SAP consultants and web developers
        to support enterprise projects with flexibility, expertise,
        and scalable workforce solutions.
      </p>

      <button
        onClick={() => navigate("/contact")}
        className="mt-8 px-8 py-4 bg-white text-[#0B1220] rounded-full font-semibold hover:scale-105 transition"
      >
        Hire Experts →
      </button>
    </div>

    {/* ================= RIGHT IMAGE (FIXED) ================= */}
    <div className="mt-12 md:mt-0">
      <div className="relative">

        {/* GLOW EFFECT */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-transparent to-indigo-200/30 blur-2xl rounded-3xl" />

        {/* IMAGE CONTAINER (IMPORTANT FIX) */}
        <div className="bg-white/90 backdrop-blur rounded-3xl p-4 border border-white/20 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">

          <img
            src={Web1}
            alt="Staffing Experts"
            className="
              w-full 
              h-auto
              max-h-[300px] sm:max-h-[380px] md:max-h-[450px] lg:max-h-[520px]
              object-contain
              mx-auto
              rounded-2xl
              transition-transform duration-500 hover:scale-[1.02]
            "
          />

        </div>

      </div>
    </div>

  </div>
</section>


      {/* ================= ABOUT ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-stretch">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col h-full justify-between">

              {/* TOP CONTENT */}
              <div>
                <div className="inline-flex items-center px-4 py-1 rounded-full
            bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                  Staffing & Resource Solutions
                </div>

                <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#0B1220] leading-tight">
                  Providing{" "}
                  <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-blue-600 to-indigo-500">
                    Skilled Manpower
                  </span>{" "}
                  for Enterprise Projects
                </h2>

                <p className="mt-6 text-[#475569] text-lg leading-relaxed">
                  Our staffing services focus on delivering highly skilled SAP functional,
                  technical consultants, and web developers to support enterprise-level projects.
                  We ensure the right talent is aligned with your business goals for maximum efficiency.
                </p>


              </div>

              {/* BOTTOM IMAGE */}
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-transparent to-indigo-200/30 blur-2xl rounded-3xl" />

                  <img
                    src={Web2}
                    alt="Staffing Services"
                    className="relative rounded-3xl shadow-2xl border border-white"
                  />
                </div>
              </div>

            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex flex-col h-full justify-between ">

              {/* TOP HEADING */}
              <div>
                <h3 className="text-sm uppercase tracking-wider text-blue-600 font-semibold">
                  What We Deliver
                </h3>

                <p className="text-[#0B1220] font-semibold text-xl mt-2">
                  Staffing Capabilities
                </p>

                <p className="text-[#475569] text-sm mt-3 leading-relaxed">
                  We provide skilled manpower across SAP and web technologies,
                  ensuring businesses get the right talent for development,
                  implementation, and operational support.
                </p>
              </div>

              {/* BOTTOM LIST */}
              <div className="space-y-3 pt-4">

                {[
                  {
                    title: "SAP Functional & Technical Experts",
                    desc: "Skilled professionals across SAP modules including MM, SD, FICO, ABAP, and BASIS with real project experience.",
                  },
                  {
                    title: "Web Developers (ASP.NET & PHP)",
                    desc: "Experienced developers for building and maintaining enterprise web applications using ASP.NET, PHP, MySQL, and MS-SQL.",
                  },
                  {
                    title: "Consultant & User-Level Resources",
                    desc: "We provide both high-level consultants and operational-level users based on your project requirements.",
                  },
                  {
                    title: "Flexible Manpower Deployment",
                    desc: "On-demand hiring for short-term, long-term, or project-based staffing with quick onboarding.",
                  },
                  {
                    title: "Enterprise Project Support",
                    desc: "Reliable staffing support for SAP implementation, upgrades, and ongoing system management.",
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





      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 bg-[#051139] text-white">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold mb-16">
            Our Staffing Capabilities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "SAP Consultants",
                desc: "Functional & technical experts across MM, SD, FICO, ABAP & BASIS.",
                icon: <Users size={22} />
              },
              {
                title: "Web Developers",
                desc: "ASP.NET, PHP developers for enterprise web applications.",
                icon: <Code2 size={22} />
              },
              {
                title: "Database Experts",
                desc: "MySQL & MS-SQL specialists for data-driven applications.",
                icon: <Database size={22} />
              },
              {
                title: "Project Staffing",
                desc: "Flexible manpower for ongoing enterprise projects.",
                icon: <Briefcase size={22} />
              },
              {
                title: "Consultant Level",
                desc: "Highly experienced SAP & IT consultants.",
                icon: <Layers size={22} />
              },
              {
                title: "User Level",
                desc: "Operational-level professionals for system usage.",
                icon: <Workflow size={22} />
              },
              {
                title: "On-Demand Hiring",
                desc: "Quick resource deployment based on requirements.",
                icon: <Zap size={22} />
              },
              {
                title: "Support Staffing",
                desc: "Continuous manpower for maintenance & support.",
                icon: <Headphones size={22} />
              }
            ].map((item, i) => (
              <motion.div key={i} whileHover={{ y: -8 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10">

                <div className="mb-4 text-blue-400">{item.icon}</div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-slate-400 mt-2">{item.desc}</p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* ================= STAFFING EXPERTISE ================= */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase bg-blue-50 px-4 py-2 rounded-full">
              Our Expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] tracking-tight mt-6">
              Professional <span className="text-blue-600">Staffing Solutions</span>
            </h2>

            <p className="text-[#475569] mt-6 text-lg leading-relaxed">
              We provide highly skilled SAP consultants and web developers to support your business
              operations with the right expertise, ensuring efficiency, scalability, and project success.
            </p>
          </div>

          {/* SAME GRID UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "SAP Functional & Technical Experts",
                desc: "Providing skilled SAP professionals to support implementation, customization, and enterprise operations.",
                points: [
                  "SAP Functional Consultants (MM,SD,FICO,PP)",
                  "SAP Technical Experts (ABAP, BASIS)",
                  "System Configuration & Support",
                  "Enterprise Process Optimization",
                  "Short-term & Long-term Deployment"
                ],
                icon: <Layers className="text-blue-600" size={24} />,
                accent: "border-t-blue-600"
              },
              {
                title: "Web & Application Developers",
                desc: "Dedicated developers for building and maintaining enterprise web applications and ERP systems using modern technologies.",
                points: [
                  "ASP.NET Development",
                  "PHP & MySQL Solutions",
                  "MS-SQL Based Applications",
                  "Web Application Development",
                  "ERP & Portal Integration"
                ],
                icon: <Workflow className="text-indigo-600" size={24} />,
                accent: "border-t-indigo-600"
              },
              {
                title: "Consulting & Support Staffing",
                desc: "Flexible staffing models providing both consultant-level experts and user-level professionals to match your business needs.",
                points: [
                  "Consultant-Level Manpower",
                  "End-User Support Staff",
                  "Project-Based Hiring",
                  "On-site & Remote Resources",
                  "Ongoing Maintenance & Support"
                ],
                icon: <Headphones className="text-emerald-600" size={24} />,
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
                  <h3 className="text-2xl font-bold text-[#0B1220] tracking-tight">
                    {item.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-slate-500 mb-8 text-sm leading-relaxed min-h-[60px]">
                  {item.desc}
                </p>

                {/* Points */}
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

                {/* Button */}
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


      {/* ================= PROJECTS ================= */}
      {/* ================= STAFFING PROJECTS ================= */}
      <section className="relative min-h-screen lg:h-screen flex items-center justify-center py-16 px-6 overflow-hidden bg-[#051139] font-['Instrument_Sans',sans-serif]">

        {/* BACKGROUND AMBIENCE */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[700px] h-[700px] bg-blue-600/15 blur-[140px] rounded-full opacity-50" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-indigo-500/10 blur-[160px] rounded-full opacity-50" />
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-12 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
              <div className="space-y-6">

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-400/30 bg-blue-400/10 text-blue-400 text-xs font-bold tracking-[0.2em] uppercase"
                >
                  Staffing Excellence
                </motion.div>

                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95]">
                  Delivering <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
                    Skilled Workforce.
                  </span>
                </h2>

                <p className="text-slate-400 text-xl leading-relaxed font-light max-w-lg">
                  We provide experienced SAP consultants and web developers to support enterprise
                  projects with the right expertise, ensuring efficiency, scalability, and success.
                </p>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                {[
                  { label: "Consultants Deployed", val: "100+" },
                  { label: "Active Clients", val: "20+" },
                  { label: "Expert Domains", val: "SAP & Web" },
                  { label: "Support Availability", val: "24/7" }
                ].map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-white">{stat.val}</div>
                    <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SIDE CARDS */}
            <div className="lg:col-span-7 space-y-4 max-h-[85vh] overflow-y-auto no-scrollbar py-4">

              {[
                {
                  name: "Welspun Living Ltd",
                  desc: "Senior ABAP consultant deployment supporting enterprise SAP customization, reporting, and ongoing enhancements.",
                  tag: "SAP Staffing"
                },
                {
                  name: "KR Pulp and Papers Ltd",
                  desc: "BASIS consultant provided for SAP Solution Manager (SolMan) configuration and system administration.",
                  tag: "SAP BASIS"
                },
                {
                  name: "Enterprise Clients",
                  desc: "Deployment of SAP functional consultants across MM, SD, FICO, and PP modules for business process optimization.",
                  tag: "SAP Functional"
                },
                {
                  name: "Web Application Projects",
                  desc: "Dedicated developers for ASP.NET, PHP, MySQL, and MS-SQL based web applications and ERP integrations.",
                  tag: "Web Development"
                },
                {
                  name: "Ongoing Support Engagements",
                  desc: "Providing continuous manpower support including both consultant-level and end-user level resources.",
                  tag: "Support Staffing"
                },
              ].map((client, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="group relative"
                >

                  {/* BORDER HOVER EFFECT */}
                  <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-transparent transition-all duration-300" />
                  <div
                    className="absolute inset-0 rounded-2xl p-[1.5px] opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500"
                    style={{
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                      WebkitMaskComposite: 'xor'
                    }}
                  />

                  {/* CARD */}
                  <div className="relative flex items-center justify-between gap-8 p-8 rounded-2xl bg-blue-500/[0.03] backdrop-blur-2xl group-hover:bg-blue-600/[0.08] group-hover:translate-x-2 transition-all duration-500">

                    <div className="flex-1 min-w-0">
                      <h3 className="text-2xl font-semibold text-white group-hover:text-blue-200 transition-colors mb-2">
                        {client.name}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed font-light line-clamp-2 max-w-md">
                        {client.desc}
                      </p>
                    </div>

                    {/* TAG */}
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

        {/* HIDE SCROLLBAR */}
        <style jsx>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>

      </section>






      <section className="bg-white py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* ================= PREMIUM HEADING ================= */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            {/* BADGE */}
            <div className="inline-flex items-center px-4 py-1 rounded-full
        bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              IT & SAP Staffing Solutions
            </div>

            {/* TITLE */}
            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1220] leading-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text
          bg-gradient-to-r from-blue-600 via-[#0B1220] to-[#D4AF37]">
                Staffing Services
              </span>
            </h2>

            {/* UNDERLINE */}
            <div className="w-24 h-[3px] mx-auto mt-4 rounded-full
        bg-gradient-to-r from-blue-500 to-[#D4AF37]" />

            {/* SUBTITLE */}
            <p className="text-[#475569] mt-6 text-lg leading-relaxed">
              We provide highly skilled SAP consultants, technical experts, and web developers
              to support enterprise projects, ensuring the right talent for every business need.
            </p>

          </div>

          {/* ================= GRID ================= */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "SAP Functional & Technical Experts",
                desc: "Skilled manpower with different competency levels in SAP Functional and Technical modules including ABAP, BASIS, and more.",
                icon: Layers,
              },
              {
                title: "Web Developers",
                desc: "Experienced developers in ASP.NET, PHP, MySQL, and MS-SQL for enterprise web applications and integrations.",
                icon: Code2,
              },
              {
                title: "Consultant & User-Level Staffing",
                desc: "Providing both expert consultants and user-level professionals to support operations and project execution.",
                icon: Headphones,
              },
              {
                title: "Project-Based Deployment",
                desc: "Flexible staffing solutions tailored for short-term and long-term enterprise projects across industries.",
                icon: Workflow,
              },
              {
                title: "Ongoing Support Resources",
                desc: "Dedicated manpower for continuous system support, maintenance, and operational efficiency.",
                icon: Zap,
              },
              {
                title: "Enterprise Client Engagements",
                desc: "Trusted by leading organizations for delivering skilled manpower in SAP and IT domains.",
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
      {/* ================= STAFFING PROCESS ================= */}
      <section className="bg-[#0B1220] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
            Our Staffing & Resource Deployment Process
          </h2>

          {/* WRAPPER */}
          <div className="relative">

            {/* TOP FLOW LINE */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-white/10" />

            {/* ANIMATED FLOW LINE */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[slide_3s_linear_infinite]" />
            </div>

            {/* GRID */}
            <div className="grid md:grid-cols-4 gap-12 relative z-10">

              {[
                {
                  title: "Requirement Understanding",
                  desc: "Analyzing client needs, required skill sets, project scope, and defining the right resource strategy.",
                  icon: ClipboardList,
                },
                {
                  title: "Talent Screening",
                  desc: "Identifying and evaluating skilled SAP consultants and developers based on expertise and project requirements.",
                  icon: PencilRuler,
                },
                {
                  title: "Deployment & Onboarding",
                  desc: "Assigning the right professionals and ensuring smooth onboarding for quick project alignment and execution.",
                  icon: Code2,
                },
                {
                  title: "Support & Continuity",
                  desc: "Providing ongoing support, performance monitoring, and flexible scaling of resources as business needs evolve.",
                  icon: Settings,
                },
              ].map((step, i) => {
                const Icon = step.icon;

                return (
                  <div key={i} className="text-center relative">

                    {/* NUMBER */}
                    <div className="relative z-10 flex justify-center md:block">
                      <div className="w-12 h-12 rounded-full bg-white text-[#0B1220]
                font-semibold flex items-center justify-center mx-auto shadow-md">
                        {i + 1}
                      </div>
                    </div>

                    {/* ICON */}
                    <div className="mt-6 flex justify-center">
                      <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20
                flex items-center justify-center text-blue-400
                hover:bg-blue-400 hover:text-[#0B1220]
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
      <section className="py-20 text-center bg-gradient-to-r from-[#0B1220] to-[#1E40AF] text-white">
        <h2 className="text-4xl font-semibold">
          Need Skilled Resources for Your Project?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-10 py-4 bg-white text-black rounded-full"
        >
          Contact Us →
        </button>
      </section>

    </div>
  );
}







=======
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
>>>>>>> 02fa17f55e5fc18a93b6a0624cbee042c407bacf
