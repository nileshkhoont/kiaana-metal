import React from "react";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Thank You - Kiaana Metal Trading Inc.",
  description: "Your contact inquiry has been successfully sent to our commodity trading desk.",
};

export default function Thanks() {
  return (
    <div className="w-full bg-slate-50 min-h-[70vh] flex items-center justify-center py-20 px-6 font-sans">
      <div className="max-w-md w-full bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 rounded-sm text-center space-y-6">
        
        {/* Checkmark Icon */}
        <div className="flex justify-center">
          <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 rounded-full">
            <CheckCircle2 className="h-10 w-10" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-teal block">
            Thank You
          </span>
          <h1 className="text-3xl font-serif font-light text-slate-950 leading-tight">
            Message Received
          </h1>
          <p className="text-slate-500 text-xs leading-relaxed font-light">
            Your inquiry has been successfully sent to Kiaana Metal Trading Inc. A representative from our desk will review your specifications and contact you within 24 hours.
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 flex flex-col gap-3">
          <Link
            href="/"
            className="w-full py-3 bg-brand-orange hover:bg-brand-orange/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all shadow-md"
          >
            Return Home
          </Link>
          <Link
            href="/services"
            className="w-full py-3 border border-slate-200 hover:bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-wider rounded-sm transition-all"
          >
            Explore Services
          </Link>
        </div>

      </div>
    </div>
  );
}
