"use client";

import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Layers, Server, Zap, Cpu } from "lucide-react";


const serviceIcons = [Layers, Server, Zap, Cpu];

export function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-black/[0.06]"
    >
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#111111]/60 mb-3">
              / SERVICES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] uppercase">
              What I Build &amp; Ship
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#111111]/70 leading-relaxed">
            Delivering production-ready systems from concept to deploy, combining design rigor with full-stack reliability.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {site.services.map((service, index) => {
          const Icon = serviceIcons[index % serviceIcons.length];
          return (
            <Reveal key={service.number} delay={index * 0.08}>
              <TiltCard
                maxTilt={6}
                className="group relative flex flex-col justify-between h-full bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-black/[0.04] text-[#111111]/70">
                      {service.number}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black/[0.03] text-[#111111] transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#111111] group-hover:text-[#FAF7F3]">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111111] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#111111]/70 leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-6 border-t border-black/[0.04]">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-lg bg-black/[0.03] text-[#111111]/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </TiltCard>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

