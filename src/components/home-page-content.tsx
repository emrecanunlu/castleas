"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  PenTool,
  Quote,
  Star,
  Trees,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import {
  company,
  processSteps,
  projects,
  services,
  stats,
  testimonials,
} from "@/lib/constants";

const serviceIcons = {
  blueprint: PenTool,
  building: Building2,
  tree: Trees,
};

export function HomePageContent() {
  return (
    <>
      <section className="border-y border-border bg-elevated py-14 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="text-center lg:text-left"
            >
              <p className="font-display text-4xl font-bold lg:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hizmetler"
            title="Uçtan Uca Yapı Çözümleri"
            description="Mimarlık, inşaat ve peyzaj disiplinlerini tek ekip altında birleştiriyoruz."
            href="/hizmetler"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const Icon = serviceIcons[service.icon];
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
                    className="group flex h-full flex-col border border-border bg-card p-8 transition-colors duration-300 hover:border-accent/40 hover:bg-elevated cursor-pointer"
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-border bg-background transition-colors duration-300 group-hover:border-accent group-hover:text-accent">
                      <Icon className="h-6 w-6" />
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

      <section className="border-y border-border bg-card py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
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
            <div className="absolute -bottom-6 -right-4 border border-border bg-elevated p-6 shadow-xl lg:-right-8">
              <p className="font-display text-3xl font-bold">15+</p>
              <p className="text-sm text-muted-foreground">Yıllık deneyim</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
          >
            <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">
              Hakkımızda
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight lg:text-5xl">
              Torbalı&apos;dan İzmir&apos;e Güvenilir Ortağınız
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Castle Mimarlık & İnşaat & Peyzaj, konut ve ticari projelerde
              estetik tasarımı sağlam mühendislikle buluşturur. Keşiften teslimata
              kadar şeffaf süreç yönetimi sunarız.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Tek muhatap ile uçtan uca proje yönetimi",
                "Torbalı ve İzmir genelinde aktif saha ekibi",
                "Malzeme seçiminde kalite ve bütçe dengesi",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/hakkimizda"
              className="mt-10 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-accent transition-opacity hover:opacity-80 cursor-pointer"
            >
              Daha Fazla Bilgi
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projeler"
            title="Seçilmiş Referanslarımız"
            description="Konut, ticari ve peyzaj alanlarında tamamladığımız projelerden öne çıkanlar."
            href="/projeler"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
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
                    className="aspect-[16/10] bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.03]"
                    style={{ backgroundImage: `url('${project.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="text-xs tracking-[0.25em] text-accent uppercase">
                      {project.category}
                    </p>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Süreç"
            title="Projeden Teslimata 4 Adım"
            description="Her aşamada net iletişim ve ölçülebilir ilerleme."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-border bg-card p-6 lg:p-8"
              >
                <p className="font-display text-3xl font-bold text-accent">
                  {step.step}
                </p>
                <h3 className="mt-4 font-display text-xl font-semibold">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Referanslar"
            title="Müşterilerimiz Ne Diyor?"
            description={`${company.rating} puan · ${company.reviewCount} değerlendirme`}
            href="/referanslar"
            align="center"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {testimonials.map((item, index) => (
              <motion.blockquote
                key={item.author}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-border bg-card p-8"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="h-7 w-7 text-accent/50" />
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-6">
                  <p className="font-semibold">{item.author}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-elevated py-20 lg:py-28">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-6 text-center lg:px-8">
          <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">
            Hemen Başlayın
          </p>
          <h2 className="max-w-3xl font-display text-3xl font-semibold tracking-tight lg:text-5xl">
            Projeniz için ücretsiz keşif ve ön görüşme
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {company.phone} numarasından bize ulaşın veya formu doldurun.
            Ekibimiz en kısa sürede dönüş yapsın.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center gap-2 bg-accent px-8 py-4 text-sm font-semibold tracking-widest text-accent-foreground uppercase transition-opacity hover:opacity-90 cursor-pointer"
            >
              İletişime Geç
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={company.phoneHref}
              className="inline-flex items-center justify-center border border-border px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-colors hover:border-accent hover:text-accent cursor-pointer"
            >
              {company.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
