import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { ProgramStrip } from "@/components/site/ProgramStrip";
import { ProgramsPageShell } from "@/components/site/ProgramsPageShell";
import { programs } from "@/lib/programs";
import programsHeroImg from "@/assets/programs-hero.jpg";
import { ogImageMeta } from "@/lib/structured-data";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      {
        title: "Dental Assisting Programs in Toronto | Level I & II | TCDA",
      },
      {
        name: "description",
        content:
          "Compare Intra Oral Dental Assisting Level I & II and Dental Assisting Level II programs in Toronto at Toronto College of Dental Assisting.",
      },
      {
        property: "og:title",
        content: "Dental Assisting Programs in Toronto | TCDA",
      },
      {
        property: "og:description",
        content: "Hands-on Level I and Level II dental assisting training in Toronto.",
      },
      ...ogImageMeta(),
    ],
  }),
  component: ProgramsIndex,
});

function ProgramsIndex() {
  return (
    <SiteLayout>
      <ProgramHero
        image={programsHeroImg}
        imageAlt="Dental assisting students training in a modern Toronto clinical classroom"
        imagePosition="object-[65%_center] sm:object-[right_center]"
        title="Dental Assisting Programs in Toronto"
        subtitle="Intra Oral Level I & II and Dental Assisting Level II pathways"
      >
        <Link to="/apply">
          <CTAButton className="border-2 border-cta bg-cta text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:opacity-100 hover:shadow-xl hover:shadow-primary/25">
            Apply Now
          </CTAButton>
        </Link>
      </ProgramHero>
      <ProgramsPageShell>
        {programs.map((program) => (
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
            youtubeId={"youtubeId" in program ? program.youtubeId : undefined}
            videoTitle={"videoTitle" in program ? program.videoTitle : undefined}
            reversed={"stripReversed" in program ? program.stripReversed : false}
            variant={program.variant}
          />
        ))}
      </ProgramsPageShell>
    </SiteLayout>
  );
}
