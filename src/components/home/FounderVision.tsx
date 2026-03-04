"use client";

import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, { StaggerItem } from "@/components/animations/StaggerChildren";

const credentials = [
  {
    icon: "🏆",
    title: "Generative AI Visionary",
    desc: "Applying the power of generative AI to address complex challenges in mental health, education, and the creative arts.",
  },
  {
    icon: "🔬",
    title: "Interdisciplinary Researcher",
    desc: "Published papers at IEEE, FIE, and ASEE conferences. Background spanning engineering, computer science, business, and metaphysics.",
  },
  {
    icon: "💡",
    title: "Practical Innovator",
    desc: "INTEL AI Llama 2 Hackathon winner. Prompt Engineer at a premium investment bank. Designs optimized data retrieval for precise, adaptive AI responses.",
  },
];

export default function FounderVision() {
  return (
    <section
      className="border-y border-border-default bg-bg-secondary px-6 py-[120px]"
      id="founder"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn className="mb-16 text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            👤 Founder
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Founder&apos;s Vision
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Meet the mind behind NeuroHeart.ai
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-[1000px] grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Left: Profile */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-[var(--radius-lg)] border border-accent/20 bg-bg-card p-8 lg:p-10">
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-pink text-3xl font-bold text-white">
                SG
              </div>
              <h3 className="text-2xl font-extrabold">Sreekanth Gopi</h3>
              <p className="mt-1 text-sm font-semibold text-accent-light">
                Founder &amp; CEO, NeuroHeart.ai
              </p>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                A Generative AI and RAG Data Scientist who combines expertise in
                AI research, biofeedback, and metaphysics to transform mental
                wellness through technology. Seasoned researcher with extensive
                experience in AI development and a holistic approach to
                well-being.
              </p>
            </div>
          </FadeIn>

          {/* Right: Credentials */}
          <StaggerChildren className="flex flex-col gap-4 lg:col-span-3">
            {credentials.map((cred) => (
              <StaggerItem key={cred.title}>
                <div className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-bg-card-hover">
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-accent/15 bg-accent/10 text-xl">
                      {cred.icon}
                    </div>
                    <div>
                      <h4 className="text-[15px] font-bold">{cred.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                        {cred.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
