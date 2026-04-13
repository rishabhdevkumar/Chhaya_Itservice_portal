import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import WhyChooseUsBg from "../assets/images/WhyChooseUsBg.webp";

import {
    FaCogs,
    FaUsers,
    FaGlobe,
    FaHandshake,
    FaCheckCircle,
    FaCode,
    FaBuilding
} from "react-icons/fa";

import Logo from "../assets/images/ChhayaLogo.webp";
import Expert1 from "../assets/images/expert1.webp";
import Expert2 from "../assets/images/expert3.webp"; 
import Expert3 from "../assets/images/expert2.webp";
import Expert4 from "../assets/images/expert4.webp";
import Expert5 from "../assets/images/expert5.webp";
import Leader1 from "../assets/images/sumana.webp";
import Leader2 from "../assets/images/pankajKr.webp";
import Leader3 from "../assets/images/parthaa.webp";

/* ================= ANIMATIONS ================= */
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

/* ================= MAIN COMPONENT ================= */
export default function AboutCompany() {
    const navigate = useNavigate();

    const services = [
        {
            title: "SAP Services",
            description:
                "Comprehensive SAP support services covering Functional and Technical domains. Our expertise includes SAP BASIS administration, ABAP development, system support, enhancements, and performance optimization to ensure business continuity and system reliability.",
            icon: <FaCogs className="text-3xl text-blue-700 mb-5" />,
            route: "/services/sap",
        },
       
        {
            title: "Web-Based Business solution",
            description:
                "Web-based ERP solutions designed for modern businesses.Sales & dealer management for seamless distribution control Production planning solutions to optimize operations and efficiency Integrated systems that streamline workflows and drive growth.",



            icon: <FaBuilding className="text-3xl text-blue-700 mb-5" />,
            route: "/services/erp",
        },
         {
            title: "Staffing Services",
            description:
                "Deployment of skilled technical resources across modern technologies including SAP, Java, PHP, and full-stack web development. We deliver scalable, secure, and performance-driven digital applications aligned with business objectives.",
            icon: <FaCode className="text-3xl text-blue-700 mb-5" />,
            route: "/services/web-development",
        },
    ];

    return (
        <section className="pt-28 bg-white overflow-hidden">

            {/* ================= HERO ================= */}
            <div className="bg-gradient-to-br from-zinc-900 via-slate-900 to-black text-white">
                <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">

                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold uppercase">
                            <FaGlobe /> About Company
                        </span>

                        <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                            Empowering Businesses Through{" "}
                            <span className="text-orange-500">SAP & Digital Innovation</span>
                        </h1>

                        <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-xl">
                            <strong>Chhaya IT Services Pvt. Ltd.</strong> is a SAP-focused IT
                            consulting organization registered with the Ministry of Corporate
                            Affairs. Since 2018, we help enterprises modernize operations,
                            improve efficiency, and scale securely.
                        </p>

                        <ul className="mt-8 space-y-3 text-gray-300">
                            {[
                                "SAP Functional & Technical Expertise",
                                "Cloud ERP & Custom Applications",
                                "Enterprise Security & Scalability",
                                "Staffing of skilled resources",
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <FaCheckCircle className="text-orange-500 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
                        <img src={Logo} alt="Chhaya IT Services" className="w-full h-[440px] object-contain p-10 rounded-2xl" />
                    </motion.div>
                </div>
            </div>

            {/* ================= FAST FACTS ================= */}
            <div className="bg-gradient-to-r from-slate-50 to-white border-y">
                <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <Stat value={2018} label="Founded" />
                    <Stat value={15} suffix="+" label="SAP Experts" />
                    <Stat value={10} suffix="+" label="Projects Delivered" />
                    <Stat value={100} suffix="%" label="Client Satisfaction" />
                </div>
            </div>


            {/* ================= ABOUT CHHAYA IT SERVICES (RESTORED) ================= */}
            <section className="bg-white py-24">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="max-w-4xl mb-16">
                        <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 font-accent">
                            About <span className="text-blue-700 font-heading">Chhaya IT Services</span>
                        </h2>
                        <div className="mt-3 h-[3px] w-24 bg-blue-700"></div>

                        <p className="mt-6 text-slate-500 text-lg leading-relaxed font-body">
                            Chhaya IT Services is a professional IT consulting and technology
                            services company specializing in SAP solutions, enterprise web
                            development, and customized ERP systems. We support organizations
                            in optimizing business processes, improving operational efficiency,
                            and achieving sustainable digital transformation.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -6 }}
                                onClick={() => navigate(service.route)}
                                className="cursor-pointer bg-white border rounded-2xl p-8 shadow-md hover:shadow-xl transition"
                            >
                                {service.icon}
                                <h3 className="text-xl font-semibold text-slate-800 mb-3 font-body">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 ">{service.description}</p>
                                <span className="inline-block mt-5 text-sm font-medium text-blue-700 border-b border-blue-700">
                                    Read More
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ================= WHO WE ARE & COMPANY OVERVIEW ================= */}
            <section className="relative py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-black overflow-hidden">

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.15),transparent_60%)]"></div>

                <div className="relative max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <div className="max-w-4xl mb-20">
                        <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">
                            Who We Are
                        </span>

                        <h2 className="mt-4 text-4xl md:text-5xl font-extrabold
                     text-transparent bg-clip-text
                     bg-gradient-to-r from-blue-400 to-cyan-300">
                            Enterprise SAP & Digital Transformation Experts
                        </h2>

                        <p className="mt-6 text-lg text-slate-300 leading-relaxed">
                            Chhaya IT Services Pvt. Ltd. is an SAP-focused IT consulting company
                            incorporated in 2018 with a mission to deliver robust SAP services,
                            cloud-based ERP platforms, and customized enterprise applications.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid lg:grid-cols-2 gap-10">

                        <PremiumCard title="Service Strength">
                            <PremiumList items={[
                                "SAP Functional & Technical Services (Current Team Strength – 11)",
                                "Web-based Customized Solution Provider (Team Strength – 4 with outsourcing partners)",
                            ]} />
                        </PremiumCard>

                        <PremiumCard title="Corporate Registration">
                            <PremiumList items={[
                                "Registered with Ministry of Corporate Affairs, Government of India",
                                "Registration No: U72900JH2018PTC011713",
                                "Startup incorporated in 2018",
                            ]} />
                        </PremiumCard>

                        

                        

                    </div>
                </div>
            </section>



            {/* ================= STRATEGY ================= */}
            <div
                className="text-white"
                style={{
                    backgroundImage: `url(${WhyChooseUsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-24">
                    <SectionHeading title="Our Strategy & Values" subtitle="Trust, innovation, and long-term partnerships" light />

                    <div className="grid md:grid-cols-3 gap-12">
                        <ValueCard icon={<FaGlobe />} title="Digital Transformation" text="Modern SAP-driven digital ecosystems." />
                        <ValueCard icon={<FaHandshake />} title="Customer First" text="Solutions aligned with business goals." />
                        <ValueCard icon={<FaUsers />} title="Ethical Excellence" text="Integrity and accountability in everything we do." />
                    </div>
                </div>
            </div>

            {/* ================= LEADERSHIP ================= */}
            <section className="relative bg-white py-28 font-[Inter] text-slate-900">

  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-3xl mb-24">
      <span className="text-[11px] uppercase tracking-[0.45em] text-[#C6A24A] font-medium">
        Leadership
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.15]">
        Leadership Team
      </h2>

      <p className="mt-6 text-lg text-slate-600 leading-relaxed">
        A focused leadership team bringing decades of experience in
        consulting, technology, and enterprise execution.
      </p>
    </div>

    {/* Leaders Grid */}
    <div className="grid gap-16 md:grid-cols-3">

      {/* Leader Card */}
      {[
        {
          img: Leader1,
          name: "Dr. Sumana Basack",
          role: "Managing Director",
          desc:
            "PhD in Energy Optimization and an engineer from IIEST, Shibpur, with over 15 years of experience in sustainability initiatives, IoT solutions, and consulting for Indian Railways, Coal India, Tata Steel, and government organizations.",
        },
        {
          img: Leader3,
          name: "Partha Basack",
          role: "Director – Operations",
          desc:
            "Engineer from IIEST, Shibpur with more than 20 years of experience delivering SAP and MES programs for Tata Group companies, GRSE, and international manufacturing organizations.",
        },
        {
          img: Leader2,
          name: "Pankaj Kumar",
          role: "Director – Sales",
          desc:
            "Senior consultant with over 20 years of experience in large-scale infrastructure and IT project delivery, building strategic partnerships across government and enterprise clients.",
        },
        
      ].map((leader, i) => (
        <div key={i} className="text-center">

          {/* Image */}
          <img
            src={leader.img}
            alt={leader.name}
            className="mx-auto w-[220px] aspect-[3/4] object-cover rounded-2xl"
          />

          {/* Text Box */}
          <div
            className="mt-8 bg-white rounded-2xl px-8 py-10
            shadow-[0_10px_30px_rgba(0,0,0,0.06)]
            transition-all duration-300 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)]"
          >
            <h3 className="text-xl font-semibold tracking-tight">
              {leader.name}
            </h3>

            <p className="mt-2 text-xs uppercase tracking-[0.3em] text-[#C6A24A] font-medium">
              {leader.role}
            </p>

            <p className="mt-6 text-slate-700 leading-relaxed text-[15px]">
              {leader.desc}
            </p>
          </div>
        </div>
      ))}

    </div>
  </div>
</section>





            {/* ================= OUR EXPERTS ================= */}
            <ProfileSection
                title="Our SAP Experts"
                subtitle="Certified professionals across SAP domains"
                profiles={[
                    { image: Expert1, name: "Anju Boipai", role: "Jr. ABAP Consultant" },
                    { image: Expert2, name: "Rajdeep Singh", role: "Sr. SAP ABAP Consultant" },
                    { image: Expert3, name: "Kajal Singh", role: "Sr. SAP FICO Consultant" },
                    { image: Expert4, name: "Bikash Mandal", role: "Jr. PP Consultant" },
                    { image: Expert5, name: "Bharat Sardar", role: " MM Consultant" },
                ]}
            />
        </section>
    );
}

/* ================= COMPONENTS ================= */

function SectionHeading({ title, subtitle, light }) {
    return (    
        <div className="mb-16 max-w-3xl">
            <h2 className={`text-3xl md:text-4xl font-bold ${light ? "text-white" : "text-gray-900"}`}>
                {title}
            </h2>
            <div className="w-16 h-1 bg-orange-500 mt-4 mb-5 rounded-full" />
            <p className={`${light ? "text-gray-300" : "text-gray-600"} text-lg`}>
                {subtitle}
            </p>
        </div>
    );
}



function Stat({ value, suffix = "", label }) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            i += Math.ceil(value / 50);
            if (i >= value) {
                setCount(value);
                clearInterval(t);
            } else setCount(i);
        }, 30);
        return () => clearInterval(t);
    }, [value]);

    return (
        <div className="bg-white rounded-2xl shadow-md py-8">
            <p className="text-4xl font-bold text-orange-500">{count}{suffix}</p>
            <p className="text-gray-700 font-medium mt-2">{label}</p>
        </div>
    );
}



function ValueCard({ icon, title, text }) {
    return (
        <motion.div whileHover={{ y: -8 }} className="bg-zinc-800 rounded-2xl p-8">
            <div className="text-orange-400 text-4xl mb-5">{icon}</div>
            <h4 className="text-xl font-semibold mb-3">{title}</h4>
            <p className="text-gray-300">{text}</p>
        </motion.div>
    );
}



/* ===== PREMIUM PROFILE CARD ===== */
function ProfileSection({ title, subtitle, profiles }) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20">

            {/* Heading Section (space reserved for floating images) */}
            <div className="text-center max-w-3xl mx-auto mb-32 sm:mb-24 md:pb-10">
                {/* Heading */}
                <h2 className="
            text-3xl sm:text-4xl lg:text-5xl
            font-extrabold tracking-tight
            text-transparent
            bg-clip-text
            bg-gradient-to-r from-orange-500 to-orange-700
            relative inline-block
        ">
                    {title}
                    {/* Unique underline */}
                    <span className="absolute left-1/2 -bottom-2 w-16 h-1 bg-orange-500 rounded-full -translate-x-1/2"></span>
                </h2>

                {/* Subtitle */}
                {subtitle && (
                    <p className="mt-4 text-base sm:text-lg text-gray-600">
                        {subtitle}
                    </p>
                )}
            </div>


            {/* Cards Grid */}
            <div
                className="grid gap-12
           grid-cols-1
           sm:grid-cols-2
           md:grid-cols-3
           lg:grid-cols-4
           xl:grid-cols-5
           justify-items-center"
            >
                {profiles.map((p, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        transition={{ duration: 0.35 }}
                        className="relative bg-white
                                    rounded-3xl border border-gray-200
                                    shadow-[0_18px_45px_-20px_rgba(0,0,0,0.3)]
                                    pt-36 sm:pt-32 lg:pt-36
                                    pb-8 px-5
                                    text-center
                                    w-full max-w-[320px]"
                    >
                        {/* Floating Image */}
                        <div
                            className="absolute -top-16 sm:-top-20 lg:-top-24
                                        left-1/2 -translate-x-1/2"
                        >
                            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-52 lg:h-52
                                                rounded-full bg-white p-[6px] shadow-xl">
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-full rounded-full object-cover"
                                />
                            </div>
                        </div>

                        <h4 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900">
                            {p.name}
                        </h4>

                        <p className="mt-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-orange-600">
                            {p.role}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}





function PremiumCard({ title, children }) {
    return (
        <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="relative bg-white/5 backdrop-blur-xl
                 border border-white/10 rounded-3xl
                 p-8 md:p-10
                 shadow-[0_25px_70px_-30px_rgba(0,0,0,0.85)]"
        >
            <div className="absolute left-0 top-10 h-12 w-1 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full"></div>
            <h3 className="text-xl font-semibold text-white mb-6">{title}</h3>
            {children}
        </motion.div>
    );
}

function PremiumList({ items }) {
    return (
        <ul className="space-y-4 text-slate-300 leading-relaxed">
            {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 bg-orange-400 rounded-full shrink-0"></span>
                    {item}
                </li>
            ))}
        </ul>
    );
}


