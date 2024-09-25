"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompanyHero from "@/components/CompanyHero";
import CompanyServices from "@/components/CompanyServices";
import CompanyWhy from "@/components/CompanyWhy";
import CompanyWho from "@/components/CompanyWho";
import CompanyHow from "@/components/CompanyHow";
import CompanyCTA from "@/components/CompanyCTA";

export default function Company() {
  return (
    <div className="w-full">
      <Navbar />
      <CompanyHero />
      <CompanyServices />
      <CompanyWhy />
      <CompanyWho />
      <CompanyHow />
      <CompanyCTA />
      <Footer />
    </div>
  );
}
