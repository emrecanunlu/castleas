import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Testimonials } from "@/components/testimonials";

export const metadata: Metadata = {
  title: "Referanslar | Castle Mimarlık & İnşaat & Peyzaj",
  description:
    "Castle Mimarlık müşteri yorumları ve referansları. 5.0 puan, Torbalı ve İzmir'de güvenilir inşaat firması.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Referanslar"
        title="Müşterilerimiz Ne Diyor?"
        description="Torbalı ve çevresinde tamamladığımız projelerde müşterilerimizden aldığımız geri bildirimler."
      />
      <Testimonials />
    </>
  );
}
