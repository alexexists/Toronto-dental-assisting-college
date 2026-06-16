import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16">
      <div className="h-1 bg-primary" />
      <div className="bg-[color:var(--navy)] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-3">
          <div>
            <div className="font-display text-xl font-bold">Toronto College of Dental Assisting</div>
            <p className="mt-3 text-sm text-white/70 leading-relaxed">
              A focused, hands-on program preparing students for rewarding careers
              as Level I and Level II Dental Assistants.
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
              <li><Link to="/programs/intra-oral-dental-assisting" className="text-white/80 hover:text-white">Intra Oral Level I &amp; II</Link></li>
              <li><Link to="/programs/dental-assisting-level-ii" className="text-white/80 hover:text-white">Dental Assisting Level II</Link></li>
              <li><Link to="/facility" className="text-white/80 hover:text-white">Facility</Link></li>
              <li><Link to="/testimonials" className="text-white/80 hover:text-white">Testimonials</Link></li>
              <li><Link to="/faq" className="text-white/80 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white">Contact</Link></li>
              <li><Link to="/apply" className="text-white/80 hover:text-white">Apply Now</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-display text-sm font-bold uppercase tracking-wider text-primary">Contact</div>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span>2727 Steeles Ave W<br />Toronto, ON M3J 3G9</span></li>
              <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span><a href="tel:+14164233099" className="hover:text-white">416-423-3099</a><br /><a href="tel:+18669233099" className="hover:text-white">1-866-923-3099</a></span></li>
              <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-primary" /><span><a href="mailto:info@toronto-college-dental.org" className="hover:text-white">info@toronto-college-dental.org</a></span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-4 py-4 text-xs text-white/60 flex flex-wrap justify-between gap-2">
            <span>© {new Date().getFullYear()} Toronto College of Dental Assisting. All rights reserved.</span>
            <span>Website designed and maintained by Alex at Moonreels</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
