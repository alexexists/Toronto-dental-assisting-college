import { absoluteUrl, SITE_URL } from "@/lib/seo";
import { intraOralFaqs, type FaqBlock } from "@/lib/intra-oral-faq";

export const DEFAULT_OG_IMAGE_PATH = "/og-default.jpg";
export const HOME_OG_IMAGE_PATH = "/og-home.jpg";
export const APPLY_OG_IMAGE_PATH = "/og-apply.jpg";

export function ogImageMeta(path = DEFAULT_OG_IMAGE_PATH) {
  const href = absoluteUrl(path);
  return [
    { property: "og:image", content: href },
    { property: "og:image:alt", content: "Toronto College of Dental Assisting" },
    { name: "twitter:image", content: href },
  ] as const;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "CollegeOrUniversity",
    name: "Toronto College of Dental Assisting",
    alternateName: [
      "Toronto College of Dental Hygiene and Auxiliaries Inc.",
      "TCDHA",
      "TCDA",
    ],
    url: SITE_URL,
    logo: absoluteUrl("/TCDHA-favicon.png"),
    image: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
    email: "info@dental-assisting-toronto.ca",
    telephone: ["+1-416-423-3099", "+1-866-923-3099"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "2727 Steeles Ave W",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M3J 3G9",
      addressCountry: "CA",
    },
    sameAs: [
      "https://www.facebook.com/TCDHA",
      "https://www.instagram.com/tocollegedha/",
      "https://x.com/tocollegedha",
    ],
    areaServed: {
      "@type": "City",
      name: "Toronto",
    },
  };
}

function faqAnswerText(blocks: FaqBlock[]): string {
  return blocks
    .map((block) => {
      if (block.type === "p") return block.text;
      if (block.type === "list") return block.items.join(" ");
      return `${block.before}${block.linkText}${block.after ?? ""}`;
    })
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

export function faqPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: intraOralFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(faq.blocks),
      },
    })),
  };
}

export function jsonLdScript(data: Record<string, unknown>) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify(data),
  };
}
