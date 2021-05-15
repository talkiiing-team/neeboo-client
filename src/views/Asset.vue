<template>
  <div class="flex flex-col justify-start items-start">
    <h1 class="font-montserrat font-bold font-size text-5 leading-7 mb-6">{{ networth }} ₽</h1>
    <h2 class="m4 mb-12">Покемоны:</h2>
    <TokensList :tokens="tokens"/>
  </div>
</template>

<script>
import TokensList from '@/components/TokensList.vue';

import { ref } from 'vue';

export default {
  name: 'Asset',
  components: {
    TokensList,
  },
  setup() {
    const networth = ref(1951850);

    const tokens = ref([
      {
        name: 'Покемоны',
        networth: '141600',
      },
      {
        name: 'Шлёпа',
        networth: '990000',
      },
      {
        name: 'Шлёпа',
        networth: '990000',
      },
      {
        name: 'Шлёпа',
        networth: '990000',
      },
    ]);

    return {
      networth,
      tokens,
    };
  },
};
</script>
