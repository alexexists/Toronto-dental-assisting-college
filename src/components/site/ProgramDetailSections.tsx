import type { LucideIcon, ReactNode } from "react";
import { useLayoutEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Award,
  Banknote,
  Building2,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  GraduationCap,
  Laptop,
  Lightbulb,
  Pencil,
  Play,
  User,
} from "lucide-react";
import { CTAButton } from "./SiteLayout";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export const PROGRAM_CONTENT_ID = "program-content";

export function scrollToProgramContent(behavior: ScrollBehavior = "smooth") {
  document.getElementById(PROGRAM_CONTENT_ID)?.scrollIntoView({ behavior, block: "start" });
}

export function ProgramHero({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  imagePosition = "object-[center_30%] sm:object-right",
  flipImage = false,
  minHeightClass = "min-h-[320px] sm:min-h-[400px]",
}: {
  title: ReactNode;
  subtitle?: string;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: string;
  flipImage?: boolean;
  minHeightClass?: string;
}) {
  if (image) {
    return (
      <section className={`relative ${minHeightClass}`}>
        <img
          src={image}
          alt={imageAlt ?? ""}
          className={`absolute inset-0 h-full w-full object-cover ${imagePosition} ${flipImage ? "-scale-x-100" : ""}`}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />
        <div className={`relative mx-auto flex max-w-7xl items-center px-4 py-16 sm:py-20 ${minHeightClass}`}>
          <div className="max-w-xl text-left">
            <h1 className="font-display text-2xl font-bold uppercase leading-tight tracking-wide text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-4 text-base text-white/95 drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:text-lg">
                {subtitle}
              </p>
            )}
            {children && <div className="mt-8">{children}</div>}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-primary/20 to-background border-b">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:py-20 text-center">
        <h1 className="font-display text-3xl sm:text-5xl font-bold text-[color:var(--navy)]">{title}</h1>
        {subtitle && <p className="mt-4 text-lg sm:text-xl text-muted-foreground">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
}

export function ProgramDetailLayout({
  sidebarTitle,
  navItems,
  benefitItems,
  children,
}: {
  sidebarTitle: string;
  navItems: { label: string; to?: string; href?: string; hash?: string; active?: boolean }[];
  benefitItems: string[];
  children: ReactNode;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useLayoutEffect(() => {
    if (window.location.hash !== `#${PROGRAM_CONTENT_ID}`) return;

    scrollToProgramContent("smooth");
    const timeoutId = window.setTimeout(() => scrollToProgramContent("smooth"), 0);
    return () => window.clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div id={PROGRAM_CONTENT_ID} className="mx-auto max-w-7xl scroll-mt-0 px-4 py-12 lg:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)] lg:gap-12 lg:items-start">
        <aside className="lg:sticky lg:top-8 space-y-8">
          <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
            <div className="border-b border-border bg-muted/30 px-4 py-3">
              <p className="font-display text-xs font-bold uppercase leading-snug tracking-wide text-[color:var(--navy)]">
                {sidebarTitle}
              </p>
            </div>
            <nav className="divide-y divide-border">
              {navItems.map((item) => {
                const className = `flex items-center gap-2 px-4 py-3 text-sm font-semibold transition-colors ${
                  item.active
                    ? "bg-primary/10 text-primary"
                    : "text-[color:var(--navy)] hover:bg-muted/50 hover:text-primary"
                }`;

                const content = (
                  <>
                    <ChevronRight className="h-4 w-4 shrink-0 opacity-60" strokeWidth={2.5} />
                    <span>{item.label}</span>
                  </>
                );

                if (item.to) {
                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      hash={item.hash}
                      className={className}
                      onClick={item.active ? () => scrollToProgramContent("smooth") : undefined}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <a key={item.label} href={item.href} className={className}>
                    {content}
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="rounded-md border border-border bg-white p-5 shadow-sm">
            <h2 className="font-display text-sm font-bold uppercase tracking-wide text-[color:var(--navy)]">
              Benefits &amp; Advantages
            </h2>
            <ul className="mt-4 space-y-3">
              {benefitItems.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-snug text-foreground/90">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={3.5} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}

export function ProgramOverviewSection({
  title,
  introImage,
  introImageAlt,
  introParagraphs,
  bodyParagraphs,
  youtubeId,
  videoTitle,
}: {
  title: string;
  introImage: string;
  introImageAlt: string;
  introParagraphs: ReactNode[];
  bodyParagraphs: ReactNode[];
  youtubeId: string;
  videoTitle?: string;
}) {
  return (
    <section id="program-overview" className="scroll-mt-24">
      <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">{title}</h2>
      <div className="mt-3 h-1 w-14 bg-primary" />

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:items-start">
        <img
          src={introImage}
          alt={introImageAlt}
          className="w-full rounded-md border border-border object-cover shadow-sm"
          loading="lazy"
        />
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          {introParagraphs.map((p, index) => (
            <p key={typeof p === "string" ? p.slice(0, 40) : index}>{p}</p>
          ))}
        </div>
      </div>

      <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
        {bodyParagraphs.map((p, index) => (
          <p key={typeof p === "string" ? p.slice(0, 40) : index}>{p}</p>
        ))}
      </div>

      <p className="mt-8 text-sm font-semibold text-[color:var(--navy)]">
        Please click below to watch our Program Video!
      </p>
      <div className="mt-4 aspect-video w-full overflow-hidden rounded-md border border-border shadow-sm">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={videoTitle ?? "Program video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full border-0"
        />
      </div>
    </section>
  );
}

export function ProgramPrerequisitesSection() {
  const canadaRequirements = [
    "Ontario Secondary Diploma - OSSD or;",
    "Grade 12 Equivalency - GED Certificate or;",
    "Canadian Public College Diploma or;",
    "Canadian University Degree or;",
    "Be at least 18 years of age and pass a Superintendent approved qualifying test. The Wonderlic Scholastic Exam is accepted at Toronto College of Dental Hygiene and Auxiliaries Inc. Valid ID must be provided to show proof of age.",
  ];

  return (
    <section id="prerequisites" className="scroll-mt-24">
      <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
        Program Prerequisites &amp; Requirements
      </h2>
      <div className="mt-3 h-1 w-14 bg-primary" />

      <div className="mt-8 space-y-8">
        <div>
          <h3 className="font-display text-lg font-bold text-primary">Applicants Educated in Canada</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Applicants educated in Ontario must have completed a high school diploma equivalent to the following
            mandatory admission requirements. Applicants from other provinces in Canada other than Ontario must have
            all the same requirements or equivalent in their respective provinces.
          </p>
          <ul className="mt-5 space-y-3">
            {canadaRequirements.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-[color:var(--navy)]">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={3.5} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-[color:var(--navy)]">Mature Students</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Include applicants who are 18 years of age or over by the first day of classes and lack the academic
            admission requirements. These applicants may be considered on an individual basis. The mandatory
            pre-admission test applies to all applicants applying as a mature student.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-bold text-[color:var(--navy)]">Official Transcripts</h3>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Applicants may send original, stamped/sealed transcripts through mail, courier or may drop them off
            physically at the college. Any digital transcripts must be sent by the institution directly to our
            admission department. Digital transcripts sent by the applicant will not be accepted.
          </p>
        </div>
      </div>
    </section>
  );
}

const intraOralRequestApplicationUrl = "https://www.toronto-college-dental.org/requestapplication.html";
const intraOralDownloadInfoUrl =
  "https://www.toronto-college-dental.org/admissions/TCDHA-IODALNew%20Students.pdf";

function CheckListItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-foreground/90">
      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={3.5} />
      <span>{children}</span>
    </li>
  );
}

export function ProgramHowToApplySection() {
  const indigenousRequirements = [
    "Provide documentation of Indigenous heritage (First Nations, Métis, or Inuit). This could include but is not limited to, Indian or Métis status cards, official Inuit identification, official letters from Aboriginal organizations, or a combination of proof.",
    "Complete the application process and the admissions test.",
    "Complete the prerequisites required to be eligible for admission into the program.",
  ];

  const applicationSteps = [
    "Click Request Application Below",
    "Complete your Edulink Admissions Profile to complete your Application Form",
    "Arrange to provide Official Transcripts to the Admissions Office",
    "Complete your online forms through the EduLink Admissions portal and schedule your Pre-Admission exam",
    "Book your Pre-Admission Exam either through the online scheduler OR call and speak to an Admissions Coordinator",
    "Successfully score 60% or above on the Entrance Test and schedule a time and date for an interview",
    "Successfully complete the Interview",
  ];

  return (
    <section id="how-to-apply" className="scroll-mt-24 space-y-8">
      <div className="flex flex-col gap-4 border-b border-border pb-6 sm:flex-row sm:items-start sm:justify-between">
        <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">
          How to Apply for Intra Oral Dental Assisting Level I &amp; II
        </h2>
        <a
          href={intraOralRequestApplicationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-[color:var(--navy)] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:opacity-90"
        >
          Request Application
        </a>
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-primary">Apply Today</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          We are currently accepting applications for our{" "}
          <strong className="font-semibold text-foreground">
            Intra Oral Dental Assisting Level I and II Program
          </strong>
          . Apply now by clicking on the request application button below.
        </p>
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-primary">Indigenous Applicant Eligibility</h3>
        <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            TCDHA is dedicated to creating an inclusive learning environment that lifts and honours the Indigenous
            worldview and ways of knowing to support First Nations, Metis, and Inuit students who choose to study here.
          </p>
          <p>
            For this reason, and to continue to improve our support of Indigenous students as they strive to reach their
            educational goals and dreams, we invite you to identify if you are of Indigenous ancestry within the meaning
            of the Canadian Constitutional Act of 1982.
          </p>
          <p>
            Self-identifying Indigenous ancestry on your application for admission will allow us to stay connected
            throughout your college career and provide information on topics such as Indigenous student scholarships,
            bursaries and more.
          </p>
          <p className="font-medium text-foreground">Applicants applying must meet the following requirements:</p>
        </div>
        <ul className="mt-5 space-y-3">
          {indigenousRequirements.map((item) => (
            <CheckListItem key={item}>{item}</CheckListItem>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-muted-foreground leading-relaxed">
          TCDHA reserves an additional number of seats per intake to students who fall under the below categories:
        </p>
        <ul className="mt-3 space-y-3 text-sm font-semibold leading-relaxed text-primary">
          <li>2 Seats: Indigenous students (First Nations, Inuit, Métis)</li>
          <li>5 Seats: International students</li>
        </ul>
      </div>

      <div>
        <p className="text-sm font-bold text-[color:var(--navy)]">Next class start:</p>
        <p className="mt-1 font-display text-3xl font-bold text-primary sm:text-4xl">November 2025</p>
      </div>

      <div className="rounded-md border border-border bg-white px-5 py-4">
        <p className="text-sm leading-relaxed text-foreground/90">
          Weekday morning or evening program:{" "}
          <span className="font-bold text-primary">Monday to Thursday</span>
        </p>
        <p className="mt-2 text-sm leading-relaxed text-foreground/90">
          Course length: <span className="font-bold text-primary">41 weeks</span>
        </p>
      </div>

      <div className="rounded-md bg-[#1ABC9C] px-6 py-6 text-white sm:px-8">
        <h4 className="font-display text-lg font-bold leading-snug">
          Call us today to schedule your entrance exam and a tour of our facility.
        </h4>
        <p className="mt-4 text-sm leading-relaxed">
          Tel :{" "}
          <a href="tel:+14164233099" className="font-medium hover:underline">
            (416) 423-3099
          </a>
          <br />
          Toll Free:{" "}
          <a href="tel:+18669233099" className="font-medium hover:underline">
            1 (866) 923-3099
          </a>
          <br />
          <strong className="mt-2 inline-block">Ask to speak to an Admissions Coordinator</strong>
        </p>
      </div>

      <div className="overflow-hidden rounded-md bg-[color:var(--navy)] px-6 py-8 text-white sm:px-8 sm:py-10">
        <div className="border-b border-white/20 pb-4">
          <h3 className="font-display text-lg font-bold text-primary sm:text-xl">
            Steps to enter the Intra Oral Dental Assisting Level I &amp; II
          </h3>
        </div>
        <ul className="mt-6 space-y-4">
          {applicationSteps.map((step) => (
            <li key={step} className="flex gap-3 text-sm leading-relaxed text-white/90 sm:text-base">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={3.5} />
              <span>{step}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-3">
          <a
            href={intraOralDownloadInfoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-md bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[color:var(--navy)] transition hover:bg-white/90"
          >
            Download Information
          </a>
          <a
            href={intraOralRequestApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-md bg-cta px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-cta-foreground transition hover:opacity-90"
          >
            Request Application
          </a>
        </div>
        <p className="mt-6 text-xs italic text-white/60 sm:text-sm">
          *This program is Approved as a vocational program under the Ontario Career Colleges Act, 2005*
        </p>
      </div>
    </section>
  );
}

export function ProgramFeesSection({ feesImage }: { feesImage: string }) {
  const additionalFees = [
    { label: "Textbooks", amount: "$1,600" },
    { label: "Expendable Materials", amount: "$1,460" },
    { label: "Uniforms", amount: "$185" },
    { label: "Insurance", amount: "$250" },
    { label: "Equipment Rental Fees", amount: "$850" },
  ];

  const tuitionInfoParagraphs = [
    "Additional fees can only be made by certified cheque, bank draft and / or money order. Monthly tuition payments will be made by post-dated personal cheques.",
    "Transportation fees are the responsibility of the student.",
    "The cost of uniforms is included in the addtiional fees. This includes: One golf shirt, one set of scrubs, and one lab coat. Black dress pants, black shoes and white running shoes are the responsibility of the student.",
    "Clinical insurance fees are paid to the insurance provider in advance as per their policy and are non-refundable.",
  ];

  return (
    <section id="program-fees" className="scroll-mt-24 space-y-8">
      <div>
        <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">Program Fees &amp; Financing</h2>
        <div className="mt-3 h-1 w-14 bg-primary" />
      </div>

      <div>
        <h3 className="font-display text-lg font-bold text-primary">Program Fees</h3>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          The Toronto College of Dental Assisting fees for the Intra Oral Dental Assisting Level I
          and II Program are as follows:
        </p>
      </div>

      <div>
        <p className="text-sm font-bold text-[color:var(--navy)]">Tuition Fees</p>
        <p className="mt-1 font-display text-4xl font-bold text-primary sm:text-5xl">$18,490</p>
      </div>

      <div className="rounded-md border border-border bg-white px-5 py-4">
        <p className="text-sm font-bold leading-relaxed text-foreground/90">
          Full time program: <span className="text-primary">Monday to Friday</span>
        </p>
        <p className="mt-2 text-sm font-bold leading-relaxed text-foreground/90">
          Course length: <span className="text-primary">10 months</span>
        </p>
      </div>

      <div className="relative pt-10 sm:pt-14">
        <img
          src={feesImage}
          alt="Piggy bank on stack of textbooks representing program fees"
          className="absolute right-0 top-0 z-10 hidden w-[240px] -translate-y-12 sm:block lg:right-4 lg:w-[300px] lg:-translate-y-20"
          loading="lazy"
        />
        <div className="overflow-hidden rounded-md bg-[#1ABC9C] px-6 py-6 text-white sm:px-8 sm:py-8 lg:pr-64">
          <div>
            <h4 className="font-display text-lg font-bold">Additional Fees:</h4>
            <ul className="mt-4 space-y-1.5 text-sm leading-relaxed sm:text-base">
              {additionalFees.map((fee) => (
                <li key={fee.label}>
                  {fee.label}: {fee.amount}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-base font-bold sm:text-lg">Total $22,835</p>
            <p className="mt-3 text-sm leading-relaxed">International Student Fee $5000 (if applicable)</p>
            <p className="mt-4 text-xs italic text-white/80 sm:text-sm">
              *Book fees may be subject to change due to price increases by book publishers.
            </p>
          </div>
          <img
            src={feesImage}
            alt=""
            aria-hidden
            className="mx-auto mt-6 w-full max-w-[220px] sm:hidden"
            loading="lazy"
          />
        </div>
      </div>

      <div className="overflow-hidden rounded-md bg-[color:var(--navy)] px-6 py-8 text-white sm:px-8 sm:py-10">
        <h3 className="font-display text-lg font-bold text-primary sm:text-xl">Tuition Information</h3>
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
          {tuitionInfoParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-8 space-y-3">
          <a
            href={intraOralDownloadInfoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-md bg-white px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-[color:var(--navy)] transition hover:bg-white/90"
          >
            Download Information
          </a>
          <a
            href={intraOralRequestApplicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-md bg-cta px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-cta-foreground transition hover:opacity-90"
          >
            Request Application
          </a>
        </div>
        <p className="mt-6 text-xs italic text-white/60 sm:text-sm">
          Toronto College of Dental Hygiene and Auxiliaries Inc. is registered as a career college under the Ontario
          Career Colleges Act, 2005.
        </p>
      </div>
    </section>
  );
}

export function ProgramInternationalApplicantsPanel() {
  return (
    <section className="relative mt-10 overflow-hidden rounded-md bg-[color:var(--navy)] px-6 py-8 text-white sm:px-8 sm:py-10">
      <div className="relative z-10 max-w-3xl space-y-6">
        <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white sm:text-xl">
          Applicants Educated Outside of Canada
        </h3>
        <div className="space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
          <p>
            Applicants who have graduated from high school and/or a post-secondary institution in a country outside of
            Canada or the USA are required to have their credentials evaluated on a course-by-course basis by the{" "}
            <a
              href="https://www.wes.org/ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              World Education Services
            </a>{" "}
            to determine if their foreign education is equivalent to an OSSD and courses taken are equivalent to the
            above requirements.
          </p>
          <p>
            All applicable fees associated with the World Education Services are the responsibility of the applicant.
            Applicants must arrange to have copies of the evaluation sent to the Toronto College of Dental Hygiene
            and Auxiliaries Inc. from World Education Services.
          </p>
          <p>
            For more information on Foreign Credential Assessment and other assessment agencies, please visit{" "}
            <a
              href="https://www.cicic.ca/415/credential-assessment-services.canada"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline-offset-2 hover:underline"
            >
              www.cicic.ca/415/credential-assessment-services.canada
            </a>
          </p>
        </div>

        <div className="border-t border-white/20 pt-6">
          <h4 className="font-display text-lg font-bold text-primary">English Proficiency</h4>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-white/90 sm:text-base">
            <p>
              Intra Oral Dental Assisting Level I and II Program at the Toronto College of Dental Hygiene and
              Auxiliaries Inc. is taught in English.
            </p>
            <p>
              In order to complete the program it is imperative that the student has a strong grasp of the English
              language, both verbal and written.
            </p>
          </div>
        </div>

        <div className="pt-2">
          <Link to="/apply">
            <CTAButton className="border-2 border-white bg-transparent text-white shadow-none hover:bg-white hover:text-[color:var(--navy)]">
              Apply Now
            </CTAButton>
          </Link>
        </div>

        <p className="text-xs italic text-white/60 sm:text-sm">
          Toronto College of Dental Hygiene and Auxiliaries Inc. is registered as a career college under the Ontario
          Career Colleges Act, 2005.
        </p>
      </div>
    </section>
  );
}

export function ProgramOverview({
  title,
  paragraphs,
  image,
  imageAlt,
  youtubeId,
  videoTitle,
}: {
  title: string;
  paragraphs: ReactNode[];
  image?: string;
  imageAlt?: string;
  youtubeId?: string;
  videoTitle?: string;
}) {
  const [videoOpen, setVideoOpen] = useState(false);

  const textColumn = (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl text-[color:var(--navy)]">{title}</h2>
      <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
        {paragraphs.map((p, index) => (
          <p key={typeof p === "string" ? p.slice(0, 40) : index}>{p}</p>
        ))}
      </div>
    </div>
  );

  const videoDialog = youtubeId ? (
    <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
      <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0 sm:p-0">
        <div className="aspect-video w-full bg-black">
          {videoOpen && (
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
              title={videoTitle ?? "Program video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  ) : null;

  if (youtubeId && !image) {
    return (
      <section className="mx-auto max-w-[90rem] px-4 py-14 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-12 lg:items-start">
        {textColumn}
        <div className="w-full min-w-0 lg:sticky lg:top-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              title={videoTitle ?? "Program video"}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-14 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
        {textColumn}
        {image && (
          <div className="relative w-full min-w-0 lg:sticky lg:top-8">
            <img
              src={image}
              alt={imageAlt ?? ""}
              className="w-full rounded-lg shadow-lg object-cover"
              loading="lazy"
            />
            {youtubeId && (
              <>
                <div className="absolute inset-0 rounded-lg bg-black/15" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setVideoOpen(true)}
                    aria-label={videoTitle ?? "Play program video"}
                    className="grid h-16 w-16 place-items-center rounded-full bg-white/75 text-[color:var(--navy)] transition-transform duration-300 hover:scale-110"
                  >
                    <Play className="ml-1 h-7 w-7 fill-current" />
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </section>
      {videoDialog}
    </>
  );
}

export type ProgramDetailListItem = {
  label: string;
  icon?: LucideIcon;
  indent?: boolean;
};

export function ProgramDetailsCard({
  title,
  items,
  footer,
  embedded = false,
}: {
  title: string;
  items: ProgramDetailListItem[];
  footer?: string;
  embedded?: boolean;
}) {
  return (
    <section
      className={`relative overflow-hidden bg-[#34495e] text-white ${
        embedded ? "rounded-md" : ""
      }`}
    >
      <Lightbulb
        className={`pointer-events-none absolute text-white/[0.06] ${
          embedded
            ? "-bottom-10 -right-4 h-40 w-40"
            : "-bottom-16 -right-8 h-64 w-64 sm:h-80 sm:w-80 lg:-right-4 lg:h-[22rem] lg:w-[22rem]"
        }`}
        strokeWidth={1}
      />
      <div
        className={
          embedded
            ? "relative px-5 py-8 sm:px-6"
            : "relative mx-auto max-w-7xl px-6 py-10 sm:px-8 sm:py-12"
        }
      >
        <div className={`border-b border-white/15 pb-4 ${embedded ? "" : "max-w-2xl"}`}>
          <h2 className="font-display text-xl font-bold text-[#8DDECE] sm:text-2xl">{title}</h2>
        </div>
        <ul className={`mt-6 space-y-2.5 ${embedded ? "" : "max-w-2xl"}`}>
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.label}
                className={`flex gap-3 text-sm leading-relaxed text-white sm:text-base ${
                  item.indent ? "pl-8" : ""
                }`}
              >
                {Icon ? (
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#8DDECE]" strokeWidth={2} />
                ) : (
                  !item.indent && <span className="w-5 shrink-0" />
                )}
                <span>{item.label}</span>
              </li>
            );
          })}
        </ul>
        {footer && (
          <p
            className={`mt-8 text-sm italic text-[#A7BBD0] sm:text-base ${
              embedded ? "" : "max-w-2xl"
            }`}
          >
            {footer}
          </p>
        )}
      </div>
    </section>
  );
}

export function SalaryCallout({ role, rate, embedded = false }: { role: string; rate: string; embedded?: boolean }) {
  return (
    <section className={`bg-[#1ABC9C] ${embedded ? "overflow-hidden rounded-md" : ""}`}>
      <div
        className={
          embedded
            ? "flex flex-col gap-5 px-5 py-6 sm:px-6"
            : "mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 sm:px-8 sm:py-10"
        }
      >
        <div className="min-w-0">
          <h2 className={`font-display font-bold text-white ${embedded ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}>
            Did you know?
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/95 sm:text-base">
            The average salary range for {role} is approximately{" "}
            <span className="font-semibold text-white">{rate}</span> as per the 2024 Statistics{" "}
            <a
              href="https://odaa.org/wage-charts.html"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#00008B] underline-offset-2 hover:underline"
            >
              ODAA.org website
            </a>
          </p>
        </div>
        <div className={embedded ? "" : "shrink-0"}>
          <Link to="/apply">
            <CTAButton
              className={`bg-black/20 shadow-none hover:bg-white hover:text-[#444] ${
                embedded ? "w-full px-6 py-3" : "px-8 py-3.5"
              }`}
            >
              Apply Now
            </CTAButton>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function BenefitsGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="bg-[color:var(--navy)] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="font-display text-2xl text-primary">{title}</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div key={item} className="rounded-lg border border-white/10 bg-white/5 p-5 text-sm leading-relaxed">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CoreDutiesList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14">
      <h2 className="font-display text-2xl text-[color:var(--navy)]">{title}</h2>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-primary">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
