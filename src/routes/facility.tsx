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

export const Route = createFileRoute("/facility")({
  head: () => ({
    meta: [
      { title: "Facility — Toronto College of Dental Assisting" },
      { name: "description", content: "Tour our modern dental assisting training facility in Toronto, featuring full operatories, simulation labs, and sterilization rooms." },
      { property: "og:title", content: "Our Facility — TCDA" },
      { property: "og:description", content: "Modern dental training facility in Toronto." },
      { property: "og:image", content: operatoryImg },
    ],
  }),
  component: Facility,
});

function Facility() {
  const photos = [
    { src: operatoryImg, alt: "Modern dental operatories for clinical practice" },
    { src: simulationLabImg, alt: "Hands-on simulation labs with dental mannequins" },
    { src: sterilizationRoomImg, alt: "Dedicated sterilization and instrument processing" },
    { src: clinicFloorImg, alt: "Modern classrooms for hands-on dental training" },
    { src: lunchRoomImg, alt: "Comfortable breakfast, lunch and dining area" },
    { src: computerLabImg, alt: "Fully equipped computer labs" },
  ];
  return (
    <SiteLayout>
      <ProgramHero
        image={facilityHeroImg}
        imageAlt="Spacious modern indoor dental training facility with multiple operatories"
        imagePosition="object-[60%_center] sm:object-[right_center]"
        title="Our Facilities"
        subtitle="Everything you need to succeed & grow your career."
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
          practice real-world procedures in a safe, supervised environment.
        </p>
      </section>

      <CareerCtaBand mobileImage={programStudentsImg} />
    </SiteLayout>
  );
}
