"use client";

import React from "react";
import { ShieldCheck, Factory, Globe, Award } from "lucide-react";
import { RotatingWord, ScrollRevealSection, ScrollRevealCard } from "@/components/common/WordAnimation";

export default function FeaturesSection() {
  const features = [
    {
      title: "Quality Assurance",
      description: "Strict grade assessment, chemical reports, and SGS/Intertek certified inspections for all container loads.",
      icon: ShieldCheck,
      tag: "100% Certified"
    },
    {
      title: "Direct Sourcing",
      description: "Established physical supply relationships with major global metal refineries and smelting hubs.",
      icon: Factory,
      tag: "Direct Access"
    },
    {
      title: "Global Supply Chain",
      description: "Custom freight logistics, ocean container handling, and seamless international customs clearance.",
      icon: Globe,
      tag: "120+ Ports"
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 text-slate-900 relative overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollRevealSection className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-700 text-xs font-black uppercase tracking-widest">
            <Award className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>Operational Excellence</span>
          </div>

          <h2 className="text-3xl font-extrabold text-slate-950 sm:text-4xl lg:text-5xl tracking-tight">
            Why Industrial Leaders Partner with <RotatingWord words={["Kiaana Metal", "Certified Stock", "Direct Traders"]} />
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Streamlining bulk commodity trading with transparency, rigorous quality assurance, and execution reliability.
          </p>
        </ScrollRevealSection>

        {/* Features Grid with Scroll Reveal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <ScrollRevealCard
                key={idx}
                index={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-center space-y-4 hover:border-amber-400 hover:shadow-[0_15px_35px_rgba(245,158,11,0.12)] transition-all duration-300 metallic-border-beam"
              >
                <div className="inline-flex p-4 rounded-2xl bg-white text-amber-600 border border-slate-200 shadow-sm">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{feat.description}</p>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200 inline-block">
                    {feat.tag}
                  </span>
                </div>
              </ScrollRevealCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
