import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

export default function About() {
  const values = [
    {
      title: "Honest consultation",
      desc: "I'd rather talk you out of a service than give you something that won't work for your hair.",
    },
    {
      title: "Healthy hair first",
      desc: "Color is beautiful — but only on hair that can carry it. Integrity comes before fashion.",
    },
    {
      title: "Slow, careful work",
      desc: "One client at a time. Real attention. The kind of focus your hair actually deserves.",
    },
    {
      title: "Continuous study",
      desc: "Twenty years in, I'm still in classrooms. Trends change, technique evolves — and I keep up.",
    },
  ];

  return (
    <>
      <PageHeader
        eyebrow="The Stylist"
        title="Hello, I'm Alina."
        subtitle="A quiet introduction to the woman behind the chair — and the philosophy behind every appointment."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-14 md:grid-cols-5 md:gap-16">
          <div className="md:col-span-2">
            <img
              src="/images/work-4.jpg"
              alt="Alina at work in her Eindhoven salon"
              className="w-full rounded-md object-cover shadow-xl"
              loading="lazy"
            />
            <div className="mt-6 rounded-md border border-mocha/10 bg-beige/40 p-6">
              <p className="font-serif text-xl italic text-espresso">
                "I treat every head of hair like it's my own — and the result speaks for itself."
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-gold">— Alina</p>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">— My Story</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-espresso md:text-5xl">
              From Kyiv to Eindhoven —
              <br />
              <span className="italic">two decades behind the chair.</span>
            </h2>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-mocha/80">
              <p>
                I grew up in <span className="text-espresso font-medium">Kyiv 🇺🇦</span>,
                where I trained in the classical European school of hairdressing. From the
                very first month I knew this wasn't a job — it was a craft I would spend
                my life improving.
              </p>
              <p>
                After years in some of the most respected salons in Ukraine, life brought
                me to <span className="text-espresso font-medium">the Netherlands 🇳🇱</span>.
                I opened my boutique studio on Geldropseweg with one quiet promise: every
                client gets my full attention, every appointment, every time.
              </p>
              <p>
                Today, I specialise in women's haircuts and advanced color work —
                airtouch, balayage, soft blonde transformations, and restoration for hair
                that has been through a lot. My favourite kind of appointment is the one
                where a client says, <em>"I didn't think this was possible for my hair."</em>
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-mocha/10 pt-8 sm:grid-cols-4">
              {[
                { n: "20+", l: "Years experience" },
                { n: "5.0★", l: "Google rating" },
                { n: "1:1", l: "Personal sessions" },
                { n: "EU", l: "Trained" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-serif text-3xl text-gold">{s.n}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-mocha/60">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold">— What I believe</p>
            <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">
              Four quiet principles that guide every appointment.
            </h2>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-md bg-mocha/15 md:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-cream-light p-8 md:p-10">
                <h3 className="font-serif text-2xl text-espresso">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mocha/70">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-5 py-24 text-center md:px-10">
        <h2 className="font-serif text-4xl leading-tight text-espresso md:text-5xl">
          Curious if we'd be a good fit?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mocha/70">
          Book a 15-minute consultation, free and no obligation. We'll talk about your
          hair, your goals, and what's truly possible.
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-4 text-xs uppercase tracking-[0.25em] text-cream hover:bg-gold"
        >
          Book a Consultation
        </Link>
      </section>
    </>
  );
}
