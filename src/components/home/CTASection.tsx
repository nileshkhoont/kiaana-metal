"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { RotatingWord, ScrollRevealSection } from "@/components/common/WordAnimation";

export default function CTASection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-slate-50 via-amber-50/30 to-slate-100 text-slate-900 overflow-hidden border-t border-slate-200 select-none">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <ScrollRevealSection className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-300 text-amber-700 text-xs font-black uppercase tracking-widest shadow-sm">
          <Sparkles className="w-4 h-4 text-amber-600 animate-spin" />
          <span>START YOUR METAL COMMODITY ORDER</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
          Ready to Optimize Your <RotatingWord words={["Metal Supply Chain?", "Tonnage Quotations?", "Ocean Freight Deliveries?"]} />
        </h2>

        <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Get custom quotes, ocean shipping terms, and material chemical specifications tailored for your manufacturing operations.
        </p>

        <div className="pt-4 flex flex-wrap justify-center items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] group transform hover:-translate-y-0.5"
          >
            <span>Contact Sales Desk</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </ScrollRevealSection>
    </section>
  );
}
