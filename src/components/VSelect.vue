<template>
  <div class="
    w-full relative
  ">
    <div class="
      flex flex-row justify-between items-center py-2.5 cursor-pointer relative z-10
    " @click="toggle">
      <div class="r2">
        {{ selectedDisplay }}
      </div>
      <ChevronDownIcon class="h-4 w-4 transform transition-transform duration-300" :class="{
        'rotate-180': toggled,
      }"/>
    </div>
    <transition name="fade">
      <div
        v-if="toggled"
        class="
          -mx-6 grid grid-flow-row absolute top-0 left-0 pt-10 bg-white shadow-outer
        "
        :style="{
          width: 'calc(100% + 2.5rem)',
        }"
      >
        <div
          v-for="{ value, display } in trimmedList"
          :key="value"
          class="
            px-6 py-2.5 r2 select-none cursor-pointer hover:bg-gray-light
            transition-colors duration-200
          "
          @click="select(value)"
        >{{ display }}</div>
      </div>
    </transition>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
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
      // code_value
      type: String,
    },
  },
  setup(props, { emit }) {
    const toggled = ref(false);

    const toggle = () => { toggled.value = !toggled.value; };
    const select = (option) => {
      emit('update:modelValue', option);
      toggle();
    };
    const selectedDisplay = computed(
      () => props.options.find(({ value }) => value === props.modelValue).display,
    );
    const trimmedList = computed(
      () => props.options.filter(({ value }) => value !== props.modelValue),
    );

    return {
      toggle,
      toggled,
      select,
      selectedDisplay,
      trimmedList,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
