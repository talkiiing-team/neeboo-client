import { createRouter, createWebHistory } from 'vue-router';
import store, { actionsMap } from '@/store';
import { computed } from 'vue';

import Home from '@/views/Home.vue';
import SignIn from '@/views/SignIn.vue';
import Profile from '@/views/Profile.vue';
import SignUp from '@/views/SignUp.vue';
import Wallet from '@/views/Wallet.vue';
import Requests from '@/views/Requests.vue';
import Tokens from '@/views/Tokens.vue';
import Token from '@/views/Token.vue';
import SellingToken from '@/views/SellingToken.vue';
import Account from '@/views/Account.vue';

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
  {
    path: '/wallet',
    name: 'Wallet',
    component: Wallet,
    meta: {
      auth: types.requiresAuth,
    },
  },
  {
    path: '/requests',
    name: 'Requests',
    component: Requests,
    meta: {
      auth: types.requiresAuth,
    },
  },
  {
    path: '/wallet/:id',
    name: 'Tokens',
    component: Tokens,
    meta: {
      auth: types.requiresAuth,
    },
  },
  {
    path: '/wallet/token/:id',
    name: 'Token',
    component: Token,
    meta: {
      auth: types.requiresAuth,
    },
  },
  {
    path: '/wallet/sellToken/:id',
    name: 'SellingToken',
    component: SellingToken,
    meta: {
      auth: types.requiresAuth,
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: Account,
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
      return next('/wallet');
    }
    return next();
  }

  return next();
});

export default router;
