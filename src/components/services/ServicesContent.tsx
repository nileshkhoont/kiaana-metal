import React from "react";
import { servicesData } from "@/data/servicesData";
import { Check } from "lucide-react";
import Link from "next/link";

export default function ServicesContent() {
  // Map service IDs to their specific image paths
  const serviceImages: Record<string, string> = {
    "bulk-metal-supply": "/scrap_metal.png",
    "scrap-metal-recovery": "/recycling_plant.png",
    "import-facilitation": "/industrial_import.png",
    "global-logistics-freight": "/logistics_vessel.png",
  };

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans">

      {/* Hero Section (Warm neutral background, serif text) */}
      <div className="relative bg-slate-100/80 py-20 md:py-32 flex flex-col items-center justify-center text-center overflow-hidden border-b border-slate-200">

        {/* Serif Heading Overlaid */}
        <div className="max-w-4xl mx-auto px-4 z-20 space-y-4">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-light tracking-tight text-slate-900 leading-tight">
            Industrial Metal Supply & Trade
          </h1>
          <p className="text-xs uppercase tracking-[0.3em] font-mono text-brand-teal">
            Scale your supply chain with quality commodities
          </p>
          <div className="pt-4">
            <Link
              href="/contact"
              className="inline-block px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange/90 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-brand-orange/25 transition-all"
            >
              Let's Talk →
            </Link>
          </div>
        </div>
      </div>

      {/* Intro Text Section */}
      <div className="bg-white py-20 border-b border-slate-200 text-center px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-brand-teal block">
            We're not just another commodity desk
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-light text-slate-900 leading-snug tracking-tight">
            We turn <span className="italic font-normal text-brand-teal">metal procurement</span> from a logistics bottleneck into your biggest <span className="italic font-normal text-brand-teal">competitive advantage</span>
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto font-light">
            We understand that behind every shipment, grade test, and custom clearance is an industrial operation waiting to produce. We connect you seamlessly.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-24 space-y-32">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-serif font-light tracking-[0.1em] text-slate-900 uppercase">
            Services
          </h2>
          <div className="w-12 h-[1px] bg-brand-teal mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-32">
          {servicesData.services.map((service, idx) => {
            const isEven = idx % 2 === 1;
            const serviceImg = serviceImages[service.id] || "/scrap_metal.png";

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >

                {/* Content Block */}
                <div
                  className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  {/* Big elegant numeral */}
                  <span className="text-6xl md:text-7xl font-serif font-light text-brand-light-orange select-none block leading-none">
                    {idx + 1}.
                  </span>

                  {/* Service Title */}
                  <div className="border-b border-slate-200 pb-3">
                    <h3 className="text-2xl font-serif font-light text-slate-900 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {service.description}
                  </p>

                  {/* Checklist */}
                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <li
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs text-slate-600 font-light"
                      >
                        <Check className="h-3.5 w-3.5 text-brand-teal shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                      href="/contact"
                      className="px-5 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-brand-orange/20"
                    >
                      Request Quote ›
                    </Link>
                  </div>
                </div>

                {/* Polaroid-Style Image Block */}
                <div
                  className={`lg:col-span-6 flex justify-center ${isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                >
                  <div className="bg-white p-4 pb-12 rounded-2xl border border-slate-200/60 shadow-[0_15px_30px_rgba(0,0,0,0.03)] max-w-sm w-full transition-transform duration-500 hover:rotate-1">
                    <div className="overflow-hidden aspect-square rounded-xl">
                      <img
                        src={serviceImg}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* Portfolio Showcase section */}
      <div className="bg-white py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">

          <div className="text-center space-y-2">
            <h3 className="text-2xl font-serif font-light text-slate-900">
              Real Results for Real Businesses
            </h3>
            <span className="text-[10px] uppercase tracking-[0.25em] text-brand-teal block">
              Portfolio Showcase
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
            {[
              { path: "/scrap_metal.png", title: "Heavy Metal Scrap Sorting" },
              { path: "/industrial_import.png", title: "Import Commodity Storage" },
              { path: "/logistics_vessel.png", title: "Global Vessel Cargo Clearing" }
            ].map((port, pIdx) => (
              <div key={pIdx} className="group overflow-hidden rounded-2xl bg-slate-50 p-3 border border-slate-200/60 hover:shadow-md transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden rounded-xl">
                  <img
                    src={port.path}
                    alt={port.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-xs font-serif font-light text-slate-800 pt-3 text-center">
                  {port.title}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  );
}
