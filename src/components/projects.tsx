import { projects, site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section id="work" className="mx-auto w-full max-w-3xl px-6 py-28 sm:px-8">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-widest text-zinc-400">
          {site.projectsHeading}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal key={project.name} delay={index * 0.06}>
            <a
              href="#"
              className="group block rounded-3xl bg-white p-3 shadow-[0_2px_20px_rgba(0,0,0,0.04)] ring-1 ring-black/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)]"
            >
              <div
                className={`flex aspect-[16/10] items-center justify-center rounded-2xl bg-gradient-to-br ${project.gradient}`}
              >
                <span className="text-4xl font-semibold text-white/95">
                  {project.name[0]}
                </span>
              </div>
              <div className="px-4 py-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {project.name}
                  </h3>
                  <span className="text-xs text-zinc-400 transition-colors duration-300 group-hover:text-zinc-600">
                    View case study →
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-black/[0.04] px-3 py-1 text-xs font-medium text-zinc-600"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </a>
          </Reveal>
        ))}

        <Reveal delay={0.18}>
          <a
            href="#contact"
            className="flex aspect-[16/10] flex-col items-center justify-center rounded-3xl border border-dashed border-black/10 bg-transparent text-center transition-colors duration-500 hover:border-zinc-900"
          >
            <span className="text-lg font-medium text-zinc-900">
              Have a project in mind?
            </span>
            <span className="mt-1 text-sm text-zinc-400">
              Let&#39;s talk → {/* eslint-disable-line react/no-unescaped-entities */}
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}