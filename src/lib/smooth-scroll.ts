import type Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  lenisInstance = instance;
}

export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement> | MouseEvent,
  targetId: string
) {
  e.preventDefault();
  const id = targetId.replace(/^#/, "");
  const element = document.getElementById(id);
  if (!element) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(element, { offset: -80 });
    return;
  }

  // Fallback for the brief window before Lenis mounts
  const yOffset = -80; // Offset for the fixed floating header
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
}
