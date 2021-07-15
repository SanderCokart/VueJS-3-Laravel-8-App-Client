import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import api from '@/plugins/api';

createApp(App)
.use(router)
.use(api)
.mount('#app');
