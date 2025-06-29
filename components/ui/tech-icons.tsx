"use client";
import { cn } from "@/lib/utils";
import { 
  IconBrandReact, 
  IconBrandNextjs, 
  IconBrandTypescript, 
  IconBrandJavascript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandMongodb,
  IconBrandDocker,
  IconBrandAws,
  IconBrandGit,
  IconBrandTailwind,
  IconBrandFigma,
  IconBrandVscode,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandVue,
  IconBrandFirebase,
  IconBrandRedux,
  IconMail,
  IconPhone,
  IconMapPin,
  IconCode,
  IconDatabase,
  IconServer,
  IconPalette,
  IconTools,
  IconBrain,
  IconChartBar,
  IconCloud,
  IconDeviceMobile,
  IconLocation,
  IconApi
} from "@tabler/icons-react";

const techIcons = {
  react: IconBrandReact,
  nextjs: IconBrandNextjs,
  typescript: IconBrandTypescript,
  javascript: IconBrandJavascript,
  nodejs: IconBrandNodejs,
  python: IconBrandPython,
  mongodb: IconBrandMongodb,
  postgresql: IconDatabase,
  docker: IconBrandDocker,
  aws: IconBrandAws,
  git: IconBrandGit,
  tailwind: IconBrandTailwind,
  figma: IconBrandFigma,
  vscode: IconBrandVscode,
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  twitter: IconBrandTwitter,
  vuejs: IconBrandVue,
  firebase: IconBrandFirebase,
  redux: IconBrandRedux,
  email: IconMail,
  phone: IconPhone,
  location: IconMapPin,
  // New technology icons
  openai: IconBrain,
  websocket: IconApi,
  chartjs: IconChartBar,
  d3js: IconChartBar,
  reactnative: IconDeviceMobile,
  weatherapi: IconCloud,
  geolocation: IconLocation,
  // Fallback icons for missing ones
  code: IconCode,
  database: IconDatabase,
  server: IconServer,
  design: IconPalette,
  tools: IconTools
};

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const TechIcon = ({ name, className, size = 24 }: TechIconProps) => {
  const IconComponent = techIcons[name as keyof typeof techIcons];
  
  if (!IconComponent) {
    // Fallback to a generic icon if the specific one doesn't exist
    console.warn(`Icon "${name}" not found, using fallback`);
    return <IconCode className={cn("text-current", className)} size={size} />;
  }
  
  return <IconComponent className={cn("text-current", className)} size={size} />;
};

export const TechIconGrid = ({ 
  technologies, 
  className 
}: { 
  technologies: string[];
  className?: string;
}) => {
  return (
    <div className={cn("grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4", className)}>
      {technologies.map((tech) => (
        <div
          key={tech}
          className="flex flex-col items-center justify-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
        >
          <TechIcon 
            name={tech} 
            className="text-gray-400 group-hover:text-primary transition-colors duration-300" 
            size={32}
          />
          <span className="text-xs text-gray-500 mt-2 capitalize">
            {tech}
          </span>
        </div>
      ))}
    </div>
  );
}; 