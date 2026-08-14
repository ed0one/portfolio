"use client";

import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { CheckCircle2, Code2, Compass, ShieldCheck } from "lucide-react";



const principleIcons = [ZapIcon, ShieldCheck, Compass];

function ZapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      {...props}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-black/[0.06]"
    >
      {/* Header */}
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#111111]/60 mb-3">
              / ABOUT ME
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] uppercase">
              Philosophy &amp; Craft
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#111111]/70 leading-relaxed">
            Bridging product thinking, visual excellence, and uncompromising systems discipline.
          </p>
        </div>
      </Reveal>

      {/* Main Narrative Paragraphs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {site.about.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <TiltCard
              maxTilt={4}
              className="text-base sm:text-lg text-[#111111]/80 leading-relaxed bg-white rounded-3xl p-8 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] h-full flex items-center transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.06)]"
            >
              <p>{paragraph}</p>
            </TiltCard>
          </Reveal>
        ))}
      </div>

      {/* Core Principles Grid */}
      <Reveal>
        <div className="mb-16">
          <p className="text-xs uppercase font-bold tracking-widest text-[#111111]/60 mb-6">
            / CORE PRINCIPLES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {site.principles.map((principle, index) => {
              const Icon = principleIcons[index % principleIcons.length];
              return (
                <TiltCard
                  key={principle.number}
                  maxTilt={6}
                  className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex flex-col justify-between transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-black/[0.04] text-[#111111]/70">
                        {principle.number}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/[0.03] text-[#111111]">
                        <Icon />
                      </div>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight text-[#111111] mb-3">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#111111]/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>
      </Reveal>


      {/* Key Metrics / Highlights Bar */}
      <Reveal>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {[
            { value: "5+", label: "Shipped Systems", detail: "Web & IoT Apps" },
            { value: "58", label: "Knowledge Nodes", detail: "Graph Engine" },
            { value: "100%", label: "Type Safety", detail: "Strict TS & Zod" },
            { value: "0ms", label: "Compromise", detail: "Design Rigor" },
          ].map((metric, i) => (
            <TiltCard
              key={i}
              maxTilt={8}
              className="bg-white rounded-3xl p-6 border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.02)] text-center transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <span className="font-mono text-2xl sm:text-3xl font-extrabold text-[#111111] tracking-tight block mb-1">
                {metric.value}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111]/80 block mb-0.5">
                {metric.label}
              </span>
              <span className="text-[10px] font-medium text-[#111111]/50 block">
                {metric.detail}
              </span>
            </TiltCard>
          ))}
        </div>
      </Reveal>

      {/* Skills Arsenal / Technical Stack */}
      <Reveal>
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-2 mb-8">
            <Code2 className="h-5 w-5 text-[#111111]" />
            <h3 className="text-xl font-bold tracking-tight text-[#111111]">
              Technical Arsenal &amp; Capabilities
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {site.skillsArsenal.map((category) => (
              <div key={category.category}>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#111111]/50 mb-4 pb-2 border-b border-black/[0.06]">
                  {category.category}
                </h4>
                <ul className="space-y-2.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="group/item flex items-center gap-2 text-xs sm:text-sm font-medium text-[#111111]/85 p-1.5 rounded-xl hover:bg-black/[0.03] transition-colors"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 group-hover/item:scale-110 transition-transform" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}