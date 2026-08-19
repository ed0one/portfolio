"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { Magnetic } from "@/components/magnetic-button";
import { scrollToSection } from "@/lib/smooth-scroll";
import { ArrowDown, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

import type { Variants } from "framer-motion";

const lineVariants: Variants = {
  hidden: {},
  visible: (i: number) => ({
    transition: { staggerChildren: 0.03, delayChildren: i * 0.15 },
  }),
};

const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, rotateX: -60 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function AnimatedWord({ word, lineIndex }: { word: string; lineIndex: number }) {
  return (
    <motion.span
      custom={lineIndex}
      initial="hidden"
      animate="visible"
      variants={lineVariants}
      className="inline-block origin-bottom"
    >
      {word.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block origin-bottom">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}


export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full"
    >
      {/* Top Metadata & Availability Status Bar */}
      <Reveal delay={0.05} variant="blur">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs uppercase tracking-wider font-semibold text-[#111111]/70 mb-6 sm:mb-8">
          <span className="px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#111111]">
            / {site.established}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/[0.04] border border-black/[0.06] text-[#111111]">
            <MapPin className="h-3 w-3" />
            {site.location}
          </span>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>{site.status}</span>
          </div>
        </div>
      </Reveal>

      {/* Main Massive Animated Title */}
      <div className="mb-8 select-none overflow-hidden">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase tracking-tight text-[#111111] leading-[0.9] sm:leading-[0.88] flex flex-col">
          <AnimatedWord word="PRODUCT" lineIndex={0} />
          <AnimatedWord word="ENGINEER" lineIndex={1} />
        </h1>
      </div>

      {/* Bio / Description */}
      <Reveal delay={0.2} variant="blur">
        <p className="max-w-2xl text-lg sm:text-xl font-normal text-[#111111]/80 leading-relaxed sm:leading-relaxed mb-10">
          {site.intro}
        </p>
      </Reveal>

      {/* Action CTA Buttons & Social Links with Magnetic Physics */}
      <Reveal delay={0.25} variant="blur">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-black/[0.06]">
          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Magnetic strength={0.2}>
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, "#work")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#FAF7F3] text-xs font-bold uppercase tracking-wider hover:bg-[#252525] transition-all duration-300 hover:shadow-lg cursor-pointer active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowDown className="h-3.5 w-3.5" />
              </a>
            </Magnetic>

            <Magnetic strength={0.2}>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, "#contact")}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white border border-black/[0.08] text-[#111111] text-xs font-bold uppercase tracking-wider hover:bg-black/[0.03] transition-all duration-300 hover:shadow-sm cursor-pointer active:scale-95"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Magnetic>
          </div>

          {/* Social Profiles Pills with Magnetic pull */}
          <div className="flex items-center gap-2">
            <Magnetic strength={0.35}>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-black/[0.08] text-[#111111] hover:bg-black/[0.04] hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-black/[0.08] text-[#111111] hover:bg-black/[0.04] hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Magnetic>
            <Magnetic strength={0.35}>
              <a
                href={`mailto:${site.email}`}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white border border-black/[0.08] text-[#111111] hover:bg-black/[0.04] hover:scale-105 active:scale-95 transition-all duration-200"
                aria-label="Send Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </Magnetic>
          </div>
        </div>
      </Reveal>
    </section>
  );
}