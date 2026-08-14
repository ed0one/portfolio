"use client";

import { useEffect, useState } from "react";
import { navigation, site } from "@/lib/content";
import { scrollToSection } from "@/lib/smooth-scroll";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 sm:pt-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between w-full max-w-4xl px-4 py-2.5 sm:px-6 sm:py-3 rounded-full transition-all duration-500 ease-out ${
          scrolled
            ? "bg-[#FAF7F3]/85 backdrop-blur-xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            : "bg-[#FAF7F3]/60 backdrop-blur-md border border-black/[0.05] shadow-[0_2px_15px_rgb(0,0,0,0.02)]"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "#hero")}
          className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-[#111111] group cursor-pointer"
        >
          <span className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-[#111111] text-xs font-mono font-extrabold text-[#FAF7F3] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
            <span>E</span>
            <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-base font-extrabold tracking-tight font-sans">
            {site.name}
          </span>
        </a>


        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider text-[#111111]/70 hover:text-[#111111] rounded-full hover:bg-black/[0.04] transition-all duration-200 cursor-pointer"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Action Button & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToSection(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#FAF7F3] bg-[#111111] rounded-full hover:bg-[#222222] transition-all duration-200 hover:shadow-md cursor-pointer"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.05] text-[#111111] hover:bg-black/[0.08] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="pointer-events-auto absolute top-20 left-4 right-4 bg-[#FAF7F3] border border-black/[0.08] rounded-3xl p-6 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, item.href);
                  }}
                  className="px-4 py-3 text-base font-semibold tracking-tight text-[#111111] hover:bg-black/[0.04] rounded-2xl transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 border-t border-black/[0.06] mt-1">
                <a
                  href="#contact"
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    scrollToSection(e, "#contact");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold uppercase tracking-wider text-[#FAF7F3] bg-[#111111] rounded-2xl cursor-pointer"
                >
                  <span>Let&apos;s Talk</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}