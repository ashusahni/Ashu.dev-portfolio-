"use client";

import NewsLatterBox from "./NewsLatterBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const ContactMotion = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-three dark:bg-gray-dark border-0 bg-white/50 backdrop-blur-sm">
                <CardHeader className="px-8 py-11 sm:p-[55px] lg:px-8 xl:p-[55px]">
                  <CardTitle className="text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-3xl xl:text-4xl">
                    Let&apos;s Work Together
                  </CardTitle>
                  <CardDescription className="text-base font-medium text-body-color">
                    I&apos;m always interested in new opportunities and exciting projects. Let&apos;s discuss how I can help bring your ideas to life.
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-8 pb-11 sm:px-[55px] lg:px-8 xl:px-[55px]">
                  <form>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="name"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Name
                          </label>
                          <input
                            type="text"
                            placeholder="Enter your name"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4 md:w-1/2">
                        <div className="mb-8">
                          <label
                            htmlFor="email"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Email
                          </label>
                          <input
                            type="email"
                            placeholder="Enter your email"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-lg border bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          />
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your Message
                          </label>
                          <textarea
                            name="message"
                            rows={5}
                            placeholder="Tell me about your project or opportunity"
                            className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-lg border bg-[#f8f8f8] px-6 py-4 text-base text-body-color outline-none focus:border-primary focus:shadow-input dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <Button className="shadow-submit dark:shadow-submit-dark rounded-lg bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90 w-full">
                          Send Message
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <NewsLatterBox />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMotion; 