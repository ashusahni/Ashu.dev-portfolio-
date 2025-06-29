"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!beamsRef.current || !mounted) return;

    const beams = beamsRef.current;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      beams.style.setProperty("--mouse-x", `${mouseX}px`);
      beams.style.setProperty("--mouse-y", `${mouseY}px`);
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mounted]);

  return (
    <div
      ref={beamsRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition duration-300 lg:absolute",
        className
      )}
      style={{
        background:
          "radial-gradient(600px circle at var(--mouse-x, 100px) var(--mouse-y, 100px),rgba(29, 78, 216, 0.15),transparent 40%)",
      }}
    />
  );
}; 