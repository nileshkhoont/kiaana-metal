"use client";

import React from "react";
import { Award, Globe, Handshake, ShieldCheck, Zap } from "lucide-react";
import { StaggerWords, ScrollRevealSection, ScrollRevealCard } from "@/components/common/WordAnimation";

export default function StatsSection() {
  const stats = [
    {
      value: "10+",
      label: "Years Experience in Global Metal Industry",
      subtext: "Established trade networks & verified mills",
      icon: <Award className="h-7 w-7 transition-transform duration-300" />,
    },
    {
      value: "200+",
      label: "Industrial Clients & Foundries Worldwide",
      subtext: "Shipping across 120+ ocean container ports",
      icon: <Globe className="h-7 w-7 transition-transform duration-300" />,
    },
    {
      value: "500+",
      label: "International Metal Shipments Delivered",
      subtext: "100% On-time ISRI/AQSIQ certified clearance",
      icon: <Handshake className="h-7 w-7 transition-transform duration-300" />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden border-b border-slate-200 text-slate-900 select-none">
      
      {/* Light Theme Glow Blobs */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollRevealSection className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-700 text-xs font-black uppercase tracking-widest">
            <Zap className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>Kiaana Performance Metrics</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            <StaggerWords text="A Legacy of Trust, Scale, and Global Reach" repeatOnScroll={true} />
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Delivering certified ferrous scrap, non-ferrous alloys, and heavy structural steel with proven execution across world markets.
          </p>

          <div className="w-16 h-1 bg-gradient-to-r from-sky-500 to-amber-500 mx-auto rounded-full mt-4" />
        </ScrollRevealSection>

        {/* Stats Grid with Scroll-Triggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <ScrollRevealCard
              key={i}
              index={i}
              className="relative group overflow-hidden rounded-3xl border border-slate-200 bg-white/90 backdrop-blur-xl p-8 text-center transition-all duration-300 hover:border-amber-400 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 flex flex-col items-center justify-between min-h-[290px] metallic-border-beam"
            >
              {/* Inner subtle color sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.03] via-transparent to-sky-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="mb-4 p-4 rounded-2xl bg-slate-100 border border-slate-200 text-amber-600 group-hover:scale-110 group-hover:bg-amber-50 transition-all duration-300 shadow-sm">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <div className="flex-1 flex flex-col justify-center my-2">
                <span className="text-5xl md:text-6xl font-black tracking-tight mb-2 bg-gradient-to-r from-slate-950 via-slate-800 to-amber-600 bg-clip-text text-transparent">
                  {stat.value}
                </span>

                {/* Stat Label */}
                <p className="text-base text-slate-900 font-bold leading-tight max-w-[260px] mx-auto">
                  {stat.label}
                </p>

                <p className="text-xs text-slate-500 font-medium mt-1">
                  {stat.subtext}
                </p>
              </div>

              {/* Bottom verified badge pill */}
              <div className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                <ShieldCheck className="h-3 w-3 text-emerald-600" />
                <span>Verified Track Record</span>
              </div>
            </ScrollRevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
