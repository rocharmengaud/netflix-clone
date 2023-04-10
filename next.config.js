/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_API_KEY: process.env.NEXT_APP_API_KEY,
    NEXT_APP_AUTH_DOMAIN: process.env.NEXT_APP_AUTH_DOMAIN,
    NEXT_APP_PROJECT_ID: process.env.NEXT_APP_PROJECT_ID,
    NEXT_APP_STORAGE_BUCKET: process.env.NEXT_APP_STORAGE_BUCKET,
    NEXT_APP_MESSAGING_SENDER_ID: process.env.NEXT_APP_MESSAGING_SENDER_ID,
    NEXT_APP_APP_ID: process.env.NEXT_APP_APP_ID,
  },
  images: {
    domains: ['image.tmdb.org', 'via.placeholder.com'],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
