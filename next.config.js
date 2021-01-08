module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    domains: ["contentpanel.xyz"],
  },
  webpack: (config) => {
    // modify the `config` here

    return config;
  },
};
