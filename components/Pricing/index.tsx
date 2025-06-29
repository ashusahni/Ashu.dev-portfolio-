"use client";

import dynamic from "next/dynamic";

const PricingMotion = dynamic(() => import("./PricingMotion"), { ssr: false });

const Pricing = () => {
  return <PricingMotion />;
};

export default Pricing;
