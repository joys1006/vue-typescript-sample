import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/Home/Home.vue';
import AppHeader from '../common/AppHeader/AppHeader.vue';
import AppAside from '../common/AppAside/AppAside.vue';
import AppFooter from '../common/AppFooter/AppFooter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      Header: AppHeader,
      Aside: AppAside,
      Contents: Home,
      Footer: AppFooter
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
