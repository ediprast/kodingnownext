/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    // providing the locales supported by your application
    locales: ["en-US", "id-ID"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "id-ID",
  },
};

module.exports = nextConfig;
