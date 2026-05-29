import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Projects } from "@/components/projects";

export const metadata: Metadata = {
  title: "Projeler | Castle Mimarlık & İnşaat & Peyzaj",
  description:
    "Castle Mimarlık tamamlanan konut, ticari ve peyzaj projeleri. Torbalı ve İzmir referans çalışmaları.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projeler"
        title="Seçilmiş Çalışmalar"
        description="Konut, ticari ve peyzaj projelerinden öne çıkan uygulamalarımız."
      />
      <Projects />
    </>
  );
}
