import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/lenis-provider";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ed0one — Product Engineer",
  description:
    "Product Engineer based in Bucharest, Romania. Building modern, scalable, and conversion-driven web experiences with exceptional craft.",
  keywords: [
    "Product Engineer",
    "Frontend Engineer",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Design Systems",
    "Bucharest",
    "ed0one",
  ],
  authors: [{ name: "ed0one", url: "https://github.com/ed0one" }],
  openGraph: {
    title: "ed0one — Product Engineer",
    description:
      "Crafting digital experiences that feel effortless. Design systems, performance, and product thinking.",
    url: "https://ed0one.github.io/portfolio/",
    siteName: "ed0one Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ed0one — Product Engineer",
    description:
      "Crafting digital experiences that feel effortless. Design systems, performance, and product thinking.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF7F3] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#FAF7F3]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}

