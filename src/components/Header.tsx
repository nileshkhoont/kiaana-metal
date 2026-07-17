"use client";

import React from "react";
import { Mail, Lock, UserPlus, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <div className="bg-slate-100 text-slate-600 text-xs border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex items-center justify-between">
        {/* Left Side: Contact/Social */}
        <div className="flex items-center space-x-6">
          <div className="hidden sm:flex items-center space-x-2">
            <span className="text-slate-500">Connect with us:</span>
            <a
              href="https://www.linkedin.com/in/ramaraju-umadevi-09b6331b8/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-amber-600 transition-colors p-1.5 rounded-full hover:bg-slate-200"
              title="LinkedIn"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
          <div className="flex items-center space-x-4 text-slate-500">
            <span className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5 text-amber-600" />
              <a href="mailto:kiaanatrading@gmail.com" className="hover:text-slate-900 transition-colors font-medium">
                kiaanatrading@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Right Side: Auth Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://lohaa.co.in/user-login"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors px-2.5 py-1 rounded hover:bg-slate-200 font-medium"
          >
            <Lock className="h-3 w-3 text-amber-600" />
            <span>Login</span>
          </a>
          <div className="h-3 w-px bg-slate-355 bg-slate-200"></div>
          <a
            href="https://lohaa.co.in/user-register"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-slate-900 transition-colors px-2.5 py-1 rounded hover:bg-slate-200 font-medium"
          >
            <UserPlus className="h-3 w-3 text-amber-600" />
            <span>Register</span>
          </a>
        </div>
      </div>
    </div>
  );
}
