const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");

// module.exports = {
//   images: {
//     deviceSizes: [40, 640, 750, 828, 1080, 1200, 1920, 2048],
//     domains: ["contentpanel.xyz"],
//   },
//   webpack(config) {
//     return config;
//   },
// };

const nextConfig = {
  images: {
    deviceSizes: [40, 640, 750, 828, 1080, 1200, 1920, 2048],
    domains: ["contentpanel.xyz"],
  },
  // webpack: (config) => {
  //   // modify the `config` here

  //   return config;
  // },
};

module.exports = withPlugins([
  [
    optimizedImages,
    {
      mozjpeg: {
        quality: 75,
      },
      optipng: false,
      pngquant: {
        speed: 4,
        quality: [0.6, 0.8],
      },
      responsive: {
        sizes: [320, 640, 960, 1200, 1440, 2000],
        placeholder: true,
        placeholderSize: 20,
      },
    },
  ],
  nextConfig,
]);

// module.exports = withPlugins(
//   [
//     [
//       optimizedImages,
//       {
//         // these are the default values so you don't have to provide them if they are good enough for your use-case.
//         // but you can overwrite them here with any valid value you want.
//         inlineImageLimit: 8192,
//         imagesFolder: "images",
//         imagesName: "[name]-[hash].[ext]",
//         handleImages: ["jpeg", "png", "svg", "webp", "gif"],
//         removeOriginalExtension: false,
//         optimizeImages: true,
//         optimizeImagesInDev: false,
//         mozjpeg: {
//           quality: 80,
//         },
//         optipng: {
//           optimizationLevel: 3,
//         },
//         pngquant: false,
//         gifsicle: {
//           interlaced: true,
//           optimizationLevel: 3,
//         },
//         svgo: {
//           // enable/disable svgo plugins here
//         },
//         webp: {
//           preset: "default",
//           quality: 75,
//         },
//       },
//     ],
//   ],
//   nextConfig
// );
