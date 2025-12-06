import { useState } from "react";
import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import TaylorSection from "@/components/TaylorSection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import LeadFormModal from "@/components/LeadFormModal";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticlesBackground />
      
      <HeroSection />
      <TaylorSection onOpenForm={openForm} />
      <BenefitsSection onOpenForm={openForm} />
      <ContactSection />
      
      <LeadFormModal isOpen={isFormOpen} onClose={closeForm} />
    </main>
  );
};

export default Index;
