import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTAButton } from "@/components/site/SiteLayout";

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

function Apply() {
  return (
    <SiteLayout>
      <PageHero title="Apply Now" subtitle="Begin your dental career — fill out the application below and we'll be in touch." />

      <section className="mx-auto max-w-3xl px-4 py-12">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-lg border bg-card p-6 sm:p-8 space-y-6"
        >
          <div>
            <h2 className="font-display text-xl text-[color:var(--navy)]">Personal Information</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <Field label="First name *" />
              <Field label="Last name *" />
              <Field label="Email *" type="email" />
              <Field label="Phone *" type="tel" />
              <Field label="Date of birth" type="date" />
              <Field label="City" />
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl text-[color:var(--navy)]">Program Interest</h2>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-[color:var(--navy)]">Program *</label>
              <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Level II Dental Assisting</option>
                <option>Level I Dental Assisting</option>
                <option>Not sure — please advise</option>
              </select>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-semibold text-[color:var(--navy)]">Preferred intake</label>
              <select className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Next available</option>
                <option>Weekend program</option>
                <option>Weekday program</option>
              </select>
            </div>
          </div>

          <div>
            <h2 className="font-display text-xl text-[color:var(--navy)]">Education Background</h2>
            <div className="mt-4 grid gap-4">
              <Field label="Highest level of education completed" />
              <div>
                <label className="block text-sm font-semibold text-[color:var(--navy)]">Tell us about yourself</label>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Why do you want to become a dental assistant?"
                />
              </div>
            </div>
          </div>

          <div className="flex items-start gap-2 text-sm">
            <input type="checkbox" className="mt-1" />
            <span>I consent to being contacted by Toronto College of Dental Assisting about my application.</span>
          </div>

          <CTAButton type="submit">Submit Application</CTAButton>
          <p className="text-xs text-muted-foreground">This is a display-only form — submissions are not recorded.</p>
        </form>
      </section>
    </SiteLayout>
  );
}

function Field({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[color:var(--navy)]">{label}</label>
      <input
        type={type}
        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
