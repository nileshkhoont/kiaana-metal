"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    company: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        company: "",
        message: "",
      });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      title: "Our Office Address",
      value: "19 Broadacre Dr, Kitchener, ON N3A 3E4, Canada",
      icon: MapPin,
    },
    {
      title: "Call Us",
      value: "+1 647 562 0213",
      href: "tel:+16475620213",
      icon: Phone,
    },
    {
      title: "Email Support",
      value: "kiaanatrading@gmail.com",
      href: "mailto:kiaanatrading@gmail.com",
      icon: Mail,
    },
    {
      title: "Business Hours",
      value: "Monday – Saturday: 9:00 AM – 6:00 PM (EST)",
      icon: Clock,
    },
  ];

  return (
    <div className="w-full bg-slate-50 py-16 md:py-24 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Get in Touch
          </h1>
          <p className="text-slate-655 text-lg leading-relaxed text-slate-600">
            Have questions about material specifications, lead times, or pricing? Contact our metal trading desk for a custom consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Grid */}
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xl font-bold text-slate-900 tracking-wide border-b border-slate-200 pb-3">
              Trading Desk Contact Information
            </h2>
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div
                    key={idx}
                    className="flex gap-4 p-5 rounded-xl bg-white border border-slate-200/80 hover:border-slate-300 transition-colors shadow-sm"
                  >
                    <div className="p-3 rounded-lg bg-brand-teal/10 border border-brand-teal/20 text-brand-teal h-fit shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-500 mb-1">{info.title}</h3>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-base font-bold text-slate-950 hover:text-brand-orange transition-colors break-words"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-base font-semibold text-slate-950 break-words">
                          {info.value}
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 rounded-2xl shadow-md relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-brand-teal/5 via-transparent to-transparent pointer-events-none rounded-2xl" />
            
            <h2 className="text-xl font-bold text-slate-900 tracking-wide mb-6">
              Send an Enquiry
            </h2>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 rounded-full">
                  <CheckCircle2 className="h-10 w-10 animate-bounce" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted Successfully</h3>
                <p className="text-slate-500 text-sm max-w-sm">
                  Thank you for contacting Kiaana Metal Trading Inc. A representative from our metals desk will review your requirements and respond shortly.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 bg-slate-50 text-xs font-bold text-brand-orange hover:text-brand-orange/80 transition-all shadow-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-teal transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-teal transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="e.g. Steel Industries Ltd"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-teal transition-colors text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Aluminium Ingot Quote"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-teal transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    Message / Specifications *
                    <span className="text-[10px] text-slate-400 normal-case font-normal">(Specify grade, quantity & destination port)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your metal trading or scrap procurement requirements in detail..."
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:border-brand-teal transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-brand-orange hover:bg-brand-orange/90 text-slate-950 font-bold tracking-wide transition-all shadow-md hover:shadow-brand-orange/25 group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
