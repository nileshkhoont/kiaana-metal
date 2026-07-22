"use client";

import React from "react";
import { TrendingUp, TrendingDown, Radio } from "lucide-react";

export interface TickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isUp: boolean;
}

const defaultRates: TickerItem[] = [
  { symbol: "HMS12", name: "Heavy Melting Scrap 1&2", price: "$385.00/MT", change: "+2.4%", isUp: true },
  { symbol: "CU-CAT", name: "Copper Cathodes LME", price: "$9,420.00/MT", change: "+1.8%", isUp: true },
  { symbol: "AL-ING", name: "Aluminium Ingot 99.7%", price: "$2,350.00/MT", change: "-0.4%", isUp: false },
  { symbol: "SS-304", name: "Stainless Steel 304", price: "$1,680.00/MT", change: "+1.2%", isUp: true },
  { symbol: "CU-MILBERRY", name: "Copper Wire Scrap", price: "$8,950.00/MT", change: "+3.1%", isUp: true },
  { symbol: "ZN-ING", name: "Special High Grade Zinc", price: "$2,840.00/MT", change: "+0.8%", isUp: true },
  { symbol: "FE-BILLET", name: "Steel Billets Fe500", price: "$540.00/MT", change: "-0.2%", isUp: false },
];

export default function MetalTicker() {
  const tickerItems = [...defaultRates, ...defaultRates];

  return (
    <div className="w-full bg-slate-900 text-slate-100 border-b border-slate-800 text-xs py-2 overflow-hidden select-none z-40 relative">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-3">
        {/* Live Badge */}
        <div className="shrink-0 flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-400 text-[10px] font-black uppercase tracking-wider shadow-sm">
          <Radio className="h-3 w-3 animate-pulse text-amber-400" />
          <span className="hidden sm:inline">LIVE SPOT MARKET</span>
          <span className="sm:hidden">LIVE</span>
        </div>

        {/* Scrolling Ticker Marquee */}
        <div className="overflow-hidden flex-1 relative">
          <div className="animate-marquee flex items-center space-x-6 sm:space-x-8 whitespace-nowrap">
            {tickerItems.map((item, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 font-mono">
                <span className="font-bold text-amber-300 text-[11px] font-sans tracking-wide">
                  {item.symbol}
                </span>
                <span className="text-slate-400 text-[10px] hidden md:inline">
                  ({item.name})
                </span>
                <span className="font-extrabold text-white">{item.price}</span>
                <span
                  className={`inline-flex items-center text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    item.isUp
                      ? "text-emerald-300 bg-emerald-950/80 border border-emerald-700/60"
                      : "text-rose-300 bg-rose-950/80 border border-rose-700/60"
                  }`}
                >
                  {item.isUp ? (
                    <TrendingUp className="h-2.5 w-2.5 mr-0.5 inline" />
                  ) : (
                    <TrendingDown className="h-2.5 w-2.5 mr-0.5 inline" />
                  )}
                  {item.change}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Update timestamp */}
        <div className="hidden lg:flex items-center text-[10px] text-slate-400 shrink-0 font-medium border-l border-slate-800 pl-3">
          Indicative Market Rates • 24/5
        </div>
      </div>
    </div>
  );
}
