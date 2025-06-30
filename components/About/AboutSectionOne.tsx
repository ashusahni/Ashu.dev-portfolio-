"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TechIcon } from "@/components/ui/tech-icons";

const AboutSectionOne = () => {
  return (
    <>
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-[120px] lg:pb-[160px]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="mb-5 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                    About Me
                  </h2>
                  <p className="mb-9 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                    I&apos;m a  Full Stack Developer with 2+ years of experience building scalable, user-focused web applications using React, Node.js, and cloud platforms. I’m driven by clean code, performance, and delivering solutions that support business growth.


                  </p>
                  
                  <div className="mb-8 grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <TechIcon name="check" className="text-primary" size={20} />
                      </div>
                      <span className="text-sm font-medium text-black dark:text-white">2+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <TechIcon name="check" className="text-primary" size={20} />
                      </div>
                      <span className="text-sm font-medium text-black dark:text-white">20+ Projects Completed</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <TechIcon name="check" className="text-primary" size={20} />
                      </div>
                      <span className="text-sm font-medium text-black dark:text-white">Full Stack Expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <TechIcon name="check" className="text-primary" size={20} />
                      </div>
                      <span className="text-sm font-medium text-black dark:text-white">Cloud & DevOps</span>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="w-full px-4 lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative mx-auto max-w-[500px] lg:mr-0"
                >
                  <div className="relative z-10 mx-auto max-w-[500px] text-center">
                    <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-purple-600/20 p-8">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-lg"></div>
                      <div className="relative z-10">
                        <div className="mb-6 flex justify-center">
                          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white">
                            <TechIcon name="user" size={48} />
                          </div>
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                          Ashu Sahni
                        </h3>
                        <p className="mb-6 text-body-color dark:text-body-color-dark">
                          Full Stack Developer & Tech Enthusiast
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="font-semibold text-black dark:text-white">Location</p>
                            <p className="text-body-color dark:text-body-color-dark">Remote / Worldwide</p>
                          </div>
                          <div>
                            <p className="font-semibold text-black dark:text-white">Experience</p>
                            <p className="text-body-color dark:text-body-color-dark">2+ Years</p>
                          </div>
                          <div>
                            <p className="font-semibold text-black dark:text-white">Projects</p>
                            <p className="text-body-color dark:text-body-color-dark">20+ Completed</p>
                          </div>
                          <div>
                            <p className="font-semibold text-black dark:text-white">Availability</p>
                            <p className="text-body-color dark:text-body-color-dark">Open to Work</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionOne;
