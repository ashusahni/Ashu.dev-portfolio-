"use client";

import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TechIcon } from "@/components/ui/tech-icons";

const PricingMotion = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const services = [
    {
      id: 1,
      title: "Web Development",
      // price: isMonthly ? "" : "",
      // duration: isMonthly ? "mo" : "yr",
      description: "Custom web applications built with modern technologies and best practices.",
      features: [
        "Custom Web Applications",
        "Responsive Design", 
        "SEO Optimization",
        "Performance Optimization",
        "Maintenance & Support",
        "Analytics Integration"
      ],
      icon: "react",
      popular: false
    },
    {
      id: 2,
      title: "Full Stack Solutions",
      // price: isMonthly ? "" : "",
      // duration: isMonthly ? "mo" : "yr",
      description: "Complete end-to-end solutions including frontend, backend, and database design.",
      features: [
        "Frontend Development",
        "Backend APIs",
        "Database Design",
        "Authentication & Security",
        "Deployment & Hosting",
        "Ongoing Support"
      ],
      icon: "nodejs",
      popular: true
    },
    {
      id: 3,
      title: "Consulting",
      // price: isMonthly ? "" : "",
      // duration: isMonthly ? "hr" : "mo",
      description: "Technical consulting and guidance for your development projects.",
      features: [
        "Technical Architecture",
        "Code Review",
        "Performance Audits",
        "Best Practices Guidance",
        "Team Training",
        "Project Management"
      ],
      icon: "vscode",
      popular: false
    }
  ];

  return (
    <section id="services" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Services I Offer"
            paragraph="I provide comprehensive web development services to help bring your ideas to life and grow your business."
            center
            width="665px"
          />
        </motion.div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`group relative h-full border-0 bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 dark:bg-gray-800/50 ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <TechIcon name={service.icon} size={32} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-black dark:text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed text-body-color dark:text-body-color-dark">
                    {service.description}
                  </CardDescription>
                  
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-primary">
                     
                    </span>
                    <span className="text-gray-600 dark:text-gray-400">
                     
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-body-color dark:text-body-color-dark">
                        <div className="mr-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <svg width="8" height="6" viewBox="0 0 8 6" className="fill-current">
                            <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full" size="lg">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default PricingMotion; 