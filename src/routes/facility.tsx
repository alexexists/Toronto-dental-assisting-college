import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import facilityHeroImg from "@/assets/facility-hero.jpg";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";
import operatoryImg from "@/assets/Operatory.jpg";
import simulationLabImg from "@/assets/SimulationLab.jpg";
import sterilizationRoomImg from "@/assets/sterilzation-room.jpg";
import clinicFloorImg from "@/assets/ClinicFloor.jpg";
import lunchRoomImg from "@/assets/LunchRoom.jpg";
import computerLabImg from "@/assets/Computerlab.jpg";
import { ogImageMeta } from "@/lib/structured-data";

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      {
        title: "Dental Assisting Training Facility in Toronto | TCDA Campus Tour",
      },
      {
        name: "description",
        content:
          "Tour the Toronto College of Dental Assisting facility: full operatories, simulation labs, sterilization rooms, and modern classrooms for hands-on training.",
      },
      { property: "og:title", content: "Dental Assisting Training Facility in Toronto | TCDA" },
      {
        property: "og:description",
        content:
          "See the operatories, labs, and classrooms where Toronto dental assisting students train.",
      },
      ...ogImageMeta(),
    ],
  }),
  component: Facility,
});

function Facility() {
  const photos = [
    { src: operatoryImg, alt: "Fully equipped dental operatories used for clinical practice at TCDA" },
    { src: simulationLabImg, alt: "Simulation lab with dental mannequins for pre-clinical practice" },
    { src: sterilizationRoomImg, alt: "Sterilization room for instrument processing and infection control" },
    { src: clinicFloorImg, alt: "Open clinic floor with dental chairs for supervised student training" },
    { src: lunchRoomImg, alt: "Student dining and break area at the Toronto campus" },
    { src: computerLabImg, alt: "Computer lab for hybrid course theory and digital coursework" },
  ];
  return (
    <SiteLayout>
      <ProgramHero
        image={facilityHeroImg}
        imageAlt="Spacious Toronto dental assisting campus with multiple training operatories"
        imagePosition="object-[60%_center] sm:object-[right_center]"
        title="Dental Assisting Training Facility in Toronto"
        subtitle="Everything you need to succeed and grow your dental assisting career."
      >
        <Link to="/programs">
          <CTAButton className="border-2 border-[#1ABC9C] bg-[#1ABC9C] text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:opacity-100 hover:shadow-xl">
            Our Programs
          </CTAButton>
        </Link>
      </ProgramHero>

      <section className="mx-auto max-w-7xl px-4 py-12 grid gap-6 sm:grid-cols-2">
        {photos.map((p) => (
          <figure key={p.alt} className="overflow-hidden rounded-lg border bg-card">
            <img src={p.src} alt={p.alt} width={1024} height={768} loading="lazy" className="w-full aspect-[4/3] object-cover" />
            <figcaption className="px-4 py-3 text-sm text-muted-foreground">{p.alt}</figcaption>
          </figure>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 text-center sm:pb-24">
        <h2 className="font-display text-3xl">Designed for hands-on learning</h2>
        <p className="mt-4 text-muted-foreground">
          Our facility includes full dental operatories, a simulation lab with
          dental mannequins, a dedicated sterilization area, digital radiography
          equipment, and bright, modern classrooms — everything you need to
          practice real-world procedures in a safe, supervised environment. Explore
          our{" "}
          <Link to="/programs/intra-oral-dental-assisting" hash="program-content" className="font-semibold text-primary hover:underline">
            Intra Oral Level I &amp; II
          </Link>{" "}
          or{" "}
          <Link to="/programs/dental-assisting-level-ii" hash="program-content" className="font-semibold text-primary hover:underline">
            Dental Assisting Level II
          </Link>{" "}
          program, or{" "}
          <Link to="/contact" className="font-semibold text-primary hover:underline">
            contact us
          </Link>{" "}
          to book a campus visit.
        </p>
      </section>

      <CareerCtaBand mobileImage={programStudentsImg} />
    </SiteLayout>
  );
}
