const nextConfig = {
  images: { unoptimized: true },
  trailingSlash: true,
  onDemandEntries: {
    maxInactiveAge: 1000,
    pagesBufferLength: 1,
  },
};

module.exports = nextConfig;
