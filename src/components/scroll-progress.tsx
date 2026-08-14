"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] bg-black/[0.04] z-[100] pointer-events-none">
      <motion.div
        style={{ scaleX }}
        className="h-full w-full bg-[#111111] origin-left"
      />
    </div>
  );
}

