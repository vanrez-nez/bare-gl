import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import Root from './Root.vue';

const router = new VueRouter(routes);
Vue.use(VueRouter);
global.app = new Vue({
  router,
  render: h => h(Root),
}).$mount('#app');
