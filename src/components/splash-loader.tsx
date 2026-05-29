"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { company } from "@/lib/constants";

const MIN_DISPLAY_MS = 2400;
const EXIT_DURATION_MS = 900;

export function SplashLoader() {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<"enter" | "exit" | "hidden">("enter");

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const exitTimer = window.setTimeout(() => {
      setPhase("exit");
    }, MIN_DISPLAY_MS);

    return () => {
      window.clearTimeout(exitTimer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (phase !== "exit") return;

    const hideTimer = window.setTimeout(() => {
      setPhase("hidden");
      document.body.style.overflow = "";
    }, prefersReducedMotion ? 0 : EXIT_DURATION_MS);

    return () => window.clearTimeout(hideTimer);
  }, [phase, prefersReducedMotion]);

  if (phase === "hidden") {
    return null;
  }

  const exitAnimation = prefersReducedMotion
    ? { opacity: 0 }
    : { y: "-100%" };

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-background"
      initial={{ opacity: 1, y: 0 }}
      animate={phase === "exit" ? exitAnimation : { opacity: 1, y: 0 }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : EXIT_DURATION_MS / 1000,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/92" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex h-20 w-20 items-center justify-center border border-border bg-card font-display text-3xl font-bold tracking-wider text-accent shadow-2xl shadow-black/40"
        >
          C
        </motion.div>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 font-display text-2xl font-semibold tracking-[0.25em] uppercase lg:text-3xl"
        >
          {company.shortName}
        </motion.p>

        <motion.p
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-3 text-sm tracking-[0.35em] text-muted-foreground uppercase"
        >
          {company.tagline}
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-12 h-px w-48 overflow-hidden bg-border"
        >
          <motion.div
            className="h-full origin-left bg-accent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: prefersReducedMotion ? 0.3 : 2,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.35,
            }}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-xs tracking-[0.3em] text-muted-foreground uppercase"
        >
          Torbalı · İzmir
        </motion.p>
      </div>

      {!prefersReducedMotion && (
        <motion.div
          className="absolute bottom-0 left-0 h-1 w-full origin-left bg-accent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: MIN_DISPLAY_MS / 1000,
            ease: "linear",
          }}
        />
      )}
    </motion.div>
  );
}
