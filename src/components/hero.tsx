"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { site } from "@/lib/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-24 sm:px-8">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center text-center"
      >
        <motion.div
          variants={item}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/5 bg-black/[0.03] px-4 py-1.5 text-sm text-zinc-600"
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
          {site.status}
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-900 sm:text-7xl"
        >
          {site.name}
          <span className="mt-4 block bg-gradient-to-r from-zinc-900 via-zinc-700 to-zinc-500 bg-clip-text text-transparent sm:mt-6">
            {site.tagline}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-8 max-w-xl text-lg leading-relaxed text-zinc-500 sm:text-xl"
        >
          {site.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700"
          >
            View my work
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-black/[0.03]"
          >
            Get in touch
          </a>
        </motion.div>

        <motion.p
          variants={item}
          className="mt-20 text-sm text-zinc-400"
        >
          {site.location}
        </motion.p>
      </motion.div>
    </section>
  );
}