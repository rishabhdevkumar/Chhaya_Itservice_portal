import {
    Mail,
    Briefcase,
    Code,
    Database,
    Users,
    Rocket,
    Heart,
    Globe,
    Award,
} from "lucide-react";
import React from "react";
const HR_EMAIL = "hr@chhayaitservices.com";

export default function CareerSection() {
    const jobs = [
        {
            title: "SAP Functional Consultants",
            icon: <Database className="w-8 h-8 text-blue-500" />,
        },
        {
            title: "SAP Technical Consultants",
            icon: <Database className="w-8 h-8 text-purple-500" />,
        },
        {
            title: "Web Developer",
            icon: <Code className="w-8 h-8 text-green-500" />,
        },
    ];

    const perks = [
        { title: "Growth Opportunities", icon: <Rocket /> },
        { title: "Collaborative Culture", icon: <Users /> },
        { title: "Work-Life Balance", icon: <Heart /> },
    ];

    const benefits = [
        { title: "Flexible Work", icon: <Globe /> },
        { title: "Learning & Development", icon: <Award /> },
        { title: "Friendly Environment", icon: <Users /> },
    ];

 const handleApply = (jobTitle = "Job Application") => {
  const subject = `Application for ${jobTitle}`;

  const body = `Hello HR Team,

I am interested in the ${jobTitle} position.

Thanks`;

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${HR_EMAIL}&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const mailto = `mailto:${HR_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const win = window.open(gmail, "_blank");

  setTimeout(() => {
    if (!win || win.closed || typeof win.closed === "undefined") {
      window.location.href = mailto;
    }
  }, 800);
};


    return (
        <section className="w-full text-white pt-28 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black">

            {/* 🔥 HERO */}
            <div className="text-center py-16 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                    Build Your Future With{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                        Our Team
                    </span>
                </h1>
                <p className="text-gray-400 text-lg">
                    Work with passionate people, solve real-world problems, and grow faster than ever.
                </p>
            </div>

            {/* 💼 WHY JOIN US */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6">
                {perks.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                    >
                        <div className="mb-4 flex justify-center text-blue-400 text-3xl">
                            {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">
                            Grow in an environment designed for learning and innovation.
                        </p>
                    </div>
                ))}
            </div>

            {/* 🌟 ABOUT */}
            <div className="max-w-5xl mx-auto px-6 py-10 text-center">
                <h2 className="text-3xl font-bold mb-4">
                    Why Work With Us?
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    We believe in empowering individuals through innovation, ownership, and collaboration.
                    Our team thrives on solving complex problems and delivering impactful solutions.
                </p>
            </div>

            {/* 💻 JOBS */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-10">
                    Open <span className="text-blue-400">Positions</span>
                </h2>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="mb-4 text-2xl">{job.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Work on impactful projects with a collaborative team.
                            </p>

                            <button
                                onClick={handleApply}
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 transition px-4 py-2 rounded-lg text-sm flex items-center gap-2"
                            >
                                <Mail className="w-4 h-4" />
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🎁 BENEFITS */}
            <div className="py-12 px-6 bg-gradient-to-r from-[#111827] to-[#0f172a]">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Benefits & Perks
                </h2>

                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center">
                    {benefits.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/10 p-6 rounded-xl hover:scale-105 transition"
                        >
                            <div className="flex justify-center mb-3 text-yellow-400 text-2xl">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-400 text-sm">
                                Enjoy a healthy and growth-focused work environment.
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🚀 MODERN HIRING PROCESS */}
            <div className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Our Hiring Process
                </h2>

                <div className="grid md:grid-cols-4 gap-8 text-center">

                    {[
                        { step: "01", title: "Apply", desc: "Submit your application" },
                        { step: "02", title: "Interview", desc: "Meet our team" },
                        { step: "03", title: "Assessment", desc: "Show your skills" },
                        { step: "04", title: "Offer", desc: "Join our journey" },
                    ].map((item, i) => (
                        <div key={i} className="relative">

                            {/* Line */}
                            {i !== 3 && (
                                <div className="hidden md:block absolute top-5 left-full w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            )}

                            <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:scale-105 transition">
                                <div className="text-blue-400 text-xl font-bold mb-2">
                                    {item.step}
                                </div>
                                <h3 className="font-semibold mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 🔥 PREMIUM CTA */}
            <div className="relative py-20 px-6">

                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 opacity-20 blur-3xl"></div>

                <div className="relative max-w-4xl mx-auto text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-2xl">

                    <Briefcase className="mx-auto mb-4 text-yellow-400" size={44} />

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                        Didn’t Find Your Perfect Role?
                    </h3>

                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        We’re always excited to meet talented people. Send us your profile and
                        let’s explore opportunities together.
                    </p>

                    <button
                        onClick={handleApply}
                        className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-110 transition-all duration-300 text-black px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto shadow-lg"
                    >
                        <Mail className="w-5 h-5" />
                        Send Your Profile
                    </button>

                    <p className="text-gray-500 text-sm mt-4">
                        📩 Response within 24–48 hours
                    </p>

                </div>
            </div>

        </section>

    );
}
