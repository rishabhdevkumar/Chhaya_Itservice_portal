import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCheck, FaArrowRight } from "react-icons/fa";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: "SAP Support Services",
      subtitle: "Functional · Technical · BASIS · ABAP",
      route: "/services/sap",
      points: [
        "End-to-end SAP Functional & Technical Support",
        "SAP BASIS administration and system monitoring",
        "Custom development and enhancements using ABAP",
        "Application maintenance, optimization, and issue resolution",
      ],
    },
    {
      title: "Web-based Customized ERP Solutions",
      subtitle: "Tailored Enterprise Platforms",
      route: "/services/erp",
      points: [
        "Custom-built ERP solutions aligned with business workflows",
        "Web-based access with role-based controls and dashboards",
        "Process automation and real-time reporting",
        "Scalable, secure, and integration-ready architecture",
      ],
    },
    {
      title: "Deployment of Skilled Resources",
      subtitle: "Onsite · Offshore · Project-based",
      route: "/services/web-development",
      points: [
        "Deployment of experienced SAP consultants",
        "Skilled resources in Java, PHP, and Web Development",
        "Flexible engagement models based on project needs",
        "Reliable talent aligned with enterprise delivery standards",
      ],
    },
  ];

  return (
    <section className="bg-white py-28 font-[Inter] text-slate-900">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C6A24A] font-medium">
            Our Services
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight">
            Service Portfolio
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Focused enterprise services across SAP support, customized ERP
            platforms, and skilled resource deployment.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl
              border border-slate-200 bg-white px-8 py-10
              shadow-[0_8px_24px_rgba(0,0,0,0.05)]
              hover:shadow-[0_12px_32px_rgba(0,0,0,0.07)]
              transition-shadow"
            >
              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#C6A24A] font-medium">
                  {service.subtitle}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex gap-3">
                      <FaCheck className="mt-1 text-[#C6A24A] flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed text-[15px]">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Premium Button */}
              <button
                onClick={() => navigate(service.route)}
                className="group mt-10 inline-flex items-center gap-3
                text-sm font-medium tracking-wide
                text-slate-900 border border-slate-300
                rounded-full px-6 py-2.5
                hover:border-[#C6A24A] hover:text-[#C6A24A]
                transition-colors"
              >
                Explore Service
                <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
