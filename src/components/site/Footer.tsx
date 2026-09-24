import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/Toronto-College-Dental-Assisting-Logo.png";

const policyLinks = [
  {
    label: "TCDHA Privacy Policy",
    href: "/tcdha_documents/TCDHA%20Privacy%20Policy%20(2727%20Steeles).pdf",
    external: true,
  },
  {
    label: "TCDHA Sexual Violence Policy",
    href: "/tcdha_documents/TCDHA%20Sexual%20Violence%20Policy.pdf",
    external: true,
  },
  {
    label: "TCDHA Continuity of Education Plan",
    href: "/tcdha_documents/Continuity%20of%20Education%20Plan.pdf",
    external: true,
  },
  {
    label: "TCDHA Accessibility Policy",
    href: "/tcdha_documents/TCDHA%20Accessibility%20Policy%20(2727%20Steeles).pdf",
    external: true,
  },
  {
    label: "TCDHA Multi-year Plan",
    href: "/tcdha_documents/TCDHA%20Multi-year%20Plan.pdf",
    external: true,
  },
  {
    label: "TCDHA Safety Plan",
    href: "/tcdha_documents/TCDHA%20Safety%20Plan%20(2727%20Steeles).pdf",
    external: true,
  },
  {
    label: "TCDHA Equity, Diversity, Inclusion and Belonging Statement",
    href: "/tcdha_documents/TCDHA%20EDI-B%20Policy.pdf",
    external: true,
  },
  {
    label: "2022 COISL Default RAP Usage Rates by Sector",
    href: "/tcdha_documents/2022%20COISL%20Default%20RAP%20Usage%20Rates%20by%20Sector.xlsx",
    external: true,
  },
  {
    label: "2022 COISL Default Rates and RAP Usage Rates by Institution-PCCs",
    href: "/tcdha_documents/2022%20COISL%20Default%20Rates%20and%20RAP%20Usage%20Rates%20by%20Institution-PCCs.xlsx",
    external: true,
  },
  {
    label: "2023 Toronto College of Dental Hygiene & Auxiliaries graduation and job rates",
    href: "https://www.tcu.gov.on.ca/pepg/audiences/pcc/career-college-kpi/data/?pccid=102193&yr=2023",
    external: true,
  },
  {
    label: "KPI for the 2023 Reporting Cycle",
    href: "/tcdha_documents/2023%20KPI%20Reporting%20Cycle.xlsx",
    external: true,
  },
] as const;

export function Footer() {
  return (
    <footer>
      <div className="h-1 bg-primary" />
      <div className="bg-[color:var(--navy)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <Link to="/" className="inline-flex w-fit max-w-full items-center">
              <img
                src={logo}
                alt="Toronto College of Dental Assisting"
                className="h-14 sm:h-16 w-auto max-w-[min(100%,280px)] object-contain object-left"
              />
            </Link>
            <div className="mt-4 font-display text-xl font-bold">Toronto College of Dental Assisting</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              A focused, hands-on program preparing students for rewarding careers
              as Level I and Level II Dental Assistants. Considered the best dental
              assisting program in Canada.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.facebook.com/TCDHA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-5 w-5" /></a>
              <a href="https://www.instagram.com/tocollegedha/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5" /></a>
              <a href="https://x.com/tocollegedha" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-primary"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-primary">Programs</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="text-white/80 hover:text-white">About Us</Link></li>
              <li><Link to="/programs" className="text-white/80 hover:text-white">All Programs</Link></li>
              <li><Link to="/programs/intra-oral-dental-assisting" hash="program-content" className="text-white/80 hover:text-white">Intra Oral Level I &amp; II</Link></li>
              <li><Link to="/programs/dental-assisting-level-ii" hash="program-content" className="text-white/80 hover:text-white">Dental Assisting Level II</Link></li>
              <li><Link to="/facility" className="text-white/80 hover:text-white">Facility</Link></li>
              <li><Link to="/testimonials" className="text-white/80 hover:text-white">Testimonials</Link></li>
              <li><Link to="/dental-assisting-college-faq" className="text-white/80 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              <li><Link to="/apply" className="text-white/80 hover:text-white">Apply Now</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-primary">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span>2727 Steeles Ave W<br />Toronto, ON M3J 3G9</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span><a href="tel:+14164233099" className="hover:text-white">416-423-3099</a><br /><a href="tel:+18669233099" className="hover:text-white">1-866-923-3099</a></span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span><a href="mailto:info@dental-assisting-toronto.ca" className="hover:text-white">info@dental-assisting-toronto.ca</a></span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Toronto College of Dental Hygiene and Auxiliaries Inc. All
              Rights Reserved
            </p>
            <ul className="mt-4 space-y-2 text-sm">
              {policyLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/70 underline-offset-2 hover:text-white hover:underline"
                    {...(item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/60 flex flex-wrap justify-end gap-2">
            <span>Website designed and maintained by Alex at Moon Reel Media ltd.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
