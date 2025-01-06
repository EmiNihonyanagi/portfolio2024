// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://portfolio.twowillowsdesign.com/',
  trailingSlash: "always",
  build: {
    assets: "assets",
    inlineStylesheets: `never`,
  },
  vite: {
    resolve: {
      alias: {
        "@assets": "/src/assets",
        jquery: "jquery",
      },
    },
    build: {
      assetsInlineLimit: 0,
      rollupOptions: {
        output: {
          entryFileNames: `assets/js/main.js`,
          assetFileNames: (assetInfo) => {
            const extType = assetInfo.name.split(".")[1];

            if (extType === "css") {
              return "assets/css/main.css";
            }

            return "assets/[name].[ext]";
          },
        },
      },
    },
  },
});
