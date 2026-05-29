import { company } from "@/lib/constants";

export function LoaderShell() {
  return (
    <div
      id="loader-shell"
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center overflow-hidden bg-background"
      aria-live="polite"
      aria-busy="true"
      aria-label="Site yükleniyor"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-background/92" />

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center border border-border bg-card font-display text-3xl font-bold tracking-wider text-accent shadow-2xl shadow-black/40">
          C
        </div>

        <p className="mt-8 font-display text-2xl font-semibold tracking-[0.25em] uppercase lg:text-3xl">
          {company.shortName}
        </p>

        <p className="mt-3 text-sm tracking-[0.35em] text-muted-foreground uppercase">
          {company.tagline}
        </p>

        <div className="mt-12 h-px w-48 overflow-hidden bg-border">
          <div className="loader-shell-bar h-full origin-left bg-accent" />
        </div>

        <p className="mt-6 text-xs tracking-[0.3em] text-muted-foreground/60 uppercase">
          Torbalı · İzmir
        </p>
      </div>

      <div className="loader-shell-progress absolute bottom-0 left-0 h-1 w-full origin-left bg-accent" />
    </div>
  );
}
