import { App, Plugin } from 'vue';
import { ButtonPlugin } from './Button';

const BenchPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
  },
};

export default BenchPlugin;

export * from './Button';
