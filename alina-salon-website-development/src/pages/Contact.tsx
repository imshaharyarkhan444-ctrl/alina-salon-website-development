import PageHeader from "../components/PageHeader";
import { SITE, HOURS, AMENITIES } from "../data/site";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Visit"
        title="Find the Salon"
        subtitle="Tucked into Geldropseweg in central Eindhoven — easy to reach by foot, bike or car, with free parking nearby."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-5">
          {/* Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-md border border-mocha/10 bg-cream-light p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Address</p>
              <p className="mt-2 font-serif text-2xl text-espresso">Geldropseweg 75</p>
              <p className="text-mocha/70">5611 SE Eindhoven, Netherlands</p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Geldropseweg+75,+Eindhoven"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm text-gold hover:underline"
              >
                Get directions →
              </a>
            </div>

            <div className="rounded-md border border-mocha/10 bg-cream-light p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Contact</p>
              <a href={`tel:${SITE.phoneTel}`} className="mt-2 block font-serif text-2xl text-espresso hover:text-gold">
                {SITE.phone}
              </a>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={SITE.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-mocha/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mocha hover:border-gold hover:text-gold"
                >
                  WhatsApp
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-mocha/20 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mocha hover:border-gold hover:text-gold"
                >
                  Instagram
                </a>
              </div>
            </div>

            <div className="rounded-md border border-mocha/10 bg-cream-light p-7">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Opening Hours</p>
              <ul className="mt-3 divide-y divide-mocha/10">
                {HOURS.map((h) => (
                  <li key={h.day} className="flex justify-between py-2 text-sm">
                    <span className="text-mocha/80">{h.day}</span>
                    <span className={h.time === "Closed" ? "text-mocha/40" : "text-espresso"}>
                      {h.time}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-3">
            <div className="overflow-hidden rounded-md border border-mocha/10 bg-cream-light shadow-sm">
              <iframe
                title="Alina Salon location"
                src="https://www.google.com/maps?q=Geldropseweg+75,+Eindhoven&output=embed"
                className="h-[420px] w-full md:h-[560px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <img
              src="/images/salon.jpg"
              alt="Alina Salon interior"
              loading="lazy"
              className="mt-5 h-64 w-full rounded-md object-cover"
            />
          </div>
        </div>

        {/* Amenities / extra info */}
        <div className="mt-20">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">— Good to know</p>
            <h2 className="mt-3 font-serif text-3xl text-espresso md:text-4xl">
              A welcoming space for everyone.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-mocha/70">
              The salon is set up to be calm, accessible and inclusive — for every guest, every visit.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(AMENITIES).map(([cat, items]) => (
              <div
                key={cat}
                className="rounded-md border border-mocha/10 bg-cream-light p-6"
              >
                <h4 className="font-serif text-lg text-espresso">{cat}</h4>
                <ul className="mt-3 space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-mocha/75">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
