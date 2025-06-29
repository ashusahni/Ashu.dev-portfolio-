"use client";

import dynamic from "next/dynamic";

const BlogMotion = dynamic(() => import("./BlogMotion"), { ssr: false });

const Blog = () => {
  return <BlogMotion />;
};

export default Blog;
