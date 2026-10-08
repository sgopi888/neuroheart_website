import type { Metadata } from "next";
import SmsLegalPage from "@/components/legal/SmsLegalPage";

export const metadata: Metadata = {
  title: {
    absolute: "SMS Terms and Conditions",
  },
  description:
    "SMS Terms and Conditions for NeuroHeart AI Labs LLC covering consent, message frequency, rates, help, and opt-out instructions.",
  alternates: {
    canonical: "/sms-terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const intro = [
  "These SMS Terms and Conditions apply to text messages sent by NeuroHeart AI Labs LLC, including messages sent on behalf of restaurants or businesses using our customer care and restaurant communication services.",
] as const;

const sections = [
  {
    title: "1. SMS Program Description",
    paragraphs: [
      "NeuroHeart AI Labs LLC may send SMS messages related to customer care, restaurant ordering assistance, catering inquiry follow-up, callback coordination, hours and location responses, and replies to customer questions.",
      "Messages may include:",
    ],
    bullets: [
      "Ordering assistance",
      "Catering inquiry follow-up",
      "Callback coordination",
      "Restaurant hours and location information",
      "Menu or service-related responses",
      "Customer support replies",
      "Opt-in, HELP, and STOP confirmation messages",
    ],
  },
  {
    title: "2. Opt-In Consent",
    paragraphs: [
      "By providing verbal consent during a call, texting an opt-in keyword such as START, ORDER, CATERING, or HELP, or otherwise requesting SMS follow-up, you agree to receive text messages from NeuroHeart AI Labs LLC related to your inquiry.",
      "Consent to receive SMS messages is not a condition of purchase.",
    ],
  },
  {
    title: "3. Message Frequency",
    paragraphs: [
      "Message frequency varies depending on your request, inquiry, or interaction with the restaurant or service. You may receive messages when you request ordering help, catering follow-up, callback support, or customer service assistance.",
    ],
  },
  {
    title: "4. Message and Data Rates",
    paragraphs: [
      "Message and data rates may apply depending on your mobile carrier and service plan.",
    ],
  },
  {
    title: "5. Help Instructions",
    paragraphs: [
      "Reply HELP at any time for help or more information.",
      "You may also contact us at info@neuroheart.ai.",
    ],
  },
  {
    title: "6. Opt-Out Instructions",
    paragraphs: [
      "Reply STOP at any time to opt out of receiving SMS messages.",
      "After you reply STOP, you may receive one final confirmation message confirming that you have been unsubscribed. After that, you will no longer receive SMS messages from this program unless you opt in again.",
    ],
  },
  {
    title: "7. Supported Carriers",
    paragraphs: [
      "SMS message delivery depends on your mobile carrier. Carriers are not liable for delayed or undelivered messages.",
    ],
  },
  {
    title: "8. Privacy",
    paragraphs: [
      "Your privacy is important to us.",
      "We do not sell, rent, or share mobile phone numbers or SMS opt-in consent information with third parties or affiliates for marketing or promotional purposes.",
    ],
  },
  {
    title: "9. Program Changes",
    paragraphs: [
      "NeuroHeart AI Labs LLC may modify or discontinue the SMS program at any time, with or without notice.",
    ],
  },
  {
    title: "10. Contact Us",
    paragraphs: [
      "For questions about these SMS Terms and Conditions, contact:",
      "NeuroHeart AI Labs LLC",
      "Website: https://neuroheart.ai",
    ],
    contact: "info@neuroheart.ai",
  },
] as const;

export default function SmsTermsPage() {
  return (
    <SmsLegalPage
      title="SMS Terms and Conditions"
      effectiveDate="Effective Date: July 7, 2026"
      company="NeuroHeart AI Labs LLC"
      website="https://neuroheart.ai"
      contactEmail="info@neuroheart.ai"
      intro={intro}
      sections={sections}
    />
  );
}
