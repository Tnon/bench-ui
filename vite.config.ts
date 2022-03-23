import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Markdown from 'vite-plugin-md';
export default defineConfig({
  plugins: [vue({ include: [/\.vue$/, /\.md$/] }), vueJsx(), Markdown()],
  build: {
    lib: {
      entry: 'packages/packages.ts',
      name: 'bench',
      fileName: 'bench',
      formats: ['es', 'umd'],
    },
  },
});
