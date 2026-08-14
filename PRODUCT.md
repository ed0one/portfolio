# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary user: the owner, ed0one, a Product Engineer based in Bucharest, Romania, open to new opportunities.
- Secondary user: recruiters and engineering teams evaluating ed0one's work and craft.

## Product Purpose

A personal portfolio site that presents ed0one's selected projects and communicates the product engineer's craft, so prospective employers can quickly gauge skills, taste, and fit.

## Positioning

A portfolio positioned on the craft of product engineering: design systems, performance, and product thinking as equal parts of the work, rather than a pure frontend or pure backend showcase.

## Operating Context

- Static Next.js app (App Router, Turbopack) at /Users/ed0one/Sites/portfolio.
- Site content lives in `src/lib/content.ts` (`site` and `projects`); `projects.tsx` renders the projects section.
- Project data is sourced from the owner's public GitHub account (github.com/ed0one).

## Capabilities and Constraints

- Sections: Work (#work), About (#about), Contact (#contact) with a working contact form (`/api/contact`).
- Projects are currently placeholders in `src/lib/content.ts` and must be replaced with the owner's real GitHub projects.
- Real public GitHub repos (no descriptions upstream): `practica_devidevs` (TypeScript), `fire-alarm-system` (JavaScript), `SmartPot_autowatering` (JavaScript), `Python-Snake-Game-with-Pygame` (Python), `Submit-CVs-and-managing-job-applications` (C++), plus profile repo `ed0one`. `MagiskOnWSA` is a fork and excluded.
- Contact email: hello@ed0one.dev. LinkedIn: linkedin.com/in/ed0one.

## Brand Commitments

- Name/brand: "ed0one"; role label "Product Engineer"; tagline "Crafting digital experiences that feel effortless."
- Focus areas: Design systems, Performance, Product thinking.
- Status line: "Open to new opportunities."

## Evidence on Hand

- Live site content in `src/lib/content.ts` (name, role, email, location, tagline, about, focuses).
- Public GitHub repository list fetched from api.github.com/users/ed0one/repos (names, languages, URLs; no upstream descriptions).
- No case studies, testimonials, metrics, or screenshots are available; nothing in this area may be fabricated.

## Product Principles

1. Real work over filler: every showcased project must be a real artifact, described truthfully.
2. Craft is the message: the section itself should demonstrate design and performance care.
3. Honesty by default: absent evidence (metrics, case studies) is never invented.
4. Effortless presentation: hierarchy and motion should make the work feel effortless to scan.
5. One owner, one voice: content reflects the owner's own framing of their work.

## Accessibility & Inclusion

- No product-specific accessibility requirement established beyond standard web accessibility.
