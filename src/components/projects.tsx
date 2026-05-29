"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/constants";

export function Projects() {
  return (
    <section className="bg-muted py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex justify-end">
          <Link
            href="/iletisim"
            className="inline-flex w-fit border border-border px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:border-accent hover:text-accent cursor-pointer"
          >
            Projenizi Planlayalım
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Link
                href={`/projeler/${project.id}`}
                className="group relative block overflow-hidden border border-border bg-card cursor-pointer"
              >
                <div
                  className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-xs tracking-[0.25em] text-accent uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-accent">
                    Projeyi incele
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
