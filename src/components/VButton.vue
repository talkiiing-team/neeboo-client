<template>
  <button class="m4 flex flex-row justify-center items-center
  bg-red-500 rounded-full py-2.5 px-6 text-white"
  :class="type == 'disabled' ? 'disabled' : ''">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    type: {
      type: String,
      default: 'default',
    },
  },
};
</script>

<style scoped>
</style>
