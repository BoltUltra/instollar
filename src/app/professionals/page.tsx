"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProfessionalsHero from "@/components/ProfessionalsHero";
import ProfessionalsWhy from "@/components/ProfessionalsWhy";
import ProfessionalsBenefit from "@/components/ProfessionalsBenefit";
import ProfessionalsHow from "@/components/ProfessionalsHow";
import ProfessionalsTraining from "@/components/ProfessionalsTraining";
import Testimonials from "@/components/Testimonials";
import ProfessionalsCTA from "@/components/ProfessionalsCTA";

export default function Professionals() {
  return (
    <div className="w-full">
      <Navbar />
      <ProfessionalsHero />
      <ProfessionalsWhy />
      <ProfessionalsBenefit />
      <ProfessionalsHow />
      <ProfessionalsTraining />
      <Testimonials />
      <ProfessionalsCTA />
      <Footer />
    </div>
  );
}
