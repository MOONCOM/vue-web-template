import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './config/index';
import './utils';
import '@/styles/public.scss';

const setting = require('./settings');

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  data: {
    ...setting,
  },
  render: (h) => h(App),
}).$mount('#app');
