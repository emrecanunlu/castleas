export const company = {
  name: "Castle Mimarlık & İnşaat & Peyzaj",
  shortName: "Castle",
  tagline: "Mimarlık · İnşaat · Peyzaj",
  description:
    "Torbalı ve İzmir genelinde konut, ticari yapılar ve peyzaj projelerinde uçtan uca mühendislik, tasarım ve uygulama hizmeti sunuyoruz.",
  phone: "0532 164 67 21",
  phoneHref: "tel:+905321646721",
  address: "Cumhuriyet, 2023. Sk. No: 14 / A, 35870 Torbalı/İzmir",
  mapsUrl:
    "https://www.google.com/maps/search/Castle+Mimarlık+İnşaat+Peyzaj+Torbalı+İzmir",
  rating: 5.0,
  reviewCount: 2,
  hours: "7/24 hizmet",
} as const;

export type NavChild = {
  href: string;
  label: string;
  description: string;
};

export type NavItem = {
  href: string;
  label: string;
  children?: NavChild[];
};

export const navItems: NavItem[] = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  {
    href: "/hizmetler",
    label: "Hizmetler",
    children: [
      {
        href: "/hizmetler/mimarlik",
        label: "Mimarlık",
        description: "Konut ve ticari mimari projeler",
      },
      {
        href: "/hizmetler/insaat",
        label: "İnşaat",
        description: "Anahtar teslim uygulama",
      },
      {
        href: "/hizmetler/peyzaj",
        label: "Peyzaj",
        description: "Dış mekân ve bahçe tasarımı",
      },
    ],
  },
  {
    href: "/projeler",
    label: "Projeler",
    children: [
      {
        href: "/projeler/torbali-villa",
        label: "Torbalı Villa",
        description: "Konut · Peyzaj",
      },
      {
        href: "/projeler/ticari-ofis",
        label: "Ticari Ofis",
        description: "Mimarlık · İnşaat",
      },
      {
        href: "/projeler/site-peyzaj",
        label: "Site Peyzaj",
        description: "Peyzaj düzenleme",
      },
      {
        href: "/projeler/modern-konut",
        label: "Modern Konut",
        description: "Anahtar teslim inşaat",
      },
    ],
  },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export const navLinks = navItems.map(({ href, label }) => ({ href, label }));

export const services = [
  {
    id: "mimarlik",
    title: "Mimarlık",
    description:
      "Konut, villa ve ticari yapılar için fonksiyonel, estetik ve sürdürülebilir mimari projeler.",
    longDescription:
      "Mimari proje sürecimiz; arazi analizi, konsept geliştirme, ruhsat projeleri ve uygulama projelerini kapsar. Her tasarımda ışık, malzeme ve mekân ilişkisini önceliklendiririz.",
    icon: "blueprint" as const,
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80",
    features: [
      "Konut ve villa projeleri",
      "Ticari yapı tasarımı",
      "Ruhsat ve uygulama projeleri",
      "3D görselleştirme",
    ],
  },
  {
    id: "insaat",
    title: "İnşaat",
    description:
      "Anahtar teslim inşaat, güçlendirme ve tadilat süreçlerinde şeffaf planlama ve kaliteli uygulama.",
    longDescription:
      "Saha yönetimi, malzeme tedariki ve iş programı takibi ile projelerinizi planlanan süre ve bütçe içinde teslim ediyoruz. Güçlendirme ve tadilat işlerinde de deneyimli ekibimizle yanınızdayız.",
    icon: "building" as const,
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80",
    features: [
      "Anahtar teslim inşaat",
      "Güçlendirme ve tadilat",
      "Şantiye yönetimi",
      "Kalite kontrol süreçleri",
    ],
  },
  {
    id: "peyzaj",
    title: "Peyzaj",
    description:
      "Bahçe düzenleme, sert zemin, sulama ve dış mekân tasarımında bütüncül peyzaj çözümleri.",
    longDescription:
      "Peyzaj projelerimiz; bitkilendirme, sert zemin uygulamaları, aydınlatma ve sulama sistemlerini bir arada ele alır. Konut, site ve ticari alanlar için sürdürülebilir dış mekân çözümleri sunarız.",
    icon: "tree" as const,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    features: [
      "Bahçe ve site peyzajı",
      "Sert zemin uygulamaları",
      "Sulama sistemleri",
      "Dış mekân aydınlatması",
    ],
  },
] as const;

export const projects = [
  {
    id: "torbali-villa",
    title: "Torbalı Villa Projesi",
    category: "Konut · Peyzaj",
    location: "Torbalı, İzmir",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    description:
      "Modern villa mimarisi ile entegre peyzaj düzenlemesi. Geniş cam cepheler, doğal taş kaplama ve bahçe oturma alanlarıyla bütünleşik bir yaşam alanı oluşturuldu.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    ],
  },
  {
    id: "ticari-ofis",
    title: "Ticari Ofis Yenileme",
    category: "Mimarlık · İnşaat",
    location: "Torbalı, İzmir",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    description:
      "Mevcut ofis yapısının iç mekân reorganizasyonu ve cephe yenilemesi. Açık ofis planı, toplantı alanları ve enerji verimli cephe çözümleri uygulandı.",
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    ],
  },
  {
    id: "site-peyzaj",
    title: "Site Peyzaj Düzenlemesi",
    category: "Peyzaj",
    location: "Torbalı, İzmir",
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    description:
      "Konut sitesi ortak alanlarında peyzaj düzenlemesi, yürüyüş yolları, aydınlatma ve oturma alanları. Düşük bakım gerektiren bitkilendirme tercih edildi.",
    gallery: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
      "https://images.unsplash.com/photo-1589924691995-400dc9637f13?w=1200&q=80",
    ],
  },
  {
    id: "modern-konut",
    title: "Modern Konut İnşaatı",
    category: "İnşaat",
    location: "Torbalı, İzmir",
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
    description:
      "Çok katlı konut yapısında betonarme karkas, dış cephe mantolama ve iç mekân uygulamaları. Anahtar teslim teslimat ile tamamlandı.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
  },
] as const;

export const stats = [
  { value: "15+", label: "Yıllık Deneyim" },
  { value: "120+", label: "Tamamlanan Proje" },
  { value: "5.0", label: "Müşteri Puanı" },
  { value: "7/24", label: "Destek Hattı" },
] as const;

export const testimonials = [
  {
    quote:
      "Villa projemizde hem mimari hem peyzaj tarafında tek elden, titiz ve zamanında bir süreç yaşadık.",
    author: "Ahmet Y.",
    role: "Konut Projesi",
  },
  {
    quote:
      "İletişimleri güçlü, sahadaki ekip disiplinli. Torbalı'da güvenle tavsiye edebileceğimiz bir firma.",
    author: "Selin K.",
    role: "Ticari Yapı",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Keşif & Görüşme",
    description:
      "Sahada keşif yapıyor, ihtiyaçlarınızı dinliyor ve proje kapsamını netleştiriyoruz.",
  },
  {
    step: "02",
    title: "Proje & Planlama",
    description:
      "Mimari proje, metraj ve zaman planını şeffaf biçimde hazırlayıp onayınıza sunuyoruz.",
  },
  {
    step: "03",
    title: "Uygulama",
    description:
      "Deneyimli saha ekibimizle kaliteli malzeme ve disiplinli iş programıyla inşa ediyoruz.",
  },
  {
    step: "04",
    title: "Teslim & Destek",
    description:
      "Projeyi teslim ediyor, sonrasında da 7/24 ulaşılabilir destek sağlıyoruz.",
  },
] as const;

export type Service = (typeof services)[number];
export type Project = (typeof projects)[number];
