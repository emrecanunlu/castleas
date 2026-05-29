import Link from "next/link";
import { company, navItems, services } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-2xl font-semibold tracking-wider">
              {company.shortName}
            </p>
            <p className="mt-2 text-sm tracking-widest text-muted-foreground uppercase">
              {company.tagline}
            </p>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              {company.name} — Torbalı merkezli mimarlık, inşaat ve peyzaj
              firması. Yaşam alanlarınızı güvenle inşa ediyoruz.
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] text-accent uppercase">
              Menü
            </p>
            <ul className="mt-4 space-y-3">
              {navItems.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent cursor-pointer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs tracking-[0.25em] text-accent uppercase">
              Hizmetler
            </p>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/hizmetler/${service.id}`}
                    className="text-sm text-muted-foreground transition-colors duration-200 hover:text-accent cursor-pointer"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a
                href={company.phoneHref}
                className="transition-colors duration-200 hover:text-accent cursor-pointer"
              >
                {company.phone}
              </a>
            </li>
            <li>{company.address}</li>
            <li>{company.hours}</li>
          </ul>
          <div className="flex flex-col gap-4 text-sm text-muted-foreground sm:items-end">
            <p>
              © {new Date().getFullYear()} {company.name}. Tüm hakları
              saklıdır.
            </p>
            <Link
              href={company.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-accent cursor-pointer"
            >
              Yol Tarifi Al
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
