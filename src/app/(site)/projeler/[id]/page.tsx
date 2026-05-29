import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { DetailHeader } from "@/components/detail-header";
import { getAllProjectIds, getProjectById } from "@/lib/data";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getAllProjectIds().map((id) => ({ id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Proje Bulunamadı" };

  return {
    title: `${project.title} | Castle Mimarlık`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) notFound();

  return (
    <>
      <DetailHeader
        backHref="/projeler"
        backLabel="Tüm projeler"
        eyebrow="Proje Detayı"
        title={project.title}
        description={project.description}
        meta={[project.category, project.location, project.year]}
      />

      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            className="aspect-[21/9] border border-border bg-cover bg-center"
            style={{ backgroundImage: `url('${project.image}')` }}
          />

          {project.gallery.length > 1 && (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((image) => (
                <div
                  key={image}
                  className="aspect-[4/3] border border-border bg-cover bg-center"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              ))}
            </div>
          )}

          <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-12 sm:flex-row sm:items-center">
            <p className="max-w-2xl text-muted-foreground">
              Benzer bir proje için keşif ve teklif sürecini birlikte
              planlayalım.
            </p>
            <Link
              href="/iletisim"
              className="inline-flex items-center gap-2 bg-accent px-8 py-4 text-sm font-semibold tracking-widest text-accent-foreground uppercase transition-opacity hover:opacity-90 cursor-pointer"
            >
              İletişime Geç
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
