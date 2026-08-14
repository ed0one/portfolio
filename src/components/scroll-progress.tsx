"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-black/[0.04] z-[100] pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full bg-[#111111] origin-left shadow-[0_1px_10px_rgba(0,0,0,0.25)] relative"
      >
        {/* Glowing Head Tip */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-emerald-500 blur-[2px] opacity-80" />
      </motion.div>
    </div>
  );
}

