"use client";

import React, { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useRouter } from "next/navigation";

export default function ContactContent() {
  const router = useRouter();

  // Connect to Formspree using the client-accessible environment key
  // Fallback to a placeholder during build/prerender to prevent build errors
  const formKey = process.env.NEXT_PUBLIC_FORMSPREE_KEY || "missing-key";
  const [state, handleSubmit] = useForm(formKey);

  // Redirect to custom thanks page upon successful submission
  useEffect(() => {
    if (state.succeeded) {
      router.push("/thanks");
    }
  }, [state.succeeded, router]);

  // Intercept submit to prevent submission and warn if Formspree key is missing
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!process.env.NEXT_PUBLIC_FORMSPREE_KEY) {
      e.preventDefault();
      alert("Formspree form key is not configured. Please set NEXT_PUBLIC_FORMSPREE_KEY in your environment variables.");
      return;
    }
    handleSubmit(e);
  };

  return (
    <div className="w-full bg-slate-50 text-slate-800 font-sans overflow-hidden">

      {/* 1. Hero Section (Image background with text overlay) */}
      <div
        className="relative min-h-[500px] flex items-center justify-center text-center px-4 py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.65), rgba(15, 23, 42, 0.65)), url('/industrial_import.png')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-6 z-10 text-white">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-light leading-tight tracking-tight max-w-3xl mx-auto">
            Ready to secure, optimize, and scale your supply chain?
          </h1>
          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-brand-orange uppercase">
            (METAL RECYCLING, TRADING & LOGISTICS)
          </p>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light leading-relaxed">
            Connect with our commodity specialists today to streamline your steel, aluminium, and copper procurement.
          </p>
        </div>
      </div>

      {/* 2. Overlapping Inquire Here Form Card */}
      <div className="max-w-2xl mx-auto px-4 relative z-20 -mt-24 md:-mt-28 mb-20">
        <div className="bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-slate-100 rounded-sm">

          <div className="text-center space-y-3 mb-10">
            <h2 className="text-3xl font-serif font-light text-slate-900">
              Inquire Here
            </h2>
            <p className="text-slate-500 text-xs leading-relaxed max-w-md mx-auto font-light">
              Fill out the contact form below to inquire about our services. You can expect a response from us with next steps within 24 hours.
            </p>
          </div>

          <form onSubmit={handleFormSubmit} className="space-y-8">

            {/* Name fields */}
            <div className="space-y-2">
              <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Name <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
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
                  <span className="text-[10px] text-slate-400 font-light mt-1 block">First Name</span>
                </div>
                <div>
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
                  <span className="text-[10px] text-slate-400 font-light mt-1 block">Last Name</span>
                </div>
              </div>
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
