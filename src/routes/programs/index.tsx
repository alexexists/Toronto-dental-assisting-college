import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { ProgramStrip } from "@/components/site/ProgramStrip";
import { ProgramsPageShell } from "@/components/site/ProgramsPageShell";
import { programs } from "@/lib/programs";
import faqHeroImg from "@/assets/faq-hero.jpg";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Programs — Toronto College of Dental Assisting" },
      {
        name: "description",
        content:
          "Explore our Intra Oral Dental Assisting Level I & II and Dental Assisting Level II programs in Toronto.",
      },
      { property: "og:title", content: "Our Programs — TCDA" },
      {
        property: "og:description",
        content: "Comprehensive dental assisting programs with hands-on training in Toronto.",
      },
    ],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return (
    <SiteLayout>
      <ProgramHero
        image={faqHeroImg}
        imageAlt="Dental assistant in a clinical training environment"
        imagePosition="object-[70%_22%] sm:object-[right_18%]"
        title="Our Dental Programs"
        subtitle="The leading choice for your dental career."
      >
        <Link to="/apply">
          <CTAButton className="border-2 border-cta bg-cta text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:opacity-100 hover:shadow-xl hover:shadow-primary/25">
            Apply Now
          </CTAButton>
        </Link>
      </ProgramHero>
      <ProgramsPageShell>
        {programs.map((program, index) => (
          <ProgramStrip
            key={program.slug}
            title={program.overviewTitle}
            titleLine2={"overviewTitleLine2" in program ? program.overviewTitleLine2 : undefined}
            subtitle={program.overviewSubtitle}
            excerpt={program.overviewExcerpt}
            excerpt2={program.overviewExcerpt2}
            to={program.path}
            image={program.image}
            imageAlt={program.imageAlt}
            reversed={index % 2 === 1}
            variant={program.variant}
          />
        ))}
      </ProgramsPageShell>
    </SiteLayout>
  );
}
