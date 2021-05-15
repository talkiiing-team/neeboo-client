<template>
  <div>
    <router-link to="/">Home</router-link>
  </div>
  <div class="container px-6">
    <router-view />
  </div>
  <NavBar />
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
};
</script>
