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
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=128&q=80&facepad=2" alt="Ashu Sahni" className="object-cover w-12 h-12 rounded-full" />
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
      
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div className="flex items-center space-x-2">
          <TechIcon name="mail" className="text-primary" size={20} />
          <span className="text-sm text-body-color dark:text-body-color-dark break-all">
            ashusahni833@gmail.com
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <TechIcon name="phone" className="text-primary" size={20} />
          <span className="text-sm text-body-color dark:text-body-color-dark">
            9582099846
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <TechIcon name="map-pin" className="text-primary" size={20} />
          <span className="text-sm text-body-color dark:text-body-color-dark">
            Remote / Worldwide
          </span>
        </div>
      </div>
      
      <div className="mt-8 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button asChild className="w-full sm:w-auto">
          <a href="mailto:ashusahni833@gmail.com">
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
