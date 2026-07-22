"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Box, Ship, ShieldCheck, ArrowRight, Sparkles } from "lucide-react";
import { RotatingWord, ScrollRevealSection } from "@/components/common/WordAnimation";

const metalSpecs = [
  {
    id: "hms",
    name: "HMS 1 & 2 Scrap",
    avgPayloadPerContainer: 25, // Metric Tons per 20ft container
    density: "Heavy Density (ISRI 200-206)",
    packaging: "Loose Bulk / Bundled Balers",
    compliance: "ISRI Certified • AQSIQ • SGS Pre-shipment",
  },
  {
    id: "copper",
    name: "Copper Millberry 99.99%",
    avgPayloadPerContainer: 22,
    density: "High Purity Electrolytic Wire",
    packaging: "Strapped Pallets / Shrink-wrapped",
    compliance: "LME Grade A • ISRI Birch/Cliff Standard",
  },
  {
    id: "aluminium",
    name: "Aluminium Ingots & Tense",
    avgPayloadPerContainer: 24,
    density: "Primary Alloy / Tense Scrap",
    packaging: "Steel Strapped Bundles on Pallets",
    compliance: "A380 / ADC12 Specs • SGS Verified",
  },
  {
    id: "stainless",
    name: "Stainless Steel 304 / 316",
    avgPayloadPerContainer: 26,
    density: "Austenitic Stainless Scrap",
    packaging: "Bulk Container Loaded / Boxed",
    compliance: "ASTM A240 • Chemical Analysis Certificate",
  },
];

export default function TradeCalculatorSection() {
  const [selectedMetal, setSelectedMetal] = useState(metalSpecs[0]);
  const [quantityMT, setQuantityMT] = useState(250);

  const containerCount = Math.ceil(quantityMT / selectedMetal.avgPayloadPerContainer);
  const estimatedCubicMeters = Math.round(quantityMT * 1.85);

  return (
    <section className="relative py-20 bg-slate-100 text-slate-900 overflow-hidden border-b border-slate-200 select-none">
      
      {/* Dynamic Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header with Scroll Reveal */}
        <ScrollRevealSection className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-amber-300 text-amber-700 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Interactive Logistics Calculator</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Estimate Your <RotatingWord words={["Container Load", "Metal Tonnage", "Export Shipping"]} /> Requirements
          </h2>

          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Plan your international scrap and alloy shipments with instant calculations on payload capacities, container counts, and export standards.
          </p>
        </ScrollRevealSection>

        {/* Main Interactive Widget Card with Scroll Reveal */}
        <ScrollRevealSection yOffset={40} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.06)] metallic-border-beam">
          
          {/* Left Controls Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step 1: Metal Select */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-3">
                1. Select Metal Commodity Grade
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {metalSpecs.map((metal) => (
                  <button
                    key={metal.id}
                    onClick={() => setSelectedMetal(metal)}
                    className={`p-3.5 rounded-2xl text-left border text-xs font-bold transition-all duration-200 flex flex-col justify-between ${
                      selectedMetal.id === metal.id
                        ? "bg-amber-50/80 border-amber-500 text-slate-950 shadow-sm"
                        : "bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300"
                    }`}
                  >
                    <span>{metal.name}</span>
                    <span className="text-[10px] text-slate-500 font-normal mt-1">
                      ~{metal.avgPayloadPerContainer} MT / 20ft FCL
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Slider input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-black uppercase tracking-wider text-slate-500">
                  2. Required Tonnage (Metric Tons)
                </label>
                <span className="text-xl font-black text-amber-600 font-mono">
                  {quantityMT.toLocaleString()} MT
                </span>
              </div>
              <input
                type="range"
                min="25"
                max="5000"
                step="25"
                value={quantityMT}
                onChange={(e) => setQuantityMT(Number(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>25 MT (1 FCL)</span>
                <span>1,000 MT</span>
                <span>5,000 MT</span>
              </div>
            </div>

            {/* Quick Specs summary pill */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Density & Specification:</span>
                <span className="font-bold text-amber-700">{selectedMetal.density}</span>
              </div>
              <div className="flex items-center justify-between text-slate-700">
                <span className="font-semibold">Compliance Standards:</span>
                <span className="font-bold text-slate-900">{selectedMetal.compliance}</span>
              </div>
            </div>

          </div>

          {/* Right Calculations Card Column */}
          <div className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-50 to-amber-50/40 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6 shadow-sm">
            
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-amber-600" />
                <span className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Export Shipping Estimate
                </span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 font-bold">
                Ready for Export
              </span>
            </div>

            {/* Calculated Grid */}
            <div className="grid grid-cols-2 gap-4">
              
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Box className="h-4 w-4 text-amber-600" />
                  <span>20ft FCL Containers</span>
                </div>
                <div className="text-3xl font-black text-slate-950 font-mono">
                  {containerCount} <span className="text-xs font-normal text-slate-500">units</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  ~{selectedMetal.avgPayloadPerContainer} MT per container payload
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                <div className="flex items-center gap-2 text-slate-500 text-xs mb-1">
                  <Ship className="h-4 w-4 text-sky-600" />
                  <span>Est. Cargo Volume</span>
                </div>
                <div className="text-3xl font-black text-sky-700 font-mono">
                  ~{estimatedCubicMeters} <span className="text-xs font-normal text-slate-500">m³</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1">
                  Standard ocean freight stowage
                </div>
              </div>

            </div>

            {/* Quality & Security Guarantee */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 shadow-sm">
              <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-slate-900 block">Pre-Shipment Inspection & Weight Guarantee</span>
                <span className="text-slate-600 text-[11px]">
                  All containers are weighed on certified weighbridges with SGS / Intertek inspection certificates included with bill of lading.
                </span>
              </div>
            </div>

            {/* Direct Action Link */}
            <Link
              href={`/contact?metal=${encodeURIComponent(selectedMetal.name)}&quantity=${quantityMT}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-600 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-widest transition-all duration-300 shadow-[0_4px_20px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.5)] group transform hover:-translate-y-0.5"
            >
              <span>Request Quote for {quantityMT} MT {selectedMetal.name}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>

          </div>

        </ScrollRevealSection>
      </div>
    </section>
  );
}
