"use client";

import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const Video = () => {
  return (
    <section id="projects" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Featured Projects"
          paragraph="Here are some of my recent projects that showcase my skills in web development, design, and problem-solving."
          center
          mb="80px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto max-w-[770px] overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[77/40] items-center justify-center">
                <Image src="/images/video/video.jpg" alt="Featured Project" fill />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">E-Commerce Platform</h3>
                    <p className="mb-6 max-w-md mx-auto">
                      A full-stack e-commerce solution built with Next.js, Node.js, and MongoDB. 
                      Features include user authentication, payment processing, and admin dashboard.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Link
                        href="#"
                        className="bg-primary px-6 py-3 rounded-md text-white font-semibold hover:bg-primary/80 transition"
                      >
                        View Project
                      </Link>
                      <Link
                        href="#"
                        className="border border-white px-6 py-3 rounded-md text-white font-semibold hover:bg-white hover:text-black transition"
                      >
                        Source Code
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
