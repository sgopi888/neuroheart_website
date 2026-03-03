import Image from "next/image";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-[120px] text-center">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,rgba(236,72,153,0.05)_50%,transparent_70%)]" />

      <div className="relative mx-auto max-w-[var(--max-width)]">
        <div className="mb-6 inline-block animate-heartbeat">
          <Image src="/neuroheart-logo.png" alt="NeuroHeart AI" width={80} height={80} />
        </div>
        <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
          Start Your Wellness Journey
        </h2>
        <p className="mx-auto mt-4 mb-8 max-w-[480px] text-[17px] leading-relaxed text-text-secondary">
          NeuroHeart AI is ready when you are. Free to start, private by design,
          and built to grow with you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-[13px] text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light hover:shadow-[0_0_30px_var(--accent-glow),0_4px_20px_rgba(139,92,246,0.3)]"
          >
            <Image src="/neuroheart-logo.png" alt="" width={20} height={20} /> Try in Browser
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-border-default bg-white/[0.06] px-7 py-[13px] text-[15px] font-semibold text-text-primary backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-glow hover:bg-white/10"
          >
            ⬇ Download for Mac
          </a>
        </div>
      </div>
    </section>
  );
}
