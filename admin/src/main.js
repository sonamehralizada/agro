import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import router from './routes/router';
import store from './store';

// plugin setup
Vue.use(DashboardPlugin);

new Vue({
  el: '#app',
  router,
  store, 
  render: h => h(App)
});
