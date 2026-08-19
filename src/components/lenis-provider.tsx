"use client";

import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { setLenisInstance } from "@/lib/smooth-scroll";

function LenisBridge() {
  const lenis = useLenis();

  useEffect(() => {
    setLenisInstance(lenis ?? null);
    return () => setLenisInstance(null);
  }, [lenis]);

  return null;
}

export function LenisProvider({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <LenisBridge />
      {children}
    </ReactLenis>
  );
}
