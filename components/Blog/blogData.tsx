import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    paragraph:
      "A real-time chat application with AI-powered responses, built using React, Node.js, and OpenAI API. Features include message history, user authentication, and intelligent conversation flow.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
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
