import type { Metadata } from "next";
import { About } from "@/components/about";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Hakkımızda | Castle Mimarlık & İnşaat & Peyzaj",
  description:
    "Castle Mimarlık & İnşaat & Peyzaj hakkında bilgi edinin. Torbalı merkezli deneyimli mimarlık ve inşaat ekibimiz.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Güvenilir İnşaat Ortağınız"
        description="Castle Mimarlık & İnşaat & Peyzaj, konut ve ticari projelerde estetik tasarımı sağlam mühendislikle buluşturur."
      />
      <About />
    </>
  );
}
