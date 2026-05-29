"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { MobileNavGroup, NavDropdown } from "@/components/nav-dropdown";
import { company, navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [open, setOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isHome) return;

    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isSolid = !isHome || scrollY > 8 || open;

  return (
    <header
      style={{ viewTransitionName: "site-header" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300",
        isSolid
          ? "border-border bg-background"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex min-h-[var(--header-height)] max-w-7xl items-center justify-between px-6 py-4 lg:px-8 lg:py-5">
        <Link
          href="/"
          className="group flex items-center gap-4 cursor-pointer"
        >
          <div className="flex h-12 w-12 items-center justify-center border border-border bg-card font-display text-xl font-bold tracking-wider transition-colors group-hover:border-accent group-hover:text-accent">
            C
          </div>
          <div>
            <p className="font-display text-base font-semibold tracking-[0.2em] uppercase lg:text-lg">
              {company.shortName}
            </p>
            <p className="hidden text-xs tracking-widest text-muted-foreground sm:block lg:text-sm">
              {company.tagline}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
          {navItems.map((item) => (
            <NavDropdown
              key={item.href}
              item={item}
              isActive={isActive(item.href)}
            />
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={company.phoneHref}
            className="inline-flex items-center gap-2 text-base font-medium transition-colors duration-200 hover:text-accent cursor-pointer"
          >
            <Phone className="h-5 w-5" />
            <span className="hidden xl:inline">{company.phone}</span>
          </a>
          <Link
            href="/iletisim"
            className="inline-flex items-center bg-accent px-6 py-3 text-sm font-semibold tracking-wide text-accent-foreground transition-opacity duration-200 hover:opacity-90 cursor-pointer"
          >
            Teklif Al
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          className="inline-flex h-11 w-11 items-center justify-center border border-border bg-card lg:hidden cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
          >
            <nav className="flex flex-col px-6 py-4">
              {navItems.map((item) => (
                <MobileNavGroup
                  key={item.href}
                  item={item}
                  isActive={isActive(item.href)}
                  onNavigate={() => setOpen(false)}
                />
              ))}
              <a
                href={company.phoneHref}
                className="mt-4 inline-flex items-center gap-2 py-3 text-sm font-semibold text-accent cursor-pointer"
              >
                <Phone className="h-4 w-4" />
                {company.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
