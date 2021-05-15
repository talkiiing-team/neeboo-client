import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import Profile from '@/views/Profile.vue';
import store, { actionsMap } from '@/store';
import { computed } from 'vue';

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

router.beforeEach(async (to, from, next) => {
  const user = computed(() => store.state.user);
  const attemptToAuthorize = () => store.dispatch(actionsMap.attemptToAuthenticate);

  if (to.meta.auth === types.requiresAuth) {
    if (!user.value) {
      await attemptToAuthorize();
    }
    if (!user.value) {
      return next('/');
    }
    return next();
  }

  if (to.meta.auth === types.requiresNotAuth) {
    await attemptToAuthorize();
    if (user.value) {
      return next('/profile');
    }
    return next();
  }

  return next();
});

export default router;
