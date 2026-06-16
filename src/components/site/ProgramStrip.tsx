import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import classroomImg from "@/assets/classroom.jpg";
import studentImg from "@/assets/student.jpg";
import { CTAButton } from "./SiteLayout";

const images = {
  student: studentImg,
  classroom: classroomImg,
} as const;

type ProgramStripProps = {
  title: string;
  titleLine2?: string;
  subtitle: string;
  excerpt: string;
  excerpt2: string;
  to: string;
  image: keyof typeof images;
  imageAlt: string;
  reversed?: boolean;
  variant?: "light" | "dark";
};

export function ProgramStrip({
  title,
  titleLine2,
  subtitle,
  excerpt,
  excerpt2,
  to,
  image,
  imageAlt,
  reversed = false,
  variant = "light",
}: ProgramStripProps) {
  const isDark = variant === "dark";

  const content = (
    <div
      className={`flex min-h-[320px] flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:px-14 ${
        isDark ? "bg-primary text-primary-foreground" : "bg-white"
      }`}
    >
      <h2
        className={`font-display text-lg sm:text-xl font-bold tracking-wide leading-snug ${
          isDark ? "text-white" : "text-primary"
        }`}
      >
        {title}
        {titleLine2 && (
          <>
            <br />
            {titleLine2}
          </>
        )}
      </h2>
      <p
        className={`mt-3 text-sm sm:text-base font-bold ${
          isDark ? "text-[color:var(--navy)]" : "text-[color:var(--navy)]"
        }`}
      >
        {subtitle}
      </p>
      <div className={`mt-4 h-px w-12 ${isDark ? "bg-[color:var(--navy)]/30" : "bg-border"}`} />
      <p className={`mt-5 text-sm leading-relaxed ${isDark ? "text-white" : "text-foreground/80"}`}>
        {excerpt}
      </p>
      <p className={`mt-4 text-sm leading-relaxed ${isDark ? "text-white" : "text-foreground/80"}`}>
        {excerpt2}
      </p>
      <div className="mt-8">
        <Link to={to}>
          <CTAButton
            className={
              isDark
                ? "border-2 border-white bg-white text-[color:var(--navy)] shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:text-white hover:opacity-100 hover:shadow-xl hover:shadow-black/20"
                : "border-2 border-cta bg-cta text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:opacity-100 hover:shadow-xl hover:shadow-primary/25"
            }
          >
            Learn More
          </CTAButton>
        </Link>
      </div>
    </div>
  );

  const media = (
    <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
      <img src={images[image]} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`grid h-16 w-16 place-items-center rounded-full ${
            isDark ? "bg-[color:var(--navy)]/75 text-white" : "bg-white/75 text-[color:var(--navy)]"
          }`}
          aria-hidden
        >
          <Play className="h-7 w-7 fill-current ml-1" />
        </div>
      </div>
    </div>
  );

  return (
    <section className="grid lg:grid-cols-2">
      {reversed ? (
        <>
          {media}
          {content}
        </>
      ) : (
        <>
          {content}
          {media}
        </>
      )}
    </section>
  );
}
