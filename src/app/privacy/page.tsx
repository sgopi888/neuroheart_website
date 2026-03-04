import type { Metadata } from "next";
import LegalPage from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NeuroHeart AI.",
};

const intro = [
  "NeuroHeart AI respects your privacy and is committed to protecting your personal information.",
];

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: ["We may collect:"],
    bullets: [
      "Name and email address.",
      "Account credentials.",
      "Usage and interaction data.",
      "Device information.",
      "Wellness data such as HRV metrics when integrated with supported devices.",
    ],
  },
  {
    title: "2. How We Use Information",
    paragraphs: ["Your information may be used to:"],
    bullets: [
      "Provide and improve the Services.",
      "Personalize meditation recommendations.",
      "Analyze platform performance.",
      "Communicate service updates or support responses.",
    ],
  },
  {
    title: "3. Data Sharing",
    paragraphs: ["We do not sell personal data.", "Information may be shared with:"],
    bullets: [
      "Service providers that help operate the platform.",
      "Analytics providers.",
      "Legal authorities when required by law.",
    ],
  },
  {
    title: "4. Data Security",
    paragraphs: [
      "We implement reasonable technical and organizational safeguards to protect user information, including encryption and access controls.",
    ],
  },
  {
    title: "5. Your Privacy Rights",
    paragraphs: [
      "Depending on your location, you may have the right to:",
    ],
    bullets: [
      "Access personal data.",
      "Request correction.",
      "Request deletion.",
      "Opt out of certain data processing.",
    ],
  },
  {
    title: "6. Data Retention",
    paragraphs: [
      "We retain information only as long as necessary to provide services or comply with legal obligations.",
    ],
  },
  {
    title: "7. Children",
    paragraphs: ["The Services are not intended for children under 13."],
  },
  {
    title: "8. Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time.",
      "Updates will be posted on this page with a revised effective date.",
    ],
  },
  {
    title: "9. Contact",
    paragraphs: ["For privacy questions or requests:"],
    contact: "ai@neuroheart.ai",
  },
] as const;

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      effectiveDate="Effective Date: March 1 2025"
      intro={intro}
      sections={sections}
    />
  );
}
