<template>
  <div class="container px-4 pt-10">
    <router-view />
  </div>
  <NavBar v-if="showNavbar" />
</template>
<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import NavBar from '@/components/NavBar.vue';

import { types } from '@/router/index';

export default {
  name: 'App',
  components: { NavBar },
  setup() {
    const route = useRoute();
    const showNavbar = computed(() => route.meta.auth === types.requiresAuth);
    return {
      showNavbar,
    };
  },
};
</script>
