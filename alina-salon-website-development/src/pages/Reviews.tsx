import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { INITIAL_REVIEWS } from "../data/site";

type Review = {
  name: string;
  rating: number;
  date: string;
  comment: string;
};

const STORAGE_KEY = "alina-salon-reviews";

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>(INITIAL_REVIEWS);
  const [form, setForm] = useState({ name: "", rating: 5, comment: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as Review[];
        setReviews([...parsed, ...INITIAL_REVIEWS]);
      }
    } catch {}
  }, []);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.comment.trim()) return;
    const newReview: Review = {
      name: form.name.trim(),
      rating: form.rating,
      date: "Just now",
      comment: form.comment.trim(),
    };
    const userReviews = reviews.filter((r) => r.date === "Just now" || !INITIAL_REVIEWS.find((ir) => ir.name === r.name));
    const updated = [newReview, ...userReviews];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    setReviews([newReview, ...reviews]);
    setForm({ name: "", rating: 5, comment: "" });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  const avg = (
    reviews.reduce((s, r) => s + r.rating, 0) / reviews.length
  ).toFixed(1);

  return (
    <>
      <PageHeader
        eyebrow="Kind Words"
        title="Reviews"
        subtitle="Twenty years of careful work, told in the words of the women who sat in my chair."
      />

      <section className="mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-20">
        {/* Rating summary */}
        <div className="grid gap-8 rounded-md border border-mocha/10 bg-cream-light p-10 md:grid-cols-3 md:gap-10">
          <div className="md:col-span-1 md:border-r md:border-mocha/10 md:pr-10">
            <p className="font-serif text-7xl text-espresso">{avg}</p>
            <div className="mt-2 text-2xl text-gold-light">★★★★★</div>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-mocha/60">
              Based on {reviews.length} reviews
            </p>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-espresso md:text-3xl">
              "Every star, earned in person."
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mocha/70">
              I read every review — and answer almost all of them. If we've worked together,
              I'd love to hear your thoughts. Your honest words help other women find me.
            </p>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {reviews.map((r, i) => (
            <article
              key={i}
              className="rounded-md border border-mocha/10 bg-cream-light p-7 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-beige font-serif text-lg text-espresso">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-espresso">{r.name}</p>
                    <p className="text-xs text-mocha/50">{r.date}</p>
                  </div>
                </div>
                <div className="text-gold-light">{"★".repeat(r.rating)}</div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-mocha/80 italic">
                "{r.comment}"
              </p>
            </article>
          ))}
        </div>

        {/* Submit form */}
        <div className="mt-20 rounded-md border border-mocha/10 bg-beige/30 p-8 md:p-12">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">— Share your experience</p>
            <h3 className="mt-3 font-serif text-3xl text-espresso md:text-4xl">
              Leave a review
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mocha/70">
              Took the chair recently? I'd love to hear how it went.
            </p>
          </div>

          <form onSubmit={submit} className="mt-8 grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Your name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="w-full rounded-sm border border-mocha/20 bg-cream-light px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Maria S."
              />
            </div>
            <div>
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Rating</label>
              <div className="flex items-center gap-2 rounded-sm border border-mocha/20 bg-cream-light px-4 py-3">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setForm({ ...form, rating: n })}
                    className={`text-2xl transition ${
                      n <= form.rating ? "text-gold" : "text-mocha/20"
                    } hover:scale-110`}
                  >
                    ★
                  </button>
                ))}
              </div>
            </div>
            <div className="md:col-span-2">
              <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-mocha/70">Your review</label>
              <textarea
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                required
                rows={5}
                className="w-full rounded-sm border border-mocha/20 bg-cream-light px-4 py-3 text-sm outline-none focus:border-gold"
                placeholder="Tell us about your visit…"
              />
            </div>
            <div className="md:col-span-2 flex flex-wrap items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-espresso px-7 py-3.5 text-xs uppercase tracking-[0.25em] text-cream transition hover:bg-gold"
              >
                Submit review
              </button>
              {submitted && (
                <p className="text-sm text-gold">✓ Thank you — your review has been added.</p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
