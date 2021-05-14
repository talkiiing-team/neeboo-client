<template>
  <button class="font-montserrat m4"
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
