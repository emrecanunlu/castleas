import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { Services } from "@/components/services";

export const metadata: Metadata = {
  title: "Hizmetler | Castle Mimarlık & İnşaat & Peyzaj",
  description:
    "Mimarlık, anahtar teslim inşaat ve peyzaj tasarım hizmetleri. Torbalı ve İzmir genelinde profesyonel uygulama.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Hizmetler"
        title="Uçtan Uca Yapı Çözümleri"
        description="Proje tasarımından saha uygulamasına kadar mimarlık, inşaat ve peyzaj disiplinlerini tek çatı altında yönetiyoruz."
      />
      <Services />
    </>
  );
}
