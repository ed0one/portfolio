export function scrollToSection(
  e: React.MouseEvent<HTMLAnchorElement> | MouseEvent,
  targetId: string
) {
  e.preventDefault();
  const id = targetId.replace(/^#/, "");
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Offset for the fixed floating header
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
