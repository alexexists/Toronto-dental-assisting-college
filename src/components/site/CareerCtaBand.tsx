import { Link } from "@tanstack/react-router";
import dentalHygieneImg from "@/assets/dental-hygiene-small.png";
import programStudentsImg from "@/assets/dental-assisting-program-students.png";
import { cn } from "@/lib/utils";

const defaultImageClassName =
  "h-auto w-full max-w-[260px] object-contain object-bottom sm:max-w-[300px] md:-mt-20 md:max-w-[340px] lg:-mt-28 lg:max-w-[400px]";

const programImageClassName =
  "max-w-[410px] sm:max-w-[450px] md:-mt-24 md:max-w-[540px] lg:-mt-28 lg:max-w-[590px]";

export function CareerCtaBand({
  image = dentalHygieneImg,
  mobileImage,
  imageClassName,
}: {
  image?: string;
  mobileImage?: string;
  imageClassName?: string;
}) {
  return (
    <section className="relative overflow-visible bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-stretch">
          <div className="flex flex-col justify-center py-10 text-left sm:py-14 md:self-center">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Ready to start your dental career?
            </h2>
            <p className="mt-2 max-w-2xl text-white/90">
              Applications are now being accepted for the next intake. Reach out
              <br />
              to our Admissions Team for personalized guidance and support.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/apply">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-cta bg-cta px-7 py-3 text-sm font-bold uppercase tracking-wider text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:shadow-lg"
                >
                  Apply Now
                </button>
              </Link>
              <Link to="/contact">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border-2 border-white bg-white px-7 py-3 text-sm font-bold uppercase tracking-wider !text-black shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[color:var(--navy)] hover:bg-[color:var(--navy)] hover:!text-white hover:shadow-lg"
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
          <div
            className={cn(
              "relative flex justify-center self-end md:justify-end md:self-stretch",
              // Keep a real column width so absolutely positioned images don't collapse to 0
              image === programStudentsImg
                ? "md:w-[min(100%,610px)] lg:w-[min(100%,670px)]"
                : "md:w-[min(100%,400px)] lg:w-[min(100%,400px)]",
            )}
          >
            {mobileImage ? (
              <>
                <img
                  src={mobileImage}
                  alt="Toronto College of Dental Assisting students and graduates in clinical attire"
                  loading="lazy"
                  className={cn(
                    defaultImageClassName,
                    "md:hidden !max-w-[650px] !w-[650px] sm:!max-w-[650px]",
                    imageClassName,
                  )}
                />
                <img
                  src={image}
                  alt="Toronto College of Dental Assisting students and graduates in clinical attire"
                  loading="lazy"
                  className={cn(
                    defaultImageClassName,
                    "hidden md:absolute md:bottom-0 md:right-0 md:block md:!mt-0 md:!w-auto md:max-w-full",
                    imageClassName,
                  )}
                />
              </>
            ) : (
              <img
                src={image}
                alt="Toronto College of Dental Assisting students and graduates in clinical attire"
                loading="lazy"
                className={cn(
                  defaultImageClassName,
                  "md:absolute md:bottom-0 md:right-0 md:!mt-0 md:!w-auto md:max-w-full",
                  imageClassName,
                )}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgramCareerCtaBand() {
  return <CareerCtaBand image={programStudentsImg} imageClassName={programImageClassName} />;
}
