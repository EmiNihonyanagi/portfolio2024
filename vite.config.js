// vite.config.js
import { defineConfig } from 'vite';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  plugins: [typescript()],
  // 他のViteの設定
  optimizeDeps: {
    include: ['vivus']
  }
});
