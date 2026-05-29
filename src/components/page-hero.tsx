"use client";

import { motion, useReducedMotion } from "framer-motion";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="border-b border-border bg-card pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          className="max-w-3xl"
        >
          <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
