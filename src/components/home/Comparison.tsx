import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

type FeatureSupport = "yes" | "no" | "partial";

interface Competitor {
  name: string;
  price: string;
  highlight?: boolean;
  logo?: string;
}

interface FeatureRow {
  label: string;
  values: FeatureSupport[];
}

const competitors: Competitor[] = [
  { name: "NeuroHeart", price: "Free (Credits)", highlight: true, logo: "/neuroheart-logo.png" },
  { name: "Calm", price: "$15/mo" },
  { name: "Headspace", price: "$13/mo" },
  { name: "Whoop", price: "$30/mo" },
  { name: "Apollo Neuro", price: "$40/mo" },
];

const features: FeatureRow[] = [
  {
    label: "HRV Biofeedback",
    values: ["yes", "no", "no", "yes", "yes"],
  },
  {
    label: "AI Conversation",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Live Music Generation",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Peer-Reviewed Research",
    values: ["yes", "no", "no", "partial", "partial"],
  },
  {
    label: "Personalized Meditation",
    values: ["yes", "no", "no", "no", "no"],
  },
  {
    label: "Real-Time Stress Measurement",
    values: ["yes", "no", "no", "partial", "partial"],
  },
];

function SupportIndicator({ value }: { value: FeatureSupport }) {
  if (value === "yes") {
    return <span className="text-lg text-success">&#10003;</span>;
  }
  if (value === "no") {
    return <span className="text-lg text-danger">&#10005;</span>;
  }
  return <span className="text-lg text-warning">~</span>;
}

export default function Comparison() {
  return (
    <section className="px-6 py-[120px]" id="comparison">
      <div className="mx-auto max-w-[var(--max-width)]">
        {/* Header */}
        <FadeIn>
          <div className="mb-[60px] text-center">
            <span className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-accent/15 bg-accent/[0.08] px-3.5 py-1.5 text-xs font-bold uppercase tracking-[1.5px] text-accent-light">
              &#10022; Comparison
            </span>
            <h2 className="text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.1] tracking-[-1px]">
              Why NeuroHeart.AI
            </h2>
            <p className="mx-auto mt-4 max-w-[640px] text-[17px] leading-relaxed text-text-secondary">
              The only app that combines HRV biofeedback, AI meditation, and
              live music &mdash; backed by peer-reviewed research.
            </p>
          </div>
        </FadeIn>

        {/* Table */}
        <FadeIn delay={0.15}>
          <div className="-mx-6 overflow-x-auto px-6 pb-2 md:mx-0 md:px-0">
            <table className="mx-auto w-full min-w-[720px] max-w-[960px] border-separate border-spacing-0">
              {/* Column headers */}
              <thead>
                <tr>
                  {/* Empty corner cell */}
                  <th className="w-[200px] bg-transparent p-0" />

                  {competitors.map((c) => (
                    <th
                      key={c.name}
                      className={`relative p-0 text-center ${
                        c.highlight ? "z-10" : ""
                      }`}
                    >
                      <div
                        className={`mx-auto flex flex-col items-center gap-2 rounded-t-[var(--radius-lg)] px-3 pb-4 pt-5 ${
                          c.highlight
                            ? "border border-b-0 border-accent bg-accent/[0.06] shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                            : "border border-b-0 border-border-default bg-bg-card"
                        }`}
                      >
                        {c.highlight && (
                          <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-white">
                            BEST VALUE
                          </span>
                        )}
                        {c.logo ? (
                          <Image
                            src={c.logo}
                            alt={c.name}
                            width={28}
                            height={28}
                          />
                        ) : null}
                        <span
                          className={`text-sm font-bold ${
                            c.highlight ? "text-accent-light" : "text-text-primary"
                          }`}
                        >
                          {c.name}
                        </span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Feature rows */}
              <tbody>
                {features.map((feature, rowIdx) => (
                  <tr key={feature.label}>
                    {/* Feature label */}
                    <td className="border-b border-border-default py-3.5 pr-4 text-sm font-medium text-text-secondary">
                      {feature.label}
                    </td>

                    {feature.values.map((val, colIdx) => {
                      const c = competitors[colIdx];
                      const isLast = rowIdx === features.length - 1;
                      return (
                        <td
                          key={c.name}
                          className={`text-center ${
                            c.highlight
                              ? "border-x border-accent bg-accent/[0.06]"
                              : "border-x border-border-default bg-bg-card"
                          } ${
                            !isLast
                              ? "border-b border-b-border-default"
                              : ""
                          } py-3.5`}
                        >
                          <SupportIndicator value={val} />
                        </td>
                      );
                    })}
                  </tr>
                ))}

                {/* Cost row */}
                <tr>
                  <td className="pt-3.5 pr-4 text-sm font-bold text-text-primary">
                    Cost
                  </td>

                  {competitors.map((c) => (
                    <td
                      key={c.name}
                      className={`text-center ${
                        c.highlight
                          ? "rounded-b-[var(--radius-lg)] border border-t-0 border-accent bg-accent/[0.06]"
                          : "rounded-b-[var(--radius-lg)] border border-t-0 border-border-default bg-bg-card"
                      } pb-5 pt-3.5`}
                    >
                      <span
                        className={`text-sm font-extrabold ${
                          c.highlight ? "text-accent-light" : "text-text-primary"
                        }`}
                      >
                        {c.price}
                      </span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
