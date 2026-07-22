"use client";

import React from "react";
import { ArrowRight, Trophy, Users, Globe, Factory, ShieldCheck, Target } from "lucide-react";
import { RotatingWord, ScrollRevealSection, ScrollRevealCard } from "@/components/common/WordAnimation";

export default function RoadmapSection() {
  const goals = [
    {
      title: "1. Scrap Metal Export Expansion",
      desc: "Procuring ferrous and non-ferrous metals from local industries, municipalities, and demolition contractors in Ontario and exporting to Asia, the Middle East, and Europe.",
      icon: <ArrowRight className="h-5 w-5 rotate-[-45deg]" />,
      tag: "Global Exports"
    },
    {
      title: "2. Canadian Recycling Facility",
      desc: "Setting up a state-of-the-art metal recycling facility in Canada to sort, shred, and process scrap locally, creating jobs and maximizing operational efficiency.",
      icon: <Factory className="h-5 w-5" />,
      tag: "Local Infrastructure"
    },
    {
      title: "3. Commodity Diversification",
      desc: "Expanding imports into industrial machinery, construction materials, and consumer products from emerging markets to satisfy a broader spectrum of Canadian buyers.",
      icon: <Globe className="h-5 w-5" />,
      tag: "Trade Expansion"
    },
    {
      title: "4. Job Creation & Workforce",
      desc: "Hiring locally trained Canadian workers and investing in programs for logistics, recycling, and trade compliance, targeting 15+ direct jobs in the next 1–2 years.",
      icon: <Users className="h-5 w-5" />,
      tag: "Canadian Workforce"
    },
    {
      title: "5. Sustainable & Green Practices",
      desc: "Designing our recycling operations to satisfy all provincial and federal regulations, adopting eco-friendly processes for a green-focused metal supply chain.",
      icon: <ShieldCheck className="h-5 w-5" />,
      tag: "Eco Supply Chain"
    },
    {
      title: "6. Bilateral Trade Alliances",
      desc: "Strengthening international partnerships in compliance with Canadian trade accords, cooperating with development agencies like Export Development Canada (EDC).",
      icon: <Trophy className="h-5 w-5" />,
      tag: "EDC Compliance"
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 text-slate-900 relative overflow-hidden select-none">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollRevealSection className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-700 text-xs font-black uppercase tracking-widest">
            <Target className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
            <span>Strategic Growth Blueprint</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
            Future Goals & <RotatingWord words={["Business Objectives", "Canadian Facilities", "Bilateral Trade"]} />
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Kiaana Metal Trading Inc. is committed to long-term growth, developing local recycling infrastructure, and investing in the Canadian workforce.
          </p>
        </ScrollRevealSection>

        {/* Goals Grid with Scroll-Triggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {goals.map((goal, idx) => (
            <ScrollRevealCard
              key={idx}
              index={idx}
              className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 hover:border-amber-400 transition-all duration-300 shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(245,158,11,0.12)] hover:-translate-y-1 flex flex-col justify-between space-y-4 metallic-border-beam"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex p-3 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200">
                    {goal.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-amber-50 border border-amber-200 text-amber-800">
                    {goal.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                  {goal.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {goal.desc}
                </p>
              </div>
            </ScrollRevealCard>
          ))}
        </div>

      </div>
    </section>
  );
}
