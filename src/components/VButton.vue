<template>
  <button
    class="
      m4 text-center px-6 py-2.5 bg-red rounded-full text-white cursor-pointer transition
      duration-150 select-none focus:outline-none shadow-none hover:shadow-inner
    "
    :disabled="disabled"
    :class="{
      'bg-gray-darker pointer-events-none': disabled,
    }"
    >
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'VButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    // variant: {
    //   type: String,
    //   default: 'light',
    //   validator: (v: string) => ['light', 'green', 'concave'].includes(v),
    // },
  },
};
</script>
