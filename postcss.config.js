module.exports = {
  plugins: [
    "postcss-flexbugs-fixes",
    "tailwindcss",
    "postcss-100vh-fix",
    "autoprefixer",
    "cssnano",
    [
      "postcss-preset-env",
      {
        autoprefixer: {
          flexbox: "no-2009",
        },
        stage: 3,
        features: {
          "custom-properties": false,
        },
      },
    ],
  ],
};
