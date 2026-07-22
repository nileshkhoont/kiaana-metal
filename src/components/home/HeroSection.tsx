"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function HeroSection() {
  const realSlides = [
    {
      image: "/hero_metal_trading.png",
      alt: "Real Industrial Steel Warehouse and Metal Trading Facility",
      badge: "AUTHENTIC INDUSTRIAL METAL SUPPLY",
      titlePrefix: "WE FORGE",
      titleAccent: "global trust",
      titleSuffix: "IN METAL TRADE",
      description:
        "Direct physical supply of certified ferrous metals, heavy structural steel, copper cathodes, and high-grade industrial alloys.",
    },
    {
      image: "/real_container_port.jpg",
      alt: "Real Ocean Freight Vessel and Container Port Logistics",
      badge: "GLOBAL LOGISTICS & PORT OPERATIONS",
      titlePrefix: "GLOBAL METAL EXPORT &",
      titleAccent: "freight logistics",
      titleSuffix: "WORLDWIDE",
      description:
        "Managing international container logistics, ocean freight exports, and bulk shipping across 120+ worldwide ports.",
    },
    {
      image: "/hero_scrap_metal.png",
      alt: "Real Metal Scrap Yard and Recycling Machinery",
      badge: "SUSTAINABLE METAL RECYCLING",
      titlePrefix: "REDEFINING FERROUS &",
      titleAccent: "non-ferrous scrap",
      titleSuffix: "PROCESSING",
      description:
        "Certified processing of HMS 1&2 scrap, shredded steel, copper wire, and aluminium scrap for global manufacturing.",
    },
    {
      image: "/real_metal_factory.jpg",
      alt: "Real High-Tech Steel Mill and Metal Production",
      badge: "QUALITY ASSURED METAL TRADING",
      titlePrefix: "PREMIUM RAW MATERIAL",
      titleAccent: "industrial sourcing",
      titleSuffix: "SOLUTIONS",
      description:
        "Connecting verified mills, foundries, and industrial buyers with transparent international trade compliance.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === realSlides.length - 1 ? 0 : prev + 1));
    }, 7000);
    return () => clearInterval(timer);
  }, [realSlides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === realSlides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? realSlides.length - 1 : prev - 1));
  };

  const trustBadges = [
    "Ferrous Metals",
    "Non-Ferrous Scrap",
    "Global Trade",
    "ISO Certified",
  ];

  return (
    <section className="relative w-full bg-[#1E232B] text-white overflow-hidden h-[calc(100dvh-80px)] flex flex-col justify-center select-none border-b border-slate-700/60">
      
      {/* -------------------------------------------------------------
          1. REAL PHOTOGRAPHY SLIDER BACKGROUND (Slightly Lighter Vignette)
         ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0">
        {realSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Real Industrial Photography Image */}
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover object-center transform scale-105 transition-transform duration-[12000ms]"
            />
            {/* Lighter Steel-Navy Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#171B22]/90 via-[#1A1F27]/75 to-[#1A1F27]/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171B22]/90 via-transparent to-[#171B22]/60" />
          </div>
        ))}
      </div>

      {/* -------------------------------------------------------------
          2. MAIN HERO CONTENT CONTAINER (Lighter Steel Navy Theme)
         ------------------------------------------------------------- */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full my-auto">
          
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-6 z-20">
            
            {/* Subtitle Badge Pill (Lighter Glassmorphism) */}
            <motion.div
              key={`badge-${current}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#F4B400]/50 bg-[#252A34]/90 backdrop-blur-xl shadow-md text-[#F4B400]"
            >
              <span className="w-2 h-2 rounded-full bg-[#F4B400] animate-ping shrink-0" />
              <span className="font-display text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em]">
                {realSlides[current].badge}
              </span>
            </motion.div>

            {/* Headline with High Contrast Crisp Text */}
            <motion.div
              key={`title-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white drop-shadow-md">
                <span>{realSlides[current].titlePrefix} </span>
                
                {/* Calligraphic Serif Accent Word */}
                <span className="font-serif-accent text-[#F4B400] font-normal capitalize drop-shadow-sm">
                  {realSlides[current].titleAccent}
                </span>
                
                <span> {realSlides[current].titleSuffix}</span>
              </h1>
            </motion.div>

            {/* Subtitle Description (Bright Slate for High Contrast) */}
            <motion.p
              key={`desc-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xs sm:text-base text-slate-200 font-normal leading-relaxed max-w-xl tracking-wide drop-shadow"
            >
              {realSlides[current].description}
            </motion.p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href="/#products"
                className="group relative inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xl bg-gradient-to-r from-[#F4B400] via-[#FFD700] to-[#E5A300] hover:from-[#FFC425] hover:to-[#F4B400] text-slate-950 font-display font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 shadow-[0_0_25px_rgba(244,180,0,0.35)] hover:shadow-[0_0_35px_rgba(244,180,0,0.7)] transform hover:-translate-y-0.5"
              >
                <span>Explore Products</span>
                <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-xl bg-[#252A34]/90 hover:bg-[#2F3542] border border-slate-500/40 hover:border-[#F4B400]/70 text-white font-display font-black text-xs uppercase tracking-[0.2em] transition-all duration-300 backdrop-blur-xl transform hover:-translate-y-0.5 shadow-md"
              >
                Get Quote
              </Link>
            </div>

            {/* Trust Indicators Bar (Lighter Slate Pills) */}
            <div className="pt-4 border-t border-slate-700/60">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {trustBadges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-200 bg-[#252A34]/80 border border-slate-600/50 px-3 py-2 rounded-xl backdrop-blur-md shadow-sm"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F4B400] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (Real Photography Frame & Controls) ================= */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            {/* Real Industrial Photography Frame */}
            <div className="relative w-full aspect-[4/3] max-h-[320px] sm:max-h-[380px] lg:max-h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#F4B400]/40 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group">
              <Image
                src={realSlides[current].image}
                alt={realSlides[current].alt}
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171B22] via-transparent to-transparent opacity-60" />
            </div>

            {/* Slide Navigation Controls & Progress Dots */}
            <div className="flex items-center justify-between w-full mt-4 px-1">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-xl bg-[#252A34]/90 hover:bg-[#F4B400] hover:text-slate-950 border border-slate-600/60 transition-all text-white backdrop-blur-md shadow-sm"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              <div className="flex items-center space-x-2">
                {realSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-500 ${
                      idx === current
                        ? "w-8 bg-[#F4B400] shadow-[0_0_10px_#F4B400]"
                        : "w-2.5 bg-white/40 hover:bg-white/70"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2.5 rounded-xl bg-[#252A34]/90 hover:bg-[#F4B400] hover:text-slate-950 border border-slate-600/60 transition-all text-white backdrop-blur-md shadow-sm"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
