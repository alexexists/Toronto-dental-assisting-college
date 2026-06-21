import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramLevelIiPrerequisitesSection,
  ProgramInternationalApplicantsPanel,
} from "@/components/site/ProgramDetailSections";
import {
  getLevelIiNavItems,
  levelIiBenefitItems,
  levelIiSidebarTitle,
} from "@/lib/level-ii-program-nav";
import levelIiStripImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import { ProgramCareerCtaBand } from "@/components/site/CareerCtaBand";

export const Route = createFileRoute("/programs/dental-assisting-level-ii-prerequisites")({
  head: () => ({
    meta: [
      { title: "Dental Assisting Level II Prerequisites — Toronto College of Dental Assisting" },
      {
        name: "description",
        content: "Admission prerequisites for the Dental Assisting Level II program in Toronto.",
      },
      { property: "og:title", content: "Dental Assisting Level II Prerequisites — TCDA" },
      {
        property: "og:description",
        content: "Program prerequisites for Canadian and international applicants.",
      },
    ],
  }),
  component: LevelIiPrerequisites,
});

function LevelIiPrerequisites() {
  return (
    <SiteLayout>
      <ProgramHero
        image={levelIiStripImg}
        imageAlt="Dental assistant with dentist and patient in a modern clinical training environment"
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
        navItems={getLevelIiNavItems("prerequisites")}
        benefitItems={levelIiBenefitItems}
      >
        <ProgramLevelIiPrerequisitesSection />
        <ProgramInternationalApplicantsPanel programName="Dental Assisting Level II Program" />
      </ProgramDetailLayout>
      <ProgramCareerCtaBand />
    </SiteLayout>
  );
}
