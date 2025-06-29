"use client";

import SectionTitle from "../Common/SectionTitle";
import featuresData from "./featuresData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icons";

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

        {/* Technology Grid */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Technologies I Work With
            </h3>
            <p className="text-body-color dark:text-body-color-dark max-w-2xl mx-auto">
              Here are the technologies and tools I use to bring ideas to life
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'react', 'nextjs', 'typescript', 'javascript', 'nodejs', 'python',
              'mongodb', 'postgresql', 'docker', 'aws', 'git', 'tailwind',
              'figma', 'vscode', 'github'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-white/30 backdrop-blur-sm border border-white/20 hover:bg-white/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                  <TechIcon 
                    name={tech} 
                    className="text-gray-600 dark:text-gray-400 group-hover:text-primary transition-colors duration-300" 
                    size={40}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400 mt-3 font-medium capitalize">
                    {tech}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesMotion; 