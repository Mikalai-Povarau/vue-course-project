import { createApp, Plugin } from 'vue';
import App from './App.vue';
import router from './router';
import { log } from './plugin/LogPlugin';

import './assets/main.scss';
import store from './store';

createApp(App)
  .use(store)
  .use(router)
  .use(log as Plugin)
  .mount('#app');
