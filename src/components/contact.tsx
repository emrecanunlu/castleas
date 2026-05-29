"use client";

import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/lib/constants";

export function Contact() {
  return (
    <section className="bg-card py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <a
                href={company.phoneHref}
                className="flex items-start gap-4 transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-border bg-background">
                  <Phone className="h-5 w-5 text-accent" />
                </div>
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
                className="flex items-start gap-4 transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                <div className="flex h-11 w-11 items-center justify-center border border-border bg-background">
                  <MapPin className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Adres
                  </p>
                  <p className="font-medium">{company.address}</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center border border-border bg-background">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs tracking-widest text-muted-foreground uppercase">
                    Çalışma Saati
                  </p>
                  <p className="font-medium">{company.hours}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="border border-border bg-background p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
                  Ad Soyad
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent"
                  placeholder="Adınız Soyadınız"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
                  Telefon
                </span>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent"
                  placeholder="05xx xxx xx xx"
                />
              </label>
            </div>

            <label className="mt-6 block">
              <span className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
                E-posta
              </span>
              <input
                type="email"
                name="email"
                className="w-full border border-border bg-card px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent"
                placeholder="ornek@email.com"
              />
            </label>

            <label className="mt-6 block">
              <span className="mb-2 block text-xs tracking-widest text-muted-foreground uppercase">
                Proje Detayı
              </span>
              <textarea
                name="message"
                rows={5}
                required
                className="w-full resize-none border border-border bg-card px-4 py-3 text-sm outline-none transition-colors duration-200 focus:border-accent"
                placeholder="Mimarlık, inşaat veya peyzaj ihtiyacınızı kısaca anlatın..."
              />
            </label>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 text-sm font-semibold tracking-widest text-accent-foreground uppercase transition-opacity duration-200 hover:opacity-90 cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              Mesaj Gönder
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
