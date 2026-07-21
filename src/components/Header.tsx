"use client";

import React from "react";
import { Mail, Lock, UserPlus, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-slate-950 text-slate-400 text-[11px] border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left Side: Contact/Social */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2.5">
            <span className="text-slate-500 font-medium">Connect with us:</span>
            <a
              href="https://www.linkedin.com/in/ramaraju-umadevi-09b6331b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-brand-orange transition-all p-1.5 rounded-full hover:bg-slate-900 group"
              title="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5 group-hover:scale-105 transition-transform" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-brand-orange shrink-0" />
              <a
                href="mailto:kiaanatrading@gmail.com"
                className="text-slate-400 hover:text-white transition-colors font-medium"
              >
                kiaanatrading@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center space-x-3.5">
          <a
            href="https://lohaa.co.in/user-login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-all px-3 py-1.5 rounded-full hover:bg-slate-900 font-medium group"
          >
            <Lock className="h-3 w-3 text-brand-orange group-hover:scale-110 transition-transform" />
            <span>Login</span>
          </a>
          <div className="h-3 w-px bg-slate-900"></div>
          <a
            href="https://lohaa.co.in/user-register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-brand-orange hover:bg-brand-orange/90 text-slate-950 font-bold px-3.5 py-1.5 rounded-full shadow-sm hover:shadow-brand-orange/15 transition-all group"
          >
            <UserPlus className="h-3 w-3 text-slate-950 group-hover:scale-110 transition-transform" />
            <span>Register</span>
          </a>
        </div>
      </div>
    </div>
  );
}
