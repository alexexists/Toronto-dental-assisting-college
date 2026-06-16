import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTAButton } from "@/components/site/SiteLayout";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Toronto College of Dental Assisting" },
      { name: "description", content: "Get in touch with Toronto College of Dental Assisting. Phone, email, address, and hours." },
      { property: "og:title", content: "Contact TCDA" },
      { property: "og:description", content: "Reach out to learn more about our Dental Assisting program." },
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
  "mt-1.5 w-full rounded-lg border border-border/80 bg-white px-3.5 py-2.5 text-sm shadow-sm transition placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Contact() {
  return (
    <SiteLayout>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions about the program." />

      <section className="mx-auto max-w-5xl px-4 py-12 grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 items-start">
        <form
          className="max-w-xl w-full rounded-xl border border-primary/25 bg-gradient-to-br from-white via-white to-primary/10 p-6 sm:p-8 shadow-lg shadow-primary/10 ring-1 ring-black/[0.04] space-y-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="border-b border-primary/15 pb-4">
            <h2 className="font-display text-2xl text-[color:var(--navy)]">Send us a message</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Questions about programs, admissions, or campus visits — we're here to help.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="First name" />
            <Field label="Last name" />
          </div>
          <Field label="Email" type="email" />
          <Field label="Phone" type="tel" />
          <div>
            <label className="block text-sm font-semibold text-[color:var(--navy)]">Message</label>
            <textarea
              rows={5}
              className={inputClass}
              placeholder="Tell us how we can help..."
            />
          </div>
          <CTAButton type="submit" className="w-full shadow-md">
            Send Message
          </CTAButton>
          <p className="text-center text-xs text-muted-foreground">This is a display-only form.</p>
        </form>

        <div className="text-right text-sm leading-relaxed text-foreground/90 lg:pt-2 lg:border-l lg:border-primary/20 lg:pl-10">
          <p className="font-bold text-[color:var(--navy)]">Location:</p>
          <p className="mt-1">
            2727 Steeles Ave W
            <br />
            Toronto, ON
            <br />
            M3J 3G9
          </p>

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
                <a href="mailto:info@toronto-college-dental.org" className="hover:text-primary">
                  info@toronto-college-dental.org
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center justify-end gap-3 text-[color:var(--navy)]">
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

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[color:var(--navy)]">{label}</label>
      <input type={type} className={inputClass} />
    </div>
  );
}
