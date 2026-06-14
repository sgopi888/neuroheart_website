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
import FounderVision from "@/components/home/FounderVision";
import FAQ from "@/components/home/FAQ";
import Credits from "@/components/home/Credits";
import Newsletter from "@/components/home/Newsletter";
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
      <FounderVision />
      <FAQ />
      <Credits />
      <Newsletter />
      <FinalCTA />
      <Footer />
    </div>
  );
}
