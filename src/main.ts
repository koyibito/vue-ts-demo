import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './config/rem'; // rem
import Component from 'vue-class-component';

Vue.config.productionTip = false;

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'beforeRouteUpdate',
]);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
