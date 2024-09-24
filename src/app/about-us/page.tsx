"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AboutCTA from "@/components/AboutCTA";
import AboutHero from "@/components/AboutHero";
import AboutMissionAndVision from "@/components/AboutMissionAndVision";
import AboutTeam from "@/components/AboutTeam";
import AboutSDG from "@/components/AboutSDG";

export default function AboutUs() {
  return (
    <div className="w-full">
      <Navbar />
      <AboutHero />
      <AboutMissionAndVision />
      <AboutTeam />
      <AboutSDG />
      <AboutCTA />
      <Footer />
    </div>
  );
}
