import { useEffect, useRef, useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import applyHeroImg from "@/assets/apply-hero-graduates.jpg";
import { programs } from "@/lib/programs";
import { APPLY_OG_IMAGE_PATH, ogImageMeta } from "@/lib/structured-data";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      {
        title: "Apply to Dental Assisting Programs in Toronto | TCDA",
      },
      {
        name: "description",
        content:
          "Apply to Toronto College of Dental Assisting for Intra Oral Level I & II or Dental Assisting Level II. Start your dental assisting career in Toronto.",
      },
      { property: "og:title", content: "Apply to Dental Assisting Programs in Toronto | TCDA" },
      {
        property: "og:description",
        content: "Submit your application for Dental Assisting Level I & II training in Toronto.",
      },
      ...ogImageMeta(APPLY_OG_IMAGE_PATH),
    ],
  }),
  component: Apply,
});

const inputClass =
  "mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm shadow-sm transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2";

function Apply() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const alertRef = useRef<HTMLParagraphElement>(null);
  const pendingScroll = useRef(false);

  useEffect(() => {
    if (!pendingScroll.current || !alertRef.current) return;
    pendingScroll.current = false;
    alertRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [errors]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const next: Record<string, string> = {};
    const fields = form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
      "input, select, textarea",
    );

    fields.forEach((field) => {
      if (!field.name || field.checkValidity()) return;
      next[field.name] = field.validity.valueMissing
        ? "This field needs to be filled."
        : "Please enter a valid value.";
    });

    setErrors(next);
    if (Object.keys(next).length > 0) pendingScroll.current = true;
  }

  function clearError(name: string) {
    setErrors((current) => {
      if (!current[name]) return current;
      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  const hasErrors = Object.keys(errors).length > 0;

  return (
    <SiteLayout>
      <ProgramHero
        image={applyHeroImg}
        imageAlt="Dental assisting graduates celebrating after completing Toronto College of Dental Assisting programs"
        imagePosition="object-[55%_32%] sm:object-[62%_24%]"
        title="Apply to Dental Assisting in Toronto"
        subtitle="Ready to start your dental career? Request your application to apply today!"
      />

      <section className="bg-muted px-4 py-12">
        <div className="mx-auto max-w-3xl">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="w-full overflow-hidden rounded-xl border border-primary/25 bg-white shadow-lg shadow-primary/10 ring-1 ring-black/[0.04]"
        >
          <div className="border-b border-primary/20 bg-gradient-to-br from-primary/25 via-[#c5e4ec]/60 to-primary/10 px-6 py-5 sm:px-8 sm:py-6">
            <h2 className="font-display text-2xl text-[color:var(--navy)]">Request Application</h2>
            <p className="mt-1 text-sm text-[color:var(--navy)]/75">
              Complete the form below and our admissions team will follow up with you.
            </p>
          </div>

          <div className="space-y-6 p-6 sm:p-8">
          {hasErrors && (
            <p
              ref={alertRef}
              role="alert"
              className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            >
              All fields need to be filled.
            </p>
          )}
          <div className="space-y-4">
            <h3 className="font-display text-lg text-[color:var(--navy)]">Personal Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field name="firstName" label="First name" error={errors.firstName} onClear={clearError} />
              <Field name="lastName" label="Last name" error={errors.lastName} onClear={clearError} />
              <Field name="email" label="Email" type="email" error={errors.email} onClear={clearError} />
              <Field name="phone" label="Phone" type="tel" error={errors.phone} onClear={clearError} />
              <Field name="dob" label="Date of birth" type="date" error={errors.dob} onClear={clearError} />
              <Field name="city" label="City" error={errors.city} onClear={clearError} />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-[color:var(--navy)]">Program Interest</h3>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--navy)]">Program *</label>
              <select
                required
                name="program"
                className={fieldClass(Boolean(errors.program))}
                defaultValue=""
                onChange={() => clearError("program")}
              >
                <option value="" disabled>
                  Select a program
                </option>
                {programs.map((program) => (
                  <option key={program.slug} value={program.navLabel}>
                    {program.navLabel}
                  </option>
                ))}
                <option>Both</option>
              </select>
              {errors.program && <FieldError>{errors.program}</FieldError>}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-[color:var(--navy)]">Education Background</h3>
            <Field
              name="education"
              label="Highest level of education completed"
              error={errors.education}
              onClear={clearError}
            />
            <div>
              <label className="block text-sm font-semibold text-[color:var(--navy)]">Tell us about yourself *</label>
              <textarea
                required
                name="about"
                rows={5}
                className={fieldClass(Boolean(errors.about))}
                placeholder="Why do you want to become a dental assistant?"
                onChange={() => clearError("about")}
              />
              {errors.about && <FieldError>{errors.about}</FieldError>}
            </div>
          </div>

          <div>
            <div className="flex items-start gap-2 text-sm text-foreground/90">
              <input
                required
                name="consent"
                type="checkbox"
                className={`mt-1 rounded ${errors.consent ? "border-red-600 accent-red-600" : "border-border"}`}
                onChange={() => clearError("consent")}
              />
              <span className={errors.consent ? "text-red-700" : undefined}>
                I consent to being contacted by Toronto College of Dental Assisting about my application. *
              </span>
            </div>
            {errors.consent && <FieldError>{errors.consent}</FieldError>}
          </div>

          <CTAButton type="submit" className="w-full shadow-md">
            Request Application
          </CTAButton>
          <p className="text-center text-xs text-muted-foreground">
            This is a display-only form — submissions are not recorded.
          </p>
          </div>
        </form>
        </div>
      </section>
    </SiteLayout>
  );
}

function fieldClass(invalid: boolean) {
  return `${inputClass} ${
    invalid
      ? "border-red-600 ring-2 ring-red-200 focus:border-red-600 focus:ring-red-200"
      : "border-border/80 focus:border-primary focus:ring-primary/20"
  }`;
}

function FieldError({ children }: { children: string }) {
  return <p className="mt-1 text-sm font-medium text-red-600">{children}</p>;
}

function Field({
  label,
  name,
  type = "text",
  error,
  onClear,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  onClear: (name: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[color:var(--navy)]">{label} *</label>
      <input
        required
        name={name}
        type={type}
        className={fieldClass(Boolean(error))}
        onChange={() => onClear(name)}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}
