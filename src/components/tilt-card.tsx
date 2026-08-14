"use client";

import React from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
}

export function TiltCard({
  children,
  className = "",
}: TiltCardProps) {
  return (
    <div
      className={`transition-all duration-300 ease-out hover:-translate-y-1 ${className}`}
    >
      {children}
    </div>
  );
}
