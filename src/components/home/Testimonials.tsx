const testimonials = [
  {
    initial: "S",
    name: "Sarah M.",
    handle: "@sarahm_wellness",
    text: "NeuroHeart helped me notice I always crash on Wednesdays. Now I prep for it. Small insight, huge impact on my week.",
  },
  {
    initial: "J",
    name: "James K.",
    handle: "@jamesk_dev",
    text: "As a dev with burnout, I needed something that wasn't another to-do app. NeuroHeart actually asks how I'm feeling and helps me decompress. Game changer.",
  },
  {
    initial: "A",
    name: "Aisha R.",
    handle: "@aisha_creates",
    text: "I share my NeuroHeart reports with my therapist every session now. She said it's the most useful thing a client has ever brought in.",
  },
  {
    initial: "M",
    name: "Marcus L.",
    handle: "@marcus_fit",
    text: "The breathing exercises alone are worth it. NeuroHeart knows when to suggest them — usually right before I realize I need one.",
  },
  {
    initial: "L",
    name: "Luna P.",
    handle: "@luna_peace",
    text: "I tried 6 mental health apps before this. NeuroHeart is the only one that felt like it actually understood what I was going through.",
  },
  {
    initial: "D",
    name: "David W.",
    handle: "@david_writes",
    text: "Running it locally means my journal entries never leave my machine. For someone with trust issues around data, that's everything.",
  },
];

function TestimonialCard({
  t,
}: {
  t: (typeof testimonials)[number];
}) {
  return (
    <div className="w-[360px] flex-shrink-0 rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-7 transition-all duration-300 hover:border-border-glow">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-pink text-base font-bold text-white">
          {t.initial}
        </div>
        <div>
          <div className="text-[15px] font-bold">{t.name}</div>
          <div className="text-[13px] text-text-muted">{t.handle}</div>
        </div>
      </div>
      <div className="text-sm leading-relaxed text-text-secondary">
        {t.text}
      </div>
      <div className="mt-3.5 text-sm tracking-[2px] text-[#fbbf24]">
        ★★★★★
      </div>
    </div>
  );
}

export default function Testimonials() {
  // Duplicate for seamless infinite loop
  const allCards = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden border-y border-border-default bg-bg-secondary px-6 py-[120px]">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Loved by Users
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            People Love NeuroHeart
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Real stories from real users who found their balance.
          </p>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-bg-secondary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-bg-secondary to-transparent" />
        <div className="animate-marquee flex w-max gap-5 hover:[animation-play-state:paused]">
          {allCards.map((t, i) => (
            <TestimonialCard key={`${t.handle}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
