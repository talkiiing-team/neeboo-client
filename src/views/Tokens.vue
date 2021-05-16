<template>
  <div class="flex flex-col justify-start items-start">
    <h1 class="font-montserrat font-bold font-size text-5 leading-7 mb-6">{{ networth }} ₽</h1>
    <h2 class="m4 mb-12">{{current.label}}</h2>
    <TokensList :tokens="tokens"/>
  </div>
</template>

<script>
import TokensList from '@/components/TokensList.vue';

import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useState } from '@/store';

export default {
  name: 'Tokens',
  components: {
    TokensList,
  },
  setup() {
    const { query } = useRoute();
    const { _id } = query;
    const { wallets } = useState(['wallets']);
    // eslint-disable-next-line no-underscore-dangle
    const current = computed(() => wallets.find((v) => v._id === _id));
    const networth = ref(1951850);

    const tokens = ref([
      {
        name: 'Покемоны',
        networth: '141600',
        id: 1,
      },
      {
        name: 'Шлёпа',
        networth: '990000',
        id: 2,
      },
      {
        name: 'Шлёпа',
        networth: '990000',
        id: 3,
      },
      {
        name: 'Шлёпа',
        networth: '990000',
        id: 4,
      },
    ]);

    return {
      networth,
      tokens,
      current,
    };
  },
};
</script>
