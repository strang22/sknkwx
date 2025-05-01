/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // We'll restrict this later when we have specific image sources
      },
    ],
  },
  // Enable static exports if needed
  // output: 'export',
  
  // Environment-specific settings
  env: {
    SITE_URL: process.env.SITE_URL || 'http://localhost:3000',
  },

  // Build optimization
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,

  // Configure headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
