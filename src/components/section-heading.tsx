import Link from "next/link";
import { ArrowRight } from "lucide-react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "Tümünü Gör",
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={
        isCenter
          ? "mx-auto max-w-3xl text-center"
          : "flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
      }
    >
      <div className={isCenter ? undefined : "max-w-2xl"}>
        <p className="font-display text-sm tracking-[0.3em] text-accent uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
      </div>
      {href && (
        <Link
          href={href}
          className={
            isCenter
              ? "mt-8 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase text-accent transition-opacity hover:opacity-80 cursor-pointer"
              : "inline-flex shrink-0 items-center gap-2 border border-border px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:border-accent hover:text-accent cursor-pointer"
          }
        >
          {linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
