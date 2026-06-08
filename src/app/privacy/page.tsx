import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for NeuroHeart AI, including Apple Health, Apple Watch, AI processing, calendar, account, and data practices.",
  alternates: {
    canonical: "/privacy",
  },
};

const intro = [
  "NeuroHeart AI (\"NeuroHeart AI,\" \"we,\" \"our,\" or \"us\") is a wellness and mindfulness platform designed to help users improve stress awareness, recovery, emotional well-being, mindfulness practices, and personal wellness habits.",
  "NeuroHeart AI is not a medical device and does not provide medical advice, diagnosis, treatment, or healthcare services. Information provided through the application is intended solely for wellness, mindfulness, self-reflection, educational, and informational purposes.",
  "By using NeuroHeart AI, you agree to the practices described in this Privacy Policy.",
];

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: ["When you create an account, we may collect:"],
    bullets: [
      "Name, email address, authentication information, account preferences, and subscription information.",
      "Heart rate and beat-interval measurements obtained with your permission from Apple HealthKit and Apple Watch.",
      "Heart rate variability (HRV) metrics calculated by NeuroHeart AI's backend from available heart-rate or beat-interval data.",
      "Recovery and stress indicators, wellness assessments, mindfulness activity data, sleep-related wellness metrics, and HealthKit-authorized data.",
      "Chat conversations, journal entries, reflections and notes, goals and wellness plans, and feedback and support requests.",
      "Calendar events when you connect calendar services, used solely to provide wellness-related scheduling, reminders, and user-requested features.",
      "Device type, operating system version, application version, diagnostic information, crash reports, and security logs.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: ["We use information to:"],
    bullets: [
      "Provide wellness features.",
      "Generate personalized wellness insights.",
      "Analyze stress and recovery trends.",
      "Deliver mindfulness recommendations.",
      "Improve application performance.",
      "Detect fraud, abuse, and security incidents.",
      "Provide customer support.",
      "Comply with legal obligations.",
    ],
  },
  {
    title: "3. We Do Not Sell Your Data",
    paragraphs: [
      "We do not sell personal information.",
      "We do not sell health information.",
      "We do not sell wellness information.",
    ],
  },
  {
    title: "4. AI Processing",
    paragraphs: [
      "NeuroHeart AI may utilize third-party artificial intelligence service providers to generate conversational responses and wellness guidance. These providers currently include, but are not limited to:",
    ],
    bullets: [
      "OpenAI — processes chat messages and wellness-related text to generate conversational responses.",
      "ElevenLabs — processes text to generate voice (audio) responses.",
      "LangSmith — receives application and AI interaction logs used to monitor, debug, and improve service quality.",
    ],
    afterBulletsParagraphs: [
      "We may add, remove, or change providers over time; this list describes the categories of providers in use and representative examples.",
      "Information submitted to AI providers is transmitted solely for generating requested responses.",
      "Where available, NeuroHeart AI enables provider privacy controls intended to prevent customer content from being used to train AI models.",
      "NeuroHeart AI does not intentionally provide HRV history, heart rate history, HealthKit records, Apple Watch wellness data, calendar data, or long-term wellness records to AI providers unless required to deliver a feature specifically requested by the user.",
    ],
  },
  {
    title: "5. HealthKit and Apple Watch Data",
    paragraphs: [
      "If authorized by the user, NeuroHeart AI may access information from Apple HealthKit and Apple Watch. HealthKit and Apple Watch data:",
    ],
    bullets: [
      "Are used only to provide wellness functionality requested by the user.",
      "Are not sold to advertisers.",
      "Are not used for advertising purposes.",
      "Are not used for third-party marketing.",
      "Are not shared with data brokers.",
    ],
    afterBulletsParagraphs: [
      "Health-related information is stored within NeuroHeart AI's secured infrastructure and protected through industry-standard administrative, technical, and organizational safeguards.",
    ],
  },
  {
    title: "6. Data Sharing",
    paragraphs: [
      "We may share information only with trusted vendors who assist with cloud hosting and infrastructure (including model-hosting platforms such as Hugging Face, which host NeuroHeart AI's own voice-generation model on our behalf), authentication, payment processing, infrastructure operations, customer support, and security monitoring.",
      "We may disclose information when required by applicable law, court order, legal process, government request, or for the protection of rights and safety.",
      "Information may be transferred as part of a merger, acquisition, restructuring, or sale of assets.",
      "We do not sell user health data.",
      "We do not sell wellness data.",
    ],
  },
  {
    title: "7. Security",
    paragraphs: [
      "NeuroHeart AI implements reasonable administrative, technical, and organizational safeguards to protect information against unauthorized access, disclosure, alteration, and destruction.",
      "Access to personal information is restricted to authorized personnel and trusted service providers with legitimate operational responsibilities and confidentiality obligations.",
      "No system can guarantee absolute security; however, we continuously work to maintain appropriate protections.",
    ],
  },
  {
    title: "8. Account Deletion and Data Retention",
    paragraphs: [
      "Users may delete their account directly within the NeuroHeart AI application. Upon account deletion, the following are removed from active systems:",
    ],
    bullets: [
      "Account information",
      "Chat history",
      "Journal entries",
      "HRV history",
      "Heart rate history",
      "Wellness records",
      "Calendar integration data",
      "Apple Watch and HealthKit-derived data",
    ],
    afterBulletsParagraphs: [
      "Residual encrypted backups may remain for up to thirty (30) days before automatic deletion through normal backup rotation procedures.",
      "NeuroHeart AI may retain limited security, audit, fraud-prevention, abuse-investigation, and legal-compliance records for up to one hundred eighty (180) days after account deletion when reasonably necessary to maintain platform security, investigate abuse, prevent fraud, enforce agreements, comply with legal obligations, or defend legal claims.",
      "Retained records are minimized and generally do not include deleted wellness content, health metrics, journal entries, or chat histories unless legally required.",
    ],
  },
  {
    title: "9. Your Rights",
    paragraphs: [
      "Subject to applicable law, users may:",
    ],
    bullets: [
      "Access their information.",
      "Correct inaccurate information.",
      "Delete their account.",
      "Request information about stored data.",
      "Withdraw permissions previously granted.",
      "Request export of available account information.",
    ],
    afterBulletsParagraphs: [
      "Requests may be submitted through the application or by contacting us.",
    ],
  },
  {
    title: "10. Children's Privacy",
    paragraphs: [
      "NeuroHeart AI is not intended for children under the age required by applicable law.",
      "We do not knowingly collect personal information from children without appropriate authorization.",
    ],
  },
  {
    title: "11. International Users",
    paragraphs: [
      "Information may be processed and stored in countries different from your country of residence.",
      "Where required, we implement appropriate safeguards for cross-border transfers.",
    ],
  },
  {
    title: "12. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy periodically.",
      "Material changes will be communicated through the application or other appropriate means.",
      "Continued use of NeuroHeart AI following updates constitutes acceptance of the revised policy.",
    ],
  },
  {
    title: "13. Contact Information",
    paragraphs: ["For privacy-related requests, please contact us at:"],
    contact: "ai@neuroheart.ai",
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="Last Updated: June 2026"
      intro={intro}
      sections={sections}
    />
  );
}
