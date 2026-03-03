import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-border-default px-6 py-10">
      <div className="mx-auto flex max-w-[var(--max-width)] flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2 text-base font-bold">
          <Image src="/neuroheart-logo.png" alt="NeuroHeart AI" width={24} height={24} className="animate-heartbeat" />
          Neuro
          <span className="gradient-text">Heart</span> AI
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#" className="text-[13px] text-text-muted transition-colors duration-300 hover:text-text-primary">
            Terms of Use
          </a>
          <a href="#" className="text-[13px] text-text-muted transition-colors duration-300 hover:text-text-primary">
            Privacy Policy
          </a>
          <a
            href="mailto:hello@neuroheart.ai"
            className="text-[13px] text-text-muted transition-colors duration-300 hover:text-text-primary"
          >
            hello@neuroheart.ai
          </a>
        </div>

        {/* Socials */}
        <div className="flex gap-3">
          {[
            { icon: "⌨", title: "GitHub" },
            { icon: "𝕏", title: "X / Twitter" },
            { icon: "💬", title: "Discord" },
            { icon: "📷", title: "Instagram" },
          ].map((s) => (
            <a
              key={s.title}
              href="#"
              title={s.title}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border-default bg-white/[0.04] text-[15px] transition-all duration-300 hover:border-border-glow hover:bg-accent/10"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-xs text-text-muted">
          NeuroHeart AI © 2026. Privacy-first. GDPR &amp; CCPA compliant.
        </div>
      </div>
    </footer>
  );
}
