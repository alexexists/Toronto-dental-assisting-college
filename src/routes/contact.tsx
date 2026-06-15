import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, PageHero, CTAButton } from "@/components/site/SiteLayout";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

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

function Contact() {
  return (
    <SiteLayout>
      <PageHero title="Contact Us" subtitle="We'd love to hear from you. Reach out with any questions about the program." />

      <section className="mx-auto max-w-7xl px-4 py-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          {[
            { Icon: MapPin, title: "Address", value: "123 College Avenue\nToronto, ON M5V 0A0" },
            { Icon: Phone, title: "Phone", value: "416-423-3099\n1-866-923-3099" },
            { Icon: Mail, title: "Email", value: "info@toronto-college-dental.org" },
            { Icon: Clock, title: "Hours", value: "Mon–Fri: 9:00 AM – 5:00 PM\nSat: 9:00 AM – 3:00 PM" },
          ].map(({ Icon, title, value }) => (
            <div key={title} className="flex gap-4 rounded-lg border bg-card p-5">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <div className="font-display text-base text-[color:var(--navy)]">{title}</div>
                <div className="mt-1 text-sm text-muted-foreground whitespace-pre-line">{value}</div>
              </div>
            </div>
          ))}
        </div>

        <form
          className="rounded-lg border bg-card p-6 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="font-display text-2xl">Send us a message</h2>
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
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Tell us how we can help..."
            />
          </div>
          <CTAButton type="submit">Send Message</CTAButton>
          <p className="text-xs text-muted-foreground">This is a display-only form.</p>
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
