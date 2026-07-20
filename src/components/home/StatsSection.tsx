"use client";

import React from "react";
import { Award, Globe, Handshake } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      value: "10+",
      label: "Years Experience in the metal industry",
      icon: <Award className="h-7 w-7 transition-transform duration-300" />,
    },
    {
      value: "200+",
      label: "Users worldwide",
      icon: <Globe className="h-7 w-7 transition-transform duration-300" />,
    },
    {
      value: "500+",
      label: "Transactions completed",
      icon: <Handshake className="h-7 w-7 transition-transform duration-300" />,
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden border-b border-slate-100 text-slate-800">
      {/* Background Image of Shipping Cranes with soft, low opacity light-blend */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.07] mix-blend-luminosity scale-105 pointer-events-none"
        style={{ backgroundImage: `url('https://lohaa.co.in/assets/images/bg_image.jpg')` }}
      />

      {/* Light gradient blobs */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-[0.25em] text-brand-orange uppercase">
            Kiaana By The Numbers
          </h2>
          <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Legacy of Trust and Global Reach
          </p>
          <div className="w-16 h-1 bg-brand-teal mx-auto rounded-full mt-4" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative group overflow-hidden rounded-2xl border border-white bg-white/70 backdrop-blur-md p-8 md:p-10 text-center transition-all duration-300 hover:border-brand-teal/30 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(37,151,177,0.1)] hover:-translate-y-1 flex flex-col items-center justify-between min-h-[260px]"
            >
              {/* Inner subtle color sweep */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/[0.02] via-transparent to-brand-orange/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon Container */}
              <div className="mb-6 p-4 rounded-2xl bg-slate-100 border border-slate-200/40 text-brand-teal group-hover:text-brand-orange group-hover:bg-brand-orange/10 group-hover:border-brand-orange/20 transition-all duration-300">
                {stat.icon}
              </div>

              {/* Stat Value */}
              <div className="flex-1 flex flex-col justify-center">
                <span className="text-5xl md:text-6xl font-black tracking-tight mb-3 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent group-hover:from-slate-900 group-hover:to-brand-teal transition-all duration-300">
                  {stat.value}
                </span>

                {/* Stat Label */}
                <p className="text-sm md:text-base text-slate-500 font-semibold leading-relaxed max-w-[240px] mx-auto group-hover:text-slate-700 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

