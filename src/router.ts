import Vue from 'vue';
import Router from 'vue-router';
import Main from './page/Main.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./page/Home.vue'),
    },
    {
      path: '/netRequest',
      name: 'netRequest',
      component: () => import('./page/NetRequest.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './page/About.vue'),
    },
    {
      path: '/lifeCycle',
      name: 'lifeCycle',
      component: () => import('./page/LifeCycle.vue'),
    },
  ],
});
