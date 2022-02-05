module.exports = {
  reactStrictMode: true
};
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const { version } = require('./package.json');

const nextConfig = {
  optimizeFonts: false,
  publicRuntimeConfig: {
    checkZipCodeBaseUrl: process.env.CHECK_ZIP_CODE_URL
  },
  distDir: 'build/_next',
  reactStrictMode: true,
  generateBuildId: () => Promise.resolve(version)
};

module.exports = withBundleAnalyzer(nextConfig);
