/**
 * Public site origin used for sitemap, robots, and canonical URLs.
 * Override with VITE_SITE_URL (no trailing slash), e.g.
 *   VITE_SITE_URL=https://dental-assisting-toronto.ca
 */
import sitemapRoutesJson from "@/data/sitemap-routes.json";

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://dental-assisting-toronto.ca"
).replace(/\/$/, "");

export type SitemapRoute = {
  path: string;
  priority: number;
  changefreq: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
};

export const sitemapRoutes = sitemapRoutesJson as SitemapRoute[];

/** Absolute URL for a path. Paths should be slashless except `/`. */
export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return `${SITE_URL}/`;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalized.replace(/\/$/, "")}`;
}

export function canonicalLink(path: string): { rel: "canonical"; href: string } {
  return { rel: "canonical", href: absoluteUrl(path) };
}

/** Normalize pathname for canonical use (no trailing slash except root). */
export function normalizePathname(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  return pathname.replace(/\/$/, "") || "/";
}
