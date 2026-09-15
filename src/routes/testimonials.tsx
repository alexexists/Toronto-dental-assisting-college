import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import { communityTestimonials, studentTestimonials } from "@/lib/testimonials";
import testimonialsHeroImg from "@/assets/testimonials-hero-v2.jpg";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";

const orderedStudentTestimonials = (() => {
  const valedictorianIndex = studentTestimonials.findIndex(
    (t) => t.featuredTitle === "Valedictorian Speech",
  );
  if (valedictorianIndex === -1) return studentTestimonials;

  const ordered = [...studentTestimonials];
  const [valedictorian] = ordered.splice(valedictorianIndex, 1);
  ordered.splice(1, 0, valedictorian);
  return ordered;
})();

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
    <article className="relative overflow-hidden rounded-2xl bg-primary p-7 text-primary-foreground shadow-[0_14px_36px_-18px_rgba(0,0,0,0.28)] ring-1 ring-black/[0.04] sm:p-8">
      <div
        className="pointer-events-none absolute -right-1 -top-3 select-none font-serif text-[5.5rem] leading-none text-white/15"
        aria-hidden
      >
        &ldquo;
      </div>
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
        <div className="mx-auto shrink-0 sm:mx-0">
          <img
            src={image}
            alt={name}
            className="h-28 w-28 rounded-full object-cover object-top shadow-md ring-[3px] ring-white/40 sm:h-32 sm:w-32"
            loading="lazy"
          />
        </div>
        <div className="min-w-0 flex-1 text-center sm:text-left">
          <p className="font-serif text-[0.95rem] italic leading-relaxed text-white/95 sm:text-base">
            {quote}
          </p>
          <div className="mx-auto mt-6 h-px w-16 bg-white/35 sm:mx-0" />
          <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
            {name}
            <span className="mx-1.5 font-normal text-white/70">|</span>
            {subtitle}
          </p>
        </div>
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
        image={testimonialsHeroImg}
        imageAlt="Diverse dental assisting students in clinical training"
        imagePosition="object-[50%_12%] sm:object-[68%_15%]"
        title="Testimonials"
        subtitle="See what real students have to say about us."
      >
        <Link to="/apply">
          <CTAButton className="shadow-md">Apply Now</CTAButton>
        </Link>
      </ProgramHero>

      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 90% 55% at 0% 8%, oklch(0.78 0.09 210 / 0.45) 0%, transparent 55%),
              radial-gradient(ellipse 80% 50% at 100% 35%, oklch(0.25 0.04 240 / 0.22) 0%, transparent 58%),
              radial-gradient(ellipse 95% 60% at 50% 100%, oklch(0.78 0.09 210 / 0.35) 0%, transparent 55%),
              linear-gradient(180deg, oklch(0.97 0.02 210) 0%, oklch(0.94 0.035 210) 45%, oklch(0.96 0.02 220) 100%)
            `,
          }}
          aria-hidden
        />

        <section className="relative mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <SectionHeading>Community Testimonials</SectionHeading>
          <div className="space-y-6">
            {communityTestimonials.map((t) => (
              <CommunityTestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </section>

        <section className="relative border-t border-[color:var(--navy)]/10">
          <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
            <SectionHeading>Student Testimonials</SectionHeading>
            <div className="space-y-6">
              {orderedStudentTestimonials.map((t) => (
                <StudentTestimonialCard key={`${t.name}-${t.subtitle}`} {...t} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <CareerCtaBand mobileImage={programStudentsImg} />
    </SiteLayout>
  );
}
