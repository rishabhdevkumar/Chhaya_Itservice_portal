import React from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/images/about2.webp";
import { useNavigate } from "react-router-dom";


import {
  Phone,
  Mail,
  MapPin,
  Send,
  RotateCcw,
  ShieldCheck,
  Briefcase,
  Users,
} from "lucide-react";
const COMPANY_EMAIL = "hr@chhayaitservices.com";

const ContactSection = () => {

  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const message = form.message.value;

    const subject = `New Inquiry from ${name}`;

    const body = `
Name: ${name}
Email: ${email}
Phone: ${phone}
Address: ${address}

Message:
${message}
  `;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${COMPANY_EMAIL}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // ✅ Always opens Gmail directly (no blank page issue)
    window.open(gmailLink, "_blank");
  };


  return (
    <div className="w-full bg-slate-950 text-slate-200 pt-24">

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <img
          src={contactImg}
          alt="Chhaya IT Services"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-slate-950/90" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-slate-200 text-xs sm:text-sm mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Chhaya IT Services • SAP & Enterprise Technology
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-white">
            Empowering Businesses with
            <span className="block mt-2 text-emerald-400">
              SAP & Digital Excellence
            </span>
          </h1>

          <p className="mt-7 text-slate-300 max-w-3xl mx-auto">
            Chhaya IT Services delivers SAP consulting, ERP solutions,
            and enterprise-grade web development with skilled professionals.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <span>✔ SAP S4 HANA Functional</span>
            <span>✔ SAP Technical</span>
            <span>✔ Web Development</span>
            <span>✔ Staffing</span>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT: FORM */}
        <div className="space-y-8">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl"
          >
            <h2 className="text-2xl font-semibold text-white">
              Let’s Discuss Your Business Needs
            </h2>

            <p className="mt-2 text-sm text-slate-400">
              Connect with our experts to explore tailored IT solutions that drive your business forward.
            </p>

            <form
              onSubmit={sendEmail}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >

              <input
                name="name"
                required
                placeholder="Full Name"
                className="bg-white/5 border border-slate-700 rounded-xl p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email Address"
                className="bg-white/5 border border-slate-700 rounded-xl p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />

              <input
                name="phone"
                placeholder="Phone Number"
                className="bg-white/5 border border-slate-700 rounded-xl p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />

              <input
                name="address"
                placeholder="Address"
                className="bg-white/5 border border-slate-700 rounded-xl p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition"
              />

              <textarea
                name="message"
                rows="4"
                required
                placeholder="Your Message..."
                className="md:col-span-2 bg-white/5 border border-slate-700 rounded-xl p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none resize-none transition"
              />

              <div className="md:col-span-2 flex flex-col sm:flex-row gap-4">

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-blue-600 hover:scale-105 hover:shadow-xl transition-all duration-300 text-white text-sm font-medium"
                >
                  <Send size={16} />
                  Send Message
                </button>

                <button
                  type="reset"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-700 hover:bg-slate-800 transition text-sm"
                >
                  <RotateCcw size={16} />
                  Reset
                </button>
              </div>

            </form>
          </motion.div>

          {/* TRUST CARDS */}
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center">
              <ShieldCheck className="text-indigo-400 mx-auto mb-2" />
              <p className="text-sm text-indigo-200">Secure & Reliable</p>
            </div>
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center">
              <Briefcase className="text-indigo-400 mx-auto mb-2" />
              <p className="text-sm text-indigo-200">Enterprise Solutions</p>
            </div>
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center">
              <Users className="text-indigo-400 mx-auto mb-2" />
              <p className="text-sm text-indigo-200">Trusted by Businesses</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (UNCHANGED) */}
        
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="space-y-10"
>
  {/* HEADING */}
  <div>
    <h3 className="text-2xl font-semibold text-white">
      How Can We Help You?
    </h3>
    <p className="text-sm text-slate-400 mt-2">
      Connect with our experts to explore tailored IT solutions that drive your business forward.
    </p>
  </div>

  {/* SERVICES */}
  <div className="grid gap-5">
    <div className="flex gap-4 bg-[#020617] border border-slate-800 rounded-xl p-5 hover:bg-slate-900 transition">
      <Phone className="text-indigo-400 mt-1" />
      <p className="text-slate-400 text-sm">
        Dedicated client support for all your needs.
      </p>
    </div>

    <div className="flex gap-4 bg-[#020617] border border-slate-800 rounded-xl p-5 hover:bg-slate-900 transition">
      <Mail className="text-indigo-400 mt-1" />
      <p className="text-slate-400 text-sm">
        Professional SAP & enterprise consulting.
      </p>
    </div>

    <div className="flex gap-4 bg-[#020617] border border-slate-800 rounded-xl p-5 hover:bg-slate-900 transition">
      <MapPin className="text-indigo-400 mt-1" />
      <p className="text-slate-400 text-sm">
        Trusted IT partner for scalable solutions.
      </p>
    </div>
  </div>

  {/* CONTACT CARDS */}
  <div className="grid sm:grid-cols-2 gap-6">
    <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center hover:shadow-lg transition">
      <Phone className="text-indigo-400 mx-auto mb-2" />
      <p>📞 +91 9234604901</p>
      <p>📞 +91 9431133764</p>
    </div>

    <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center hover:shadow-lg transition">
      <Mail className="text-indigo-400 mx-auto mb-2" />
      <p>hr@chhayaitservices.com</p>
    </div>
  </div>

  {/* 🔥 CAREER CTA BLOCK */}
  <div className="text-center pt-6 border-t border-slate-800">

    <p className="text-slate-400 text-sm mb-4">
      Looking for opportunities? Join our team and build your future with us.
    </p>

    <button
  type="button"
  onClick={() => navigate("/career")}
  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl 
  bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-600
  hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20
  transition-all duration-300 text-white font-medium"
>
  <Send size={16} />
  Explore Careers & Opportunities
</button>


    {/* small trust line */}
    <p className="text-xs text-slate-500 mt-3">
      🚀 Explore vacancies & grow with us
    </p>

  </div>
</motion.div>

      </section>
    </div>
  );
};

export default ContactSection;
