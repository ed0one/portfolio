export const site = {
  name: "ed0one",
  fullName: "Eduard Iliescu",
  role: "Product Engineer",
  email: "hello@ed0one.dev",
  github: "https://github.com/ed0one",
  linkedin: "https://www.linkedin.com/in/eduard-iliescu-582ab22b4/?locale=en",
  location: "Bucharest, Romania",

  timezone: "EEST (UTC+3)",
  status: "Available for new projects",
  established: "CREATING SINCE 2022",
  tagline: "Building modern, scalable, and delightful web experiences.",
  heroHeading: "PRODUCT ENGINEER",
  intro:
    "I’m ed0one, a Product Engineer based in Bucharest, Romania. I focus on turning complex challenges into fast, resilient, and intuitive interfaces. From design systems and full-stack architecture to sub-second performance, I care about every pixel and every millisecond.",
  about: [
    "Over the past years, I have built and shipped software at the intersection of design, systems engineering, and developer ergonomics. I believe great software is quiet: it works with such reliability and intent that you never have to think about the plumbing.",
    "My work spans high-performance web applications, robust database architectures with strict security boundaries, design systems with tokenized primitives, and local-first cognitive agent workflows.",
  ],
  principles: [
    {
      number: "01",
      title: "Sub-Second, Always",
      description:
        "Performance is not an afterthought or a polish pass; it is a foundational feature. Zero lag, predictable rendering, and instant feedback loops.",
    },
    {
      number: "02",
      title: "One Source of Truth",
      description:
        "Strict schemas, end-to-end type safety, and disciplined architecture. When data contracts are unambiguous, systems scale effortlessly.",
    },
    {
      number: "03",
      title: "Craft in the Micro-Details",
      description:
        "From keyboard navigation and fluid animations to accessible contrast and thumb-reach zones, the small details compound into exceptional products.",
    },
  ],
  services: [
    {
      number: "01",
      title: "Design Systems & UI Engineering",
      description:
        "Architecting cohesive, scalable component libraries with tokenized variables, responsive layouts, and buttery micro-interactions.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion", "Accessibility", "Design Tokens"],
    },
    {
      number: "02",
      title: "Full-Stack Web Systems",
      description:
        "Developing end-to-end web platforms backed by PostgreSQL, Supabase Row-Level Security, Zod validation, and robust API layers.",
      tags: ["TypeScript", "Supabase", "PostgreSQL", "RLS", "Server Actions", "REST APIs"],
    },
    {
      number: "03",
      title: "Performance & Architecture",
      description:
        "Optimizing Core Web Vitals, eliminating bundle bloat, and structuring timezone-safe, resilient client-server data flows.",
      tags: ["Core Web Vitals", "SSR/SSG", "Edge Runtime", "Zod Strict", "Security Reviews"],
    },
    {
      number: "04",
      title: "AI Tooling & Cognitive Workflows",
      description:
        "Building local-first knowledge systems, autonomous agent memory pipelines, and tool integrations that multiply engineering leverage.",
      tags: ["Agentic Workflows", "Graph Memory", "Ars Contexta", "Antigravity", "Markdown Graphs"],
    },
  ],
  skillsArsenal: [
    {
      category: "Frontend & UI",
      items: ["Next.js (App Router)", "React 19", "TypeScript", "TailwindCSS", "Framer Motion", "HTML5 / Semantic CSS"],
    },
    {
      category: "Backend & Data",
      items: ["Node.js", "Supabase / PostgreSQL", "Row-Level Security (RLS)", "PHP 8+", "Zod Strict Schemas", "Resend API"],
    },
    {
      category: "Systems & Tooling",
      items: ["Git & GitHub", "Docker", "Antigravity IDE", "macOS Unix Ops", "Vercel", "Arduino / Embedded C++"],
    },
  ],
  projectsHeading: "/ SELECTED WORK",
  contactHeading: "Let’s talk.",
  contactSubtitle:
    "Have an exciting project, a role, or want to collaborate? Fill out the form or reach out directly.",
} as const;

