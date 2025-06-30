"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icons";

const Footer = () => {
  return (
    <>
      <footer className="bg-white pt-16 dark:bg-gray-dark lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 max-w-[360px] lg:mb-16"
              >
                <Link href="/" className="mb-8 inline-block">
                  <div className="flex items-center space-x-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                      <TechIcon name="vscode" size={24} />
                    </div>
                    <span className="text-xl font-bold text-black dark:text-white">
                      Ashu Sahni
                    </span>
                  </div>
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                  Full Stack Developer passionate about creating innovative web solutions and turning ideas into reality.
                </p>
                <div className="flex items-center space-x-4">
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-[#2E3A47] dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                  >
                    <TechIcon name="github" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-[#2E3A47] dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                  >
                    <TechIcon name="linkedin" size={16} />
                  </Link>
                  <Link
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-md border border-[#E5E7EB] text-body-color transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white dark:border-[#2E3A47] dark:text-dark-6 dark:hover:border-primary dark:hover:bg-primary dark:hover:text-white"
                  >
                    <TechIcon name="twitter" size={16} />
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-1/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-12 lg:mb-16"
              >
                <h4 className="mb-9 text-xl font-semibold text-black dark:text-white">
                  Quick Links
                </h4>
                <ul>
                  <li>
                    <Link
                      href="/#about"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#skills"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      Skills
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#projects"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#contact"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-12 lg:mb-16"
              >
                <h4 className="mb-9 text-xl font-semibold text-black dark:text-white">
                  Services
                </h4>
                <ul>
                  <li>
                    <Link
                      href="/#services"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      Mobile Apps
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      UI/UX Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#services"
                      className="mb-4 inline-block text-base font-medium text-body-color transition duration-300 hover:text-primary"
                    >
                      Consulting
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            <div className="w-full px-4 md:w-2/3 lg:w-3/12 xl:w-4/12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-12 lg:mb-16"
              >
                <h4 className="mb-9 text-xl font-semibold text-black dark:text-white">
                  Contact Info
                </h4>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary dark:bg-opacity-10">
                    <TechIcon name="mail" size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                      Email Address
                    </h4>
                    <p className="text-base font-medium text-body-color">
                      ashutoshsahni833@gmail.com
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary dark:bg-opacity-10">
                    <TechIcon name="phone" size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                      Phone Number
                    </h4>
                    <p className="text-base font-medium text-body-color">
                      +91 982099746
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-primary bg-opacity-5 text-primary dark:bg-opacity-10">
                    <TechIcon name="map-pin" size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
                      Location
                    </h4>
                    <p className="text-base font-medium text-body-color">
                      Remote / Worldwide
                    </p>
                  </div>
                </div>
              </motion.div>
              </div>
            </div>
          </div>

        <div className="border-t border-opacity-40 py-8 dark:border-white/[.15]">
          <div className="container">
            <div className="-mx-4 flex flex-wrap items-center justify-between">
              <div className="w-full px-4 md:w-1/2">
                <div className="text-center md:text-left">
                  <p className="text-base text-body-color">
                    © 2025 Ashu Sahni. All rights reserved.
            </p>
          </div>
        </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="text-center md:text-right">
                  <p className="text-base text-body-color">
                    Designed and Developed by{" "}
                    <Link
                      href="#"
                      className="text-primary hover:underline"
                    >
                      Ashu Sahni
                    </Link>
                  </p>
                </div>
              </div>
            </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
