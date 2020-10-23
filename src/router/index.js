import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Layout from '@/page-layout/layout.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login-page/login-page.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register-page/register-page.vue'),
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/home-page/home-page.vue'),
      },
    ],
  },
  {
    path: '/error',
    component: Layout,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404',
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true },
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true },
      },
    ],
  },
  {
    path: '*',
    redirect: '/error/404',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// 对路由进行处理
router.beforeEach((to, from, next) => {
  next();
});

// 每次页面刷新后进行vuex的重新赋值
const userInfo = localStorage.getItem('userInfo');
if (userInfo !== null) {
  store.commit('user/setUserInfo', JSON.parse(userInfo));
}

export default router;
