import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Building2, PenTool, Trees } from "lucide-react";
import { DetailHeader } from "@/components/detail-header";
import { getAllServiceIds, getServiceById } from "@/lib/data";

const icons = {
  blueprint: PenTool,
  building: Building2,
  tree: Trees,
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllServiceIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) return { title: "Hizmet Bulunamadı" };

  return {
    title: `${service.title} | Castle Mimarlık`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { id } = await params;
  const service = getServiceById(id);
  if (!service) notFound();

  const Icon = icons[service.icon];

  return (
    <>
      <DetailHeader
        backHref="/hizmetler"
        backLabel="Tüm hizmetler"
        eyebrow="Hizmet Detayı"
        title={service.title}
        description={service.longDescription}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div
            className="aspect-[4/3] border border-border bg-cover bg-center"
            style={{ backgroundImage: `url('${service.image}')` }}
          />
          <div>
            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center border border-border bg-card text-accent">
              <Icon className="h-6 w-6" />
            </div>
            <h2 className="font-display text-2xl font-semibold">
              Neler Sunuyoruz?
            </h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 border-b border-border pb-4 text-muted-foreground last:border-0"
                >
                  <span className="h-1.5 w-1.5 shrink-0 bg-accent" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/iletisim"
              className="mt-10 inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold tracking-widest text-accent-foreground uppercase transition-opacity hover:opacity-90 cursor-pointer"
            >
              Teklif Al
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
