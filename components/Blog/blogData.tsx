import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    paragraph:
      "A real-time chat application with AI-powered responses, built using React, Node.js, and OpenAI API. Features include message history, user authentication, and intelligent conversation flow.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-01.png",
      designation: "Full Stack Developer",
    },
    tags: ["React", "Node.js", "OpenAI API"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "E-Learning Platform",
    paragraph:
      "A comprehensive e-learning platform with video streaming, progress tracking, and interactive quizzes. Built with Next.js, TypeScript, and PostgreSQL for scalable performance.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-02.png",
      designation: "Full Stack Developer",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Crypto Trading Dashboard",
    paragraph:
      "A real-time cryptocurrency trading dashboard with live price feeds, portfolio tracking, and trading alerts. Features responsive design and WebSocket integration for live data updates.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-03.png",
      designation: "Full Stack Developer",
    },
    tags: ["React", "WebSocket", "Chart.js"],
    publishDate: "2024",
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    paragraph:
      "A comprehensive analytics platform for social media management with data visualization, automated reporting, and multi-platform integration including Instagram, Twitter, and LinkedIn.",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-01.png",
      designation: "Full Stack Developer",
    },
    tags: ["Vue.js", "Python", "D3.js"],
    publishDate: "2024",
  },
  {
    id: 5,
    title: "Inventory Management System",
    paragraph:
      "A full-featured inventory management system for retail businesses with barcode scanning, automated reordering, and detailed reporting. Built with React Native for cross-platform compatibility.",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-02.png",
      designation: "Full Stack Developer",
    },
    tags: ["React Native", "Firebase", "Redux"],
    publishDate: "2024",
  },
  {
    id: 6,
    title: "Weather Forecast App",
    paragraph:
      "A beautiful weather application with location-based forecasts, 7-day predictions, and interactive weather maps. Features geolocation services and multiple weather data sources.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-03.png",
      designation: "Full Stack Developer",
    },
    tags: ["React", "Weather API", "Geolocation"],
    publishDate: "2024",
  },
];
export default blogData;
