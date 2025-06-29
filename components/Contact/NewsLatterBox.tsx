"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TechIcon } from "@/components/ui/tech-icons";

const NewsLatterBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark dark:shadow-two dark:bg-opacity-40 sm:p-10 lg:px-12 xl:p-14"
    >
      <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <TechIcon name="mail" className="text-primary" size={32} />
        </div>
        <div className="text-center md:text-left">
          <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
            Let&apos;s Work Together
          </h3>
          <p className="text-body-color dark:text-body-color-dark">
            Ready to start your next project? Get in touch with Ashu Sahni
          </p>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex items-center space-x-3">
          <TechIcon name="mail" className="text-primary" size={20} />
          <span className="text-sm text-body-color dark:text-body-color-dark">
            ashu.sahni@example.com
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <TechIcon name="phone" className="text-primary" size={20} />
          <span className="text-sm text-body-color dark:text-body-color-dark">
            +1 (555) 123-4567
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <TechIcon name="map-pin" className="text-primary" size={20} />
          <span className="text-sm text-body-color dark:text-body-color-dark">
            Remote / Worldwide
          </span>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button asChild className="w-full sm:w-auto">
          <a href="mailto:ashu.sahni@example.com">
            Send Email
          </a>
        </Button>
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <a href="#contact">
            Contact Form
          </a>
        </Button>
      </div>
    </motion.div>
  );
};

export default NewsLatterBox;
