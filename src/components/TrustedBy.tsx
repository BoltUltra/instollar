import { useFetchHomePage } from "@/hooks/useFetchPage";
import React from "react";
import Marquee from "react-fast-marquee";
import Loading from "./Loading";
import Image from "next/image";
import { urlFor } from "@/sanity/utils";

const TrustedBy = () => {
  const { homepage, loading, error } = useFetchHomePage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <section className="py-8">
      <h4 className="text-2xl text-center pb-8">We Are Trusted By</h4>
      <Marquee className="space-x-5">
        {homepage?.trustedBy.map((company) => (
          <div key={company._key}>
            <Image
              src={urlFor(company).url()}
              alt="company image"
              width={200}
              height={50}
              className="px-10"
            />
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TrustedBy;
