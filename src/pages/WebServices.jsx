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







