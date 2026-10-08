import type { Metadata } from "next";
import SmsLegalPage from "@/components/legal/SmsLegalPage";

export const metadata: Metadata = {
  title: {
    absolute: "SMS Privacy Policy",
  },
  description:
    "SMS Privacy Policy for NeuroHeart AI Labs LLC covering text-message data collection, use, consent, and opt-out rights.",
  alternates: {
    canonical: "/sms-privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const intro = [
  "This SMS Privacy Policy explains how NeuroHeart AI Labs LLC collects, uses, and protects information related to text messaging services we provide, including messages sent on behalf of restaurants or businesses using our customer care and restaurant communication services.",
  "By opting in to receive SMS messages from us, you agree to the practices described in this SMS Privacy Policy.",
] as const;

const sections = [
  {
    title: "1. Information We Collect",
    paragraphs: ["When you engage with our SMS program, we may collect:"],
    bullets: [
      "Your mobile phone number.",
      "Your name or business inquiry details if you provide them.",
      "The content of messages you send to us and our replies to you.",
      "Opt-in, HELP, and STOP requests, delivery confirmations, and related messaging records.",
      "Basic technical and carrier-related information needed to send and receive messages.",
    ],
  },
  {
    title: "2. How We Use SMS Information",
    paragraphs: ["We use SMS-related information to:"],
    bullets: [
      "Respond to customer care requests and restaurant-related questions.",
      "Provide ordering assistance, catering follow-up, callback coordination, and hours or location information.",
      "Send customer support responses and requested follow-up messages.",
      "Maintain records of consent, opt-out requests, and support interactions.",
      "Operate, monitor, and improve the reliability and security of our messaging program.",
    ],
  },
  {
    title: "3. Consent and Opt-In Data",
    paragraphs: [
      "We retain records of consent when you provide verbal consent during a call, text an opt-in keyword such as START, ORDER, CATERING, or HELP, or otherwise request SMS follow-up.",
      "Consent to receive SMS messages is not a condition of purchase.",
    ],
  },
  {
    title: "4. Sharing of Information",
    paragraphs: [
      "We may share SMS-related information with service providers that help us deliver messaging services, customer care workflows, and related business operations.",
      "We do not sell, rent, or share mobile phone numbers or SMS opt-in consent information with third parties or affiliates for marketing or promotional purposes.",
      "We may disclose information if required by law, legal process, or to protect rights, safety, and security.",
    ],
  },
  {
    title: "5. Data Retention",
    paragraphs: [
      "We retain SMS records, including consent and opt-out information, for as long as reasonably necessary to operate the messaging program, comply with legal obligations, resolve disputes, and enforce our agreements.",
    ],
  },
  {
    title: "6. Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational safeguards to protect SMS-related information. No transmission or storage method is completely secure, but we work to maintain appropriate protections.",
    ],
  },
  {
    title: "7. Your Choices",
    paragraphs: [
      "You may reply STOP at any time to opt out of receiving SMS messages.",
      "You may reply HELP at any time for help or more information.",
      "Message and data rates may apply depending on your mobile carrier and service plan.",
    ],
  },
  {
    title: "8. Contact Us",
    paragraphs: [
      "If you have questions about this SMS Privacy Policy or our SMS practices, contact us at:",
    ],
    contact: "info@neuroheart.ai",
  },
] as const;

export default function SmsPrivacyPage() {
  return (
    <SmsLegalPage
      title="SMS Privacy Policy"
      effectiveDate="Effective Date: July 7, 2026"
      company="NeuroHeart AI Labs LLC"
      website="https://neuroheart.ai"
      contactEmail="info@neuroheart.ai"
      intro={intro}
      sections={sections}
    />
  );
}
