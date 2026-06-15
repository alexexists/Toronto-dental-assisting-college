import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { communityTestimonials, studentTestimonials } from "@/lib/testimonials";
import studentImg from "@/assets/student.jpg";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — Toronto College of Dental Assisting" },
      {
        name: "description",
        content: "Hear from graduates and community partners about their experience at Toronto College of Dental Assisting.",
      },
      { property: "og:title", content: "Student Testimonials — TCDA" },
      { property: "og:description", content: "Stories from graduates and community partners." },
    ],
  }),
  component: Testimonials,
});

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display text-xl font-bold uppercase tracking-wide text-[color:var(--navy)] sm:text-2xl">
        {children}
      </h2>
      <div className="mt-3 h-1 w-14 bg-[color:var(--navy)]" />
    </div>
  );
}

function CommunityTestimonialCard({
  name,
  subtitle,
  quote,
  image,
}: {
  name: string;
  subtitle: string;
  quote: string;
  image: string;
}) {
  return (
    <article className="flex flex-col gap-6 rounded-md bg-primary p-6 text-primary-foreground sm:flex-row sm:items-start sm:p-8">
      <div className="mx-auto shrink-0 sm:mx-0">
        <img
          src={image}
          alt={name}
          className="h-28 w-28 rounded-full border-4 border-white object-cover object-top shadow-md sm:h-32 sm:w-32"
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        <p className="font-serif text-base italic leading-relaxed text-white/95">&ldquo;{quote}&rdquo;</p>
        <p className="mt-5 font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
          &mdash;{name} | {subtitle}
        </p>
      </div>
    </article>
  );
}

function StudentTestimonialCard({
  name,
  subtitle,
  quote,
  image,
  program,
  featuredTitle,
}: {
  name: string;
  subtitle: string;
  quote: string;
  image: string;
  program: string;
  featuredTitle?: string;
}) {
  const featured = Boolean(featuredTitle);

  return (
    <article
      className={`flex flex-col gap-6 rounded-sm p-6 sm:flex-row sm:items-start sm:p-8 ${
        featured
          ? "border-2 border-primary bg-gradient-to-br from-primary/10 via-white to-accent/20 shadow-md ring-1 ring-primary/20"
          : "border border-border bg-white"
      }`}
    >
      <div className="mx-auto shrink-0 sm:mx-0">
        <img
          src={image}
          alt={name}
          className={`h-28 w-28 rounded-full border-4 border-white object-cover object-top sm:h-32 sm:w-32 ${
            featured ? "shadow-lg ring-2 ring-primary/30" : "shadow-sm ring-1 ring-border"
          }`}
          loading="lazy"
        />
      </div>
      <div className="min-w-0 flex-1 text-center sm:text-left">
        {featuredTitle && (
          <div className="mb-4 flex justify-center sm:justify-start">
            <span className="inline-flex items-center rounded-sm bg-primary px-3 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-primary-foreground">
              {featuredTitle}
            </span>
          </div>
        )}
        <p className="font-serif text-base italic leading-relaxed text-foreground/85">&ldquo;{quote}&rdquo;</p>
        <p className="mt-5 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--navy)] sm:text-sm">
          &mdash;{name} | {subtitle}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{program}</p>
      </div>
    </article>
  );
}

function Testimonials() {
  return (
    <SiteLayout>
      <ProgramHero
        image={studentImg}
        imageAlt="Dental assisting students in clinic"
        title="Testimonials"
        subtitle="See what real students have to say about us."
      >
        <Link to="/programs">
          <CTAButton className="shadow-md">Our Programs</CTAButton>
        </Link>
      </ProgramHero>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <SectionHeading>Community Testimonials</SectionHeading>
        <div className="space-y-6">
          {communityTestimonials.map((t) => (
            <CommunityTestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <SectionHeading>Student Testimonials</SectionHeading>
          <div className="space-y-6">
            {studentTestimonials.map((t) => (
              <StudentTestimonialCard key={`${t.name}-${t.subtitle}`} {...t} />
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
