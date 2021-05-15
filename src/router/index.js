import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
