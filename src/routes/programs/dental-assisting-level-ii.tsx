import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramOverview,
  ProgramDetailsCard,
  SalaryCallout,
  BenefitsGrid,
  CoreDutiesList,
} from "@/components/site/ProgramDetailSections";
import { CTAButton } from "@/components/site/SiteLayout";
import studentImg from "@/assets/student.jpg";

export const Route = createFileRoute("/programs/dental-assisting-level-ii")({
  head: () => ({
    meta: [
      { title: "Dental Assisting Level II — Toronto College of Dental Assisting" },
      {
        name: "description",
        content:
          "Become a Dental Assistant Level II in 8 weekends. NDAEB-approved hybrid program with classroom and clinical training.",
      },
      { property: "og:title", content: "Dental Assisting Level II — TCDA" },
      {
        property: "og:description",
        content: "Level II Dental Assisting program with theoretical and practical clinical experience in Toronto.",
      },
    ],
  }),
  component: DentalAssistingLevelII,
});

function DentalAssistingLevelII() {
  return (
    <SiteLayout>
      <ProgramHero
        image={studentImg}
        imageAlt="Dental assisting level II students in clinic"
        title="Dental Assisting Level II"
        subtitle="Become a Dental Assistant Level II in just 8 Weekends"
      >
        <Link to="/apply">
          <CTAButton className="shadow-md">Apply Now</CTAButton>
        </Link>
      </ProgramHero>

      <ProgramOverview
        title="Program Overview & Benefits"
        youtubeId="x205X2HmFJk"
        paragraphs={[
          "Our Level II Dental Assisting Program's curriculum has been approved by the National Dental Assisting Examining Board (NDAEB). Graduates of the program are able to write the National Dental Assisting Board Examination.",
          "This program provides the student with the theoretical and practical experience of a Level II Dental Assistant. All concepts taught in the classroom are demonstrated and practiced in the clinical setting on mannequins, student partners, and clients. Students must demonstrate these clinical skills while adhering to the ODAA Code of Ethics.",
          "The Dental Assisting Level II program is offered as a hybrid 2 month (20 hours per week) program which means theory can be taken from the comfort of your home and clinic and lab components will be completed on site. It is designed to allow the individual to continue to work and learn at the same time.",
        ]}
      />

      <ProgramDetailsCard
        title="Dental Assistant Level II Details"
        items={[
          "8 week program",
          "Friday 4pm to 8pm, Saturday & Sunday 8am to 5pm",
          "Monthly payments",
          "Classroom and clinical training",
        ]}
        footer="This program is Approved as a vocational program under the Ontario Career Colleges Act, 2005"
      />

      <CoreDutiesList
        title="Programs Core Duties"
        items={[
          "Dental Assisting (Level I)",
          "Dental radiography",
          "Mechanical polishing of the coronal portion of the teeth (not including any instrumentation)",
          "Placement and removal of rubber dam",
          "Taking of preliminary impressions of teeth for study models",
          "Topical application of anti-cariogenic agents",
          "Oral hygiene instruction with an intra-oral component",
          "Dietary counseling relative to dentistry",
          "Application of materials topically to prepare the surface of the teeth for pit and fissure sealants",
          "Application of pit and fissure sealants",
          "Application of topical anesthetics",
          "Application of desensitizing agents",
          "Whitening of the coronal portion of the teeth using materials generally available to the public without prescription",
          "Application of treatment liners (no pulpal involvement)*",
          "Application of matrices and wedges*",
        ]}
      />

      <SalaryCallout role="a Dental Assistant" rate="$27.83/hr" />

      <BenefitsGrid
        title="Benefits & Advantages"
        items={[
          "Become a Dental Assistant Level II in just 8 Weekends",
          "Hybrid Learning",
          "Competitive Rates",
          "New Teaching Equipment",
          "Small Classroom Size",
          "Close to Subway, TTC and Major Auto Routes",
        ]}
      />
    </SiteLayout>
  );
}
