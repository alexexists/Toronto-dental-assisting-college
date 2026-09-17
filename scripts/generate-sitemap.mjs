import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const routesPath = join(root, "src/data/sitemap-routes.json");

const siteUrl = (process.env.VITE_SITE_URL ?? "https://dental-assisting-toronto.ca").replace(
  /\/$/,
  "",
);

/** @type {{ path: string; priority: number; changefreq: string }[]} */
const routes = JSON.parse(readFileSync(routesPath, "utf8"));

const today = new Date().toISOString().slice(0, 10);

function absoluteUrl(path) {
  if (!path || path === "/") return `${siteUrl}/`;
  return `${siteUrl}${path.replace(/\/$/, "")}`;
}

const urlEntries = routes
  .map(
    (route) => `  <url>
    <loc>${absoluteUrl(route.path)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>
`;

const robots = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

# Redirect-only legacy path — do not index
Disallow: /faq

Sitemap: ${siteUrl}/sitemap.xml
`;

mkdirSync(publicDir, { recursive: true });
writeFileSync(join(publicDir, "sitemap.xml"), sitemap, "utf8");
writeFileSync(join(publicDir, "robots.txt"), robots, "utf8");

console.log(`Generated sitemap.xml (${routes.length} URLs) and robots.txt for ${siteUrl}`);
