"use client";

import React from "react";
import { ShieldCheck, Factory, Globe } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      title: "Quality Assurance",
      description: "Strict grade assessment and certified chemical reports for all shipments.",
      icon: ShieldCheck,
    },
    {
      title: "Direct Sourcing",
      description: "Established relationships with major global metal refineries and smelting hubs.",
      icon: Factory,
    },
    {
      title: "Global Supply Chain",
      description: "Custom logistics, ocean freight handling, and efficient customs clearance.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-[0.25em] text-brand-teal uppercase">Operational Excellence</h2>
          <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Why Leaders Partner with Kiaana</p>
          <p className="text-slate-655 text-sm text-slate-600">Streamlining bulk commodity trading with transparency and execution reliability.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-200/60 text-center space-y-4 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300">
                <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">{feat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
