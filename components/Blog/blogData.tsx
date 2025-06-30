import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "AI-Powered Chat Application",
    paragraph:
      "A real-time chat application with AI-powered responses, built using React, Node.js, and OpenAI API. Features include message history, user authentication, and intelligent conversation flow.",
    image: "https://as1.ftcdn.net/v2/jpg/15/30/94/44/1000_F_1530944468_C7G6AtjzhzxCDTuRjMVUVhu7OrxyMJUd.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-01.png",
      designation: "Full Stack Developer",
    },
    tags: ["React", "Node.js", "OpenAI API"],
    publishDate: "2024",
    projectLink: "https://www.advogueai.org/",
    sourceCode: "https://github.com/ashusahni/AdVogue-Ai"
  },


  {
    id: 5,
    title: "Medical Track",
    paragraph:
      "A full-featured medical track for hospitals with patient management, appointment scheduling, and detailed reporting. Built with React Native for cross-platform compatibility.",
    image: "https://as1.ftcdn.net/v2/jpg/02/70/84/80/1000_F_270848023_U18xSCV3UMeqKiNgvpGmXPQMj0chqu4B.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-02.png",
      designation: "Full Stack Developer",
    },
    tags: ["React Native", "Firebase", "Redux"],
    publishDate: "2024",
    projectLink: "https://example.com/project5",
    sourceCode: "https://github.com/example/project5"
  },

  {
    id: 2,
    title: "E-Learning Platform",
    paragraph:
      "A comprehensive e-learning platform with video streaming, progress tracking, and interactive quizzes. Built with Next.js, TypeScript, and PostgreSQL for scalable performance.",
    image: "https://as2.ftcdn.net/v2/jpg/15/51/14/77/1000_F_1551147761_NsoBV3sViNktvfHU6D7UfYGIqYJ9CPgS.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-02.png",
      designation: "Full Stack Developer",
    },
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    publishDate: "2024",
    projectLink: "https://example.com/project2",
    sourceCode: "https://github.com/example/project2"
  },
  {
    id: 3,
    title: "Crypto Trading Dashboard",
    paragraph:
      "A real-time cryptocurrency trading dashboard with live price feeds, portfolio tracking, and trading alerts. Features responsive design and WebSocket integration for live data updates.",
    image: "https://as2.ftcdn.net/v2/jpg/11/27/70/37/1000_F_1127703721_DgkEIYBoQrBIdycnY3asOfS3kmJiCmWg.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-03.png",
      designation: "Full Stack Developer",
    },
    tags: ["React", "WebSocket", "Chart.js"],
    publishDate: "2024",
    projectLink: "https://example.com/project3",
    sourceCode: "https://github.com/example/project3"
  },
  {
    id: 4,
    title: "Social Media Analytics Tool",
    paragraph:
      "A comprehensive analytics platform for social media management with data visualization, automated reporting, and multi-platform integration including Instagram, Twitter, and LinkedIn.",
    image: "https://as1.ftcdn.net/v2/jpg/15/35/70/08/1000_F_1535700870_ClVbMBN1t757Kj4D39YeDWTeyPwkppmf.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-01.png",
      designation: "Full Stack Developer",
    },
    tags: ["Vue.js", "Python", "D3.js"],
    publishDate: "2024",
    projectLink: "https://example.com/project4",
    sourceCode: "https://github.com/example/project4"
  },
  
  {
    id: 6,
    title: "Trading bot",
    paragraph:
      "A trading bot that uses machine learning to predict stock prices and make trades.",
    image: "https://as2.ftcdn.net/v2/jpg/14/27/69/91/1000_F_1427699172_RsEMpuvPM0RZdQdR1GiSiu7bpQR2HUsB.jpg",
    author: {
      name: "Ashu Sahni",
      image: "/images/blog/author-03.png",
      designation: "Full Stack Developer",
    },
    tags: ["React", "Weather API", "Geolocation"],
    publishDate: "2024",
    projectLink: "https://example.com/project6",
    sourceCode: "https://github.com/example/project6"
  },
];
export default blogData;
