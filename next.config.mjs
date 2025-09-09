const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'amnyar.com' },
      { protocol: 'https', hostname: '**.amnyar.com' },
      { protocol: 'http', hostname: 'localhost' },
      { protocol: 'https', hostname: '**.your-strapi-domain.com' },
    ],
  },
}
export default nextConfig
