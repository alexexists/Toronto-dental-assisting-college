import { Link } from "@tanstack/react-router";
import dentalHygieneImg from "@/assets/dental-hygiene-small.png";
import { cn } from "@/lib/utils";

const defaultImageClassName =
  "h-auto w-full max-w-[260px] object-contain object-bottom sm:max-w-[300px] md:-mt-20 md:max-w-[340px] lg:-mt-28 lg:max-w-[400px]";

export function CareerCtaBand({
  image = dentalHygieneImg,
  imageClassName,
}: {
  image?: string;
  imageClassName?: string;
}) {
  return (
    <section className="relative overflow-visible bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <div className="py-10 sm:py-14">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              Ready to start your dental career?
            </h2>
            <p className="mt-2 max-w-lg text-white/90">
              Applications are now being accepted for the next intake.
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
          <div className="flex justify-center md:justify-end md:self-end">
            <img
              src={image}
              alt="Toronto College dental assisting professionals"
              loading="lazy"
              className={cn(defaultImageClassName, imageClassName)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
