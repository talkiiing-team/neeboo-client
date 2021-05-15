import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import Profile from '@/views/Profile.vue';
import SignUp from '@/views/SignUp.vue';

export const types = {
  requiresAuth: 0,
  requiresNotAuth: 1,
};

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn,
    meta: {
      auth: types.requiresNotAuth,
    },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: {
      auth: types.requiresNotAuth,
    },
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      auth: types.requiresAuth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
