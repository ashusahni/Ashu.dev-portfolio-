"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TechIcon } from "@/components/ui/tech-icons";

const AboutSectionTwo = () => {
  return (
    <>
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mx-auto max-w-[500px] lg:mr-0"
              >
                <div className="relative z-10 mx-auto max-w-[500px] text-center">
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-lg"></div>
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-500 text-white">
                          <TechIcon name="code" size={48} />
                        </div>
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-black dark:text-white">
                        My Development Approach
                      </h3>
                      <p className="mb-6 text-body-color dark:text-body-color-dark">
                        Clean code, scalable architecture, and user-centric design
                      </p>
                      <div className="space-y-4 text-sm">
                        <div className="flex items-center space-x-3">
                          <TechIcon name="check" className="text-green-500" size={16} />
                          <span className="text-body-color dark:text-body-color-dark">Modern Tech Stack</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <TechIcon name="check" className="text-green-500" size={16} />
                          <span className="text-body-color dark:text-body-color-dark">Performance Optimized</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <TechIcon name="check" className="text-green-500" size={16} />
                          <span className="text-body-color dark:text-body-color-dark">Mobile Responsive</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <TechIcon name="check" className="text-green-500" size={16} />
                          <span className="text-body-color dark:text-body-color-dark">SEO Friendly</span>
                        </div>
                      </div>
                    </div>
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
              >
                <h2 className="mb-5 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                  Why Choose Me?
                </h2>
                <p className="mb-9 text-base !leading-relaxed text-body-color sm:text-lg md:text-xl">
                  I bring a unique combination of technical expertise, creative problem-solving, and business acumen to every project. 
                  My goal is to not just build applications, but to create solutions that drive real business value.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TechIcon name="lightbulb" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                        Innovative Solutions
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark">
                        I stay updated with the latest technologies and best practices to deliver cutting-edge solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TechIcon name="clock" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                        Timely Delivery
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark">
                        I understand the importance of deadlines and ensure projects are delivered on time, every time.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TechIcon name="message" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                        Clear Communication
                      </h4>
                      <p className="text-body-color dark:text-body-color-dark">
                        I maintain transparent communication throughout the project lifecycle, keeping you informed at every step.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
