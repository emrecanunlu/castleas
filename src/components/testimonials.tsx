"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { company, testimonials } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 flex justify-center">
          <div className="inline-flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-accent text-accent"
              />
            ))}
            <span className="ml-2 text-muted-foreground">
              {company.rating} · {company.reviewCount} değerlendirme
            </span>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-border bg-card p-8"
            >
              <Quote className="h-8 w-8 text-accent/60" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <footer className="mt-8 border-t border-border pt-6">
                <p className="font-semibold">{item.author}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
