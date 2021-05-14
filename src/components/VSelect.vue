<template>
  <div class="
    w-full
  ">
    <div class="
      flex flex-row justify-between items-center py-2.5 cursor-pointer
    " @click="toggle">
      <div class="r2">
        <template v-if="modelValue">{{ modelValue.display }}</template>
        <template v-else>{{ options[0].display }}</template>
      </div>
      <ChevronDownIcon class="h-4 w-4 transform transition-transform duration-300" :class="{
        'rotate-180': toggled,
      }"/>
    </div>
    <div v-if="toggled">
      <div v-for="option in options" :key="option">
        <div @click="select(option)" class="r2">{{ option.display }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { ChevronDownIcon } from '@heroicons/vue/outline';

export default {
  name: 'VSelect',
  components: {
    ChevronDownIcon,
  },
  props: {
    options: {
      // [{ display: 'Дисплей Нейм', value: 'code_value' }]
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
    },
  },
  setup(_, { emit }) {
    const toggled = ref(false);

    const toggle = () => { toggled.value = !toggled.value; };
    const select = (option) => { emit('update:modelValue', option); };

    const handleInput = (e) => emit('update:modelValue', e.target.value);
    return {
      handleInput,
      toggle,
      toggled,
      select,
    };
  },
};
</script>
