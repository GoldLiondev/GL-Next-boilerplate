/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require("next-translate");

/** @type {import('next').NextConfig} */

// next.js configuration
module.exports = nextTranslate({
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
});
