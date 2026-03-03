import Image from "next/image";

const neuroheartItems = [
  "Empathy-tuned responses",
  "Mood & pattern tracking",
  "Guided therapeutic exercises",
  "Therapist-shareable reports",
  "Crisis routing built-in",
  "Works offline (local mode)",
  "Privacy-first architecture",
];

const genericItems = [
  "Generic, non-empathetic tone",
  "No mood or wellness tracking",
  "No guided wellness exercises",
  "No clinical export options",
  "No crisis support system",
  "Cloud-only, always online",
  "Data used for training",
];

export default function Comparison() {
  return (
    <section className="px-6 py-[120px]" id="comparison">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="mb-[60px] text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Comparison
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            NeuroHeart AI{" "}
            <span className="text-text-muted">vs</span> Generic Chatbots
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Purpose-built for mental wellness, not just conversation.
          </p>
        </div>

        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
          {/* NeuroHeart column */}
          <div className="relative rounded-[var(--radius-lg)] border border-accent bg-bg-card px-7 py-9 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3.5 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-white">
              RECOMMENDED
            </div>
            <div className="mb-6 flex items-center gap-2 text-xl font-extrabold">
              <Image src="/neuroheart-logo.png" alt="NeuroHeart AI" width={24} height={24} /> NeuroHeart AI
            </div>
            {neuroheartItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 border-b border-border-default py-3 text-sm text-text-secondary last:border-b-0"
              >
                <span className="text-base text-success">✓</span>
                {item}
              </div>
            ))}
          </div>

          {/* Generic column */}
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card px-7 py-9">
            <div className="mb-6 flex items-center gap-2 text-xl font-extrabold text-text-secondary">
              💬 Generic AI Chatbots
            </div>
            {genericItems.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 border-b border-border-default py-3 text-sm text-text-secondary last:border-b-0"
              >
                <span className="text-base text-danger/60">✕</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
