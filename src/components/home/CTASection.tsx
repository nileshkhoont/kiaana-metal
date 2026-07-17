"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative py-20 bg-slate-50 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Ready to Optimize Your Metal Supply Chain?
        </h2>
        <p className="text-slate-655 text-base max-w-xl mx-auto text-slate-600">
          Get custom quotes, shipping terms, and material specifications suited for your manufacturing operations.
        </p>
        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-slate-950 font-bold tracking-wide transition-all shadow-md hover:shadow-brand-orange/25 group"
          >
            Contact Our Sales Team
            <ArrowRight className="ml-2 h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
