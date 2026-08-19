# Brainstorming — Portofoliu ed0one: Fluiditate & Animații
**Autor:** ed0one
**Data:** 2026-08-19
**Metodologie:** BMAD (Business Model Agile Development)
**Scop:** Audit al stării curente de animație/fluiditate a portofoliului (`~/Sites/portfolio`) și listă concretă de îmbunătățiri pentru aspectul "full animation" de trend 2026 (stil Majd/Framer).

---

## 1. Problemă

- **Feature-ul central de 3D a fost eliminat, nu doar neterminat.** `src/components/tilt-card.tsx` a fost redus în commit-ul `a8d5035` ("refactor: clean glow effects...") de la un tilt cu tracking de cursor + glare specular (77 linii) la un simplu `hover:-translate-y-1` CSS. Nota din vault (`2026-08-14-portfolio-redesign-majd-style.md`) încă descrie feature-ul vechi ca existent — documentația e desincronizată de cod.
- **Scroll-ul e nativ, nu inerțial.** `src/lib/smooth-scroll.ts` folosește `window.scrollTo({behavior:"smooth"})` — easing de browser, nu spring/inerție (genul Lenis/Framer care dă senzația de "greutate" la scroll).
- **Reveal-urile sunt uniforme și repetitive.** `Reveal` (`src/components/reveal.tsx`) e mereu fade+translateY(24px), aceeași curbă `[0.16,1,0.3,1]`, aplicat individual pe fiecare bloc din `Hero`, `Projects`, `Services` — nimic scroll-linked (`useTransform` pe `scrollYProgress`), nimic cu scale/blur, nimic stagger real (doar `delay={index * 0.08}` calculat manual, nu `staggerChildren` din framer-motion).
- **Zero parallax.** Singurul `useScroll` din tot repo-ul e în `scroll-progress.tsx` (bara de sus). Imaginile de proiect (`projects.tsx`) au doar `group-hover:scale-105`, nicio mișcare legată de poziția de scroll.
- **Zero cursor custom / reactive.** Ambient blobs (`ambient-background.tsx`) sunt animații pe loop fix (20-24s), nu reacționează la poziția mouse-ului — pe siteurile de trend (Majd, Framer showcase-uri) fundalul de obicei urmărește cursorul.

---

## 2. Soluție (idei concrete, cu scope)

- **Idee 1 — Reface TiltCard cu 3D real.** `rotateX/rotateY` legate de `onMouseMove` (poziție relativă cursor față de centru card), `useSpring` pentru revenire elastică (ca în `magnetic-button.tsx`, care deja are pattern-ul corect: `stiffness: 250, damping: 15`), plus glare specular cu un `radial-gradient` poziționat pe coordonatele cursorului. Scope: `tilt-card.tsx` + prop `glare` deja definit în interfață dar nefolosit.
- **Idee 2 — Scroll inerțial cu Lenis.** Înlocuiește `window.scrollTo` cu `lenis` (singura dependință nouă justificată — framer-motion singur nu dă momentum scroll). Scope: `smooth-scroll.ts` + wrapper `LenisProvider` în `layout.tsx`.
- **Idee 3 — Reveal cu variante multiple + stagger real.** Extinde `Reveal` cu variantă `blur` (`filter: blur(8px)→blur(0)`) pentru hero/titluri mari și `scale` (`0.96→1`) pentru carduri. Folosește `motion.div` cu `variants` + `staggerChildren` pe containerele `Projects`/`Services` în loc de delay calculat manual. Scope: `reveal.tsx` + `projects.tsx` + `services.tsx`.
- **Idee 4 — Parallax pe imaginile de proiect.** `useScroll({target: cardRef, offset:["start end","end start"]})` + `useTransform` pe `y` al imaginii din `projects.tsx` — imaginea se mișcă mai lent decât cardul la scroll. Scope: `projects.tsx` (imaginea de preview, ~15 linii).
- **Idee 5 — Cursor-reactive ambient background.** `ambient-background.tsx` trece de la loop fix la `useMotionValue` pe `mousemove` (throttled), blob-urile derivă ușor spre cursor cu spring, păstrând loop-ul de fundal ca bază. Scope: doar `ambient-background.tsx`.
- **Idee 6 — Text reveal per-literă la hero (opțional, mai riscant).** `wordVariants` din `hero.tsx` deja face reveal per-cuvânt cu `rotateX` — pas natural următor e split per literă cu `staggerChildren` mic (0.02-0.03s/literă). Scope: doar dacă vrei accent suplimentar, crește complexitatea DOM.

---

## 3. Utilizatori

- **Primary:** recrutori/echipe tehnice care evaluează craft-ul — pagina PRODUCT.md spune explicit "motion should make the work feel effortless to scan"; animațiile trebuie să comunice control, nu doar decor.
- **Secondary:** owner (ed0one) — site-ul e propriul showcase, orice regresie de fluiditate se vede direct în interviuri/portofoliu trimis.

---

## 4. Core features (ordine recomandată de implementare)

1. **Idee 1 (TiltCard 3D)** — cel mai vizibil, folosit deja în `Projects` și `Services`, deci un singur fix se vede în tot site-ul.
2. **Idee 3 (Reveal variante + stagger)** — al doilea ca impact vizual, atinge fiecare secțiune.
3. **Idee 2 (Lenis scroll)** — schimbă senzația globală de "greutate", dar e singura dependință nouă, deci verifică bundle size înainte.
4. **Idee 4 (parallax imagini)** — polish, după ce cardurile au deja tilt.
5. **Idee 5 (ambient cursor-reactive)** — polish fin, ultim.
6. **Idee 6 (text per-literă)** — opțional, doar dacă mai rămâne buget de timp.

---

## 5. Riscuri

- **Performance pe mobil.** `rotateX/rotateY` pe multe carduri simultan + parallax pot cauza jank pe telefoane mid-range — testează pe device real, nu doar desktop (regulă existentă: verificare desktop+tabletă+telefon).
- **Lenis + Next.js App Router.** Poate intra în conflict cu `scroll-progress.tsx` (`useScroll` global) și cu anchor scroll (`scrollToSection`) — ambele trebuie recalibrate pe același sistem de scroll, nu unul nativ + unul Lenis în paralel.
- **Over-engineering.** PRODUCT.md are ca principiu "Effortless presentation" — nu adăuga toate cele 6 idei simultan; fiecare animație nouă trebuie să servească scanabilitatea, nu doar "wow factor". Ideea 6 (text per-literă) e cea mai expusă la a deveni zgomot.
- **Accesibilitate.** Niciun cod verificat nu respectă `prefers-reduced-motion` — toate motion-urile noi (tilt, parallax, ambient cursor) trebuie să aibă fallback static pentru utilizatorii cu reduce-motion activ.
