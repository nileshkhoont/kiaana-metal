"use client";

import React from "react";
import MetalTicker from "@/components/common/MetalTicker";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsSection from "@/components/home/ProductsSection";
import TradeCalculatorSection from "@/components/home/TradeCalculatorSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-slate-50 text-slate-900">
      {/* <MetalTicker /> */}
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      {/* <TradeCalculatorSection /> */}
      <RoadmapSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
