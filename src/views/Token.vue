<template>
  <div class="flex flex-col justify-between items-center h-full">
    <div class="flex flex-col justify-start items-start">
      <h1 class="font-montserrat font-bold font-size text-5 leading-7 mb-6">90000 ₽</h1>
      <h2 class="m4 mb-12">название ассета</h2>
      <p class="w-72 h-72 mb-12">изображение ассета</p>
      <div class="flex flex-row justify-start items-center flex-wrap">
        <h2 class="m4 mr-5">Токен:</h2>
        <p class="r2 mr-8">wefji3ergfregregopfjufj</p>
        <ClipboardIcon class="w-5 h-5" @click="copyToken"/>
      </div>
    </div>
    <VButton class="self-center justify-self-end mb-28">Продать</VButton>
  </div>
</template>

<script>
import { ClipboardIcon } from '@heroicons/vue/outline';

import VButton from '@/components/VButton.vue';

export default {
  name: 'Token',
  components: {
    ClipboardIcon,
    VButton,
  },
  setup() {
    const copyToken = () => console.warn('TODO: copy to clipboard');

    return {
      copyToken,
    };
  },
};
</script>
