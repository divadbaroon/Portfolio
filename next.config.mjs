/** @type {import('next').NextConfig} */
const nextConfig = {
  // The old portfolio pages are gone; send any old links to the homepage.
  async redirects() {
    return [
      { source: "/classic", destination: "/", permanent: true },
      { source: "/dashboard", destination: "/", permanent: true },
      { source: "/dashboard/:path*", destination: "/", permanent: true },
      { source: "/ui/:path*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
