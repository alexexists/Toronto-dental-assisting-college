import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramOverview,
  ProgramDetailsCard,
  SalaryCallout,
  BenefitsGrid,
} from "@/components/site/ProgramDetailSections";
import { CTAButton } from "@/components/site/SiteLayout";
import studentImg from "@/assets/student.jpg";

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
        image={studentImg}
        imageAlt="Intra oral dental assisting students in clinic"
        title="Intra Oral Dental Assisting Level I & II"
      >
        <Link to="/apply">
          <CTAButton className="shadow-md">Apply Now</CTAButton>
        </Link>
      </ProgramHero>

      <ProgramOverview
        title="Program Overview"
        image={studentImg}
        imageAlt="Intra oral dental assisting student"
        paragraphs={[
          "The Intra Oral Dental Assisting Level I and II course will prepare the student to assist the dentist in all dental procedures in a general practice or a specialist setting.",
          "Our state of the art facilities give students plenty of practice in real situations with modern equipment. The program includes field training in a dental office as well as extensive practical experience with knowledgeable instructors. Training includes taking x-rays and sterilization, as well as an office administration overview to give the individual a well-rounded knowledge of all the functions of a modern dental office.",
          "The Intra Oral Dental Assisting Level I and II is offered as a hybrid 10 month (20 hours per week) program which means all theory can be taken from the comfort of your home and all clinic and lab components will be completed on site. It is designed to allow the individual to continue to work and learn at the same time. All concepts taught in the classroom are demonstrated and practiced in the clinical setting on mannequins, student partners, and clients. Students must demonstrate these clinical skills while adhering to the ODAA Code of Ethics.",
          "Our Intra Oral Dental Assisting Level I and II curriculum has been approved by the National Dental Assisting Examining Board (NDAEB). Graduates of the program are able to write the National Dental Assisting Board Examination.",
        ]}
      />

      <ProgramDetailsCard
        title="Intra Oral Dental Assisting Level I and II"
        items={[
          "41 week program",
          "Monday to Thursday",
          "Morning class: 9am - 2pm",
          "Evening class: 3pm - 8pm",
          "Monthly payments",
          "Classroom and clinical training",
          "Hybrid learning",
          "HARP certified",
          "Community placements",
          "Financial assistance may be available for those who qualify",
        ]}
        footer="This program is Approved as a vocational program under the Ontario Career Colleges Act, 2005"
      />

      <SalaryCallout role="an Intra Oral Dental Assistant" rate="$27.83/hr" />

      <BenefitsGrid
        title="Benefits & Advantages"
        items={[
          "Meet the requirements of the Healing Arts Radiation Protection (HARP) Act in 12 weeks!",
          "Become an Intra Oral Dental Assistant in 10 Months",
          "Competitive Rates",
          "New Teaching Equipment",
          "Small Class Sizes",
          "Close to Subway, TTC and Major Auto Routes",
        ]}
      />
    </SiteLayout>
  );
}
