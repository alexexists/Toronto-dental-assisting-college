import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramFeesSection,
  ProgramFinancingOptionsSection,
} from "@/components/site/ProgramDetailSections";
import {
  getIntraOralNavItems,
  intraOralOverviewBenefitItems,
  intraOralSidebarTitle,
} from "@/lib/intra-oral-program-nav";
import intraOralStripImg from "@/assets/intra-oral-program-strip.jpg";
import feesImg from "@/assets/dental-assisting-college-fees.png";
import { ProgramCareerCtaBand } from "@/components/site/CareerCtaBand";

export const Route = createFileRoute("/programs/intra-oral-dental-assisting-fees")({
  head: () => ({
    meta: [
      {
        title: "Program Fees & Financing — Intra Oral Dental Assisting — Toronto College of Dental Assisting",
      },
      {
        name: "description",
        content:
          "Tuition and additional fees for the Intra Oral Dental Assisting Level I & II program at Toronto College of Dental Assisting.",
      },
      {
        property: "og:title",
        content: "Program Fees & Financing — Intra Oral Dental Assisting — TCDA",
      },
      {
        property: "og:description",
        content: "Program fees, additional costs, and tuition information for Intra Oral Dental Assisting.",
      },
    ],
  }),
  component: IntraOralFees,
});

function IntraOralFees() {
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
        navItems={getIntraOralNavItems("fees")}
        benefitItems={intraOralOverviewBenefitItems}
      >
        <ProgramFeesSection feesImage={feesImg} />
        <ProgramFinancingOptionsSection />
      </ProgramDetailLayout>
      <ProgramCareerCtaBand />
    </SiteLayout>
  );
}
