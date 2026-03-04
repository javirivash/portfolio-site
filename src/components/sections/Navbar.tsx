"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
  { href: "#resume", label: "Resume" },
];

// Types for Framer Motion components
type MotionDivType = typeof import("framer-motion").motion.div;
type AnimatePresenceType = typeof import("framer-motion").AnimatePresence;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [MotionDiv, setMotionDiv] = useState<MotionDivType | null>(null);
  const [AnimatePresence, setAnimatePresence] =
    useState<AnimatePresenceType | null>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) =>
      setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Lazy-load Framer Motion only when mobile menu is first opened
  useEffect(() => {
    if (mobileOpen && !MotionDiv && !prefersReducedMotion) {
      import("framer-motion").then((mod) => {
        setMotionDiv(() => mod.motion.div);
        setAnimatePresence(() => mod.AnimatePresence);
      });
    }
  }, [mobileOpen, MotionDiv, prefersReducedMotion]);

  const renderMobileMenu = () => {
    const menuContent = (
      <div className="flex flex-col gap-4 px-6 py-6">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-base text-charcoal/70 transition-colors hover:text-deep-blue"
          >
            {link.label}
          </a>
        ))}
      </div>
    );

    // If Framer Motion is loaded and user doesn't prefer reduced motion
    if (AnimatePresence && MotionDiv && !prefersReducedMotion) {
      return (
        <AnimatePresence>
          {mobileOpen && (
            <MotionDiv
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-b border-warm-gray bg-cream md:hidden"
            >
              {menuContent}
            </MotionDiv>
          )}
        </AnimatePresence>
      );
    }

    // CSS fallback for reduced motion or before Framer Motion loads
    if (mobileOpen) {
      return (
        <div className="overflow-hidden border-b border-warm-gray bg-cream md:hidden">
          {menuContent}
        </div>
      );
    }

    return null;
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-warm-gray/50 bg-cream/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-16">
        <a
          href="#"
          className="font-serif text-xl font-bold tracking-tight text-charcoal"
        >
          Javier Rivas
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-charcoal/70 transition-colors hover:text-deep-blue"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-opacity ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-charcoal transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {renderMobileMenu()}
    </nav>
  );
}
