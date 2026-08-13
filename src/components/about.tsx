import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-3xl px-6 py-28 sm:px-8"
    >
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          About
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <div className="mt-8 space-y-6">
          {site.about.map((paragraph) => (
            <p
              key={paragraph}
              className="text-xl leading-relaxed text-zinc-600 sm:text-2xl"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-black/[0.06] sm:grid-cols-3">
        {site.focuses.map((focus, index) => (
          <Reveal key={focus.label} delay={index * 0.06}>
            <div className="h-full bg-white px-7 py-8">
              <p className="text-sm font-medium text-zinc-900">{focus.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                {focus.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}