// next.config.js
const nextConfig = {
  // Skip prerendering 404
  onDemandEntries: {
    maxInactiveAge: 1000,
    pagesBufferLength: 1,
  },
};

module.exports = nextConfig;