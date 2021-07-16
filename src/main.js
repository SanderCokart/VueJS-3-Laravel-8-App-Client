import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import api from '@/plugins/api';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

const icons = [
  faSun,
  faMoon
];

library.add(...icons);

createApp(App)
.use(router)
.use(api)
.component('FontAwesomeIcon', FontAwesomeIcon)
.mount('#app');
