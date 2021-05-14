<template>
  <div>
    <VSelect :options="[
      {
        display: 'ABOBA',
        value: 'big_aboba',
      },
      {
        display: 'абоба',
        value: 'russian_aboba',
      },
    ]" :placeholder="'Выбери абобу'"></VSelect>
    <VInput placeholder="Абоба"/>
    <VButton tag="button">Вход</VButton>
  </div>
</template>

<script>
import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import VSelect from '@/components/VSelect.vue';

export default {
  name: 'Home',
  components: {
    VButton,
    VInput,
    VSelect,
  },
};
</script>
