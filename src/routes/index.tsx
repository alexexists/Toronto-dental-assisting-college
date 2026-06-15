import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { GraduationCap, Users, Stethoscope, BriefcaseBusiness, Quote } from "lucide-react";
import heroImg from "@/assets/hero-building.jpg";
import classroomImg from "@/assets/classroom.jpg";
import studentImg from "@/assets/student.jpg";

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
              Start Your Dental Career With Us
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-6xl font-bold leading-tight text-white">
              Your Pathway to a<br />Dental Assisting Career
            </h1>
            <p className="mt-6 text-base sm:text-lg text-white/90 max-w-xl">
              Toronto College of Dental Assisting prepares students for rewarding
              careers as Level I and Level II Dental Assistants through hands-on
              training and expert instruction.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/programs"><CTAButton>Learn More</CTAButton></Link>
              <Link to="/apply">
                <button className="inline-flex items-center justify-center rounded-md border-2 border-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-[color:var(--navy)] transition">
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 text-center">
        <div className="text-sm font-semibold uppercase tracking-widest text-primary">Welcome</div>
        <h2 className="mt-2 font-display text-3xl sm:text-4xl">Comprehensive Dental Assisting Training</h2>
        <p className="mx-auto mt-4 max-w-3xl text-muted-foreground">
          Whether you're starting fresh or looking to advance your career,
          our program gives you the practical skills, clinical experience,
          and confidence you need to excel in today's dental industry.
        </p>
      </section>

      {/* Features */}
      <section className="bg-muted">
        <div className="mx-auto max-w-7xl px-4 py-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: GraduationCap, title: "Experienced Instructors", body: "Learn from practicing dental professionals with years of clinical experience." },
            { icon: Stethoscope, title: "Modern Facility", body: "Train in fully-equipped dental operatories with current industry technology." },
            { icon: Users, title: "Hands-on Training", body: "Small class sizes ensure personal attention and ample chairside practice." },
            { icon: BriefcaseBusiness, title: "Career Support", body: "Resume help, interview prep, and placement assistance to launch your career." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="bg-background rounded-lg border p-6 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary/15 text-primary">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-display text-lg">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Program highlight */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20 grid items-center gap-10 lg:grid-cols-2">
        <img src={classroomImg} alt="Students training in dental classroom" width={1280} height={832} loading="lazy" className="rounded-lg shadow-lg" />
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
            <Link to="/programs"><CTAButton>Explore the Program</CTAButton></Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[color:var(--navy)] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { n: "1,500+", l: "Graduates" },
            { n: "15+", l: "Years Teaching" },
            { n: "12", l: "Expert Instructors" },
            { n: "95%", l: "Placement Rate" },
          ].map((s) => (
            <div key={s.l}>
              <div className="font-display text-4xl sm:text-5xl font-bold text-primary">{s.n}</div>
              <div className="mt-1 text-sm uppercase tracking-widest text-white/70">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials preview */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
        <div className="text-center">
          <div className="text-sm font-semibold uppercase tracking-widest text-primary">What Our Students Say</div>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">Stories from our graduates</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            { name: "Sarah M.", role: "Class of 2024", quote: "The instructors genuinely care about your success. I had a job offer two weeks after graduating." },
            { name: "Priya K.", role: "Level II Graduate", quote: "Hands-on practice every single class. I felt completely ready for my first day in a real office." },
            { name: "Daniel R.", role: "Class of 2023", quote: "Flexible schedule let me keep working while I trained. The career support was a huge plus." },
          ].map((t) => (
            <div key={t.name} className="rounded-lg border bg-card p-6">
              <Quote className="h-7 w-7 text-primary" />
              <p className="mt-3 text-sm text-foreground/80 leading-relaxed">"{t.quote}"</p>
              <div className="mt-4 text-sm font-semibold text-[color:var(--navy)]">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/testimonials" className="text-primary font-semibold hover:underline">Read more stories →</Link>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-14 grid items-center gap-6 md:grid-cols-[1fr_auto]">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl text-white">Ready to start your dental career?</h2>
            <p className="mt-2 text-white/90">Applications are now being accepted for the next intake.</p>
          </div>
          <div className="flex gap-3">
            <Link to="/apply"><CTAButton>Apply Now</CTAButton></Link>
            <Link to="/contact">
              <button className="inline-flex items-center justify-center rounded-md border-2 border-white px-7 py-3 text-sm font-bold uppercase tracking-wider text-white hover:bg-white hover:text-primary transition">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      <img src={studentImg} alt="" className="hidden" aria-hidden />
    </SiteLayout>
  );
}
