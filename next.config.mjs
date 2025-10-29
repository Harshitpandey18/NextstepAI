/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        port: "",
        pathname: "/**", // ✅ broader pattern — allows all paths
      },
    ],
    unoptimized: false, // ensure Vercel image optimization is active
  },
};

export default nextConfig;
