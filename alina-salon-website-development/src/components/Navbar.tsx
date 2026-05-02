import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location.pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-cream-light/95 backdrop-blur-md shadow-[0_1px_0_rgba(26,20,16,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `relative text-sm uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "text-gold"
                    : "text-espresso/80 hover:text-gold"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {l.label}
                  <span
                    className={`absolute -bottom-1.5 left-1/2 h-px -translate-x-1/2 bg-gold transition-all duration-300 ${
                      isActive ? "w-6" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <NavLink
            to="/booking"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-espresso px-6 py-2.5 text-xs uppercase tracking-[0.2em] text-cream transition-all hover:bg-gold"
          >
            <span>Book Now</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </NavLink>
        </div>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block h-px w-6 bg-espresso transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-px w-6 bg-espresso transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-6 bg-espresso transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden bg-cream-light transition-all duration-500 ease-out ${
          open ? "max-h-[600px] border-t border-mocha/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-6">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `border-b border-mocha/10 py-4 font-serif text-2xl ${
                  isActive ? "text-gold" : "text-espresso"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink
            to="/booking"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-espresso px-6 py-3.5 text-xs uppercase tracking-[0.2em] text-cream"
          >
            Book Appointment
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
