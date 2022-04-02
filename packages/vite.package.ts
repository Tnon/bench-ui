import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  build: {
    minify: false,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    lib: {
      entry: '',
      name: 'index',
      // fileName: (format) => format,
      formats: ['es'],
    },
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ['vue', 'vue-router'],
      input: { modal: '../packages/modal/index.vue' },
      output: {
        dir: path.resolve(__dirname, './dist/packages/_es'),
        entryFileNames: '[name].js',
      },
    },
    emptyOutDir: false,
  },
});
