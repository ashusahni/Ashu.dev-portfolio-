"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Sparkles } from "@/components/ui/sparkles";
import { TechIcon } from "@/components/ui/tech-icons";
import dynamic from "next/dynamic";

const HeroMotion = dynamic(() => import("./HeroMotion"), { ssr: false });

const Hero = () => {
  return <HeroMotion />;
};

export default Hero;
