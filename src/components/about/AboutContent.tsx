import React from "react";
import { aboutData } from "@/data/aboutData";

export default function AboutContent() {
  return (
    <div className="w-full bg-slate-50 text-slate-800 pt-4 pb-16 md:pt-6 md:pb-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10 md:space-y-16">

        {/* Top Breadcrumb/Nav Element */}
        {/* <div className="text-center">
          <span className="text-xs uppercase tracking-[0.2em] font-mono text-slate-400">
            main <span className="text-brand-teal">/ {aboutData.title}</span>
          </span>
        </div> */}

        {/* Section 1: Clean Editorial Text Hero (No Image) */}
        <div className="max-w-3xl mx-auto pt-4 pb-0 md:pt-6 md:pb-8 space-y-8 flex flex-col justify-center">
          <div className="space-y-3 text-center">
            <span className="text-xs font-bold tracking-[0.25em] text-brand-teal uppercase block">
              Who We Are
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight text-slate-900 leading-none lowercase">
              about us.
            </h1>
          </div>

          <div className="w-full h-[1px] bg-slate-300/80" />

          <div className="space-y-6 text-slate-655 text-base md:text-lg leading-relaxed text-slate-600 font-light text-center">
            <p className="font-semibold text-slate-900 text-lg md:text-xl lowercase">
              we are a global trading enterprise specializing in metal procurement, recycling infrastructure, international logistics, and sustainable resource management.
            </p>
            <p className="lowercase">
              together, we create bespoke solutions for industrial supply chains, embedding sustainability to source high-grade materials across Ontario and global hubs.
            </p>
            <p className="lowercase">
              our diverse trading compliance allows us to approach each shipment with absolute safety and deliver exceptional results.
            </p>
          </div>

          <div className="w-full h-[1px] bg-slate-300/80" />

          {/* Bottom Accent Words */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-4 text-[9px] min-[360px]:text-[10px] sm:text-xs font-bold tracking-[0.12em] sm:tracking-[0.2em] text-slate-400 uppercase whitespace-nowrap">
            <span>Metals</span>
            <span className="text-brand-orange shrink-0">✦</span>
            <span>Strategy</span>
            <span className="text-brand-orange shrink-0">✦</span>
            <span>Sustainability</span>
          </div>
        </div>

        {/* Section 3: Curved Timeline (Desktop) & Stacked List (Mobile) */}
        <div className="relative pt-6 md:pt-12 border-t border-slate-200/60">

          {/* Desktop Curved S-Curve Timeline */}
          <div className="relative hidden lg:block h-[1800px] w-full">

            {/* Background SVG path */}
            <svg className="w-full h-full stroke-slate-200 fill-none absolute inset-0" viewBox="0 0 1000 1800" preserveAspectRatio="none">
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
              <path
                d="M 500,0 
                   C 200,75 200,225 500,300 
                   C 800,375 800,525 500,600 
                   C 200,675 200,825 500,900 
                   C 800,975 800,1125 500,1200 
                   C 200,1275 200,1425 500,1500 
                   C 800,1575 800,1725 500,1800"
                strokeWidth="1.5"
                className="stroke-brand-teal/40"
              />
            </svg>

            {/* Render the 6 items absolute */}
            {aboutData.goals.map((goal, idx) => {
              const isEven = idx % 2 === 1;
              const yOffset = 150 + idx * 300;
              const dotX = isEven ? "left-[65%]" : "left-[35%]";
              const contentX = isEven ? "left-[68%] w-[27%] text-left pl-6" : "left-[5%] w-[27%] text-right pr-6";

              return (
                <div key={goal.id} className="absolute w-full group transition-all duration-300">
                  {/* Timeline node dot */}
                  <div
                    className={`absolute ${dotX} -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-brand-teal shadow-[0_0_12px_rgba(37,151,177,0.4)] z-20 transition-transform duration-300 group-hover:scale-125 ring-4 ring-slate-50`}
                    style={{ top: `${yOffset}px` }}
                  />

                  {/* Node label number */}
                  <span
                    className="absolute font-mono text-[10px] text-slate-400 font-bold -translate-y-1/2 z-20"
                    style={{
                      top: `${yOffset}px`,
                      left: isEven ? "calc(65% - 30px)" : "calc(35% + 20px)"
                    }}
                  >
                    0{goal.id}.
                  </span>

                  {/* Content block */}
                  <div
                    className={`absolute -translate-y-1/2 space-y-2 bg-white border border-slate-200/60 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 group-hover:border-brand-teal/30 ${contentX}`}
                    style={{ top: `${yOffset}px` }}
                  >
                    <div className="text-brand-teal font-mono text-xs uppercase tracking-wider">
                      ● {goal.shortTitle}
                    </div>
                    <h3 className="text-slate-950 text-base font-bold tracking-tight">
                      {goal.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed font-light">
                      {goal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Vertical Timeline Stack (For tablets/mobile screens) */}
          <div className="lg:hidden space-y-12 pl-6 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200" />

            {aboutData.goals.map((goal) => (
              <div key={goal.id} className="relative pl-8 space-y-3">
                {/* Mobile timeline node dot */}
                <div className="absolute left-0 -translate-x-[7px] top-1.5 w-3.5 h-3.5 rounded-full bg-brand-teal shadow-[0_0_8px_rgba(37,151,177,0.3)] ring-4 ring-slate-50" />

                <span className="font-mono text-[10px] text-slate-400 font-bold block">
                  0{goal.id}.
                </span>
                <div className="text-brand-teal font-mono text-xs uppercase tracking-wider">
                  ● {goal.shortTitle}
                </div>
                <h3 className="text-slate-950 text-base font-bold tracking-tight">
                  {goal.title}
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Section 4: Bottom Commitment Card */}
        <div className="relative max-w-4xl mx-auto bg-white border border-slate-200/80 p-8 md:p-10 rounded-2xl shadow-md overflow-hidden mt-16">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-teal" />
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-950 uppercase tracking-wider font-mono">Our Commitment</h3>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light">
              {aboutData.conclusion}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
