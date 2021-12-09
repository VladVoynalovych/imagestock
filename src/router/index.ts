import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('../layouts/MainLayout/MainLayout.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
