"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import type { NavItem } from "@/lib/constants";
import { cn } from "@/lib/utils";

const CLOSE_DELAY_MS = 220;

type NavDropdownProps = {
  item: NavItem;
  isActive: boolean;
};

export function NavDropdown({ item, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openMenu = useCallback(() => {
    cancelClose();
    setOpen(true);
  }, [cancelClose]);

  const closeMenu = useCallback(
    (immediate = false) => {
      cancelClose();
      if (immediate) {
        setOpen(false);
        return;
      }
      closeTimerRef.current = setTimeout(() => {
        setOpen(false);
        closeTimerRef.current = null;
      }, CLOSE_DELAY_MS);
    },
    [cancelClose],
  );

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (ref.current?.contains(event.target as Node)) return;
      closeMenu(true);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu(true);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, closeMenu]);

  useEffect(() => () => cancelClose(), [cancelClose]);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        className={cn(
          "text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer",
          isActive ? "text-accent" : "text-foreground/80 hover:text-accent",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={() => closeMenu()}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? closeMenu(true) : openMenu())}
        className={cn(
          "inline-flex items-center gap-1.5 text-[15px] font-medium tracking-wide transition-colors duration-200 cursor-pointer",
          isActive || open
            ? "text-accent"
            : "text-foreground/80 hover:text-accent",
        )}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15 }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2"
            onMouseEnter={openMenu}
            onMouseLeave={() => closeMenu()}
          >
            <div className="w-72 border border-border bg-card p-2 shadow-2xl shadow-black/40">
              <Link
                href={item.href}
                onClick={() => closeMenu(true)}
                className="block border-b border-border px-4 py-3 text-xs font-semibold tracking-widest text-accent uppercase transition-colors hover:bg-elevated cursor-pointer"
              >
                Tüm {item.label.toLowerCase()}
              </Link>
              <ul className="py-1">
                {item.children.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={() => closeMenu(true)}
                      className="block px-4 py-3 transition-colors duration-200 hover:bg-elevated cursor-pointer"
                    >
                      <span className="block text-sm font-medium">
                        {child.label}
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {child.description}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

type MobileNavGroupProps = {
  item: NavItem;
  isActive: boolean;
  onNavigate: () => void;
};

export function MobileNavGroup({
  item,
  isActive,
  onNavigate,
}: MobileNavGroupProps) {
  const [expanded, setExpanded] = useState(isActive);

  if (!item.children?.length) {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className={cn(
          "py-3 text-sm font-medium tracking-wide transition-colors cursor-pointer",
          isActive ? "text-accent" : "hover:text-accent",
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-border/60 last:border-0">
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-center justify-between py-3 text-sm font-medium tracking-wide cursor-pointer"
      >
        <span className={isActive ? "text-accent" : undefined}>{item.label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            expanded && "rotate-180",
          )}
        />
      </button>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden pb-2 pl-3"
          >
            <Link
              href={item.href}
              onClick={onNavigate}
              className="block py-2 text-sm text-muted-foreground hover:text-accent cursor-pointer"
            >
              Tüm {item.label.toLowerCase()}
            </Link>
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={onNavigate}
                className="block py-2 text-sm text-muted-foreground hover:text-accent cursor-pointer"
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
