import { createFileRoute, Link } from "@tanstack/react-router";
import { Banknote, Clock, GraduationCap, Pencil } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramOverviewSection,
  ProgramCoreDutiesSection,
  ProgramDetailsCard,
  SalaryCallout,
} from "@/components/site/ProgramDetailSections";
import { CTAButton } from "@/components/site/SiteLayout";
import { ProgramCareerCtaBand } from "@/components/site/CareerCtaBand";
import {
  getLevelIiNavItems,
  levelIiOverviewBenefitItems,
  levelIiSidebarTitle,
} from "@/lib/level-ii-program-nav";
import levelIiStripImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import { ogImageMeta } from "@/lib/structured-data";

const programDetailsItems = [
  { label: "8 week program", icon: GraduationCap },
  { label: "Friday 4pm to 8pm, Saturday & Sunday 8am to 5pm", icon: Clock },
  { label: "Monthly payments", icon: Banknote },
  { label: "Classroom and clinical training", icon: Pencil },
];

export const Route = createFileRoute("/programs/dental-assisting-level-ii")({
  head: () => ({
    meta: [
      {
        title: "Dental Assisting Level II in Toronto | 8-Weekend Program | TCDA",
      },
      {
        name: "description",
        content:
          "Become a Dental Assistant Level II in Toronto in 8 weekends. Classroom and clinical training at Toronto College of Dental Assisting with flexible Friday–Sunday scheduling.",
      },
      {
        property: "og:title",
        content: "Dental Assisting Level II in Toronto | TCDA",
      },
      {
        property: "og:description",
        content:
          "Weekend Dental Assisting Level II program with theoretical and practical clinical experience in Toronto.",
      },
      ...ogImageMeta(),
    ],
  }),
  component: DentalAssistingLevelII,
});

function DentalAssistingLevelII() {
  return (
    <SiteLayout>
      <ProgramHero
        image={levelIiStripImg}
        imageAlt="Dental assisting Level II student training with a dentist and patient in clinic"
        imagePosition="object-center"
        title="Dental Assisting Level II"
        subtitle="Become a Dental Assistant Level II in just 8 Weekends"
      >
        <Link to="/apply">
          <CTAButton className="shadow-md">Apply Now</CTAButton>
        </Link>
      </ProgramHero>

      <ProgramDetailLayout
        sidebarTitle={levelIiSidebarTitle}
        navItems={getLevelIiNavItems("overview")}
        benefitItems={levelIiOverviewBenefitItems}
      >
        <ProgramOverviewSection
          title="Program Overview and Benefits"
          introImage={levelIiStripImg}
          introImageAlt="Dental assisting Level II student training with a dentist and patient in clinic"
          youtubeId="x205X2HmFJk"
          videoTitle="Dental Assisting Level II program video"
          introParagraphs={[
            <>
              Our Level II Dental Assisting Program&apos;s curriculum has been approved by the{" "}
              <a
                href="https://ndaeb.ca/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline-offset-2 hover:underline"
              >
                National Dental Assisting Examining Board (NDAEB)
              </a>
              . Graduates of the program are able to write the National Dental Assisting Board Examination.
            </>,
            <>
              This program provides the student with the theoretical and practical experience of a Level II Dental Assistant. All concepts taught in the classroom are demonstrated and practiced in the clinical setting on mannequins, student partners, and clients. Students must demonstrate these clinical skills while adhering to the ODAA Code of Ethics. Ready to start?{" "}
              <Link to="/apply" className="font-medium text-primary underline-offset-2 hover:underline">
                Apply to our Toronto programs
              </Link>{" "}
              or{" "}
              <Link to="/contact" className="font-medium text-primary underline-offset-2 hover:underline">
                contact admissions
              </Link>
              .
            </>,
          ]}
          bodyParagraphs={[
            "The Dental Assisting Level II program is offered as a hybrid 2 month (20 hours per week) program which means theory can be taken from the comfort of your home and clinic and lab components will be completed on site. It is designed to allow the individual to continue to work and learn at the same time. All concepts taught in the classroom are demonstrated and practiced in the clinical setting on mannequins, student partners, and clients. Students must demonstrate these clinical skills while adhering to the ODAA Code of Ethics.",
          ]}
        />
        <div className="mt-10 space-y-6">
          <ProgramDetailsCard
            title="Dental Assistant Level II Details"
            items={programDetailsItems}
            footer="This program is Approved as a vocational program under the Ontario Career Colleges Act, 2005"
            embedded
          />
          <SalaryCallout
            role="a Certified Dental Assistant II"
            rate="$29.52 per hour"
            statsYear="2026"
            statsPrefix="as of"
            embedded
          />
        </div>
        <ProgramCoreDutiesSection />
      </ProgramDetailLayout>

      <ProgramCareerCtaBand />
    </SiteLayout>
  );
}
