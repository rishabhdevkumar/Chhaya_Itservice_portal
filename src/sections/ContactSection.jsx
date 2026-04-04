import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../assets/images/about2.webp";

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

const ContactSection = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const emailjs = await import("@emailjs/browser");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-slate-950 text-slate-200 pt-24">
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src={contactImg}
          alt="Chhaya IT Services – SAP & Digital Solutions"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/85 to-slate-950/90" />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

          {/* Brand Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-slate-200 text-xs sm:text-sm mb-8 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Chhaya IT Services • SAP & Enterprise Technology
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-wide">
            Empowering Businesses with
            <span className="block mt-2 text-emerald-400">
              SAP & Digital Excellence
            </span>
          </h1>

          {/* Description */}
          <p className="mt-7 text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Chhaya IT Services delivers end-to-end SAP consulting, ERP solutions,
            and enterprise-grade web development while deploying highly skilled
            technology professionals to drive sustainable business growth.
          </p>

          {/* CTA */}
         

          {/* Trust Stack */}
          <div className="mt-14 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-slate-400">
            <span>✔ Sap S4 hana Functional ( FICO,MM,SD,PP,PS,PM,QM)</span>
            <span>✔ Sap S4 hana Technical (ABAP,BASIS)</span>
            <span>✔ Web Application development		</span>
            <span>✔ Staffing of skilled resources</span>
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
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900/70 border border-slate-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-semibold text-white">
              Send us email
            </h2>
            <p className="mt-2 text-sm text-slate-400">
              Feel free to write to us anytime
            </p>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <input
                name="name"
                required
                placeholder="Enter Name"
                className="bg-transparent border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Enter Email"
                className="bg-transparent border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 outline-none"
              />
              <input
                name="phone"
                placeholder="Enter Phone"
                className="bg-transparent border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 outline-none"
              />
              <input
                name="address"
                placeholder="Enter Address"
                className="bg-transparent border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 outline-none"
              />
              <textarea
                name="message"
                rows="4"
                required
                placeholder="Enter Message"
                className="md:col-span-2 bg-transparent border border-slate-700 rounded-lg p-3 text-slate-200 placeholder-slate-400 focus:border-indigo-500 outline-none resize-none"
              />

              <div className="md:col-span-2 flex gap-4 items-center flex-wrap">
                <button 
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white text-sm font-medium disabled:opacity-60"
                >
                  <Send size={16} />
                  {loading ? "Sending..." : "Send Message"}
                </button>

                <button
                  type="reset"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-700 hover:bg-slate-800 transition text-sm"
                >

                  <RotateCcw size={16} /> Reset
                </button>

                {status === "success" && (
                  <span className="text-green-400 text-sm">
                    Message sent successfully ✔
                  </span>
                )}
                {status === "error" && (
                  <span className="text-red-400 text-sm">
                    Failed to send. Try again.
                  </span>
                )}
              </div>
            </form>
          </motion.div>

                
          {/* TRUST STRIP */}
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

        {/* RIGHT: INFO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              How Can We Help You?
            </h3>
            <div className="grid gap-5">
              <div className="flex gap-4 bg-[#020617] border border-slate-800 rounded-xl p-5">
                <Phone className="text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Dedicated Client Support
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Our experts assist with guidance, inquiries, and ongoing support.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-[#020617] border border-slate-800 rounded-xl p-5">
                <Mail className="text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Professional IT Consulting
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Chhaya IT Services delivers SAP and enterprise-grade solutions.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 bg-[#020617] border border-slate-800 rounded-xl p-5">
                <MapPin className="text-indigo-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold text-sm">
                    Trusted Technology Partner
                  </h4>
                  <p className="text-slate-400 text-xs mt-1">
                    Secure, scalable, and future-ready IT services for growing businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center">
              <Phone className="text-indigo-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold">Have any question?</h4>
              <p>📞 +91 8789124115</p>
              <p>📞 +91 9431133764</p>
            </div>
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center ">
              <Mail className="text-indigo-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold">Career</h4>
              <p>hr@chhayaitservices.com</p>
            </div>
            <div className="bg-[#020617] border border-slate-800 rounded-xl p-5 text-center sm:col-span-2">
              <MapPin className="text-indigo-400 mx-auto mb-2" />
              <h4 className="text-white font-semibold">Jharkhand / India</h4>
              <p>3rd Floor, Taj Building, 30 SNP Area, Aambagan, Sakchi, East Singhbhum, Jharkhand, India – 831001</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default ContactSection;
