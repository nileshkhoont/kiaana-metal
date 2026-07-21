"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
  const slides = [
    {
      image: "/hero_metal_trading.png",
      badge: "Global Import & Export Partner",
      title: "OFFERING EFFICIENT METAL TRADING SERVICES",
      description: "Upgrade your metal trading experience with Kiaana Metal Trading Inc. Access a reliable, transparent, and globally-connected range of high-grade industrial metals.",
    },
    {
      image: "/hero_scrap_metal.png",
      badge: "Sustainable Trade Objectives",
      title: "REDEFINING FERROUS METALS & SCRAP TRADING",
      description: "Setting high benchmarks in quality assurance and sustainable operations across Canada and international markets.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full overflow-hidden bg-slate-900 border-b border-slate-200 h-[calc(100dvh-80px)] md:h-[600px] text-white">
      {/* Slides Container */}
      <div className="relative w-full h-full">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center transition-transform duration-10000 transform scale-105"
              />
            </div>
            {/* Dark Overlay for readability */}
            <div className="absolute inset-0 bg-slate-950/60" />

            {/* Slide Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-20">
              <div className="max-w-3xl space-y-5 md:space-y-6">
                {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-teal/40 bg-brand-teal/10 text-brand-teal text-xs font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-ping"></span>
                  {slide.badge}
                </div> */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight font-sans">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg text-slate-350 text-slate-300 leading-relaxed max-w-2xl">
                  {slide.description}
                </p>
                <div className="flex gap-2.5 sm:gap-4 pt-2 w-full max-w-md">
                  <Link
                    href="/contact"
                    className="flex-1 inline-flex items-center justify-center px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-slate-950 text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-brand-orange/25 group whitespace-nowrap"
                  >
                    ENQUIRE NOW
                    <ArrowRight className="ml-1 sm:ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 shrink-0" />
                  </Link>
                  <a
                    href="#products"
                    className="flex-1 inline-flex items-center justify-center px-3 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-slate-600 hover:border-brand-teal hover:text-brand-teal bg-slate-900/60 hover:bg-slate-800 text-slate-200 text-xs sm:text-sm font-semibold tracking-wide transition-all whitespace-nowrap"
                  >
                    Explore Offerings
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 p-2 rounded-full bg-slate-900/40 hover:bg-brand-orange hover:text-slate-950 border border-slate-700 hover:border-brand-orange transition-all text-white focus:outline-none"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 bottom-4 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-40 p-2 rounded-full bg-slate-900/40 hover:bg-brand-orange hover:text-slate-950 border border-slate-700 hover:border-brand-orange transition-all text-white focus:outline-none"
        aria-label="Next Slide"
      >
        <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center space-x-2 pointer-events-none">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3.5 h-3.5 rounded-full border transition-all pointer-events-auto ${idx === current
              ? "bg-brand-orange border-brand-orange scale-110"
              : "bg-slate-900/60 border-slate-600 hover:border-slate-400"
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
