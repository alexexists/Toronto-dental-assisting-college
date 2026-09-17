import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  accountabilityQuotes,
  edibStatement,
  landAcknowledgement,
  missionStatement,
  philosophyParagraphs,
  values,
  visionStatement,
} from "@/lib/about";
import { homeDentalAssistingTestimonials } from "@/lib/testimonials";
import heroImg from "@/assets/about-hero-students-clinic-2.png";
import hygienistStripImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import clinicFloorImg from "@/assets/ClinicFloor.jpg";
import faqHeroImg from "@/assets/faq-hero-admin.jpg";
import landAcknowledgementImg from "@/assets/land-acknowledgement.jpg";
import ediInclusionImg from "@/assets/edi-inclusion-circle.png";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";

import { ogImageMeta } from "@/lib/structured-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: "About Toronto College of Dental Assisting | Mission & Values",
      },
      {
        name: "description",
        content:
          "Learn about Toronto College of Dental Assisting — our mission, values, EDI-B commitment, and pathway to Level I and Level II dental assisting careers.",
      },
      {
        property: "og:title",
        content: "About Toronto College of Dental Assisting | TCDA",
      },
      {
        property: "og:description",
        content:
          "Mission, values, and student-focused dental assisting education in Toronto.",
      },
      ...ogImageMeta(),
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <ProgramHero
        image={heroImg}
        imageAlt="Dental assisting students and instructors smiling in the modern Toronto training clinic"
        imagePosition="object-[60%_center] sm:object-[right_center]"
        title="About Toronto College of Dental Assisting"
        subtitle="Your pathway to success — quality training and experienced staff for Level I and Level II careers."
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
        imageAlt="Dental assistant working with a dentist and patient during clinical training"
        title="Our philosophy"
      >
        {philosophyParagraphs.map((p) => (
          <p key={p.slice(0, 40)}>{p}</p>
        ))}
        <p>
          Explore our{" "}
          <Link
            to="/programs/intra-oral-dental-assisting"
            hash="program-content"
            className="font-semibold text-primary hover:underline"
          >
            dental assisting program in Toronto
          </Link>{" "}
          or browse{" "}
          <Link to="/dental-assisting-college-faq" className="font-semibold text-primary hover:underline">
            frequently asked questions
          </Link>
          .
        </p>
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

      <ImageTextRow
        image={ediInclusionImg}
        imageAlt="Students collaborating on an inclusion mural at Toronto College of Dental Assisting"
        title="Equity, Diversity, Inclusion and Belonging (EDI-B) Statement"
      >
        <p>{edibStatement}</p>
        <ProgramsLink />
      </ImageTextRow>

      <section className="bg-[color:var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-white">
                See how our graduates launch dental careers
              </h2>
              <div className="mt-8">
                <Link to="/testimonials">
                  <CTAButton className="px-9 py-4 text-base sm:px-10 sm:py-5 sm:text-lg">
                    Read Alumni Stories
                  </CTAButton>
                </Link>
              </div>
            </div>

            <AlumniStoriesCarousel />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-8 md:grid-cols-2">
        <HighlightCard
          image={clinicFloorImg}
          imageAlt="Clinic floor with dental chairs at Toronto College of Dental Assisting"
          title="Our Facilities"
          body="Consider the many exciting opportunities available in the dental industry. The Toronto College of Dental Hygiene and Auxiliaries Inc. was founded by practicing dental professionals, including a dental hygienist and a dentist, and opened in the winter of 2003."
          to="/facility"
        />
        <HighlightCard
          image={faqHeroImg}
          imageAlt="Admissions staff member in clinical attire ready to help prospective students"
          imageClassName="object-[70%_center]"
          title="Experienced Staff"
          body="The Toronto College of Dental Hygiene and Auxiliaries Inc. believes students, clients, staff, faculty, and the community in which we live and work, need to be treated with respect and that we all need to work collaboratively to achieve high standards of dental education."
          to="/contact"
        />
      </section>

      <CareerCtaBand
        image={programStudentsImg}
        imageClassName="max-w-[400px] sm:max-w-[450px] md:-mt-28 md:max-w-[560px] md:translate-x-4 lg:-mt-36 lg:max-w-[660px] lg:translate-x-6"
      />
    </SiteLayout>
  );
}

function AlumniStoriesCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);

    const intervalId = window.setInterval(() => {
      api.scrollNext();
    }, 6500);

    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
      window.clearInterval(intervalId);
    };
  }, [api]);

  return (
    <Carousel opts={{ loop: true }} setApi={setApi} className="w-full min-w-0">
      <CarouselContent>
        {homeDentalAssistingTestimonials.map((t) => (
          <CarouselItem key={t.name}>
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
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-28 w-28 rounded-full object-cover object-top shadow-md ring-4 ring-primary/20 sm:h-32 sm:w-32"
                  />
                </div>
                <div className="min-w-0 flex-1 text-center sm:text-left">
                  <p className="font-serif text-[0.95rem] italic leading-relaxed text-foreground/80 line-clamp-6 sm:text-base">
                    {t.quote}
                  </p>
                  <div className="mx-auto mt-6 h-px w-16 bg-primary/32 sm:mx-0" />
                  <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--navy)] sm:text-sm">
                    {t.name}
                    <span className="mx-1.5 font-normal text-muted-foreground">|</span>
                    {t.subtitle}
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">{t.program}</p>
                </div>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="mt-4 flex items-center justify-center gap-3">
        <CarouselPrevious className="static h-9 w-9 translate-x-0 translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white hover:text-[color:var(--navy)] disabled:opacity-40" />
        <div className="flex items-center gap-1.5">
          {homeDentalAssistingTestimonials.map((t, index) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial from ${t.name}`}
              aria-current={index === selectedIndex ? "true" : undefined}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex ? "w-5 bg-primary" : "w-2 bg-white/35 hover:bg-white/55"
              }`}
            />
          ))}
        </div>
        <CarouselNext className="static h-9 w-9 translate-x-0 translate-y-0 border-white/30 bg-white/10 text-white hover:bg-white hover:text-[color:var(--navy)] disabled:opacity-40" />
      </div>
    </Carousel>
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
  imageClassName,
  title,
  body,
  to,
}: {
  image: string;
  imageAlt: string;
  imageClassName?: string;
  title: string;
  body: string;
  to: string;
}) {
  return (
    <article className="overflow-hidden rounded-lg border bg-card shadow-sm">
      <img
        src={image}
        alt={imageAlt}
        loading="lazy"
        className={`aspect-[16/10] w-full object-cover ${imageClassName ?? ""}`}
      />
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
