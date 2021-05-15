<template>
  <VSelect :options="selectOptions" v-model="selected"></VSelect>
  <VInput placeholder="Абоба"/>
  <VButton tag="button">Вход</VButton>
</template>

<script>
import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';
import { ref } from 'vue';

export default {
  name: 'Home',
  components: {
    VButton,
    VInput,
    VSelect,
  },
  setup() {
    const selectOptions = [{
      display: 'ABOBA',
      value: 'big_aboba',
    },
    {
      display: 'абоба',
      value: 'russian_aboba',
    }];
    const selected = ref('russian_aboba');
    return {
      selectOptions,
      selected,
    };
  },
};
</script>
