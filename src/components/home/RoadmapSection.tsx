"use client";

import React from "react";
import { ArrowRight, Trophy, Users, Globe, Factory, ShieldCheck } from "lucide-react";

export default function RoadmapSection() {
  return (
    <section className="py-20 bg-slate-100 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs font-bold tracking-[0.25em] text-brand-teal uppercase">Strategic Roadmap</h2>
          <p className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Future Goals & Business Objectives in Canada</p>
          <p className="text-slate-600">
            Kiaana Metal Trading Inc. is committed to long-term growth, developing local recycling infrastructure, and investing in the Canadian workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Goal 1 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                <ArrowRight className="h-5 w-5 rotate-[-45deg]" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">1. Scrap Metal Export Expansion</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Procuring ferrous and non-ferrous metals from local industries, municipalities, and demolition contractors in Ontario and exporting to Asia, the Middle East, and Europe.
              </p>
            </div>
          </div>

          {/* Goal 2 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                <Factory className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">2. Canadian Recycling Plant</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Setting up a state-of-the-art metal recycling facility in Canada to sort, shred, and process scrap locally, creating jobs and maximizing operational efficiency.
              </p>
            </div>
          </div>

          {/* Goal 3 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                <Globe className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">3. Commodity Diversification</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Expanding imports into industrial machinery, construction materials, and consumer products from emerging markets to satisfy a broader spectrum of Canadian buyers.
              </p>
            </div>
          </div>

          {/* Goal 4 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">4. Job Creation & Workforce</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Hiring locally trained Canadian workers and investing in programs for logistics, recycling, and trade compliance, targeting 15+ direct jobs in the next 1–2 years.
              </p>
            </div>
          </div>

          {/* Goal 5 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">5. Sustainable & Green Practices</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Designing our recycling operations to satisfy all provincial and federal regulations, adopting eco-friendly processes for a green-focused metal supply chain.
              </p>
            </div>
          </div>

          {/* Goal 6 */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-brand-teal/30 hover:shadow-md transition-all duration-300 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="inline-flex p-3 rounded-xl bg-brand-teal/10 text-brand-teal border border-brand-teal/20">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">6. Bilateral Trade Alliances</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Strengthening international partnerships in compliance with Canadian trade accords, cooperating with development agencies like Export Development Canada (EDC).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
