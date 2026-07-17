"use client";

import React from "react";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProductsSection from "@/components/home/ProductsSection";
import RoadmapSection from "@/components/home/RoadmapSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="w-full flex flex-col bg-slate-50 text-slate-800">
      <HeroSection />
      <StatsSection />
      <ProductsSection />
      <RoadmapSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}
