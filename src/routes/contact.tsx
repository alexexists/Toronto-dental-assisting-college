import { useEffect, useRef, useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, CTAButton } from "@/components/site/SiteLayout";
import { FormSuccessDialog } from "@/components/site/FormSuccessDialog";
import { ProgramHero } from "@/components/site/ProgramDetailSections";
import contactHeroImg from "@/assets/contact-hero-v2.jpg";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { ogImageMeta } from "@/lib/structured-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact Toronto College of Dental Assisting | Phone, Email & Campus",
      },
      {
        name: "description",
        content:
          "Contact Toronto College of Dental Assisting at 2727 Steeles Ave W. Call 416-423-3099 or email info@dental-assisting-toronto.ca for Dental Assisting admissions.",
      },
      {
        property: "og:title",
        content: "Contact Toronto College of Dental Assisting | TCDA",
      },
      {
        property: "og:description",
        content:
          "Reach our Toronto admissions team about Intra Oral Level I & II and Dental Assisting Level II programs.",
      },
      ...ogImageMeta(),
    ],
  }),
  component: Contact,
});

const schoolHours = [
  { day: "Monday", hours: "7:00am to 8:00pm" },
  { day: "Tuesday", hours: "7:00am to 8:00pm" },
  { day: "Wednesday", hours: "7:00am to 8:00pm" },
  { day: "Thursday", hours: "7:00am to 8:00pm" },
  { day: "Friday", hours: "7:00am to 8:00pm" },
  { day: "Saturday", hours: "7:00am to 4:00pm" },
  { day: "Sunday", hours: "Closed" },
] as const;

const inputClass =
  "mt-1.5 w-full rounded-lg border bg-white px-3.5 py-2.5 text-sm shadow-sm transition placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2";

const FORMSPREE_CONTACT_ENDPOINT = `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_CONTACT_ID ?? "mrpqqznz"}`;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

