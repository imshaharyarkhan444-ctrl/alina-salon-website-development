import { Link } from "react-router-dom";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-full border ${
          light ? "border-cream/40 text-cream" : "border-mocha/30 text-mocha"
        } font-serif italic text-lg leading-none transition-all group-hover:border-gold group-hover:text-gold`}
      >
        A
      </span>
      <span className="leading-tight">
        <span
          className={`block font-serif text-lg ${
            light ? "text-cream" : "text-espresso"
          } transition-colors group-hover:text-gold`}
        >
          Alina Salon
        </span>
        <span
          className={`block text-[10px] uppercase tracking-[0.25em] ${
            light ? "text-cream/60" : "text-mocha/60"
          }`}
        >
          Eindhoven
        </span>
      </span>
    </Link>
  );
}
