/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Removed the "/*"
        port: "", // Changed "**" to empty string (standard for default ports)
        pathname: "/**", // Ensure this is /** to match all paths
      },
    ],
  },
};

export default nextConfig;
