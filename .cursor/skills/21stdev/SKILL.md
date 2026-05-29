---
name: 21stdev
description: >-
  21st.dev Magic MCP ile modern React UI bileşenleri oluşturur, ilham alır ve
  iyileştirir. Kullanıcı /ui, /21, /21st, 21st.dev, Magic MCP veya yeni UI
  bileşeni istediğinde kullan.
---

# 21st.dev Magic MCP

## Önkoşul

Magic MCP sunucusu (`user-Magic MCP`) etkin olmalıdır. API anahtarı yoksa:
https://21st.dev/magic/console

## Araç Seçimi

| Araç | Ne zaman |
|------|----------|
| `21st_magic_component_builder` | Yeni bileşen oluşturma (/ui, button, card, navbar vb.) |
| `21st_magic_component_inspiration` | İlham arama, mevcut tasarımları inceleme |
| `21st_magic_component_refiner` | Mevcut bileşeni geliştirme / animasyon ekleme |
| `logo_search` | Marka logosu arama (format: `{company} logo`) |

## İş Akışı

1. MCP araç şemasını oku, ardından uygun aracı çağır
2. Dönen snippet'i projeye entegre et (import yolları, Tailwind, TypeScript)
3. Proje stiline uyarla; ham snippet'i kör kopyalama
4. `"use client"` gerekiyorsa ekle (Framer Motion, state, event handler)

## Parametre İpuçları

- `searchQuery`: 2–4 kelime (ör. "corporate hero section")
- `absolutePathToProjectDirectory`: proje kök dizini
- `absolutePathToCurrentFile`: hedef dosya yolu
- `standaloneRequestQuery`: kullanıcının istediği bileşeni net tanımla

## Entegrasyon Kuralları

- Next.js App Router: bileşenleri `src/components/` altına koy
- Lucide ikonları tercih et; emoji ikon kullanma
- Tıklanabilir öğelerde `cursor-pointer` ve hover geçişleri (150–300ms)
- `prefers-reduced-motion` desteği koru
