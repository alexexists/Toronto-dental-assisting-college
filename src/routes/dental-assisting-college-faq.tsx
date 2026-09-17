import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import faqHeroImg from "@/assets/faq-hero-admin.jpg";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";
import { intraOralFaqs, type FaqBlock } from "@/lib/intra-oral-faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqPageJsonLd, jsonLdScript, ogImageMeta } from "@/lib/structured-data";

export const Route = createFileRoute("/dental-assisting-college-faq")({
  head: () => ({
    meta: [
      {
        title:
          "Dental Assisting College FAQ in Toronto — Intra Oral Level I & II | TCDA",
      },
      {
        name: "description",
        content:
          "FAQ for Toronto College of Dental Assisting: Intra Oral Dental Assisting Level I & II tuition, OSAP, admissions, program length, and how to apply.",
      },
      { property: "og:title", content: "Dental Assisting College FAQ — Toronto | TCDA" },
      {
        property: "og:description",
        content:
          "Get answers about our Toronto Intra Oral Dental Assisting Level I & II program, fees, and admissions.",
      },
      ...ogImageMeta(),
    ],
    scripts: [jsonLdScript(faqPageJsonLd())],
  }),
  component: FAQ,
});

function FaqBlockContent({ block }: { block: FaqBlock }) {
  if (block.type === "p") {
    return <p>{block.text}</p>;
  }

  if (block.type === "p-with-link") {
    return (
      <p>
        {block.before}
        <a
          href={block.href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-primary underline-offset-2 hover:underline"
        >
          {block.linkText}
        </a>
        {block.after}
      </p>
    );
  }

  return (
    <ul className="list-disc space-y-2 pl-5">
      {block.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

function FAQ() {
  return (
    <SiteLayout>
      <ProgramHero
        image={faqHeroImg}
        imageAlt="Toronto College of Dental Assisting staff member ready to answer Intra Oral Dental Assisting FAQ questions"
        imagePosition="object-[70%_18%] sm:object-[right_15%]"
        title="Intra Oral Dental Assisting Level I & II FAQ"
        subtitle="You have questions, we have answers."
      />

      <section className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-[color:var(--navy)] sm:text-2xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-3 h-1 w-14 bg-[color:var(--navy)]" />
        </div>

        <Accordion type="single" collapsible className="w-full">
          {intraOralFaqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left font-display text-base text-[color:var(--navy)]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {faq.blocks.map((block, index) => (
                    <FaqBlockContent key={`${faq.id}-${index}`} block={block} />
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <CareerCtaBand mobileImage={programStudentsImg} />
    </SiteLayout>
  );
}
