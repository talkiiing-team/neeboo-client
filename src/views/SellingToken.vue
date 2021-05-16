<template>
  <div class="flex flex-col justify-between items-center h-full w-full">
    <div class="flex flex-col justify-start items-start w-full">
      <h2 class="m4 mb-12">Название ассета</h2>
      <p class="w-28 h-28 mb-12">Изображение ассета</p>
      <div class="flex flex-row justify-start items-center flex-wrap pb-9">
        <h2 class="m4 mr-5">Токен:</h2>
        <p class="r2 mr-8">wefji3ergfregregopfjufj</p>
        <ClipboardIcon class="w-5 h-5" @click="copyToken"/>
      </div>
      <p class="r2 mb-4">Введите минимальную сумму продажи</p>
      <VInput class="w-full" :placeholder="'90000'" v-model="price"/>
    </div>
    <VButton class="self-center justify-self-end mb-28" @click="sellToken">Продать</VButton>
  </div>
</template>

<script>
import { ref } from 'vue';

import { ClipboardIcon } from '@heroicons/vue/outline';

import VButton from '@/components/VButton.vue';
import VInput from '@/components/VInput.vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Token',
  components: {
    ClipboardIcon,
    VButton,
    VInput,
  },
  setup() {
    const router = useRouter();

    const tokenId = router.currentRoute.value.params.id;

    const price = ref(90000);

    const copyToken = () => console.warn('TODO: copy to clipboard');
    const sellToken = () => {
      console.log(`id ${tokenId} price ${price.value}`);
    };

    return {
      copyToken,
      price,
      sellToken,
    };
  },
};
</script>
