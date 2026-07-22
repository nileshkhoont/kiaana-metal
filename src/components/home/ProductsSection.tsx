"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ScrollRevealSection } from "@/components/common/WordAnimation";

export default function ProductsSection() {
  const categories = [
    {
      title: "Ferrous Metals",
      description: "Heavy melting scrap, iron ore, steel alloys, plates, sheets, and structured industrial beams.",
      bgGradient: "from-white to-slate-50",
      lineColor: "bg-brand-teal",
      linkAccent: "text-brand-teal hover:text-brand-teal/80",
      dotAccent: "bg-brand-teal",
      items: ["Heavy Melting Steel (HMS 1&2)", "Shredded Scrap", "Cast Iron", "Iron Ore Pellets"],
    },
    {
      title: "Non-Ferrous Metals",
      description: "High-purity industrial metals including copper, aluminium, zinc, lead, and tin options.",
      bgGradient: "from-white to-amber-50/20",
      lineColor: "bg-brand-orange",
      linkAccent: "text-brand-orange hover:text-brand-orange/80",
      dotAccent: "bg-brand-orange",
      items: ["Copper Cathodes & Scrap", "Aluminium Ingots & Alloys", "Zinc Ingots (99.99%)", "Lead Alloys"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header with Scroll Reveal */}
        <ScrollRevealSection className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-[0.25em] text-brand-teal uppercase">Product Catalog</h2>
          <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Our Metal Sourcing Portfolios</p>
          <p className="text-slate-600">We offer bulk physical supply of high-grade raw metals and processed metal scraps to clients worldwide.</p>
        </ScrollRevealSection>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
              className={`relative p-8 rounded-2xl bg-gradient-to-br ${cat.bgGradient} border border-slate-200 flex flex-col justify-between hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 overflow-hidden pt-10`}
            >
              {/* ANIMATED TOP DRAWING LINE ON SCROLL */}
              <div className="absolute top-0 left-0 right-0 h-1.5 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.85, delay: 0.2 + idx * 0.2, ease: [0.25, 1, 0.5, 1] }}
                  className={`h-full origin-left ${cat.lineColor}`}
                />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{cat.title}</h3>
                <p className="text-sm leading-relaxed mb-6 text-slate-600">{cat.description}</p>
                
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
