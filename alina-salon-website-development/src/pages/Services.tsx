import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { SERVICES } from "../data/site";

export default function Services() {
  return (
    <>
      <PageHeader
        eyebrow="Menu"
        title="Services & Pricing"
        subtitle="Each service is fully personalised. Prices below are starting points — final pricing is always confirmed before we begin."
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:px-10 md:py-28">
        <div className="space-y-px overflow-hidden rounded-md border border-mocha/10">
          {SERVICES.map((s, i) => (
            <div
              key={s.name}
              className="group grid gap-4 bg-cream-light p-6 transition-colors hover:bg-beige/30 md:grid-cols-12 md:items-center md:gap-8 md:p-8"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-3xl italic text-gold">0{i + 1}</span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-serif text-2xl text-espresso md:text-3xl">{s.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-mocha/50">{s.duration}</p>
              </div>
              <div className="md:col-span-5">
                <p className="text-sm leading-relaxed text-mocha/75">{s.desc}</p>
              </div>
              <div className="md:col-span-2 md:text-right">
                <p className="font-serif text-2xl text-espresso">{s.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* What to expect */}
        <div className="mt-20 grid gap-10 rounded-md border border-mocha/10 bg-beige/30 p-8 md:grid-cols-3 md:gap-6 md:p-12">
          {[
            {
              n: "01",
              t: "Consultation",
              d: "We start with a real conversation — your hair history, your lifestyle and your goals.",
            },
            {
              n: "02",
              t: "The session",
              d: "Calm, focused, unhurried. Coffee or tea, conversation if you'd like, silence if you wouldn't.",
            },
            {
              n: "03",
              t: "Aftercare",
              d: "You leave with a plan: how to maintain it at home and when to come back next.",
            },
          ].map((step) => (
            <div key={step.n}>
              <p className="font-serif text-4xl italic text-gold">{step.n}</p>
              <h4 className="mt-3 font-serif text-xl text-espresso">{step.t}</h4>
              <p className="mt-2 text-sm leading-relaxed text-mocha/70">{step.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-mocha/70">Not sure what you need?</p>
          <Link
            to="/booking"
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-4 text-xs uppercase tracking-[0.25em] text-cream hover:bg-gold"
          >
            Book a free consultation
          </Link>
        </div>
      </section>
    </>
  );
}
