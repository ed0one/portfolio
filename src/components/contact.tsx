"use client";

import { useState, useEffect } from "react";
import { site } from "@/lib/content";
import { contactSchema } from "@/lib/schemas";
import { Reveal } from "@/components/reveal";
import { TiltCard } from "@/components/tilt-card";
import { Check, Copy, Clock, Send, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;


export default function Contact() {

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Europe/Bucharest",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message ?? "Please check your input.");
      return;
    }

    if (!FORMSPREE_ID) {
      setStatus("error");
      setErrorMessage("Contact form is not configured yet. Please email me directly.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await res.json().catch(() => null);
        setStatus("error");
        setErrorMessage(data?.errors?.[0]?.message || "Failed to send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please reach out via email directly.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full border-t border-black/[0.06]"
    >
      <Reveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#111111]/60 mb-3">
              / CONTACT
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111] uppercase">
              {site.contactHeading}
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#111111]/70 leading-relaxed">
            {site.contactSubtitle}
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Info Column */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Direct Email Card with Copy Button */}
          <Reveal delay={0.05}>
            <TiltCard
              maxTilt={5}
              className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <p className="text-xs font-bold uppercase tracking-wider text-[#111111]/50 mb-3">
                Direct Email
              </p>
              <div className="flex items-center justify-between gap-3">
                <a
                  href={`mailto:${site.email}`}
                  className="text-lg sm:text-xl font-bold tracking-tight text-[#111111] hover:underline truncate"
                >
                  {site.email}
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#111111] hover:bg-black/[0.08] active:scale-95 transition-all shrink-0"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-600" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-xs text-emerald-600 font-medium mt-2">
                  Email copied to clipboard!
                </p>
              )}
            </TiltCard>
          </Reveal>

          {/* Timezone & Location Card */}
          <Reveal delay={0.1}>
            <TiltCard
              maxTilt={5}
              className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#111111]/50">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{site.location}</span>
                </div>
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-black/[0.04] text-[#111111]">
                  {site.timezone}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-5 w-5 text-[#111111]/70" />
                <span className="font-mono text-2xl font-bold tracking-tight text-[#111111]">
                  {time || "12:00:00"}
                </span>
              </div>
            </TiltCard>
          </Reveal>

          {/* Social Profiles */}
          <Reveal delay={0.15}>
            <TiltCard
              maxTilt={5}
              className="bg-white rounded-3xl p-8 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex items-center justify-between transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#111111]/50">
                Connect
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#111111] hover:bg-black/[0.08] hover:scale-105 active:scale-95 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#111111] hover:bg-black/[0.08] hover:scale-105 active:scale-95 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/[0.04] text-[#111111] hover:bg-black/[0.08] hover:scale-105 active:scale-95 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </TiltCard>
          </Reveal>
        </div>


        {/* Right Contact Form */}
        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 sm:p-10 border border-black/[0.06] shadow-[0_2px_15px_rgba(0,0,0,0.02)] flex flex-col gap-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-bold uppercase tracking-wider text-[#111111]/70 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F3] border border-black/[0.06] text-sm text-[#111111] placeholder:text-[#111111]/30 focus:outline-none focus:ring-2 focus:ring-[#111111]/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-bold uppercase tracking-wider text-[#111111]/70 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F3] border border-black/[0.06] text-sm text-[#111111] placeholder:text-[#111111]/30 focus:outline-none focus:ring-2 focus:ring-[#111111]/20 transition-all"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-[#111111]/70 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project, goals, or opportunities..."
                  className="w-full px-4 py-3.5 rounded-2xl bg-[#FAF7F3] border border-black/[0.06] text-sm text-[#111111] placeholder:text-[#111111]/30 focus:outline-none focus:ring-2 focus:ring-[#111111]/20 transition-all resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-xs font-medium text-red-600 bg-red-50 p-3 rounded-xl border border-red-200">
                  {errorMessage}
                </p>
              )}

              {status === "success" && (
                <p className="text-xs font-medium text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
                  Thank you! Your message has been sent successfully. I will get back to you shortly.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#111111] text-[#FAF7F3] text-xs font-bold uppercase tracking-wider hover:bg-[#252525] transition-all duration-200 hover:shadow-lg disabled:opacity-50"
              >
                <Send className="h-3.5 w-3.5" />
                <span>{status === "loading" ? "Sending Message..." : "Send Message"}</span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}