// @ts-check
import { defineConfig } from 'astro/config';
import compress from 'vite-plugin-compression';

export default defineConfig({
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
