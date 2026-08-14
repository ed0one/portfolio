"use client";

import { site } from "@/lib/content";
import { scrollToSection } from "@/lib/smooth-scroll";
import { ArrowUp } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-black/[0.06] bg-white/40 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs font-medium text-[#111111]/70">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <span className="hidden sm:inline text-black/20">·</span>
          <p>{site.role} · {site.location}</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-[#111111]/70 hover:text-[#111111] transition-colors"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold uppercase tracking-wider text-[#111111]/70 hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, "#hero")}
            className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[#111111] hover:opacity-70 transition-opacity cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}