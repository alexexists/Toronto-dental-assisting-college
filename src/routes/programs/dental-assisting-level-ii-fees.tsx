import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramFeesSection,
} from "@/components/site/ProgramDetailSections";
import {
  getLevelIiNavItems,
  levelIiOverviewBenefitItems,
  levelIiSidebarTitle,
} from "@/lib/level-ii-program-nav";
import levelIiStripImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import feesImg from "@/assets/dental-assisting-college-fees.png";

export const Route = createFileRoute("/programs/dental-assisting-level-ii-fees")({
  head: () => ({
    meta: [
      {
        title: "Program Fees & Financing — Dental Assisting Level II — Toronto College of Dental Assisting",
      },
      {
        name: "description",
        content: "Tuition and additional fees for the Dental Assisting Level II program.",
      },
      { property: "og:title", content: "Program Fees & Financing — Dental Assisting Level II — TCDA" },
      {
        property: "og:description",
        content: "Program fees and tuition information for Dental Assisting Level II.",
      },
    ],
  }),
  component: LevelIiFees,
});

function LevelIiFees() {
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
        navItems={getLevelIiNavItems("fees")}
        benefitItems={levelIiOverviewBenefitItems}
      >
        <ProgramFeesSection feesImage={feesImg} />
      </ProgramDetailLayout>
    </SiteLayout>
  );
}
