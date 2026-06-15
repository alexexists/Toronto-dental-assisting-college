import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "./SiteLayout";

export function ProgramHero({
  title,
  subtitle,
  children,
  image,
  imageAlt,
}: {
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  if (image) {
    return (
      <section className="relative min-h-[320px] sm:min-h-[400px]">
        <img src={image} alt={imageAlt ?? ""} className="absolute inset-0 h-full w-full object-cover object-[center_30%] sm:object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className="relative mx-auto flex min-h-[320px] max-w-7xl items-center px-4 py-16 sm:min-h-[400px] sm:py-20">
          <div className="max-w-xl text-left">
            <h1 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-lg">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-primary/20 to-background border-b">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 text-center">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[color:var(--navy)]">{title}</h1>
        {subtitle && <p className="mt-4 text-lg sm:text-xl text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function ProgramOverview({
  title,
  paragraphs,
  image,
  imageAlt,
  youtubeId,
}: {
  title: string;
  paragraphs: string[];
  image?: string;
  imageAlt?: string;
  youtubeId?: string;
}) {
  if (youtubeId) {
    return (
      <section className="mx-auto max-w-[90rem] px-4 py-14 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12 lg:items-start">
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">{title}</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            {paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
        <div className="w-full min-w-0 lg:sticky lg:top-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title="Program video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
      <div>
        <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">{title}</h2>
        <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </div>
      {image && (
        <div className="w-full min-w-0 lg:sticky lg:top-8">
          <img
            src={image}
            alt={imageAlt ?? ""}
            className="w-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        </div>
      )}
    </section>
  );
}

export function ProgramDetailsCard({
  title,
  items,
  footer,
}: {
  title: string;
  items: string[];
  footer?: string;
}) {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display text-2xl text-[color:var(--navy)]">{title}</h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-sm">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        {footer && <p className="mt-8 text-sm text-muted-foreground italic">{footer}</p>}
      </div>
    </section>
  );
}

export function SalaryCallout({ role, rate }: { role: string; rate: string }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="rounded-lg border bg-card p-6 sm:p-8 text-center">
        <h2 className="font-display text-2xl text-[color:var(--navy)]">Did you know?</h2>
        <p className="mt-3 text-muted-foreground">
          The average salary range for {role} is approximately{" "}
          <span className="font-semibold text-[color:var(--navy)]">{rate}</span> as per the 2024 Statistics
          ODAA.org website
        </p>
        <div className="mt-6">
          <Link to="/apply">
            <CTAButton>Apply Now</CTAButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BenefitsGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-[color:var(--navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display text-2xl text-primary">{title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreDutiesList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="font-display text-2xl text-[color:var(--navy)]">{title}</h2>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-primary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
