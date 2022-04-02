import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx(), Markdown()],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue',
        },
      },
    },
    lib: {
      entry: 'packages/packages.ts',
      name: 'bench',
      fileName: 'bench',
      formats: ['es', 'umd'],
    },
  },
});
