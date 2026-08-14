"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Cpu, Database, Flame, Layers, ShieldCheck, Zap } from "lucide-react";

const tickerItems = [
  { text: "Full-Stack Architecture", icon: Layers },
  { text: "Next.js 16 & App Router", icon: Zap },
  { text: "Agentic Systems & LLM SDKs", icon: Cpu },
  { text: "Supabase & PostgreSQL RLS", icon: Database },
  { text: "100% Type-Safe TypeScript", icon: ShieldCheck },
  { text: "High-Velocity SaaS Delivery", icon: Flame },
  { text: "Embedded & IoT Telemetry", icon: Code2 },
  { text: "Design Systems & Tokens", icon: Sparkles },
];

export function MarqueeTicker() {
  return (
    <div className="w-full overflow-hidden py-6 border-y border-black/[0.06] bg-black/[0.015] relative select-none">
      {/* Side Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF7F3] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF7F3] to-transparent z-10 pointer-events-none" />

      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-8 w-max items-center"
      >
        {/* Double the list for seamless continuous loop */}
        {[...tickerItems, ...tickerItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/70 border border-black/[0.05] shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-sm"
            >
              <Icon className="h-3.5 w-3.5 text-[#111111]/70" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                {item.text}
              </span>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
