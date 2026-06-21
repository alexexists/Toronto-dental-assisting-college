import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { CareerCtaBand } from "@/components/site/CareerCtaBand";
import { GraduationCap, Users, Stethoscope, BriefcaseBusiness, ChevronRight } from "lucide-react";
import { homeDentalAssistingTestimonials } from "@/lib/testimonials";
import heroImg from "@/assets/hero-building.jpg";
import studentImg from "@/assets/student.jpg";
import dentalAssistingStudentImg from "@/assets/dental-Assisting-student10.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Toronto College of Dental Assisting — Start Your Dental Career" },
      { name: "description", content: "Train to become a Level I or Level II Dental Assistant in Toronto. Hands-on instruction, modern facility, career support." },
      { property: "og:title", content: "Toronto College of Dental Assisting" },
      { property: "og:description", content: "Your pathway to a dental assisting career in Toronto." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative">
        <img
          src={heroImg}
          alt="Toronto College of Dental Assisting building"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:py-40 text-white">
          <div className="max-w-2xl">
            <div className="text-xs sm:text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Start Your Dental Career Today
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-tight text-white">
              Your Pathway to a<br />Dental Assisting Career
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 max-w-xl">
              The Toronto College of Dental Assisting prepares students for rewarding
              careers as Level I and Level II Dental Assistants through hands-on
              training and expert instruction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programs">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-cta bg-cta px-7 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:shadow-lg"
                >
                  Learn More
                </button>
              </Link>
              <Link to="/apply">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-[#d81b8c] bg-[#d81b8c] px-7 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#a0146d] hover:bg-[#a0146d] hover:shadow-lg"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* Program highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 grid items-center gap-10 lg:grid-cols-2">
        <div>
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">Our Program</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Level I & Level II Dental Assisting</h2>
          <p className="mt-4 text-muted-foreground">
            Our intensive program combines classroom theory with extensive
            chairside practice. Graduate ready to step into a dental office
            and contribute from day one.
          </p>
          <ul className="mt-6 space-y-2 text-sm">
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>Comprehensive curriculum covering theory and clinical skills</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>HARP, radiography, and infection control certification</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>Flexible weekend and weekday schedules</li>
            <li className="flex gap-3"><span className="text-primary font-bold">✓</span>Job placement assistance upon graduation</li>
          </ul>
          <div className="mt-8">
            <Link to="/programs"><CTAButton>Explore the programs</CTAButton></Link>
          </div>
        </div>
        <div className="w-full min-w-0">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <iframe
              src="https://www.youtube.com/embed/x205X2HmFJk"
              title="Dental Assisting Level I & II program video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Choose dental education */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="flex justify-center lg:justify-start">
            <img
              src={dentalAssistingStudentImg}
              alt="Dental assisting students in clinical training"
              loading="lazy"
              className="h-auto w-full max-w-md object-contain lg:max-w-lg"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-[color:var(--navy)] sm:text-3xl">
              Choose a Dental Education for Your Future
            </h2>
            <div className="mt-4 h-px w-14 bg-border" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              The Toronto College of Dental Assisting provides a learning centered environment
              enabling individuals to achieve personal and professional success by offering high
              standards of current comprehensive dental education. These standards provide knowledge
              and skills that reflect current practices and promote ongoing education and research.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Become a Dental Assistant in as little as 8 Weekends",
                "Competitive Tuition with Payment Options",
                "Curriculum meets all National Competencies",
                "Excellent National and International Reputation",
                "Excellent Faculty to Student Ratio",
              ].map((item) => (
                <li key={item} className="flex gap-2 text-sm text-foreground/90">
                  <ChevronRight
                    className="mt-0.5 h-4 w-4 shrink-0 text-cta"
                    strokeWidth={3}
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Link to="/programs">
                <CTAButton className="shadow-md">Our Programs</CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#c5e4ec]">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: GraduationCap, title: "Experienced Instructors", body: "Learn from practicing dental professionals with years of clinical experience." },
            { icon: Stethoscope, title: "Modern Facility", body: "Train in fully-equipped dental operatories with current industry technology." },
            { icon: Users, title: "Hands-on Training", body: "Small class sizes ensure personal attention and ample chairside practice." },
            { icon: BriefcaseBusiness, title: "Career Support", body: "Resume help, interview prep, and placement assistance to launch your career." },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="group bg-white rounded-lg border border-white/60 p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/15"
            >
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary transition-colors duration-300 group-hover:bg-cta group-hover:text-white">
                <Icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <h3 className="mt-4 font-display text-lg text-[color:var(--navy)] transition-colors duration-300 group-hover:text-cta">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Training overview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
        <div className="text-center lg:text-left">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl text-[color:var(--navy)]">
            Comprehensive Dental Assisting Training
          </h2>
          <p className="mt-4 text-muted-foreground lg:max-w-xl">
            Whether you're starting fresh or looking to advance your career,
            our program gives you the practical skills, clinical experience,
            and confidence you need to excel in today's dental industry.
          </p>
          <div className="mt-8">
            <Link to="/programs"><CTAButton>Explore the programs</CTAButton></Link>
          </div>
        </div>
        <div className="w-full min-w-0">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg ring-1 ring-black/5">
            <iframe
              src="https://www.youtube.com/embed/x205X2HmFJk"
              title="Intra Oral Dental Assisting Level I & II program video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">What Our Students Say</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Stories from our graduates</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {homeDentalAssistingTestimonials.map((t) => (
            <article
              key={t.name}
              className="group flex flex-col items-center rounded-lg border border-border bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <img
                src={t.image}
                alt={t.name}
                loading="lazy"
                className="h-24 w-24 rounded-full border-4 border-white object-cover object-top shadow-md ring-2 ring-primary/20 transition-transform duration-300 group-hover:scale-105"
              />
              <p className="mt-5 font-serif text-sm italic leading-relaxed text-foreground/85 line-clamp-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <p className="mt-4 font-display text-xs font-bold uppercase tracking-wide text-[color:var(--navy)]">
                {t.name}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{t.subtitle}</p>
              <p className="mt-1 text-xs font-medium text-primary">{t.program}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/testimonials" className="text-primary font-semibold hover:underline">Read more stories →</Link>
        </div>
      </section>

      <CareerCtaBand />

      <img src={studentImg} alt="" className="hidden" aria-hidden />
    </SiteLayout>
  );
}

const stats = [
  { value: 1500, suffix: "+", label: "Graduates" },
  { value: 15, suffix: "+", label: "Years Teaching" },
  { value: 12, label: "Expert Instructors" },
  { value: 95, suffix: "%", label: "Placement Rate" },
] as const;

function StatsSection() {
  const [active, setActive] = useState(false);

  return (
    <section
      className="bg-[color:var(--navy)] text-white"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <StatValue value={stat.value} suffix={"suffix" in stat ? stat.suffix : undefined} active={active} />
            <div className="mt-1 text-sm uppercase tracking-widest text-white/70">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function StatValue({
  value,
  suffix,
  active,
}: {
  value: number;
  suffix?: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) {
      setCount(0);
      return;
    }

    const duration = 1400;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  const shown = active ? count : value;
  const display = value >= 1000 ? shown.toLocaleString() : String(shown);

  return (
    <div className="font-display text-4xl sm:text-5xl font-bold text-primary tabular-nums">
      {display}
      {suffix}
    </div>
  );
}
