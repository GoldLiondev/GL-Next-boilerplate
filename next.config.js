/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */

// next.js configuration
const nextConfig = {
  reactStrictMode: true,
  // Add the domain for the global storage service that you will be using for images
  images: {
    domains: ["res.cloudinary.com"],
  },
  // Reference a variable that was defined in the .env file and make it available at Build Time
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.CONTENT_DELIVERY_GRAPHQL_API,
      },
    },
  },
};

module.exports = nextConfig;
