<template>
  <input
    :type="type"
    :placeholder="placeholder"
    @input="handleInput"
    class="
      rounded-full border-box px-5 py-2.5 border-gray-light border-1 outline-none r2 text-black
      placeholder:text-gray-light hover:border-gray-darker transition-colors duration-200
    "
  />
</template>

<script>
export default {
  name: 'VInput',
  props: {
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
    modelValue: {
      type: String,
    },
  },
  setup(_, { emit }) {
    const handleInput = (event) => {
      const { value } = event.target;
      emit('update:modelValue', value);
    };
    return {
      handleInput,
    };
  },
};
</script>
