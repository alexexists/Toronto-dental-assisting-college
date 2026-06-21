import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramHowToApplySection,
} from "@/components/site/ProgramDetailSections";
import {
  getIntraOralNavItems,
  intraOralOverviewBenefitItems,
  intraOralSidebarTitle,
} from "@/lib/intra-oral-program-nav";
import intraOralStripImg from "@/assets/intra-oral-program-strip.jpg";

export const Route = createFileRoute("/programs/intra-oral-dental-assisting-apply")({
  head: () => ({
    meta: [
      {
        title: "How to Apply — Intra Oral Dental Assisting — Toronto College of Dental Assisting",
      },
      {
        name: "description",
        content:
          "Apply to the Intra Oral Dental Assisting Level I & II program. Steps, requirements, and application information for Toronto College of Dental Assisting.",
      },
      {
        property: "og:title",
        content: "How to Apply — Intra Oral Dental Assisting — TCDA",
      },
      {
        property: "og:description",
        content: "Application steps and intake information for the Intra Oral Dental Assisting program.",
      },
    ],
  }),
  component: IntraOralApply,
});

function IntraOralApply() {
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
        navItems={getIntraOralNavItems("apply")}
        benefitItems={intraOralOverviewBenefitItems}
      >
        <ProgramHowToApplySection />
      </ProgramDetailLayout>
    </SiteLayout>
  );
}
