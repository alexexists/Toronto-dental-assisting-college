import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { ProgramStrip } from "@/components/site/ProgramStrip";
import { ProgramsPageShell } from "@/components/site/ProgramsPageShell";
import { programs } from "@/lib/programs";
import studentImg from "@/assets/student.jpg";

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
        image={studentImg}
        imageAlt="Dental assisting students in clinic"
        title="Our Dental Programs"
        subtitle="The leading choice for your dental career."
      />
      <ProgramsPageShell>
        {programs.map((program, index) => (
          <ProgramStrip
            key={program.slug}
            title={program.overviewTitle}
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
