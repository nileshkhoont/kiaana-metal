"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Linkedin, Youtube, Instagram, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { ScrollRevealSection } from "@/components/common/WordAnimation";

export default function Footer() {
  return (
    <footer className="relative bg-[#111622] text-white border-t border-slate-800 mt-auto overflow-hidden select-none transform-gpu">
      
      {/* Dynamic Metallic Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4B400]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2597b1]/15 rounded-full blur-[150px] pointer-events-none" />

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <ScrollRevealSection className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* Column 1: Brand & Bio (5 Cols) */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-14 h-14 shrink-0 group-hover:scale-105 transition-transform duration-300 p-1.5 bg-white/10 rounded-2xl border border-white/15 backdrop-blur-md shadow-md">
                <Image src="/logo.png" alt="Kiaana Logo" width={56} height={56} quality={80} loading="lazy" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-3xl font-black tracking-wider text-white font-display group-hover:text-[#F4B400] transition-colors">
                  KIAANA
                </span>
                <span className="text-[11px] font-bold tracking-[0.15em] text-[#F4B400] uppercase -mt-1">
                  Metal Trading Inc.
                </span>
              </div>
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed max-w-md font-light">
              Bridging international commodity markets by facilitating certified physical metal supply, scrap recovery operations, and container shipping logistics across Ontario and 120+ worldwide ports.
            </p>

            {/* Quality Badge Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E232B] border border-[#F4B400]/40 text-[#F4B400] text-xs font-bold uppercase tracking-wider shadow-md">
              <Sparkles className="h-3.5 w-3.5 text-[#F4B400] animate-pulse" />
              <span>ISO & ISRI Certified Trading Operations</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 space-y-4 pt-2 md:pt-0">
            <h3 className="text-xs font-black text-[#F4B400] tracking-[0.2em] uppercase border-b border-slate-800 pb-2 inline-block">
              WEBSITE LINKS
            </h3>
            
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-slate-300 hover:text-[#F4B400] transition-colors duration-200 font-medium"
                  >
                    <span className="text-[#F4B400] opacity-0 group-hover:opacity-100 transition-all duration-200 mr-1.5 -ml-3 group-hover:ml-0 text-xs">
                      ❖
                    </span>
                    <span>{item.name}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 ml-1 opacity-0 group-hover:opacity-100 transition-opacity text-[#F4B400]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us (4 Cols) */}
          <div className="md:col-span-4 space-y-4 pt-2 md:pt-0">
            <h3 className="text-xs font-black text-[#F4B400] tracking-[0.2em] uppercase border-b border-slate-800 pb-2 inline-block">
              CONTACT US
            </h3>

            <div className="space-y-3 text-sm">
              
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#1E232B]/90 border border-slate-800 shadow-sm hover:border-[#F4B400]/50 transition-all duration-300">
                <MapPin className="h-5 w-5 text-[#F4B400] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-white block">Corporate Office:</span>
                  19 Broadacre Dr, Kitchener, ON N2R 0S6, Canada
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1E232B]/90 border border-slate-800 shadow-sm hover:border-[#F4B400]/50 transition-all duration-300">
                <Phone className="h-4 w-4 text-[#F4B400] shrink-0" />
                <a href="tel:+16475620213" className="text-xs font-mono font-bold text-slate-200 hover:text-[#F4B400] transition-colors">
                  +1 (647) 562-0213
                </a>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#1E232B]/90 border border-slate-800 shadow-sm hover:border-[#F4B400]/50 transition-all duration-300">
                <Mail className="h-4 w-4 text-[#F4B400] shrink-0" />
                <a href="mailto:kiaanatrading@gmail.com" className="text-xs font-mono font-bold text-slate-200 hover:text-[#F4B400] transition-colors">
                  kiaanatrading@gmail.com
                </a>
              </div>

            </div>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center space-x-3">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#1E232B] border border-slate-700 text-slate-300 hover:bg-[#F4B400] hover:text-slate-950 hover:border-[#F4B400] transition-all duration-300 flex items-center justify-center shadow-md transform hover:-translate-y-1"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#1E232B] border border-slate-700 text-slate-300 hover:bg-[#F4B400] hover:text-slate-950 hover:border-[#F4B400] transition-all duration-300 flex items-center justify-center shadow-sm transform hover:-translate-y-1"
                title="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-[#1E232B] border border-slate-700 text-slate-300 hover:bg-[#F4B400] hover:text-slate-950 hover:border-[#F4B400] transition-all duration-300 flex items-center justify-center shadow-sm transform hover:-translate-y-1"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>

          </div>

        </ScrollRevealSection>
      </div>

      {/* Lower Copyright Strip */}
      <div className="bg-[#090C12] py-5 text-slate-400 text-xs border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left font-medium">
          <p>© 2026 Kiaana Metal Trading Inc. All Rights Reserved.</p>
          <p className="text-slate-500">
            Crafted with excellence by{" "}
            <a
              href="https://www.movya.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F4B400] font-bold hover:underline"
            >
              Movya
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
}
