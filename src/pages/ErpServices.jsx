
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import Erp1 from "../assets/images/erp1.webp";
import Erp2 from "../assets/images/erp2.webp";

import {
  Layers,
  Code2,
  Workflow,
  Zap,
  RefreshCcw,
  Headphones,
  Database,
  Globe,
  Server,
  ArrowRight,
  CheckCircle,
  ClipboardList,
  PencilRuler,
  Settings
} from "lucide-react";

export default function ErpServices() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#F8FAFC] via-white to-[#EEF2FF] font-sans pt-14">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#0B1220] text-white pt-32 pb-28">

        <div className="absolute inset-0">
          <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-blue-500/20 blur-3xl rounded-full" />
          <div className="absolute bottom-[-120px] right-[-100px] w-[400px] h-[400px] bg-indigo-500/20 blur-3xl rounded-full" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>
            <span className="text-xs tracking-[0.4em] text-blue-400 uppercase">
              Web-Based Business Solutions
            </span>

            <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
              Build Scalable <br />
              <span className="text-blue-400">Web ERP & Portals</span>
            </h1>

            <p className="mt-6 text-lg text-slate-300 leading-relaxed max-w-xl">
              Custom ERP systems, dealer portals, and enterprise applications
              designed to streamline operations, integrate with SAP, and scale your business.
            </p>

            <button
              onClick={() => navigate("/contact")}
              className="mt-8 px-8 py-4 bg-white text-[#0B1220] rounded-full font-semibold hover:scale-105 transition"
            >
              Get Started →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img src={Erp1} alt="ERP" className="rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.5)]" />

            <div className="absolute -bottom-6 -left-6 bg-white text-black p-5 rounded-xl shadow-xl">
              <p className="text-sm font-semibold">Custom ERP Experts</p>
              <p className="text-xs text-gray-500">PHP, .NET & API Integration</p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= ABOUT + IMAGE (MATCHED SAP UI) ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-16 items-stretch">

            {/* ================= LEFT SIDE ================= */}
            <div className="flex flex-col h-full justify-between">

              {/* TOP CONTENT */}
              <div>
                <div className="inline-flex items-center px-4 py-1 rounded-full
          bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                  Web ERP Consulting
                </div>

                <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-[#0B1220] leading-tight">
                  Building{" "}
                  <span className="text-transparent bg-clip-text
            bg-gradient-to-r from-blue-600 to-indigo-500">
                    Scalable Digital Systems
                  </span>{" "}
                  with ERP Solutions
                </h2>

                <p className="mt-6 text-[#475569] text-lg leading-relaxed">
                  Web-based ERP solutions streamline business operations by connecting departments,
                  automating workflows, and improving data visibility across the organization.
                  We help you build centralized systems that are efficient, scalable, and easy to manage.
                </p>

           
              </div>

              {/* BOTTOM IMAGE */}
              <div className="mt-12">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 via-transparent to-indigo-200/30 blur-2xl rounded-3xl" />

                  <img
                    src={Erp2}
                    alt="ERP Process"
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
                  Core ERP Capabilities
                </p>

                <p className="text-[#475569] text-sm mt-3 leading-relaxed">
                  We deliver complete ERP solutions including development, integration,
                  automation, and long-term support tailored to your business.
                </p>
              </div>

              {/* BOTTOM LIST (SAME UI AS SAP) */}
              <div className="space-y-3 pt-4">

                {[
                  {
                    title: "Custom ERP Development",
                    desc: "Building tailored ERP systems aligned with your workflows using modern technologies like PHP, .NET, and cloud platforms.",
                  },
                  {
                    title: "SAP & API Integration",
                    desc: "Seamless integration with SAP systems and third-party APIs for unified data flow and real-time operations.",
                  },
                  {
                    title: "Business Process Automation",
                    desc: "Automating repetitive tasks and workflows to increase efficiency and reduce manual errors across departments.",
                  },
                  {
                    title: "Cloud-Based ERP Solutions",
                    desc: "Deploying scalable ERP systems on cloud infrastructure for flexibility, performance, and accessibility.",
                  },
                  {
                    title: "ERP Performance Optimization",
                    desc: "Enhancing system speed, reliability, and scalability with continuous monitoring and improvements.",
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


      {/* ================= SERVICES ================= */}
      {/* ================= ERP MODULES (SAP UI MATCH) ================= */}
      <section className="py-24 bg-[#051139] text-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header Section */}
          <div className="text-left mb-16">
            <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-fit">
              Web ERP Capabilities for scalable and connected business systems.
            </h2>

            <p className="text-slate-400 mt-6 max-w-fit text-lg">
              We build powerful web-based ERP systems with seamless integrations,
              automation, and cloud scalability to streamline business operations
              and improve real-time decision making.
            </p>
          </div>

          {/* SAME GRID UI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Custom ERP",
                desc: "Tailored ERP systems designed to match your exact business workflows and operational needs.",
                icon: <Database size={24} />
              },
              {
                title: "API Integration",
                desc: "Seamless integration with SAP and third-party systems for unified data and smooth operations.",
                icon: <Globe size={24} />
              },
              {
                title: "Cloud Systems",
                desc: "Deploying scalable ERP platforms on cloud infrastructure for flexibility and performance.",
                icon: <Server size={24} />
              },
              {
                title: "Automation",
                desc: "Automating repetitive business processes to improve efficiency and reduce manual workload.",
                icon: <Workflow size={24} />
              },
              {
                title: "Enhancements",
                desc: "Continuous ERP improvements and feature enhancements to meet evolving business demands.",
                icon: <Zap size={24} />
              },
              {
                title: "Migration",
                desc: "Smooth migration of legacy systems to modern ERP platforms with minimal disruption.",
                icon: <RefreshCcw size={24} />
              },
              {
                title: "24/7 Support",
                desc: "Reliable monitoring and support services ensuring stability and uninterrupted operations.",
                icon: <Headphones size={24} />
              },
              {
                title: "System Architecture",
                desc: "Designing robust and scalable ERP architecture aligned with enterprise growth strategies.",
                icon: <Layers size={24} />
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm cursor-pointer overflow-hidden"
              >
                {/* Icon Box */}
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-blue-900/20">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors">
                  {item.desc}
                </p>

                {/* Hover Glow Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

        </div>
      </section>






      {/* ================= ERP EXPERTISE ================= */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold tracking-[0.2em] text-xs uppercase bg-blue-50 px-4 py-2 rounded-full">
              Our Expertise
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0B1220] tracking-tight mt-6">
              Advanced <span className="text-blue-600">Web ERP Solutions</span>
            </h2>

            <p className="text-[#475569] mt-6 text-lg leading-relaxed">
              We design and develop modern web-based ERP systems that streamline business operations,
              enhance productivity, and enable real-time decision-making across your organization.
            </p>
          </div>

          {/* SAME GRID UI */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Custom ERP Platforms",
                desc: "End-to-end development of scalable ERP systems tailored to your business workflows, ensuring efficiency, flexibility, and long-term growth.",
                points: [
                  "Custom ERP Development (PHP, .NET)",
                  "Production Planning Systems",
                  "Dealer & Sales Portals",
                  "Cloud-Based ERP Solutions",
                  "Business Workflow Automation"
                ],
                icon: <Layers className="text-blue-600" size={24} />,
                accent: "border-t-blue-600"
              },
              {
                title: "Integration & Automation",
                desc: "Connecting ERP systems with SAP, APIs, and third-party tools to enable seamless data flow and automate complex business processes.",
                points: [
                  "SAP API Integration",
                  "Third-party System Integration",
                  "Real-time Data Synchronization",
                  "Automated Workflows",
                  "Reporting & Analytics Integration"
                ],
                icon: <Workflow className="text-indigo-600" size={24} />,
                accent: "border-t-indigo-600"
              },
              {
                title: "Implementation & Support",
                desc: "Reliable deployment, continuous support, and system optimization to ensure your ERP platform remains secure, scalable, and high-performing.",
                points: [
                  "ERP Deployment & Setup",
                  "24/7 Monitoring & Support",
                  "Performance Optimization",
                  "System Upgrades & Enhancements",
                  "User Training & Maintenance"
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
                    Web ERP Excellence
                  </motion.div>

                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white leading-[0.95]">
                    Building <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-200">
                      Smart Digital Systems.
                    </span>
                  </h2>

                  <p className="text-slate-400 text-xl leading-relaxed font-light max-w-lg">
                    We develop scalable web-based ERP platforms, dealer portals, and cloud systems
                    that streamline operations, improve visibility, and accelerate business growth.
                  </p>

                </div>

                {/* STATS */}
                <div className="grid grid-cols-2 gap-8 py-8 border-y border-white/5">
                  {[
                    { label: "Projects Delivered", val: "50+" },
                    { label: "Active Clients", val: "20+" },
                    { label: "ERP Solutions", val: "Custom Built" },
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
                    name: "Pakka Ltd",
                    desc: "Production planning portal with real-time tracking, automation, and SAP integration for operational efficiency.",
                    tag: "Manufacturing ERP"
                  },
                  {
                    name: "KR Pulp and Papers Ltd",
                    desc: "Sales and dealer portal integrated with SAP APIs enabling real-time order and inventory management.",
                    tag: "Sales Portal"
                  },
                  {
                    name: "Orissa Sponge Iron & Steel Ltd",
                    desc: "Cloud-based ERP system for managing procurement, inventory, and enterprise workflows.",
                    tag: "Cloud ERP"
                  },
                  {
                    name: "Srijan Infrassociates Pvt Ltd",
                    desc: "Custom ERP platform for project management, billing, and construction workflow automation.",
                    tag: "Infrastructure"
                  },
                  {
                    name: "Material Transport Company",
                    desc: "Logistics ERP solution with fleet tracking, dispatch management, and reporting dashboards.",
                    tag: "Logistics"
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

          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto mb-16">

            <div className="inline-flex items-center px-4 py-1 rounded-full
        bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
              Web-Based Business Solutions
            </div>

            <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1220]">
              Our{" "}
              <span className="text-transparent bg-clip-text
          bg-gradient-to-r from-blue-600 via-[#0B1220] to-indigo-500">
                ERP Services
              </span>
            </h2>

            <div className="w-24 h-[3px] mx-auto mt-4 rounded-full
        bg-gradient-to-r from-blue-500 to-indigo-500" />

            <p className="text-[#475569] mt-6 text-lg leading-relaxed">
              End-to-end web-based ERP solutions designed to streamline operations,
              automate workflows, and integrate seamlessly with enterprise systems.
            </p>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Custom ERP Development",
                desc: "Tailor-made ERP systems built to match your business workflows, ensuring flexibility, scalability, and performance.",
                icon: Layers,
              },
              {
                title: "ERP Support (24/7)",
                desc: "Continuous monitoring, maintenance, and issue resolution to ensure your systems run smoothly.",
                icon: Headphones,
              },
              {
                title: "Business Process Automation",
                desc: "Automating workflows to reduce manual work, improve accuracy, and increase efficiency.",
                icon: Workflow,
              },
              {
                title: "API & SAP Integration",
                desc: "Seamless integration with SAP and third-party systems for unified data flow.",
                icon: Code2,
              },
              {
                title: "System Enhancements",
                desc: "Adding new features and optimizing ERP systems to match evolving business needs.",
                icon: Zap,
              },
              {
                title: "Cloud Migration",
                desc: "Secure migration of ERP systems to cloud for scalability, performance, and accessibility.",
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
              bg-gradient-to-br from-blue-50/60 via-transparent to-indigo-100/40 pointer-events-none" />

                  {/* ICON */}
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl
              bg-white border border-slate-200 text-[#0B1220]
              group-hover:text-blue-700 group-hover:border-blue-300
              transition-all duration-300 shadow-sm">
                    <Icon size={20} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-semibold text-[#0B1220] mt-5
              group-hover:text-blue-600 transition-colors">
                    {s.title}
                  </h3>

                  {/* DESC */}
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
      <section className="bg-[#0B1220] text-white py-14">
        <div className="max-w-7xl mx-auto px-6">

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-semibold text-center mb-20">
            Our Web ERP Development Process
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
                  title: "Requirement Analysis",
                  desc: "Understanding business workflows, defining ERP scope, and gathering functional requirements.",
                  icon: ClipboardList,
                },
                {
                  title: "System Architecture",
                  desc: "Designing scalable ERP architecture with database structure, APIs, and integrations.",
                  icon: PencilRuler,
                },
                {
                  title: "Development & Integration",
                  desc: "Building custom ERP modules, portals, and integrating SAP or third-party systems.",
                  icon: Code2,
                },
                {
                  title: "Support & Optimization",
                  desc: "Continuous monitoring, performance tuning, and feature enhancements post-deployment.",
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
          Ready to Build Your Business with us?
        </h2>

        <button
          onClick={() => navigate("/contact")}
          className="mt-8 px-10 py-4 bg-white text-black rounded-full"
        >
          Get Started →
        </button>
      </section>

    </div>
  );
}

