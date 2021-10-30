import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import AppHeader from '@/components/Layout/AppHeader/AppHeader.vue';
import AppAside from '@/components/Layout/AppAside/AppAside.vue';
import AppFooter from '@/components/Layout/AppFooter/AppFooter.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      Header: AppHeader,
      Aside: AppAside,
      Footer: AppFooter,
      Contents: Home
    }
  },
  {
    path: '/about',
    name: 'About',
    components: {
      Header: AppHeader,
      Aside: AppAside,
      Footer: AppFooter,
      Contents: () => import(/* webpackChunkName: "about" */ '@/pages/About/About.vue')
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
