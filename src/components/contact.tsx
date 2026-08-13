"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/content";

const inputClasses =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 transition-colors duration-300 focus:border-zinc-900 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const result = (await response.json()) as { ok: boolean; error?: string };

    if (!response.ok || !result.ok) {
      setStatus("error");
      setError(result.error ?? "Something went wrong. Please try again.");
      return;
    }

    setStatus("sent");
    setName("");
    setEmail("");
    setMessage("");
  }

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
      <Reveal delay={0.1}>
        <p className="mt-6 max-w-lg text-lg text-zinc-500">
          I&apos;m currently available for select freelance work and collaborations. Do
          you have a project worth building? Get in touch.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex w-full max-w-lg flex-col gap-4 text-left"
        >
          <div className="flex flex-col gap-4 sm:flex-row">
            <label className="flex-1">
              <span className="sr-only">Name</span>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                disabled={status === "sending"}
                className={inputClasses}
              />
            </label>
            <label className="flex-1">
              <span className="sr-only">Email</span>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                disabled={status === "sending"}
                className={inputClasses}
              />
            </label>
          </div>
          <label>
            <span className="sr-only">Message</span>
            <textarea
              name="message"
              placeholder="Tell me about your project…"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              disabled={status === "sending"}
              className={`${inputClasses} resize-none`}
            />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <Send className="h-4 w-4" aria-hidden="true" />
          </button>
          {status === "sent" && (
            <p className="text-sm text-emerald-600">Thanks — your message has been sent.</p>
          )}
          {status === "error" && error && <p className="text-sm text-red-600">{error}</p>}
        </form>
      </Reveal>
      <Reveal delay={0.3}>
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
            rel="noopener noreferrer"
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