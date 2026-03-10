"use client";

import { useEffect, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
} from "framer-motion";

function getIsTouchDevice() {
  return typeof window !== "undefined" && "ontouchstart" in window;
}

function subscribe() {
  // Touch capability doesn't change, no-op subscription
  return () => {};
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const isTouchDevice = useSyncExternalStore(
    subscribe,
    getIsTouchDevice,
    () => false
  );

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isTouchDevice, prefersReducedMotion, mouseX, mouseY]);

  // Parallax transforms — use fixed range since useTransform runs on client
  const shape1X = useTransform(mouseX, [0, 1440], [-20, 20]);
  const shape1Y = useTransform(mouseY, [0, 900], [-15, 15]);
  const shape2X = useTransform(mouseX, [0, 1440], [15, -15]);
  const shape2Y = useTransform(mouseY, [0, 900], [10, -10]);
  const shape3X = useTransform(mouseX, [0, 1440], [-10, 10]);
  const shape3Y = useTransform(mouseY, [0, 900], [-20, 20]);

  // Disable parallax for touch devices or reduced motion
  const disableParallax = isTouchDevice || prefersReducedMotion;

  // Animation variants for reduced motion support
  const textAnimation = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 1, y: 0 };

  const initialAnimation = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: 24 };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20 lg:px-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left — Text content */}
        <motion.div
          initial={initialAnimation}
          animate={textAnimation}
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: 0.6, ease: "easeOut" }
          }
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-sage">
            Frontend Engineer &amp; UI Craftsman
          </p>
          <h1 className="font-serif text-5xl font-bold leading-tight tracking-tight text-charcoal md:text-6xl lg:text-7xl">
            Javier
            <br />
            <span className="italic">Rivas</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-charcoal/70">
            Building scalable, accessible interfaces with React and TypeScript.
            Proven ability leading feature projects from planning to release.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-deep-blue px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-deep-blue/90"
            >
              View Work
              <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#resume"
              className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-6 py-3 text-sm font-medium text-charcoal transition-colors hover:border-deep-blue hover:text-deep-blue"
            >
              View Resumé
            </a>
          </div>
        </motion.div>

        {/* Right — Abstract shapes with parallax */}
        <div className="relative hidden h-[500px] lg:block" aria-hidden="true">
          {/* Large circle — deep blue */}
          <motion.div
            style={disableParallax ? {} : { x: shape1X, y: shape1Y }}
            className="absolute right-8 top-8 h-80 w-80 rounded-full bg-deep-blue/90"
          />
          {/* Medium circle — sage */}
          <motion.div
            style={disableParallax ? {} : { x: shape2X, y: shape2Y }}
            className="absolute bottom-12 right-32 h-48 w-48 rounded-full bg-sage/60"
          />
          {/* Small circle — outline */}
          <motion.div
            style={disableParallax ? {} : { x: shape3X, y: shape3Y }}
            className="absolute right-4 bottom-24 h-32 w-32 rounded-full border-2 border-charcoal/10"
          />
          {/* Code snippet element */}
          <motion.div
            style={disableParallax ? {} : { x: shape2X, y: shape1Y }}
            className="absolute top-32 right-24 rounded-lg bg-charcoal/90 px-4 py-3 font-mono text-xs text-cream/80 shadow-lg"
          >
            <span className="text-sage">const</span> ui ={" "}
            <span className="text-blue-300">build</span>();
          </motion.div>
          {/* Color palette element */}
          <motion.div
            style={disableParallax ? {} : { x: shape3X, y: shape2Y }}
            className="absolute bottom-32 right-12 flex gap-1.5 rounded-full bg-white/80 px-3 py-2 shadow-sm"
          >
            <span className="h-4 w-4 rounded-full bg-deep-blue" />
            <span className="h-4 w-4 rounded-full bg-sage" />
            <span className="h-4 w-4 rounded-full border border-warm-gray bg-cream" />
            <span className="h-4 w-4 rounded-full bg-charcoal" />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={
          prefersReducedMotion
            ? { duration: 0 }
            : { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }
        aria-hidden="true"
      >
        <p className="text-xs uppercase tracking-[0.15em] text-sage">Scroll</p>
      </motion.div>
    </section>
  );
}
