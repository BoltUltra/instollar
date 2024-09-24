import React from "react";
import Loading from "./Loading";
import { useFetchAboutPage } from "@/hooks/useFetchPage";

const AboutCTA = () => {
  const { aboutPage, loading, error } = useFetchAboutPage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <section className="about-cta py-24 md:pb-40 text-white">
      <div className="md:max-w-2xl mx-auto md:px-0 px-5 text-center">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4">
          {aboutPage?.ctaHeader}
        </h3>
        <p className="md:text-lg mb-8">{aboutPage?.ctaAltText}</p>
        <button className="bg-secondary text-black px-5 py-3 rounded-full md:text-base text-sm">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default AboutCTA;
