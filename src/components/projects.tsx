"use client";

import { projects, site } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { scrollToSection } from "@/lib/smooth-scroll";
import { ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import { GithubIcon } from "@/components/icons";


export function Projects() {
  return (
    <section
      id="work"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-black/[0.06]"
    >
      {/* Header */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs uppercase font-bold tracking-widest text-[#111111]/60">
                {site.projectsHeading}
              </p>
              <span className="px-2 py-0.5 text-[10px] font-bold font-mono rounded-full bg-black/[0.05] text-[#111111]">
                {projects.length} PROJECTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] uppercase">
              Featured Work
            </h2>
          </div>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#111111] hover:opacity-70 transition-opacity"
          >
            <span>View all on GitHub</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </Reveal>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-12 sm:gap-16">
        {projects.map((project, index) => (
          <Reveal key={project.id} delay={index * 0.08}>
            <TiltCard
              maxTilt={5}
              className="group relative bg-white rounded-3xl sm:rounded-[2.5rem] border border-black/[0.06] shadow-[0_4px_25px_rgba(0,0,0,0.03)] overflow-hidden transition-shadow duration-500 hover:shadow-[0_25px_70px_rgba(0,0,0,0.1)]"
            >
              {/* Project Preview Banner / Interactive Visual Image */}
              <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#111111]">
                {/* Background Image with Zoom on Hover */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.image}
                  alt={`${project.name} preview`}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Ambient vignette & gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/30 pointer-events-none" />

                {/* Top preview chrome */}
                <div className="relative z-10 flex items-center justify-between p-6 sm:p-8">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-white text-xs font-mono">
                    <Terminal className="h-3 w-3" />
                    <span>{project.id}</span>
                  </div>
                  <span className="px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
                    {project.year}
                  </span>
                </div>

                {/* Bottom Callout & Stats inside image */}
                <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-8 flex items-end justify-between">
                  <div>
                    <span className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-md">
                      {project.name}
                    </span>
                    <p className="text-xs sm:text-sm font-medium text-white/90 mt-1 drop-shadow">
                      {project.stats}
                    </p>
                  </div>
                  <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#111111] shadow-xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </div>


              {/* Project Details & Body */}
              <div className="p-6 sm:p-10">
                {/* Category & Title & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#111111]/50">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-3">
                    {"live" in project && project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#111111] text-[#FAF7F3] hover:bg-[#252525] transition-colors"
                      >
                        <span>Live Site</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#111111] hover:underline"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      <span>Source</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>


                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] mb-4">
                  {project.name}
                </h3>

                <p className="text-base text-[#111111]/75 leading-relaxed mb-8 max-w-3xl">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-black/[0.04]">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-black/[0.04] text-[#111111] border border-black/[0.04]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          </Reveal>
        ))}

        {/* Bottom Collaboration Prompt Card */}
        <Reveal delay={0.1}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-12 rounded-3xl bg-black/[0.03] border border-dashed border-black/[0.12] text-center sm:text-left">
            <div>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111]">
                Have a project or vision in mind?
              </h4>
              <p className="text-sm text-[#111111]/70 mt-1">
                Let&apos;s build something scalable, fast, and memorable together.
              </p>
            </div>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "#contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#FAF7F3] text-xs font-bold uppercase tracking-wider hover:bg-[#252525] transition-all duration-300 hover:shadow-md shrink-0 cursor-pointer active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Let&apos;s Collaborate</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}