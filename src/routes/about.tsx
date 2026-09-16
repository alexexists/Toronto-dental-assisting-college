import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import {
  accountabilityQuotes,
  edibStatement,
  landAcknowledgement,
  missionStatement,
  philosophyParagraphs,
  values,
  visionStatement,
} from "@/lib/about";
import { studentTestimonials } from "@/lib/testimonials";
import heroImg from "@/assets/facility-hero.jpg";
import hygienistStripImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import clinicFloorImg from "@/assets/ClinicFloor.jpg";
import simulationLabImg from "@/assets/SimulationLab.jpg";
import landAcknowledgementImg from "@/assets/land-acknowledgement.jpg";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";

const featuredAlumniTestimonial = studentTestimonials.find(
  (t) => t.name === "Joanna Marie Jardiel",
)!;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Toronto College of Dental Assisting" },
      {
        name: "description",
        content:
          "Learn about Toronto College of Dental Hygiene and Auxiliaries Inc. — our mission, values, faculty, and commitment to dental education.",
      },
      { property: "og:title", content: "About Us — TCDA" },
      {
        property: "og:description",
        content: "Your pathway to success in dental education.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <ProgramHero
        image={heroImg}
        imageAlt="Spacious modern indoor dental training facility with multiple operatories"
        imagePosition="object-[60%_center] sm:object-[right_center]"
        title="Your Pathway to Success"
        subtitle="Start your dental career today with quality training and experienced staff."
      />

      <nav className="border-b bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 text-sm font-semibold tracking-wider">
          <AboutNavLink targetId="about-us" active>
            About Us
          </AboutNavLink>
          <AboutNavLink targetId="our-values">Our Values</AboutNavLink>
        </div>
      </nav>

      <section
        id="about-us"
        className="scroll-mt-24 bg-gradient-to-br from-[color:var(--navy)] via-[color:var(--navy)] to-[#1a3a4a] text-center"
      >
        <div className="mx-auto max-w-4xl px-4 py-14 sm:py-16">
          <h2 className="font-display text-2xl sm:text-3xl text-white">
            We commit ourselves to our students and their futures
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Striving to obtain each individual&apos;s maximum growth potential.
          </p>
        </div>
      </section>

      <ContentBlock title="Vision Statement" center>
        <p>{visionStatement}</p>
      </ContentBlock>

      <ContentBlock title="Mission Statement" alt center>
        <p>{missionStatement}</p>
      </ContentBlock>

      <ImageTextRow
        image={hygienistStripImg}
        imageAlt="Dental assistant with dentist and patient in a modern clinical training environment"
        title="Our philosophy"
      >
        {philosophyParagraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
        <ProgramsLink />
      </ImageTextRow>

      <section className="bg-muted">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="text-center font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
            Our Accountability
          </h2>
          <ul className="mt-8 space-y-4">
            {accountabilityQuotes.map((quote) => (
              <li
                key={quote}
                className="border-l-4 border-primary pl-4 text-sm leading-relaxed text-foreground/90 italic"
              >
                &ldquo;{quote}&rdquo;
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <ProgramsLink />
          </div>
        </div>
      </section>

      <section id="our-values" className="mx-auto max-w-4xl scroll-mt-24 px-4 py-14">
        <h2 className="text-center font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
          Our Values
        </h2>
        <ul className="mt-8 space-y-3">
          {values.map((value) => (
            <li key={value} className="flex gap-3 text-sm leading-relaxed text-foreground/90">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              {value}
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <ProgramsLink />
        </div>
      </section>

      <ImageTextRow
        image={landAcknowledgementImg}
        imageAlt="Calm shoreline landscape representing the traditional lands acknowledged by TCDHA"
        title="TCDHA Indigenous Nations Land Acknowledgement"
        reversed
      >
        <p>{landAcknowledgement}</p>
        <ProgramsLink />
      </ImageTextRow>

      <ContentBlock title="Equity, Diversity, Inclusion and Belonging (EDI-B) Statement" alt center>
        <p>{edibStatement}</p>
        <div className="mt-8">
          <ProgramsLink />
        </div>
      </ContentBlock>

      <section className="bg-[color:var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                We strive to obtain each individual&apos;s maximum growth potential.
              </h2>
              <div className="mt-8">
                <Link to="/testimonials">
                  <CTAButton className="px-9 py-4 text-base sm:px-10 sm:py-5 sm:text-lg">
                    Read more Alumni experiences
                  </CTAButton>
                </Link>
              </div>
            </div>

            <article className="relative overflow-hidden rounded-2xl bg-white p-7 text-left shadow-[0_12px_32px_-18px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.03] sm:p-8">
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 95% 85% at 100% 100%, oklch(0.25 0.04 240 / 0.32) 0%, oklch(0.78 0.09 210 / 0.14) 28%, transparent 62%)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-2 -top-4 select-none font-serif text-[7rem] leading-none text-primary/16"
                aria-hidden
              >
                &ldquo;
              </div>
              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
                <div className="mx-auto shrink-0 sm:mx-0">
                  <img
                    src={featuredAlumniTestimonial.image}
                    alt={featuredAlumniTestimonial.name}
                    loading="lazy"
                    className="h-28 w-28 rounded-full object-cover object-top shadow-md ring-4 ring-primary/20 sm:h-32 sm:w-32"
                  />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <p className="font-serif text-[0.95rem] italic leading-relaxed text-foreground/80 sm:text-base">
                    {featuredAlumniTestimonial.quote}
                  </p>
                  <div className="mx-auto mt-6 h-px w-16 bg-primary/32 sm:mx-0" />
                  <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--navy)] sm:text-sm">
                    {featuredAlumniTestimonial.name}
                    <span className="mx-1.5 font-normal text-muted-foreground">|</span>
                    {featuredAlumniTestimonial.subtitle}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    {featuredAlumniTestimonial.program}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-8 md:grid-cols-2">
        <HighlightCard
          image={clinicFloorImg}
          imageAlt="Toronto College clinic facilities"
          title="Our Facilities"
          body="Consider the many exciting opportunities available in the dental industry. The Toronto College of Dental Hygiene and Auxiliaries Inc. was founded by practicing dental professionals, including a dental hygienist and a dentist, and opened in the winter of 2003."
          to="/facility"
        />
        <HighlightCard
          image={simulationLabImg}
          imageAlt="Dental simulation lab with instructors and students"
          title="Experienced Staff"
          body="The Toronto College of Dental Hygiene and Auxiliaries Inc. believes students, clients, staff, faculty, and the community in which we live and work, need to be treated with respect and that we all need to work collaboratively to achieve high standards of dental education."
          to="/about"
        />
      </section>

      <CareerCtaBand
        image={programStudentsImg}
        imageClassName="max-w-[260px] sm:max-w-[300px] md:max-w-[340px] md:translate-x-5 lg:max-w-[400px] lg:translate-x-7"
      />
    </SiteLayout>
  );
}

function AboutNavLink({
  children,
  targetId,
  active,
}: {
  children: ReactNode;
  targetId: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className={
        active
          ? "text-[color:var(--navy)] hover:underline"
          : "text-primary hover:underline"
      }
    >
      {children}
    </button>
  );
}

function ProgramsLink() {
  return (
    <Link to="/programs" className="inline-block mt-6 text-sm font-semibold text-primary hover:underline">
      Our Programs →
    </Link>
  );
}

function ContentBlock({
  title,
  children,
  alt,
  center,
}: {
  title: string;
  children: ReactNode;
  alt?: boolean;
  center?: boolean;
}) {
  return (
    <section className={alt ? "bg-muted" : "bg-background"}>
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-center font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
          {title}
        </h2>
        <div
          className={`mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base ${
            center ? "text-center" : ""
          }`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}

function ImageTextRow({
  image,
  imageAlt,
  title,
  children,
  reversed,
}: {
  image: string;
  imageAlt: string;
  title: string;
  children: ReactNode;
  reversed?: boolean;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <div className={`grid items-center gap-10 lg:grid-cols-2 ${reversed ? "lg:[&>*:first-child]:order-2" : ""}`}>
        <img
          src={image}
          alt={imageAlt}
          loading="lazy"
          className="w-full rounded-lg shadow-lg aspect-[4/3] object-cover"
        />
        <div>
          <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">{title}</h2>
          <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  image,
  imageAlt,
  title,
  body,
  to,
}: {
  image: string;
  imageAlt: string;
  title: string;
  body: string;
  to: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <img src={image} alt={imageAlt} loading="lazy" className="aspect-[16/10] w-full object-cover" />
      <div className="p-6">
        <h3 className="font-display text-xl text-[color:var(--navy)]">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
        <Link to={to} className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
          Learn More →
        </Link>
      </div>
    </article>
  );
}
