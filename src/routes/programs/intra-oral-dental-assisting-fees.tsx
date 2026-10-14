import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramFeesSection,
  ProgramFundingOptionsSection,
} from "@/components/site/ProgramDetailSections";
import {
  getIntraOralNavItems,
  intraOralOverviewBenefitItems,
  intraOralSidebarTitle,
} from "@/lib/intra-oral-program-nav";
import intraOralStripImg from "@/assets/intra-oral-program-strip.jpg";
import feesImg from "@/assets/dental-assisting-college-fees.png";
export const Route = createFileRoute("/programs/intra-oral-dental-assisting-fees")({
  head: () => ({
    meta: [
      {
        title: "Program Fees — Intra Oral Dental Assisting — Toronto College of Dental Assisting",
      },
      {
        name: "description",
        content:
          "Tuition, additional fees, and funding options for the Intra Oral Dental Assisting Level I & II program, including monthly payment plans, OSAP, and other student assistance.",
      },
      {
        property: "og:title",
        content: "Program Fees — Intra Oral Dental Assisting — TCDA",
      },
      {
        property: "og:description",
        content:
          "Program fees, additional costs, and funding options for Intra Oral Dental Assisting, including monthly payment plans and OSAP.",
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
        imageAlt="Dental assistants practicing chairside skills together in a Toronto training clinic"
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
        <ProgramFundingOptionsSection />
      </ProgramDetailLayout>
    </SiteLayout>
  );
}
