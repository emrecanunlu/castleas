"use client";

import { useCallback, useEffect, useState } from "react";

const MIN_DISPLAY_MS = 2400;
const EXIT_DURATION_MS = 900;

type LoaderProps = {
  children: React.ReactNode;
};

export function Loader({ children }: LoaderProps) {
  const [ready, setReady] = useState(false);
  const handleComplete = useCallback(() => setReady(true), []);

  useEffect(() => {
    if (ready) return;

    document.body.style.overflow = "hidden";

    const shell = document.getElementById("loader-shell");
    if (!shell) {
      handleComplete();
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    const exitTimer = window.setTimeout(() => {
      shell.classList.add(
        prefersReducedMotion ? "loader-shell-exit-fade" : "loader-shell-exit",
      );

      hideTimer = window.setTimeout(
        handleComplete,
        prefersReducedMotion ? 200 : EXIT_DURATION_MS,
      );
    }, MIN_DISPLAY_MS);

    return () => {
      window.clearTimeout(exitTimer);
      if (hideTimer) window.clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, [ready, handleComplete]);

  useEffect(() => {
    if (!ready) return;

    document.documentElement.classList.add("loader-ready");
    document.body.classList.add("loader-ready");
    document.body.style.overflow = "";

    const shell = document.getElementById("loader-shell");
    shell?.setAttribute("aria-hidden", "true");
    shell?.setAttribute("aria-busy", "false");
  }, [ready]);

  return ready ? children : null;
}
