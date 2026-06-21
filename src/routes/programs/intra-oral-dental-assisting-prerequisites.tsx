import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramPrerequisitesSection,
  ProgramInternationalApplicantsPanel,
} from "@/components/site/ProgramDetailSections";
import {
  getIntraOralNavItems,
  intraOralBenefitItems,
  intraOralSidebarTitle,
} from "@/lib/intra-oral-program-nav";
import intraOralStripImg from "@/assets/intra-oral-program-strip.jpg";

export const Route = createFileRoute("/programs/intra-oral-dental-assisting-prerequisites")({
  head: () => ({
    meta: [
      {
        title: "Intra Oral Dental Assisting Prerequisites — Toronto College of Dental Assisting",
      },
      {
        name: "description",
        content:
          "Admission prerequisites and requirements for the Intra Oral Dental Assisting Level I & II program in Toronto.",
      },
      {
        property: "og:title",
        content: "Intra Oral Dental Assisting Prerequisites — TCDA",
      },
      {
        property: "og:description",
        content: "Program prerequisites for Canadian and international applicants.",
      },
    ],
  }),
  component: IntraOralPrerequisites,
});

function IntraOralPrerequisites() {
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
        navItems={getIntraOralNavItems("prerequisites")}
        benefitItems={intraOralBenefitItems}
      >
        <ProgramPrerequisitesSection />
        <ProgramInternationalApplicantsPanel />
      </ProgramDetailLayout>
    </SiteLayout>
  );
}
