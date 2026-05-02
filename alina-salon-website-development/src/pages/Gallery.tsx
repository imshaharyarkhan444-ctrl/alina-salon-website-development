import { useState, useMemo } from "react";
import PageHeader from "../components/PageHeader";
import { GALLERY, SITE } from "../data/site";

const TAGS = ["All", "Balayage", "Highlights", "Airtouch", "Color & Cut", "Transformation", "Styling", "Treatment", "Color"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "All" ? GALLERY : GALLERY.filter((g) => g.tag === filter)),
    [filter]
  );

  return (
    <>
      <PageHeader
        eyebrow="The Work"
        title="Gallery"
        subtitle="Real clients, real transformations — straight from the chair. Follow along on Instagram for the latest."
      />

      <section className="mx-auto max-w-7xl px-5 py-12 md:px-10 md:py-16">
        {/* Instagram badge */}
        <a
          href={SITE.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mb-12 flex w-fit items-center gap-3 rounded-full border border-mocha/15 bg-cream-light px-5 py-2.5 text-sm transition hover:border-gold hover:text-gold"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
          </svg>
          <span>Follow on Instagram <span className="font-medium">{SITE.instagramHandle}</span></span>
        </a>

        {/* Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.18em] transition ${
                filter === t
                  ? "border-espresso bg-espresso text-cream"
                  : "border-mocha/20 bg-cream-light text-mocha/70 hover:border-gold hover:text-gold"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-5">
          {items.map((g, i) => (
            <button
              key={`${g.src}-${i}`}
              onClick={() => setLightbox(i)}
              className="group relative aspect-[4/5] overflow-hidden rounded-md bg-beige/40"
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 text-left opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-light">{g.tag}</p>
                <p className="font-serif text-base text-cream md:text-lg">{g.caption}</p>
              </div>
              <div className="absolute right-3 top-3 rounded-full bg-cream-light/90 p-1.5 opacity-0 transition-opacity group-hover:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-espresso">
                  <path d="M15 3h6v6M14 10l7-7M9 21H3v-6M10 14l-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram CTA strip */}
        <div className="mt-20 rounded-md bg-gradient-to-br from-espresso to-mocha p-10 text-center text-cream md:p-14">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-light">— Latest on Instagram</p>
          <h3 className="mt-4 font-serif text-3xl md:text-4xl">
            See every new transformation in real time
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm text-cream/70">
            New work goes up almost weekly. Reels, behind-the-scenes, and detailed before-and-afters.
          </p>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-espresso hover:bg-gold hover:text-cream"
          >
            Open {SITE.instagramHandle}
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-espresso/95 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 text-cream"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={items[lightbox].src}
            alt={items[lightbox].caption}
            className="max-h-[85vh] max-w-full rounded-md object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-0 right-0 text-center text-cream">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-light">{items[lightbox].tag}</p>
            <p className="font-serif text-xl">{items[lightbox].caption}</p>
          </div>
        </div>
      )}
    </>
  );
}
