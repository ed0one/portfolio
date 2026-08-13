import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex w-full max-w-3xl flex-col items-center px-6 py-32 text-center sm:px-8"
    >
      <Reveal>
        <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-zinc-900 sm:text-6xl">
          {site.contactHeading}
        </h2>
      </Reveal>

      <Reveal delay={0.08}>
        <p className="mt-6 max-w-lg text-lg text-zinc-500">
          I&#39;m currently available for select freelance work and
          collaborations. Do you have a project worth building? Get in touch.
        </p>
      </Reveal>

      <Reveal delay={0.16}>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${site.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {site.email}
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 px-7 py-3.5 text-sm font-medium text-zinc-900 transition-colors duration-300 hover:bg-black/[0.03]"
          >
            GitHub
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </Reveal>
    </section>
  );
}