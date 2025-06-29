"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const Sparkles = ({
  children,
  className,
  background,
}: {
  children: React.ReactNode;
  className?: string;
  background?: string;
}) => {
  const sparklesRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!sparklesRef.current || !mounted) return;

    const sparkles = sparklesRef.current;
    const createSparkle = () => {
      const sparkle = document.createElement("div");
      sparkle.className = "absolute w-1 h-1 bg-yellow-400 rounded-full animate-ping";
      sparkle.style.left = Math.random() * 100 + "%";
      sparkle.style.top = Math.random() * 100 + "%";
      sparkle.style.animationDuration = Math.random() * 1 + 0.5 + "s";
      sparkle.style.animationDelay = Math.random() * 0.5 + "s";
      sparkles.appendChild(sparkle);

      setTimeout(() => {
        sparkle.remove();
      }, 2000);
    };

    const interval = setInterval(createSparkle, 100);
    return () => clearInterval(interval);
  }, [mounted]);

  return (
    <div
      ref={sparklesRef}
      className={cn(
        "relative inline-block",
        className
      )}
      style={{ background }}
    >
      {children}
    </div>
  );
}; 