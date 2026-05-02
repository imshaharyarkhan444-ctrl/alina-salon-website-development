import { useState } from "react";
import PageHeader from "../components/PageHeader";
import { SITE, SERVICES } from "../data/site";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: SERVICES[0].name,
    date: "",
    time: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Compose WhatsApp message and open
    const msg = encodeURIComponent(
      `Hello Alina! I'd like to book an appointment.\n\n` +
        `• Name: ${form.name}\n` +
        `• Phone: ${form.phone}\n` +
        `• Email: ${form.email}\n` +
        `• Service: ${form.service}\n` +
        `• Preferred date: ${form.date}\n` +
        `• Preferred time: ${form.time}\n` +
        (form.notes ? `• Notes: ${form.notes}\n` : "")
    );
    window.open(`https://wa.me/31642816121?text=${msg}`, "_blank");
    setSent(true);
  };

  const times = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00", "18:30"];

  return (
    <>
      <PageHeader
        eyebrow="Booking"
        title="Book Your Appointment"
        subtitle="Reserve your seat at the chair — by call, WhatsApp or the form below. I personally confirm every booking within a few hours."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Quick contact */}
          <aside className="space-y-4 md:col-span-1">
            <a
              href={`tel:${SITE.phoneTel}`}
              className="group block rounded-md border border-mocha/10 bg-cream-light p-6 transition hover:border-gold hover:shadow"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige text-mocha group-hover:bg-gold group-hover:text-cream">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mocha/60">Call</p>
                  <p className="font-serif text-xl text-espresso">{SITE.phone}</p>
                </div>
              </div>
            </a>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-md border border-mocha/10 bg-cream-light p-6 transition hover:border-gold hover:shadow"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-beige text-mocha group-hover:bg-gold group-hover:text-cream">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.6 14.3c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.8-.7-1.4-1.7-1.6-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.4-.2.3-.9.9-.9 2.2 0 1.3.9 2.5 1.1 2.7.1.2 1.9 2.9 4.6 4.1.6.3 1.1.4 1.5.5.6.2 1.2.2 1.6.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-mocha/60">WhatsApp</p>
                  <p className="font-serif text-xl text-espresso">Chat now</p>
                </div>
              </div>
            </a>

            <div className="rounded-md border border-mocha/10 bg-beige/40 p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Hours</p>
              <ul className="mt-3 space-y-1.5 text-sm text-mocha/80">
                <li className="flex justify-between"><span>Mon – Sat</span><span>9:00 – 20:00</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-mocha/50">Closed</span></li>
              </ul>
              <p className="mt-4 text-xs leading-relaxed text-mocha/60">
                Please book at least 24 hours in advance for color services.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-2">
            <div className="rounded-md border border-mocha/10 bg-cream-light p-8 md:p-10">
              <h2 className="font-serif text-3xl text-espresso md:text-4xl">
                Request your appointment
              </h2>
              <p className="mt-2 text-sm text-mocha/70">
                Fill in the form and I'll confirm via WhatsApp.
              </p>

              <form onSubmit={submit} className="mt-8 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Full name *</label>
                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Phone *</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Email</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Service</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.name}>{s.name}</option>
                    ))}
                    <option>I'm not sure — please advise</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Preferred date *</label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Preferred time *</label>
                  <select
                    required
                    value={form.time}
                    onChange={(e) => setForm({ ...form, time: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                  >
                    <option value="">Select…</option>
                    {times.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Notes (optional)</label>
                  <textarea
                    rows={4}
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    className="w-full rounded-sm border border-mocha/20 bg-cream px-4 py-3 text-sm outline-none focus:border-gold"
                    placeholder="Anything I should know about your hair?"
                  />
                </div>
                <div className="md:col-span-2 flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    className="rounded-full bg-espresso px-8 py-4 text-xs uppercase tracking-[0.25em] text-cream transition hover:bg-gold"
                  >
                    Send request via WhatsApp
                  </button>
                  {sent && (
                    <p className="text-sm text-gold">✓ Opening WhatsApp — please tap send.</p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
