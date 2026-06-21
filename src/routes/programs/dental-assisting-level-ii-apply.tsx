import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import {
  ProgramHero,
  ProgramDetailLayout,
  ProgramLevelIiHowToApplySection,
} from "@/components/site/ProgramDetailSections";
import {
  getLevelIiNavItems,
  levelIiOverviewBenefitItems,
  levelIiSidebarTitle,
} from "@/lib/level-ii-program-nav";
import levelIiStripImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import { ProgramCareerCtaBand } from "@/components/site/CareerCtaBand";

export const Route = createFileRoute("/programs/dental-assisting-level-ii-apply")({
  head: () => ({
    meta: [
      { title: "How to Apply — Dental Assisting Level II — Toronto College of Dental Assisting" },
      {
        name: "description",
        content: "Apply to the Dental Assisting Level II program at Toronto College of Dental Assisting.",
      },
      { property: "og:title", content: "How to Apply — Dental Assisting Level II — TCDA" },
      {
        property: "og:description",
        content: "Application steps and intake information for Dental Assisting Level II.",
      },
    ],
  }),
  component: LevelIiApply,
});

function LevelIiApply() {
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
        navItems={getLevelIiNavItems("apply")}
        benefitItems={levelIiOverviewBenefitItems}
      >
        <ProgramLevelIiHowToApplySection />
      </ProgramDetailLayout>
      <ProgramCareerCtaBand />
    </SiteLayout>
  );
}
