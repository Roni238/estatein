import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({})
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true,
    port: 8080,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/scss/_variables.scss" as *; @use "@/scss/global.scss" as *;`
      },
    },
    postcss: './postcss.config.js',
  },
  build: {
    cssCodeSplit: false,
  }
});
