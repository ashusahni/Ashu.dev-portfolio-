"use client";

import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icons";

const projectImages = [
  // Frontend Development
  "https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg", // backend/server
  // Backend Development
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80", // code on screen
  // UI/UX Design
  "https://images.unsplash.com/photo-1541462608143-67571c6738dd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // design
  // DevOps & Deployment
  "https://as1.ftcdn.net/jpg/05/22/18/66/1000_F_522186651_sjPyyCdVMZslnyIaM7HFRB2XQP22pFp2.jpg", // devops/cloud
  // Problem Solving
  "https://as1.ftcdn.net/v2/jpg/12/57/04/46/1000_F_1257044651_DTyvJC55SUrA8SLp4AlqYhZFMqFapJgh.jpg", // analytics/solving
  // Team Collaboration
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // team
];

const FeaturesMotion = () => {
  return (
    <section id="skills" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="My Skills & Expertise"
            paragraph="I specialize in modern web technologies and frameworks, delivering high-quality solutions that drive business growth and user engagement."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800/50">
                <div className="relative h-40 w-full mb-4 overflow-hidden rounded-t-md">
                  <img src={projectImages[index]} alt={feature.title} className="object-cover w-full h-full" />
                </div>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {feature.paragraph}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesMotion; 