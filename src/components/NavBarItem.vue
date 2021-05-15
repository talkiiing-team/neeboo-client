<template>
  <router-link
    :to="linkTo"
    class="
      cursor-pointer select-none transition-colors duration-200
      flex flex-col items-center gap-y-1
    "
    :class="{
      'text-gray-dark hover:text-gray-darkest': !selected,
      'text-red': selected,
    }"
  >
    <div class="w-6 h-6 p-0.5 rounded-full border-2"><slot name="icon"></slot></div>
    <div class="r1"><slot name="label"></slot></div>
  </router-link>
</template>

<script>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'NavBarItem',
  props: {
    linkTo: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute();
    const selected = computed(() => route.path.match(new RegExp(`^${props.linkTo}`)));
    return {
      selected,
    };
  },
};
</script>
