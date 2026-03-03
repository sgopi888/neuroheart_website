import FadeIn from "@/components/animations/FadeIn";
import StaggerChildren, {
  StaggerItem,
} from "@/components/animations/StaggerChildren";

const steps = [
  {
    number: "01",
    icon: "⬇️",
    title: "Download NeuroHeartSync",
    desc: "Get the app from the App Store. Sign in with Apple — one tap, no passwords.",
  },
  {
    number: "02",
    icon: "⌚",
    title: "Connect Your Apple Watch",
    desc: "Grant HealthKit access. NeuroHeart starts reading your heart rate, HRV, steps, and sleep immediately.",
  },
  {
    number: "03",
    icon: "🧠",
    title: "Let AI Understand Your Stress",
    desc: "Within hours, NeuroHeart maps your stress patterns and begins generating personalized meditations, music, and insights.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="border-y border-border-default bg-bg-secondary px-6 py-[120px]"
      id="how-it-works"
    >
      <div className="mx-auto max-w-[var(--max-width)]">
        <FadeIn>
          <div className="mb-[50px] text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
              ✦ Get Started
            </span>
            <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
              From Zero to Zen — Fast
            </h2>
            <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
              Get started in under 2 minutes. Download, connect, breathe.
            </p>
          </div>
        </FadeIn>

        <StaggerChildren
          staggerDelay={0.15}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {steps.map((step) => (
            <StaggerItem key={step.number}>
              <div className="relative rounded-[var(--radius-lg)] border border-border-default bg-bg-card px-7 pt-9 pb-9 text-center transition-all duration-300 hover:-translate-y-1 hover:border-border-glow">
                <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-accent text-sm font-bold text-white shadow-[0_0_15px_var(--accent-glow)]">
                  {step.number}
                </div>
                <div className="mt-4 mb-5 text-4xl">{step.icon}</div>
                <h3 className="mb-2 text-[17px] font-bold text-text-primary">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
