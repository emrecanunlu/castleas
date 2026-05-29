"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative isolate h-[100dvh] overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      </div>

      <div
        className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8"
        style={{ paddingTop: "var(--header-height)" }}
      >
        <div className="grid w-full items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <motion.div
            className="relative z-10 lg:col-span-7"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={item}
              className="mb-4 font-display text-sm font-medium tracking-[0.35em] text-muted-foreground uppercase lg:mb-5"
            >
              Torbalı · İzmir
            </motion.p>

            <motion.h1
              variants={item}
              className="relative font-display text-[clamp(2.25rem,6vw,5rem)] leading-[0.95] font-semibold tracking-tight text-foreground xl:text-[clamp(2.75rem,5vw,5.5rem)]"
            >
              Yaşam Alanlarını
              <span className="block text-accent">Kalıcı Değere</span>
              Dönüştürüyoruz
            </motion.h1>

            <motion.div
              variants={item}
              className="my-6 h-1 w-24 bg-accent lg:my-8"
            />

            <motion.p
              variants={item}
              className="max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg"
            >
              {company.description}
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center lg:mt-10"
            >
              <Link
                href="/iletisim"
                className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-sm font-semibold tracking-widest text-accent-foreground uppercase transition-opacity duration-200 hover:opacity-90 cursor-pointer"
              >
                Proje Başlat
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/hizmetler"
                className="inline-flex items-center justify-center border border-foreground/20 bg-card/70 px-8 py-4 text-sm font-semibold tracking-widest uppercase backdrop-blur-sm transition-colors duration-200 hover:border-accent hover:text-accent cursor-pointer"
              >
                Hizmetlerimiz
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid gap-4 border-t border-border pt-6 sm:grid-cols-2 lg:mt-12 lg:pt-8"
            >
              <a
                href={company.phoneHref}
                className="flex items-start gap-3 transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Telefon
                  </p>
                  <p className="font-medium">{company.phone}</p>
                </div>
              </a>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Adres
                  </p>
                  <p className="font-medium">{company.address}</p>
                </div>
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-0 hidden min-w-0 lg:col-span-5 lg:flex lg:justify-end"
            initial={
              prefersReducedMotion
                ? { clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }
                : { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)" }
            }
            animate={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-[clamp(420px,calc(100dvh-var(--header-height)-3rem),760px)] w-full max-w-[480px]">
              <div
                className="h-full w-full bg-cover bg-center shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80')",
                }}
              />
              <div className="absolute bottom-6 right-6 border border-border bg-card p-5 shadow-xl lg:p-6">
                <p className="font-display text-3xl font-bold">120+</p>
                <p className="text-sm tracking-wide text-muted-foreground">
                  Tamamlanan proje
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
