<template>
  <div class="flex flex-col justify-start items-start">
    <h1 class="font-montserrat font-bold font-size text-5 leading-7 mb-6">{{ networth }} ₽</h1>
    <h2 class="m4 mb-12">Счета:</h2>
    <WalletsList :wallets="wallets"/>
  </div>
</template>

<script>
import { ref } from 'vue';

import WalletsList from '@/components/WalletsList.vue';
import {
  useState, stateMap, useActions, actionsMap,
} from '@/store';

export default {
  name: 'Wallet',
  components: {
    WalletsList,
  },
  setup() {
    const networth = ref(1951850);

    // const wallets = ref([
    //   {
    //     name: 'Покемоны',
    //     networth: '141600',
    //     count: 40,
    //     id: 1,
    //   },
    //   {
    //     name: 'Шлёпа',
    //     networth: '990000',
    //     count: 40,
    //     id: 2,
    //   },
    // ]);

    const { wallets } = useState([stateMap.wallets]);
    const { fetchWallets } = useActions([actionsMap.fetchWallets]);
    fetchWallets();

    return {
      networth,
      wallets,
    };
  },
};
</script>
