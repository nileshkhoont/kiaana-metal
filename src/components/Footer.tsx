"use client";

import React from "react"; // Triggering language service re-parse
import Link from "next/link";
import { Mail, Linkedin, Youtube, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-amber-300/20  text-black mt-auto">
      {/* Upper Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Column 1: About Company */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-16 h-16 shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img src="/logo.png" alt="Kiaana Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col pl-2">
                <span className="text-4xl font-bold tracking-wider text-black  font-sans">
                  KIAANA
                </span>
                <span className="text-[12px] font-bold tracking-[0.1em] text-black -mt-1 uppercase">
                  Metal Trading Inc.
                </span>
              </div>
            </Link>
            <p className="text-sm text-black leading-relaxed">
              Due to globalization and fast changing communication system, there is a need of platform to meet buyers and suppliers of their respective fields. Kiaana Metal Trading Inc. bridges this gap effectively.
            </p>
          </div>

          {/* Column 2: Website Links */}
          <div className="space-y-4 border-t border-black/10 md:border-t-0 pt-6 md:pt-1">
            <h3 className="text-sm font-bold text- tracking-wider uppercase border-b-2 border-brand-teal pb-1  inline-block">
              WEBSITE LINKS
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-xs">▪</span>
                <Link href="/" className="hover:text-slate-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs">▪</span>
                <Link href="/about" className="hover:text-slate-700 transition-colors">
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs">▪</span>
                <Link href="/services" className="hover:text-slate-700 transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-xs">▪</span>
                <Link href="/contact" className="hover:text-slate-700 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          {/* <div className="space-y-4  pt-1">
            <h3 className="text-sm font-bold text- tracking-wider uppercase border-b-2 border-brand-teal pb-1 inline-block">
              USEFUL LINKS
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-slate-700 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-700 transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-slate-700 transition-colors">
                  Refund policy
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Column 4: Contact Us */}
          <div className="space-y-4 border-t border-black/10 md:border-t-0 pt-6 md:pt-1">
            <h3 className="text-sm font-bold text- tracking-wider uppercase border-b-2 border-brand-teal pb-1 inline-block">
              CONTACT US
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="h-5 w-5 text-black shrink-0 mt-0.5" />
                <span className="text-black leading-relaxed">
                  19 Broadacre Dr, Kitchener,<br />ON N2R 0S6
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="h-5 w-5 text-black shrink-0" />
                <a href="tel:+16475620213" className="hover:text-slate-700 transition-colors">
                  +1 647 562 0213
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-5 w-5 text-black shrink-0" />
                <a href="mailto:kiaanatrading@gmail.com" className="hover:text-slate-700 transition-colors">
                  kiaanatrading@gmail.com
                </a>
              </div>
            </div>


            {/* Social Media Circular Outlines */}
            <div className="flex space-x-3 pt-3">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-slate-700 hover:border-slate-700 transition-colors p-2 rounded-full border border-black/60 flex items-center justify-center"
                title="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-black hover:text-slate-700 hover:border-slate-700 transition-colors p-2 rounded-full border border-black/60 flex items-center justify-center"
                title="YouTube"
              >
                <Youtube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="text-black hover:text-slate-700 hover:border-slate-700 transition-colors p-2 rounded-full border border-black/60 flex items-center justify-center"
                title="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lower Copyright Strip */}
      <div className="bg-[#1b7e95] py-4 text-center text-xs text-cyan-100/80 border-t border-cyan-500/10">
        <p>Kiaana Metal Trading Inc. &copy; All Rights Reserved – 2026</p>
      </div>
    </footer>
  );
}
