import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type DetailHeaderProps = {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  meta?: string[];
};

export function DetailHeader({
  backHref,
  backLabel,
  eyebrow,
  title,
  description,
  meta,
}: DetailHeaderProps) {
  return (
    <section className="border-b border-border bg-card pt-28 pb-12 lg:pt-32 lg:pb-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href={backHref}
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          {backLabel}
        </Link>
        <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold tracking-tight lg:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
        {meta && meta.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {meta.map((item) => (
              <span
                key={item}
                className="border border-border bg-elevated px-3 py-1 text-xs tracking-widest uppercase"
              >
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
