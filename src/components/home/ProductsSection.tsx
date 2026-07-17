"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsSection() {
  const categories = [
    {
      title: "Ferrous Metals",
      description: "Heavy melting scrap, iron ore, steel alloys, plates, sheets, and structured industrial beams.",
      bgGradient: "from-white to-slate-50",
      accent: "border-t-4 border-t-brand-teal border-slate-200",
      linkAccent: "text-brand-teal hover:text-brand-teal/80",
      dotAccent: "bg-brand-teal",
      items: ["Heavy Melting Steel (HMS 1&2)", "Shredded Scrap", "Cast Iron", "Iron Ore Pellets"],
    },
    {
      title: "Non-Ferrous Metals",
      description: "High-purity industrial metals including copper, aluminium, zinc, lead, and tin options.",
      bgGradient: "from-white to-amber-50/20",
      accent: "border-t-4 border-t-brand-orange border-slate-200",
      linkAccent: "text-brand-orange hover:text-brand-orange/80",
      dotAccent: "bg-brand-orange",
      items: ["Copper Cathodes & Scrap", "Aluminium Ingots & Alloys", "Zinc Ingots (99.99%)", "Lead Alloys"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-[0.25em] text-brand-teal uppercase">Product Catalog</h2>
          <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Metal Sourcing Portfolios</p>
          <p className="text-slate-600">We offer bulk physical supply of high-grade raw metals and processed metal scraps to clients worldwide.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-2xl bg-gradient-to-br ${cat.bgGradient} border ${cat.accent} flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300`}
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-slate-655 text-sm leading-relaxed mb-6 text-slate-600">{cat.description}</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {cat.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2.5 text-sm text-slate-700">
                      <span className={`w-1.5 h-1.5 rounded-full ${cat.dotAccent} shrink-0`}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href="/contact"
                className={`inline-flex items-center gap-1 text-sm font-bold ${cat.linkAccent} group`}
              >
                Request Specs & Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
