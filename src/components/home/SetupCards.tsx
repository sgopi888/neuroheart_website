export default function SetupCards() {
  return (
    <section className="px-6 py-[120px]" id="get-started">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="mb-[60px] text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            🛡️ Privacy-First
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Choose Your Setup
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Run encrypted in the cloud or keep everything on your device. Your
            choice, always.
          </p>
        </div>

        <div className="mx-auto grid max-w-[800px] grid-cols-1 gap-6 md:grid-cols-2">
          {/* Cloud card */}
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-9 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow">
            <div className="mb-4 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
              ☁️ Cloud
            </div>
            <h3 className="mb-1.5 text-[22px] font-extrabold">
              Sign In &amp; Go
            </h3>
            <p className="mb-5 text-sm text-text-secondary">
              No install needed. Access from any device, anytime.
            </p>
            {[
              { label: "Setup", value: "Instant" },
              { label: "Privacy", value: "End-to-End Encrypted" },
              { label: "Access", value: "Any device" },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className={`flex justify-between py-2.5 text-[13px] ${
                  i < arr.length - 1 ? "border-b border-border-default" : "mb-5"
                }`}
              >
                <span className="text-text-muted">{row.label}</span>
                <span className="font-semibold text-text-primary">
                  {row.value}
                </span>
              </div>
            ))}
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-full bg-accent py-[13px] text-[15px] font-semibold text-white shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-light"
            >
              Start in Cloud
            </a>
          </div>

          {/* Local card */}
          <div className="rounded-[var(--radius-lg)] border border-border-default bg-bg-card p-9 transition-all duration-300 hover:-translate-y-1 hover:border-border-glow">
            <div className="mb-4 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
              💻 Local
            </div>
            <h3 className="mb-1.5 text-[22px] font-extrabold">
              Download &amp; Own
            </h3>
            <p className="mb-5 text-sm text-text-secondary">
              Runs on your machine. Zero data leaves your device.
            </p>
            {[
              { label: "Setup", value: "One-click install" },
              { label: "Privacy", value: "Complete — on device" },
              { label: "Access", value: "Your computer" },
            ].map((row, i, arr) => (
              <div
                key={row.label}
                className={`flex justify-between py-2.5 text-[13px] ${
                  i < arr.length - 1 ? "border-b border-border-default" : "mb-5"
                }`}
              >
                <span className="text-text-muted">{row.label}</span>
                <span className="font-semibold text-text-primary">
                  {row.value}
                </span>
              </div>
            ))}
            <a
              href="#"
              className="flex w-full items-center justify-center rounded-full border border-border-default bg-white/[0.06] py-[13px] text-[15px] font-semibold text-text-primary backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-border-glow hover:bg-white/10"
            >
              Download for Mac
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
