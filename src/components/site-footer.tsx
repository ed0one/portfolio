import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row sm:px-8">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <p className="text-sm text-zinc-400">
          {site.role} · {site.location}
        </p>
      </div>
    </footer>
  );
}