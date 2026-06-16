import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero } from "@/components/site/SiteLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "How long is the Dental Assisting program?", a: "Our Level II program runs for 8 weekends. We also offer weekday intakes. Specific dates are available on request." },
  { q: "What are the admission requirements?", a: "A high school diploma (or equivalent) is the minimum requirement. We also welcome internationally trained students. Contact us for a personalized assessment." },
  { q: "Do you offer payment plans?", a: "Yes — flexible tuition payment plans are available. Please contact our admissions office to discuss options." },
  { q: "Is the program certified?", a: "Yes. Graduates earn HARP (Healing Arts Radiation Protection) certification, CPR/First Aid, and infection control training that meets industry standards." },
  { q: "Do you help with job placement?", a: "Absolutely. Our career support team provides resume help, interview coaching, and connects graduates with hiring dental practices across the GTA." },
  { q: "Can I work while studying?", a: "Yes. Our weekend schedule is specifically designed for students who work or have other commitments during the week." },
  { q: "What's the class size?", a: "We keep classes small — typically 12–16 students — so every student gets ample chairside practice and personal instructor attention." },
  { q: "Where is the school located?", a: "We're located at 2727 Steeles Ave W, Toronto, ON M3J 3G9 — easy access by transit and car. See our Contact page for directions and hours." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Toronto College of Dental Assisting" },
      { name: "description", content: "Answers to common questions about our Dental Assisting program: duration, admission, certification, and tuition." },
      { property: "og:title", content: "FAQ — TCDA" },
      { property: "og:description", content: "Common questions about our Dental Assisting program." },
    ],
  }),
  component: FAQ,
});

function FAQ() {
  return (
    <SiteLayout>
      <PageHero title="Frequently Asked Questions" subtitle="Everything you need to know before applying." />
      <section className="mx-auto max-w-3xl px-4 py-12">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-base text-[color:var(--navy)]">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteLayout>
  );
}
