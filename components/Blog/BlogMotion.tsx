"use client";

import SectionTitle from "../Common/SectionTitle";
import blogData from "./blogData";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icons";
import Image from "next/image";
import Link from "next/link";

const BlogMotion = () => {
  const projectTechStacks = {
    1: ['react', 'nodejs', 'openai'],
    2: ['nextjs', 'typescript', 'postgresql'],
    3: ['react', 'websocket', 'chartjs'],
    4: ['vuejs', 'python', 'd3js'],
    5: ['reactnative', 'firebase', 'redux'],
    6: ['react', 'weatherapi', 'geolocation']
  };

  return (
    <section
      id="projects"
      className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="My Recent Projects"
            paragraph="Here are some of the projects I've worked on recently, showcasing my skills in web development, design, and problem-solving."
            center
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800/50">
                <div className="relative overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <CardHeader className="p-6">
                  <CardTitle className="text-xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {blog.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-body-color dark:text-body-color-dark line-clamp-3">
                    {blog.paragraph}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-6 pt-0">
                  {/* Tech Stack */}
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                      Technologies Used:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {projectTechStacks[blog.id as keyof typeof projectTechStacks]?.map((tech) => (
                        <div
                          key={tech}
                          className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                        >
                          <TechIcon name={tech} size={12} />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button asChild size="sm" className="flex-1">
                      <Link href="#">
                        View Project
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#">
                        Source Code
                      </Link>
                    </Button>
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

export default BlogMotion; 