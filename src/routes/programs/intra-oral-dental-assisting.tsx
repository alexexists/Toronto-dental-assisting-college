import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Banknote, Building2, Clock, GraduationCap, Laptop, Pencil, User } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramOverviewSection,
  ProgramDetailsCard,
  SalaryCallout,
} from "@/components/site/ProgramDetailSections";
import { CTAButton } from "@/components/site/SiteLayout";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import {
  getIntraOralNavItems,
  intraOralOverviewBenefitItems,
  intraOralSidebarTitle,
} from "@/lib/intra-oral-program-nav";
import intraOralStripImg from "@/assets/intra-oral-program-strip.jpg";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";

const programDetailsItems = [
  { label: "41 week program", icon: GraduationCap },
  { label: "Monday to Thursday", icon: Clock },
  { label: "Morning class: 9am - 2pm", indent: true },
  { label: "Evening class: 3pm - 8pm", indent: true },
  { label: "Monthly payments", icon: Banknote },
  { label: "Classroom and clinical training", icon: Pencil },
  { label: "Hybrid learning", icon: Laptop },
  { label: "HARP certified", icon: Award },
  { label: "Community placements", icon: User },
  { label: "Financial assistance may be available for those who qualify", icon: Building2 },
];

export const Route = createFileRoute("/programs/intra-oral-dental-assisting")({
  head: () => ({
    meta: [
      { title: "Intra Oral Dental Assisting Level I & II — Toronto College of Dental Assisting" },
      {
        name: "description",
        content:
          "Hybrid 10-month Intra Oral Dental Assisting Level I & II program with classroom, clinical, and field training in Toronto.",
      },
      { property: "og:title", content: "Intra Oral Dental Assisting Level I & II — TCDA" },
      {
        property: "og:description",
        content: "Prepare for your dental career with NDAEB-approved Intra Oral Dental Assisting training.",
      },
    ],
  }),
  component: IntraOralProgram,
});

function IntraOralProgram() {
  return (
    <SiteLayout>
      <ProgramHero
        image={intraOralStripImg}
        imageAlt="Asian and Black dental assistants working together in clinical practice"
        imagePosition="object-center"
        title="Intra Oral Dental Assisting Level I & II"
      >
        <Link to="/apply">
          <CTAButton className="shadow-md">Apply Now</CTAButton>
        </Link>
      </ProgramHero>

      <ProgramDetailLayout
        sidebarTitle={intraOralSidebarTitle}
        navItems={getIntraOralNavItems("overview")}
        benefitItems={intraOralOverviewBenefitItems}
      >
        <ProgramOverviewSection
          title="Program Overview"
          introImage={intraOralStripImg}
          introImageAlt="Asian and Black dental assistants working together in clinical practice"
          youtubeId="u637NGnNLF0"
          videoTitle="Intra Oral Dental Assisting Level I & II program video"
          introParagraphs={[
            "The Intra Oral Dental Assisting Level I and II course will prepare the student to assist the dentist in all dental procedures in a general practice or a specialist setting.",
            "Our state of the art facilities give students plenty of practice in real situations with modern equipment. The program includes field training in a dental office as well as extensive practical experience with seasoned instructors. Training includes taking x-rays and sterilization, as well as an office administration overview to give the individual a well-rounded knowledge of all the functions of a modern dental office.",
          ]}
          bodyParagraphs={[
            "The Intra Oral Dental Assisting Level I and II is offered as a hybrid 10 month (20 hours per week) program which means all theory can be taken from the comfort of your home and all clinic and lab components will be completed on site. It is designed to allow the individual to continue to work and learn at the same time. All concepts taught in the classroom are demonstrated and practiced in the clinical setting on mannequins, student partners, and clients. Students must demonstrate these clinical skills while adhering to the ODAA Code of Ethics.",
            <>
              Our Intra Oral Dental Assisting Level I and II curriculum has been approved by the{" "}
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
          ]}
        />
        <div className="mt-10 space-y-6">
          <ProgramDetailsCard
            title="Intra Oral Dental Assisting Level I and II"
            items={programDetailsItems}
            footer="This program is Approved as a vocational program under the Ontario Career Colleges Act, 2005"
            embedded
          />
          <SalaryCallout role="an Intra Oral Dental Assistant" rate="$27.83/hr" embedded />
        </div>
      </ProgramDetailLayout>

      <CareerCtaBand
        image={programStudentsImg}
        imageClassName="max-w-[420px] sm:max-w-[460px] md:-mt-28 md:max-w-[520px] lg:-mt-36 lg:max-w-[580px]"
      />
    </SiteLayout>
  );
}
