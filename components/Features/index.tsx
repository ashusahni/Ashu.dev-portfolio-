"use client";

import dynamic from "next/dynamic";

const FeaturesMotion = dynamic(() => import("./FeaturesMotion"), { ssr: false });

const Features = () => {
  return <FeaturesMotion />;
};

export default Features;
