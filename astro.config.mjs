// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'vite-plugin-compression';

export default defineConfig({
  site: 'https://portfolio.twowillowsdesign.com/',
  trailingSlash: "always",
  build: {
    assets: "assets",
    inlineStylesheets: `never`,
  },
  vite: {
    plugins: [compress()],
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
