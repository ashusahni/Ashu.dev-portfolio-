"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TechIcon } from "@/components/ui/tech-icons";
import testimonialData from "./testimonialData";

const Testimonials = () => {
  return (
    <section id="testimonials" className="relative z-10 bg-gray-light py-16 dark:bg-gray-dark md:py-20 lg:py-28">
      <div className="container">
        <div className="mb-16 flex w-full max-w-[570px] flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
              What Clients Say
            </h2>
            <p className="text-base !leading-relaxed text-body-color md:text-lg">
              Don&apos;t just take my word for it - hear from some of the amazing clients I&apos;ve had the pleasure of working with.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <TechIcon name="star" className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                  
                  <p className="mb-6 text-body-color dark:text-body-color-dark">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <TechIcon
                          key={i}
                          name="star"
                          className="text-yellow-400"
                          size={16}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.star}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
