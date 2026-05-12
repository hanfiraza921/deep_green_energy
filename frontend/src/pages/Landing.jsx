import { useState, useCallback } from "react";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import SubsidyGrid from "@/components/site/SubsidyGrid";
import KeyFeatures from "@/components/site/KeyFeatures";
import Services from "@/components/site/Services";
import PartnersMarquee from "@/components/site/PartnersMarquee";
import BiharBanner from "@/components/site/BiharBanner";
import LeadForm from "@/components/site/LeadForm";
import Footer from "@/components/site/Footer";
import EligibilityModal from "@/components/site/EligibilityModal";

export default function Landing() {
  const [eligibilityOpen, setEligibilityOpen] = useState(false);

  const scrollToContact = useCallback(() => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const openEligibility = useCallback(() => setEligibilityOpen(true), []);

  return (
    <main className="bg-white" data-testid="landing-page">
      <Header onApply={scrollToContact} />
      <Hero onCheckEligibility={openEligibility} onGetQuote={scrollToContact} />
      <SubsidyGrid onClaim={scrollToContact} />
      <KeyFeatures />
      <Services onApply={scrollToContact} />
      <PartnersMarquee />
      <BiharBanner onAction={scrollToContact} />
      <LeadForm />
      <Footer />
      <EligibilityModal open={eligibilityOpen} onOpenChange={setEligibilityOpen} />
    </main>
  );
}