export const navigation = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

export const projects = [
  {
    id: "taskcapture",
    name: "TaskCapture",
    year: "2026",
    category: "SaaS & Productivity",
    description:
      "A high-velocity bidirectional task intelligence platform featuring Next.js App Router, Zod strict validation, Supabase Row-Level Security, Jira bidirectional synchronization, and timezone-safe Kanban scheduling.",
    tags: ["Next.js", "Supabase", "TypeScript", "Zod", "Jira API", "TailwindCSS"],
    gradient: "from-[#F59E0B] via-[#EF4444] to-[#8B5CF6]",
    accentColor: "#F59E0B",
    stats: "Bidirectional Sync · RLS Protected",
    image: "/projects/taskcapture.jpg",
    github: "https://github.com/ed0one",
    live: "https://www.taskcapture.xyz",
    featured: true,
  },

  {
    id: "second-brain",
    name: "Ars Contexta — Second Brain",
    year: "2026",
    category: "AI & Knowledge Systems",
    description:
      "A local-first associative knowledge engine implementing 4-phase pipelines (reduce, reflect, reweave, verify), title-as-claim semantic traversals, heterarchical memory graphs, and Obsidian vault interoperability.",
    tags: ["Agentic Systems", "GraphRAG", "Antigravity", "Markdown", "Obsidian"],
    gradient: "from-[#10B981] via-[#06B6D4] to-[#3B82F6]",
    accentColor: "#10B981",
    stats: "58 Nodes · 0 Broken Links",
    image: "/projects/second-brain.jpg",
    github: "https://github.com/ed0one",
    featured: true,
  },
  {
    id: "personal-os",
    name: "Personal OS",
    year: "2026",
    category: "Agentic Platform",
    description:
      "Autonomous developer workspace runtime powered by Next.js 16, LLM Agent SDKs, and persistent file-backed associative memory for self-orchestrating task executions.",
    tags: ["Next.js 16", "Agent SDK", "TypeScript", "Node.js", "System Ops"],
    gradient: "from-[#8B5CF6] via-[#EC4899] to-[#F43F5E]",
    accentColor: "#8B5CF6",
    stats: "Next.js 16 · Agent Memory",
    image: "/projects/personal-os.jpg",
    github: "https://github.com/ed0one",
    featured: true,
  },
  {
    id: "job-board",
    name: "Job Board TW",
    year: "2026",
    category: "Full-Stack Web",
    description:
      "Full-stack career portal and candidate tracking system with role-based routing, structured MySQL schemas, fast faceted filtering, and applicant management workflows.",
    tags: ["PHP 8+", "MySQL", "Auth & RBAC", "REST API", "TailwindCSS"],
    gradient: "from-[#3B82F6] via-[#6366F1] to-[#8B5CF6]",
    accentColor: "#3B82F6",
    stats: "RBAC Auth · MySQL Schema",
    image: "/projects/job-board.jpg",
    github: "https://github.com/ed0one",
    live: "https://jobboard-tw.vercel.app",
    featured: true,
  },

  {
    id: "smartpot",
    name: "SmartPot & IoT Telemetry",
    year: "2025",
    category: "Embedded & IoT",
    description:
      "Automated plant care and irrigation system utilizing soil moisture sensor calibration, threshold-based solenoid control routines, and low-power telemetry reporting.",
    tags: ["Arduino", "C++ / JS", "IoT Sensors", "Hardware Telemetry"],
    gradient: "from-[#10B981] via-[#84CC16] to-[#EAB308]",
    accentColor: "#10B981",
    stats: "Arduino · Sensor Telemetry",
    image: "/projects/smartpot.jpg",
    github: "https://github.com/ed0one/SmartPot_autowatering",
    featured: false,
  },
] as const;