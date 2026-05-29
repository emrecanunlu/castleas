"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { stats } from "@/lib/constants";

const highlights = [
  "Keşif, proje ve uygulama süreçlerinde tek muhatap",
  "Torbalı ve İzmir genelinde aktif saha ekibi",
  "Malzeme seçiminde kalite ve bütçe dengesi",
  "Şeffaf zaman planı ve düzenli saha raporlaması",
];

export function About() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="relative"
        >
          <div
            className="aspect-[4/3] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80')",
            }}
          />
          <div className="absolute -bottom-8 -right-4 max-w-xs border border-border bg-card p-6 shadow-xl lg:-right-8">
            <p className="font-display text-sm tracking-[0.25em] text-accent uppercase">
              Castle
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Mimarlık, inşaat ve peyzajı aynı vizyonla birleştiren yerel ve
              güvenilir bir ekip.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            Castle Mimarlık & İnşaat & Peyzaj, konut ve ticari projelerde
            estetik tasarımı sağlam mühendislikle buluşturur. Her projede
            sürdürülebilir malzeme, iş güvenliği ve müşteri memnuniyetini öncelik
            kabul ederiz.
          </p>

          <ul className="mt-8 space-y-4">
            {highlights.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <span className="text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-bold">{stat.value}</p>
                <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
