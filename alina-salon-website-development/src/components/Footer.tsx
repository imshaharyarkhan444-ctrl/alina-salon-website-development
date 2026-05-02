import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-espresso text-cream/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4">
        <div>
          <Logo light />
          <p className="mt-5 text-sm leading-relaxed text-cream/60">
            A boutique hair studio in the heart of Eindhoven — where 20 years of European
            craftsmanship meet your most personal request.
          </p>
          <div className="mt-6 flex items-center gap-1 text-gold-light">
            {"★★★★★".split("").map((s, i) => (
              <span key={i}>{s}</span>
            ))}
            <span className="ml-2 text-xs uppercase tracking-[0.2em] text-cream/60">5.0 / Google</span>
          </div>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-gold">Visit</h4>
          <p className="text-sm leading-relaxed">
            Geldropseweg 75
            <br />
            5611 SE Eindhoven
            <br />
            Netherlands
          </p>
          <a
            href="tel:+31642816121"
            className="mt-4 block text-sm transition-colors hover:text-gold"
          >
            +31 6 42816121
          </a>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-gold">Hours</h4>
          <ul className="space-y-1.5 text-sm">
            <li className="flex justify-between gap-4"><span>Mon – Sat</span><span className="text-cream/60">9:00 – 20:00</span></li>
            <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-cream/60">Closed</span></li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-cream/50">By appointment · walk-ins welcome</p>
        </div>

        <div>
          <h4 className="mb-5 text-xs uppercase tracking-[0.25em] text-gold">Explore</h4>
          <ul className="grid grid-cols-2 gap-y-2 text-sm">
            <li><Link to="/about" className="hover:text-gold">About</Link></li>
            <li><Link to="/services" className="hover:text-gold">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/reviews" className="hover:text-gold">Reviews</Link></li>
            <li><Link to="/booking" className="hover:text-gold">Booking</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
          <div className="mt-6 flex gap-3">
            <a
              href="https://instagram.com/alina.mar4uk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://wa.me/31642816121"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 transition hover:border-gold hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 14.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.8 3.1 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-cream/50 md:flex-row md:px-10">
          <p>© {new Date().getFullYear()} Alina Salon. All rights reserved.</p>
          <p className="font-serif italic">Crafted with care in Eindhoven.</p>
        </div>
      </div>
    </footer>
  );
}
