/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "cdn.sanity.io",
      "images.unsplash.com",
      "as1.ftcdn.net",
      "as2.ftcdn.net",
      "as3.ftcdn.net",
      "as4.ftcdn.net",
      "as5.ftcdn.net",
      "as6.ftcdn.net",
      "as7.ftcdn.net",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
