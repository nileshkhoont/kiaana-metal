"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface RotatingWordProps {
  words: string[];
  interval?: number;
  className?: string;
}

export function RotatingWord({
  words,
  interval = 3000,
  className = "font-serif-accent text-amber-600",
}: RotatingWordProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words || words.length <= 1) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <span className="inline-flex items-baseline relative overflow-hidden align-baseline leading-none">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ y: 24, opacity: 0, filter: "blur(4px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -24, opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className={`inline-block leading-none ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface StaggerWordsProps {
  text: string;
  className?: string;
  delay?: number;
  repeatOnScroll?: boolean;
}

export function StaggerWords({
  text,
  className = "",
  delay = 0.04,
  repeatOnScroll = false,
}: StaggerWordsProps) {
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0.05,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 14,
        stiffness: 110,
      },
    },
    hidden: {
      opacity: 0,
      y: 24,
      filter: "blur(6px)",
      scale: 0.96,
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap justify-center gap-x-[0.25em] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: !repeatOnScroll, amount: 0.25 }}
    >
      {words.map((word, idx) => (
        <motion.span key={idx} variants={child} className="inline-block">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
}

export function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
  yOffset = 30,
}: ScrollRevealSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 0.6, delay, ease: [0.25, 1, 0.5, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ScrollRevealCardProps {
  children: React.ReactNode;
  className?: string;
  index?: number;
}

export function ScrollRevealCard({
  children,
  className = "",
  index = 0,
}: ScrollRevealCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 1, 0.5, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface MetallicGlowTextProps {
  text: string;
  className?: string;
}

export function MetallicGlowText({ text, className = "" }: MetallicGlowTextProps) {
  return (
    <span className={`animated-shimmer font-bold ${className}`}>
      {text}
    </span>
  );
}
