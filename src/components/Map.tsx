import { useFetchHomePage } from "@/hooks/useFetchPage";
import Image from "next/image";
import React from "react";
import Loading from "./Loading";
import { urlFor } from "@/sanity/utils";

const Map = () => {
  const { homepage, loading, error } = useFetchHomePage();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <>
      <section className="md:py-24 py-10 bg-[#f1f7f6]">
        <h2 className="text-center md:text-[52px] text-3xl font-zilla md:pb-14 pb-10">
          Servicing all 36 States
        </h2>
        <div className="md:px-20 px-5 md:block hidden">
          <Image
            src={urlFor(homepage?.map).url()}
            width={1222}
            height={880}
            alt="map"
          />
        </div>
        <div className="md:px-20 px-5 md:hidden">
          <Image
            src={urlFor(homepage?.map).url()}
            width={322.52}
            height={260.21}
            alt="map"
            className="mx-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Map;
