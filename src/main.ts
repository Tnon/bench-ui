import { createApp } from 'vue';
import App from './App.vue';

import BenchPlugin from '../packages';
import router from './router';
createApp(App).use(BenchPlugin).use(router).mount('#app');
