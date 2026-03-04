"use client";

import { ReactNode, useEffect, useState, useRef } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) {
  const [isMotionLoaded, setIsMotionLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const motionDivRef = useRef<typeof import("framer-motion").motion.div | null>(
    null
  );

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Lazy-load Framer Motion when element is near viewport
  useEffect(() => {
    if (prefersReducedMotion || isMotionLoaded) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          import("framer-motion").then((mod) => {
            motionDivRef.current = mod.motion.div;
            setIsMotionLoaded(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Start loading before element is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [prefersReducedMotion, isMotionLoaded]);

  // Use Intersection Observer for CSS fallback animation
  useEffect(() => {
    if (isMotionLoaded || prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isMotionLoaded, prefersReducedMotion]);

  // Respect user's motion preferences - render without animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Once Framer Motion is loaded, use it
  if (isMotionLoaded && motionDivRef.current) {
    const MotionDiv = motionDivRef.current;
    return (
      <MotionDiv
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay, ease: "easeOut" }}
        className={className}
      >
        {children}
      </MotionDiv>
    );
  }

  // CSS fallback while Framer Motion loads
  return (
    <div
      ref={ref}
      className={`${className} ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
      style={isInView && delay > 0 ? { animationDelay: `${delay}s` } : undefined}
    >
      {children}
    </div>
  );
}
