module.exports = {
  webpack: (config) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
    const HtmlWebpackPlugin = require("html-webpack-plugin");

    config.plugins.push(new HtmlWebpackPlugin());
    config.plugins.push(new FaviconsWebpackPlugin("./logo.png"));

    // Important: return the modified config
    return config;
  },
  images: {
    deviceSizes: [80, 640, 750, 828, 1080, 1200, 1920, 2048],

    domains: ["contentpanel.xyz"],
  },
};
