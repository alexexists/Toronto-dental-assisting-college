import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { useState } from "react";
import classroomImg from "@/assets/dental-assisting-level-ii-strip.jpg";
import intraOralStripImg from "@/assets/intra-oral-program-strip.jpg";
import { CTAButton } from "./SiteLayout";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = {
  student: intraOralStripImg,
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
  youtubeId?: string;
  videoTitle?: string;
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
  youtubeId,
  videoTitle,
  reversed = false,
  variant = "light",
}: ProgramStripProps) {
  const isDark = variant === "dark";
  const [videoOpen, setVideoOpen] = useState(false);

  const content = (
    <div
      className={`flex min-h-[320px] flex-col justify-center px-8 py-12 sm:px-12 sm:py-16 lg:px-14 ${
        isDark ? "bg-primary text-primary-foreground" : "bg-white"
      }`}
    >
      <h2
        className={`font-display text-xl font-bold tracking-wide leading-snug sm:text-2xl ${
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
        className={`mt-3 text-base font-bold sm:text-lg ${
          isDark ? "text-[color:var(--navy)]" : "text-[color:var(--navy)]"
        }`}
      >
        {subtitle}
      </p>
      <div className={`mt-4 h-px w-12 ${isDark ? "bg-[color:var(--navy)]/30" : "bg-border"}`} />
      <p className={`mt-5 text-base leading-relaxed sm:text-[1.05rem] ${isDark ? "text-white" : "text-foreground/80"}`}>
        {excerpt}
      </p>
      <p className={`mt-4 text-base leading-relaxed sm:text-[1.05rem] ${isDark ? "text-white" : "text-foreground/80"}`}>
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
      <Link to={to} className="group absolute inset-0 block" aria-label={`View ${title}`}>
        <img src={images[image]} alt={imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
      </Link>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {youtubeId ? (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setVideoOpen(true);
            }}
            aria-label={videoTitle ?? "Play program video"}
            className={`pointer-events-auto grid h-16 w-16 place-items-center rounded-full transition-transform duration-300 hover:scale-110 ${
              isDark ? "bg-[color:var(--navy)]/75 text-white" : "bg-white/75 text-[color:var(--navy)]"
            }`}
          >
            <Play className="ml-1 h-7 w-7 fill-current" />
          </button>
        ) : (
          <div
            className={`grid h-16 w-16 place-items-center rounded-full ${
              isDark ? "bg-[color:var(--navy)]/75 text-white" : "bg-white/75 text-[color:var(--navy)]"
            }`}
            aria-hidden
          >
            <Play className="ml-1 h-7 w-7 fill-current" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
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

      {youtubeId && (
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
      )}
    </>
  );
}
