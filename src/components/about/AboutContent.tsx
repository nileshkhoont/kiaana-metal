"use client";

import React from "react";
import { motion } from "framer-motion";
import { aboutData } from "@/data/aboutData";
import { RotatingWord, StaggerWords, ScrollRevealSection } from "@/components/common/WordAnimation";
import { Sparkles } from "lucide-react";

export default function AboutContent() {
  return (
    <div className="w-full bg-slate-50 text-slate-900 pt-4 pb-16 md:pt-6 md:pb-24 font-sans overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10 md:space-y-16">

        {/* Section 1: Clean Editorial Text Hero */}
        <ScrollRevealSection className="max-w-3xl mx-auto pt-4 pb-0 md:pt-6 md:pb-8 space-y-8 flex flex-col justify-center">
          <div className="space-y-3 text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-300 text-amber-700 text-xs font-black uppercase tracking-widest mx-auto">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 animate-pulse" />
              <span>Who We Are</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-slate-950 font-display inline-flex flex-wrap items-baseline justify-center gap-x-2 w-full">
              <span>About</span>
              <RotatingWord words={["Kiaana Metal", "Global Trade", "Eco Recycling", "Direct Sourcing"]} className="font-serif-accent text-amber-600 font-normal" />
            </h1>
          </div>

          <div className="w-full h-[1px] bg-slate-300/80" />

          <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-light text-center">
            <p className="font-semibold text-slate-900 text-lg md:text-xl">
              We are a global trading enterprise specializing in metal procurement, recycling infrastructure, international logistics, and sustainable resource management.
            </p>
            <p>
              Together, we create bespoke solutions for industrial supply chains, embedding sustainability to source high-grade materials across Ontario and global hubs.
            </p>
            <p>
              Our diverse trading compliance allows us to approach each shipment with absolute safety and deliver exceptional results.
            </p>
          </div>

          <div className="w-full h-[1px] bg-slate-300/80" />

          {/* Bottom Accent Words */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-bold tracking-widest text-slate-500 uppercase">
            <span>Metals</span>
            <span className="text-amber-500">✦</span>
            <span>Strategy</span>
            <span className="text-amber-500">✦</span>
            <span>Sustainability</span>
          </div>
        </ScrollRevealSection>

        {/* Section 2: Curved Timeline & Stacked List */}
        <div className="relative pt-6 md:pt-12 border-t border-slate-200">
          
          <ScrollRevealSection className="text-center max-w-2xl mx-auto mb-12 space-y-2 flex flex-col items-center justify-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 text-center w-full">
              <StaggerWords text="Strategic Business Roadmap & Objectives" className="justify-center text-center" />
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm text-center">
              Building long-term recycling infrastructure and trade networks in Canada.
            </p>
          </ScrollRevealSection>

          {/* Desktop Curved S-Curve Timeline */}
          <div className="relative hidden lg:block h-[1800px] w-full">

            {/* Background SVG path */}
            <svg className="w-full h-full stroke-slate-300 fill-none absolute inset-0" viewBox="0 0 1000 1800" preserveAspectRatio="none">
              <path
                d="M 500,0 
                   C 200,75 200,225 500,300 
                   C 800,375 800,525 500,600 
                   C 200,675 200,825 500,900 
                   C 800,975 800,1125 500,1200 
                   C 200,1275 200,1425 500,1500 
                   C 800,1575 800,1725 500,1800"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                d="M 500,0 
                   C 200,75 200,225 500,300 
                   C 800,375 800,525 500,600 
                   C 200,675 200,825 500,900 
                   C 800,975 800,1125 500,1200 
                   C 200,1275 200,1425 500,1500 
                   C 800,1575 800,1725 500,1800"
                strokeWidth="2.5"
                className="stroke-amber-500"
              />
            </svg>

            {/* Render items absolute */}
            {aboutData.goals.map((goal, idx) => {
              const isEven = idx % 2 === 1;
              const yOffset = 150 + idx * 300;
              const dotX = isEven ? "left-[65%]" : "left-[35%]";
              const contentX = isEven ? "left-[68%] w-[27%] text-left pl-6" : "left-[5%] w-[27%] text-right pr-6";

              return (
                <div key={goal.id} className="absolute w-full group transition-all duration-300">
                  {/* Timeline node dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.4, delay: idx * 0.15 }}
                    className={`absolute ${dotX} -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-amber-500 shadow-md z-20 transition-transform duration-300 group-hover:scale-125 ring-4 ring-white`}
                    style={{ top: `${yOffset}px` }}
                  />

                  {/* Node label number */}
                  <span
                    className="absolute font-mono text-[10px] text-slate-500 font-bold -translate-y-1/2 z-20"
                    style={{
                      top: `${yOffset}px`,
                      left: isEven ? "calc(65% - 30px)" : "calc(35% + 20px)"
                    }}
                  >
                    0{goal.id}.
                  </span>

                  {/* Content block */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: idx * 0.15 + 0.1 }}
                    className={`absolute -translate-y-1/2 space-y-2 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm transition-all duration-300 group-hover:border-amber-400 group-hover:shadow-md metallic-border-beam ${contentX}`}
                    style={{ top: `${yOffset}px` }}
                  >
                    <div className="text-amber-600 font-mono text-xs uppercase tracking-wider font-bold">
                      ● {goal.shortTitle}
                    </div>
                    <h3 className="text-slate-950 text-base font-bold tracking-tight">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {goal.description}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Timeline Stack - Centered Layout */}
          <div className="lg:hidden space-y-14 relative px-2">
            {/* Background static line centered */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200" />
            
            {/* Animated Draw Line on Scroll centered */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 overflow-hidden">
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="w-full h-full bg-amber-500 origin-top"
              />
            </div>

            {aboutData.goals.map((goal, idx) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center pt-8 max-w-sm mx-auto"
              >
                {/* Animated Center Node Dot on Scroll */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + 0.1, ease: "backOut" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-amber-500 ring-4 ring-white shadow-md z-10"
                />

                {/* Centered Content Card */}
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm space-y-2 w-full metallic-border-beam hover:border-amber-400 transition-colors text-center">
                  <span className="font-mono text-xs text-amber-600 font-bold block">
                    0{goal.id}.
                  </span>
                  <div className="text-amber-600 font-mono text-xs uppercase tracking-wider font-bold">
                    ● {goal.shortTitle}
                  </div>
                  <h3 className="text-slate-950 text-base font-bold tracking-tight">
                    {goal.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed font-light">
                    {goal.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
