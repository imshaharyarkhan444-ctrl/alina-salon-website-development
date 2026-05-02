import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { SITE, SERVICES, SPECIALTIES, GALLERY, INITIAL_REVIEWS } from "../data/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="Beautiful blonde balayage hair"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso/40 via-espresso/30 to-espresso/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-espresso/40 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-20 md:px-10 md:pb-28">
          <div className="max-w-2xl fade-up">
            <p className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.4em] text-gold-light">
              <span className="h-px w-10 bg-gold-light" />
              Boutique Hair Studio · Eindhoven
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-cream md:text-7xl lg:text-[92px]">
              Alina <span className="italic text-gold-light">Salon</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85 md:text-xl">
              Expert women's haircuts & color transformations — crafted with twenty years
              of European artistry, in the heart of Eindhoven.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="group inline-flex items-center gap-3 rounded-full bg-cream px-7 py-4 text-xs uppercase tracking-[0.25em] text-espresso transition-all hover:bg-gold hover:text-cream"
              >
                Book Appointment
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center gap-3 rounded-full border border-cream/40 px-7 py-4 text-xs uppercase tracking-[0.25em] text-cream transition-all hover:border-gold hover:text-gold"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Floating rating badge */}
        <div className="absolute right-5 top-24 z-10 hidden md:right-10 md:top-32 md:block fade-up">
          <div className="rounded-2xl border border-cream/20 bg-espresso/40 px-5 py-4 backdrop-blur-md">
            <div className="text-gold-light">★★★★★</div>
            <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cream/80">5.0 Google Rating</p>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="overflow-hidden border-y border-mocha/10 bg-beige/30 py-5">
        <div className="marquee flex gap-12 whitespace-nowrap">
          {[...SPECIALTIES, ...SPECIALTIES, ...SPECIALTIES].map((s, i) => (
            <span key={i} className="flex items-center gap-12 font-serif text-2xl italic text-mocha/70 md:text-3xl">
              {s}
              <span className="text-gold">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:gap-20 md:items-center">
          <div className="relative">
            <img
              src="/images/work-4.jpg"
              alt="Alina styling a client at the salon"
              className="aspect-[4/5] w-full rounded-md object-cover shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-md border border-mocha/10 bg-cream-light p-6 shadow-xl md:block">
              <p className="font-serif text-5xl text-gold">20+</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mocha/70">Years of artistry</p>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">— About Alina</p>
            <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">
              Hair is personal.
              <br />
              <span className="italic">Treat it that way.</span>
            </h2>
            <div className="mt-7 space-y-4 text-base leading-relaxed text-mocha/80">
              <p>
                Originally from Kyiv and now calling Eindhoven home, I have spent two
                decades behind the chair — quietly perfecting the small things that turn
                a good haircut into your favourite haircut.
              </p>
              <p>
                Every appointment begins with a real conversation. Your lifestyle, your
                hair history, what you love, what you've been afraid to try. Only then do
                we pick up the scissors.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4 border-y border-mocha/10 py-6">
              <div>
                <p className="font-serif text-3xl text-espresso">5.0★</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-mocha/60">Rating</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-espresso">20+</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-mocha/60">Years</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-espresso">1:1</p>
                <p className="mt-1 text-xs uppercase tracking-[0.15em] text-mocha/60">Consults</p>
              </div>
            </div>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-espresso transition-colors hover:text-gold"
            >
              Read my story
              <span className="h-px w-8 bg-current" />
            </Link>
          </div>
        </div>
      </section>

      {/* SPECIALIZATION */}
      <section className="bg-beige/40 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeading
            eyebrow="Specialties"
            title="What I do best"
            subtitle="Five carefully chosen disciplines — practiced, refined, and constantly studied."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((s, i) => (
              <div
                key={s.name}
                className="group relative overflow-hidden rounded-md border border-mocha/10 bg-cream-light p-8 transition-all hover:-translate-y-1 hover:shadow-xl hover:border-gold/40"
              >
                <span className="absolute right-6 top-6 font-serif text-5xl italic text-beige-deep/40 transition-colors group-hover:text-gold/60">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif text-2xl text-espresso">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha/70">{s.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-mocha/10 pt-4 text-xs uppercase tracking-[0.15em] text-mocha/60">
                  <span>{s.duration}</span>
                  <span className="text-gold">{s.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS / GALLERY PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-32">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">— Real Work</p>
            <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">
              Transformations from the chair.
            </h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-espresso hover:text-gold"
          >
            View Full Gallery
            <span className="h-px w-8 bg-current" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {GALLERY.slice(0, 4).map((g, i) => (
            <Link
              to="/gallery"
              key={i}
              className={`group relative overflow-hidden rounded-md ${
                i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/5]" : "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 translate-y-2 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-light">{g.tag}</p>
                <p className="font-serif text-lg text-cream">{g.caption}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* REVIEWS PREVIEW */}
      <section className="bg-espresso py-24 text-cream md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <SectionHeading
            eyebrow="Kind Words"
            title="Loved by clients across Eindhoven"
            subtitle="Honest reviews from real visits — every chair, every conversation, every transformation."
            light
          />

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {INITIAL_REVIEWS.slice(0, 3).map((r) => (
              <article
                key={r.name}
                className="rounded-md border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur"
              >
                <div className="text-gold-light">★★★★★</div>
                <p className="mt-4 text-sm leading-relaxed text-cream/80 italic">
                  "{r.comment}"
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-cream/10 pt-4">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 font-serif text-gold-light">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{r.name}</p>
                    <p className="text-xs text-cream/50">{r.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-cream hover:border-gold hover:text-gold"
            >
              Read All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <img
          src="/images/work-1.jpg"
          alt="Beige blonde hair"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-espresso/70" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-light">— Ready when you are</p>
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-6xl">
            Book your hair
            <br />
            <span className="italic">transformation today.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/80">
            Walk in for a chat, or schedule a private consultation. I'll help you decide
            what's right for your hair — no pressure, no upsell.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/booking"
              className="rounded-full bg-cream px-8 py-4 text-xs uppercase tracking-[0.25em] text-espresso hover:bg-gold hover:text-cream"
            >
              Book Online
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-cream/40 px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream hover:border-gold hover:text-gold"
            >
              WhatsApp Alina
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
