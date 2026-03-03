import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import SocialProof from "@/components/home/SocialProof";
import SciencePillars from "@/components/home/SciencePillars";
import FeaturesGrid from "@/components/home/FeaturesGrid";
import WearableIntegration from "@/components/home/WearableIntegration";
import BiometricPipeline from "@/components/home/BiometricPipeline";
import HowItWorks from "@/components/home/HowItWorks";
import Comparison from "@/components/home/Comparison";
import WellnessTools from "@/components/home/WellnessTools";
import AISolutions from "@/components/home/AISolutions";
import DailyUseCases from "@/components/home/DailyUseCases";
import Testimonials from "@/components/home/Testimonials";
import SetupCards from "@/components/home/SetupCards";
import Integrations from "@/components/home/Integrations";
import Skills from "@/components/home/Skills";
import FounderVision from "@/components/home/FounderVision";
import FAQ from "@/components/home/FAQ";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navbar />
      <Hero />
      <SocialProof />
      <SciencePillars />
      <FeaturesGrid />
      <WearableIntegration />
      <BiometricPipeline />
      <HowItWorks />
      <Comparison />
      <WellnessTools />
      <AISolutions />
      <DailyUseCases />
      <Testimonials />
      <SetupCards />
      <Integrations />
      <Skills />
      <FounderVision />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
