"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";
import { RotatingWord, StaggerWords } from "@/components/common/WordAnimation";
import { Sparkles, Send } from "lucide-react";

export default function ContactContent() {
  const router = useRouter();

  const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "missing-key";
  const [state, handleSubmit] = useForm(formKey);

  useEffect(() => {
    if (state.succeeded) {
      router.push("/thanks");
    }
  }, [state.succeeded, router]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!process.env.NEXT_PUBLIC_FORMSPREE_KEY) {
      e.preventDefault();
      alert("Formspree form key is not configured. Please set NEXT_PUBLIC_FORMSPREE_KEY in your environment variables.");
      return;
    }
    handleSubmit(e);
  };

  return (
    <div className="w-full bg-slate-50 text-slate-900 font-sans overflow-hidden select-none">

      {/* 1. Hero Section */}
      <div
        className="relative min-h-[480px] flex items-center justify-center text-center px-4 py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.75)), url('/industrial_import.png')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6 pb-6 md:pb-12 z-10 text-white">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-black uppercase tracking-widest mx-auto">
            <Sparkles className="h-3.5 w-3.5 text-amber-400 animate-pulse" />
            <span>DIRECT SALES & COMMODITY DESK</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight max-w-3xl mx-auto font-display">
            Ready to secure, optimize, and scale your <RotatingWord words={["Supply Chain?", "Metal Tonnage?", "Export Orders?"]} className="font-serif-accent text-amber-400 font-normal" />
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto font-light leading-relaxed">
            Connect with our commodity specialists today to streamline your steel, aluminium, and copper procurement.
          </p>
        </div>
      </div>

      {/* 2. Form Card */}
      <div className="max-w-2xl mx-auto px-4 relative z-20 -mt-20 md:-mt-24 mb-20">
        <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-200 rounded-3xl metallic-border-beam">

          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-extrabold text-slate-950 font-display">
              <StaggerWords text="Inquire & Request Quotation" />
            </h2>
            <p className="text-slate-600 text-xs leading-relaxed max-w-md mx-auto">
              Fill out the contact form below to inquire about metal grades and container logistics. Expect a response within 24 hours.
            </p>
          </div>

         <form onSubmit={handleFormSubmit} className="space-y-8">

            {/* First Name field */}
            <div className="space-y-1">
              <label htmlFor="firstName" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full bg-transparent border-b border-slate-200 focus:border-brand-teal focus:outline-none py-2 text-slate-900 placeholder-slate-300 text-sm font-light transition-colors"
              />
              <ValidationError
                prefix="First Name"
                field="firstName"
                errors={state.errors}
                className="text-red-500 text-[10px] mt-1 block"
              />
            </div>

            {/* Last Name field */}
            <div className="space-y-1">
              <label htmlFor="lastName" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full bg-transparent border-b border-slate-200 focus:border-brand-teal focus:outline-none py-2 text-slate-900 placeholder-slate-300 text-sm font-light transition-colors"
              />
              <ValidationError
                prefix="Last Name"
                field="lastName"
                errors={state.errors}
                className="text-red-500 text-[10px] mt-1 block"
              />
            </div>

            {/* Email field */}
            <div className="space-y-1">
              <label htmlFor="email" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-b border-slate-200 focus:border-brand-teal focus:outline-none py-2 text-slate-900 placeholder-slate-300 text-sm font-light transition-colors"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-[10px] mt-1 block"
              />
            </div>

            {/* Subject field */}
            <div className="space-y-1">
              <label htmlFor="subject" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full bg-transparent border-b border-slate-200 focus:border-brand-teal focus:outline-none py-2 text-slate-900 placeholder-slate-300 text-sm font-light transition-colors"
              />
              <ValidationError
                prefix="Subject"
                field="subject"
                errors={state.errors}
                className="text-red-500 text-[10px] mt-1 block"
              />
            </div>

            {/* Message field */}
            <div className="space-y-1">
              <label htmlFor="message" className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full bg-transparent border-b border-slate-200 focus:border-brand-teal focus:outline-none py-2 text-slate-900 placeholder-slate-300 text-sm font-light transition-colors resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-[10px] mt-1 block"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4 text-center">
              <button
                type="submit"
                disabled={state.submitting}
                className="px-10 py-3.5 bg-brand-orange hover:bg-brand-orange/90 text-slate-950 text-[10px] font-bold uppercase tracking-wider shadow-md hover:shadow-brand-orange/20 transition-all rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

          </form>

        </div>
      </div>

    </div>
  );
}
