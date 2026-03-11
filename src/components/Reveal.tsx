"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/components/language-provider";

type RevealVariant = "fade-up" | "fade" | "scale-up";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before the animation starts once the element is in view (ms) */
  delay?: number;
  /** Animation style */
  variant?: RevealVariant;
  /** Fraction of element that must be visible to trigger (0–1) */
  threshold?: number;
}

/**
 * Wraps children in a scroll-triggered entrance animation.
 * Resets and replays every time the language is switched.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "fade-up",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const { language } = useLanguage();

  // Reset whenever the language changes so animations replay
  useEffect(() => {
    setVisible(false);
  }, [language]);

  // (Re-)create the observer whenever visible resets to false
  useEffect(() => {
    if (visible) return; // already shown — nothing to observe

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el); // animate once per language session
        }
      },
      { threshold, rootMargin: "0px 0px -48px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible, threshold]); // re-runs when visible flips back to false

  return (
    <div
      ref={ref}
      className={cn(
        "reveal-base",
        `reveal-${variant}`,
        visible && "reveal-visible",
        className
      )}
      style={
        visible && delay > 0
          ? { transitionDelay: `${delay}ms` }
          : undefined
      }
    >
      {children}
    </div>
  );
}
