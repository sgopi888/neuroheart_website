const integrations = [
  { icon: "📅", name: "Google Calendar" },
  { icon: "💌", name: "Gmail" },
  { icon: "⌚", name: "Apple Health" },
  { icon: "💤", name: "Oura Ring" },
  { icon: "📓", name: "Notion" },
  { icon: "💬", name: "Slack" },
  { icon: "🏃", name: "Fitbit" },
  { icon: "🧭", name: "Garmin" },
  { icon: "📊", name: "Google Sheets" },
  { icon: "✈️", name: "Telegram" },
  { icon: "🎵", name: "Spotify" },
  { icon: "📱", name: "WhatsApp" },
  { icon: "🔒", name: "Signal" },
];

export default function Integrations() {
  // Duplicate for seamless loop
  const allItems = [...integrations, ...integrations];

  return (
    <section className="overflow-hidden border-y border-border-default bg-bg-secondary px-6 py-[100px] text-center">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="gradient-text text-[clamp(48px,7vw,80px)] font-extrabold leading-none">
          30+
        </div>
        <div className="mt-2 mb-10 text-lg text-text-secondary">
          Integrations &amp; Tools Connected
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[120px] bg-gradient-to-r from-bg-secondary to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[120px] bg-gradient-to-l from-bg-secondary to-transparent" />
        <div className="animate-marquee-fast flex w-max gap-6 hover:[animation-play-state:paused]">
          {allItems.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="flex flex-shrink-0 items-center gap-2.5 rounded-xl border border-border-default bg-bg-card px-6 py-3.5 text-sm font-semibold text-text-secondary transition-all duration-300 hover:border-border-glow hover:text-text-primary"
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
