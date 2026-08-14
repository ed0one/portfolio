"use client";

import { motion } from "framer-motion";

export function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Subtle Atmospheric Ambient Blobs */}
      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -35, 20, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-amber-500/[0.03] blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, -40, 20, 0],
          y: [0, 30, -25, 0],
          scale: [1, 1.1, 0.92, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-emerald-500/[0.025] blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 25, -30, 0],
          y: [0, -25, 30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 left-1/4 w-[32rem] h-[32rem] rounded-full bg-indigo-500/[0.025] blur-3xl"
      />
    </div>
  );
}
