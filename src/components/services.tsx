"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, PenTool, Trees } from "lucide-react";
import { services } from "@/lib/constants";

const icons = {
  blueprint: PenTool,
  building: Building2,
  tree: Trees,
};

export function Services() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = icons[service.icon];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/hizmetler/${service.id}`}
                  className="group flex h-full flex-col border border-border bg-background p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-elevated cursor-pointer"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center border border-border bg-card transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-accent">
                    Detay
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
