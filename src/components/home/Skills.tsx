const skills = [
  {
    icon: "💬",
    title: "Emotion Journal",
    desc: "Voice or text journaling with AI-powered sentiment analysis and reflection prompts.",
  },
  {
    icon: "🧘",
    title: "Mindfulness Coach",
    desc: "Guided meditations, body scans, and grounding exercises tailored to your current mood.",
  },
  {
    icon: "😴",
    title: "Sleep Optimizer",
    desc: "Smart wind-down routines, sleep stories, and morning briefings based on your rest quality.",
  },
  {
    icon: "📈",
    title: "Mood Analytics",
    desc: "Weekly and monthly dashboards showing emotional trends, triggers, and progress.",
  },
  {
    icon: "🫂",
    title: "CBT Companion",
    desc: "Interactive cognitive behavioral therapy exercises for reframing negative thought patterns.",
  },
  {
    icon: "🏥",
    title: "Therapist Bridge",
    desc: "Export PDF reports of your mood data, journal entries, and progress for your therapist.",
  },
  {
    icon: "🆘",
    title: "Safety Net",
    desc: "Intelligent crisis detection with immediate routing to hotlines and emergency contacts.",
  },
  {
    icon: "➕",
    title: "More Coming...",
    desc: "ADHD focus tools, grief support, social anxiety coaching, and community skills in development.",
  },
];

export default function Skills() {
  return (
    <section className="px-6 py-[120px]">
      <div className="mx-auto max-w-[var(--max-width)]">
        <div className="mb-[60px] text-center">
          <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
            ✦ Capabilities
          </span>
          <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
            Personalized Wellness Skills
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[17px] leading-relaxed text-text-secondary">
            Core skills come pre-loaded. Unlock more from the marketplace as
            your needs grow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="rounded-[var(--radius-md)] border border-border-default bg-bg-card p-6 transition-all duration-300 hover:-translate-y-[3px] hover:border-border-glow"
            >
              <div className="mb-3 text-2xl">{skill.icon}</div>
              <h4 className="mb-1.5 text-sm font-bold">{skill.title}</h4>
              <p className="text-xs leading-relaxed text-text-secondary">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
