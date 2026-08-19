"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const driftSpring = { stiffness: 40, damping: 20, mass: 1 };

function useCursorDrift(rangeX: number, rangeY: number) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  return {
    x: useSpring(useTransform(mx, [-0.5, 0.5], [-rangeX, rangeX]), driftSpring),
    y: useSpring(useTransform(my, [-0.5, 0.5], [-rangeY, rangeY]), driftSpring),
  };
}

export function AmbientBackground() {
  const blob1 = useCursorDrift(40, 30);
  const blob2 = useCursorDrift(50, 35);
  const blob3 = useCursorDrift(35, 40);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Ambient blobs: outer layer springs toward the cursor, inner layer keeps the slow idle loop */}
      <motion.div style={{ x: blob1.x, y: blob1.y }} className="absolute -top-32 -left-32">
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, -35, 20, 0], scale: [1, 1.08, 0.96, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="w-96 h-96 rounded-full bg-amber-500/[0.03] blur-3xl"
        />
      </motion.div>
      <motion.div style={{ x: blob2.x, y: blob2.y }} className="absolute top-1/3 -right-32">
        <motion.div
          animate={{ x: [0, -40, 20, 0], y: [0, 30, -25, 0], scale: [1, 1.1, 0.92, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="w-[28rem] h-[28rem] rounded-full bg-emerald-500/[0.025] blur-3xl"
        />
      </motion.div>
      <motion.div style={{ x: blob3.x, y: blob3.y }} className="absolute -bottom-32 left-1/4">
        <motion.div
          animate={{ x: [0, 25, -30, 0], y: [0, -25, 30, 0], scale: [1, 1.05, 0.95, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="w-[32rem] h-[32rem] rounded-full bg-indigo-500/[0.025] blur-3xl"
        />
      </motion.div>
    </div>
  );
}
