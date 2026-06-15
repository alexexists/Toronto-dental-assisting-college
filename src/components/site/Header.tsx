import { Link, useRouterState } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/Toronto-College-Dental-Assisting-Logo.png";
import { programs } from "@/lib/programs";

const navLinks = [
  { to: "/", label: "HOME", exact: true },
  { to: "/facility", label: "FACILITY" },
  { to: "/testimonials", label: "TESTIMONIALS" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "CONTACT" },
  { to: "/apply", label: "APPLY" },
] as const;

function isProgramsActive(pathname: string) {
  return pathname === "/programs" || pathname.startsWith("/programs/");
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const programsActive = isProgramsActive(pathname);

  return (
    <header className="w-full">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/TCDHA" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:opacity-80"><Facebook className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/tocollegedha/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80"><Instagram className="h-4 w-4" /></a>
            <a href="https://x.com/tocollegedha" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:opacity-80"><Twitter className="h-4 w-4" /></a>
            <Link to="/contact" aria-label="Email" className="hover:opacity-80"><Mail className="h-4 w-4" /></Link>
          </div>
          <div className="hidden sm:block text-xs tracking-wide uppercase">Toronto's Premier Dental Assisting Program</div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-5 sm:py-6">
        <Link to="/" className="inline-flex w-fit max-w-full items-center">
          <img
            src={logo}
            alt="Toronto College of Dental Assisting"
            className="h-14 sm:h-16 w-auto max-w-[min(100%,320px)] object-contain object-left"
          />
        </Link>
        <div className="hidden md:flex items-center gap-3 text-right">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-primary/15 text-primary">
            <Phone className="h-5 w-5" />
          </div>
          <div>
            <a href="tel:+14164233099" className="block font-semibold text-[color:var(--navy)] hover:text-primary">
              416-423-3099
            </a>
            <a href="tel:+18669233099" className="block font-semibold text-[color:var(--navy)] hover:text-primary">
              1-866-923-3099
            </a>
            <a href="mailto:info@toronto-college-dental.org" className="text-xs text-muted-foreground hover:text-primary">
              info@toronto-college-dental.org
            </a>
          </div>
        </div>
        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <nav className="border-y border-border bg-background">
        <div className="mx-auto hidden max-w-7xl items-center justify-center gap-1 px-4 md:flex">
          {navLinks.slice(0, 1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.exact }}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-[color:var(--navy)] hover:text-primary" }}
              className="px-4 py-4 text-sm font-semibold tracking-wider transition-colors"
            >
              {l.label}
            </Link>
          ))}

          <div className="group relative">
            <Link
              to="/programs"
              className={`inline-flex items-center gap-1 px-4 py-4 text-sm font-semibold tracking-wider transition-colors ${
                programsActive ? "text-primary" : "text-[color:var(--navy)] hover:text-primary"
              }`}
            >
              PROGRAMS
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="invisible absolute left-0 top-full z-50 min-w-[320px] border border-border bg-background py-2 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
              {programs.map((program) => (
                <Link
                  key={program.slug}
                  to={program.path}
                  className="block px-4 py-3 text-sm font-semibold tracking-wide text-[color:var(--navy)] hover:bg-muted hover:text-primary"
                >
                  {program.navLabel}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-primary" }}
              inactiveProps={{ className: "text-[color:var(--navy)] hover:text-primary" }}
              className="px-4 py-4 text-sm font-semibold tracking-wider transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {open && (
          <div className="md:hidden border-t">
            <div className="flex flex-col px-4 py-2">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                inactiveProps={{ className: "text-[color:var(--navy)]" }}
                className="py-3 text-sm font-semibold tracking-wider border-b"
              >
                HOME
              </Link>

              <button
                type="button"
                onClick={() => setProgramsOpen((v) => !v)}
                className={`flex items-center justify-between py-3 text-sm font-semibold tracking-wider border-b ${
                  programsActive ? "text-primary" : "text-[color:var(--navy)]"
                }`}
              >
                PROGRAMS
                <ChevronDown className={`h-4 w-4 transition-transform ${programsOpen ? "rotate-180" : ""}`} />
              </button>
              {programsOpen && (
                <div className="border-b pb-2 pl-4">
                  <Link
                    to="/programs"
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                  >
                    All Programs
                  </Link>
                  {programs.map((program) => (
                    <Link
                      key={program.slug}
                      to={program.path}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {program.navLabel}
                    </Link>
                  ))}
                </div>
              )}

              {navLinks.slice(1).map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary" }}
                  inactiveProps={{ className: "text-[color:var(--navy)]" }}
                  className="py-3 text-sm font-semibold tracking-wider border-b last:border-b-0"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
