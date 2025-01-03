// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'vite-plugin-compression';

export default defineConfig({
  site: 'https://portfolio.twowillowsdesign.com/',
  trailingSlash: "always",
  vite: {
    plugins: [compress()],
    resolve: {
      alias: {
        "@assets": "/src/assets",
        jquery: "jquery",
      },
    },
  },
});
