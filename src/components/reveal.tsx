"use client";

import { motion } from "framer-motion";

const VARIANTS = {
  fade: { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } },
  blur: {
    hidden: { opacity: 0, y: 16, filter: "blur(8px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)" },
  },
  scale: { hidden: { opacity: 0, scale: 0.96 }, visible: { opacity: 1, scale: 1 } },
};

export function Reveal({
  children,
  delay = 0,
  variant = "fade",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: keyof typeof VARIANTS;
}) {
  const { hidden, visible } = VARIANTS[variant];
  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}