module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
            "@assets": "./src/assets",
            "@styles": "./src/styles",
            "@components": "./src/components",
          },
        },
      ],
    ],
  };
};
