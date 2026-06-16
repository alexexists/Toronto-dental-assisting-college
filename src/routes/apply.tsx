import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTAButton } from "@/components/site/SiteLayout";
import { programs } from "@/lib/programs";

export const Route = createFileRoute("/apply")({
  head: () => ({
    meta: [
      { title: "Apply — Toronto College of Dental Assisting" },
      { name: "description", content: "Apply to the Dental Assisting program at Toronto College of Dental Assisting." },
      { property: "og:title", content: "Apply to TCDA" },
      { property: "og:description", content: "Start your application for our Dental Assisting program." },
    ],
  }),
  component: Apply,
});

const inputClass =
  "mt-1.5 w-full rounded-lg border border-border/80 bg-white px-3.5 py-2.5 text-sm shadow-sm transition placeholder:text-muted-foreground/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

function Apply() {
  return (
    <SiteLayout>
      <PageHero title="Apply Now" subtitle="Begin your dental career — fill out the application below and we'll be in touch." />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full rounded-xl border border-primary/25 bg-gradient-to-br from-white via-white to-primary/10 p-6 sm:p-8 shadow-lg shadow-primary/10 ring-1 ring-black/[0.04] space-y-6"
        >
          <div className="border-b border-primary/15 pb-4">
            <h2 className="font-display text-2xl text-[color:var(--navy)]">Application</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Complete the form below and our admissions team will follow up with you.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-[color:var(--navy)]">Personal Information</h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name *" />
              <Field label="Last name *" />
              <Field label="Email *" type="email" />
              <Field label="Phone *" type="tel" />
              <Field label="Date of birth" type="date" />
              <Field label="City" />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-[color:var(--navy)]">Program Interest</h3>
            <div>
              <label className="block text-sm font-semibold text-[color:var(--navy)]">Program *</label>
              <select className={inputClass} defaultValue={programs[0].navLabel}>
                {programs.map((program) => (
                  <option key={program.slug} value={program.navLabel}>
                    {program.navLabel}
                  </option>
                ))}
                <option>Not sure — please advise</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-display text-lg text-[color:var(--navy)]">Education Background</h3>
            <Field label="Highest level of education completed" />
            <div>
              <label className="block text-sm font-semibold text-[color:var(--navy)]">Tell us about yourself</label>
              <textarea
                rows={5}
                className={inputClass}
                placeholder="Why do you want to become a dental assistant?"
              />
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm text-foreground/90">
            <input type="checkbox" className="mt-1 rounded border-border" />
            <span>I consent to being contacted by Toronto College of Dental Assisting about my application.</span>
          </div>

          <CTAButton type="submit" className="w-full shadow-md">
            Submit Application
          </CTAButton>
          <p className="text-center text-xs text-muted-foreground">
            This is a display-only form — submissions are not recorded.
          </p>
        </form>
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
