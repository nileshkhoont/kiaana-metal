"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { servicesData } from "@/data/servicesData";
import { CheckCircle2, Sparkles, ArrowRight, ShieldCheck, Award, Globe, Factory } from "lucide-react";
import Link from "next/link";
import { RotatingWord, StaggerWords, ScrollRevealSection } from "@/components/common/WordAnimation";

export default function ServicesContent() {
  const serviceImages: Record<string, string> = {
    "bulk-metal-supply": "/scrap_metal.png",
    "scrap-metal-recovery": "/recycling_plant.png",
    "import-facilitation": "/industrial_import.png",
    "global-logistics-freight": "/logistics_vessel.png",
  };

  const serviceMetrics = [
    { title: "Physical Supply", value: "100% Verified", icon: Factory },
    { title: "Assay Reports", value: "SGS Certified", icon: Award },
    { title: "Export Logistics", value: "120+ Ports", icon: Globe },
    { title: "Trade Standards", value: "ISRI Approved", icon: ShieldCheck },
  ];

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans select-none overflow-hidden transform-gpu">

      {/* 1. HERO SECTION */}
      <div className="relative bg-gradient-to-b from-white via-slate-50 to-slate-100 py-16 md:py-24 flex flex-col items-center justify-center text-center border-b border-slate-200">
        
        {/* Soft Ambient Glow Blobs */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

        <ScrollRevealSection className="max-w-4xl mx-auto px-4 z-20 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300/80 text-amber-700 text-xs font-black uppercase tracking-widest mx-auto shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>COMMODITY TRADE SERVICES & LOGISTICS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-950 leading-tight font-display inline-flex flex-wrap items-baseline justify-center gap-x-3 w-full">
            <span>Industrial Metal Supply &</span>
            <RotatingWord words={["Trade Logistics", "Scrap Recovery", "Import Solutions"]} className="font-serif-accent text-amber-600 font-normal" />
          </h1>

          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] font-mono text-slate-600 max-w-xl mx-auto">
            Scale your supply chain with certified raw commodities & international ocean freight execution
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-[0.2em] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <span>Get Custom Quotation</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </ScrollRevealSection>
      </div>

      {/* 2. METRICS DISPLAY STRIP */}
      <div className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {serviceMetrics.map((m, idx) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center gap-3.5 hover:border-amber-400 transition-colors shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-white text-amber-600 border border-slate-200 shrink-0">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">{m.title}</span>
                    <span className="text-sm font-black text-slate-900 font-mono">{m.value}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. EDITORIAL INTRO BANNER */}
      <div className="bg-gradient-to-b from-white to-slate-50 py-14 md:py-20 border-b border-slate-200 text-center px-4 sm:px-6">
        <ScrollRevealSection className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-950 leading-snug tracking-tight">
            We turn <span className="font-serif-accent text-amber-600 italic">metal procurement</span> from a logistics bottleneck into your biggest <span className="font-serif-accent text-amber-600 italic">competitive advantage</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-light">
            We understand that behind every container shipment, grade assay test, and customs clearance is an industrial operation waiting to produce.
          </p>
        </ScrollRevealSection>
      </div>

      {/* 4. MAIN SERVICES CATALOG SHOWCASE */}
      <div className="py-20 space-y-20">
        <ScrollRevealSection className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-800 text-xs font-black uppercase tracking-widest mx-auto">
            <span>OUR CORE OPERATIONAL PILLARS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-wider font-display">
            <StaggerWords text="Comprehensive Metal Trading Solutions" className="justify-center text-center" />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 mx-auto rounded-full mt-2" />
        </ScrollRevealSection>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-20 lg:space-y-28">
          {servicesData.services.map((service, idx) => {
            const isEven = idx % 2 === 1;
            const serviceImg = serviceImages[service.id] || "/scrap_metal.png";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              >

                {/* Left/Right Content Block */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="border-b border-slate-200 pb-4 relative">
                    <span className="text-4xl md:text-5xl font-black text-amber-500/30 select-none block leading-none mb-2 font-mono">
                      0{idx + 1}.
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {service.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800 font-medium p-3 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-amber-400 transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 group"
                    >
                      <span>Request Service Specifications</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right/Left Image Frame Block with Next.js Image Optimization */}
                <div
                  className={`lg:col-span-6 flex justify-center ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="bg-white p-3.5 rounded-3xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.08)] max-w-md w-full transition-all duration-500 hover:scale-[1.02] metallic-border-beam group relative">
                    <div className="overflow-hidden aspect-[4/3] rounded-2xl relative">
                      <Image
                        src={serviceImg}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        quality={80}
                        loading="lazy"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Floating Assay Badge Overlay */}
                      <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-[10px] font-bold text-slate-900 flex items-center justify-between shadow-lg z-10">
                        <span className="flex items-center gap-1.5 uppercase tracking-wider font-mono text-slate-900">
                          <ShieldCheck className="w-4 h-4 text-amber-600" /> SGS / Intertek Sampled
                        </span>
                        <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                          100% Physical Supply
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
