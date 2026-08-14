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
  tagline: "Engineering resilient web applications, design systems, and autonomous workflows.",
  heroHeading: "PRODUCT ENGINEER",
  intro:
    "Product Engineer based in Bucharest, Romania. I specialize in building deterministic full-stack platforms, scalable design systems, and high-performance digital products. Focused on strict type contracts, sub-second latency, and uncompromising craft.",
  about: [
    "I design and build software at the convergence of product intuition, design system rigor, and full-stack systems engineering. Exceptional software feels effortless to users because the underlying architecture is robust, observable, and strictly typed.",
    "My work spans high-velocity production web applications, database architectures with row-level security boundaries, design token systems, and local-first associative memory architectures.",
  ],
  principles: [
    {
      number: "01",
      title: "Deterministic Performance",
      description:
        "Performance is a foundational feature, not an afterthought. Zero layout shifts, predictable render trees, and sub-second feedback loops built from the ground up.",
    },
    {
      number: "02",
      title: "Strict Data Boundaries",
      description:
        "End-to-end type safety, unambiguous contracts, and zero-trust schema validation. Disciplined data models scale effortlessly without runtime surprises.",
    },
    {
      number: "03",
      title: "Tactile Ergonomics & Craft",
      description:
        "From fluid keyboard navigation and accessible contrast to tokenized spacing and responsive touch states, micro-details compound into exceptional product feel.",
    },
  ],
  services: [
    {
      number: "01",
      title: "Design Systems & UI Engineering",
      description:
        "Architecting composable component libraries, design token pipelines, accessible patterns, and crisp micro-interactions that elevate product velocity.",
      tags: ["Next.js", "TailwindCSS", "Framer Motion", "Accessibility", "Design Tokens"],
    },
    {
      number: "02",
      title: "Full-Stack Web Architecture",
      description:
        "Engineering resilient web platforms backed by PostgreSQL schemas, Supabase Row-Level Security, strict Zod validation, and typed API boundaries.",
      tags: ["TypeScript", "Supabase", "PostgreSQL", "RLS", "Server Actions", "REST APIs"],
    },
    {
      number: "03",
      title: "Performance & Optimization",
      description:
        "Eliminating bundle bloat, optimizing Core Web Vitals, structuring edge-ready rendering strategies, and conducting architectural security audits.",
      tags: ["Core Web Vitals", "SSR/SSG", "Edge Runtime", "Zod Strict", "Security Reviews"],
    },
    {
      number: "04",
      title: "Cognitive Systems & Agent Workflows",
      description:
        "Building local-first associative memory engines, autonomous agent pipelines, and developer tooling that multiply engineering leverage.",
      tags: ["Agentic Workflows", "Graph Memory", "Local-First", "Knowledge Systems", "Markdown Graphs"],
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
    name: "Context Engine — Second Brain",
    year: "2026",
    category: "AI & Knowledge Systems",
    description:
      "A local-first associative memory architecture and knowledge graph engine. Features deterministic 4-stage ingestion pipelines, semantic graph traversals, title-as-claim indexing, and bidirectional markdown vault synchronization.",
    tags: ["Agentic Systems", "Graph Memory", "Local-First", "Knowledge Graph", "Markdown"],
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