"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: "HOME", href: "/" },
    { name: "ABOUT US", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "CONTACT US", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center justify-between w-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-14 h-14 shrink-0 group-hover:scale-105 transition-transform duration-200">
                <img src="/logo.png" alt="Kiaana Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col pl-2">
                <span className="text-3xl font-bold tracking-wider text-black font-sans">
                  KIAANA
                </span>
                <span className="text-[12px] font-bold tracking-[0.1em] text-black -mt-1 ">
                  Metal Trading Inc.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-bold tracking-wider transition-all duration-200 ${isActive(item.href)
                    ? "text-black after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-1/2 after:bg-black"
                    : "text-slate-700 hover:text-black hover:bg-slate-50 rounded-md"
                    }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-black hover:bg-slate-50 focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-2 pt-2 pb-4 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 text-base font-bold tracking-wide transition-all ${isActive(item.href)
                ? "text-black bg-slate-50 border-l-4 border-black pl-2"
                : "text-slate-700 hover:text-black hover:bg-slate-50 rounded-md"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
