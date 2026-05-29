import type { Metadata } from "next";
import { Contact } from "@/components/contact";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "İletişim | Castle Mimarlık & İnşaat & Peyzaj",
  description:
    "Castle Mimarlık ile iletişime geçin. Torbalı ofis adresi, telefon: 0532 164 67 21. 7/24 hizmet.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Projenizi Konuşalım"
        description="Ücretsiz keşif ve ön görüşme için bizi arayın veya formu doldurun. Ekibimiz en kısa sürede size dönüş yapacaktır."
      />
      <Contact />
    </>
  );
}
