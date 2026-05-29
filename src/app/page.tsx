import { Navbar } from "@/components/prysmn/Navbar";
import Hero from "@/components/prysmn/Hero";
import { ProblemSection } from "@/components/prysmn/ProblemSection";
import Problem from "@/components/prysmn/Problem";
import { ServicesSection } from "@/components/prysmn/ServicesSection";
import SearchSimulation from "@/components/prysmn/SearchSimulation";
import CostCounter from "@/components/prysmn/CostCounter";
import { ResultsSection } from "@/components/prysmn/ResultsSection";
import Outcomes from "@/components/prysmn/Outcomes";
import TheProcess from "@/components/prysmn/TheProcess";
import Credibility from "@/components/prysmn/Credibility";
import SocialProof from "@/components/prysmn/SocialProof";
import TheAudit from "@/components/prysmn/TheAudit";
import LeadForm from "@/components/prysmn/LeadForm";
import FAQ from "@/components/prysmn/FAQ";
import Footer from "@/components/prysmn/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <ProblemSection />
      <Problem />
      <SearchSimulation />
      <ServicesSection />
      <CostCounter />
      <ResultsSection />
      <Outcomes />
      <TheProcess />
      <Credibility />
      <SocialProof />
      <TheAudit />
      <LeadForm />
      <FAQ />
      <Footer />
    </main>
  );
}
