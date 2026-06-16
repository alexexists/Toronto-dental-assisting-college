import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-to-b from-accent/40 to-background border-b">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 text-center">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[color:var(--navy)]">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}

export function CTAButton({ children, className, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode }) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-cta px-7 py-3 text-sm font-bold uppercase tracking-wider text-cta-foreground shadow transition hover:opacity-90",
        className,
      )}
    >
      {children}
    </button>
  );
}
