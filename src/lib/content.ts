export const site = {
  name: "ed0one",
  role: "Product Engineer",
  email: "hello@ed0one.dev",
  github: "https://github.com/ed0one",
  linkedin: "https://www.linkedin.com/in/ed0one",
  location: "Bucharest, Romania",
  status: "Open to new opportunities",
  tagline: "Crafting digital experiences that feel effortless.",
  intro:
    "I am a product engineer focused on turning complex problems into clean, fast and delightful interfaces. From first sketch to production, I care about every pixel and every millisecond.",
  about: [
    "For the past decade I have shipped products at the intersection of design and engineering — from early-stage startups to large-scale platforms used by millions. I believe great software is quiet: it works so well you never have to think about it.",
    "My work spans design systems, performance-critical interfaces and the systems that power them. This is a work in progress — a place to show what I build, think and care about.",
  ],
  focuses: [
    { label: "Design systems", value: "One source of truth, scaled" },
    { label: "Performance", value: "Sub-second, always" },
    { label: "Product thinking", value: "Details that add up" },
  ],
  projectsHeading: "Selected work",
  contactHeading: "Let’s build something great together.",
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    name: "Aurora",
    description:
      "A real-time analytics dashboard that turns raw events into answers. Placeholder story — replace with your own project.",
    tags: ["Next.js", "Postgres", "Realtime"],
    gradient: "from-sky-400 to-indigo-500",
  },
  {
    name: "Monolith UI",
    description:
      "An accessible component library with 40+ primitives, themeable tokens and motion built in. Placeholder story.",
    tags: ["TypeScript", "Design System", "Motion"],
    gradient: "from-rose-400 to-orange-400",
  },
  {
    name: "Edge Notes",
    description:
      "A distraction-free note-taking app with sync, search and offline-first storage. Placeholder story.",
    tags: ["React Native", "Sync", "Offline-first"],
    gradient: "from-emerald-400 to-teal-500",
  },
] as const;