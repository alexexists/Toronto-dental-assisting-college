import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  accountabilityQuotes,
  edibStatement,
  landAcknowledgement,
  missionStatement,
  philosophyParagraphs,
  staffMembers,
  values,
  visionStatement,
} from "@/lib/about";
import heroImg from "@/assets/hero-building.jpg";
import studentImg from "@/assets/student.jpg";
import facilityImg from "@/assets/facility1.jpg";
import classroomImg from "@/assets/classroom.jpg";

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
        imageAlt="Toronto College of Dental Assisting campus"
        title="Your Pathway to Success"
        subtitle="Start your dental career today with quality training and experienced staff."
      />

      <nav className="border-b bg-muted/40">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-4 text-sm font-semibold tracking-wider">
          <span className="text-[color:var(--navy)]">About Us</span>
          <a href="#our-values" className="text-primary hover:underline">
            Our Values
          </a>
          <a href="#our-staff" className="text-primary hover:underline">
            Our Staff
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-4 py-14 text-center">
        <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
          We commit ourselves to our students and their futures
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Striving to obtain each individual&apos;s maximum growth potential.
        </p>
      </section>

      <ContentBlock title="Vision Statement">
        <p>{visionStatement}</p>
      </ContentBlock>

      <ContentBlock title="Mission Statement" alt>
        <p>{missionStatement}</p>
      </ContentBlock>

      <ImageTextRow
        image={studentImg}
        imageAlt="Toronto dental college students training"
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
        image={facilityImg}
        imageAlt="Toronto dental college training and facilities"
        title="TCDHA Indigenous Nations Land Acknowledgement"
        reversed
      >
        <p>{landAcknowledgement}</p>
        <ProgramsLink />
      </ImageTextRow>

      <ContentBlock title="Equity, Diversity, Inclusion and Belonging (EDI-B) Statement" alt>
        <p>{edibStatement}</p>
        <div className="mt-8">
          <ProgramsLink />
        </div>
      </ContentBlock>

      <section className="bg-[color:var(--navy)] text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 text-center">
          <h2 className="font-display text-2xl sm:text-3xl">
            Begin your dental assisting career with us
          </h2>
          <p className="mt-4 text-white/85">
            We strive to obtain each individual&apos;s maximum growth potential.
          </p>
          <div className="mt-8">
            <Link to="/apply">
              <CTAButton>Apply Now</CTAButton>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-8 md:grid-cols-2">
        <HighlightCard
          image={facilityImg}
          imageAlt="Toronto College clinic facilities"
          title="Our Facilities"
          body="Consider the many exciting opportunities available in the dental industry. The Toronto College of Dental Hygiene and Auxiliaries Inc. was founded by practicing dental professionals, including a dental hygienist and a dentist, and opened in the winter of 2003."
          to="/facility"
        />
        <HighlightCard
          image={classroomImg}
          imageAlt="Toronto dental college students training"
          title="Experienced Staff"
          body="The Toronto College of Dental Hygiene and Auxiliaries Inc. believes students, clients, staff, faculty, and the community in which we live and work, need to be treated with respect and that we all need to work collaboratively to achieve high standards of dental education."
          to="/about#our-staff"
        />
      </section>

      <section id="our-staff" className="scroll-mt-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <div className="text-center">
            <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
              TCDHA Staff and Faculty
            </h2>
            <p className="mt-2 text-muted-foreground">Meet our team.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {staffMembers.map((member) => (
              <StaffCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
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
}: {
  title: string;
  children: ReactNode;
  alt?: boolean;
}) {
  return (
    <section className={alt ? "bg-muted" : "bg-background"}>
      <div className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="text-center font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
          {title}
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-foreground/90 sm:text-base">
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

function StaffCard({ member }: { member: (typeof staffMembers)[number] }) {
  return (
    <Dialog>
      <div className="rounded-lg border bg-background p-6 text-center shadow-sm">
        <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-primary/15 font-display text-lg font-bold text-primary">
          {member.name
            .split(" ")
            .filter((w) => w.length > 1 && w[0] === w[0].toUpperCase())
            .slice(0, 2)
            .map((w) => w[0])
            .join("")}
        </div>
        <h3 className="mt-4 font-display text-base text-[color:var(--navy)]">{member.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{member.title}</p>
        <DialogTrigger asChild>
          <button
            type="button"
            className="mt-4 text-sm font-semibold text-primary hover:underline"
          >
            Read bio
          </button>
        </DialogTrigger>
      </div>
      <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-[color:var(--navy)]">{member.name}</DialogTitle>
          <p className="text-sm text-primary font-semibold">{member.role}</p>
        </DialogHeader>
        <p className="text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
      </DialogContent>
    </Dialog>
  );
}
