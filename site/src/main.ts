import { createApp } from 'vue';
import App from './app.vue';
import { bcButton } from '../../packages/button';
const app = createApp(App);
app.use(bcButton as any).mount('#app');
