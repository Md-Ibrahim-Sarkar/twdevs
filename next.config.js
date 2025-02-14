/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["images.unsplash.com", "ik.imagekit.io"],
    unoptimized: true, // Static Export এর জন্য Image Optimization বন্ধ
  },
  eslint: {
    ignoreDuringBuilds: true,  // ESLint ইরর build এ ব্লক করবে না
  },
};

export default nextConfig;
