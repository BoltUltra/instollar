import React from "react";
import Loading from "./Loading";
import { useFetchHomePage } from "@/hooks/useFetchPage";

interface HomePage {
  ctaHeader: string;
  ctaAltText: string;
}

const CTA = () => {
  const { homepage, loading, error } = useFetchHomePage();

  // Add type annotation for homepage
  const homepageWithDefault: HomePage | null | undefined = homepage;

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <section className="cta py-24 md:pb-40 text-white">
      <div className="md:max-w-2xl mx-auto md:px-0 px-5 text-center">
        <h3 className="font-zilla md:text-[52px] text-3xl pb-4">
          {homepageWithDefault?.ctaHeader}
        </h3>
        <p className="md:text-lg mb-8">{homepageWithDefault?.ctaAltText}</p>
        <button className="bg-secondary text-black px-5 py-3 rounded-full md:text-base text-sm">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