const campusAddress = "2727 Steeles Ave W, Toronto, ON M3J 3G9";
const mapsEmbedSrc = `https://maps.google.com/maps?q=${encodeURIComponent(campusAddress)}&z=15&output=embed`;

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const alertRef = useRef<HTMLParagraphElement>(null);
  const pendingScroll = useRef(false);

  useEffect(() => {
    if (!pendingScroll.current || !alertRef.current || status === "success") return;
    pendingScroll.current = false;
    alertRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [errors, status]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const next: Record<string, string> = {};
    const fields = form.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("input, textarea");

    fields.forEach((field) => {
      if (!field.name || field.name.startsWith("_") || field.checkValidity()) return;
      next[field.name] = field.validity.valueMissing
        ? "This field needs to be filled."
        : "Please enter a valid value.";
    });

    setErrors(next);
    if (Object.keys(next).length > 0) {
      pendingScroll.current = true;
      return;
    }

    setStatus("submitting");

    try {
      const formData = new FormData(form);
      formData.set("_subject", "New Contact Inquiry | Dental Assisting Program");

      const response = await fetch(FORMSPREE_CONTACT_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Formspree request failed");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      pendingScroll.current = true;
    }
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
  const isSubmitting = status === "submitting";

  return (
    <SiteLayout>
      <FormSuccessDialog
        open={status === "success"}
        onOpenChange={(open) => {
          if (!open) setStatus("idle");
        }}
        title="Message sent"
        description="Thank you — your message was sent. Check your email for a confirmation, and our team will get back to you shortly."
      />

      <ProgramHero
        image={contactHeroImg}
        imageAlt="Toronto College of Dental Assisting admissions desk ready to help prospective students"
        imagePosition="object-[70%_22%] sm:object-[right_20%]"
        title="Contact Toronto College of Dental Assisting"
        subtitle="Questions about Intra Oral Level I & II or Dental Assisting Level II? Reach out — we're happy to help."
      />

      <section className="mx-auto max-w-5xl px-4 py-10 grid gap-8 lg:grid-cols-2 lg:gap-10 items-start">
        <form
          noValidate
          onSubmit={handleSubmit}
          className="max-w-xl w-full rounded-xl border border-primary/25 bg-gradient-to-br from-white via-white to-primary/10 p-6 sm:p-8 shadow-lg shadow-primary/10 ring-1 ring-black/[0.04] space-y-5"
        >
          <div className="border-b border-primary/15 pb-4">
            <h2 className="font-display text-2xl text-[color:var(--navy)]">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Questions about{" "}
              <Link
                to="/programs/intra-oral-dental-assisting"
                hash="program-content"
                className="font-semibold text-primary hover:underline"
              >
                Intra Oral Level I &amp; II
              </Link>
              , admissions, or campus visits. You can also{" "}
              <Link to="/apply" className="font-semibold text-primary hover:underline">
                request an official application here
              </Link>
              .
            </p>
          </div>

          {status === "error" && (
            <p
              ref={alertRef}
              role="alert"
              className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            >
              Something went wrong sending your message. Please try again or call 416-423-3099.
            </p>
          )}
          {hasErrors && (
            <p
              ref={alertRef}
              role="alert"
              className="rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700"
            >
              Please fill in the required fields.
            </p>
          )}

          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="firstName" label="First name" error={errors.firstName} onClear={clearError} />
            <Field name="lastName" label="Last name" error={errors.lastName} onClear={clearError} />
          </div>
          <Field name="email" label="Email" type="email" error={errors.email} onClear={clearError} />
          <Field name="phone" label="Phone" type="tel" required={false} error={errors.phone} onClear={clearError} />
          <div>
            <label className="block text-sm font-semibold text-[color:var(--navy)]">Message *</label>
            <textarea
              required
              name="message"
              rows={5}
              className={fieldClass(Boolean(errors.message))}
              placeholder="Ask us your question"
              onChange={() => clearError("message")}
            />
            {errors.message && <FieldError>{errors.message}</FieldError>}
          </div>
          <div>
            <div className="flex items-start gap-2 text-sm text-foreground/90">
              <input
                required
                name="consent"
                type="checkbox"
                value="yes"
                className={`mt-1 rounded ${errors.consent ? "border-red-600 accent-red-600" : "border-border"}`}
                onChange={() => clearError("consent")}
              />
              <span className={errors.consent ? "text-red-700" : undefined}>
                I consent to being contacted by Toronto College of Dental Assisting about my inquiry. *
              </span>
            </div>
            {errors.consent && <FieldError>{errors.consent}</FieldError>}
          </div>
          <CTAButton type="submit" className="w-full shadow-md" disabled={isSubmitting}>
            {isSubmitting ? "Sending…" : "Send Message"}
          </CTAButton>
        </form>

        <div className="text-center text-sm leading-relaxed text-foreground/90 lg:pt-2 lg:border-l lg:border-primary/20 lg:pl-10">
          <div className="overflow-hidden rounded-xl border border-primary/20 shadow-md ring-1 ring-black/[0.04]">
            <iframe
              title="Toronto College of Dental Assisting — 2727 Steeles Ave W, Toronto"
              src={mapsEmbedSrc}
              className="aspect-[4/3] w-full min-h-[220px] border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="mt-6 font-bold text-[color:var(--navy)]">School Hours:</p>
          <ul className="mt-2 space-y-1">
            {schoolHours.map(({ day, hours }) => (
              <li key={day}>
                <span className="font-semibold text-[color:var(--navy)]">{day}:</span> {hours}
              </li>
            ))}
          </ul>

          <dl className="mt-6 space-y-2">
            <div>
              <dt className="inline font-bold text-[color:var(--navy)] border-b border-dotted border-[color:var(--navy)]">
                Phone:
              </dt>{" "}
              <dd className="inline">
                <a href="tel:+14164233099" className="hover:text-primary">
                  416-423-3099
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-[color:var(--navy)] border-b border-dotted border-[color:var(--navy)]">
                Toll Free:
              </dt>{" "}
              <dd className="inline">
                <a href="tel:+18669233099" className="hover:text-primary">
                  1-866-923-3099
                </a>
              </dd>
            </div>
            <div>
              <dt className="inline font-bold text-[color:var(--navy)] border-b border-dotted border-[color:var(--navy)]">
                Fax:
              </dt>{" "}
              <dd className="inline">416-423-3092</dd>
            </div>
            <div>
              <dt className="inline font-bold text-[color:var(--navy)] border-b border-dotted border-[color:var(--navy)]">
                Email:
              </dt>{" "}
              <dd className="inline">
                <a href="mailto:info@dental-assisting-toronto.ca" className="hover:text-primary">
                  info@dental-assisting-toronto.ca
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-center gap-3 text-[color:var(--navy)]">
            <a
              href="https://www.facebook.com/TCDHA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-primary"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/tocollegedha/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-primary"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://x.com/tocollegedha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="hover:text-primary"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
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
  required = true,
  error,
  onClear,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  error?: string;
  onClear: (name: string) => void;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[color:var(--navy)]">
        {label}
        {required ? " *" : ""}
      </label>
      <input
        required={required}
        name={name}
        type={type}
        className={fieldClass(Boolean(error))}
        onChange={() => onClear(name)}
      />
      {error && <FieldError>{error}</FieldError>}
    </div>
  );
}
